---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
  - Physics
title: Physics-based Face Reconstruction after Surgery
---

@slidestart

## Physics-based Face Reconstruction after Surgery

---

## Introduction

- **Data Collection:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:** pre-surgery CT + surgical details (post-surgery skeleton)
  - **Output:** post-surgery face

---

## Related Work

- SCULPTOR: Skeleton-Consistent Face Creation Using a **Learned Parametric Generator**
- Phace: **Physics-based** Face Modeling and Animation

--

### SCULPTOR

|            |                Input                |      Output      |
|:----------:|:-----------------------------------:|:----------------:|
|  Training  | pre- & post-surgery Skeleton + Face | Parametric Model |
| Predicting |    Modified / Fitted Parameters     | Skeleton + Face  |

- 3DMM + **Trait** (skull-face correspondence variation)

--

### Phace

|                     |                Input                |               Output                |
|:-------------------:|:-----------------------------------:|:-----------------------------------:|
| **Forward Physics** | bone positions + muscle activations |              Animation              |
|   Inverse Physics   |            shape of skin            | bone positions + muscle activations |

- **anatomical face template:** bones + skin + muscles

---

## Our Method

- **Projective Dynamics:** Physics-based simulation
- generality, simplicity, robustness, efficiency

--

- **input:** skeleton + face before surgery
- **tetrahedralize:** obtain shape of undeformed tissue
- **input**: skeleton after surgery, i.e. deformed skeleton
- **assume** volume of tissues does not change during surgery
- **deform** tissue based on physics simulation
- **output:** face after surgery derived from deformed tissue

--

### Demo - Projective Dynamics

- **inner:** skeleton, **exterior:** face

| <img  alt="Deer" src="https://cdn.liblaf.me/img/2023/2023-05-29T221611Z.gif" style="max-height: 400px"/> | <img alt="Shperical Shell" src="https://cdn.liblaf.me/img/2023/2023-05-29T221651Z.gif" style="max-height: 400px" /> |
| :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |

--

### Demo - Spherical Shell

| ![Initial](https://cdn.liblaf.me/img/2023/2023-05-29T221704Z.png) | ![Final](https://cdn.liblaf.me/img/2023/2023-05-29T221715Z.png) |
| :---------------------------------------------------------------: | :-------------------------------------------------------------: |

---

## Discussions

- computation solution does not match theoretical solution due to floating precision and iterations
- "dynamics" is not necessary for this task, minimization may be enough

@slideend
