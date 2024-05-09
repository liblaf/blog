import{_ as l,r as t,o,c,a as n,b as s,d as e,e as i}from"./app-CoV9NwP4.js";const r={},p=n("p",null,[n("strong",null,"OS"),s(": Ubuntu 22.04.1 LTS")],-1),d={href:"https://github.com/liblaf/dotfiles",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"_1-python-安装与配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-python-安装与配置"},[n("span",null,"1. Python 安装与配置")])],-1),m=n("h3",{id:"_1-1-安装-miniconda",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-安装-miniconda"},[n("span",null,"1.1 安装 Miniconda")])],-1),b={href:"https://github.com/liblaf/dotfiles/blob/main/ubuntu/.oh-my-zsh/custom/plugins/pkg/conda/install.sh",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"~/.local/pkgs/conda/",-1),k=n("h3",{id:"_1-2-为-conda-指定软件源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-为-conda-指定软件源"},[n("span",null,"1.2 为 Conda 指定软件源")])],-1),h={href:"https://github.com/liblaf/dotfiles/blob/main/ubuntu/.condarc",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="_1-3-使用-conda-配置-python-环境" tabindex="-1"><a class="header-anchor" href="#_1-3-使用-conda-配置-python-环境"><span>1.3 使用 Conda 配置 Python 环境</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>❯ conda create <span class="token parameter variable">--name</span> Liqin2020012872 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.9</span>
Collecting package metadata <span class="token punctuation">(</span>current_repodata.json<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Solving environment: <span class="token keyword">done</span>

<span class="token comment">## Package Plan ##</span>

  environment location: /home/liblaf/.local/pkgs/conda/envs/Liqin2020012872

  added / updated specs:
    - <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.9</span>


The following NEW packages will be INSTALLED:

  _libgcc_mutex      anaconda/pkgs/main/linux-64::_libgcc_mutex-0.1-main None
  _openmp_mutex      anaconda/pkgs/main/linux-64::_openmp_mutex-5.1-1_gnu None
  ca-certificates    anaconda/pkgs/main/linux-64::ca-certificates-2022.07.19-h06a4308_0 None
  certifi            anaconda/pkgs/main/linux-64::certifi-2022.9.24-py39h06a4308_0 None
  ld_impl_linux-64   anaconda/pkgs/main/linux-64::ld_impl_linux-64-2.38-h1181459_1 None
  libffi             anaconda/pkgs/main/linux-64::libffi-3.3-he6710b0_2 None
  libgcc-ng          anaconda/pkgs/main/linux-64::libgcc-ng-11.2.0-h1234567_1 None
  libgomp            anaconda/pkgs/main/linux-64::libgomp-11.2.0-h1234567_1 None
  libstdcxx-ng       anaconda/pkgs/main/linux-64::libstdcxx-ng-11.2.0-h1234567_1 None
  ncurses            anaconda/pkgs/main/linux-64::ncurses-6.3-h5eee18b_3 None
  openssl            anaconda/pkgs/main/linux-64::openssl-1.1.1q-h7f8727e_0 None
  pip                anaconda/pkgs/main/linux-64::pip-22.2.2-py39h06a4308_0 None
  python             anaconda/pkgs/main/linux-64::python-3.9.13-haa1d7c7_1 None
  readline           anaconda/pkgs/main/linux-64::readline-8.1.2-h7f8727e_1 None
  setuptools         anaconda/pkgs/main/linux-64::setuptools-63.4.1-py39h06a4308_0 None
  sqlite             anaconda/pkgs/main/linux-64::sqlite-3.39.3-h5082296_0 None
  tk                 anaconda/pkgs/main/linux-64::tk-8.6.12-h1ccaba5_0 None
  tzdata             anaconda/pkgs/main/noarch::tzdata-2022c-h04d1e81_0 None
  wheel              anaconda/pkgs/main/noarch::wheel-0.37.1-pyhd3eb1b0_0 None
  xz                 anaconda/pkgs/main/linux-64::xz-5.2.6-h5eee18b_0 None
  zlib               anaconda/pkgs/main/linux-64::zlib-1.2.12-h5eee18b_3 None


Proceed <span class="token punctuation">(</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span>/n<span class="token punctuation">)</span>?

Preparing transaction: <span class="token keyword">done</span>
Verifying transaction: <span class="token keyword">done</span>
Executing transaction: <span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token comment"># To activate this environment, use</span>
<span class="token comment">#</span>
<span class="token comment">#     $ conda activate Liqin2020012872</span>
<span class="token comment">#</span>
<span class="token comment"># To deactivate an active environment, use</span>
<span class="token comment">#</span>
<span class="token comment">#     $ conda deactivate</span>

Retrieving notices: <span class="token punctuation">..</span>.working<span class="token punctuation">..</span>. <span class="token keyword">done</span>
❯ conda activate Liqin2020012872
❯ conda info

     active environment <span class="token builtin class-name">:</span> Liqin2020012872
    active <span class="token function">env</span> location <span class="token builtin class-name">:</span> /home/liblaf/.local/pkgs/conda/envs/Liqin2020012872
            shell level <span class="token builtin class-name">:</span> <span class="token number">2</span>
       user config <span class="token function">file</span> <span class="token builtin class-name">:</span> /home/liblaf/.condarc
 populated config files <span class="token builtin class-name">:</span> /home/liblaf/.condarc
          conda version <span class="token builtin class-name">:</span> <span class="token number">22.9</span>.0
    conda-build version <span class="token builtin class-name">:</span> not installed
         python version <span class="token builtin class-name">:</span> <span class="token number">3.9</span>.13.final.0
       virtual packages <span class="token builtin class-name">:</span> <span class="token assign-left variable">__linux</span><span class="token operator">=</span><span class="token number">5.15</span>.0<span class="token operator">=</span><span class="token number">0</span>
                          <span class="token assign-left variable">__glibc</span><span class="token operator">=</span><span class="token number">2.35</span><span class="token operator">=</span><span class="token number">0</span>
                          <span class="token assign-left variable">__unix</span><span class="token operator">=</span><span class="token number">0</span><span class="token operator">=</span><span class="token number">0</span>
                          <span class="token assign-left variable">__archspec</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">=</span>x86_64
       base environment <span class="token builtin class-name">:</span> /home/liblaf/.local/pkgs/conda  <span class="token punctuation">(</span>writable<span class="token punctuation">)</span>
      conda av data <span class="token function">dir</span> <span class="token builtin class-name">:</span> /home/liblaf/.local/pkgs/conda/etc/conda
  conda av metadata url <span class="token builtin class-name">:</span> None
           channel URLs <span class="token builtin class-name">:</span> https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/linux-64
                          https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/noarch
                          https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r/linux-64
                          https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r/noarch
                          https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2/linux-64
                          https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2/noarch
          package cache <span class="token builtin class-name">:</span> /home/liblaf/.local/pkgs/conda/pkgs
                          /home/liblaf/.conda/pkgs
       envs directories <span class="token builtin class-name">:</span> /home/liblaf/.local/pkgs/conda/envs
                          /home/liblaf/.conda/envs
               platform <span class="token builtin class-name">:</span> linux-64
             user-agent <span class="token builtin class-name">:</span> conda/22.9.0 requests/2.28.1 CPython/3.9.13 Linux/5.15.0-48-generic ubuntu/22.04.1 glibc/2.35
                <span class="token environment constant">UID</span>:GID <span class="token builtin class-name">:</span> <span class="token number">1000</span>:1000
             netrc <span class="token function">file</span> <span class="token builtin class-name">:</span> None
           offline mode <span class="token builtin class-name">:</span> False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-安装-pyqt-及其依赖项" tabindex="-1"><a class="header-anchor" href="#_1-4-安装-pyqt-及其依赖项"><span>1.4 安装 PyQt 及其依赖项</span></a></h3>`,3),f={href:"https://github.com/liblaf/dotfiles/blob/main/ubuntu/.config/pip/pip.conf",target:"_blank",rel:"noopener noreferrer"},y=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>❯ pip list
Package          Version
---------------- ---------
certifi          <span class="token number">2022.9</span>.24
click            <span class="token number">7.1</span>.2
packaging        <span class="token number">21.3</span>
pip              <span class="token number">22.2</span>.2
ply              <span class="token number">3.11</span>
pyparsing        <span class="token number">3.0</span>.9
PyQt6            <span class="token number">6.1</span>.0
pyqt6-plugins    <span class="token number">6.1</span>.0.2.2
PyQt6-Qt6        <span class="token number">6.4</span>.0
PyQt6-sip        <span class="token number">13.4</span>.0
pyqt6-tools      <span class="token number">6.1</span>.0.3.2
python-dotenv    <span class="token number">0.21</span>.0
qt6-applications <span class="token number">6.1</span>.0.2.2
qt6-tools        <span class="token number">6.1</span>.0.1.2
setuptools       <span class="token number">63.4</span>.1
sip              <span class="token number">6.7</span>.1
toml             <span class="token number">0.10</span>.2
wheel            <span class="token number">0.37</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-mysql-安装与配置" tabindex="-1"><a class="header-anchor" href="#_2-mysql-安装与配置"><span>2. MySQL 安装与配置</span></a></h2>`,2),_={href:"https://docs.brew.sh/Homebrew-on-Linux",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>❯ brew info mysql
<span class="token operator">==</span><span class="token operator">&gt;</span> mysql: stable <span class="token number">8.0</span>.30 <span class="token punctuation">(</span>bottled<span class="token punctuation">)</span>
Open <span class="token builtin class-name">source</span> relational database management system
https://dev.mysql.com/doc/refman/8.0/en/
Conflicts with:
  mariadb <span class="token punctuation">(</span>because mysql, mariadb, and percona <span class="token function">install</span> the same binaries<span class="token punctuation">)</span>
  percona-server <span class="token punctuation">(</span>because mysql, mariadb, and percona <span class="token function">install</span> the same binaries<span class="token punctuation">)</span>
/home/linuxbrew/.linuxbrew/Cellar/mysql/8.0.30_1 <span class="token punctuation">(</span><span class="token number">314</span> files, <span class="token number">278</span>.1MB<span class="token punctuation">)</span> *
  Poured from bottle on <span class="token number">2022</span>-10-09 at <span class="token number">16</span>:53:47
From: https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git/Formula/mysql.rb
License: GPL-2.0-only with Universal-FOSS-exception-1.0
<span class="token operator">==</span><span class="token operator">&gt;</span> Dependencies
Build: cmake ✔, pkg-config ✔, patchelf ✘
Required: icu4c ✔, libevent ✔, libfido2 ✔, lz4 ✔, openssl@1.1 ✔, protobuf ✔, zlib ✔, zstd ✔, <span class="token function">curl</span> ✔, cyrus-sasl ✔, libedit ✔, libtirpc ✔
<span class="token operator">==</span><span class="token operator">&gt;</span> Caveats
We<span class="token string">&#39;ve installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -u root

To restart mysql after an upgrade:
  brew services restart mysql
Or, if you don&#39;</span>t want/need a background <span class="token function">service</span> you can just run:
  /home/linuxbrew/.linuxbrew/opt/mysql/bin/mysqld_safe <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/home/linuxbrew/.linuxbrew/var/mysql
<span class="token operator">==</span><span class="token operator">&gt;</span> Analytics
install: <span class="token number">102,796</span> <span class="token punctuation">(</span><span class="token number">30</span> days<span class="token punctuation">)</span>, <span class="token number">322,409</span> <span class="token punctuation">(</span><span class="token number">90</span> days<span class="token punctuation">)</span>, <span class="token number">1,108</span>,015 <span class="token punctuation">(</span><span class="token number">365</span> days<span class="token punctuation">)</span>
install-on-request: <span class="token number">102,512</span> <span class="token punctuation">(</span><span class="token number">30</span> days<span class="token punctuation">)</span>, <span class="token number">321,510</span> <span class="token punctuation">(</span><span class="token number">90</span> days<span class="token punctuation">)</span>, <span class="token number">1,104</span>,544 <span class="token punctuation">(</span><span class="token number">365</span> days<span class="token punctuation">)</span>
build-error: <span class="token number">281</span> <span class="token punctuation">(</span><span class="token number">30</span> days<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用-mysql-服务" tabindex="-1"><a class="header-anchor" href="#启用-mysql-服务"><span>启用 MySQL 服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>❯ brew services start mysql
Created symlink /home/liblaf/.config/systemd/user/multi-user.target.wants/homebrew.mysql.service → /home/liblaf/.config/systemd/user/homebrew.mysql.service.
Unit /home/liblaf/.config/systemd/user/homebrew.mysql.service is added as a dependency to a non-existent unit multi-user.target.
<span class="token operator">==</span><span class="token operator">&gt;</span> Successfully started <span class="token variable"><span class="token variable">\`</span>mysql<span class="token variable">\`</span></span> <span class="token punctuation">(</span>label: homebrew.mysql<span class="token punctuation">)</span>
❯ brew services info mysql
mysql <span class="token punctuation">(</span>homebrew.mysql<span class="token punctuation">)</span>
Running: ✔
Loaded: ✔
Schedulable: ✘
User: liblaf
PID: <span class="token number">108384</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-mysql-连接" tabindex="-1"><a class="header-anchor" href="#测试-mysql-连接"><span>测试 MySQL 连接</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>❯ mysql <span class="token parameter variable">--user</span> root
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">8</span>
Server version: <span class="token number">8.0</span>.30 Homebrew

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2022</span>, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-vscode-安装与配置" tabindex="-1"><a class="header-anchor" href="#_3-vscode-安装与配置"><span>3. VSCode 安装与配置</span></a></h2>`,6),q={href:"https://github.com/liblaf/dotfiles/blob/main/ubuntu/.oh-my-zsh/custom/plugins/pkg/code/install.sh",target:"_blank",rel:"noopener noreferrer"};function w(S,C){const a=t("ExternalLinkIcon");return o(),c("div",null,[p,n("p",null,[s("本文使用的一系列脚本及配置文件均可在 "),n("a",d,[s("liblaf/dotfiles"),e(a)]),s(" 下找到.")]),u,m,n("p",null,[s("安装 Miniconda 的脚本位于 "),n("a",b,[s("install.sh"),e(a)]),s(", 默认安装至 "),v,s(" 下. 由于自己的机器已经配置过 Conda, 不再重复安装.")]),k,n("p",null,[s("详见 "),n("a",h,[s(".condarc"),e(a)]),s(" 配置文件.")]),g,n("p",null,[s("软件源配置相见 "),n("a",f,[s("pip.conf"),e(a)]),s(".")]),y,n("p",null,[s("使用 "),n("a",_,[s("Homebrew on Linux"),e(a)]),s(".")]),x,n("p",null,[s("安装脚本位于 "),n("a",q,[s("install.sh"),e(a)]),s(".")])])}const N=l(r,[["render",w],["__file","2022-09-19-第1次实验.html.vue"]]),P=JSON.parse('{"path":"/2022/course-work/principal-and-application-of-database/2022-09-19-%E7%AC%AC1%E6%AC%A1%E5%AE%9E%E9%AA%8C.html","title":"第 1 次实验","lang":"en-US","frontmatter":{"date":"2022-09-19T00:00:00.000Z","isOriginal":true,"category":["Course Work"],"tag":["Conda","Database","Principal and Application of Database"],"title":"第 1 次实验","description":"OS: Ubuntu 22.04.1 LTS 本文使用的一系列脚本及配置文件均可在 liblaf/dotfiles 下找到. 1. Python 安装与配置 1.1 安装 Miniconda 安装 Miniconda 的脚本位于 install.sh, 默认安装至 ~/.local/pkgs/conda/ 下. 由于自己的机器已经配置过 Conda, ...","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2022/course-work/principal-and-application-of-database/2022-09-19-%E7%AC%AC1%E6%AC%A1%E5%AE%9E%E9%AA%8C.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"第 1 次实验"}],["meta",{"property":"og:description","content":"OS: Ubuntu 22.04.1 LTS 本文使用的一系列脚本及配置文件均可在 liblaf/dotfiles 下找到. 1. Python 安装与配置 1.1 安装 Miniconda 安装 Miniconda 的脚本位于 install.sh, 默认安装至 ~/.local/pkgs/conda/ 下. 由于自己的机器已经配置过 Conda, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Conda"}],["meta",{"property":"article:tag","content":"Database"}],["meta",{"property":"article:tag","content":"Principal and Application of Database"}],["meta",{"property":"article:published_time","content":"2022-09-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第 1 次实验\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"1. Python 安装与配置","slug":"_1-python-安装与配置","link":"#_1-python-安装与配置","children":[{"level":3,"title":"1.1 安装 Miniconda","slug":"_1-1-安装-miniconda","link":"#_1-1-安装-miniconda","children":[]},{"level":3,"title":"1.2 为 Conda 指定软件源","slug":"_1-2-为-conda-指定软件源","link":"#_1-2-为-conda-指定软件源","children":[]},{"level":3,"title":"1.3 使用 Conda 配置 Python 环境","slug":"_1-3-使用-conda-配置-python-环境","link":"#_1-3-使用-conda-配置-python-环境","children":[]},{"level":3,"title":"1.4 安装 PyQt 及其依赖项","slug":"_1-4-安装-pyqt-及其依赖项","link":"#_1-4-安装-pyqt-及其依赖项","children":[]}]},{"level":2,"title":"2. MySQL 安装与配置","slug":"_2-mysql-安装与配置","link":"#_2-mysql-安装与配置","children":[{"level":3,"title":"启用 MySQL 服务","slug":"启用-mysql-服务","link":"#启用-mysql-服务","children":[]},{"level":3,"title":"测试 MySQL 连接","slug":"测试-mysql-连接","link":"#测试-mysql-连接","children":[]}]},{"level":2,"title":"3. VSCode 安装与配置","slug":"_3-vscode-安装与配置","link":"#_3-vscode-安装与配置","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":2.86,"words":858},"filePathRelative":"2022/course-work/principal-and-application-of-database/2022-09-19-第1次实验.md","localizedDate":"September 19, 2022","excerpt":"<p><strong>OS</strong>: Ubuntu 22.04.1 LTS</p>\\n<p>本文使用的一系列脚本及配置文件均可在 <a href=\\"https://github.com/liblaf/dotfiles\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">liblaf/dotfiles</a> 下找到.</p>\\n<h2>1. Python 安装与配置</h2>\\n<h3>1.1 安装 Miniconda</h3>\\n<p>安装 Miniconda 的脚本位于 <a href=\\"https://github.com/liblaf/dotfiles/blob/main/ubuntu/.oh-my-zsh/custom/plugins/pkg/conda/install.sh\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">install.sh</a>, 默认安装至 <code>~/.local/pkgs/conda/</code> 下. 由于自己的机器已经配置过 Conda, 不再重复安装.</p>","autoDesc":true}');export{N as comp,P as data};
