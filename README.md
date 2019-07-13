# @indlekofer/format_url

[![npm version](https://badge.fury.io/js/%40indlekofer%2Fformat_url.svg)](https://badge.fury.io/js/%40indlekofer%2Fformat_url)

## Usage

```js
import formatUrl from '@indlekofer/format_url';

console.log(formatUrl("http://localhost:8080/?test=1", {test2:2, test3:3}, 'test4')); 
// => http://localhost:8080/?test=1&test2=2&test3=3#test4
```

## Parameters

  **url**: *string*  
  **query**: *object|string*  
  **hash**: *string* optional  

## Return

  *string*  
