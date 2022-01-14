import fs from 'fs';
import path from 'path';
import readline from 'readline';

function read(type, callback) {
  const txt = path.resolve(__dirname, '../db/bad.txt');
  const fRead = fs.createReadStream(txt);
  let readlineObj = readline.createInterface({
    input: fRead,
  });

  const on = (type) => {
    const res = [];
    readlineObj.on(type, (data) => {
      res.push(data);
    })

    readlineObj.on('close', () => {
      callback(null, res);
    })
  }

  on(type, callback);
}


export default read;
