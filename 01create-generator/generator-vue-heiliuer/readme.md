# 如何新建一个generator

- 创建对应的目录结构

    ```text
    generator-vue-heiliuer  # vue-heiliuer 为生成器的名字
        generators
            app
                index.js
            router
                index.js
        node_modules
        package.json
        package-lock.json
        readme.md
    ```
    
- 将当前生成器node module 安装link到全局 

    `npm link` 将当前模块 symlink a global module

- 使用生成器 `yo vue-heiliuer`  或者 `yo vue-heiliuer:route` 使用指定模块