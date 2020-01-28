package com.example.myapplication.datasource

import com.github.lamba92.firebasemultiplatform.storage.FirebaseStorage

class FirebaseStorageDatasourceImplementation(private val firebaseStorage: FirebaseStorage) :
    FirebaseStorageDatasource {

    override suspend fun uploadFile(data: ByteArray, path: String) =
        firebaseStorage.getReference(path).putBytes(data).await().let { true }

    override suspend fun getFileUrl(path: String) =
        firebaseStorage.getReference(path).downloadUrl()

}