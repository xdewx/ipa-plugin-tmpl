
## 约定

1. `pnpm build`之前需要更改`vite.config.ts`
  1. 设置`base=https://ipa-plugin.localhost/[pluginName]`
  2. 设置`build.outDir=./[pluginName]`,
1. `public/favicon.ico`视为插件的图标
1. `public/meta.json`中是插件的摘要信息
```json
{
  "name": "",// 插件名，必填
  "description": "",//描述
  "version": "",//版本号
  "author": "",// 作者，必填
  "tags": [], // 分类等
  "created_at": 1685694530738, //发布时间
  "url": "", //插件官网
  "custom_search_box":{ 
    "scopes":[ //用以配置插件可提供的搜索类型，没有可为[]
      {"label":"xxx","value":"xxx"}
    ],
    "placeholder":"" //覆盖搜索框默认提示内容
  },
  "actions":[ // 与主搜索框平齐的插件操作图标
    {"icon":"","name":"","click":"[event-name]"}
  ]
}

```

1. 监听`message`事件获取来自主窗口的事件，格式形如：
```json
{
  "event":"",
  "data":{}
}
```
