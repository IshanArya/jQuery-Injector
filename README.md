# jQuery-Injector
Inject jQuery into most webpages

This tool is especially helpful for working with the developer console. Not every page has jQuery, so testing on random pages sometimes becomes difficult.

This tool lets you inject jQuery into any webpage. Only tested on Google Chrome.

## To Use: ##

1. Right-click your bookmark bar and click "Add Page..."
2. Make the "name" whatever your want (e.g. Inject jQuery)
3. In the URL section, insert the following code:

```javacript
javascript:(function(e,s){e.src=s;e.onload=function(){jQuery.noConflict();window.$ = window.jQuery;console.log('jQuery injected')};document.head.appendChild(e);})(document.createElement('script'),'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js')
```

4. Profit$

## Notes ##
Currently using jQuery 3.2.1 hosted on Google's CDN.