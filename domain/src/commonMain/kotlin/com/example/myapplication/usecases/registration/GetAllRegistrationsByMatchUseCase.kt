package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetAllRegistrationsByMatchUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetAllRegistrationsByMatchUseCase.Params, Flow<RegistrationEntity>> {

    @FlowPreview
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getRegistrationsByMatch(params.match.id, it)
            }


    @FlowPreview
    fun buildAction(match: MatchEntity, maxPage: Int = 1) =
        buildAction(Params(match, maxPage))

    data class Params(val match: MatchEntity, val maxPage: Int = 1)

}