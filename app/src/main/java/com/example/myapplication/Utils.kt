package com.example.myapplication

fun <K, V> MutableMap<K, V>.removeAll(keys: List<K>) =
    keys.forEach { remove(it) }