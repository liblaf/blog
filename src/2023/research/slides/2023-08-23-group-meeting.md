---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
  - Physics
title: 组会 2023-08-23
typora-root-url: ../../../.vuepress/public
---

@slidestart

## Introduction

- **Data Collection:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:** pre-surgery CT + surgical details (post-surgery skeleton)
  - **Output:** post-surgery face

---

## Demo

- Bunny
- Template Head

--

### Bunny

<div class="columns">
  <img width="32%" height="24%" src="/img/2023/2023-08-23T151429Z.png" />
  <img width="32%" height="24%" src="/img/2023/2023-08-23T154153Z.png" />
  <video width="32%" height="24%" autoplay controls loop muted>
    <source src="/img/2023/2023-08-23T151048Z.mp4" />
  </video>
</div>

--

### Template Head

<div class="columns">
  <img width="32%" height="24%" src="/img/2023/2023-08-23T154715Z.png" />
  <img width="32%" height="24%" src="/img/2023/2023-08-23T154734Z.png" />
  <video width="32%" height="24%" autoplay controls loop muted>
    <source src="/img/2023/2023-08-23T154651Z.mp4" />
  </video>
</div>

---

## Pipeline

![Pipeline](https://mermaid.ink/img/pako:eNptkcFOhDAURX_lpQkuzMwPsDABjEqiIYHZgYs6PKSRtqS0GQny77aFYSaOXd2ee3ub9k3kKGskIQmCCZhgOoQJKqJb5FiR0Mqaqq-KwAxzEFSi6eTp2FKl4TWvBECeljk9QSoEqncPMg8yo1cwmI9PRfsWXiSXWvajg1c4xkYqXCBAnJULuGrwPD3zy1VuJWUieS8HpnFjh_KAeli3KOo_F0aNLT5no7T0-6UW7reSvMxxMN1tTzFNBeOmo1qqeXZstfIM9vsH-IE3HNon9m1VnC1_dGukzogzuLPSu4kDCaxJ-4BnFE743FYga9aMVkT-_GGJF05H6UUXXtr5kB3hqDhltZ3w5Kx_RluJ2eao0bIYxZGEWhncEdPXVOMjo_bTOAkb2g04_wLZuKrf?type=png)

--

```mermaid
%%{ init: { "theme": "dark" } }%%
flowchart LR
  RI[Raw Inner]
  RO[Raw Outer]
  subgraph Homotopy
    subgraph Before
      BO[Before Outer]
      BI[Before Inner]
      C[Composite]
      T[Tets]
    end
    subgraph After
      AI[After Inner *]
      R[Results]
    end
    S{{Simulator}}
  end
  RO --> | MeshFix | BO
  RI --> | MeshFix | BI
  BO & BI --> C
  C  --> | TetGen | T
  BI --> | Modify | AI
  T  --> S
  AI --> S
  S --> R
```

---

## 现存问题

- 上半骨骼较复杂, [`MeshFix`](https://pymeshfix.pyvista.org) 后 `TetGen` 仍检测到 self-intersection

---

## TODO

- [ ] 计算 loss \& 判断收敛
- [ ] 测试不同的内骨骼形变
- [ ] 处理上半骨骼
- [ ] 调参

@slideend
