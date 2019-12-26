package com.example.myapplication.datasource

interface FirebaseStorageDatasource {
    suspend fun uploadFile(data: ByteArray, path: String): Boolean
    suspend fun getFileUrl(path: String): String?
    suspend fun getFile(path: String, maxSize: Long = 1024 * 1024): ByteArray
}