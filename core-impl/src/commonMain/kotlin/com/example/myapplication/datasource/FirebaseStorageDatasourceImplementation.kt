package com.example.myapplication.datasource

import com.github.lamba92.firebasemultiplatform.storage.FirebaseStorage

class FirebaseStorageDatasourceImplementation(val firebaseStorage: FirebaseStorage) : FirebaseStorageDatasource {

    override suspend fun uploadFile(data: ByteArray, path: String) =
        firebaseStorage.getReference(path).putBytes(data).await().let { true }

    override suspend fun getFileUrl(path: String): String? {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}