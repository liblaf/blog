import{_ as e,o as i,c as a,e as l}from"./app-CoV9NwP4.js";const t={},s=l(`<p>基于 Segregated Free Lists + First Fit + Immediate Coalescing + Smart Reallocation 实现.</p><h2 id="segregated-free-lists" tabindex="-1"><a class="header-anchor" href="#segregated-free-lists"><span>Segregated Free Lists</span></a></h2><p>使用最开始的 9 个 Word 存储 (0, 32], (32, 64], …, (2048, 4096], (4096, inf) 分块大小的 Free List Head, 同时维护这 9 个链表.</p><p>在代码中, 我们约定 <code>Pred</code> 和 <code>Succ</code> 表示链表中的拓扑顺序, <code>Prev</code> 和 <code>Next</code> 表示 block 在 <code>mem_heap</code> 上的地址顺序.</p><p>事实上, Explicit Free Lists 可看作 <code>num_size_class = 1</code> 的 Segregated Free Lists, 即只存储一个 Free List Head, 维护一个链表.</p><p>Implicit Free Lists 相较于 Explicit Free List, 仅需修改 <code>GetPred</code> 和 <code>GetSucc</code> 沿 <code>PrevBlock</code> 和 <code>NextBlock</code> 遍历即可.</p><h2 id="first-fit" tabindex="-1"><a class="header-anchor" href="#first-fit"><span>First Fit</span></a></h2><p>从头开始搜索空闲链表, 选择第一个合适的空闲块.</p><h2 id="immediate-coalescing" tabindex="-1"><a class="header-anchor" href="#immediate-coalescing"><span>Immediate Coalescing</span></a></h2><p>这是一种最简单的实现, 即在每次一个块被释放时, 就合并所有相邻的块.</p><p>或者, 也可以选择 Deferred Coalescing, 直到某次 <code>malloc</code> 失败后再扫描整个堆进行合并.</p><h2 id="smart-reallocation" tabindex="-1"><a class="header-anchor" href="#smart-reallocation"><span>Smart Reallocation</span></a></h2><p>若 <code>new_size &lt; old_size</code>, 则直接将原 block 压缩.</p><p>否则, 若原 block 紧邻后面的一个 block 是空闲的, 则尝试将两者合并, 以减少拷贝.</p><p>如果合并后的大小仍然不能满足 <code>new_size</code> 的要求, 则重新 <code>malloc</code> 一块足够大的空间, 拷贝并释放原有空间.</p><h2 id="mm-check" tabindex="-1"><a class="header-anchor" href="#mm-check"><span><code>mm_check()</code></span></a></h2><p><code>mm_check()</code> 实现了如下检查:</p><ol><li>Prologue and Epilogue check</li><li>header &amp; footer consistency check</li><li>Is every block in the free list marked as free ?</li><li>Are there any contiguous free blocks that somehow escaped coalescing ?</li><li>Is every free block actually in the free list ?</li><li>Do the pointers in the free list point to valid free blocks ?</li><li>Do any allocated blocks overlap ?</li><li>Do the pointers in a heap block point to valid heap addresses ?</li></ol><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance"><span>Performance</span></a></h2><p>下面是一些其他的策略的测试结果.</p><h3 id="segregated-free-lists-first-fit-immediate-coalescing-smart-reallocation" tabindex="-1"><a class="header-anchor" href="#segregated-free-lists-first-fit-immediate-coalescing-smart-reallocation"><span>Segregated Free Lists + First Fit + Immediate Coalescing + Smart Reallocation</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>trace  valid  util     ops      secs  Kops
 0       yes   97%    5694  0.000533 10677
 1       yes   94%    5848  0.000573 10209
 2       yes   98%    6648  0.000639 10397
 3       yes   99%    5380  0.000518 10396
 4       yes   66%   14400  0.000910 15828
 5       yes   88%    4800  0.000725  6617
 6       yes   86%    4800  0.000725  6623
 7       yes   55%   12000  0.000946 12689
 8       yes   51%   24000  0.001910 12568
 9       yes   28%   14401  0.080342   179
10       yes   26%   14401  0.001990  7235
Total          72%  112372  0.089810  1251

Perf index = 43 (util) + 40 (thru) = 83/100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="implicit-free-lists-first-fit-immediate-coalescing-naive-reallocation" tabindex="-1"><a class="header-anchor" href="#implicit-free-lists-first-fit-immediate-coalescing-naive-reallocation"><span>Implicit Free Lists + First Fit + Immediate Coalescing + Naive Reallocation</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>trace  valid  util     ops      secs  Kops
 0       yes   99%    5694  0.010029   568
 1       yes  100%    5848  0.009354   625
 2       yes   99%    6648  0.015462   430
 3       yes  100%    5380  0.011415   471
 4       yes   67%   14400  0.000296 48567
 5       yes   92%    4800  0.010036   478
 6       yes   92%    4800  0.009214   521
 7       yes   55%   12000  0.248635    48
 8       yes   51%   24000  0.442400    54
 9       yes   31%   14401  0.136409   106
10       yes   38%   14401  0.005392  2671
Total          75%  112372  0.898644   125

Perf index = 45 (util) + 8 (thru) = 53/100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="implicit-free-lists-next-fit-immediate-coalescing-naive-reallocation" tabindex="-1"><a class="header-anchor" href="#implicit-free-lists-next-fit-immediate-coalescing-naive-reallocation"><span>Implicit Free Lists + Next Fit + Immediate Coalescing + Naive Reallocation</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>trace  valid  util     ops      secs  Kops
 0       yes   90%    5694  0.002457  2317
 1       yes   92%    5848  0.001583  3694
 2       yes   95%    6648  0.004453  1493
 3       yes   97%    5380  0.004644  1159
 4       yes   67%   14400  0.000352 40874
 5       yes   91%    4800  0.005377   893
 6       yes   89%    4800  0.004953   969
 7       yes   55%   12000  0.025501   471
 8       yes   51%   24000  0.012525  1916
 9       yes   31%   14401  0.136150   106
10       yes   38%   14401  0.005432  2651
Total          72%  112372  0.203427   552

Perf index = 43 (util) + 37 (thru) = 80/100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="implicit-free-lists-best-fit-immediate-coalescing-naive-reallocation" tabindex="-1"><a class="header-anchor" href="#implicit-free-lists-best-fit-immediate-coalescing-naive-reallocation"><span>Implicit Free Lists + Best Fit + Immediate Coalescing + Naive Reallocation</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>trace  valid  util     ops      secs  Kops
 0       yes   99%    5694  0.013798   413
 1       yes  100%    5848  0.012763   458
 2       yes   99%    6648  0.020102   331
 3       yes  100%    5380  0.015414   349
 4       yes   67%   14400  0.000324 44403
 5       yes   96%    4800  0.021954   219
 6       yes   95%    4800  0.021399   224
 7       yes   55%   12000  0.294868    41
 8       yes   51%   24000  0.530547    45
 9       yes   24%   14401  0.157507    91
10       yes   26%   14401  0.005491  2622
Total          74%  112372  1.094166   103

Perf index = 44 (util) + 7 (thru) = 51/100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),n=[s];function c(r,d){return i(),a("div",null,n)}const m=e(t,[["render",c],["__file","2022-06-06-malloc-lab.html.vue"]]),v=JSON.parse('{"path":"/2022/course-work/csapp/2022-06-06-malloc-lab.html","title":"Malloc Lab","lang":"en-US","frontmatter":{"date":"2022-06-06T00:00:00.000Z","isOriginal":true,"category":["Course Work"],"tag":["Computer Organization and Architecture","Malloc Lab"],"title":"Malloc Lab","description":"基于 Segregated Free Lists + First Fit + Immediate Coalescing + Smart Reallocation 实现. Segregated Free Lists 使用最开始的 9 个 Word 存储 (0, 32], (32, 64], …, (2048, 4096], (4096, inf) 分块大...","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/course-work/csapp/2022-06-06-malloc-lab.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Malloc Lab"}],["meta",{"property":"og:description","content":"基于 Segregated Free Lists + First Fit + Immediate Coalescing + Smart Reallocation 实现. Segregated Free Lists 使用最开始的 9 个 Word 存储 (0, 32], (32, 64], …, (2048, 4096], (4096, inf) 分块大..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:tag","content":"Malloc Lab"}],["meta",{"property":"article:published_time","content":"2022-06-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Malloc Lab\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"Segregated Free Lists","slug":"segregated-free-lists","link":"#segregated-free-lists","children":[]},{"level":2,"title":"First Fit","slug":"first-fit","link":"#first-fit","children":[]},{"level":2,"title":"Immediate Coalescing","slug":"immediate-coalescing","link":"#immediate-coalescing","children":[]},{"level":2,"title":"Smart Reallocation","slug":"smart-reallocation","link":"#smart-reallocation","children":[]},{"level":2,"title":"mm_check()","slug":"mm-check","link":"#mm-check","children":[]},{"level":2,"title":"Performance","slug":"performance","link":"#performance","children":[{"level":3,"title":"Segregated Free Lists + First Fit + Immediate Coalescing + Smart Reallocation","slug":"segregated-free-lists-first-fit-immediate-coalescing-smart-reallocation","link":"#segregated-free-lists-first-fit-immediate-coalescing-smart-reallocation","children":[]},{"level":3,"title":"Implicit Free Lists + First Fit + Immediate Coalescing + Naive Reallocation","slug":"implicit-free-lists-first-fit-immediate-coalescing-naive-reallocation","link":"#implicit-free-lists-first-fit-immediate-coalescing-naive-reallocation","children":[]},{"level":3,"title":"Implicit Free Lists + Next Fit + Immediate Coalescing + Naive Reallocation","slug":"implicit-free-lists-next-fit-immediate-coalescing-naive-reallocation","link":"#implicit-free-lists-next-fit-immediate-coalescing-naive-reallocation","children":[]},{"level":3,"title":"Implicit Free Lists + Best Fit + Immediate Coalescing + Naive Reallocation","slug":"implicit-free-lists-best-fit-immediate-coalescing-naive-reallocation","link":"#implicit-free-lists-best-fit-immediate-coalescing-naive-reallocation","children":[]}]}],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":2.67,"words":802},"filePathRelative":"2022/course-work/csapp/2022-06-06-malloc-lab.md","localizedDate":"June 6, 2022","excerpt":"<p>基于 Segregated Free Lists + First Fit + Immediate Coalescing + Smart Reallocation 实现.</p>\\n<h2>Segregated Free Lists</h2>\\n<p>使用最开始的 9 个 Word 存储 (0, 32], (32, 64], …, (2048, 4096], (4096, inf) 分块大小的 Free List Head, 同时维护这 9 个链表.</p>\\n<p>在代码中, 我们约定 <code>Pred</code> 和 <code>Succ</code> 表示链表中的拓扑顺序, <code>Prev</code> 和 <code>Next</code> 表示 block 在 <code>mem_heap</code> 上的地址顺序.</p>","autoDesc":true}');export{m as comp,v as data};
