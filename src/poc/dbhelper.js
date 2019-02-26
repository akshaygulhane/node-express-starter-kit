const fs = require('fs');

const metadata = fs.readFileSync('./seed/data/metadata.json', 'utf-8');
const data = JSON.parse(fs.readFileSync('./seed/data/data.json', 'utf-8'));

// console.log('metadata: ', metadata);
// console.log('data: ', data);

for(let row of data) {
    console.log(row);
}