/**
 * Created by hao.wang on 2018/1/29.
 */
var Generator = require('yeoman-generator');

module.exports = class extends Generator { //
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
    }

    initializing() {
        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag

        // This makes `appname` a required argument.
        this.argument('appname', {type: String, required: false, desc: '应用名'});

        // And you can then access it later; e.g.
        this.log('appname', this.options.appname);

    }


    // 用户交互
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'confirm',
            name: 'cool',
            message: 'Would you like to enable the Cool feature?'
        }]).then((answers) => {
            this.log('app name', answers.name);
            this.log('cool feature', answers.cool);
        });
    }

    configuring() {

    }

    default() {

    }

    writing() {
        console.log(this.prompt)
        console.log('writing')
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('index.html'),
            {title: 'Templating with Yeoman'}
        )

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {name: 'copy package'}
        )
    }

    install() {
        // this.npmInstall(['lodash'], {'save-dev': true})

        this.destinationRoot()
        // returns '~/projects'

        this.destinationPath('index.js');
        // returns '~/projects/index.js'

        // where the user is running yo
        this.contextRoot
    }

    // 当前类所有的原型方法都会当做 task 执行, 除非方法名带_前缀，如 _private_method
    method1() {
        this.log('method 1 just ran');
    }

    method2() {
        this.log('method 2 just ran');
    }
};