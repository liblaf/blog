import{_ as a,r as t,o as p,c as e,d as o,e as n}from"./app-CoV9NwP4.js";const c={},l=n(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly"><span>Assembly</span></a></h2><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>0000000000401641 &lt;phase_6&gt;:
b0:
  401641:	41 56                	push   %r14
  401643:	41 55                	push   %r13
  401645:	41 54                	push   %r12
  401647:	55                   	push   %rbp
  401648:	53                   	push   %rbx
  401649:	48 83 ec 50          	sub    $0x50,%rsp
  40164d:	49 89 e5             	mov    %rsp,%r13
  401650:	48 89 e6             	mov    %rsp,%rsi
  401653:	e8 40 05 00 00       	callq  401b98 &lt;read_six_numbers&gt;
  401658:	49 89 e6             	mov    %rsp,%r14
  40165b:	41 bc 00 00 00 00    	mov    $0x0,%r12d
b1:
  401661:	4c 89 ed             	mov    %r13,%rbp
  401664:	41 8b 45 00          	mov    0x0(%r13),%eax
  401668:	83 e8 01             	sub    $0x1,%eax
  40166b:	83 f8 05             	cmp    $0x5,%eax
  40166e:	76 05                	jbe    401675 &lt;phase_6+0x34&gt;
b2:
  401670:	e8 e7 04 00 00       	callq  401b5c &lt;explode_bomb&gt;
b3:
  401675:	41 83 c4 01          	add    $0x1,%r12d
  401679:	41 83 fc 06          	cmp    $0x6,%r12d
  40167d:	74 21                	je     4016a0 &lt;phase_6+0x5f&gt;
b4:
  40167f:	44 89 e3             	mov    %r12d,%ebx
b5:
  401682:	48 63 c3             	movslq %ebx,%rax
  401685:	8b 04 84             	mov    (%rsp,%rax,4),%eax
  401688:	39 45 00             	cmp    %eax,0x0(%rbp)
  40168b:	75 05                	jne    401692 &lt;phase_6+0x51&gt;
b6:
  40168d:	e8 ca 04 00 00       	callq  401b5c &lt;explode_bomb&gt;
b7:
  401692:	83 c3 01             	add    $0x1,%ebx
  401695:	83 fb 05             	cmp    $0x5,%ebx
  401698:	7e e8                	jle    401682 &lt;phase_6+0x41&gt;
b8:
  40169a:	49 83 c5 04          	add    $0x4,%r13
  40169e:	eb c1                	jmp    401661 &lt;phase_6+0x20&gt;
b9:
  4016a0:	48 8d 74 24 18       	lea    0x18(%rsp),%rsi
  4016a5:	4c 89 f0             	mov    %r14,%rax
  4016a8:	b9 07 00 00 00       	mov    $0x7,%ecx
b10:
  4016ad:	89 ca                	mov    %ecx,%edx
  4016af:	2b 10                	sub    (%rax),%edx
  4016b1:	89 10                	mov    %edx,(%rax)
  4016b3:	48 83 c0 04          	add    $0x4,%rax
  4016b7:	48 39 f0             	cmp    %rsi,%rax
  4016ba:	75 f1                	jne    4016ad &lt;phase_6+0x6c&gt;
b11:
  4016bc:	be 00 00 00 00       	mov    $0x0,%esi
  4016c1:	eb 23                	jmp    4016e6 &lt;phase_6+0xa5&gt;
b12:
  4016c3:	48 8b 52 08          	mov    0x8(%rdx),%rdx
  4016c7:	83 c0 01             	add    $0x1,%eax
  4016ca:	39 c8                	cmp    %ecx,%eax
  4016cc:	75 f5                	jne    4016c3 &lt;phase_6+0x82&gt;
b13:
  4016ce:	eb 07                	jmp    4016d7 &lt;phase_6+0x96&gt;
b14:
  4016d0:	48 c7 c2 20 53 40 00 	mov    $0x405320,%rdx
b15:
  4016d7:	48 89 54 74 20       	mov    %rdx,0x20(%rsp,%rsi,2)
  4016dc:	48 83 c6 04          	add    $0x4,%rsi
  4016e0:	48 83 fe 18          	cmp    $0x18,%rsi
  4016e4:	74 16                	je     4016fc &lt;phase_6+0xbb&gt;
b16:
  4016e6:	8b 0c 34             	mov    (%rsp,%rsi,1),%ecx
  4016e9:	83 f9 01             	cmp    $0x1,%ecx
  4016ec:	7e e2                	jle    4016d0 &lt;phase_6+0x8f&gt;
b17:
  4016ee:	b8 01 00 00 00       	mov    $0x1,%eax
  4016f3:	48 c7 c2 20 53 40 00 	mov    $0x405320,%rdx
  4016fa:	eb c7                	jmp    4016c3 &lt;phase_6+0x82&gt;
b18:
  4016fc:	48 8b 5c 24 20       	mov    0x20(%rsp),%rbx
  401701:	48 8d 44 24 28       	lea    0x28(%rsp),%rax
  401706:	48 8d 74 24 50       	lea    0x50(%rsp),%rsi
  40170b:	48 89 d9             	mov    %rbx,%rcx
b19:
  40170e:	48 8b 10             	mov    (%rax),%rdx
  401711:	48 89 51 08          	mov    %rdx,0x8(%rcx)
  401715:	48 83 c0 08          	add    $0x8,%rax
  401719:	48 39 f0             	cmp    %rsi,%rax
  40171c:	74 05                	je     401723 &lt;phase_6+0xe2&gt;
b20:
  40171e:	48 89 d1             	mov    %rdx,%rcx
  401721:	eb eb                	jmp    40170e &lt;phase_6+0xcd&gt;
b21:
  401723:	48 c7 42 08 00 00 00 	movq   $0x0,0x8(%rdx)
  40172a:	00
  40172b:	bd 05 00 00 00       	mov    $0x5,%ebp
b22:
  401730:	48 8b 43 08          	mov    0x8(%rbx),%rax
  401734:	8b 00                	mov    (%rax),%eax
  401736:	39 03                	cmp    %eax,(%rbx)
  401738:	7d 05                	jge    40173f &lt;phase_6+0xfe&gt;
b23:
  40173a:	e8 1d 04 00 00       	callq  401b5c &lt;explode_bomb&gt;
b24:
  40173f:	48 8b 5b 08          	mov    0x8(%rbx),%rbx
  401743:	83 ed 01             	sub    $0x1,%ebp
  401746:	75 e8                	jne    401730 &lt;phase_6+0xef&gt;
b25:
  401748:	48 83 c4 50          	add    $0x50,%rsp
  40174c:	5b                   	pop    %rbx
  40174d:	5d                   	pop    %rbp
  40174e:	41 5c                	pop    %r12
  401750:	41 5d                	pop    %r13
  401752:	41 5e                	pop    %r14
  401754:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c"><span>翻译为 C</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  rsp <span class="token operator">-=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> r13 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rsi <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> r14 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token keyword">int</span> r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rbp <span class="token operator">=</span> r13<span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token operator">*</span>r13<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rax <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>r12 <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b9<span class="token punctuation">;</span>
b4<span class="token operator">:</span>
  <span class="token keyword">int</span> rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span>
b5<span class="token operator">:</span>
  rax <span class="token operator">=</span> rsp<span class="token punctuation">[</span>rbx<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbp <span class="token operator">!=</span> rax<span class="token punctuation">)</span> <span class="token keyword">goto</span> b7<span class="token punctuation">;</span>
b6<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b7<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>rbx <span class="token operator">&lt;=</span> <span class="token number">0x5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
b8<span class="token operator">:</span>
  r13 <span class="token operator">+=</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
b9<span class="token operator">:</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x18</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> r14<span class="token punctuation">;</span>
  <span class="token keyword">int</span> rcx <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
b10<span class="token operator">:</span>
  <span class="token keyword">int</span> rdx <span class="token operator">=</span> rcx<span class="token punctuation">;</span>
  rdx <span class="token operator">-=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token operator">*</span>rax <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  rax <span class="token operator">+=</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> rsi<span class="token punctuation">)</span> <span class="token keyword">goto</span> b10<span class="token punctuation">;</span>
b11<span class="token operator">:</span>
  <span class="token keyword">int</span> rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b16<span class="token punctuation">;</span>
b12<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>rax <span class="token operator">!=</span> rcx<span class="token punctuation">)</span> <span class="token keyword">goto</span> b12<span class="token punctuation">;</span>
b13<span class="token operator">:</span>
  <span class="token keyword">goto</span> b15<span class="token punctuation">;</span>
