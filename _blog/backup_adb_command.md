---
layout: post
date: 2026-02-10
title: Backup Adb Command
---

Adb Command untuk memberi permission supaya bisa melihat dan edit folder data di dalam folder android.

## Es Explorer

```shell
adb shell pm grant com.estrongs.android.pop android.permission.WRITE_SECURE_SETTINGS
```

Adb command untuk memberi permission supaya bisa mengubah resolusi layar android.

## Pixels

```shell
pm grant com.tribalfs.pixels android.permission.WRITE_SECURE_SETTINGS
```

Adb command untuk menghapus app bawaan hape (bloatware) tanpa root.

## Brevent

```shell
pm uninstall -k --user 0 com.heytap.market
```
