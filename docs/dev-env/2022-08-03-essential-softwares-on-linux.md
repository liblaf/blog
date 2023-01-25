---
title: "Essential Softwares on Linux"
category:
  - "Dev Env"
  - "Linux"
tag:
  - "Essentials"
---

## Homebrew

- [The Missing Package Manager for macOS (or Linux) — Homebrew](https://brew.sh/)

### Install

```bash
sudo apt install build-essential procps curl file git
bash -c "$(wget --output-document="-" "https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh")"
```

## Virtual Box

### Install

- [Linux_Downloads – Oracle VM VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads)

```bash
cat <<-EOF | sudo tee '/etc/apt/sources.list.d/virtualbox.list' >'/dev/null'
deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib
EOF

wget --output-document="-" "https://www.virtualbox.org/download/oracle_vbox_2016.asc" |
  sudo gpg --dearmor --yes --output "/usr/share/keyrings/oracle-virtualbox-2016.gpg"

sudo apt update
sudo apt install virtualbox-6.1
```

## Grub Customizer

- [Launchpad PPA for Grub Customizer : Daniel Richter](https://launchpad.net/~danielrichter2007/+archive/ubuntu/grub-customizer)
- [Customize Grub With Grub Customizer GUI Tool in Linux](https://itsfoss.com/customize-grub-linux/)
- [GRUB Themes - Gnome-look.org](https://www.gnome-look.org/browse?cat=109&ord=latest)
- [Distro Grub Themes - Gnome-look.org](https://www.gnome-look.org/p/1482847/)

### Install

```bash
sudo add-apt-repository ppa:danielrichter2007/grub-customizer
sudo apt update
sudo apt install grub-customizer
```
