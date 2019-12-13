package com.example.myapplication.ui.history

import android.os.Bundle
import com.example.myapplication.R
import com.example.myapplication.ui.BaseActivity
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview


@ExperimentalCoroutinesApi
@FlowPreview
class HistoryActivity : BaseActivity() {

    private val viewModel: HistoryViewModel by viewModelInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_history)

        with(viewModel) {
            // cose
        }
    }

}