---
title: Clash Load Balance
category:
  - Dev Env
tag:
  - Clash
---

## Edit Parsers

### Clash for Windows[^1]

Dashboard > Profiles > Right Click on the profile > Parsers > Edit Parsers

## Example Parser[^2]

```yaml
parsers:
  - url: https://example.com/profile.yaml
    yaml:
      prepend-proxy-groups:
        - url: http://www.gstatic.com/generate_204
          interval: 300
          name: load-balance
          type: load-balance
      commands:
        - proxy-groups.load-balance.proxies=[]proxyNames
        - proxy-groups.1.proxies.0+load-balance
```

## Reference

[^1]: https://docs.cfw.lbyczf.com/contents/parser.html "配置文件预处理"
[^2]: https://lancellc.gitbook.io/clash/clash-config-file/proxy-groups/load-balance "Load Balance"
