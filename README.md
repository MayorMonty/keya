# Keya

A simple, universal document store. Keya works both in Node (storing documents in the filesystem, and in the browser, using IndexedDB, or localhost)

## API

```javascript
var keya = require("keya");

// Set a document
keya.set("name", { a: 234 })
    .then(console.log) // Resolves nothing

// Get a document by name
// NOTE: If a document doesn't exist, this method will error. Please use .has()
keya.get("name")
    .then(console.log) // An object


// Test for the existance of a document
keya.has("name")
    .then(console.log) // A boolean

// Get an object with all documents
keya.all()
    .then(console.log) // An object


```