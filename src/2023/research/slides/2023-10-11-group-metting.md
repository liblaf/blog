---
title: 组会 2023-10-11
category:
  - Research
tag:
  - Computer Graphics
  - Physics
layout: Slide
---

@slidestart

## Introduction

- **Data Collection:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:** pre-surgery CT + surgical details (post-surgery skull)
  - **Output:** post-surgery face

---

## 上周 TODO

- [ ] **WIP** 注册
  - 注册后 face \& skull 整体形状大致正确, 但仍存在穿模
  - face: 18 intersections, skull: 13 intersections

```shell
meshlab data/孔*/pre/{02,03}-{face,skull}.ply
te mesh landmark align --view data/template/02-face.ply data/孔*/pre/02-face.ply
te mesh landmark align --view data/template/02-skull.ply data/孔*/pre/02-skull.ply
```

---

## 下周 TODO

- [ ] 尝试调整注册参数减少穿模

@slideend
