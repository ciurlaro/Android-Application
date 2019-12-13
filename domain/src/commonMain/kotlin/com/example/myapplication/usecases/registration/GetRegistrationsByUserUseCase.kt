package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetRegistrationsByUserUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetRegistrationsByUserUseCase.Params, List<RegistrationEntity>> {

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getRegistrationsByUser(params.user.id, it)
            }
            .toList()


    @FlowPreview
    suspend fun buildAction(user: UserEntity, maxPage: Int = 1) =
        buildAction(Params(user, maxPage))

    data class Params(val user: UserEntity, val maxPage: Int = 1)

}