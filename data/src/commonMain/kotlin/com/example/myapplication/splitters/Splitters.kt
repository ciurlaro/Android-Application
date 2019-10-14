package com.example.myapplication.splitters

interface Splitter<In, Out> {

    fun split(input: In): List<Out>
    operator fun invoke(input: In) = split(input)

}