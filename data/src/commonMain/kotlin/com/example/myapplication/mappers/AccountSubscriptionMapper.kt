package com.example.myapplication.mappers

import com.example.myapplication.rawresponses.SubscriptionStatusJSON


class AccountSubscriptionMapper : SingleFromRemoteMapper<SubscriptionStatusJSON, Boolean> {

    override fun fromRemoteSingle(remote: SubscriptionStatusJSON) =
        remote.subscriber

}