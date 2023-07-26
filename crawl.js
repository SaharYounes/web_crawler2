const { JSDOM } = require("jsdom");
 
function extractURL(htmlText,baseURL,urls){
    //const urls=[]
    const DOM = new JSDOM(htmlText);
    const linkElements = DOM.window.document.querySelectorAll("a");
    for (const linkElement of linkElements){
        if (linkElement.href[0]==="/"){
            //Relative URL
                newURL = normilizeUrl(`${baseURL}${linkElement.href}`)
                urls.push(newURL)
                console.log("added this url => " + newURL)
        }else {
            try{
            const URLObj = new URL(linkElement.href.toLowerCase())
            // Link has to be within the website
            const baseURLObj = new URL(baseURL)
            if (URLObj.hostname!==baseURLObj.hostname) {
                console.log("Irrelevant url => " + URLObj.href)
            }else{
            // previous line check validity of the URL
            newURL = normilizeUrl (linkElement.href)
            urls.push(newURL)
            console.log("added this url => " + newURL)
            }
            }catch(err){
                console.log("FAILED to add this url => \"" + linkElement.href.toLowerCase()+`" because of error: "${err.message}"`)
            } 
        }
    };
    //console.log(urls)
    return urls
}
function normilizeUrl(urlString){   
//if(urlString.length>0 && urlString[0]!=='/'){ // Absolute URL
    const URLObj = new URL(urlString.toLowerCase()) 
    hostPath = `${URLObj.hostname}${URLObj.pathname}`
    //Remove trailing slashes
    return removeTrailingSlahes(hostPath)
//----------------------COMMENT--------------------            //}else{    // Relative URL        // const URLObj = new URL(baseURL + urlString.toLowerCase()) // hostPath = `${URLObj.hostname}${URLObj.pathname}`//Remove trailing slashes // return removeTrailingSlahes(hostPath)// }
//----------------------COMMENT--------------------
}
function removeTrailingSlahes(txt){
    if (txt.length>0 && txt.slice(-1)==='/'){
        return txt.slice(0,-1)
    }
    return txt
}
async function getHTML(URL){
    const response = await fetch(URL)
    const htmltext = await response.text()
    //console.log(htmltext)
    return htmltext
}

module.exports = {
    normilizeUrl,
    extractURL,
    removeTrailingSlahes,
    getHTML
}