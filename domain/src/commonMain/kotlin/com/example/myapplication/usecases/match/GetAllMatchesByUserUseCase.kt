package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import com.example.myapplication.usecases.user.GetUserInfoUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*

class GetAllMatchesByUserUseCase(
    private val repository: ArenaTournamentRepository,
    private val getUserInfo: GetUserInfoUseCase
) : UseCaseWithParams<GetAllMatchesByUserUseCase.Params, Flow<MatchEntity>> {

    @FlowPreview
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getMatchesByUser(getUserInfo.buildAction().id, it)
            }

    @FlowPreview
    fun buildAction(maxPage: Int = 1) =
        buildAction(Params(maxPage))

    data class Params(val maxPage: Int = 1)

}

