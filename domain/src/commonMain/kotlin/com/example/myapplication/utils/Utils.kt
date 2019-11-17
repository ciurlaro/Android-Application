package com.example.myapplication.utils

import com.example.myapplication.repositories.ArenaTournamentRepository

suspend fun ArenaTournamentRepository.isLoggedIn() =
    getCurrentUser() != null