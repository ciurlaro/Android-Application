package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import com.example.myapplication.usecases.user.GetUserInfoUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetCreatedTournamentsByAdminUseCase(
    private val repository: ArenaTournamentRepository,
    private val getUserInfo: GetUserInfoUseCase
) : UseCaseWithParams<GetCreatedTournamentsByAdminUseCase.Params, Flow<TournamentEntity>> {

    @FlowPreview
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getTournamentsByUser(getUserInfo.buildAction().id, it)
            }

    @FlowPreview
    fun buildAction(maxPage: Int = 1) =
        buildAction(Params(maxPage))


    data class Params(val maxPage: Int = 1)

}
