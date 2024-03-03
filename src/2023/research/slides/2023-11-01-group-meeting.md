---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
title: 组会 2023-11-01
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

- [x] 基于人工标注的 landmarks 生成更 dense 的 landmarks
- [x] 使用 dense landmarks 测试原注册方法

---

## Registration

- loop
  - find landmarks
  - non-rigid ICP (Amberg) loop
    - find correspondence by closest point
    - loss = distance + smoothness + landmarks
    - optimize loss

--

### Find Dense Landmarks

```python
loss = distance(source_vert, target_vert) + alpha * cosine_similarity(
    source_vert_normal, target_vert_normal
)
```

- `loss < threshold_min`: non-rigid ICP 有能力找到对应关系
- `threshold_min < loss < threshold_max`: 作为 landmark 引导 non-rigid ICP
- `threshold_max < loss`: 没找到对应点

--

### 当前阶段的效果

- 牙齿, 后上方骨骼对应关系错误, 考虑人工增加 landmarks

```shell
python cmd/view_records.py data/records/ data/*/pre/02-skull.ply
```

---

## TODO

- [ ] 手工增加复杂区域的 landmarks
- [ ] 标注 landmarks 的小工具

@slideend
