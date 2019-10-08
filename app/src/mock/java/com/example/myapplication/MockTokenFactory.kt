package com.example.myapplication

import com.example.myapplication.datasource.TokenFactory

class MockTokenFactory : TokenFactory {
    override val factory: () -> String? = { null }
}