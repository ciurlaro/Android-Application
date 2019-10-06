package com.example.myapplication.datasource

interface TokenFactory {
    val factory: () -> String?
    operator fun invoke() = factory()
}