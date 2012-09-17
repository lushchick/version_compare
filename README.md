Compare two program versions in JS
===============

Usage:

```javascript
var v1 = '1.3.2',
    v2 = '1.8',
    res = compareVersion(v1, v2),
    sign = res === 1 ? '>' : res === -1 ? '<' : '==';

console.log(v1 + ' ' + sign + ' ' + v2);
```
Test on jsfiddle: http://jsfiddle.net/gh/get/jquery/1.8/lushchick/version_compare/tree/master/
