package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.FlowPreview

class CreateRegistrationUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateRegistrationUseCase.Params, RegistrationEntity> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): RegistrationEntity =
        repository.createRegistration(params.user, params.match)

    suspend fun buildAction(user: UserEntity, match: MatchEntity) =
        buildAction(Params(user, match))

    data class Params(
        val user: UserEntity,
        val match: MatchEntity
    )

}