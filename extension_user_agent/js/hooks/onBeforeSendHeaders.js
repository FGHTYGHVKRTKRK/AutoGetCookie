"use strict";chrome.webRequest.onBeforeSendHeaders.addListener(function(e){if(!0===API.settings.getEnabled()){var r=API.useragent.get();if("string"==typeof r){if(API.exceptions.uriMatch({uri:e.url}))return void console.info('Ignore URI "'+e.url+'"');for(var s=0,t=e.requestHeaders.length;s<t;++s)if("User-Agent"===e.requestHeaders[s].name){e.requestHeaders[s].value=r;break}return{requestHeaders:e.requestHeaders}}}},{urls:["<all_urls>"]},["blocking","requestHeaders"]);