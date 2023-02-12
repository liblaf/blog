---
title: The physics Package
category:
  - Demo
  - LaTeX
tag:
  - Physics
icon: tex
isOriginal: false
---

[physics.pdf](https://ctan.org/tex-archive/macros/latex/contrib/physics/physics.pdf)

## Automatic Bracing

### `\quantity`

| Source             | Rendered           |
| ------------------ | ------------------ |
| `\qty(\typical)`   | $\qty(\typical)$   |
| `\qty(\tall)`      | $\qty(\tall)$      |
| `\qty(\grande)`    | $\qty(\grande)$    |
| `\qty[\typical]`   | $\qty[\typical]$   |
| `\qty\|\typical\|` | $\qty\|\typical\|$ |
| `\qty{\typical}`   | $\qty{\typical}$   |
| `\qty\big{}`       | $\qty\big{}$       |
| `\qty\Big{}`       | $\qty\Big{}$       |
| `\qty\bigg{}`      | $\qty\bigg{}$      |
| `\qty\Bigg{}`      | $\qty\Bigg{}$      |
| `\pqty{}`          | $\pqty{}$          |
| `\bqty{}`          | $\bqty{}$          |
| `\vqty{}`          | $\vqty{}$          |
| `\Bqty{}`          | $\Bqty{}$          |

### `\absolutevalue`

| Source           | Rendered         |
| ---------------- | ---------------- |
| `\abs{a}`        | $\abs{a}$        |
| `\abs\Big{a}`    | $\abs\Big{a}$    |
| `\abs*{\grande}` | $\abs*{\grande}$ |

### `\norm`

| Source            | Rendered          |
| ----------------- | ----------------- |
| `\norm{a}`        | $\norm{{a}}$      |
| `\norm\Big{a}`    | $\norm\Big{a}$    |
| `\norm*{\grande}` | $\norm*{\grande}$ |

### `\evaluated`

| Source                     | Rendered                   |
| -------------------------- | -------------------------- |
| `\eval{x}_0^\infty`        | $\eval{x}_0^\infty$        |
| `\eval(x\|_0^\infty`       | $\eval(x\|_0^\infty$       |
| `\eval[x\|_0^\infty`       | $\eval(x\|_0^\infty$       |
| `\eval[\venti\|_0^\infty`  | $\eval[\venti\|_0^\infty$  |
| `\eval*[\venti\|_0^\infty` | $\eval*[\venti\|_0^\infty$ |

### `\order`

| Source             | Rendered           |
| ------------------ | ------------------ |
| `\order{x^2}`      | $\order{x^2}$      |
| `\order\Big{x^2}`  | $\order\Big{x^2}$  |
| `\order*{\grande}` | $\order*{\grande}$ |

### `\commutator`

| Source               | Rendered             |
| -------------------- | -------------------- |
| `\comm{A}{B}`        | $\comm{A}{B}$        |
| `\comm\Big{A}{B}`    | $\comm\Big{A}{B}$    |
| `\comm*{A}{\grande}` | $\comm*{A}{\grande}$ |

### `\anticommutator`

| Source         | Rendered       |
| -------------- | -------------- |
| `\acomm{A}{B}` | $\acomm{A}{B}$ |

### `\poissonbracket`

| Source      | Rendered    |
| ----------- | ----------- |
| `\pb{A}{B}` | $\pb{A}{B}$ |

## Vector Notation

### `\vectorbold`

| Source    | Rendered  |
| --------- | --------- |
| `\vb{a}`  | $\vb{a}$  |
| `\vb*{a}` | $\vb*{a}$ |

### `\vectorarrow`

| Source    | Rendered  |
| --------- | --------- |
| `\va{a}`  | $\va{a}$  |
| `\va*{a}` | $\va*{a}$ |

### `\vectorunit`

| Source                  | Rendered                |
| ----------------------- | ----------------------- |
| `\vu{a}`                | $\vu{a}$                |
| `\vu*{a}, \vu*{\theta}` | $\vu*{a}, \vu*{\theta}$ |

### `\dotproduct`

| Source  | Rendered |
| ------- | -------- |
| `\vdot` | $\vdot$  |

### `\crossproduct`

| Source   | Rendered |
| -------- | -------- |
| `\cross` | $\cross$ |
| `\cp`    | $\cp$    |

### `\gradient`

| Source              | Rendered            |
| ------------------- | ------------------- |
| `\grad`             | $\grad$             |
| `\grad{\Psi}`       | $\grad{\Psi}$       |
| `\grad(\Psi+\tall)` | $\grad(\Psi+\tall)$ |
| `\grad[\Psi+\tall]` | $\grad[\Psi+\tall]$ |

### `\divergence`

| Source               | Rendered             |
| -------------------- | -------------------- |
| `\div`               | $\div$               |
| `\div{\vb{a}}`       | $\div{\vb{a}}$       |
| `\div(\vb{a}+\tall)` | $\div(\vb{a}+\tall)$ |
| `\div[\vb{a}+\tall]` | $\div[\vb{a}+\tall]$ |

### `\curl`

| Source                | Rendered              |
| --------------------- | --------------------- |
| `\curl`               | $\curl$               |
| `\curl{\vb{a}}`       | $\curl{\vb{a}}$       |
| `\curl(\vb{a}+\tall)` | $\curl(\vb{a}+\tall)$ |
| `\curl[\vb{a}+\tall]` | $\curl[\vb{a}+\tall]$ |

### `\laplacian`

| Source                   | Rendered                 |
| ------------------------ | ------------------------ |
| `\laplacian`             | $\laplacian$             |
| `\laplacian{\Psi}`       | $\laplacian{\Psi}$       |
| `\laplacian(\Psi+\tall)` | $\laplacian(\Psi+\tall)$ |
| `\laplacian[\Psi+\tall]` | $\laplacian[\Psi+\tall]$ |

## Operators

### `\sin`

| Source          | Rendered        |
| --------------- | --------------- |
| `\sin(\grande)` | $\sin(\grande)$ |
| `\sin[2](x)`    | $\sin[2](x)$    |
| `\sin x`        | $\sin x$        |

| Source        | Rendered      |
| ------------- | ------------- |
| `\exp(\tall)` | $\exp(\tall)$ |
| `\log(\tall)` | $\log(\tall)$ |
| `\ln(\tall)`  | $\ln(\tall)$  |
| `\det(\tall)` | $\det(\tall)$ |
| `\Pr(\tall)`  | $\Pr(\tall)$  |

### `\trace` or `\tr`

| Source       | Rendered     |
| ------------ | ------------ |
| `\tr\rho`    | $\tr\rho$    |
| `\tr(\tall)` | $\tr(\tall)$ |

### `\Trace` or `\Tr`

| Source       | Rendered     |
| ------------ | ------------ |
| `\Tr\rho`    | $\Tr\rho$    |
| `\Tr(\tall)` | $\Tr(\tall)$ |

### `\rank`

| Source    | Rendered  |
| --------- | --------- |
| `\rank M` | $\rank M$ |

### `\erf`

| Source    | Rendered  |
| --------- | --------- |
| `\erf(x)` | $\erf(x)$ |

### `\Res`

| Source       | Rendered     |
| ------------ | ------------ |
| `\Res[f(z)]` | $\Res[f(z)]$ |

### `\principalvalue`

| Source                  | Rendered                |
| ----------------------- | ----------------------- |
| `\pv{\int f(z) \dd{z}}` | $\pv{\int f(z) \dd{z}}$ |
| `\PV{\int f(z) \dd{z}}` | $\PV{\int f(z) \dd{z}}$ |

### `\Re`

| Source   | Rendered |
| -------- | -------- |
| `\Re{z}` | $\Re{z}$ |

### `\Im`

| Source   | Rendered |
| -------- | -------- |
| `\Im{z}` | $\Im{z}$ |

## Quick Quad Text

### `\qqtext`

| Source                 | Rendered               |
| ---------------------- | ---------------------- |
| `\qq{}`                | $\qq{}$                |
| `\qq{word or phrase}`  | $\qq{word or phrase}$  |
| `\qq*{word or phrase}` | $\qq*{word or phrase}$ |

| Source | Rendered |
| ------ | -------- |
| `\qc`  | $\qc$    |
| `\qcc` | $\qcc$   |
| `\qif` | $\qif$   |

## Derivatives

### `\differential`

| Source            | Rendered          |
| ----------------- | ----------------- |
| `\dd`             | $\dd$             |
| `\dd x`           | $\dd x$           |
| `\dd{x}`          | $\dd{x}$          |
| `\dd[3]{x}`       | $\dd[3]{x}$       |
| `\dd(\cos\theta)` | $\dd(\cos\theta)$ |

### `\derivative`

| Source         | Rendered       |
| -------------- | -------------- |
| `\dv{x}`       | $\dv{x}$       |
| `\dv{f}{x}`    | $\dv{f}{x}$    |
| `\dv[n]{f}{x}` | $\dv[n]{f}{x}$ |
| `\dv*{f}{x}`   | $\dv*{f}{x}$   |

### `\partialderivative`

| Source             | Rendered           |
| ------------------ | ------------------ |
| `\pderivative{x}`  | $\pderivative{x}$  |
| `\pdv{x}`          | $\pdv{x}$          |
| `\pdv{f}{x}`       | $\pdv{f}{x}$       |
| `\pdv[n]{f}{x}`    | $\pdv[n]{f}{x}$    |
| `\pdv{x}(\grande)` | $\pdv{x}(\grande)$ |
| `\pdv{f}{x}{y}`    | $\pdv{f}{x}{y}$    |
| `\pdv*{f}{x}`      | $\pdv*{f}{x}$      |

### `\variation`

| Source          | Rendered        |
| --------------- | --------------- |
| `\var{F[g(x)]}` | $\var{F[g(x)]}$ |
| `\var(E-TS)`    | $\var(E-TS)$    |

### `\functionalderivative`

| Source          | Rendered        |
| --------------- | --------------- |
| `\fdv{g}`       | $\fdv{g}$       |
| `\fdv{F}{g}`    | $\fdv{F}{g}$    |
| `\fdv{V}(E-TS)` | $\fdv{V}(E-TS)$ |
| `\fdv*{F}{x}`   | $\fdv*{F}{x}$   |

## Matrix Macros

```latex
\begin{pmatrix}
  \imat{2} \\ a & b
\end{pmatrix}
```

$$
\begin{pmatrix}
  \imat{2} \\ a & b
\end{pmatrix}
$$

```latex
\begin{pmatrix}
  \mqty{\imat{2}} & \mqty{a\\b} \\ \mqty{c&d} & e
\end{pmatrix}
```

$$
\begin{pmatrix}
  \mqty{\imat{2}} & \mqty{a\\b} \\ \mqty{c&d} & e
\end{pmatrix}
$$

```latex
\mqty(\mqty{\imat{2}} & \mqty{a\\b} \\ \mqty{c & d} & e)
```

$$
\mqty(\mqty{\imat{2}} & \mqty{a\\b} \\ \mqty{c & d} & e)
$$

### `\matrixquantity`

| Source                    | Rendered                  |
| ------------------------- | ------------------------- |
| `\mqty{a & b \\ c & d}`   | $\mqty{a & b \\ c & d}$   |
| `\mqty(a & b \\ c & d)`   | $\mqty(a & b \\ c & d)$   |
| `\mqty*(a & b \\ c & d)`  | $\mqty*(a & b \\ c & d)$  |
| `\mqty[a & b \\ c & d]`   | $\mqty[a & b \\ c & d]$   |
| `\mqty\|a & b \\ c & d\|` | $\mqty\|a & b \\ c & d\|$ |
| `\pmqty{}`                | $\pmqty{}$                |
| `\Pmqty{}`                | $\Pmqty{}$                |
| `\bmqty{}`                | $\bmqty{}$                |
| `\vmqty{}`                | $\vmqty{}$                |

### `\smallmatrixquantity`

| Source                      | Rendered                    |
| --------------------------- | --------------------------- |
| `\smqty{a & b \\ c & d}`    | $\smqty{a & b \\ c & d}$    |
| `\smqty()` or `\spmqty{}`   | $\smqty()$ or $\spmqty{}$   |
| `\smqty*()` or `\sPmqty{}`  | $\smqty*()$ or $\sPmqty{}$  |
| `\smqty[]` or `\sbmqty{}`   | $\smqty[]$ or $\sbmqty{}$   |
| `\smqty\|\|` or `\svmqty{}` | $\smqty\|\|$ or $\svmqty{}$ |

### `\matrixdeterminant`

| Source                   | Rendered                 |
| ------------------------ | ------------------------ |
| `\mdet{a & b \\ c & d}`  | $\mdet{a & b \\ c & d}$  |
| `\smdet{a & b \\ c & d}` | $\smdet{a & b \\ c & d}$ |

### `\identitymatrix`

| Source             | Rendered           |
| ------------------ | ------------------ |
| `\imat{n}`         | $\imat{n}$         |
| `\smqty(\imat{3})` | $\smqty(\imat{3})$ |

### `\xmatrix`

| Source                    | Rendered                  |
| ------------------------- | ------------------------- |
| `\xmat{x}{n}{m}`          | $\xmat{x}{n}{m}$          |
| `\smqty(\xmat{1}{2}{3})`  | $\smqty(\xmat{1}{2}{3})$  |
| `\smqty(\xmat*{a}{3}{3})` | $\smqty(\xmat*{a}{3}{3})$ |
| `\smqty(\xmat*{a}{3}{1})` | $\smqty(\xmat*{a}{3}{1})$ |
| `\smqty(\xmat*{a}{1}{3})` | $\smqty(\xmat*{a}{1}{3})$ |

### `\zeromatrix`

| Source                | Rendered              |
| --------------------- | --------------------- |
| `\zmat{n}{m}`         | $\zmat{n}{m}$         |
| `\smqty(\zmat{2}{2})` | $\smqty(\zmat{2}{2})$ |

### `\paulimatrix`

| Source             | Rendered           |
| ------------------ | ------------------ |
| `\pmat{n}`         | $\pmat{n}$         |
| `\smqty(\pmat{0})` | $\smqty(\pmat{0})$ |
| `\smqty(\pmat{1})` | $\smqty(\pmat{1})$ |
| `\smqty(\pmat{2})` | $\smqty(\pmat{2})$ |
| `\smqty(\pmat{3})` | $\smqty(\pmat{3})$ |

### `\diagonalmatrix`

| Source                     | Rendered                   |
| -------------------------- | -------------------------- |
| `\dmat{a,b,c,...}`         | $\dmat{a,b,c,...}$         |
| `\mqty(\dmat{1,2,3})`      | $\mqty(\dmat{1,2,3})$      |
| `\mqty(\dmat[0]{1, 2})`    | $\mqty(\dmat[0]{1,2})$     |
| `\mqty(\dmat{1,2&3\\4&5})` | $\mqty(\dmat{1,2&3\\4&5})$ |

### `\antidiagonalmatrix`

| Source                 | Rendered               |
| ---------------------- | ---------------------- |
| `\admat{a,b,c,...}`    | $\admat{a,b,c,...}$    |
| `\mqty(\admat{1,2,3})` | $\mqty(\admat{1,2,3})$ |
