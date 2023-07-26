const { JSDOM } = require("jsdom");
async function crawlPage(currentUrl,baseURL,urls){
    // Link has to be within the website
    let URLObj
    try{
        URLObj = new URL(currentUrl.toLowerCase())
    }catch(err){
        console.log("Invalid URL to crawl")
        return urls
    }
    
    const baseURLObj = new URL(baseURL)
    if (URLObj.hostname!==baseURLObj.hostname) {
        console.log("Not Crawling ! => " + currentUrl)
        return urls
    }else{
        console.log("Actively crawling => "+ currentUrl)
    }
    try {
        const response = await fetch(currentUrl)
        //const htmltext = await response.text()
        extractURL(await response.text(),baseURL,urls)
    }catch(err){
        if(currentUrl===baseURL){ 
            console.log("   The main website Does not respond to the fetch request, No websites scraped")
            //for (var url in urls) delete urls[url] <-- No reson to delete the object anymore
            process.exit(1)
            return urls
        }
        console.log(`   Error in fetch : "${err.message}" for URL: ${currentUrl}`)
        return urls
    }

    console.log("Finished crawling ==>> "+ currentUrl)
    return urls
}


function extractURL(htmlText,baseURL,urls){
    const DOM = new JSDOM(htmlText);
    const linkElements = DOM.window.document.querySelectorAll("a");
    for (const linkElement of linkElements){
        if (linkElement.href[0]==="/"){//Relative URL
            newURL = normilizeUrl(`${baseURL}${linkElement.href}`)
            if( newURL in urls){
                urls[newURL]+=1
                //console.log("this url repeated => " + newURL)  <--- Not neccesary as it repeats ALOT
            }else if(newURL===baseURL){// add without crawling cuz it's the main website
                urls[newURL]=1
                console.log("        added this url => " + newURL)
            }else{
                urls[newURL]=1
                console.log("        added this url => " + newURL)
                crawlPage(`${baseURL}${linkElement.href}`,baseURL,urls)
            }
        }else {//Absoulute URL
            newURL = normilizeUrl (linkElement.href)
            if(newURL in urls){
                urls[newURL]+=1
                //console.log("this url repeated => " + newURL)  <--- Not neccesary as it repeats ALOT
            }else{
                urls[newURL]=1
                console.log("        added this url => " + newURL)
                crawlPage(linkElement.href,baseURL,urls)  //<--- By calling this instead of newURL, we can be sure the Protocol wasn't removed by NormilizeURL
            }

        }
    };
    //console.log(urls)
    return urls
}

    function normilizeUrl(urlString){ 
        let URLObj
        try{
            URLObj = new URL(urlString.toLowerCase()) 
            console.log("try block entered inside Normilize")
        }catch(err){
            throw new Error("thrown error : Invalid URL to crawl")
        }
    
    hostPath = `${URLObj.hostname}${URLObj.pathname}`   
    //hostPath = URLObj.href    <---- this keeps the protocol in the link when saving to the big urls object
    return removeTrailingSlahes(hostPath)
    }

    function removeTrailingSlahes(txt){
        if (txt.length>0 && txt.slice(-1)==='/'){
            return txt.slice(0,-1)
        }
        return txt
    }

    module.exports = {
        normilizeUrl,
        extractURLsLoop,
        crawlPage,
        removeTrailingSlahes
    }
    // -----------------------  UNUSED  --------------
    function extractURLsLoop (htmlText,baseURL,urls){
        urls[baseURL] = 0
        for (const [key, value] of Object.entries(urls)) {
            //console.log(`${key}: ${value}`);
            console.log("actively crawling: "+key)
            extractURL(key)
        }
    }