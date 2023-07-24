const jsdom = require("jsdom");
const { JSDOM } = jsdom;
function extractURL(htmlBody){
    const DOM = new JSDOM(htmlBody);
    
    const matches = DOM.window.document.querySelector("a").href;
    console.log(matches)
    return matches
}

function removeTrailingSlahes(txt){
    if (txt.length>0 && txt.slice(-1)==='/'){
        return txt.slice(0,-1)
    }
    return txt
}

function normilizeUrl(baseURL ,urlString){   
if(urlString.length>0 && urlString[0]!=='/'){
    // Absolute URL
    const URLObj = new URL(urlString.toLowerCase()) 
    hostPath = `${URLObj.hostname}${URLObj.pathname}`
    //Remove trailing slashes
    return removeTrailingSlahes(hostPath)
}else{
    // Relative URL    
    const URLObj = new URL(baseURL + urlString.toLowerCase()) 
    hostPath = `${URLObj.hostname}${URLObj.pathname}`
    //Remove trailing slashes 
    return removeTrailingSlahes(hostPath)
}
}

module.exports = {
    normilizeUrl,
    extractURL
}