---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
title: 组会 2023-12-20
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

- CT-to-mesh
  - ✅ 一些优化
- Registration
  - ✅ 优化对应关系
  - ✅ **部分完成** 调参, 搜索参数
- 标注 landmarks 工具
  - 🔳 fix: picker 给出的坐标与鼠标点击位置不符
  - 🔳 增/删 landmarks
  - 🔳 调节 near clipping plane

---

## CT-to-mesh 优化

- 分别处理每层 slice -> 一次性处理 grid

- (closing) 减少表面的空洞
- (opening) 减少 skull 上下连接处的穿孔

---

## Registration 优化

- 优化对应关系:
  - 原先: 只对初始 mesh 膨胀
  - 现在: 将所有点沿法向平移, 平移的距离可随注册进度变化
- 调参:
  - `Ws` 越大, template 越硬 (难变形), 越不容易穿模
  - `Ws` 足够小时, template 可以变形至与 target 很接近 (skull demo)
  - 搜索参数: (face demo)
    - 划定 `Ws` 的范围 `[0, r]`
    - `Ws` 近似满足: `Ws < T` 时穿模, `Ws > T` 时不穿模
    - 搜索临界的 `T`, 选择 `(T, r)` 内的 `m = (T + r) / 2` 为新的 `Ws`
    - 更新 `Ws` 的范围为 `[0, m]`
    - 其他参数随 `Ws` 变化

---

## (TODO) 标注 landmarks

- fix: picker 给出的坐标与鼠标点击位置不符
- 可能的解决方案: 根据 `mouse_position`, `camera` 手动推算 `picked_point`

---

## TODO

- 🔳 开题: PPT + 调研阅读报告 / 翻译文献
- 🔳 完成一组 {pre,post}:{face,skull} 无穿模的注册
- 🔳 进行物理模拟测试
- 🔳 Reading: Implicit Physical Face Model, etc.
- 标注 landmarks 工具
  - 🔳 fix: picker 给出的坐标与鼠标点击位置不符
  - 🔳 增 / 删 landmarks
  - 🔳 调节 near clipping plane
- Registration
  - 🔳 实现自动调参
  - 🔳 利用 GPU 加速

@slideend
