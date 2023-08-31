---
title: 组会 2023-08-23
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

## 正颌手术术式

![](https://pic3.zhimg.com/v2-539d53f5846afeb78fd038631b5421fe_b.jpg)

--

<div class="columns">
  <figure>
    <img src="https://pic2.zhimg.com/459ea48e3e975da2bcfda26fa44ac3d9_r.jpg" />
    <figcaption> 上颌 Lefort I 型截骨术 (改善面中部外形) </figcaption>
  </figure>
  <figure>
    <img src="https://pic3.zhimg.com/32b2923cfd69062b3b6e53297b7ddf52_r.jpg" />
    <figcaption> 下颌 BSSRO (改善面下部外形和对称性) </figcaption>
  </figure>
  <figure>
    <img src="https://pic1.zhimg.com/4c6f671d1b7c9990bc328fa74df41c68_r.jpg" />
    <figcaption> 颏成形术 (改变颏部突度和对称性) </figcaption>
  </figure>
</div>

--

- 骨骼愈合, 固定 => 使用一个 mesh 表达术后的骨骼
- 使用多个 mesh => 增加点 / 面 => correspondence 问题
- 使用单个 mesh => 接缝处 correspondence 问题

---

## 韧带

![韧带[^1]](http://5b0988e595225.cdn.sohucs.com/images/20190215/aa8ba4478fa846d79cb8bbcee552b274.jpeg)

[^1]: <https://www.sohu.com/a/294786837_185801>

--

- 韧带 \~ 弹力筋 / 膜 (比较扁)
- 由纤维组成, 有方向性, 暂且简化 => 各项同性, 比其他软组织硬
- 建模为体 (正在实现) / 面 (未实现)

--

<div class="columns">
  <video autoplay controls loop muted>
    <source src="https://cdn.liblaf.me/img/2023/08/31/2023-08-31T172847.mp4" />
  </video>
  <video autoplay controls loop muted>
    <source src="https://cdn.liblaf.me/img/2023/08/31/2023-08-31T173152.mp4" />
  </video>
  <video autoplay controls loop muted>
    <source src="https://cdn.liblaf.me/img/2023/08/31/2023-08-31T173346.mp4" />
  </video>
</div>

---

## TODO

- [ ] 试验其他术式
- [ ] 将 template fit -> 真实数据
- [ ] 收敛性判定

@slideend
