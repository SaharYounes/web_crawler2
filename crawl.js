const { JSDOM } = require("jsdom");
async function crawlAllPages(url,baseURL,urls){
    console.log("Actively crawling: "+ url)
    //console.log(htmltext)
    extractURL(htmltext,url,urls)
    console.log(urls)
    return urls
}
async function crawlPage(currentUrl,baseURL,urls){
    console.log("Actively crawling: "+ currentUrl)
    try {
        const response = await fetch(currentUrl)
        //const htmltext = await response.text()
        extractURL(await response.text(),baseURL,urls)
    }catch(err){
        console.log(`error in fetch : "${err.message}" for URL: ${currentUrl}`)
        return
    }
    //console.log(htmltext)
    //extractURL(htmltext,baseURL,urls)
    //console.log(urls)
    return urls
}

function extractURLsLoop (htmlText,baseURL,urls){
    urls[baseURL] = 0
    for (const [key, value] of Object.entries(urls)) {
        //console.log(`${key}: ${value}`);
        console.log("actively crawling: "+key)
        extractURL(key)
    }
}

function extractURL(htmlText,baseURL,urls){
    //const urls=[]
    const DOM = new JSDOM(htmlText);
    const linkElements = DOM.window.document.querySelectorAll("a");
    for (const linkElement of linkElements){
        if (linkElement.href[0]==="/"){
            //Relative URL
                newURL = normilizeUrl(`${baseURL}${linkElement.href}`)
                if(newURL in urls){
                    urls[newURL]+=1
                    console.log("this url repeated => " + newURL)
                }else{
                    urls[newURL]=1
                    console.log("added this url => " + newURL)
                }
                //urls[newURL] = (newURL in urls) ? urls[newURL]+=1 : urls[newURL]=1
                //console.log((newURL in urls) ? "this url repeated => " + newURL:"added this url => " + newURL)
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
            urls[newURL] = (newURL in urls) ? urls[newURL]+=1 : urls[newURL]=1
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
    //hostPath = `${URLObj.hostname}${URLObj.pathname}`   <----- kept th eprotocol so i can itiratet in a loop on items rather than recursivly
    hostPath =URLObj.href
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


module.exports = {
    normilizeUrl,
    extractURL,
    extractURLsLoop,
    crawlPage,
    removeTrailingSlahes
}