import { JSDOM } from 'jsdom';

const dom = await JSDOM.fromURL("http://localhost:3000", {
  runScripts: "dangerously",
  resources: "usable"
});

dom.window.addEventListener('error', (event) => {
  console.log('JSDOM ERROR:', event.error);
});
dom.window.document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('HTML:', dom.window.document.body.innerHTML.substring(0, 500));
  }, 2000);
});
