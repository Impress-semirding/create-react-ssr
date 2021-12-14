const fs = require('fs');
const path = require('path');
const glob = require("glob");
const { util } = require("yeoman-environment");
const Generators = require("yeoman-generator");
const promt = require('./promt');

module.exports = class extends Generators {
  constructor(args, options) {
    super(args, options);
    this.helpMethod = () => {
      console.log('wont not be called automatically');
    }
    this.root = process.cwd();
    this.config.save();
  }

  prompting() {
    return this.prompt(promt)
    .then((answer) => {
      console.log('promt answer', answer);
      this.appName = answer.appName;
      this.version = answer.version;
      this.config.set('appName', this.appName);
      this.config.set('version', this.version);
      this.data = Object.assign({}, answer)
    })
  }

  writing() {
    const files = glob.sync(`**`, {
      cwd: `${__dirname}/templates`,
      dot: true,
      nodir: true,
    })

    console.log('glob files', files)
    const tplList = {
      '_package.json': 'package.json',
    }

    
    for (let file of files) {
      if (!tplList[file]) {
        this.fs.copy(
          this.templatePath(file.src || file),
          this.destinationPath(file.dest || file.src || file),
          // { globOptions: { ignore: ignorePaths } }
          )
        } else {
          //  ejs模版渲染
        console.log(this.data, tplList);
        this.fs.copyTpl(
          this.templatePath(file.src || file),
          this.destinationPath(tplList[file] || file),
          this.data,
          {}, // templateOptions    // not here
          // { globOptions: { ignore: ignorePaths } } // < but here
        )
      }
    }
  }

  // installingLodash: function() {
  //   this.npmInstall(['lodash'], { 'saveDev': true });
  // }
}

//  拿的出手的3件事情，串起来讲，为什么这三件事情，以及你在这里面的成长，感悟