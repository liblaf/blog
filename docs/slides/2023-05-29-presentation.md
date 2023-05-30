---
title: Presentation
layout: Slide
---

@slidestart

## Presentation

---

## Introduction

|            |         Input          |      Output       |
| :--------: | :--------------------: | :---------------: |
|  Training  | pre- & post-surgery CT |                   |
| Predicting |     pre-surgery CT     | post-surgery Face |

---

## Related Work

- SCULPTOR: Skeleton-Consistent Face Creation Using a **Learned Parametric Generator**
- Phace: **Physics-based** Face Modeling and Animation

--

### SCULPTOR

|            |                Input                |      Output      |
| :--------: | :---------------------------------: | :--------------: |
|  Training  | pre- & post-surgery Skeleton + Face | Parametric Model |
| Predicting |    Modified / Fitted Parameters     | Skeleton + Face  |

- **4DMM:** Shape + Pose + Expression + **Trait** (skull-face correspondence variation)

--

### Phace

|                 |                Input                |               Output                |
| :-------------: | :---------------------------------: | :---------------------------------: |
| Forward Physics | bone positions + muscle activations |              Animation              |
| Inverse Physics |            shape of skin            | bone positions + muscle activations |

- **anatomical face template:** bones + skin + muscles

--

### Why not pure Phace

- Phace is mainly muscle-driven instead of skeleton-driven
- registering CT (high quality) $\to$ Template leads to loss of accuracy
- volumetric model for individuals is learned from multiple face sans in Phace

---

## Our Method

- **Projective Dynamics:** Physics-based simulation
- generality, simplicity, robustness, efficiency

--

### Pipeline

- **input:** skeleton + face before surgery
- **tetrahedralize:** obtain shape of undeformed tissue
- **input**: skeleton after surgery, i.e. deformed skeleton
- **assume** volume of tissues does not change during surgery
- **deform** tissue based on physics simulation
- **output:** face after surgery derived from deformed tissue

--

### Demo - Projective Dynamics

| <img  alt="Deer" src="https://cdn.liblaf.me/image/2023/05/29/2023-05-29-22-16-11.gif" height="400"/> | ![Shperical Shell](https://cdn.liblaf.me/image/2023/05/29/2023-05-29-22-16-51.gif) |
| :--------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: |

--

### Demo - Spherical Shell

| ![Initial](https://cdn.liblaf.me/image/2023/05/29/2023-05-29-22-17-04.png) | ![Final](https://cdn.liblaf.me/image/2023/05/29/2023-05-29-22-17-15.png) |
| :------------------------------------------------------------------------: | :----------------------------------------------------------------------: |

@slideend
