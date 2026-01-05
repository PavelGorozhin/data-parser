const fs = require('fs');
const xml2js = require('xml2js');

const parser = {
  parseFile: (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          if (err.code === 'ENOENT') {
            reject(new Error(`File not found: ${filePath}`));
          } else {
            reject(new Error(`Failed to read file: ${err.message}`));
          }
        } else {
          const parser = new xml2js.Parser();
          parser.parseString(data, (err, result) => {
            if (err) {
              reject(new Error(`Failed to parse XML: ${err.message}`));
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  }
};

module.exports = parser;