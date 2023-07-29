const  {normilizeUrl,removeTrailingSlahes,crawlPage} = require ("./crawl.js")



function main(){
if (process.argv.length<3){
    console.log("No website provided")
    process.exit(1)
}
if (process.argv.length>3){
    console.log("Too many arguments provided")
    process.exit(1)
}
const baseURL = removeTrailingSlahes(process.argv[2]).toLowerCase()
const urls={}
try{
    normilizeUrl(baseURL)
}catch(err){
    console.log(err.message)
    process.exit(1)
}
urls[baseURL]=0
crawlPage(url = baseURL,baseURL,urls)
//console.log(url)

// setTimeout(() => { 
//     console.log("Time is up !")
//     for (const [url, occurances] of Object.entries(urls)) {
//     crawlPage(url,baseURL,urls)
//     }console.log(urls)
// // }, "500");
// setTimeout(() => {
//     if (urls[baseURL]===0){
//         delete urls[baseURL]
//     }
//     //console.log(urls);
//     let allKeys=Object.keys(urls)
//     allKeys.sort()
//     let temp_obj = {};
//     for (let i = 0; i < allKeys.length; i++) {
//        temp_obj[allKeys[i]] = urls[allKeys[i]]
//     }
//     console.log(temp_obj)
// }, "00000");

process.on('exit',()=>{
    if (urls[baseURL]===0){
        delete urls[baseURL]
    }
    //console.log(urls);
    let allKeys=Object.keys(urls)
    allKeys.sort(
    //     (a,b)=>{
    //     if (urls[a]>urls[b]){
    //         return true
    //     }
    //     return false
    // }
    )
    let temp_obj = {};
    for (let i = 0; i < allKeys.length; i++) {
       temp_obj[allKeys[i]] = urls[allKeys[i]]
    }
    console.log(temp_obj)
})

}
main()