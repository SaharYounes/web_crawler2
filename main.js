const  {extractURL,extractURLsLoop,removeTrailingSlahes,getHTML} = require ("./crawl.js")
function main(){
if (process.argv.length<3){
    console.log("No website provided")
    process.exit(1)
}
if (process.argv.length>3){
    console.log("Too many arguments provided")
    process.exit(1)
}        
var baseURLObj
try {
    baseURLObj = new URL(process.argv[2])
}catch(err){
    console.log("Invalid URL")
    return
}
//console.log(baseURLObj.href)
const baseURL = removeTrailingSlahes(baseURLObj.href)
const urlsObj = {}
urlsObj[baseURL] = 0
console.log(urlsObj)
crawlPage()
//----------------function definition:-------------
function crawlPage(urlsObj){

    const url=baseURL // url should be the key from the object loop
    console.log("Actively crawling: "+ url)
    

    
    const htmltext = getHTML(url,urlsObj)
    .then((htmlOutPut)=>{ 
        console.log(urls)
        const urls = extractURL (htmlOutPut,baseURL,urls)
        return urls
    })
    return   
}
}

main()