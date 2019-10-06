package com.example.myapplication.modules

import org.kodein.di.Kodein

val COMMON_KODEIN by Kodein.lazy {
    import(MappersModule)
    import(SpittersModule)
    import(RepositoriesModule)
}