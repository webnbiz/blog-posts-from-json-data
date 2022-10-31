const fs = require('fs');
let employees = require('./csvjson.json');
const fileName = `list.md`;

employees.forEach (employee => {
  
  const {Title, PriceRange, Image, Description} = employee;
  var singleEmployee = `\n # ${Title} \n\n Price range - Rs.${PriceRange} \n\n ${Image} \n\n ${Description} \n`;
  fs.appendFileSync(fileName, singleEmployee);

});
