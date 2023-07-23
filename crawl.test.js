const  {normilizeUrl} = require ("./crawl.js")
const  {test, expect} = require ("@jest/globals")

test("normilizeUrl No_protocol",()=>{
    const baseInput = 'heynode.com'
    const input = "http://heynode.com/tutorial/install-nodejs-locally-nvm"
    const actual  = normilizeUrl(baseInput,input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})

test("normilizeUrl trailing slash",()=>{
    const baseInput = 'heynode.com'
    const input = "http://heynode.com/tutorial/install-nodejs-locally-nvm/"
    const actual  = normilizeUrl(baseInput,input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})

test("normilizeUrl Capital_Letter",()=>{
    const baseInput = 'heynode.com'
    const input = "HTTP://HEYNODE.COM/TUTORIAL/INSTALL-NODEJS-LOCALLY-NVM"
    const actual  = normilizeUrl(baseInput,input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})

test("normilizeUrl relativePath",()=>{
    const baseInput = 'heynode.com'
    const actual  = normilizeUrl(baseInput,input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})