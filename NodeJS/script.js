const fs = require('node:fs');

fs.writeFile('hey.txt', " hey hello kaise ho saksham bhai ", function (err) {
    if (err) console.error(err);
    else console.log("done");
});
