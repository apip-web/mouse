---
layout: post
date: 2026-02-10
title: Special permission adb command
---

Command untuk melihat dan edit folder data di dalam folder android.

## Es Explorer
```shell
adb shell pm grant com.estrongs.android.pop android.permission.WRITE_SECURE_SETTINGS
```

## Pixels
```shell
pm grant com.tribalfs.pixels android.permission.WRITE_SECURE_SETTINGS
```
