const request = require('request');
const fs = require('fs')
const arguments = process.argv
const website = arguments[2];
const location = arguments[3];

const callback = function (loc) {
  const stats = fs.statSync(location);
  const fileSizeInBytes = stats.size;
  console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${location}`);
};

request(website, (error, response, body) => {
  if (error) {
    console.log('URL does not exist');
  } else {
    fs.writeFile(location, body, (err) => {
      if (err) {
        console.log('ha')
        throw err;
      }
      callback(location);
    });
  }
});
