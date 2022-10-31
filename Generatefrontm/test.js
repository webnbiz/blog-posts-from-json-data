const fs = require('fs');
const path = require('path');
let employees = require('./csvjson.json');

employees.forEach (employee => {
  
  const {PostTitle, Date, Author, Excerpt, Layout, Permalink, Image, Category, Tags, About} = employee;
  var singleEmployee = `--- \n title: ${PostTitle} \n date: ${Date}  \n author: ${Author} \n excerpt: ${Excerpt} \n layout: ${Layout} \n permalink: /${Permalink} \n image: ${Image} \n category: ${Category} \n tags:\n - ${Tags} \n--- \n ${About}`; 
  const fileName = `${Date}-${Permalink}.md`;
  fs.writeFileSync (fileName, singleEmployee);
  
  
});
