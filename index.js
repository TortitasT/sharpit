#! /usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");

program.command("optimize")
  .option("-o, --output <dir>", "Output directory", "./optimized")
  .action((dir) => {
    console.info(chalk.green("Optimizing images..."));

    require("./optimize")(dir);
  }).description(
    "Optimize images in the current directory, default output is ./optimized",
  );

program.parse(process.argv);
