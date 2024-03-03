---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
title: 组会 2023-10-18
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

- [ ] **WIP** 调整注册方法, 提高注册的准确度
  - 可能原因包括 对应关系不正确, template 过锐 等
  - 原先使用第三方的注册方法, 不够灵活. 目前正在自己实现注册方法, 暂无可展示内容

---

## TODO

- [ ] 继续注册的实现和测试

@slideend
