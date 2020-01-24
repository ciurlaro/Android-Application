package com.example.myapplication.datasource

interface FirebaseStorageDatasource {
    suspend fun uploadFile(data: ByteArray, path: String): Boolean
    suspend fun getFileUrl(path: String): String?
}