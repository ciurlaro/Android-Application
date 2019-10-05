package com.example.myapplication.mappers

interface Splitter<In, Out> {

    fun split(input: In): List<Out>
    operator fun invoke(input: In) = split(input)

}