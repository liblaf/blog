---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
title: 组会 2023-11-22
typora-root-url: ../../../.vuepress/public
---

@slidestart

## Introduction

- **Data Collection:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:** pre-surgery CT + surgical details (post-surgery skeleton)
  - **Output:** post-surgery face

---

## 当前阶段

正在进行注册, 我们希望通过注册获得满足以下条件的 mesh:

- 术前, 术后同拓扑
- watertight, 无穿模

---

## 上周 TODO

- [x] 完成 face \& skull 的注册, 检查穿模
- [ ] **WIP** 将注册中使用的三方库替换为自己实现
- [ ] 优化标注 landmarks 的小工具
  - [ ] fix: picker 给出的坐标与鼠标点击位置不符
  - [ ] 增/删 landmarks
  - [ ] 调节 near clipping plane

---

### 当前阶段的效果

- 注册结果无穿模
- 注册方法不够稳定, 换参数 / 模型可能导致穿模
- face 的注册结果有凹陷, 推测原因为对应关系错误

```shell
meshlab data/*/pre/{02,04}-face.ply
meshlab data/*/pre/{02,04}-skull.ply
```

---

## TODO

- [ ] **WIP** 将注册中之用的三方库替换为自己实现
- [ ] 优化标注 landmarks 的小工具
  - [ ] fix: picker 给出的坐标与鼠标点击位置不符
  - [ ] 增/删 landmarks
  - [ ] 调节 near clipping plane

@slideend
