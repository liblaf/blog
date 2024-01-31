---
title: 组会 2023-11-08
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

- [x] 手工增加复杂区域的 landmarks
- [x] (实现了, 但不好用) 标注 landmarks 的小工具

---

## Registration

- iter $N$ times
  - use input landmarks / find dense correspondence
  - non-rigid ICP (Amberg), iter over params
    - iter $M_j$ times
      - find correspondence by closest point
      - loss = distance + smoothness + landmarks
      - optimize loss

--

### 当前阶段的效果

- 效果好于上周, 但仍存在问题, 通过调参应该可以进一步改善

```shell
python cmd/view_records.py data/records/ data/*/pre/02-skull.ply
```

---

## 标注 Landmarks

- point picking 不准 (推测为上游依赖的问题)
- 骨骼结构复杂, 需要先清除部分骨骼便于标注

```shell
python cmd/annotate_landmarks.py data/template/03-skull.ply data/*/pre/02-skull.ply
```

---

## TODO

- [ ] 调参
- [ ] 完成 face 的注册
- [ ] 检查穿模

@slideend
