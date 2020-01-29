package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.FlowPreview

class CreateRegistrationUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateRegistrationUseCase.Params, RegistrationEntity> {

    override suspend fun buildAction(params: Params): RegistrationEntity =
        repository.createRegistration(params.user, params.tournament)

    suspend fun buildAction(user: UserEntity, tournament: TournamentEntity) =
        buildAction(Params(user, tournament))

    data class Params(
        val user: UserEntity,
        val tournament: TournamentEntity
    )

}