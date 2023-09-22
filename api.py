from requests import Session
import time
import sqlite3
from settings import *
from sql import *

sess = Session()
sess.headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Authorization" : f"Bearer {AUTH_TOKEN}"
}

# sqlite3 row factory
# sqlite3.Connection.row_factory = sqlite3.Row

URL = "https://en.wikipedia.org/w/api.php"

def _get_db() -> sqlite3.Connection:
    """
    A function to get the database connection
    Usually used as a context manager
    """
    conn = sqlite3.connect(DATABASE_NAME)
    conn.row_factory = sqlite3.Row
    return conn



def init_db():
    """
    A function to initialize the database.
    """
    with _get_db() as conn:
        conn.executescript(SQL_INIT)
        conn.commit()
    


def _export_to_wikitext(res):
    """
    Export the result set to wikitext
    """
    serial = 1
    content = """
{| class="wikitable sortable"
|-
! Serial No. !! English Title !! Wikidata !! Hindi Title !! Category 
|-
"""
    for row in res:
        content += f"\n|{serial} || [[:en:{row['title']}|]] || [[:wd:{row['wikidata']}|]] || [[:hi:{row['target']}|]] || [[:en:{row['category']}|]]\n|-"
        serial += 1
    content += "\n|}"
    return content



def export_to_csv(res):
    serial = 1
    result = ["serial,pageid,english_title,target,wikidata,category"]
    for pageid, task_id, title, target, wikidata, category, created_at in res:
        result.append(f"{serial},{pageid},{title},{target},{wikidata},{category}")
        serial += 1
        
    return "\n".join(result)

def get_task(task_id):
    with _get_db() as conn:
        res = conn.execute(SQL_GET_TASK, {
            "task_id": task_id
        }).fetchone()
        return res
def get_task_result(task_id, format='json'):
    with _get_db() as conn:
        res = conn.execute(SQL_GET_ARTICLES_BY_TASK_ID,{
            "task_id": task_id
        })
        if format == 'json':
            result = []
            for pageid, task_id, title, target, wikidata, category, created_at in res:
                result.append({
                    "pageid": pageid,
                    "task_id": task_id,
                    "title": title,
                    "target": target,
                    "wikidata": wikidata,
                    "category": category,
                    "created_at": created_at
                })
            return result
        elif format == 'csv':
            return export_to_csv(res)
        elif format == 'wikitext':
            return _export_to_wikitext(res)


#---------------------------- Task Related Functions ----------------------------


def _extract_page(task_id, category, pages):
    for page in pages:
        if "langlinks" not in page:
            wbentity = None
            if "wbentityusage" in page:
                for entity in page["wbentityusage"]:
                    if 'S' in page['wbentityusage'][entity]['aspects']:
                        wbentity = entity
                        break
            yield {
                    "task_id": task_id,
                    "pageid": page['pageid'],
                    "title": page['title'],
                    "target": "",
                    "wikidata": wbentity,
                    "category": category
            }

def _execute_task(task_id, cats):
    print("Executing Task", task_id)
    if type(cats) == str:
        cats = cats.split("|")
    cats = [_normalize_category_name(cat.strip()) for cat in cats]
    data = {
        "action": "query",
        "format": "json",
        "prop": "langlinks|wbentityusage",
        "wbeuaspect" : "S",
        "wbeulimit" : "max",
        "generator": "categorymembers",
        "formatversion": "2",
        "llprop": "langname",
        "lllang": "hi",
        "llinlanguagecode": "en",
        "lllimit": "max",
        "gcmprop": "title",
        "gcmnamespace": "0",
        "gcmtype": "page",
        "gcmlimit": "max"
    }
    for category in cats:
        data['gcmtitle'] = _normalize_category_name(category)
        has_continue = True
        while has_continue:
            try:
                res = sess.get(URL, params=data)
                res = res.json()
                print("Fetched", category)
                if "query"  in res:
                   with _get_db() as conn:
                        cur = conn.executemany(SQL_INSERT_ARTICLE, _extract_page(task_id, category, res["query"].get('pages', [])))
                        cur.execute(SQL_TASK_UPDATE_ARTICLE_COUNT, {
                            "task_id": task_id,
                            "new_added" : cur.rowcount
                        })
                        conn.commit()
                has_continue = "continue" in res
                if has_continue:
                    data.update(res['continue'])
                    print(f"{data.get('continue', 'None')} {data.get('gcmcontinue', None)} {data.get('wbeucontinue', None)}")
                    time.sleep(1)
            except Exception as e:
                print("%s" % e)
                with _get_db() as conn:
                    conn.execute("UPDATE `task` SET `status` = 'error' WHERE `id` = :task_id", {
                        "task_id": task_id
                    })
                    conn.commit()
    with _get_db() as conn:
        conn.execute("UPDATE `task` SET `status` = 'done' WHERE `id` = :task_id", {
            "task_id": task_id
        })
        conn.commit()
    print("Task Done", task_id)


def submit_task(topic_title, cats, home_wiki, country, target_wiki, executor):
    task_id = 0
    with _get_db() as conn:
        task = conn.execute(SQL_CREATE_TASK, {
            "status": "created",
            "topic_title": topic_title,
            "task_data": "|".join(cats),
            "home_wiki": home_wiki,
            "target_wiki": target_wiki,
            "country": country
        })
        conn.commit()
        task_id = task.lastrowid
    executor.submit(_execute_task, task_id, cats)
    return task_id



def get_topic_cats(topic_title):
    with _get_db() as conn:
        res = conn.execute(SQL_GET_CATEGORIES_BY_TOPIC_TITLE, {
            "topic_title": topic_title
        })
        return res.fetchall()
    





def _normalize_category_name(cat : str) -> str:
    if cat.startswith("Category:") or cat.startswith("category:") or cat.startswith("CATEGORY:"):
        cat = cat[9:]
    return "Category:" + cat





def fetch_subcats(cat : str) -> list:
    cat = _normalize_category_name(cat)
    data = {
        "action": "query",
        "format": "json",
        "list": "categorymembers",
        "formatversion": "2",
        "cmtitle": cat,
        "cmprop": "ids|title",
        "cmtype": "subcat",
        "cmlimit": "max"
    }
    has_continue = True
    result = []
    while has_continue:
        res = sess.get(URL, params=data)
        res = res.json()
        has_continue = "continue" in res
        if has_continue:
            data["cmcontinue"] = res["continue"]["cmcontinue"]
            data['continue'] = res["continue"]["continue"]
        else:
            data.pop("cmcontinue", None)
            data.pop("continue", None)
        for category in res["query"]["categorymembers"]:
            result.append({
                "pageid": category['pageid'],
                "title": category['title'],
                'subcat' : True
            })
        if has_continue:
            print("Sleeping")
            time.sleep(1)
    return result


