package com.example.myapplication.datasource

actual class FirebaseStorageDatasourceImplementation actual constructor(
    private val firebaseStorage: FirebaseStorage
) : FirebaseStorageDatasource {

    override suspend fun uploadFile(data: ByteArray, path: String) =
        wrapTask { firebaseStorage.reference.child(path).putBytes(data) }

    override suspend fun getFileUrl(path: String) =
        try {
            wrapTask({ firebaseStorage.reference.child(path).downloadUrl }) { it.toString() }
        } catch (e: Throwable) {
            null
        }

    override suspend fun getFile(path: String, maxSize: Long) =
        wrapTask({ firebaseStorage.reference.child(path).getBytes(maxSize) }) { it!! }

}