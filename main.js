const  {extractURL,extractURLsLoop,removeTrailingSlahes,getHTML} = require ("./crawl.js")

async function crawlPage(url,urls){
    console.log("Actively crawling: "+ url)
    const response = await fetch(url)
    const htmltext = await response.text()
    //console.log(htmltext)
    extractURL(htmltext,url,urls)
    console.log(urls)
    return urls
}

function main(){
if (process.argv.length<3){
    console.log("No website provided")
    process.exit(1)
}
if (process.argv.length>3){
    console.log("Too many arguments provided")
    process.exit(1)
}

let baseURLObj
try {
    baseURLObj = new URL(process.argv[2])
}catch(err){
    console.log("Invalid URL")
    return
}
//console.log(baseURLObj.href)
const baseURL = removeTrailingSlahes(baseURLObj.href)
crawlPage(baseURL,urls={})
    return   
}

main()