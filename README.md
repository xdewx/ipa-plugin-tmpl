
## 约定

1. `pnpm build`之前需要更改`vite.config.ts`设置`base=https://ipa-plugin.localhost/[pluginName]`
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
  "search_scopes":[ //用以配置插件可提供的搜索类型，没有可为[]
    {"label":"xxx","value":"xxx"}
  ],
  "actions":[ // 与主搜索框平齐的插件操作图标
    {"icon":"","name":"","click":"[event-name]"}
  ]
}

```