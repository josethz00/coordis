# Coordis 📌🌎


Coordis is a library to help you to deal with calculations involving geographical coordinates and conversion of units of measurement!

<h1>Steps to run this library 👇👇👇</h1>

1- Installing package
-----------------------------------

```
$ npm install coordis
```

OR

```
$ yarn add coordis
```

<br />

2- Enter in folder
-----------------------------------

```js
const coordis = require('coordis');
```

OR

```ts
import coordis from 'coordis';
```

<br />

3- Usage
-----------------------------------

```js
const coordis = require('coordis');

const distanceInKm = coordis.toKilometers(
    {
        latitude: -23.6144942,
        longitude: -46.7775026
    },
    {
        latitude: -23.6144785,
        longitude: -46.8453548
    }
);

const distanceInMiles = coordis.toMiles(
    {
        latitude: -23.6144942,
        longitude: -46.7775026
    },
    {
        latitude: -23.6144785,
        longitude: -46.8453548
    }
);

console.log(distanceInKm, distanceInMiles);
```

<br />

Package Link: https://www.npmjs.com/package/coordis

Complete Docs: https://www.npmjs.com/package/coordis
