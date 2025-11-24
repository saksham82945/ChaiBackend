// const fs = require('node:fs');
// // creating a file 
// fs.writeFile('hey.txt', " hey hello kaise ho saksham bhai ", function (err) {
//     if (err) console.error(err);
//     else console.log("done");
// });

// // appeend or adding in existing file 

// fs.appendFile('hey.txt', "  me to accha hu ", function (err) {
//     if (err) console.error(err);
//     else console.log("done");
// });

// // rename the file 

// fs.rename('hey.txt','talks.txt',function(err){
//     if (err) console.error(err);
//     else console.log("done");
// });

// copy file  to a new folder 

// fs.copyFile("talks.txt","./Copy/learning.txt",function(err){
//     if (err) console.error(err);
//     else console.log("done");
// });

// unlink/deleting the file 

// const fs = require('fs');

// fs.unlink("talks.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// removing blank folder 
 
// const fs = require('fs');

// fs.rmdir("./Copy",{recursive: true},function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// removing folder with file 
// fs.rm("./Copy",{recursive: true},function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })


// creating server 
// by using http 
const http = require('http');

const server = http.createServer(function(req,res){
    res.end("hello world");

})

server.listen(3000);
 