# Facade Pattern Hands On
> Implementation of Facade Pattern!

[![Custom Badge](https://img.shields.io/badge/Author-Abhijit%20Kar-brightgreen.svg)](http://www.abhijit-kar.com/)
[![MIT licensed](https://img.shields.io/badge/Licence-MIT-blue.svg?style=flat)](https://opensource.org/licenses/mit-license.php)
[![Server](https://img.shields.io/badge/Server-GitHub%20Pages-brightgreen.svg?style=flat)](http://www.abhijit-kar.com/facade-pattern-hands-on/)

## k-ary tree Breadth First Traversal

```typescript
// Components
class CompAlpha {
  num: number;
}
class CompA {
  a: number;
  b: number;
  c: CompAlpha;
}
class CompB {
  x: number;
  y: number;
}

// Collection of Components
class Config {
  p: CompA;
  q: CompB;
}

// Configs
var origConfig: Config = {
  p: {
    a: 23,
    b: 92,
    c: {
      num: 1
    }
  },
  q: {
    x: 32,
    y: 29
  }
};

var diffConfig = {
  p: {
    c: {
      num: 3
    }
  },
  q: {
    x: 99
  },
  z: 23 // Unnecessary
};

// Holy Grail (Breadth First Traversal): Solution to our Problems!
function modifyWhatDiffers(original, diff) {
  var stack = [];

  stack.push({
    o: original,
    d: diff
  });

  while (stack.length > 0) {
    let obj = stack.shift();

    for (var key in obj.o) {
      if (obj.o.hasOwnProperty(key) && obj.d.hasOwnProperty(key)) {
        if (typeof obj.o[key] === "object") {
          stack.push({
            o: obj.o[key],
            d: obj.d[key]
          });
        } else if (obj.o[key] !== obj.d[key]) {
          obj.o[key] = obj.d[key];
        }
      }
    }
  }

  return original;
}

// Pass in a Deep Copy of the Original, use any method you want!
let patchedConfig = modifyWhatDiffers(
  JSON.parse(JSON.stringify(origConfig)),
  diffConfig
);

console.log(JSON.stringify(origConfig));
console.log(JSON.stringify(diffConfig));
console.log(JSON.stringify(patchedConfig));

// {"p":{"a":23,"b":92,"c":{"num":1}},"q":{"x":32,"y":29}}
// {"p":{"c":{"num":3}},"q":{"x":99}},"z":23}
// {"p":{"a":23,"b":92,"c":{"num":3}},"q":{"x":99,"y":29}}
```
