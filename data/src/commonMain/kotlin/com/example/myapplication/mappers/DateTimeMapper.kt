package com.example.myapplication.mappers

import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.soywiz.klock.DateTimeTz
import com.soywiz.klock.parse

class DateTimeMapper : SingleFromRemoteMapper<String, DateTimeTz>,
    SingleToRemoteMapper<String, DateTimeTz> {
    override fun fromRemoteSingle(remote: String) =
        ArenaTournamentDatasource.DEFAULT_DATE_TIME_PATTERN.parse(remote)

    override fun toRemoteSingle(entity: DateTimeTz) =
        ArenaTournamentDatasource.DEFAULT_DATE_TIME_PATTERN.format(entity)

}