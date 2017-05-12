# jsonpformat
A tool format json or string to jsonp

```javascript
let jsonpFormat = require('jsonpformat');

let obj = {a:1,b:'test'};
let result = jsonp('jsonp123',obj)

//return --> 'jsonp123({"a":1,"b":"test"})' 
//so you can send it when you are using jsonp
//or you can do this job by yourself

let json = JSON.stringify(ojb);
let sameResult = jsonp('jsonp123',json)

//return --> 'jsonp123({"a":1,"b":"test"})' 
//the result same as sameResult
```

