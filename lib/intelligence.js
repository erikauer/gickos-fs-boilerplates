const structure = require('./structure');
const fs = require('fs');
const mkdirp = require('mkdirp');
const chalk = require('chalk');

var doesDirExist = (dir) => {
  var dirExists = false;
  try {
    fs.statSync('./' + dir);
    dirExists = true;
  }
  catch (e) {
    dirExists = false;
  }
  finally {
    return dirExists;
  }
};

var execute = (customer) => {
  var check = doesDirExist(customer);
  if (check === false) {
    console.log('Hooray, Customer Choosen:');
    console.log(chalk.green(customer));
    console.log('Creating structure for %s', customer);
    mkdirp.sync('./' + customer);
    structure.customer.forEach((dir)=> {
      console.log('I create a sub dir %s for %s', dir, customer);
      mkdirp.sync('./' + customer + '/' + dir);
    })
  } else {
    console.log(chalk.red('Derp!'));
    console.log('Me, or another cli tool already created something for ' + (chalk.yellow(customer)));
    process.exit();
  }
};

module.exports = {
  execute: execute,
  doesDirExist: doesDirExist
};
