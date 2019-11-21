package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.FlowPreview

class CreateTournamentUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateTournamentUseCase.Params, TournamentEntity> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): TournamentEntity =
        repository.createTournament(
            params.playersNumber,
            params.title,
            params.tournamentDescription,
            params.tournamentMode,
            params.admin,
            params.game
        )

    suspend fun buildAction(
        playersNumber: Int,
        title: String,
        tournamentDescription: String,
        tournamentMode: String,
        admin: UserEntity,
        game: GameEntity
    ) =
        buildAction(
            Params(
                playersNumber,
                title,
                tournamentDescription,
                tournamentMode,
                admin,
                game
            )
        )

    data class Params(
        val playersNumber: Int,
        val title: String,
        val tournamentDescription: String,
        val tournamentMode: String,
        val admin: UserEntity,
        val game: GameEntity
    )

}