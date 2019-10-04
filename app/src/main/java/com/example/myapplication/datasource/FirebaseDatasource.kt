package com.example.myapplication.datasource

interface FirebaseDatasource {

    suspend fun getToken(): String

}