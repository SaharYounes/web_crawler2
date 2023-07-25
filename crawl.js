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
        }else {
            try{
            newURL = normilizeUrl (linkElement.href)
            urls.push(newURL)   
            }catch(err){
                console.log("invalid URL")
            }
              
        }
    }; 
    console.log(urls)
    return urls
}
function removeTrailingSlahes(txt){
    if (txt.length>0 && txt.slice(-1)==='/'){
        return txt.slice(0,-1)
    }
    return txt
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

module.exports = {
    normilizeUrl,
    extractURL
}