package com.example.myapplication.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.data.MatchEntity
import com.example.myapplication.usecases.GetAllTournamentsUseCase
import kotlinx.coroutines.launch

class HomeViewModel(private val useCase: GetAllTournamentsUseCase) : ViewModel() {

    private val _matches = MutableLiveData<List<MatchEntity>>()
    val text: LiveData<List<MatchEntity>> = _matches

    fun loadMatches() = viewModelScope.launch {
        _matches.value = useCase.buildAction()
    }

}