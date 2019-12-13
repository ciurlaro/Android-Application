package com.example.myapplication.utils

import kotlinx.coroutines.flow.Flow

interface RepositoryReference<T> {
    val flow: Flow<List<T>>
    val currentPage: Int
    val totalPages: Int
    val totalElements: Int

    fun loadNextPage()
    fun hasNextPage(): Boolean
}