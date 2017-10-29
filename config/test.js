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
