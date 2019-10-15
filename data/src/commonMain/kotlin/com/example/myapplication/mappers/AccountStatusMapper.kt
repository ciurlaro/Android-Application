package com.example.myapplication.mappers

import com.example.myapplication.rawresponses.AccountStatusJSON

class AccountStatusMapper : SingleFromRemoteMapper<AccountStatusJSON, Boolean> {

    override fun fromRemoteSingle(remote: AccountStatusJSON) =
        remote.verified

}