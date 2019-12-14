package com.example.myapplication.ui

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity

interface IntentBuilder<T: AppCompatActivity> {

    fun buildIntent(context: Context): Intent

}