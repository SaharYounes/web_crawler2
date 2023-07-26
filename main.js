const  {extractURL,removeTrailingSlahes,crawlPage} = require ("./crawl.js")



function main(){
if (process.argv.length<3){
    console.log("No website provided")
    process.exit(1)
}
if (process.argv.length>3){
    console.log("Too many arguments provided")
    process.exit(1)
}
const baseURL = removeTrailingSlahes(process.argv[2])
crawlPage(url = baseURL,baseURL,urls={})
//console.log(url)

setTimeout(() => { 
    console.log("Time is up !")
    for (const [url, occurances] of Object.entries(urls)) {
    //console.log(`${url}: ${occurances}`);
    //const url = `${url}`
    //console.log(`${url}`);
    //console.log("actively crawling: "+key)
    crawlPage(url,baseURL,urls)
    }console.log(urls)
}, "500");
setTimeout(() => {
    console.log(urls);
  }, "2000");

}
main()