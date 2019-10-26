package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.InternalCoroutinesApi
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetGamesByMode(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetGamesByMode.Params, Flow<GameEntity>> {

    @InternalCoroutinesApi
    @UseExperimental(FlowPreview::class)
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getGamesByMode(params.mode, it)
            }

    @InternalCoroutinesApi
    fun buildAction(mode: String, maxPage: Int = 1) =
        buildAction(Params(mode, maxPage))

    data class Params(val mode: String, val maxPage: Int = 1)
}






