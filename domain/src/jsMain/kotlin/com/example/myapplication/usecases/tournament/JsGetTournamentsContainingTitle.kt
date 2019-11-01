package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.externals.Observable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class JsGetTournamentsContainingTitle(
    override val usecase: GetTournamentsContainingTitleUseCase
) : JsUseCaseWithParamsObservable<GetTournamentsContainingTitleUseCase, GetTournamentsContainingTitleUseCase.Params, TournamentEntity> {

    @ExperimentalCoroutinesApi
    @FlowPreview
    override fun buildAction(params: GetTournamentsContainingTitleUseCase.Params): Observable<TournamentEntity> =
        usecase.buildAction(params).toObservable()
}