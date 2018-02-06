/**
 * Created by hao.wang on 2018/1/29.
 */
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag

        // This makes `appname` a required argument.
        this.argument('appname', {type: String, required: true, desc: '应用名'});

        // And you can then access it later; e.g.
        this.log('appname', this.options.appname);
    }

    // 当前类所有的原型方法都会当做 task 执行

    method1() {
        this.log('method 1 just ran');
    }

    method2() {
        this.log('method 2 just ran');
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
};