---
category:
  - Posts
tag:
  - Clash
title: Clash Auto Select
typora-root-url: ../../.vuepress/public
---

## Edit Parsers

### Clash for Windows[^1]

Dashboard > Profiles > Right Click on the profile > Parsers > Edit Parsers

## Example Parser[^2]

```yaml
parsers:
  - reg: https?:\/\/.+
    yaml:
      append-proxy-groups:
        - url: http://www.gstatic.com/generate_204
          interval: 300
          name: auto
          type: url-test
      commands:
        - proxy-groups.auto.proxies=[]proxyNames
        - proxy-groups.0.proxies.0+auto
```

## Reference

[^1]: <https://docs.cfw.lbyczf.com/contents/parser.html> "配置文件预处理 | Clash for Windows"
[^2]: <https://lancellc.gitbook.io/clash/clash-config-file/proxy-groups/auto> "Auto - Clash"
