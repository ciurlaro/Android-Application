package com.example.myapplication.usecases.user

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.usecases.registration.GetRegistrationsByTournamentUseCase
import com.example.myapplication.usecases.registration.GetRegistrationsByUserUseCase
import com.example.myapplication.usecases.user.info.GetUserInfoByUidUseCase
import kotlinx.coroutines.FlowPreview

@FlowPreview
class IsUserRegisteredUseCase(
    private val getRegistrationsByUserUseCase: GetRegistrationsByUserUseCase,
    private val getRegistrationsByTournamentUseCase: GetRegistrationsByTournamentUseCase,
    private val getUserInfoByUidUseCase: GetUserInfoByUidUseCase,
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<IsUserRegisteredUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        getRegistrationsByUserUseCase.buildAction(getUserInfoByUidUseCase.buildAction(params.userId))
            .intersect(getRegistrationsByTournamentUseCase.buildAction(repository.getTournamentById(params.tournamentId)))
            .isNotEmpty()
            .let { true } // TODO: delete it for real results

    suspend fun buildAction(userId: String, tournamentId: Long, page: Int) =
        buildAction(Params(userId, tournamentId, page))

    data class Params(val userId: String, val tournamentId: Long, val page: Int)
}