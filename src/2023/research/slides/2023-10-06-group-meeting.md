---
title: 组会 2023-10-06
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
  - **Input:** pre-surgery CT + surgical details (post-surgery skeleton)
  - **Output:** post-surgery face

目前正在预处理真实数据

---

### 原先 Registration 的问题及解决方案

- 问题: 开孔, 底部穿模
- 解决方案: 调整 template

```shell
meshlab registered.ply face-raw.ply face.ply
```

--

### 从 CT 数据提取表面和骨骼

- 原: 从 CT 提取点云
- 现: 从 CT 提取 Voxel Grid -> Marching Cubes 提取表面
  - 便于标注 landmarks

```shell
meshlab point_cloud.ply data/kong-zi-yu/*.ply
```

--

### Registration 可能存在的问题

- 注册后 mesh 可能存在穿模
- 穿模可以通过 MeshFix 修复, 但会改变拓扑
- 现在的模拟方法需要拓扑一致

---

## TODO

- [ ] 标注 landmarks \& 注册

@slideend
