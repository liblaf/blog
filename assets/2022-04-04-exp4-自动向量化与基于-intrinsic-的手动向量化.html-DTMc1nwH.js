import{_ as n,o as a,c as s,e as t}from"./app-CoV9NwP4.js";const e={},p=t(`<h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance"><span>Performance</span></a></h2><table><thead><tr><th>Method</th><th>Time</th></tr></thead><tbody><tr><td>baseline</td><td>4711 us</td></tr><tr><td>auto simd</td><td>530 us</td></tr><tr><td>intrinsic</td><td>514 us</td></tr></tbody></table><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation"><span>Implementation</span></a></h2><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">a_plus_b_intrinsic</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token operator">*</span> b<span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token operator">*</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_mm256_store_ps</span><span class="token punctuation">(</span>
        c <span class="token operator">+</span> i<span class="token punctuation">,</span> <span class="token function">_mm256_add_ps</span><span class="token punctuation">(</span><span class="token function">_mm256_load_ps</span><span class="token punctuation">(</span>a <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_mm256_load_ps</span><span class="token punctuation">(</span>b <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return a(),s("div",null,o)}const u=n(e,[["render",c],["__file","2022-04-04-exp4-自动向量化与基于-intrinsic-的手动向量化.html.vue"]]),d=JSON.parse('{"path":"/2022/course-work/hpc/2022-04-04-exp4-%E8%87%AA%E5%8A%A8%E5%90%91%E9%87%8F%E5%8C%96%E4%B8%8E%E5%9F%BA%E4%BA%8E-intrinsic-%E7%9A%84%E6%89%8B%E5%8A%A8%E5%90%91%E9%87%8F%E5%8C%96.html","title":"exp4: 自动向量化与基于 intrinsic 的手动向量化","lang":"en-US","frontmatter":{"date":"2022-04-04T00:00:00.000Z","isOriginal":true,"category":["Course Work"],"tag":["Introduction to High Performance Computing","intrinsic"],"title":"exp4: 自动向量化与基于 intrinsic 的手动向量化","description":"Performance Implementation","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/course-work/hpc/2022-04-04-exp4-%E8%87%AA%E5%8A%A8%E5%90%91%E9%87%8F%E5%8C%96%E4%B8%8E%E5%9F%BA%E4%BA%8E-intrinsic-%E7%9A%84%E6%89%8B%E5%8A%A8%E5%90%91%E9%87%8F%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"exp4: 自动向量化与基于 intrinsic 的手动向量化"}],["meta",{"property":"og:description","content":"Performance Implementation"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Introduction to High Performance Computing"}],["meta",{"property":"article:tag","content":"intrinsic"}],["meta",{"property":"article:published_time","content":"2022-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"exp4: 自动向量化与基于 intrinsic 的手动向量化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"Performance","slug":"performance","link":"#performance","children":[]},{"level":2,"title":"Implementation","slug":"implementation","link":"#implementation","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":0.23,"words":70},"filePathRelative":"2022/course-work/hpc/2022-04-04-exp4-自动向量化与基于-intrinsic-的手动向量化.md","localizedDate":"April 4, 2022","excerpt":"<h2>Performance</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Method</th>\\n<th>Time</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>baseline</td>\\n<td>4711 us</td>\\n</tr>\\n<tr>\\n<td>auto simd</td>\\n<td>530 us</td>\\n</tr>\\n<tr>\\n<td>intrinsic</td>\\n<td>514 us</td>\\n</tr>\\n</tbody>\\n</table>\\n<h2>Implementation</h2>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">void</span> <span class=\\"token function\\">a_plus_b_intrinsic</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">float</span><span class=\\"token operator\\">*</span> a<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">float</span><span class=\\"token operator\\">*</span> b<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">float</span><span class=\\"token operator\\">*</span> c<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">_mm256_store_ps</span><span class=\\"token punctuation\\">(</span>\\n        c <span class=\\"token operator\\">+</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">_mm256_add_ps</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">_mm256_load_ps</span><span class=\\"token punctuation\\">(</span>a <span class=\\"token operator\\">+</span> i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">_mm256_load_ps</span><span class=\\"token punctuation\\">(</span>b <span class=\\"token operator\\">+</span> i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,d as data};
