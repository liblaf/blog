---
category:
  - Group Meeting
  - Research
layout: Slide
title: 2024-02-28 组会
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

## Method

- 注册: CT -> 术前术后同拓扑, watertight mesh
- 模拟: 以术后骨骼为约束, 预测软组织形变, 得到术后外表面

---

## 注册效果

- 得到了一组术前术后无穿模的注册结果
- face 相比 skull 更易注册: 结果好, 参数易调, 不易穿模
- 搜参过程易出现卡在一组参数下不去的情况

```shell
mesh-kit view register ~/Documents/data/targets/*/post/register-face/
mesh-kit view register ~/Documents/data/targets/*/post/register-skull/
mesh-kit view register ~/Documents/data/targets/*/pre/register-face/
mesh-kit view register ~/Documents/data/targets/*/pre/register-skull/
```

---

## 基于 nonrigid ICP (Amberg.) 修改

- 对应关系
  - position -> position + normal
  - 分区分步 threshold
- 搜参, 防止穿模

--

## 观察穿模的区域

- 穿模易发生在:
  - 凹凸不平 (如下图)
  - source 上的点距离相近: 形变由相对中心的旋转和平移 $X$ 表达, stiffness 约束邻接点的 $X$ 相近, 相同 stiffness 下短边邻接点更易穿模

--

- 理想行为:
  - 狭长 / 距离远时, 希望以 normal 为重
  - 平坦 / 距离近时, 希望以 position 为重
- 目前采用 normal 权重逐渐趋小, 然而, 上述两种情况常同时存在于注册过程中

![Demonstration](https://cdn.liblaf.me/img/2024/2024-02-27T073656Z.webp)

---

## TODO

- 🔳 注册多组数据
- 🔳 整理注册代码 (之前修修补补的有点乱)
- 🔳 医学领域相关文献
- 🔳 尝试进行软组织模拟

---

## Related Work (Physics-based)

- **Registration**
  - [^1]\: surface registration + volumetric mesh interpolation
  - [^2]\: [^1] + adjustable mesh density
- **Simulation**
  - [^3]\: FEM
  - [^4]\: [^3] + realistic lip sliding effect
  - [^5]\: mass-spring model (MSM)
  - [^6]\: mass-tensor model (MTM)
  - [^7]\: probabilistic FEM

[^1]: Zhang, Xiaoyan, Zhen Tang, Michael A. K. Liebschner, Daeseung Kim, Shunyao Shen, Chien-Ming Chang, Peng Yuan, et al. “An eFace-Template Method for Efficiently Generating Patient-Specific Anatomically-Detailed Facial Soft Tissue FE Models for Craniomaxillofacial Surgery Simulation.” Annals of Biomedical Engineering 44, no. 5 (May 2016): 1656–71. https://doi.org/10.1007/s10439-015-1480-7.
[^2]: Zhang, Xiaoyan, Daeseung Kim, Shunyao Shen, Peng Yuan, Siting Liu, Zhen Tang, Guangming Zhang, et al. “An eFTD-VP Framework for Efficiently Generating Patient-Specific Anatomically Detailed Facial Soft Tissue FE Mesh for Craniomaxillofacial Surgery Simulation.” Biomechanics and Modeling in Mechanobiology 17, no. 2 (April 2018): 387–402. https://doi.org/10.1007/s10237-017-0967-6.
[^3]: Kim, Daeseung, Dennis Chun‐Yu Ho, Huaming Mai, Xiaoyan Zhang, Steve G.F. Shen, Shunyao Shen, Peng Yuan, et al. “A Clinically Validated Prediction Method for Facial Soft‐tissue Changes Following Double‐jaw Surgery.” Medical Physics 44, no. 8 (August 2017): 4252–61. https://doi.org/10.1002/mp.12391.
[^4]: Kim, Daeseung, Tianshu Kuang, Yriu L. Rodrigues, Jaime Gateno, Steve G. F. Shen, Xudong Wang, Han Deng, et al. “A New Approach of Predicting Facial Changes Following Orthognathic Surgery Using Realistic Lip Sliding Effect.” In Medical Image Computing and Computer Assisted Intervention – MICCAI 2019, edited by Dinggang Shen, Tianming Liu, Terry M. Peters, Lawrence H. Staib, Caroline Essert, Sean Zhou, Pew-Thian Yap, and Ali Khan, 11768:336–44. Lecture Notes in Computer Science. Cham: Springer International Publishing, 2019. https://doi.org/10.1007/978-3-030-32254-0_38.
[^5]: San Vicente, G., C. Buchart, D. Borro, and J. T. Celigüeta. “Maxillofacial Surgery Simulation Using a Mass-Spring Model Derived from Continuum and the Scaled Displacement Method.” International Journal of Computer Assisted Radiology and Surgery 4, no. 1 (January 2009): 89–98. https://doi.org/10.1007/s11548-008-0271-0.
[^6]: Kim, Hyungmin, Philipp Jürgens, Stefan Weber, Lutz-Peter Nolte, and Mauricio Reyes. “A New Soft-Tissue Simulation Strategy for Cranio-Maxillofacial Surgery Using Facial Muscle Template Model.” Progress in Biophysics and Molecular Biology 103, no. 2–3 (2010): 284–91.
[^7]: Knoops, Paul GM, Alessandro Borghi, Federica Ruggiero, Giovanni Badiali, Alberto Bianchi, Claudio Marchetti, Naiara Rodriguez-Florez, Richard WF Breakey, Owase Jeelani, and David J. Dunaway. “A Novel Soft Tissue Prediction Methodology for Orthognathic Surgery Based on Probabilistic Finite Element Modelling.” PloS One 13, no. 5 (2018): e0197209.

@slideend
