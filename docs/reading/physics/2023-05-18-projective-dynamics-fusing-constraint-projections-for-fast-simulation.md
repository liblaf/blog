---
title: "Projective Dynamics: Fusing Constraint Projections for Fast Simulation"
category:
  - Reading Notes
tag:
  - Projective Dynamics
  - Physics
---

## Formula

$$
G = \frac{E}{2 (1 + \nu)}
$$

- $G$ --- shear modulus[^1]
- $E$ --- Young's modulus
- $\nu$ --- Poisson's ratio

[^1]: [Shear modulus - Wikipedia](https://en.wikipedia.org/wiki/Shear_modulus)

$$
W(\vb{q}, \vb{T}) = \frac{w}{2} A \norm{\vb{X}_f \vb{X}_g^{-1} - \vb{T}}_F^2
$$

- $W$ --- potential energy
- $w$ (aka. $G$) --- shear modulus
- (constant) $A$ --- triangle area / tetrahedron volume
- $\vb{X}_f = \bmqty{\vb{q}_{0, 1, 2} - \vb{q}_3}$ --- deformed shape
- (constant) $\vb{X}_g = \bmqty{\tilde{\vb{q}}_{0, 1, 2} - \tilde{\vb{q}}_3}$ --- undeformed shape
- (auxiliary) $\vb{T}$ --- rotation matrix

$$
\vb{f}_{i}
= \pdv{W(\vb{q}, \vb{T})}{\vb{q}_i}
= w A \pqty{\vb{X}_f \vb{X}_g^{-1} - \vb{T}} \odot \pqty{\pdv{\vb{X}_f}{\vb{q}_i} \vb{X}_g^{-1}}
$$

- $\vb{f}$ --- force
- (variable) $\vb{q}$ --- deformed position

$$
\vb{H}_{ij}
= \pdv{f_i}{\vb{q}_j}
= w A \pqty{\pdv{\vb{X}_f}{\vb{q}_j} \vb{X}_g^{-1}} \odot \pqty{\pdv{\vb{X}_f}{\vb{q}_i} \vb{X}_g^{-1}}
$$

- $\vb{H}$ --- Hessian matrix

::: tip
$\vb{H}$ is constant. The non-zero values of $\vb{H}_{ij}$ only appear in cases when $\vb{q}_i$ and $\vb{q}_j$ are both located within the same tetrahedron.
:::

## Solver

$$
\vb{s}_n = \vb{q}_n + h \vb{v}_n + h^2 \vb{M}^{-1} \vb{f}
$$

- $h$ (aka. $\Delta{t}$) --- time step
- $\vb{M}$ --- mass matrix

$$
\begin{align*}
   & \text{For} \ k = 0 \dots K                                                                                                                                 \\
   & \quad \text{Solve} \pqty{\frac{1}{h^2} \vb{M} + \vb{H}} \Delta{\vb{q}} = - \frac{1}{h^2} \vb{M} \pqty{\vb{q}^{(k)} - \vb{s}_n} + \vb{f}\pqty{\vb{q}^{(k)}} \\
   & \quad \vb{q}^{(k + 1)} \leftarrow \vb{q}^{(k)} + \Delta{\vb{q}}                                                                                            \\
   & \vb{q}_{n + 1} = \vb{q}^{(k + 1)}                                                                                                                          \\
   & \vb{v}_{n + 1} = (\vb{q}_{n + 1} - \vb{q}_{n}) / h
\end{align*}
$$

### Conjugate gradient method

- used to solve $\vb{A} \vb{x} = \vb{b}$
- $\vb{A} = \frac{1}{h^2} \vb{M} + \vb{H}$
- $\vb{b} = - \frac{1}{h^2} \vb{M} \pqty{\vb{q}^{(k)} - \vb{s}_n} + \vb{f}\pqty{\vb{q}^{(k)}}$

$$
\begin{align*}
   & \vb{r}_0 = \vb{b} - \vb{A} \vb{x}_0                                                                                                                \\
   & \text{if $\vb{r_0}$ is sufficiently small, then return $\vb{x}_0$ as the result}                                                                   \\
   & \vb{p}_0 = \vb{r}_0                                                                                                                                \\
   & \text{repeat}                                                                                                                                      \\
   & \qquad \alpha_k = \frac{\vb{r}_k^T \vb{r}_k}{\vb{p}_k^T \vb{A} \vb{p}_k} = \frac{\vb{r}_k \vdot \vb{r}_k}{\vb{p}_k \vdot \vb{A} \vb{p}_k}          \\
   & \qquad \vb{x}_{k + 1} = \vb{x}_k + \alpha_k \vb{p}_k                                                                                               \\
   & \qquad \vb{r}_{k + 1} = \vb{r}_k - \alpha_k \vb{A} \vb{p}_k                                                                                        \\
   & \qquad \text{if $\vb{r}_{k + 1}$ is sufficiently small, then exit loop}                                                                            \\
   & \qquad \beta_k = \frac{\vb{r}_{k + 1}^T \vb{r}_{k + 1}}{\vb{r}_k^T \vb{r}_k} = \frac{\vb{r}_{k + 1} \vdot \vb{r}_{k + 1}}{\vb{r}_k \vdot \vb{r}_k} \\
   & \qquad \vb{p}_{k + 1} = \vb{r}_{k + 1} + \beta_k \vb{p}_k                                                                                          \\
   & \qquad k = k + 1                                                                                                                                   \\
   & \text{end repeat}                                                                                                                                  \\
   & \text{return $\vb{x}_{k + 1}$ as the result}
\end{align*}
$$
