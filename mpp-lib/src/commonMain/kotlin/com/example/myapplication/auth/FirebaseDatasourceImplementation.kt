package com.example.myapplication.auth

import com.example.myapplication.datasource.FirebaseDatasource

expect class FirebaseDatasourceImplementation(firebaseAuth: FirebaseAuth) : FirebaseDatasource