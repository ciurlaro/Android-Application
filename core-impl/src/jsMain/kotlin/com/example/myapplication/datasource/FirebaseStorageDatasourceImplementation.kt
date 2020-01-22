package com.example.myapplication.datasource

actual class FirebaseStorageDatasourceImplementation actual constructor(
    private val firebaseStorage: FirebaseStorage
) : FirebaseStorageDatasource {
    override suspend fun uploadFile(data: ByteArray, path: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun getFileUrl(path: String): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun getFile(path: String, maxSize: Long): ByteArray {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}