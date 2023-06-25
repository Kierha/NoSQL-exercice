const fs = require('fs');
const csv = require('csv-parser');

function parseCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        const parsedData = {
          title: data.title,
          name: data.name,
          address: data.address,
          realAddress: data.realAdress,
          department: data.departement,
          country: data.country,
          tel: data.tel,
          email: data['e-mail'],
        };
        results.push(parsedData);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = { parseCSV };
