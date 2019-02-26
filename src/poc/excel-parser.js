const XLSX = require('xlsx');

const file_path = './src/poc/employee_data.xls';

var workbook = XLSX.read(file_path, {type:'buffer'});

console.log(workbook);