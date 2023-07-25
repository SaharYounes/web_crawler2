const  {extractURL} = require ("./crawl.js")
const  {test, expect} = require ("@jest/globals")
test("extractURL   1:normal test     2:test Multiple links    3:Relative link     4:Invalid URL",()=>{
    const baseURL = 'http://heynode.com'
    const input = `
    <html>
        <body>
            <a href="http://heynode.com/tutorial/install-nodejs-locally-nvm"> 1: </a>
            <a href="http://heynode.com/tutorial/"> 2: </a>
            <a href="/Path/tutorial/"> 3: </a>
            <a href="(this is an invalid url)"> 4: </a>
        <body>
    </html>`
    const actual  = extractURL(input,baseURL,urls = [])
    const expected = ["heynode.com/tutorial/install-nodejs-locally-nvm","heynode.com/tutorial","heynode.com/path/tutorial"]
    expect(actual).toEqual(expected)    
})