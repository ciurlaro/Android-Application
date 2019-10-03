package com.example.myapplication.usecases

import com.example.myapplication.data.TournamentEntity
import com.example.myapplication.mappers.MultipleTournamentsMapper
import com.example.myapplication.network.Endpoints
import io.ktor.client.HttpClient
import io.ktor.client.request.get

class GetAllTournamentsUseCase(
    private val httpClient: HttpClient,
    private val mapper: MultipleTournamentsMapper
) : UseCase<List<TournamentEntity>> {

    override suspend fun buildAction() =
        mapper.fromRemote(httpClient.get(Endpoints.TOURNAMENTS))

}