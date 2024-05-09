import{_ as n,o as s,c as a,e as t}from"./app-CoV9NwP4.js";const e={},i=t(`<div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>0000000000401893 &lt;strings_not_equal&gt;:
  401893:	41 54                	push   %r12
  401895:	55                   	push   %rbp
  401896:	53                   	push   %rbx
  401897:	48 89 fb             	mov    %rdi,%rbx
  40189a:	48 89 f5             	mov    %rsi,%rbp
  40189d:	e8 d4 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018a2:	41 89 c4             	mov    %eax,%r12d
  4018a5:	48 89 ef             	mov    %rbp,%rdi
  4018a8:	e8 c9 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018ad:	ba 01 00 00 00       	mov    $0x1,%edx
  4018b2:	41 39 c4             	cmp    %eax,%r12d
  4018b5:	75 3c                	jne    4018f3 &lt;strings_not_equal+0x60&gt;
  4018b7:	0f b6 03             	movzbl (%rbx),%eax
  4018ba:	84 c0                	test   %al,%al
  4018bc:	74 22                	je     4018e0 &lt;strings_not_equal+0x4d&gt;
  4018be:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c1:	74 07                	je     4018ca &lt;strings_not_equal+0x37&gt;
  4018c3:	eb 22                	jmp    4018e7 &lt;strings_not_equal+0x54&gt;
  4018c5:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c8:	75 24                	jne    4018ee &lt;strings_not_equal+0x5b&gt;
  4018ca:	48 83 c3 01          	add    $0x1,%rbx
  4018ce:	48 83 c5 01          	add    $0x1,%rbp
  4018d2:	0f b6 03             	movzbl (%rbx),%eax
  4018d5:	84 c0                	test   %al,%al
  4018d7:	75 ec                	jne    4018c5 &lt;strings_not_equal+0x32&gt;
  4018d9:	ba 00 00 00 00       	mov    $0x0,%edx
  4018de:	eb 13                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
  4018e0:	ba 00 00 00 00       	mov    $0x0,%edx
  4018e5:	eb 0c                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
  4018e7:	ba 01 00 00 00       	mov    $0x1,%edx
  4018ec:	eb 05                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
  4018ee:	ba 01 00 00 00       	mov    $0x1,%edx
  4018f3:	89 d0                	mov    %edx,%eax
  4018f5:	5b                   	pop    %rbx
  4018f6:	5d                   	pop    %rbp
  4018f7:	41 5c                	pop    %r12
  4018f9:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分割-basicblock" tabindex="-1"><a class="header-anchor" href="#分割-basicblock"><span>分割 <code>BasicBlock</code></span></a></h2><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>0000000000401893 &lt;strings_not_equal&gt;:
b0:
  401893:	41 54                	push   %r12
  401895:	55                   	push   %rbp
  401896:	53                   	push   %rbx
  401897:	48 89 fb             	mov    %rdi,%rbx
  40189a:	48 89 f5             	mov    %rsi,%rbp
  40189d:	e8 d4 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018a2:	41 89 c4             	mov    %eax,%r12d
  4018a5:	48 89 ef             	mov    %rbp,%rdi
  4018a8:	e8 c9 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018ad:	ba 01 00 00 00       	mov    $0x1,%edx
  4018b2:	41 39 c4             	cmp    %eax,%r12d
  4018b5:	75 3c                	jne    4018f3 &lt;strings_not_equal+0x60&gt;
  4018b7:	0f b6 03             	movzbl (%rbx),%eax
  4018ba:	84 c0                	test   %al,%al
  4018bc:	74 22                	je     4018e0 &lt;strings_not_equal+0x4d&gt;
  4018be:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c1:	74 07                	je     4018ca &lt;strings_not_equal+0x37&gt;
  4018c3:	eb 22                	jmp    4018e7 &lt;strings_not_equal+0x54&gt;
b1:
  4018c5:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c8:	75 24                	jne    4018ee &lt;strings_not_equal+0x5b&gt;
b2:
  4018ca:	48 83 c3 01          	add    $0x1,%rbx
  4018ce:	48 83 c5 01          	add    $0x1,%rbp
  4018d2:	0f b6 03             	movzbl (%rbx),%eax
  4018d5:	84 c0                	test   %al,%al
  4018d7:	75 ec                	jne    4018c5 &lt;strings_not_equal+0x32&gt;
  4018d9:	ba 00 00 00 00       	mov    $0x0,%edx
  4018de:	eb 13                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
b3:
  4018e0:	ba 00 00 00 00       	mov    $0x0,%edx
  4018e5:	eb 0c                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
b4:
  4018e7:	ba 01 00 00 00       	mov    $0x1,%edx
  4018ec:	eb 05                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
b5:
  4018ee:	ba 01 00 00 00       	mov    $0x1,%edx
b6:
  4018f3:	89 d0                	mov    %edx,%eax
  4018f5:	5b                   	pop    %rbx
  4018f6:	5d                   	pop    %rbp
  4018f7:	41 5c                	pop    %r12
  4018f9:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c"><span>翻译为 C</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">strings_not_equal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token comment">// push r12 rbp rbx</span>
  rbx <span class="token operator">=</span> rdi<span class="token punctuation">;</span>
  rbp <span class="token operator">=</span> rsi<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r12 <span class="token operator">=</span> rax<span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rdi <span class="token operator">=</span> rbp<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>         <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>r12 <span class="token operator">!=</span> rax<span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token operator">*</span>rbx<span class="token punctuation">;</span>    <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> <span class="token operator">*</span>rbp<span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b4<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token operator">*</span>rbp<span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  <span class="token operator">++</span>rbx<span class="token punctuation">;</span>
  <span class="token operator">++</span>rbp<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token operator">*</span>rbx<span class="token punctuation">;</span>    <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
b4<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
b5<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b6<span class="token operator">:</span>
  rax <span class="token operator">=</span> rdx<span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token comment">// pop rbx rbp r12</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xxxxxxxxxx5-1int-string-length-char-rdi-2-char-rdx-rdi-3-while-rdx-rdi-4-return-rdx-rdi-rax5-c" tabindex="-1"><a class="header-anchor" href="#xxxxxxxxxx5-1int-string-length-char-rdi-2-char-rdx-rdi-3-while-rdx-rdi-4-return-rdx-rdi-rax5-c"><span>xxxxxxxxxx5 1int string_length(char* rdi) {2 char* rdx = rdi;3 while (*rdx) ++rdi;4 return rdx - rdi; // rax5}c</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">strings_not_equal</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> rsi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token function">string_length</span><span class="token punctuation">(</span>rsi<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>rbx <span class="token operator">=</span> rdi<span class="token punctuation">,</span> <span class="token operator">*</span>rbp <span class="token operator">=</span> rsi<span class="token punctuation">;</span> <span class="token operator">*</span>rbx<span class="token punctuation">;</span> <span class="token operator">++</span>rbx<span class="token punctuation">,</span> <span class="token operator">++</span>rbp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">!=</span> <span class="token operator">*</span>rbp<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[i];function r(c,p){return s(),a("div",null,l)}const d=n(e,[["render",r],["__file","2022-04-04-strings_not_equal.html.vue"]]),u=JSON.parse('{"path":"/2022/course-work/csapp/bomb-lab/2022-04-04-strings_not_equal.html","title":"Bomb Lab: strings not equal","lang":"en-US","frontmatter":{"date":"2022-04-04T00:00:00.000Z","isOriginal":true,"category":["Course Work"],"tag":["Bomb Lab","Computer Organization and Architecture"],"title":"Bomb Lab: strings not equal","description":"分割 BasicBlock 翻译为 C xxxxxxxxxx5 1int string_length(char* rdi) {2 char* rdx = rdi;3 while (*rdx) ++rdi;4 return rdx - rdi; // rax5}c","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/course-work/csapp/bomb-lab/2022-04-04-strings_not_equal.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Bomb Lab: strings not equal"}],["meta",{"property":"og:description","content":"分割 BasicBlock 翻译为 C xxxxxxxxxx5 1int string_length(char* rdi) {2 char* rdx = rdi;3 while (*rdx) ++rdi;4 return rdx - rdi; // rax5}c"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Bomb Lab"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:published_time","content":"2022-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bomb Lab: strings not equal\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"分割 BasicBlock","slug":"分割-basicblock","link":"#分割-basicblock","children":[]},{"level":2,"title":"翻译为 C","slug":"翻译为-c","link":"#翻译为-c","children":[]},{"level":2,"title":"xxxxxxxxxx5 1int string_length(char* rdi) {2 char* rdx = rdi;3 while (*rdx) ++rdi;4 return rdx - rdi; // rax5}c","slug":"xxxxxxxxxx5-1int-string-length-char-rdi-2-char-rdx-rdi-3-while-rdx-rdi-4-return-rdx-rdi-rax5-c","link":"#xxxxxxxxxx5-1int-string-length-char-rdi-2-char-rdx-rdi-3-while-rdx-rdi-4-return-rdx-rdi-rax5-c","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":2.41,"words":722},"filePathRelative":"2022/course-work/csapp/bomb-lab/2022-04-04-strings_not_equal.md","localizedDate":"April 4, 2022","excerpt":"<div class=\\"language-assembly\\" data-ext=\\"assembly\\" data-title=\\"assembly\\"><pre class=\\"language-assembly\\"><code>0000000000401893 &lt;strings_not_equal&gt;:\\n  401893:\\t41 54                \\tpush   %r12\\n  401895:\\t55                   \\tpush   %rbp\\n  401896:\\t53                   \\tpush   %rbx\\n  401897:\\t48 89 fb             \\tmov    %rdi,%rbx\\n  40189a:\\t48 89 f5             \\tmov    %rsi,%rbp\\n  40189d:\\te8 d4 ff ff ff       \\tcallq  401876 &lt;string_length&gt;\\n  4018a2:\\t41 89 c4             \\tmov    %eax,%r12d\\n  4018a5:\\t48 89 ef             \\tmov    %rbp,%rdi\\n  4018a8:\\te8 c9 ff ff ff       \\tcallq  401876 &lt;string_length&gt;\\n  4018ad:\\tba 01 00 00 00       \\tmov    $0x1,%edx\\n  4018b2:\\t41 39 c4             \\tcmp    %eax,%r12d\\n  4018b5:\\t75 3c                \\tjne    4018f3 &lt;strings_not_equal+0x60&gt;\\n  4018b7:\\t0f b6 03             \\tmovzbl (%rbx),%eax\\n  4018ba:\\t84 c0                \\ttest   %al,%al\\n  4018bc:\\t74 22                \\tje     4018e0 &lt;strings_not_equal+0x4d&gt;\\n  4018be:\\t3a 45 00             \\tcmp    0x0(%rbp),%al\\n  4018c1:\\t74 07                \\tje     4018ca &lt;strings_not_equal+0x37&gt;\\n  4018c3:\\teb 22                \\tjmp    4018e7 &lt;strings_not_equal+0x54&gt;\\n  4018c5:\\t3a 45 00             \\tcmp    0x0(%rbp),%al\\n  4018c8:\\t75 24                \\tjne    4018ee &lt;strings_not_equal+0x5b&gt;\\n  4018ca:\\t48 83 c3 01          \\tadd    $0x1,%rbx\\n  4018ce:\\t48 83 c5 01          \\tadd    $0x1,%rbp\\n  4018d2:\\t0f b6 03             \\tmovzbl (%rbx),%eax\\n  4018d5:\\t84 c0                \\ttest   %al,%al\\n  4018d7:\\t75 ec                \\tjne    4018c5 &lt;strings_not_equal+0x32&gt;\\n  4018d9:\\tba 00 00 00 00       \\tmov    $0x0,%edx\\n  4018de:\\teb 13                \\tjmp    4018f3 &lt;strings_not_equal+0x60&gt;\\n  4018e0:\\tba 00 00 00 00       \\tmov    $0x0,%edx\\n  4018e5:\\teb 0c                \\tjmp    4018f3 &lt;strings_not_equal+0x60&gt;\\n  4018e7:\\tba 01 00 00 00       \\tmov    $0x1,%edx\\n  4018ec:\\teb 05                \\tjmp    4018f3 &lt;strings_not_equal+0x60&gt;\\n  4018ee:\\tba 01 00 00 00       \\tmov    $0x1,%edx\\n  4018f3:\\t89 d0                \\tmov    %edx,%eax\\n  4018f5:\\t5b                   \\tpop    %rbx\\n  4018f6:\\t5d                   \\tpop    %rbp\\n  4018f7:\\t41 5c                \\tpop    %r12\\n  4018f9:\\tc3                   \\tretq\\n</code></pre></div>","autoDesc":true}');export{d as comp,u as data};
