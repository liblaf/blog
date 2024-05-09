import{_ as n,o as s,c as a,e}from"./app-CoV9NwP4.js";const t={},p=e(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly"><span>Assembly</span></a></h2><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>00000000004015a9 &lt;phase_4&gt;:
b0:
  4015a9:	48 83 ec 18          	sub    $0x18,%rsp
  4015ad:	48 8d 4c 24 08       	lea    0x8(%rsp),%rcx
  4015b2:	48 8d 54 24 0c       	lea    0xc(%rsp),%rdx
  4015b7:	48 8d 35 77 1e 00 00 	lea    0x1e77(%rip),%rsi        # 403435 &lt;array.3354+0x255&gt;
  4015be:	b8 00 00 00 00       	mov    $0x0,%eax
  4015c3:	e8 68 fb ff ff       	callq  401130 &lt;__isoc99_sscanf@plt&gt;
  4015c8:	83 f8 02             	cmp    $0x2,%eax
  4015cb:	75 0c                	jne    4015d9 &lt;phase_4+0x30&gt;
  4015cd:	8b 44 24 08          	mov    0x8(%rsp),%eax
  4015d1:	83 e8 02             	sub    $0x2,%eax
  4015d4:	83 f8 02             	cmp    $0x2,%eax
  4015d7:	76 05                	jbe    4015de &lt;phase_4+0x35&gt;
b1:
  4015d9:	e8 7e 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b2:
  4015de:	8b 74 24 08          	mov    0x8(%rsp),%esi
  4015e2:	bf 09 00 00 00       	mov    $0x9,%edi
  4015e7:	e8 85 ff ff ff       	callq  401571 &lt;func4&gt;
  4015ec:	3b 44 24 0c          	cmp    0xc(%rsp),%eax
  4015f0:	74 05                	je     4015f7 &lt;phase_4+0x4e&gt;
  4015f2:	e8 65 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b3:
  4015f7:	48 83 c4 18          	add    $0x18,%rsp
  4015fb:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack"><span>Hack</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(gdb) x/s 0x403435
0x403435:       &quot;%d %d&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c"><span>翻译为 C</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_4</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> <span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">,</span> rdx<span class="token punctuation">,</span> rcx<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rax <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  rsi <span class="token operator">=</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rdi <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>       <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsp<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize"><span>Optimize</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_4</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> <span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// unsigned</span>
    <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token function">func4</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsp<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack-1" tabindex="-1"><a class="header-anchor" href="#hack-1"><span>Hack</span></a></h2><p>输入 <code>x</code>, <code>y</code>, 只需满足 <code>func4(9, y) == x</code> 即可. 注意到运行过程中存在无符号比较, 稳妥的做法是令 <code>0 &lt;= y - 2 &lt;= 2</code>, 不妨取 <code>y = 2</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(gdb) disassemble
Dump of assembler code for function phase_4:
   0x00000000004015a9 &lt;+0&gt;:     sub    $0x18,%rsp
   0x00000000004015ad &lt;+4&gt;:     lea    0x8(%rsp),%rcx
   0x00000000004015b2 &lt;+9&gt;:     lea    0xc(%rsp),%rdx
   0x00000000004015b7 &lt;+14&gt;:    lea    0x1e77(%rip),%rsi        # 0x403435
   0x00000000004015be &lt;+21&gt;:    mov    $0x0,%eax
   0x00000000004015c3 &lt;+26&gt;:    callq  0x401130 &lt;__isoc99_sscanf@plt&gt;
   0x00000000004015c8 &lt;+31&gt;:    cmp    $0x2,%eax
   0x00000000004015cb &lt;+34&gt;:    jne    0x4015d9 &lt;phase_4+48&gt;
   0x00000000004015cd &lt;+36&gt;:    mov    0x8(%rsp),%eax
   0x00000000004015d1 &lt;+40&gt;:    sub    $0x2,%eax
   0x00000000004015d4 &lt;+43&gt;:    cmp    $0x2,%eax
   0x00000000004015d7 &lt;+46&gt;:    jbe    0x4015de &lt;phase_4+53&gt;
   0x00000000004015d9 &lt;+48&gt;:    callq  0x401b5c &lt;explode_bomb&gt;
   0x00000000004015de &lt;+53&gt;:    mov    0x8(%rsp),%esi
   0x00000000004015e2 &lt;+57&gt;:    mov    $0x9,%edi
   0x00000000004015e7 &lt;+62&gt;:    callq  0x401571 &lt;func4&gt;
=&gt; 0x00000000004015ec &lt;+67&gt;:    cmp    0xc(%rsp),%eax
   0x00000000004015f0 &lt;+71&gt;:    je     0x4015f7 &lt;phase_4+78&gt;
   0x00000000004015f2 &lt;+73&gt;:    callq  0x401b5c &lt;explode_bomb&gt;
   0x00000000004015f7 &lt;+78&gt;:    add    $0x18,%rsp
   0x00000000004015fb &lt;+82&gt;:    retq
End of assembler dump.
(gdb) info registers eax
eax            0xb0     176
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>Solution</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>176 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),l=[p];function c(i,o){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","2022-04-04-phase_4.html.vue"]]),u=JSON.parse('{"path":"/2022/course-work/csapp/bomb-lab/2022-04-04-phase_4.html","title":"Bomb Lab: Phase 4","lang":"en-US","frontmatter":{"date":"2022-04-04T00:00:00.000Z","isOriginal":true,"category":["Course Work"],"tag":["Bomb Lab","Computer Organization and Architecture"],"title":"Bomb Lab: Phase 4","description":"Assembly Hack 翻译为 C Optimize Hack 输入 x, y, 只需满足 func4(9, y) == x 即可. 注意到运行过程中存在无符号比较, 稳妥的做法是令 0 <= y - 2 <= 2, 不妨取 y = 2. Solution","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/course-work/csapp/bomb-lab/2022-04-04-phase_4.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Bomb Lab: Phase 4"}],["meta",{"property":"og:description","content":"Assembly Hack 翻译为 C Optimize Hack 输入 x, y, 只需满足 func4(9, y) == x 即可. 注意到运行过程中存在无符号比较, 稳妥的做法是令 0 <= y - 2 <= 2, 不妨取 y = 2. Solution"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Bomb Lab"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:published_time","content":"2022-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bomb Lab: Phase 4\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"Assembly","slug":"assembly","link":"#assembly","children":[]},{"level":2,"title":"Hack","slug":"hack","link":"#hack","children":[]},{"level":2,"title":"翻译为 C","slug":"翻译为-c","link":"#翻译为-c","children":[]},{"level":2,"title":"Optimize","slug":"optimize","link":"#optimize","children":[]},{"level":2,"title":"Hack","slug":"hack-1","link":"#hack-1","children":[]},{"level":2,"title":"Solution","slug":"solution","link":"#solution","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"2022/course-work/csapp/bomb-lab/2022-04-04-phase_4.md","localizedDate":"April 4, 2022","excerpt":"<h2>Assembly</h2>\\n<div class=\\"language-assembly\\" data-ext=\\"assembly\\" data-title=\\"assembly\\"><pre class=\\"language-assembly\\"><code>00000000004015a9 &lt;phase_4&gt;:\\nb0:\\n  4015a9:\\t48 83 ec 18          \\tsub    $0x18,%rsp\\n  4015ad:\\t48 8d 4c 24 08       \\tlea    0x8(%rsp),%rcx\\n  4015b2:\\t48 8d 54 24 0c       \\tlea    0xc(%rsp),%rdx\\n  4015b7:\\t48 8d 35 77 1e 00 00 \\tlea    0x1e77(%rip),%rsi        # 403435 &lt;array.3354+0x255&gt;\\n  4015be:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\n  4015c3:\\te8 68 fb ff ff       \\tcallq  401130 &lt;__isoc99_sscanf@plt&gt;\\n  4015c8:\\t83 f8 02             \\tcmp    $0x2,%eax\\n  4015cb:\\t75 0c                \\tjne    4015d9 &lt;phase_4+0x30&gt;\\n  4015cd:\\t8b 44 24 08          \\tmov    0x8(%rsp),%eax\\n  4015d1:\\t83 e8 02             \\tsub    $0x2,%eax\\n  4015d4:\\t83 f8 02             \\tcmp    $0x2,%eax\\n  4015d7:\\t76 05                \\tjbe    4015de &lt;phase_4+0x35&gt;\\nb1:\\n  4015d9:\\te8 7e 05 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb2:\\n  4015de:\\t8b 74 24 08          \\tmov    0x8(%rsp),%esi\\n  4015e2:\\tbf 09 00 00 00       \\tmov    $0x9,%edi\\n  4015e7:\\te8 85 ff ff ff       \\tcallq  401571 &lt;func4&gt;\\n  4015ec:\\t3b 44 24 0c          \\tcmp    0xc(%rsp),%eax\\n  4015f0:\\t74 05                \\tje     4015f7 &lt;phase_4+0x4e&gt;\\n  4015f2:\\te8 65 05 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb3:\\n  4015f7:\\t48 83 c4 18          \\tadd    $0x18,%rsp\\n  4015fb:\\tc3                   \\tretq\\n</code></pre></div>","autoDesc":true}');export{d as comp,u as data};
