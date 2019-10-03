package com.example.myapplication.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.data.MatchEntity
import io.ktor.client.HttpClient
import io.ktor.client.request.post
import kotlinx.coroutines.launch

class HomeViewModel(private val httpClient: HttpClient) : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is home Fragment"
    }
    val text: LiveData<String> = _text

    fun loadMatches() = viewModelScope.launch {
        val matches = httpClient.post<Collection<MatchEntity>>("http://localhost:8080/match")


    }
}