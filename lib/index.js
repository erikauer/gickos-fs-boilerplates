#!/usr/bin/env node

/**
 * Module dependencies.
 */
const program = require('commander');
import {execute} from "./intelligence";

program
  .version('0.0.1')
  .command('customer <customer>')
  .action((customer)=> {
    execute(customer)
  });

program.parse(process.argv);
