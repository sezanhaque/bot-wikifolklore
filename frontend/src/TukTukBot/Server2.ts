
type Country = string
type ID = number
type Article = {
    id : ID;
    title : string;
    wikidata : string;
    target : string
}
type Category = {
    id : ID;
    title : string;
    subcat?: boolean
}

type APIResponseSingle<T> = {
    success : true;
    data : T
}
type APIResponseMultiple<T> = {
    success : true;
    data : T[]
}
type User = {
    id : number;
    username : string;
    rights : number;
    created_at : string;
    article_count : number;
    category_count : number;
    task_count : number;
}
type TaskCreate = {
    home_wiki : string;
    target_wiki : string;
    country : Country;
    topic_id : string;
    categories : Category[],
    topic_data : Category[] 
}
type Task = {
    id: number,
    status: string,
    homewiki: string,
    categories: Array<string>,
    user: string,
    country: string,
    article_count: number
    category_count : number
    category_done : number
    last_category : string
}
type TaskResultFormat = "json" | "wikitext" | "csv"
type TaskResult = string | Article[]
type CountryEntry = {
    id : string;
    label : string;
    title : string;
}
const LANGUAGE_KEY = "tk-lang"
const COUNTRY_KEY = "tk-country"
class TukTukBot {
    static baseURL = new URL(window.location.origin);
    static languages : Object | null = null;
    static countries : Object | null= null;
    static async init(){
        if(!TukTukBot.languages || !TukTukBot.countries){
            if(!localStorage.getItem(LANGUAGE_KEY) || !localStorage.getItem(COUNTRY_KEY)){
                localStorage.setItem(COUNTRY_KEY, JSON.stringify(await fetch("/api/country").then(res => res.json()).then(res => res.data)))
                localStorage.setItem(LANGUAGE_KEY, JSON.stringify(await fetch("/api/language").then(res => res.json()).then(res => res.data)))
            }
            TukTukBot.languages = JSON.parse(localStorage.getItem(LANGUAGE_KEY) || "{}");
            TukTukBot.countries = JSON.parse(localStorage.getItem(COUNTRY_KEY) || "{}");
        }
        
    }
    static async addSubCategories(categories: Category[]) {
        var subcats:Category[] = []
        for (let cat of categories) {
            console.info("Adding subcategories for", cat.title)
            const url = new URL("api/subcat/" + cat.title, TukTukBot.baseURL);
            const response = await fetch(url.toString());
            const data: APIResponseMultiple<Category> = await response.json();
            subcats = subcats.concat(data.data);
            cat.subcat = false;
        }
        return subcats;
    }
    static async getCategories({country, topic} : {country : Country, topic : string}){
        const url = new URL(`api/topic/${topic.split("/")[0]}/${country}/categories`, TukTukBot.baseURL);
        const response = await fetch(url.toString());
        const responseData: APIResponseMultiple<Category> = await response.json();
        if (responseData.success) {
            return responseData.data
        } else {
            console.log("Error", responseData.data)
            return [] as Category[];
        }
    }
    static async submitTask(data : TaskCreate) {
        // Submit the task
        const url = new URL("api/task", TukTukBot.baseURL);
        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const responseData: APIResponseSingle<Task> = await response.json();
        if (responseData.success) {
            return responseData.data;
        } else {
            console.log("Error", responseData.data)
            return null
        }

    }
    static async fetchCountries(topic : string){
        const url = new URL("api/topic/" + topic, TukTukBot.baseURL);
        const response = await fetch(url.toString());
        const responseData: APIResponseMultiple<CountryEntry> = await response.json();
        if (responseData.success) {
            const rawData = responseData.data;
            const countries = rawData.map((country) => {
                return {
                    id : country.id.split("/")[1],
                    label : country.title
                }
            })
            return countries
        } else {
            console.log("Error", responseData.data)
            return [] as Country[];
        }
    }
    static async exportResult(taskID : Number, format: TaskResultFormat = "json") {
        const url = new URL(`api/task/${taskID}/export/` + format, TukTukBot.baseURL);
        const response = await fetch(url.toString());
        const data : APIResponseSingle<TaskResult> = await response.json();
        return data.data;
    }
    static async getTask(taskID: number) {
        const url = new URL("api/task/" + taskID, TukTukBot.baseURL);
        // console.log(taskID)
        const response = await fetch(url.toString());
        const responseData: APIResponseSingle<Task> = await response.json();
        if (responseData.success) {
            return responseData.data;
        } else {
            console.log("Error", responseData.data)
            return null
        }
    }
    static async getTasks() {
        const url = new URL("api/task", TukTukBot.baseURL);
        // console.log(taskID)
        const response = await fetch(url.toString());
        const responseData: APIResponseMultiple<Task> = await response.json();
        if (responseData.success) {
            return responseData.data;
        } else {
            console.log("Error", responseData.data)
            return null
        }
    }
    static async getMe(){
        const url = new URL("api/user/me", TukTukBot.baseURL);
        // console.log(taskID)
        const response = await fetch(url.toString());
        const responseData: APIResponseSingle<User> = await response.json();
        if (responseData.success) {
            return responseData.data;
        } else {
            console.log("Error", responseData.data)
            return null
        }
    }
    static async getCountryMap(){
        const url = new URL("api/country", TukTukBot.baseURL);
        const countries = await fetch(url).then(res => res.json())
        return countries.data
    }
    static searchCategory(callback : (data : Category[]) => void, setSearching : (searching : boolean) => void){
        let q = "";
        let queued = false;
        const interval = 1000;
        async function _search() {
            
            if(q == "") return callback([]);
            const url = new URL("https://en.wikipedia.org/w/api.php");
            const params = new URLSearchParams({
                "action": "query",
                "format": "json",
                "list": "prefixsearch",
                "formatversion": "2",
                "pssearch": q,
                "pslimit": "10",
                "psnamespace": "14",
                "origin": "*"
            })
            url.search = params.toString();
            const response = await fetch(url.toString());
            const data = await response.json();
            const categories = data.query.prefixsearch.map((cat : any) => {
                return {
                    id : cat.pageid,
                    title : cat.title
                }
            })
            queued = false;
            setSearching(false);
            return callback(categories);
        }
        return function(e : KeyboardEvent){
            setSearching(true)
            q = (e?.target as HTMLInputElement)?.value;
            if(queued == false){
                // Nothing is queued
                queued = true;
                setTimeout(_search, interval)
            } else {
                // Something is already queued
                console.log("Already queued")
            }
        }

    }
}
export default TukTukBot;