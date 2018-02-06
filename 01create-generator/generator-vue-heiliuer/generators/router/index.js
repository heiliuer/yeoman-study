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
    }

    method1() {
        this.log('router method 1 just ran');
    }

    method2() {
        this.log('router method 2 just ran');
    }

};