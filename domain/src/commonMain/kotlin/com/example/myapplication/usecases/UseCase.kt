package com.example.myapplication.usecases

interface UseCase<T> {

    fun buildAction(): T

}