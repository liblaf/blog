---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
  - Physics
title: 组会 2023-08-16
---

@slidestart

## 组会 2023-08-16

> 李钦

---

## Introduction

- **Data Collection:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:** pre-surgery CT + surgical details (post-surgery skeleton)
  - **Output:** post-surgery face

---

## 上周结果

| ![Frame-0](https://cdn.liblaf.me/img/2023/2023-08-09T163128Z.png) | ![Frame-1](https://cdn.liblaf.me/img/2023/2023-08-09T163349Z.png) | ![Video](https://cdn.liblaf.me/img/2023/2023-08-09T163433Z.gif) |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: | :-------------------------------------------------------------: |

---

## 上周计划

- [ ] ~~确认 LLT 分解无法扩大规模的原因~~
- [x] 使用 Conjugate Gradient (CG) 实现 Projective Dynamics (PD)
- [x] 在复杂外表面上进行测试

---

## Bunny

| ![Frame-0](https://cdn.liblaf.me/img/2023/2023-08-16T160256Z.png) | ![Frame-1](https://cdn.liblaf.me/img/2023/2023-08-16T160332Z.png) | ![Video](https://cdn.liblaf.me/img/2023/2023-08-16T160344Z.gif) |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: | :-------------------------------------------------------------: |

---

## Benchmark

### Shell

<div class="columns">

<div>

- Tri Points: 20484 (ICT: 26719)
- Tet Points: 25006
- Frames: 90

</div>

<div>

| Method | Arch |   FPS | Time (s) |
|:------:|:----:|------:|---------:|
|   CG   | cuda | 30.04 |     5.93 |
| Sparse | cuda | 16.69 |    10.27 |
| Sparse | x64  | 11.95 |    10.99 |

</div>

</div>

--

### Bunny

<div class="columns">

<div>

- Tri Points: 35828 (ICT: 26719)
- Tet Points: 47221
- Frames: 90

</div>

<div>

| Method | Arch |   FPS | Time (s) |
|:------:|:----:|------:|---------:|
|   CG   | cuda | 25.33 |     7.30 |
| Sparse | x64  |  7.44 |    17.21 |
| Sparse | cuda |     - |        - |

</div>

</div>

---

## 下周计划

- [ ] 在一个 Bunny 内放两个球进行测试
- [ ] 对人脸和骨骼做初步预处理
- [ ] 在人脸 (ICT) 上进行测试
- [ ] 关注增大弹簧劲度系数后, 固定点约束的效果

@slideend
