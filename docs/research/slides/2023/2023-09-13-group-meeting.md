---
title: 组会 2023-09-13
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

---

## Preprocessing

- **input:** CT (voxel grid), **output:** registered mesh
- **[DONE] CT -> point cloud:** CT -> slice -> threshold background -> erosion --> dilation -> find largest component (background) -> flip -> remove marginal components -> edge detection -> point cloud
- **[TODO] point cloud -> mesh**: point cloud -> rigid align -> non-rigid deformation (ICP) -> mesh

---

## CT -> Point Cloud

<div class="columns">
  <figure>
    <img src="https://cdn.liblaf.me/img/2023/09/14/2023-09-14T165806.png" />
    <figcaption> Raw </figcaption>
  </figure>
  <figure>
    <img src="https://cdn.liblaf.me/img/2023/09/14/2023-09-14T152809.png" />
    <figcaption> Threshold </figcaption>
  </figure>
  <figure>
    <img src="https://cdn.liblaf.me/img/2023/09/14/2023-09-14T152925.png" />
    <figcaption> Opening (Erosion + Dilation) </figcaption>
  </figure>
  <figure>
    <img src="https://cdn.liblaf.me/img/2023/09/14/2023-09-14T153003.png" />
    <figcaption> Remove Background </figcaption>
  </figure>
  <figure>
    <img src="https://cdn.liblaf.me/img/2023/09/14/2023-09-14T153106.png" />
    <figcaption> Remove Marginal Components </figcaption>
  </figure>
  <figure>
    <img src="https://cdn.liblaf.me/img/2023/09/14/2023-09-14T153133.png" />
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
