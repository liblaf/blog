---
title: 组会 2023-10-25
category:
  - Research
tag:
  - Computer Graphics
layout: Slide
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

- [ ] **WIP** 基于人工标注的 landmarks 生成更 dense 的 landmarks
- [ ] 使用 dense landmarks 测试原注册方法
  - 效果好 -> DONE
  - 效果不好 -> 自己实现注册
- [ ] 调研可参考的注册方法

---

## Densify Landmarks

1. rigid align (人工标注的 sparse landmarks)
2. rigid align (ICP)
3. 在 source mesh 上采样, 根据下式选取每个 landmark 在 target mesh 上的对应点

```python
target_idx = argmin(
    distance(source_vert, target_vert)
    + alpha * cosine_similarity(source_vert_normal, target_vert_normal)
)
```

---

## 也许参考的注册方法

- POSTECH. Mesh Density Adaptation for Template-based Shape Reconstruction. _SIGGRAPH '23_
- 开源, setting 不同
  - template 是个 ICO sphere
  - target 质量较高
  - 动态采样 landmarks

---

## TODO

- [ ] 测试 dense landmarks 的效果

@slideend
