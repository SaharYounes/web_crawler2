const  {extractURL,removeTrailingSlahes} = require ("./crawl.js")
var baseURLObj
try {
    baseURLObj = new URL(process.argv[2])
}catch(err){
    console.log("Invalid URL\n this program will exit")
    return
}
const baseURL = baseURLObj.href

    //const response = await fetch(baseURL);
    //const urls=extractURL (response,baseURL,urls = [])
    const input = `
    <html>
        <body>
            <a href="http://heynode.com/tutorial/install-nodejs-locally-nvm"> 1: </a>
            <a href="http://heynode.com/tutorial/"> 2: </a>
            <a href="/Path/tutorial/"> 3: </a>
            <a href="(this is an invalid url)"> 4: </a>
        <body>
    </html>
    `
    const urls = extractURL (input,baseURL,U=[])
    console.log(urls)
    try{
        console.log(A)
    } catch (err){
        console.log(err.message)
    }