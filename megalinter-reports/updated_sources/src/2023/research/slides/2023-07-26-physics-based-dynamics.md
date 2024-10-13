---
category:
  - Group Meeting
  - Research
layout: Slide
tag:
  - Computer Graphics
  - Physics
title: Physics-based Dynamics
---

@slidestart

## Physics-based Dynamics

> 2023-07-26

---

## Previous Work

- implemented Projective Dynamics (PD) using Conjugate Gradient (CG) solver
- got unstable results on spherical shell

![Demo](https://cdn.liblaf.me/img/2023/2023-05-29T221715Z.png)

---

## Classification

- dynamics
- physics-based, ~~data driven~~
- soft (deformable), ~~rigid~~
- solid, ~~fluid~~, ~~gases~~
- body, ~~cloth~~

---

## Reference

- EPFL, UPENN, **Projective Dynamics (PD)**, _ToG_ (2014)
- UPENN, Utah, **Quasi-Newton Methods**, _ToG_ (2017)
- MIT, THU, **ChainQueen**, _International Conference on Robotics and Automation (ICRA)_ (2019)
- ETHZ, **Real2Sim**, _ToG_ (2019)
- MIT, **DiffPD**, _ToG_ (2021)

- UMBC, UCR, McGill, **An Introduction to Physics-based Animation**, _SIGGRAPH_ (2020)

--

| Title        | Publication | Year | Institute   | FEM / MPM | Integration | PBD / Newton | Diff  |
|--------------|-------------|------|-------------|-----------|-------------|--------------|-------|
| PD           | TOG         | 2014 | EPFL, UPENN | FEM       | Implicit    | PBD          | false |
| Quasi-Newton | TOG         | 2017 | UPENN, Utah | FEM       | Implicit    | Newton       | false |
| ChainQueen   | ICRA        | 2019 | MIT, THU    | MPM       | Explicit    | -            | true  |
| Real2Sim     | TOG         | 2019 | ETHZ        | FEM       | Implicit    | Newton       | true  |
| DiffPD       | TOG         | 2021 | MIT         | FEM       | Implicit    | PBD          | true  |

---

## Concepts

- FEM vs. MPM
- Integration: Explicit vs. Implicit
- PBD vs. Newton

--

### FEM vs. MPM

- Finite Element Method (FEM) vs. Material Point Method (MPM)
- MPM is **not** a mesh based method
- MPM supports **solids**, **liquids** (mainly), **gases**

![MPM](https://github.com/taichi-dev/public_files/raw/master/taichi/mpm128.gif)

--

### Integration: Explicit vs. Implicit

$$
\begin{align*}
      & \text{Explicit}                                                  &     & \text{Implicit}                                                  \\\\
  v_1 & = v_0 + \mathbf{M}^{-1} \mathbf{f}({\color{red}{x_0}}) \Delta{t} & v_1 & = v_0 + \mathbf{M}^{-1} \mathbf{f}({\color{red}{x_1}}) \Delta{t} \\\\
  x_1 & = x_0 + v_1 \Delta{t}                                            & x_1 & = x_0 + v_1 \Delta{t}
\end{align*}
$$

- Explicit Integration is faster **per iteration**
- Implicit is more **robust**, allowing **larger time step**

--

### PBD vs. Newton

$$
\begin{align*}
   & \text{PBD}                                      &  & \text{Newton}                                           \\\\
   & \text{Solve } \mathbf{A} \Delta{x} = \mathbf{b} &  & \min g(x) \text{ along } - (\nabla^2{g})^{-1} \nabla{g}
\end{align*}
$$

- **PBD:** faster iteration
  - $\mathbf{A}$ is sparse, variable, may be indefinite
  - $\mathbf{A}$ can be stored as attributes of vertices and edges
- **Newton:** faster convergence, better stability
  - $\nabla^2{g}$ has similar properties to $\mathbf{A}$
  - definiteness fixes for $\nabla^2{g}$ may be necessary
  - requires a line search to ensure stability

---

## Related Work

- Projective Dynamics (PD)
- Quasi-Newton
- DiffPD

--

### PD

$$
\text{Solve } \mathbf{A} \Delta{x} = \mathbf{b}
$$

- make $\mathbf{A}$ **constant** and **positive definite**, can be decomposed in advance
- **pros:** fast, robust
- **cons:** energy must be formulated like $\\\| \mathbf{A} x - \mathbf{B} q \\\|^2$

--

### Quasi-Newton

$$
\min g(x) \text{ along } - (\nabla^2{g})^{-1} \nabla{g} \to - \mathbf{A}^{-1} \nabla{g}
$$

- make $\mathbf{A}$ **constant** and **positive definite**
- average number of line search iterations per Quasi-Newton iteration is only 1.07
- support more general material models
  - **Neo-Hookean:** hyperelastic material model, can be used for soft material (rubber) and large deformation
  - **spline-based:** friendly to artists

--

### DiffPD

- input $x_0, v_0$, after $t$ iterations, output $y = x_t$
- **back propagation:** input $x, y, \dfrac{\partial L}{\partial x}$, output $\dfrac{\partial L}{\partial y}$
- useful when integrated into deep learning

---

## Future Work

- implement PD using LLT solver
- test on 1 tet, 5 tets, ball, spherical shell

@slideend
