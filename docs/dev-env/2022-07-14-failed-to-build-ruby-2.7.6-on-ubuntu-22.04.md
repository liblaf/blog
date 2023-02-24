---
title: "Failed To Build Ruby 2.7.6 on Ubuntu 22.04"
category:
  - "Dev Env"
  - "Linux"
  - "Ruby"
  - "Quick Solution"
tag:
  - "rbenv"
  - "Ubuntu"
  - "Ubuntu 22.04"
  - "Homebrew"
---

## Environment

| Name              | Value            |
| ----------------- | ---------------- |
| OS                | Ubuntu 22.04 LTS |
| `rbenv --version` | `rbenv 1.2.0`    |
| `brew --version`  | `Homebrew 3.5.4` |

## Problem

When trying to install ruby 2.7.6 using `rbenv install 2.7.6`

```shell-session
Downloading ruby-2.7.6.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.7/ruby-2.7.6.tar.bz2
Installing ruby-2.7.6...
ruby-build: using readline from homebrew

BUILD FAILED (Ubuntu 22.04 using ruby-build 20220713)

Inspect or clean up the working tree at /tmp/ruby-build.20220716222955.76271.nA4cij
Results logged to /tmp/ruby-build.20220716222955.76271.log

Last 10 log lines:
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in `require'
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/package.rb:44:in `<top (required)>'
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in `require'
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in `require'
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/installer.rb:11:in `<top (required)>'
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in `require'
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in `require'
	from ./tool/rbinstall.rb:713:in `<module:RbInstall>'
	from ./tool/rbinstall.rb:649:in `<main>'
make: *** [uncommon.mk:373: do-install-all] Error 1
```

## Reason

> Unfortunately, Ubuntu 22.04 only provide OpenSSL 3.0. And The supported version of OpenSSL 3.0 are only Ruby 3.1.[^1]

## Solution

> [@wheatley](https://github.com/wheatley) [@stuffa](https://github.com/stuffa) Based on this information, I would think that the safest way to build Ruby on Ubuntu 22.04 would be: instead of depending on the system `libssl-dev` package, download and compile OpenSSL 1.1.1 into its own directory, then point to that directory with `RUBY_CONFIGURE_OPTS=--with-openssl-dir=/path/to/my/openssl` while compiling with ruby-build.[^2]

> I had installed rbenv with homebrew (on ubuntu 22.04), and it turns out openssl 1.1.1n was already present through homebrew after that, as I could see by running `openssl version` and `which openssl`.[^3]

If necessary, fetch dependencies:

```bash
sudo apt install zlib1g-dev
```

Then

```bash
RUBY_CONFIGURE_OPTS=--with-openssl-dir=/home/linuxbrew/.linuxbrew/opt/openssl@1.1 rbenv install 2.7.6
```

## Reference

[^1]: <https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2519546>
[^2]: <https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2552849>
[^3]: <https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2706874>
