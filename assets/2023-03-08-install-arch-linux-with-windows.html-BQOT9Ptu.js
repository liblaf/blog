import{_ as a,r as i,o as l,c as t,a as s,b as n,d as o,e as r}from"./app-CoV9NwP4.js";const d={},c=r(`<h2 id="bios-setup" tabindex="-1"><a class="header-anchor" href="#bios-setup"><span>BIOS Setup</span></a></h2><ul><li>change hard drive mode from “RAID” to “ACHI/NVME”</li></ul><h2 id="partitioning-for-efi-system" tabindex="-1"><a class="header-anchor" href="#partitioning-for-efi-system"><span>Partitioning for EFI System</span></a></h2><ul><li>disable “Secure Boot”</li><li>boot Arch Linux ISO</li></ul><h3 id="optional-connect-from-another-device" tabindex="-1"><a class="header-anchor" href="#optional-connect-from-another-device"><span>[Optional] Connect from Another Device</span></a></h3><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">passwd</span></span></span>
<span class="token output">New password:
Retype new password:
passwd: password updated succesfully
</span><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">systemctl start sshd</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">systemctl status sshd</span></span>
<span class="token output">● sshd.service - OpenSSH Daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; preset: disabled)
     Active: active (running) since Wed 2023-03-08 06:08:32 UTC; 1min 36s ago
   Main PID: 508 (sshd)
      Tasks: 1 (limit: 19074)
     Memory: 4.2M
        CPU: 145ms
     CGroup: /system.slice/sshd.service
             └─508 &quot;sshd: /usr/bin/sshd -D [listener] 0 of 10-100 startups&quot;

Mar 08 06:08:32 archiso systemd[1]: Started OpenSSH Daemon.
Mar 08 06:08:33 archiso sshd[508]: Server listening on 0.0.0.0 port 22.
Mar 08 06:08:33 archiso sshd[508]: Server listening on :: port 22.
</span><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ip</span> addr</span></span>
<span class="token output">1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:12:bc:70 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 metric 100 brd 10.0.2.255 scope global dynamic enp0s3
       valid_lft 86284sec preferred_lft 86284sec
    inet6 fe80::a00:27ff:fe12:bc70/64 scope link
       valid_lft forever preferred_lft forever
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="ssh-from-another-device" tabindex="-1"><a class="header-anchor" href="#ssh-from-another-device"><span>SSH from Another Device</span></a></h6><blockquote><p>I’m using Port Forwarding in this example.</p></blockquote><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">22222</span> root@127.0.0.1</span></span>
<span class="token output">root@127.0.0.1&#39;s password:
To install Arch Linux follow the installation guide:
https://wiki.archlinux.org/title/Installation_guide

For Wi-Fi, authenticate to the wireless network using the iwctl utility.
For mobile broadband (WWAN) modems, connect with the mmcli utility.
Ethernet, WLAN and WWAN interfaces using DHCP should work automatically.

After connecting to the internet, the installation guide can be accessed
via the convenience script Installation_guide.


Last login: Wed Mar  8 06:09:54 2023 from 10.0.2.2
root@archiso ~ #
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partitioning" tabindex="-1"><a class="header-anchor" href="#partitioning"><span>Partitioning</span></a></h3><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">fdisk</span> <span class="token parameter variable">-l</span></span></span>
<span class="token output">Disk /dev/sda: 256 GiB, 274877906944 bytes, 536870912 sectors
Disk model: VBOX HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop0: 688.47 MiB, 721911808 bytes, 1409984 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
</span><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">cfdisk</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>select label type: <code>gpt</code></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>                                 Disk: /dev/sda
              Size: 256 GiB, 274877906944 bytes, 536870912 sectors
          Label: gpt, identifier: 1355000F-BBCD-634E-82AD-5AA1BCB6064A

    Device               Start           End      Sectors     Size Type
&gt;&gt;  /dev/sda1             2048       2099199      2097152       1G EFI System
    Free space         2099200     536870878    534771679     255G









 ┌────────────────────────────────────────────────────────────────────────────┐
 │Partition UUID: AD8D5ED1-76CF-CF49-A736-89782BC63BCF                        │
 │Partition type: EFI System (C12A7328-F81F-11D2-BA4B-00A0C93EC93B)           │
 └────────────────────────────────────────────────────────────────────────────┘
     [ Delete ]  [ Resize ]  [  Quit  ]  [  Type  ]  [  Help  ]  [  Write ]
     [  Dump  ]

            Write partition table to disk (this might destroy data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Write</code></li><li><code>Quit</code></li></ul><h6 id="double-check-partition" tabindex="-1"><a class="header-anchor" href="#double-check-partition"><span>Double Check Partition</span></a></h6><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">fdisk</span> <span class="token parameter variable">-l</span></span></span>
<span class="token output">Disk /dev/sda: 256 GiB, 274877906944 bytes, 536870912 sectors
Disk model: VBOX HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 1355000F-BBCD-634E-82AD-5AA1BCB6064A

Device     Start     End Sectors Size Type
/dev/sda1   2048 2099199 2097152   1G EFI System


Disk /dev/loop0: 688.47 MiB, 721911808 bytes, 1409984 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">shutdown</span> now</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="install-windows" tabindex="-1"><a class="header-anchor" href="#install-windows"><span>Install Windows</span></a></h2><ul><li>[if not bypass Windows 11 hardware check] enable “Secure Boot”</li><li>boot Windows ISO</li></ul><h3 id="partitioning-1" tabindex="-1"><a class="header-anchor" href="#partitioning-1"><span>Partitioning</span></a></h3><figure><img src="https://cdn.liblaf.me/img/2023/2023-03-08T062206Z.png" alt="Before Partitioning" tabindex="0" loading="lazy"><figcaption>Before Partitioning</figcaption></figure><figure><img src="https://cdn.liblaf.me/img/2023/2023-03-08T062232Z.png" alt="After Partitioning" tabindex="0" loading="lazy"><figcaption>After Partitioning</figcaption></figure><h2 id="install-arch-linux" tabindex="-1"><a class="header-anchor" href="#install-arch-linux"><span>Install Arch Linux</span></a></h2><ul><li>disable “Secure Boot”</li><li>boot Arch Linux ISO</li></ul><h3 id="optional-connect-from-another-device-1" tabindex="-1"><a class="header-anchor" href="#optional-connect-from-another-device-1"><span>[Optional] Connect from Another Device</span></a></h3><h3 id="partitioning-2" tabindex="-1"><a class="header-anchor" href="#partitioning-2"><span>Partitioning</span></a></h3><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">fdisk</span> <span class="token parameter variable">-l</span></span></span>
<span class="token output">Disk /dev/sda: 256 GiB, 274877906944 bytes, 536870912 sectors
Disk model: VBOX HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 1355000F-BBCD-634E-82AD-5AA1BCB6064A

Device       Start       End   Sectors  Size Type
/dev/sda1     2048   2099199   2097152    1G EFI System
/dev/sda2  2099200   2131967     32768   16M Microsoft reserved
/dev/sda3  2131968 268437503 266305536  127G Microsoft basic data


Disk /dev/loop0: 688.47 MiB, 721911808 bytes, 1409984 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
</span><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">cfdisk</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>                                 Disk: /dev/sda
              Size: 256 GiB, 274877906944 bytes, 536870912 sectors
          Label: gpt, identifier: 1355000F-BBCD-634E-82AD-5AA1BCB6064A

    Device             Start         End    Sectors   Size Type
    /dev/sda1           2048     2099199    2097152     1G EFI System
    /dev/sda2        2099200     2131967      32768    16M Microsoft reserved
    /dev/sda3        2131968   268437503  266305536   127G Microsoft basic data
&gt;&gt;  /dev/sda4      268437504   536868863  268431360   128G Linux filesystem







 ┌────────────────────────────────────────────────────────────────────────────┐
 │Partition UUID: A5CE280D-AE22-AB4D-BB35-3A08BC98B95C                        │
 │Partition type: Linux filesystem (0FC63DAF-8483-4772-8E79-3D69D8477DE4)     │
 └────────────────────────────────────────────────────────────────────────────┘
     [ Delete ]  [ Resize ]  [  Quit  ]  [  Type  ]  [  Help  ]  [  Write ]
     [  Dump  ]

            Write partition table to disk (this might destroy data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Write</code></li><li><code>Quit</code></li></ul><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">fdisk</span> <span class="token parameter variable">-l</span></span></span>
<span class="token output">Disk /dev/sda: 256 GiB, 274877906944 bytes, 536870912 sectors
Disk model: VBOX HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 1355000F-BBCD-634E-82AD-5AA1BCB6064A

Device         Start       End   Sectors  Size Type
/dev/sda1       2048   2099199   2097152    1G EFI System
/dev/sda2    2099200   2131967     32768   16M Microsoft reserved
/dev/sda3    2131968 268437503 266305536  127G Microsoft basic data
/dev/sda4  268437504 536868863 268431360  128G Linux filesystem


Disk /dev/loop0: 688.47 MiB, 721911808 bytes, 1409984 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="archinstall" tabindex="-1"><a class="header-anchor" href="#archinstall"><span>archinstall</span></a></h3><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@archiso ~ </span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">archinstall</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Set/Modify the below options

  Archinstall language           set: English (100%)
  Keyboard layout                set: us
  Mirror region                  set: []
  Locale language                set: en_US
  Locale encoding                set: UTF-8
  Drive(s)                       set: 1 Drive(s)
&gt; Disk layout                    set: 4 Partitions
  Disk encryption
  Bootloader                     set: grub-install
  Swap                           set: True
  Hostname                       set: XPS-9320
  Root password                  set: None
  User account                   set: 1 User(s)
  Profile                        set: Profile(desktop)
  Audio                          set: pipewire
  Kernels                        set: [&#39;linux&#39;, &#39;linux-lts&#39;, &#39;linux-zen&#39;]
  Additional packages            set: [&#39;git&#39;, &#39;neovim&#39;]
  Network configuration          set: Use NetworkManager
  Timezone                       set: Asia/Shanghai
  Automatic time sync (NTP)      set: True
  Optional repositories          set: []

  Save configuration
  Install
  Abort
(Press &quot;/&quot; to search)
┌── Info ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Device: /dev/sda                                                                                                                    │
│                                                                                                                                     │
│    type  |               PARTUUID               |  wipe |  boot |  ESP  | mountpoint | encrypted |   start   |    size   | format   │
│ ----------------------------------------------------------------------------------------------------------------------------------- │
│  primary | ad8d5ed1-76cf-cf49-a736-89782bc63bcf | False |  True |  True |    /boot   |   False   |    2048   |  2097152  |  vfat    │
│  primary | ad5fd8af-9b3c-4c5e-b8dc-0aeb2a933dee | False | False | False |    None    |   False   |  2099200  |   32768   |  None    │
│  primary | 535b265a-fd89-44f3-aa5b-3252cd27a4ec | False | False | False |    None    |   False   |  2131968  | 266305536 |  ntfs    │
│  primary | 48dbcbd5-85ab-9d40-98c3-5b4c0473b8a8 |  True | False | False |      /     |   False   | 268437504 | 268431360 |  ext4    │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>wait for the installation to complete</li></ul><h3 id="change-boot-order" tabindex="-1"><a class="header-anchor" href="#change-boot-order"><span>Change Boot Order</span></a></h3><h2 id="post-installation" tabindex="-1"><a class="header-anchor" href="#post-installation"><span>Post Installation</span></a></h2><h3 id="enable-secure-boot-for-arch-linux" tabindex="-1"><a class="header-anchor" href="#enable-secure-boot-for-arch-linux"><span>Enable Secure Boot for Arch Linux</span></a></h3><h4 id="install-yay" tabindex="-1"><a class="header-anchor" href="#install-yay"><span>Install <code>yay</code></span></a></h4><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> pacman <span class="token parameter variable">--sync</span> <span class="token parameter variable">--needed</span> <span class="token function">git</span></span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">git</span> clone https://aur.archlinux.org/yay.git</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> yay</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash">makepkg <span class="token parameter variable">--install</span> <span class="token parameter variable">--syncdeps</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies"><span>Install Dependencies</span></a></h4><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash">yay <span class="token parameter variable">--sync</span> <span class="token parameter variable">--needed</span> sbctl sbsigntools shim-signed</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="default-boot-layout" tabindex="-1"><a class="header-anchor" href="#default-boot-layout"><span>Default <code>/boot</code> Layout</span></a></h4><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">boot/
├── EFI/
│   ├── Boot/
│   │   └── bootx64.efi
│   └── Microsoft/
│       ├── Boot/
│       └── Recovery/
├── grub/
│   ├── fonts/
│   │   └── unicode.pf2
│   ├── grub.cfg
│   ├── grubenv
│   ├── locale/
│   │   └── *.mo
│   ├── themes/
│   │   └── starfield/
│   └── x86_64-efi/
│       └── *.mod
├── initramfs-linux-fallback.img
├── initramfs-linux-lts-fallback.img
├── initramfs-linux-lts.img
├── initramfs-linux-zen-fallback.img
├── initramfs-linux-zen.img
├── initramfs-linux.img
├── vmlinuz-linux
├── vmlinuz-linux-lts
└── vmlinuz-linux-zen
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="remove-old-boot" tabindex="-1"><a class="header-anchor" href="#remove-old-boot"><span>Remove Old Boot</span></a></h4><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>KNOW WHAT YOU ARE DOING !!!</p><p>KNOW WHAT YOU ARE DOING !!!</p><p>KNOW WHAT YOU ARE DOING !!!</p></div><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">--recursive</span> /boot/EFI/Boot /boot/grub</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="install-grub" tabindex="-1"><a class="header-anchor" href="#install-grub"><span>Install GRUB</span></a></h4><h5 id="list-all-grub-modules" tabindex="-1"><a class="header-anchor" href="#list-all-grub-modules"><span>List All GRUB Modules</span></a></h5><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">find</span> /usr/lib/grub/x86_64-efi/ <span class="token parameter variable">-name</span> <span class="token string">&#39;*.mod&#39;</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-printf</span> <span class="token string">&#39;%f\\n&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">--delimiter</span><span class="token operator">=</span><span class="token string">&#39;.&#39;</span> <span class="token parameter variable">--fields</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;\\n&#39;</span> <span class="token string">&#39; &#39;</span></span></span>
<span class="token output">acpi adler32 affs afs afsplitter ahci all_video aout appleldr archelp ata at_keyboard backtrace bfs bitmap bitmap_scale blocklist boot boottime bsd bswap_test btrfs bufio cacheinfo cat cbfs cbls cbmemc cbtable cbtime chain cmdline_cat_test cmp cmp_test configfile cpio cpio_be cpuid crc64 crypto cryptodisk cs5536 ctz_test date datehook datetime disk diskfilter div div_test dm_nv echo efifwsetup efi_gop efinet efitextmode efi_uga ehci elf eval exfat exfctest ext2 extcmd f2fs fat file fixvideo font fshelp functional_test gcry_arcfour gcry_blowfish gcry_camellia gcry_cast5 gcry_crc gcry_des gcry_dsa gcry_idea gcry_md4 gcry_md5 gcry_rfc2268 gcry_rijndael gcry_rmd160 gcry_rsa gcry_seed gcry_serpent gcry_sha1 gcry_sha256 gcry_sha512 gcry_tiger gcry_twofish gcry_whirlpool geli gettext gfxmenu gfxterm gfxterm_background gfxterm_menu gptsync gzio halt hashsum hdparm hello help hexdump hfs hfsplus hfspluscomp http iorw iso9660 jfs jpeg json keylayouts keystatus ldm legacycfg legacy_password_test linux linux16 loadbios loadenv loopback ls lsacpi lsefi lsefimmap lsefisystab lsmmap lspci lssal luks luks2 lvm lzopio macbless macho mdraid09 mdraid09_be mdraid1x memdisk memrw minicmd minix minix2 minix2_be minix3 minix3_be minix_be mmap morse mpi msdospart mul_test multiboot multiboot2 nativedisk net newc nilfs2 normal ntfs ntfscomp odc offsetio ohci part_acorn part_amiga part_apple part_bsd part_dfly part_dvh part_gpt part_msdos part_plan part_sun part_sunpc parttool password password_pbkdf2 pata pbkdf2 pbkdf2_test pcidump pgp plainmount play png priority_queue probe procfs progress raid5rec raid6rec random rdmsr read reboot regexp reiserfs relocator romfs scsi search search_fs_file search_fs_uuid search_label serial setjmp setjmp_test setpci sfs shift_test signature_test sleep sleep_test smbios spkmodem squash4 strtoull_test syslinuxcfg tar terminal terminfo test test_blockarg testload testspeed tftp tga time tpm tr trig true udf ufs1 ufs1_be ufs2 uhci usb usb_keyboard usbms usbserial_common usbserial_ftdi usbserial_pl2303 usbserial_usbdebug usbtest video video_bochs video_cirrus video_colors video_fb videoinfo videotest videotest_checksum wrmsr xfs xnu xnu_uuid xnu_uuid_test xzio zfs zfscrypt zfsinfo zstd
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="install-grub-1" tabindex="-1"><a class="header-anchor" href="#install-grub-1"><span>Install GRUB</span></a></h5><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> grub-install <span class="token parameter variable">--target</span><span class="token operator">=</span>x86_64-efi --efi-directory<span class="token operator">=</span>/boot <span class="token parameter variable">--modules</span><span class="token operator">=</span><span class="token string">&quot;all_video boot btrfs cat chain configfile echo efifwsetup efinet ext2 fat font gettext gfxmenu gfxterm gfxterm_background gzio halt help hfsplus iso9660 jpeg keystatus loadenv loopback linux ls lsefi lsefimmap lsefisystab lssal memdisk minicmd normal ntfs part_apple part_msdos part_gpt password_pbkdf2 png probe reboot regexp search search_fs_uuid search_fs_file search_label sleep smbios squash4 test true video xfs zfs zfscrypt zfsinfo play cpuid tpm cryptodisk luks lvm mdraid09 mdraid1x raid5rec raid6rec&quot;</span> <span class="token parameter variable">--sbat</span> /usr/share/grub/sbat.csv</span></span>
<span class="token output">Installing for x86_64-efi platform.
Installation finished. No error reported.
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">boot/
├── EFI/
│   ├── arch/
│   │   └── grubx64.efi
│   └── Microsoft/
│       ├── Boot/
│       └── Recovery/
├── grub/
│   ├── fonts/
│   │   └── unicode.pf2
│   ├── grubenv/
│   ├── locale/
│   │   └── *.mo
│   ├── themes/
│   │   └── starfield/
│   └── x86_64-efi/
│       └── *.mod
├── initramfs-linux-fallback.img
├── initramfs-linux-lts-fallback.img
├── initramfs-linux-lts.img
├── initramfs-linux-zen-fallback.img
├── initramfs-linux-zen.img
├── initramfs-linux.img
├── vmlinuz-linux
├── vmlinuz-linux-lts
└── vmlinuz-linux-zen
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-a-machine-owner-key" tabindex="-1"><a class="header-anchor" href="#create-a-machine-owner-key"><span>Create a Machine Owner Key<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></span></a></h4><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash">openssl req <span class="token parameter variable">-newkey</span> rsa:4096 <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-keyout</span> MOK.key <span class="token parameter variable">-new</span> <span class="token parameter variable">-x509</span> <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token parameter variable">-subj</span> <span class="token string">&quot;/CN=my Machine Owner Key/&quot;</span> <span class="token parameter variable">-out</span> MOK.crt</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash">openssl x509 <span class="token parameter variable">-outform</span> DER <span class="token parameter variable">-in</span> MOK.crt <span class="token parameter variable">-out</span> MOK.cer</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">find</span> /boot <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;vmlinuz-*&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;if ! sbverify --list {} 2&gt; /dev/null | grep -q &quot;signature certificates&quot;; then sbsign --key MOK.key --cert MOK.crt --output {} {}; fi&#39;</span> <span class="token string">&#39;;&#39;</span></span></span>
<span class="token output">Signing Unsigned original image
Signing Unsigned original image
Signing Unsigned original image
</span><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;if ! sbverify --list /boot/EFI/arch/grubx64.efi 2&gt; /dev/null | grep -q &quot;signature certificates&quot;; then sbsign --key MOK.key --cert MOK.crt --output /boot/EFI/arch/grubx64.efi /boot/EFI/arch/grubx64.efi; fi&#39;</span></span></span>
<span class="token output">Signing Unsigned original image
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="make-grub-config" tabindex="-1"><a class="header-anchor" href="#make-grub-config"><span>Make GRUB Config</span></a></h4><h5 id="edit-etc-default-grub" tabindex="-1"><a class="header-anchor" href="#edit-etc-default-grub"><span>Edit <code>/etc/default/grub</code></span></a></h5><div class="language-diff line-numbers-mode" data-ext="diff" data-title="diff"><pre class="language-diff"><code>diff --git a/etc/default/grub.0 b/etc/default/grub
index caa8772..5840abb 100644
<span class="token coord">--- a/etc/default/grub.0</span>
<span class="token coord">+++ b/etc/default/grub</span>
<span class="token coord">@@ -1,6 +1,6 @@</span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"># GRUB boot loader configuration
</span></span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">GRUB_DEFAULT=0
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">GRUB_DEFAULT=saved
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">GRUB_TIMEOUT=5
</span><span class="token prefix unchanged"> </span><span class="token line">GRUB_DISTRIBUTOR=&quot;Arch&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">GRUB_CMDLINE_LINUX_DEFAULT=&quot;loglevel=3 quiet&quot;
</span></span>@@ -51,13 +51,13 @@ GRUB_DISABLE_RECOVERY=true

<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"># Uncomment to make GRUB remember the last selection. This requires
</span><span class="token prefix unchanged"> </span><span class="token line"># setting &#39;GRUB_DEFAULT=saved&#39; above.
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">#GRUB_SAVEDEFAULT=true
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">GRUB_SAVEDEFAULT=true
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"># Uncomment to disable submenus in boot menu
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">#GRUB_DISABLE_SUBMENU=y
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">GRUB_DISABLE_SUBMENU=y
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"># Probing for other operating systems is disabled for security reasons. Read
</span><span class="token prefix unchanged"> </span><span class="token line"># documentation on GRUB_DISABLE_OS_PROBER, if still want to enable this
</span><span class="token prefix unchanged"> </span><span class="token line"># functionality install os-prober and uncomment to detect and include other
</span><span class="token prefix unchanged"> </span><span class="token line"># operating systems.
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">#GRUB_DISABLE_OS_PROBER=false
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">GRUB_DISABLE_OS_PROBER=false
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">grub-mkconfig</span> <span class="token parameter variable">--output</span><span class="token operator">=</span>/boot/grub/grub.cfg</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="install-everything" tabindex="-1"><a class="header-anchor" href="#install-everything"><span>Install Everything</span></a></h4><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">--parents</span> /boot/EFI/Boot</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> /boot/EFI/arch/grubx64.efi /boot/EFI/Boot/grubx64.efi</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> /usr/share/shim-signed/shimx64.efi /boot/EFI/Boot/bootx64.efi</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> /usr/share/shim-signed/mmx64.efi /boot/EFI/Boot/mmx64.efi</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell-session line-numbers-mode" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> efibootmgr <span class="token parameter variable">--unicode</span> <span class="token parameter variable">--disk</span> /dev/sda <span class="token parameter variable">--part</span> <span class="token number">1</span> <span class="token parameter variable">--create</span> <span class="token parameter variable">--label</span> <span class="token string">&quot;shim&quot;</span> <span class="token parameter variable">--loader</span> /boot/EFI/Boot/bootx64.efi</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="my-boot-layout" tabindex="-1"><a class="header-anchor" href="#my-boot-layout"><span>My <code>/boot</code> Layout</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>boot/
├── EFI/
│   ├── arch/
│   │   └── grubx64.efi
│   ├── Boot/
│   │   ├── bootx64.efi
│   │   ├── grubx64.efi
│   │   └── mmx64.efi
│   └── Microsoft/
│       ├── Boot/
│       └── Recovery/
├── grub/
│   ├── fonts/
│   │   └── unicode.pf2
│   ├── grub.cfg
│   ├── grubenv
│   ├── locale/
│   │   └── *.mo
│   ├── themes/
│   │   └── starfield/
│   └── x86_64-efi/
│       └── *.mod
├── initramfs-linux-fallback.img
├── initramfs-linux-lts-fallback.img
├── initramfs-linux-lts.img
├── initramfs-linux-zen-fallback.img
├── initramfs-linux-zen.img
├── initramfs-linux.img
├── MOK.cer
├── vmlinuz-linux
├── vmlinuz-linux-lts
└── vmlinuz-linux-zen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,65),p={class:"footnotes"},u={class:"footnotes-list"},m={id:"footnote1",class:"footnote-item"},v={href:"https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#shim_with_key",target:"_blank",rel:"noopener noreferrer"},b=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function h(g,f){const e=i("ExternalLinkIcon");return l(),t("div",null,[c,s("section",p,[s("ol",u,[s("li",m,[s("p",null,[s("a",v,[n("Unified Extensible Firmware Interface/Secure Boot - ArchWiki"),o(e)]),n(),b])])])])])}const y=a(d,[["render",h],["__file","2023-03-08-install-arch-linux-with-windows.html.vue"]]),x=JSON.parse('{"path":"/2023/posts/2023-03-08-install-arch-linux-with-windows.html","title":"Install Arch Linux with Windows","lang":"en-US","frontmatter":{"date":"2023-03-08T00:00:00.000Z","isOriginal":true,"category":["Posts"],"tag":["Arch Linux","Linux","Windows"],"title":"Install Arch Linux with Windows","description":"BIOS Setup change hard drive mode from “RAID” to “ACHI/NVME” Partitioning for EFI System disable “Secure Boot” boot Arch Linux ISO [Optional] Connect from Another Device SSH fro...","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/2023/posts/2023-03-08-install-arch-linux-with-windows.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Install Arch Linux with Windows"}],["meta",{"property":"og:description","content":"BIOS Setup change hard drive mode from “RAID” to “ACHI/NVME” Partitioning for EFI System disable “Secure Boot” boot Arch Linux ISO [Optional] Connect from Another Device SSH fro..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.liblaf.me/img/2023/2023-03-08T062206Z.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:57:39.000Z"}],["meta",{"property":"article:author","content":"liblaf"}],["meta",{"property":"article:tag","content":"Arch Linux"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:published_time","content":"2023-03-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Install Arch Linux with Windows\\",\\"image\\":[\\"https://cdn.liblaf.me/img/2023/2023-03-08T062206Z.png\\",\\"https://cdn.liblaf.me/img/2023/2023-03-08T062232Z.png\\"],\\"datePublished\\":\\"2023-03-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T09:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liblaf\\",\\"url\\":\\"https://liblaf.me\\",\\"email\\":\\"i@liblaf.me\\"}]}"]]},"headers":[{"level":2,"title":"BIOS Setup","slug":"bios-setup","link":"#bios-setup","children":[]},{"level":2,"title":"Partitioning for EFI System","slug":"partitioning-for-efi-system","link":"#partitioning-for-efi-system","children":[{"level":3,"title":"[Optional] Connect from Another Device","slug":"optional-connect-from-another-device","link":"#optional-connect-from-another-device","children":[]},{"level":3,"title":"Partitioning","slug":"partitioning","link":"#partitioning","children":[]}]},{"level":2,"title":"Install Windows","slug":"install-windows","link":"#install-windows","children":[{"level":3,"title":"Partitioning","slug":"partitioning-1","link":"#partitioning-1","children":[]}]},{"level":2,"title":"Install Arch Linux","slug":"install-arch-linux","link":"#install-arch-linux","children":[{"level":3,"title":"[Optional] Connect from Another Device","slug":"optional-connect-from-another-device-1","link":"#optional-connect-from-another-device-1","children":[]},{"level":3,"title":"Partitioning","slug":"partitioning-2","link":"#partitioning-2","children":[]},{"level":3,"title":"archinstall","slug":"archinstall","link":"#archinstall","children":[]},{"level":3,"title":"Change Boot Order","slug":"change-boot-order","link":"#change-boot-order","children":[]}]},{"level":2,"title":"Post Installation","slug":"post-installation","link":"#post-installation","children":[{"level":3,"title":"Enable Secure Boot for Arch Linux","slug":"enable-secure-boot-for-arch-linux","link":"#enable-secure-boot-for-arch-linux","children":[]}]}],"git":{"createdTime":1678270960000,"updatedTime":1709459859000,"contributors":[{"name":"liblaf","email":"30631553+liblaf@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":6.69,"words":2007},"filePathRelative":"2023/posts/2023-03-08-install-arch-linux-with-windows.md","localizedDate":"March 8, 2023","excerpt":"<h2>BIOS Setup</h2>\\n<ul>\\n<li>change hard drive mode from “RAID” to “ACHI/NVME”</li>\\n</ul>\\n<h2>Partitioning for EFI System</h2>\\n<ul>\\n<li>disable “Secure Boot”</li>\\n<li>boot Arch Linux ISO</li>\\n</ul>\\n<h3>[Optional] Connect from Another Device</h3>\\n<div class=\\"language-shell-session\\" data-ext=\\"shell-session\\" data-title=\\"shell-session\\"><pre class=\\"language-shell-session\\"><code><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">root@archiso ~ </span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token function\\">passwd</span></span></span>\\n<span class=\\"token output\\">New password:\\nRetype new password:\\npasswd: password updated succesfully\\n</span><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">root@archiso ~ </span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\">systemctl start sshd</span></span>\\n<span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">root@archiso ~ </span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\">systemctl status sshd</span></span>\\n<span class=\\"token output\\">● sshd.service - OpenSSH Daemon\\n     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; preset: disabled)\\n     Active: active (running) since Wed 2023-03-08 06:08:32 UTC; 1min 36s ago\\n   Main PID: 508 (sshd)\\n      Tasks: 1 (limit: 19074)\\n     Memory: 4.2M\\n        CPU: 145ms\\n     CGroup: /system.slice/sshd.service\\n             └─508 \\"sshd: /usr/bin/sshd -D [listener] 0 of 10-100 startups\\"\\n\\nMar 08 06:08:32 archiso systemd[1]: Started OpenSSH Daemon.\\nMar 08 06:08:33 archiso sshd[508]: Server listening on 0.0.0.0 port 22.\\nMar 08 06:08:33 archiso sshd[508]: Server listening on :: port 22.\\n</span><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">root@archiso ~ </span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token function\\">ip</span> addr</span></span>\\n<span class=\\"token output\\">1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\\n    inet 127.0.0.1/8 scope host lo\\n       valid_lft forever preferred_lft forever\\n    inet6 ::1/128 scope host\\n       valid_lft forever preferred_lft forever\\n2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc fq_codel state UP group default qlen 1000\\n    link/ether 08:00:27:12:bc:70 brd ff:ff:ff:ff:ff:ff\\n    inet 10.0.2.15/24 metric 100 brd 10.0.2.255 scope global dynamic enp0s3\\n       valid_lft 86284sec preferred_lft 86284sec\\n    inet6 fe80::a00:27ff:fe12:bc70/64 scope link\\n       valid_lft forever preferred_lft forever\\n</span></code></pre></div>","autoDesc":true}');export{y as comp,x as data};
