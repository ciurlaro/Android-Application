package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.UseCaseWithParams
import com.example.myapplication.usecases.registration.GetAllRegistrationsByMatch
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*

class GetAllAvailableMatchesUseCase(
    private val getAvailableMatchesPerPage: GetAvailableMatchesPerPage,
    private val getAllRegistrationsByMatch: GetAllRegistrationsByMatch
) : UseCaseWithParams<GetAllAvailableMatchesUseCase.Params, Flow<Pair<MatchEntity, Int>>> {

    @UseExperimental(FlowPreview::class)
    override fun buildAction(params: Params) =
        (0 until params.pages)
            .asFlow()
            .flatMapConcat {
                getAvailableMatchesPerPage.buildAction(it)
                    .map { match ->
                        match to getAllRegistrationsByMatch.buildAction(match, it).toList().size
                    }
            }


    fun buildAction(pages: Int = 1) =
        buildAction(Params(pages))

    data class Params(val pages: Int = 1)

}