const  {extractURL,removeTrailingSlahes,getHTML} = require ("./crawl.js")
var baseURLObj
try {
    baseURLObj = new URL(process.argv[2])
}catch(err){
    console.log("Invalid URL / No URL provided")
    return
}
console.log(baseURLObj.href)
const baseURL = removeTrailingSlahes(baseURLObj.href)
const htmltext = getHTML(baseURL).then((htmlOutPut)=>{
    const urls = extractURL (htmlOutPut,baseURL,U=[])
    console.log(urls)
})


    const input = `
    <html>
        <body>
            <a href="http://heynode.com/tutorial/install-nodejs-locally-nvm"> 1: </a>
            <a href="http://heynode.com/tutorial/"> 2: </a>
            <a href="/Path/tutorial/"> 3: </a>
            <a href="(this is an invalid url)"> 4: </a>
            <a href="https://www.quel-canape.fr/canape-maison-du-monde-brooke/"> 5: </a>
        <body>
    </html>
    `
    
    
