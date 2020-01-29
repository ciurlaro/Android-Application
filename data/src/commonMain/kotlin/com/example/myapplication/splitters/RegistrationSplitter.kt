package com.example.myapplication.splitters

import com.example.myapplication.rawresponses.MultipleRegistrationsJSON
import com.example.myapplication.rawresponses.RegistrationJSON


class RegistrationSplitter : Splitter<MultipleRegistrationsJSON, RegistrationJSON> {

    override fun split(input: MultipleRegistrationsJSON) =
        input._embedded.registrationEntities

}