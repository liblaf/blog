---
category:
  - Group Meeting
  - Research
layout: Slide
title: 2024-03-06 组会
---

@slidestart

## Introduction

- **Data:** pre- & post- surgery CT of individuals
- **Target**
  - **Input:**
    - pre-surgery CT (face + skull)
    - surgical plan (post-surgery skull)
  - **Output:** post-surgery face

--

## 上学期总结

- 注册 + 模拟 + 评估: 只初步完成了注册, 因课程原因进度很慢
- 动手前缺乏充分的 **调研** 和 **思考**, 找到一个可行方案就开始动手
  - 检索文献的能力
  - 对论文质量的认知
  - 梳理文献之间的关系

---

## 关于概念的疑惑

- LQ 此前对 FEM 的理解 (from GAMES103 \& Taichi Examples)
  - 分割为四面体网格, 对每个四面体计算能量, $f = - \frac{\partial W}{\partial x}$

--

- [^1] 等各篇文章将 mass-sprint model (MSM), mass-tensor model (MTM), FEM 作为并列的概念, 但 LQ 认为 MTM 可以看作一种 FEM
- 一些给出公式的文章:
  - **MSM**[^2]: 以弹簧连接顶点 (不一定是四面体网格, [^2] 称与 FEM 等效)
  - **MTM**[^3]: 根据 Saint Venant–Kirchhoff model 计算能量, 导出力
  - **FEM**[^4]: 对 stretching 和 bending 积分, 计算每个四面体能量 (复杂), 导出力
  - **FEM**[^5]: 从弹性力学出发, 根据本构关系由形变直接计算力
- (大约 2010 年后) 工作的贡献在于模型的改进, 如: 滑动区域, 模型切割, 等

[^1]: Ma, Lei, Deqiang Xiao, Daeseung Kim, Chunfeng Lian, Tianshu Kuang, Qin Liu, Hannah Deng, Erkun Yang, Michael AK Liebschner, and Jaime Gateno. “Simulation of Postoperative Facial Appearances via Geometric Deep Learning for Efficient Orthognathic Surgical Planning.” IEEE Transactions on Medical Imaging 42, no. 2 (2022): 336–45.

[^2]: San Vicente, G., C. Buchart, D. Borro, and J. T. Celigüeta. “Maxillofacial Surgery Simulation Using a Mass-Spring Model Derived from Continuum and the Scaled Displacement Method.” International Journal of Computer Assisted Radiology and Surgery 4, no. 1 (January 2009): 89–98. https://doi.org/10.1007/s11548-008-0271-0.

[^3]: Cotin, Stéphane, Hervé Delingette, and Nicholas Ayache. “A Hybrid Elastic Model Allowing Real-Time Cutting, Deformations and Force-Feedback for Surgery Training and Simulation.” Visual Computer 16, no. 8 (2000): 437–52.

[^4]: Koch, Rolf M., Markus H. Gross, Friedrich R. Carls, Daniel F. Von Büren, George Fankhauser, and Yoav I. H. Parish. “Simulating Facial Surgery Using Finite Element Models.” In Proceedings of the 23rd Annual Conference on Computer Graphics and Interactive Techniques, 421–28. ACM, 1996. https://doi.org/10.1145/237170.237281.

[^5]: Pan, Binbin, Guangming Zhang, James J. Xia, Peng Yuan, Horace HS Ip, Qizhen He, Philip KM Lee, Ben Chow, and Xiaobo Zhou. “Prediction of Soft Tissue Deformations after CMF Surgery with Incremental Kernel Ridge Regression.” Computers in Biology and Medicine 75 (2016): 1–9.

--

### 以上方法的相同之处

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

- $\delta_0$: 骨骼顶点 (固定)
- $\delta_1$: 可移动的顶点

--

## 如何求解

令 $\delta_0 = 0, f_1 = 0$, 得

$$
\delta_1 = - K_{11}^{-1} K_{10} \delta_0
$$

---

## 未来有时间再考虑的想法

- 关于无穿模注册
  - 迭代过程中检查自相交, 对穿模的点添加较强的法向 loss (灵感来源: 碰撞检测)
  - 增加 bending (面面角) loss (灵感来源: FEM)

---

## TODO

- 🔳 暂先使用 MTM 进行尝试 (感觉时间比较紧张. 文章给出了公式, 并不太复杂)
- 🔳 调研上述方法的效果差异

@slideend
