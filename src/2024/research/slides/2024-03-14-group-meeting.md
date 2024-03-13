---
category:
  - Group Meeting
  - Research
layout: Slide
title: 2024-03-14 组会
---

@slidestart

## Introduction

- **Data:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:**
    - pre-surgery CT (face + skull)
    - surgical plan (post-surgery skull)
  - **Output:** post-surgery face

---

<div class="flex">
<div>

### MTM (Mass-Tensor Model)

$$
K \delta = f
$$

- $K$: 常稀疏矩阵
- $\delta$: 逐顶点位移
- $f$: 逐顶点外力

$$
\begin{bmatrix}
  K_{00} & K_{01} \\\\
  K_{10} & K_{11}
\end{bmatrix} \begin{bmatrix}
  \delta_0 \\\\
  \delta_1
\end{bmatrix} = \begin{bmatrix}
  f_0 \\\\
  f_1
\end{bmatrix}
$$

- $\delta_0$: 紧邻骨骼的顶点 (固定)
- $\delta_1$: 可移动的顶点 (表面点 + 填充点)

</div>
<div>

### 如何求解

令 $\delta_0 = 0, f_1 = 0$, 得

$$
K_{11} \delta_1 = - K_{10} \delta_0
$$

- $K_{11}$ 不可分解, 因此使用 Conjugate Gradient 求解 $\delta_1$

</div>
</div>

--

### 小样例结果

完全不收敛: `python plot_residual.py`

矩阵性质:

- `K.shape = (48, 48)`, `K11.shape = (24, 24)`
- `K` 对称
- 条件数 `cond()` 越接近 1, 收敛越快; $\infty$ 时奇异
  - `K` 1.e+17, `K11`: 25
- \# 正特征值: `K`: 41, `K11`: 21

--

### 一些求解方法

- **CG**: 对称正定矩阵
- **BiCG**: CG + 非对称
- **CGS**: BiCG + `A.T` 无法计算时
- **BiCGSTAB**: 优于 BiCG, CGS
- **GMRES**: 不定 非对称 可逆
- 由于 `K` 对称, 不确定其他 CG 方法较普通 CG 是否有优势

---

## TODO

- 🔳 寻找可行的求解方法

@slideend
