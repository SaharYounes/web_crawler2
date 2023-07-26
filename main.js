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

let baseURLObj
try {
    baseURLObj = new URL(process.argv[2])
}catch(err){
    console.log("Invalid URL")
    return
}
//console.log(baseURLObj.href)
const baseURL = removeTrailingSlahes(baseURLObj.href)
crawlPage(url = baseURL,baseURL,urls={})
    return   
}

main()