b14<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
b15<span class="token operator">:</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  rsi <span class="token operator">+=</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsi <span class="token operator">==</span> <span class="token number">0x18</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b18<span class="token punctuation">;</span>
b16<span class="token operator">:</span>
  <span class="token keyword">int</span> rcx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rcx <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b14<span class="token punctuation">;</span>
b17<span class="token operator">:</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b12<span class="token punctuation">;</span>
b18<span class="token operator">:</span>
  rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x28</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> rbx<span class="token punctuation">;</span>
b19<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rcx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  rax <span class="token operator">+=</span> <span class="token number">0x8</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsi<span class="token punctuation">)</span> <span class="token keyword">goto</span> b21<span class="token punctuation">;</span>
b20<span class="token operator">:</span>
  rcx <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b19<span class="token punctuation">;</span>
b21<span class="token operator">:</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rbp <span class="token operator">=</span> <span class="token number">0x5</span><span class="token punctuation">;</span>
b22<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>   <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">&gt;=</span> rax<span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b24<span class="token punctuation">;</span>
b23<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b24<span class="token operator">:</span>
  rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b22<span class="token punctuation">;</span>
b25<span class="token operator">:</span>
  rsp <span class="token operator">+=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-graph" tabindex="-1"><a class="header-anchor" href="#state-graph"><span>State Graph</span></a></h2>`,5),i=n(`<h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize"><span>Optimize</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  b0<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b1<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rax <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> b2<span class="token punctuation">;</span>
    b3<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>r12 <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    b4<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      b5<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbp <span class="token operator">==</span> rax<span class="token punctuation">)</span> b6<span class="token punctuation">;</span>
      b7<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    b8<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  b9<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    b10<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  b11<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    b16<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rcx <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      b14<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      b17<span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
        b12<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rax <span class="token operator">!=</span> rcx<span class="token punctuation">)</span><span class="token punctuation">;</span>
      b13<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    b15<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rsi <span class="token operator">!=</span> <span class="token number">0x18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  b18<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b19<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsi<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    b20<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  b21<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    b22<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">&lt;</span> rax<span class="token punctuation">)</span> b23<span class="token punctuation">;</span>
    b24<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  b25<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize-1" tabindex="-1"><a class="header-anchor" href="#optimize-1"><span>Optimize</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rsp <span class="token operator">-=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  r13 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r14 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rbp <span class="token operator">=</span> r13<span class="token punctuation">;</span>
    rax <span class="token operator">=</span> r13<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rax <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>r12 <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbp <span class="token operator">==</span> rax<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    r13 <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x18</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> r14<span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    rdx <span class="token operator">=</span> rcx<span class="token punctuation">;</span>
    rdx <span class="token operator">-=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    <span class="token operator">*</span>rax <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
    rax <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    rcx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rcx <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
        rdx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rax <span class="token operator">!=</span> rcx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
    rsi <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rsi <span class="token operator">!=</span> <span class="token number">0x18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x28</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> rbx<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rdx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    <span class="token operator">*</span><span class="token punctuation">(</span>rcx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
    rax <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsi<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    rcx <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  rbp <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    rax <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rax <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">&lt;</span> rax<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rsp <span class="token operator">+=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack"><span>Hack</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(gdb) x/16xg 0x405320
0x405320 &lt;node1&gt;:       0x00000001000002f5      0x0000000000000000
0x405330 &lt;node2&gt;:       0x00000002000002c7      0x0000000000405340
0x405340 &lt;node3&gt;:       0x0000000300000374      0x0000000000405350
0x405350 &lt;node4&gt;:       0x000000040000029a      0x0000000000405360
0x405360 &lt;node5&gt;:       0x00000005000002c2      0x0000000000405200
0x405370:       0x0000000000000000      0x0000000000000000
0x405380 &lt;completed.7098&gt;:      0x0000000000000000      0x0000000000000000
0x405390:       0x0000000000000000      0x0000000000000000
(gdb) x/32xw 0x405320
0x405320 &lt;node1&gt;:       0x000002f5      0x00000001      0x00000000      0x00000000
0x405330 &lt;node2&gt;:       0x000002c7      0x00000002      0x00405340      0x00000000
0x405340 &lt;node3&gt;:       0x00000374      0x00000003      0x00405350      0x00000000
0x405350 &lt;node4&gt;:       0x0000029a      0x00000004      0x00405360      0x00000000
0x405360 &lt;node5&gt;:       0x000002c2      0x00000005      0x00405200      0x00000000
0x405370:       0x00000000      0x00000000      0x00000000      0x00000000
0x405380 &lt;completed.7098&gt;:      0x00000000      0x00000000      0x00000000      0x00000000
0x405390:       0x00000000      0x00000000      0x00000000      0x00000000
(gdb) x/4xg 0x405200
0x405200 &lt;node6&gt;:       0x00000006000000a1      0x0000000000000000
0x405210 &lt;user_password&gt;:       0x64496d4a50745575      0x4c75456b5a5a4744
(gdb) x/8xw 0x405200
0x405200 &lt;node6&gt;:       0x000000a1      0x00000006      0x00405320      0x00000000
0x405210 &lt;user_password&gt;:       0x50745575      0x64496d4a      0x5a5a4744      0x4c75456b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Address</th><th>a</th><th>b</th><th>next</th></tr></thead><tbody><tr><td><code>0x405320 &lt;node1&gt;</code></td><td><code>0x2f5</code></td><td><code>1</code></td><td><code>0x0000000000405330 &lt;node2&gt;</code></td></tr><tr><td><code>0x405330 &lt;node2&gt;</code></td><td><code>0x2c7</code></td><td><code>2</code></td><td><code>0x0000000000405340 &lt;node3&gt;</code></td></tr><tr><td><code>0x405340 &lt;node3&gt;</code></td><td><code>0x374</code></td><td><code>3</code></td><td><code>0x0000000000405350 &lt;node4&gt;</code></td></tr><tr><td><code>0x405350 &lt;node4&gt;</code></td><td><code>0x29a</code></td><td><code>4</code></td><td><code>0x0000000000405360 &lt;node5&gt;</code></td></tr><tr><td><code>0x405360 &lt;node5&gt;</code></td><td><code>0x2c2</code></td><td><code>5</code></td><td><code>0x0000000000405200 &lt;node6&gt;</code></td></tr><tr><td><code>0x405200 &lt;node6&gt;</code></td><td><code>0x0a1</code></td><td><code>0</code></td><td><code>0x0000000000000000 &lt;NULL&gt;</code></td></tr></tbody></table><h2 id="optimize-2" tabindex="-1"><a class="header-anchor" href="#optimize-2"><span>Optimize</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>            <span class="token comment">// rsp + 0x00 -- rsp + 0x18</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rsp1<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// rsp + 0x20 -- rsp + 0x50</span>
  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r12 <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>r12<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span> rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>rbx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">==</span> rsp<span class="token punctuation">[</span>rbx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token operator">*</span>rax <span class="token operator">=</span> <span class="token number">7</span> <span class="token operator">-</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rsi <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rsi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> rax <span class="token operator">&lt;</span> rsp<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> rdx <span class="token operator">=</span> rdx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    rsp1<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rcx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp1<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp1 <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rcx<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    rcx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  rsp1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rbx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rbp <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>rbp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rbx<span class="token operator">-&gt;</span>a <span class="token operator">&lt;</span> rbx<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>a<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> rbx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="analysis" tabindex="-1"><a class="header-anchor" href="#analysis"><span>Analysis</span></a></h2><p>从地址中可以分析出, <code>phase_6</code> 使用到了结构体, 猜想其结构如 <code>struct Node</code> 所示, 表示链表.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不难发现, <code>phase_6</code> 需要输入 6 个 <code>int</code>, 记为 <code>rsp[i]</code>.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r12 <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>r12<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span> rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>rbx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">==</span> rsp<span class="token punctuation">[</span>rbx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查输入的 6 个数均 <code>&lt; 7</code>, 且不重复.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token operator">*</span>rax <span class="token operator">=</span> <span class="token number">7</span> <span class="token operator">-</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将输入的 6 个数用 <code>7</code> 减去, 得到新的 6 个数 <code>rsp[i] = 7 - rsp[i]</code>.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rsi <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rsi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> rax <span class="token operator">&lt;</span> rsp<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> rdx <span class="token operator">=</span> rdx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    rsp1<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将链表的第 <code>rsp[i]</code> 个结点的指针存入 <code>rsp1</code> 内.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rcx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp1<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp1 <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rcx<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    rcx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  rsp1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对链表进行重排序, 按照 <code>rsp[i]</code> 指定的顺序排序.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>  <span class="token keyword">int</span> rbp <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rbx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>rbp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rbx<span class="token operator">-&gt;</span>a <span class="token operator">&lt;</span> rbx<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>a<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> rbx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查排序后的链表是否满足非升序.</p><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>Solution</span></a></h2><p>基于前文 Hack 中得到的数据, 我们可以给出初始时列表元素的值为</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[0x2f5, 0x2c7, 0x374, 0x29a, 0x2c2, 0x0a1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为保证列表按非升序排列, 正确的排列为</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>3 1 2 5 4 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>又因为过程中进行了 <code>rsp[i] = 7 - rsp[i]</code> 的变换, 因此正确的输入为</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>4 6 5 2 3 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30);function r(u,d){const s=t("Mermaid");return p(),e("div",null,[l,o(s,{id:"mermaid-11",code:"eJxdks1ugzAQhO99iu21ERK7IQSsklNfBCpURWqlCqKIx8/AjokdLmg89v58u/Otv41f1/5n6v+Ku70JvqGUorjIoK7U1THgP/WLfHZyyhwLMv7Oo58Zb7s6umqDHA6TmnSd1JlTpW8rP2P0k6tzkI9p+Jf3TpA9s+r0cc3rrs4MtSUe0qLpNOnbJmu4pSrZZcRRhrWCrZD5+uJpGk4JRtkrGncNUiiHMb7ZzO6CcBKDgDSyJpxdk4GiEZSzki0XbV7MjJASkQI6sq9M4oijA9jJfaJSroVGTC01QRmaX5tCCU8w0QO0ZDkiLkawuEHMYERhqBBDX+SSDH03M05GTlZRk5OBNfbVF4eT3D2sxRbhAd1DpEE="}),i])}const b=a(c,[["render",r],["__file","2022-04-04-phase_6.html.vue"]]),v=JSON.parse('{"path":"/2022/course-work/csapp/bomb-lab/2022-04-04-phase_6.html","title":"Bomb Lab: Phase 6","lang":"en-US","frontmatter":{"date":"2022-04-04T00:00:00.000Z","isOriginal":true,"category":["Course Work"],"tag":["Bomb Lab","Computer Organization and Architecture"],"title":"Bomb Lab: Phase 6","description":"Assembly 翻译为 C State Graph Optimize Optimize Hack Optimize Analysis 从地址中可以分析出, phase_6 使用到了结构体, 猜想其结构如 struct Node 所示, 表示链表. 不难发现, phase_6 需要输入 6 个 int, 记为 rsp[i]. 检查输入的 6 个数均 <...","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/course-work/csapp/bomb-lab/2022-04-04-phase_6.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Bomb Lab: Phase 6"}],["meta",{"property":"og:description","content":"Assembly 翻译为 C State Graph Optimize Optimize Hack Optimize Analysis 从地址中可以分析出, phase_6 使用到了结构体, 猜想其结构如 struct Node 所示, 表示链表. 不难发现, phase_6 需要输入 6 个 int, 记为 rsp[i]. 检查输入的 6 个数均 <..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Bomb Lab"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:published_time","content":"2022-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bomb Lab: Phase 6\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"Assembly","slug":"assembly","link":"#assembly","children":[]},{"level":2,"title":"翻译为 C","slug":"翻译为-c","link":"#翻译为-c","children":[]},{"level":2,"title":"State Graph","slug":"state-graph","link":"#state-graph","children":[]},{"level":2,"title":"Optimize","slug":"optimize","link":"#optimize","children":[]},{"level":2,"title":"Optimize","slug":"optimize-1","link":"#optimize-1","children":[]},{"level":2,"title":"Hack","slug":"hack","link":"#hack","children":[]},{"level":2,"title":"Optimize","slug":"optimize-2","link":"#optimize-2","children":[]},{"level":2,"title":"Analysis","slug":"analysis","link":"#analysis","children":[]},{"level":2,"title":"Solution","slug":"solution","link":"#solution","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":6.27,"words":1882},"filePathRelative":"2022/course-work/csapp/bomb-lab/2022-04-04-phase_6.md","localizedDate":"April 4, 2022","excerpt":"<h2>Assembly</h2>\\n<div class=\\"language-assembly\\" data-ext=\\"assembly\\" data-title=\\"assembly\\"><pre class=\\"language-assembly\\"><code>0000000000401641 &lt;phase_6&gt;:\\nb0:\\n  401641:\\t41 56                \\tpush   %r14\\n  401643:\\t41 55                \\tpush   %r13\\n  401645:\\t41 54                \\tpush   %r12\\n  401647:\\t55                   \\tpush   %rbp\\n  401648:\\t53                   \\tpush   %rbx\\n  401649:\\t48 83 ec 50          \\tsub    $0x50,%rsp\\n  40164d:\\t49 89 e5             \\tmov    %rsp,%r13\\n  401650:\\t48 89 e6             \\tmov    %rsp,%rsi\\n  401653:\\te8 40 05 00 00       \\tcallq  401b98 &lt;read_six_numbers&gt;\\n  401658:\\t49 89 e6             \\tmov    %rsp,%r14\\n  40165b:\\t41 bc 00 00 00 00    \\tmov    $0x0,%r12d\\nb1:\\n  401661:\\t4c 89 ed             \\tmov    %r13,%rbp\\n  401664:\\t41 8b 45 00          \\tmov    0x0(%r13),%eax\\n  401668:\\t83 e8 01             \\tsub    $0x1,%eax\\n  40166b:\\t83 f8 05             \\tcmp    $0x5,%eax\\n  40166e:\\t76 05                \\tjbe    401675 &lt;phase_6+0x34&gt;\\nb2:\\n  401670:\\te8 e7 04 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb3:\\n  401675:\\t41 83 c4 01          \\tadd    $0x1,%r12d\\n  401679:\\t41 83 fc 06          \\tcmp    $0x6,%r12d\\n  40167d:\\t74 21                \\tje     4016a0 &lt;phase_6+0x5f&gt;\\nb4:\\n  40167f:\\t44 89 e3             \\tmov    %r12d,%ebx\\nb5:\\n  401682:\\t48 63 c3             \\tmovslq %ebx,%rax\\n  401685:\\t8b 04 84             \\tmov    (%rsp,%rax,4),%eax\\n  401688:\\t39 45 00             \\tcmp    %eax,0x0(%rbp)\\n  40168b:\\t75 05                \\tjne    401692 &lt;phase_6+0x51&gt;\\nb6:\\n  40168d:\\te8 ca 04 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb7:\\n  401692:\\t83 c3 01             \\tadd    $0x1,%ebx\\n  401695:\\t83 fb 05             \\tcmp    $0x5,%ebx\\n  401698:\\t7e e8                \\tjle    401682 &lt;phase_6+0x41&gt;\\nb8:\\n  40169a:\\t49 83 c5 04          \\tadd    $0x4,%r13\\n  40169e:\\teb c1                \\tjmp    401661 &lt;phase_6+0x20&gt;\\nb9:\\n  4016a0:\\t48 8d 74 24 18       \\tlea    0x18(%rsp),%rsi\\n  4016a5:\\t4c 89 f0             \\tmov    %r14,%rax\\n  4016a8:\\tb9 07 00 00 00       \\tmov    $0x7,%ecx\\nb10:\\n  4016ad:\\t89 ca                \\tmov    %ecx,%edx\\n  4016af:\\t2b 10                \\tsub    (%rax),%edx\\n  4016b1:\\t89 10                \\tmov    %edx,(%rax)\\n  4016b3:\\t48 83 c0 04          \\tadd    $0x4,%rax\\n  4016b7:\\t48 39 f0             \\tcmp    %rsi,%rax\\n  4016ba:\\t75 f1                \\tjne    4016ad &lt;phase_6+0x6c&gt;\\nb11:\\n  4016bc:\\tbe 00 00 00 00       \\tmov    $0x0,%esi\\n  4016c1:\\teb 23                \\tjmp    4016e6 &lt;phase_6+0xa5&gt;\\nb12:\\n  4016c3:\\t48 8b 52 08          \\tmov    0x8(%rdx),%rdx\\n  4016c7:\\t83 c0 01             \\tadd    $0x1,%eax\\n  4016ca:\\t39 c8                \\tcmp    %ecx,%eax\\n  4016cc:\\t75 f5                \\tjne    4016c3 &lt;phase_6+0x82&gt;\\nb13:\\n  4016ce:\\teb 07                \\tjmp    4016d7 &lt;phase_6+0x96&gt;\\nb14:\\n  4016d0:\\t48 c7 c2 20 53 40 00 \\tmov    $0x405320,%rdx\\nb15:\\n  4016d7:\\t48 89 54 74 20       \\tmov    %rdx,0x20(%rsp,%rsi,2)\\n  4016dc:\\t48 83 c6 04          \\tadd    $0x4,%rsi\\n  4016e0:\\t48 83 fe 18          \\tcmp    $0x18,%rsi\\n  4016e4:\\t74 16                \\tje     4016fc &lt;phase_6+0xbb&gt;\\nb16:\\n  4016e6:\\t8b 0c 34             \\tmov    (%rsp,%rsi,1),%ecx\\n  4016e9:\\t83 f9 01             \\tcmp    $0x1,%ecx\\n  4016ec:\\t7e e2                \\tjle    4016d0 &lt;phase_6+0x8f&gt;\\nb17:\\n  4016ee:\\tb8 01 00 00 00       \\tmov    $0x1,%eax\\n  4016f3:\\t48 c7 c2 20 53 40 00 \\tmov    $0x405320,%rdx\\n  4016fa:\\teb c7                \\tjmp    4016c3 &lt;phase_6+0x82&gt;\\nb18:\\n  4016fc:\\t48 8b 5c 24 20       \\tmov    0x20(%rsp),%rbx\\n  401701:\\t48 8d 44 24 28       \\tlea    0x28(%rsp),%rax\\n  401706:\\t48 8d 74 24 50       \\tlea    0x50(%rsp),%rsi\\n  40170b:\\t48 89 d9             \\tmov    %rbx,%rcx\\nb19:\\n  40170e:\\t48 8b 10             \\tmov    (%rax),%rdx\\n  401711:\\t48 89 51 08          \\tmov    %rdx,0x8(%rcx)\\n  401715:\\t48 83 c0 08          \\tadd    $0x8,%rax\\n  401719:\\t48 39 f0             \\tcmp    %rsi,%rax\\n  40171c:\\t74 05                \\tje     401723 &lt;phase_6+0xe2&gt;\\nb20:\\n  40171e:\\t48 89 d1             \\tmov    %rdx,%rcx\\n  401721:\\teb eb                \\tjmp    40170e &lt;phase_6+0xcd&gt;\\nb21:\\n  401723:\\t48 c7 42 08 00 00 00 \\tmovq   $0x0,0x8(%rdx)\\n  40172a:\\t00\\n  40172b:\\tbd 05 00 00 00       \\tmov    $0x5,%ebp\\nb22:\\n  401730:\\t48 8b 43 08          \\tmov    0x8(%rbx),%rax\\n  401734:\\t8b 00                \\tmov    (%rax),%eax\\n  401736:\\t39 03                \\tcmp    %eax,(%rbx)\\n  401738:\\t7d 05                \\tjge    40173f &lt;phase_6+0xfe&gt;\\nb23:\\n  40173a:\\te8 1d 04 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb24:\\n  40173f:\\t48 8b 5b 08          \\tmov    0x8(%rbx),%rbx\\n  401743:\\t83 ed 01             \\tsub    $0x1,%ebp\\n  401746:\\t75 e8                \\tjne    401730 &lt;phase_6+0xef&gt;\\nb25:\\n  401748:\\t48 83 c4 50          \\tadd    $0x50,%rsp\\n  40174c:\\t5b                   \\tpop    %rbx\\n  40174d:\\t5d                   \\tpop    %rbp\\n  40174e:\\t41 5c                \\tpop    %r12\\n  401750:\\t41 5d                \\tpop    %r13\\n  401752:\\t41 5e                \\tpop    %r14\\n  401754:\\tc3                   \\tretq\\n</code></pre></div>","autoDesc":true}');export{b as comp,v as data};
