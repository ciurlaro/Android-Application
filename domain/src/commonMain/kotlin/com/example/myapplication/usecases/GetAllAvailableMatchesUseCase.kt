package com.example.myapplication.usecases

import com.example.myapplication.entities.MatchEntity
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

class GetAllAvailableMatchesUseCase(
    private val getAvailableMatchesPerPage: GetAvailableMatchesPerPage,
    private val getAllRegistrationsByMatch: GetAllRegistrationsByMatch
) : UseCaseWithParams<GetAllAvailableMatchesUseCase.Params, List<Pair<MatchEntity, Int>>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): List<Pair<MatchEntity, Int>> =
        (0 until params.pages)
            .asFlow()
            .map { getAvailableMatchesPerPage.buildAction(it) }
            .flatMapConcat {
                it.asFlow()
                    .map { it to getAllRegistrationsByMatch.buildAction(it).size }
            }
            .toList()

    suspend fun buildAction(pages: Int = 1) =
        buildAction(Params(pages))

    data class Params(val pages: Int = 1)

}