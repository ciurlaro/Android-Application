package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetRegistrationsByUser(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetRegistrationsByUser.Params, Flow<RegistrationEntity>> {

    @FlowPreview
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getRegistrationsByUser(params.user.id, it)
            }


    @FlowPreview
    fun buildAction(user: UserEntity, maxPage: Int = 1) =
        buildAction(Params(user, maxPage))

    data class Params(val user: UserEntity, val maxPage: Int = 1)

}