const  {extractURL} = require ("./crawl.js")
const  {test, expect} = require ("@jest/globals")
test("extractURL   1:normal test     2:test Multiple links    3:Relative link     4:Invalid URL     5:Irrelevant URL",()=>{
    const baseURL = 'http://heynode.com'
    const input = `
    <html>
        <body>
            <a href="http://heynode.com/tutorial/install-nodejs-locally-nvm"> 1: </a>
            <a href="http://heynode.com/tutorial/"> 2: </a>
            <a href="/Path/tutorial/"> 3: </a>
            <a href="(this is an invalid url)"> 4: </a>
            <a href="https://www.quel-canape.fr/canape-maison-du-monde-brooke/"> 5: </a>
        <body>
    </html>`
    const actual  = extractURL(input,baseURL,urls = {})
    const expected = {"heynode.com/tutorial/install-nodejs-locally-nvm":1,"heynode.com/tutorial":1,"heynode.com/path/tutorial":1,"www.quel-canape.fr/canape-maison-du-monde-brooke":1}
    expect(actual).toEqual(expected)    
})