function removeTrailingSlahes(txt){
    if (txt.length>0 && txt.slice(-1)==='/'){
        return txt.slice(0,-1)
    }
    return txt
}
function normilizeUrl(baseURL ,urlString){
// Absolute URL    
if(urlString.length>0 && urlString.slice(0)!=='/'){
    const URLObj = new URL(baseURL + urlString.toLowerCase()) 
    hostPath = `${URLObj.hostname}${URLObj.pathname}`
    //Remove trailing slashes 
    return removeTrailingSlahes(hostPath)
}else{  
// Relative URL   
    const URLObj = new URL(urlString.toLowerCase()) 
    hostPath = `${URLObj.hostname}${URLObj.pathname}`
    //Remove trailing slashes
    return removeTrailingSlahes(hostPath)
}

hostPath = `${URLObj.hostname}${URLObj.pathname}` 
if (urlString.length>0 && urlString.slice(-1)==='/'){
    return hostPath.slice(0,-1)
}
return hostPath

    if (err==='ERR_INVALID_URL'){
        const URLObj = new URL(baseURL+urlString.toLowerCase()) 
    }
    if (urlString.slice(0)==="/"){
        const BaseURLObj = new URL(baseURL)
        console.log(BaseURLObj.hostname+"    "+BaseURLObj.pathname)
        const absouluteUrlObj = webURLObj.hostname + urlString
        return absouluteUrlObj.hostname + absouluteUrlObj.pathname 
    }else{
        const webURLObj = new URL(urlString) 
        console.log(webURLObj.hostname+"    "+webURLObj.pathname)
        hostPath = webURLObj.hostname + webURLObj.pathname 
        return hostPath       
    }

}
module.exports = {
    normilizeUrl
}