package com.example.myapplication.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.MatchEntity
import kotlinx.coroutines.launch

class HomeViewModel() : ViewModel() {

    private val _matches = MutableLiveData<List<MatchEntity>>()
    val text: LiveData<List<MatchEntity>> = _matches

    fun loadMatches() = viewModelScope.launch {
    }

}