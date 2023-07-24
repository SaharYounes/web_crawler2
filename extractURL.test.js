const  {extractURL} = require ("./crawl.js")
const  {test, expect} = require ("@jest/globals")
test("extractURL ",()=>{
    const input = `
    <html>
        <div>
            <a href="heynode.com/tutorial/install-nodejs-locally-nvm"></a>
        </div>
    </html>`
    const actual  = extractURL(input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})