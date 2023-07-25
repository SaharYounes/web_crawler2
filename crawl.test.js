const  {normilizeUrl} = require ("./crawl.js")
const  {test, expect} = require ("@jest/globals")

test("normilizeUrl No_protocol",()=>{
    const input = "http://heynode.com/tutorial/install-nodejs-locally-nvm"
    const actual  = normilizeUrl(input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})

test("normilizeUrl trailing slash",()=>{
    const input = "http://heynode.com/tutorial/install-nodejs-locally-nvm/"
    const actual  = normilizeUrl(input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})

test("normilizeUrl Capital_Letter",()=>{
    const input = "HTTP://HEYNODE.COM/TUTORIAL/INSTALL-NODEJS-LOCALLY-NVM"
    const actual  = normilizeUrl(input)
    const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
    expect(actual).toEqual(expected)    
})

// this test below has been moved to extractURL function as now it handles making absoulute urls everytime so the normilize function never has to deal with this
// the test is now used for the 
// test("normilizeUrl relativePath",()=>{
//     const input = "/tutorial/install-nodejs-locally-nvm"
//     const actual  = normilizeUrl(input)
//     const expected = "heynode.com/tutorial/install-nodejs-locally-nvm"
//     expect(actual).toEqual(expected)    
// })