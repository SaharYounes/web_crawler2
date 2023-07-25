const  {extractURL} = require ("./crawl.js")
     baseURL = process.argv[2]
    const response = await fetch(baseURL);
    const urls=extractURL (response,baseURL,urls = [])

async function fetchfunction({

})