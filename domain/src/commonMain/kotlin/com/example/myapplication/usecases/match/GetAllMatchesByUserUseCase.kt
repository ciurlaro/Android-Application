package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetAllMatchesByUserUseCase(
    private val repository: ArenaTournamentRepository,
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase
) : UseCaseWithParamsSuspending<GetAllMatchesByUserUseCase.Params, List<MatchEntity>> {

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getMatchesByUser(getCurrentUserInfoUseCase.buildAction()!!.id, it)
            }.toList()

    @FlowPreview
    suspend fun buildAction(maxPage: Int = 1) =
        buildAction(Params(maxPage))

    data class Params(val maxPage: Int = 1)

}

