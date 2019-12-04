package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetAllRegistrationsByMatchUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<GetAllRegistrationsByMatchUseCase.Params, List<RegistrationEntity>> {

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getRegistrationsByMatch(params.match.id, it)
            }.toList()


    @FlowPreview
    suspend fun buildAction(match: MatchEntity, maxPage: Int = 1) =
        buildAction(Params(match, maxPage))

    data class Params(val match: MatchEntity, val maxPage: Int = 1)

}