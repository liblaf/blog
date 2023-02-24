---
title: LaTeX Demo
category:
  - Demo
  - LaTeX
icon: tex
isOriginal: false
---

When $a \neq 0$, there are two solutions to $a x^2 + b x + c = 0$ and they are

$$
x = \frac{- b \pm \sqrt{b^2 - 4 a c}}{2 a}
$$

## The Lorenz Equations

$$
\begin{align}
  \dot{x} & = \sigma\pqty{y - x} \\
  \dot{y} & = \rho x - y - x z   \\
  \dot{z} & = - \beta z + x y
\end{align}
$$

## The Cauchy-Schwarz Inequality

$$
\pqty{\sum_{k = 1}^n a_k b_k}^2 \leqslant \pqty{\sum_{k = 1}^n a_k^2} \pqty{\sum_{k = 1}^n b_k^2}
$$

## A Cross Product Formula

$$
\vb{V}_1 \times \vb{V}_2 = \begin{vmatrix}
  \vb{i}     & \vb{j}     & \vb{k} \\
  \pdv{X}{u} & \pdv{Y}{u} & 0      \\
  \pdv{X}{v} & \pdv{Y}{v} & 0
\end{vmatrix}
$$

## The probability of getting $k$ heads when flipping $n$ coins is:

$$
P\pqty{E} = \binom{n}{k} p^k \pqty{1 - p}^{n - k}
$$

## An Identity of Ramanujan

$$
\frac{1}{\pqty{\sqrt{\phi \sqrt{5}} - \phi} e^{\frac{2}{5} \pi}}
= 1 + \frac{e^{- 2 \pi}}{1 + \frac{e^{- 4 \pi}}{1 + \frac{e^{- 6 \pi}}{1 + \frac{e^{- 8 \pi}}{1 + \ldots}}}}
$$

## A Rogers-Ramanujan Identity

$$
1 + \frac{q^2}{\pqty{1 - q}} + \frac{q^6}{\pqty{1 - q} \pqty{1 - q^2}} + \cdots
= \prod_{j = 0}^{\infty} \frac{1}{\pqty{1 - q^{5 j + 2}} \pqty{1 - q^{5 j + 3}}},
\qq{for $\vqty{q} < 1$.}
$$

## Maxwell's Equations

$$
\begin{align}
  \curl{\va{B}} - \frac{1}{c} \pdv{\va{E}}{t} & = \frac{4 \pi}{c} \va{j} \\
  \div{\va{E}}                                & = 4 \pi \rho             \\
  \curl{\va{E}} + \frac{1}{c} \pdv{\va{B}}{t} & = \va{0}                 \\
  \div{\va{B}}                                & = 0
\end{align}
$$

## In-line Mathematics

Finally, while display equations look good for a page of samples, the ability to mix math and text in a paragraph is also important. This expression $\sqrt{3 x - 1} + \pqty{1 + x}^2$ is an example of an inline equation. As you see, MathJax equations can be used this way as well, without unduly disturbing the spacing between lines.
