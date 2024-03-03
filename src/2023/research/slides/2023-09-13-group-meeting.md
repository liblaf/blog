---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
  - Physics
title: 组会 2023-09-13
typora-root-url: ../../../.vuepress/public
---

@slidestart

## Introduction

- **Data Collection:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:** pre-surgery CT + surgical details (post-surgery skeleton)
  - **Output:** post-surgery face

---

## Preprocessing

- **input:** CT (voxel grid), **output:** registered mesh
- **[DONE] CT -> point cloud:** CT -> slice -> threshold background -> erosion --> dilation -> find largest component (background) -> flip -> remove marginal components -> edge detection -> point cloud
- **[TODO] point cloud -> mesh**: point cloud -> rigid align -> non-rigid deformation (ICP) -> mesh

---

## CT -> Point Cloud

<div class="columns">
  <figure>
    <img src="/img/2023/2023-09-14T165806Z.png" />
    <figcaption> Raw </figcaption>
  </figure>
  <figure>
    <img src="/img/2023/2023-09-14T152809Z.png" />
    <figcaption> Threshold </figcaption>
  </figure>
  <figure>
    <img src="/img/2023/2023-09-14T152925Z.png" />
    <figcaption> Opening (Erosion + Dilation) </figcaption>
  </figure>
  <figure>
    <img src="/img/2023/2023-09-14T153003Z.png" />
    <figcaption> Remove Background </figcaption>
  </figure>
  <figure>
    <img src="/img/2023/2023-09-14T153106Z.png" />
    <figcaption> Remove Marginal Components </figcaption>
  </figure>
  <figure>
    <img src="/img/2023/2023-09-14T153133Z.png" />
    <figcaption> Edge Detection </figcaption>
  </figure>
</div>

--

### Point Cloud Demo

_Open MeshLab_

---

## TODO

- Registration: Rigid Align \& Non-rigid Deformation

@slideend
