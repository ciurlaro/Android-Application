package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview

class CreateGameUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<CreateGameUseCase.Params, GameEntity> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): GameEntity =
        repository.createGame(
            params.name,
            params.availableModes,
            params.image,
            params.icon
        )

    suspend fun buildAction(
        name: String,
        availableModes: List<String>,
        image: String,
        icon: String
    ) =
        buildAction(Params(name, availableModes, image, icon))

    data class Params(
        val name: String,
        val availableModes: List<String>,
        val image: String,
        val icon: String
    )

}