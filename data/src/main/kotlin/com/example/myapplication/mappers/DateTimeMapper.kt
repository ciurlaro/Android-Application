package com.example.myapplication.mappers

import com.example.myapplication.datasource.ArenaTournamentPublicDatasource
import com.soywiz.klock.DateTimeTz
import com.soywiz.klock.parse

class DateTimeMapper(
    private val atDS: ArenaTournamentPublicDatasource
): SingleFromRemoteMapper<String, DateTimeTz>, SingleToRemoteMapper<String, DateTimeTz> {
    override fun fromRemoteSingle(remote: String) =
        atDS.DEFAULT_DATE_TIME_PATTERN.parse(remote)

    override fun toRemote(entity: DateTimeTz) =
        atDS.DEFAULT_DATE_TIME_PATTERN.format(entity)

}