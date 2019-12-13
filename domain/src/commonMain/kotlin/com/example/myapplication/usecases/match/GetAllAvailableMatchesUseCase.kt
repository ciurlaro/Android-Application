package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.UseCaseWithParamSuspending
import com.example.myapplication.usecases.registration.GetAllRegistrationsByMatchUseCase
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetAllAvailableMatchesUseCase(
    private val getAvailableMatchesPerPageUseCase: GetAvailableMatchesPerPageUseCase,
    private val getAllRegistrationsByMatchUseCase: GetAllRegistrationsByMatchUseCase
) : UseCaseWithParamSuspending<GetAllAvailableMatchesUseCase.Params, List<Pair<MatchEntity, Int>>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params) =
        (0 until params.pages)
            .asFlow()
            .flatMapConcatIterable {
                getAvailableMatchesPerPageUseCase.buildAction(it)
                    .map { match ->
                        match to getAllRegistrationsByMatchUseCase.buildAction(match, it).toList().size
                    }
            }
            .toList()

    suspend fun buildAction(pages: Int = 1) =
        buildAction(Params(pages))

    data class Params(val pages: Int = 1)

}