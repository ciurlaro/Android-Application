package com.example.myapplication.datasource

interface FirebaseStorageDatasource {
    suspend fun uploadFile(data: ByteArray, path: String): Boolean
    suspend fun getFile(path: String): ByteArray
}