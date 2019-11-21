package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.soywiz.klock.DateTimeTz
import kotlinx.coroutines.FlowPreview

class CreateMatchUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateMatchUseCase.Params, MatchEntity> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): MatchEntity =
        repository.createMatch(
            params.matchDateTime,
            params.playersCount,
            params.isRegistrationPossible,
            params.tournament
        )

    suspend fun buildAction(
        matchDateTime: DateTimeTz,
        playersCount: Int,
        isRegistrationPossible: Boolean,
        tournament: TournamentEntity
    ) =
        buildAction(Params(matchDateTime, playersCount, isRegistrationPossible, tournament))

    data class Params(
        val matchDateTime: DateTimeTz,
        val playersCount: Int,
        val isRegistrationPossible: Boolean,
        val tournament: TournamentEntity
    )

}