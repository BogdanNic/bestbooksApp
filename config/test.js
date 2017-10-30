'use strict';

const puppeteer = require('puppeteer');



  puppeteer.launch().then(browser=>{
     browser.newPage().then(page=>{
       page.setContent(`<!DOCTYPE html>
                     <html lang="en">
                     <head>
                         <meta charset="UTF-8">
                         <title>Test</title>
                     </head>
                     <body style="background: #d7d1ff">
                     <div>This is the page</div>
                     </body>
                     </html>
`).then(load=>{
         page.screenshot({path: 'example.png'}).then(()=>{
           browser.close()
         });
       })
    });
  });


 ///almost working but no context to use the version
                                // page.evaluateHandle(() => Promise.resolve(window)).then(aWindowHandle=>{
                                //     page.evaluate(window => window.setVersion(version),aWindowHandle);
                                // });


                                ///almost working
                                // page.$('#version').then( bodyHandle =>{
                                //     console.log("in page",version);
                                //     bodyHandle['version'] = version;
								//
                                //     function test(body) {
                                //         //console.log(body);
                                //         body.innerHTML = "123";
                                //         //document.body.innerHTML="asd123";
                                //     }
								//
                                //     page.on('console', msg => console.log('PAGE LOG:', ...msg.args));
                                //     page.evaluate(test, bodyHandle).then(html=>{
                                //       // console.log(html);
								//
                                //         page.screenshot({path: 'resources/example.png'}).then(()=>{
                                //            browser.close();
                                //         });
                                //     });
								//
                                // });



                                // page.evaluateHandle(() => ({window, document})).then(handle=>{
                                //     handle.getProperties().then(properties=>{
                                //         const windowHandle = properties.get('window');
                                //         const documentHandle = properties.get('document');
                                //        documentHandle.querySelector("#version").innertHTML ="ASDas";
								//
                                //     });
                                //     console.log(document.querySelector("#version"));
                                // });
// puppeteer.launch().then(async browser => {
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await browser.close();
// });


'use strict';



// (async() => {
//
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://example.com');
//   await page.screenshot({path: 'example.png'});
//
//   await browser.close();
//
// })();
//npm install i puppeteer
