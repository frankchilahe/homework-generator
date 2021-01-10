# 小学作业生成器
自动生成小学生家庭作业
## 基本使用
### 编辑配置
使用文本编辑器打开config/config.js，根据实际需要修改其中的配置参数即可。
默认配置为上海小学一年级上的内容。
### 生成作业
使用浏览器打开main.html，输入各模块所需要的题数后单击相应的生成按钮，即可生成作业题供打印使用。
## 新模块开发指南
### 在配置文件中添加模块
打开config/config.js，将模块信息加入其中，范例如下：
```
"sample_module": {                     // 模块名称
  "description": "Sample Module",      // 模块说明
  "enabled": 1,                        // 启用状态：1 - 启用；2 - 禁用
  "sequence": 10,                      // 加载顺序
  "jsfile": "modules/sample.js",       // 模块文件路径
  "cssfile": "modules/sample.css",     // 模块所需的CSS样式表路径（可选）
  "config": {                          // 生成作业题的配置信息，将被传入模块的生成方法中（可选）
    "flag1": 0,
    "flag2": 1
  }
}
```
### 编写模块文件
模块应实现一个BaseModule的实例，并通过其register()方法注册到模块列表中，范例如下：
```
let sample = new BaseModule({
  name: 'sample_module',                    // 模块名称，应与config/config.js中的名称保持一致
  desc: 'Calculate equations below',        // 作业题说明，将显示在生成的作业题上方
  default_num: 18,                          // 默认题数
  generate: function(config, total_cnt) {   // 作业题生成逻辑，生成作业题的配置信息（config）和实际选择的题数（total_cnt）作为参数自动传入
    return "<div>1 + 1 = __</div>";         // 返回生成题目的HTML代码，将被显示为作业题
  }
});

sample.register();
```
## 版权信息
本生成器供个人免费使用，禁止一切商业用途。同时欢迎有兴趣的朋友编写更多模块并提交PR。
