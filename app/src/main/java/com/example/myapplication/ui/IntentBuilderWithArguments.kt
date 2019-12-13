package com.example.myapplication.ui

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity

interface IntentBuilderWithArguments<T: AppCompatActivity, P> {

    fun buildIntent(context: Context, data: P): Intent

}