function removeTrailingSlahes(txt){
    if (txt.length>0 && txt.slice(-1)==='/'){
        return txt.slice(0,-1)
    }
    return txt
}

function normilizeUrl(baseURL ,urlString){   
if(urlString.length>0 && urlString.slice(0)!=='/'){
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
    normilizeUrl
}