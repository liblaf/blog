---
title: Log Convention
category:
  - Style
tag:
  - Logging
---

## Color

| Log Level | Value | Rich Style                | ANSI Escape  |
| --------- | ----- | ------------------------- | ------------ |
| OFF       | 100   |                           |              |
| FATAL     | 90    | `bold reverse bright_red` | `\x1b[1;91m` |
| ERROR     | 70    | `bold bright_red`         | `\x1b[1;91m` |
| WARN      | 50    | `bold bright_yellow`      | `\x1b[1;93m` |
| INFO      | 30    | `bold bright_blue`        | `\x1b[1;94m` |
| DEBUG     | 20    | `blue`                    | `\x1b[34m`   |
| TRACE     | 10    | `dim`                     | `\x1b[2m`    |
| ALL       | 0     |                           |              |
| TIP       | 32    | `bold bright_cyan`        | `\x1b[1;96m` |
| SUCCESS   | 31    | `bold bright_green`       | `\x1b[1;92m` |
