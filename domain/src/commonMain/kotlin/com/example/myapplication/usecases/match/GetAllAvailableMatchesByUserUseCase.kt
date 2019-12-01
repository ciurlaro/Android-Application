package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.UseCaseWithParams
import com.example.myapplication.usecases.registration.GetRegistrationsByUserUseCase
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*

class GetAllAvailableMatchesByParametersUseCase(
    private val getAllAvailableMatchesUseCase: GetAllAvailableMatchesUseCase,
    private val getAllRegistrationsByUserUseCase: GetRegistrationsByUserUseCase,
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase
) : UseCaseWithParams<GetAllAvailableMatchesByParametersUseCase.Params, Flow<Triple<MatchEntity, Int, Boolean>>> {

    @UseExperimental(FlowPreview::class)
    override fun buildAction(params: Params) =
        (0 until params.pages)
            .asFlow()
            .flatMapConcat { page ->
                val alreadyRegisteredMatches = alreadyRegisteredMatches().toList()
                getAllAvailableMatchesUseCase.buildAction(page)
                    .map {
                        Triple(
                            it.first,
                            it.second,
                            alreadyRegisteredMatches.contains(it.first)
                        )
                    }
                    .filter { it.first.tournament.game.name == params.gameName }
            }


    fun buildAction(pages: Int = 1, gameName: String) =
        buildAction(Params(pages, gameName))

    data class Params(val pages: Int = 1, val gameName: String)

    @FlowPreview
    private suspend fun alreadyRegisteredMatches() =
        getAllRegistrationsByUserUseCase.buildAction(getCurrentUserInfoUseCase.buildAction()!!)
            .map { it.match }

}
