import myCollection from "./myCollection.js";
import chalk from "chalk";
//console.log(myCollection);
import fs from "fs";
import path from "path";
import http from "http";

//running a server
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");

//writing to a file
fs.writeFile("message.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("Writing is done.");
});

function describeItems(item) {
  if (item.count == 1) {
    console.log(
      chalk.red(
        `I have a ${item.name}. Here's what I like about it: ${item.whatILike}`
      )
    );
  }

  if (item.count > 1) {
    console.log(
      chalk.blueBright(
        `I have ${item.count} ${item.name}. Here's what I like about them: ${item.whatILike}`
      )
    );
  }
}

// describeItems(myCollection[0]);
// describeItems(myCollection[1]);
// describeItems(myCollection[2]);

function describeCollection(array) {
  array.forEach((item) => {
    describeItems(item);
  });
}

describeCollection(myCollection);
