import{_ as s,r as l,o as c,c as i,a as e,b as t,d as a,e as o}from"./app-CoV9NwP4.js";const r={},d=e("h2",{id:"what-is-debug-info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-debug-info"},[e("span",null,"What is Debug Info")])],-1),p={href:"https://llvm.org/docs/SourceLevelDebugging.html",target:"_blank",rel:"noopener noreferrer"},u=o('<h2 id="how-to-generate-debug-info" tabindex="-1"><a class="header-anchor" href="#how-to-generate-debug-info"><span>How to Generate Debug Info</span></a></h2><p>Pass <code>-g</code> or <code>--debug</code> option to <code>clang</code>.</p><h2 id="how-to-access-debug-info" tabindex="-1"><a class="header-anchor" href="#how-to-access-debug-info"><span>How to Access Debug Info</span></a></h2><blockquote><p>LLVM uses several intrinsic functions (name prefixed with <code>llvm.dbg</code>) to track source local variables through optimization and code generation.<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></blockquote><p>Debug Info is arranged like a directed graph. However, LLVM does not provide a convenient way to traverse all <code>llvm::DINode</code>s. Therefore, we need an entry into debug info. Here we mainly focus on <code>llvm.dbg.declare</code> intrinsic, aka <code>llvm::DbgDeclareInst</code>, as the entry.</p>',5),h=o('<h6 id="llvm-dbg-addr" tabindex="-1"><a class="header-anchor" href="#llvm-dbg-addr"><span><code>llvm.dbg.addr</code><sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup></span></a></h6>',1),m=e("code",null,"metadata",-1),g=e("code",null,"alloca",-1),f={href:"https://llvm.org/docs/LangRef.html#dilocalvariable",target:"_blank",rel:"noopener noreferrer"},b={href:"https://llvm.org/docs/LangRef.html#diexpression",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"llvm.dbg.addr",-1),y=e("em",null,"address",-1),k=o('<h6 id="llvm-dbg-declare" tabindex="-1"><a class="header-anchor" href="#llvm-dbg-declare"><span><code>llvm.dbg.declare</code><sup class="footnote-ref"><a href="#footnote1">[1:2]</a><a class="footnote-anchor" id="footnote-ref1:2"></a></sup></span></a></h6>',1),_=e("code",null,"llvm.dbg.addr",-1),w=e("code",null,"llvm.dbg.declare",-1),T={href:"https://llvm.org/docs/LangRef.html#dilocalvariable",target:"_blank",rel:"noopener noreferrer"},D=o('<p><code>dbg_declare_inst-&gt;getAddress()</code> gives the address (a <code>llvm::Value*</code>) of the variable. <code>dbg_declare_inst-&gt;getVariable()</code> returns a <code>llvm::DILocalVariable*</code>. The name of the variable can be obtained through <code>debug_info_local_variable-&gt;getName()</code>. The type of the variable can be found in <code>debug_info_local_variable-&gt;getType()</code>, which returns a <code>llvm::DIType*</code>.</p><h2 id="type-system-in-debug-info" tabindex="-1"><a class="header-anchor" href="#type-system-in-debug-info"><span>Type System in Debug Info</span></a></h2><p>Besides <code>llvm::Type</code>, LLVM provides a similar type system with more details in debug info. <code>llvm::StructType</code> does not contain information about field names. However, debug info contains information about variable name, typedef, field names and more.</p><figure><img src="https://llvm.org/doxygen/classllvm_1_1DIType__inherit__graph.png" alt="Inheritance diagram for " tabindex="0" loading="lazy"><figcaption>Inheritance diagram for <code>llvm::DIType</code></figcaption></figure><p><code>llvm::DIType</code> is arranged like a directed graph. You can use <code>getBaseType()</code> or <code>getElements()</code> to dive into the graph. <code>getTag()</code> method can be used to quickly determine the type of the <code>llvm::DIType</code>. For example, <code>getTag()</code> may return <code>llvm::dwarf::DW_TAG_pointer_type</code>, <code>llvm::dwarf::DW_TAG_structure_type</code>, etc. Most of the tags can be found in<br> file <code>llvm/BinaryFormat/Dwarf.def</code>.</p><h3 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span>null</span></a></h3><p>Nothing to say. Be careful with <code>nullptr</code>!</p><h3 id="pointer-type" tabindex="-1"><a class="header-anchor" href="#pointer-type"><span>pointer type</span></a></h3><p>pointer types are <code>llvm::DIDerivedType</code>. <code>getBaseType()</code> returns its pointee type. For example, if <code>derived_type</code> represents <code>int*</code>, then <code>derived_type-&gt;getBaseType()</code> should be <code>int</code>. Under most circumstances, it will return a <code>llvm::DIType*</code>.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p><code>getBaseType()</code> can return <code>nullptr</code>!</p></div><h3 id="member-type" tabindex="-1"><a class="header-anchor" href="#member-type"><span>member type</span></a></h3><p>member types are <code>llvm::DIDerivedType</code> with tag <code>llvm::dwarf::DW_TAG_member</code>. Usually they are elements of a struct or a class. The field name can be obtained through <code>getName()</code> method.</p><h3 id="structure-type" tabindex="-1"><a class="header-anchor" href="#structure-type"><span>structure type</span></a></h3><p>structure types are <code>llvm::DICompositeType</code> with tag <code>llvm::dwarf::DW_TAG_structure_type</code>. <code>getName()</code> returns its name.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The return value of <code>getName()</code> may defer from that of <code>llvm::StructType::getStructName()</code>. If you declare multiple structures with the same name but in different scopes (for example, two different structures named <code>A</code> in function <code>f</code> and <code>g</code>), <code>llvm::StructType::getStructName()</code> would produce something like <code>%struct.A</code> and <code>%struct.A.0</code> respectively, while <code>llvm::DICompositeType::getName()</code> will always give a <code>A</code>.</p></div><p><code>getElements()</code> returns all its fields. Under most circumstances, a field should be a <code>llvm::DIDerivedType</code> with tag <code>llvm::dwarf::DW_TAG_member</code>.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>The tag of an element can be something else from <code>llvm::dwarf::DW_TAG_member</code>! Especially in <code>c++</code>.</p></div><h3 id="typedef" tabindex="-1"><a class="header-anchor" href="#typedef"><span>typedef</span></a></h3><p><code>llvm::DIDerivedType</code> with tag <code>llvm::dwarf::DW_TAG_typedef</code>. <code>getBaseType()</code> returns the type of the alias.</p><h2 id="how-to-obtain-field-name-in-struct" tabindex="-1"><a class="header-anchor" href="#how-to-obtain-field-name-in-struct"><span>How to Obtain Field Name in <code>struct</code></span></a></h2><div class="hint-container note"><p class="hint-container-title">Note</p><p><code>struct</code> Elements in <code>StructType</code> may defer from those in <code>DICompositeType</code> because of alignment. Compiler may add additional elements to <code>StructType</code> for alignment, but not for <code>DICompositeType</code>. Therefore, the better way to find corresponding elements in <code>StructType</code> and <code>DICompositeType</code> is by offset.</p></div><p>The key point is to maintain mapping between <code>llvm::Type</code> and <code>llvm::DIType</code>, <code>llvm::Value</code> and <code>llvm::DINode</code>.</p>',22),x={href:"https://github.com/liblaf/lib-monitor/tree/main/inserter/field_name_extractor",target:"_blank",rel:"noopener noreferrer"},I=o(`<h2 id="strange-things-about-getelementptr" tabindex="-1"><a class="header-anchor" href="#strange-things-about-getelementptr"><span>Strange Things about <code>getelementptr</code></span></a></h2><h3 id="invalid-element-idx" tabindex="-1"><a class="header-anchor" href="#invalid-element-idx"><span>Invalid element idx!</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">__attribute__</span><span class="token punctuation">(</span><span class="token punctuation">(</span>packed<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token class-name">uint32_t</span> v<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">*</span>q <span class="token operator">=</span> p<span class="token punctuation">;</span>
<span class="token class-name">uint32_t</span> v<span class="token punctuation">;</span>
<span class="token function">__asm__</span> <span class="token punctuation">(</span><span class="token string">&quot;ldr  %0, %1&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;=r&quot;</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&quot;m&quot;</span><span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-llvm line-numbers-mode" data-ext="llvm" data-title="llvm"><pre class="language-llvm"><code><span class="token variable">%struct.anon.0</span> <span class="token punctuation">=</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> <span class="token type class-name">i32</span> <span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token variable">%89</span> <span class="token punctuation">=</span> <span class="token keyword">load</span> <span class="token variable">%struct.anon.0</span><span class="token punctuation">*</span><span class="token punctuation">,</span> <span class="token variable">%struct.anon.0</span><span class="token punctuation">*</span><span class="token punctuation">*</span> <span class="token variable">%13</span><span class="token punctuation">,</span> <span class="token keyword">align</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token variable">!dbg</span> <span class="token variable">!3598</span>
<span class="token variable">%90</span> <span class="token punctuation">=</span> <span class="token keyword">getelementptr</span> <span class="token keyword">inbounds</span> <span class="token variable">%struct.anon.0</span><span class="token punctuation">,</span> <span class="token variable">%struct.anon.0</span><span class="token punctuation">*</span> <span class="token variable">%89</span><span class="token punctuation">,</span> <span class="token type class-name">i32</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token variable">!dbg</span> <span class="token variable">!3598</span>
<span class="token variable">%91</span> <span class="token punctuation">=</span> <span class="token keyword">call</span> <span class="token type class-name">i64</span> <span class="token keyword">asm</span> <span class="token string">&quot;ldr   \${0:Q}, $1  \\0A\\09ldr   \${0:R}, $2  \\0A\\09&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;=&amp;r,*m,*m&quot;</span><span class="token punctuation">(</span><span class="token variable">%struct.anon.0</span><span class="token punctuation">*</span> <span class="token variable">%88</span><span class="token punctuation">,</span> <span class="token variable">%struct.anon.0</span><span class="token punctuation">*</span> <span class="token variable">%90</span><span class="token punctuation">)</span> <span class="token variable">#7</span><span class="token punctuation">,</span> <span class="token variable">!dbg</span> <span class="token variable">!3599</span><span class="token punctuation">,</span> <span class="token variable">!srcloc</span> <span class="token variable">!3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Pay attention to the <code>GetElementPtrInst</code>!</p></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2><hr class="footnotes-sep">`,7),L={class:"footnotes"},S={class:"footnotes-list"},N={id:"footnote1",class:"footnote-item"},A={href:"https://llvm.org/docs/SourceLevelDebugging.html",target:"_blank",rel:"noopener noreferrer"},G=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),H=e("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"↩︎",-1),V=e("a",{href:"#footnote-ref1:2",class:"footnote-backref"},"↩︎",-1);function q(W,B){const n=l("ExternalLinkIcon");return c(),i("div",null,[d,e("p",null,[t("Read "),e("a",p,[t("Source Level Debugging with LLVM"),a(n)]),t(" for more details. If you do not have enough time, a few examples from the documentation should be enough.")]),u,e("blockquote",null,[h,e("p",null,[t("This intrinsic provides information about a local element (e.g., variable). The first argument is "),m,t(" holding the address of variable, typically a static "),g,t(" in the function entry block. The second argument is a "),e("a",f,[t("local variable"),a(n)]),t(" containing a description of the variable. The third argument is a "),e("a",b,[t("complex expression"),a(n)]),t(". An "),v,t(" intrinsic describes the "),y,t(" of a source variable.")]),k,e("p",null,[t("This intrinsic is identical to "),_,t(", except that there can only be one call to "),w,t(" for a given concrete "),e("a",T,[t("local variable"),a(n)]),t(".")])]),D,e("p",null,[t("See "),e("a",x,[t("lib-monitor/inserter/field_name_extractor at main · liblaf/lib-monitor"),a(n)]),t(" for implementation details.")]),I,e("section",L,[e("ol",S,[e("li",N,[e("p",null,[e("a",A,[t("https://llvm.org/docs/SourceLevelDebugging.html"),a(n)]),t(),G,t(),H,t(),V])])])])])}const C=s(r,[["render",q],["__file","2022-08-17-how-to-get-field-name-in-struct.html.vue"]]),M=JSON.parse('{"path":"/2022/research/idea/2022-08-17-how-to-get-field-name-in-struct.html","title":"How to Get the Field Name of members in struct","lang":"en-US","frontmatter":{"date":"2022-08-17T00:00:00.000Z","isOriginal":true,"category":["Research"],"tag":["C/C++","LLVM"],"title":"How to Get the Field Name of members in struct","description":"What is Debug Info Read Source Level Debugging with LLVM for more details. If you do not have enough time, a few examples from the documentation should be enough. How to Generat...","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/research/idea/2022-08-17-how-to-get-field-name-in-struct.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"How to Get the Field Name of members in struct"}],["meta",{"property":"og:description","content":"What is Debug Info Read Source Level Debugging with LLVM for more details. If you do not have enough time, a few examples from the documentation should be enough. How to Generat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://llvm.org/doxygen/classllvm_1_1DIType__inherit__graph.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"C/C++"}],["meta",{"property":"article:tag","content":"LLVM"}],["meta",{"property":"article:published_time","content":"2022-08-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to Get the Field Name of members in struct\\",\\"image\\":[\\"https://llvm.org/doxygen/classllvm_1_1DIType__inherit__graph.png\\"],\\"datePublished\\":\\"2022-08-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"What is Debug Info","slug":"what-is-debug-info","link":"#what-is-debug-info","children":[]},{"level":2,"title":"How to Generate Debug Info","slug":"how-to-generate-debug-info","link":"#how-to-generate-debug-info","children":[]},{"level":2,"title":"How to Access Debug Info","slug":"how-to-access-debug-info","link":"#how-to-access-debug-info","children":[]},{"level":2,"title":"Type System in Debug Info","slug":"type-system-in-debug-info","link":"#type-system-in-debug-info","children":[{"level":3,"title":"null","slug":"null","link":"#null","children":[]},{"level":3,"title":"pointer type","slug":"pointer-type","link":"#pointer-type","children":[]},{"level":3,"title":"member type","slug":"member-type","link":"#member-type","children":[]},{"level":3,"title":"structure type","slug":"structure-type","link":"#structure-type","children":[]},{"level":3,"title":"typedef","slug":"typedef","link":"#typedef","children":[]}]},{"level":2,"title":"How to Obtain Field Name in struct","slug":"how-to-obtain-field-name-in-struct","link":"#how-to-obtain-field-name-in-struct","children":[]},{"level":2,"title":"Strange Things about getelementptr","slug":"strange-things-about-getelementptr","link":"#strange-things-about-getelementptr","children":[{"level":3,"title":"Invalid element idx!","slug":"invalid-element-idx","link":"#invalid-element-idx","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":2.54,"words":761},"filePathRelative":"2022/research/idea/2022-08-17-how-to-get-field-name-in-struct.md","localizedDate":"August 17, 2022","excerpt":"<h2>What is Debug Info</h2>\\n<p>Read <a href=\\"https://llvm.org/docs/SourceLevelDebugging.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Source Level Debugging with LLVM</a> for more details. If you do not have enough time, a few examples from the documentation should be enough.</p>\\n<h2>How to Generate Debug Info</h2>","autoDesc":true}');export{C as comp,M as data};
