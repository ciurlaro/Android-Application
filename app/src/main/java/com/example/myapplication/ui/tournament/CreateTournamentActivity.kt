package com.example.myapplication.ui.tournament


import android.annotation.SuppressLint
import android.app.Dialog
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.Bundle
import androidx.annotation.RequiresApi
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.ui.BaseActivity
import com.example.myapplication.ui.MainActivity
import kotlinx.android.synthetic.main.activity_create_tournament.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview


@ExperimentalCoroutinesApi
@FlowPreview
class CreateTournamentActivity : BaseActivity() {

    private val viewModel: CreateTournamentViewModel by viewModelInstance()

    @SuppressLint("SetTextI18n")
    @RequiresApi(Build.VERSION_CODES.N)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_tournament)

        activity_tournament_games_button.setOnClickListener { _ ->
            val dialog = Dialog(this@CreateTournamentActivity)
//            val dialogView = SelectGameDialog {
//                viewModel.selectedGame.value = it
//            }.view
            dialog.setContentView(R.layout.dialog_select_game)
            dialog.show()
        }




        with(viewModel) {
            selectedGame.observe {
                Glide.with(this@CreateTournamentActivity)
                    .load(it.icon)
                    .into(selected_game_image)
            }
        }

//        DATE AND TIME PICKERS: FUNZIONANO MA VANNO ASSOCIATI A PULSANTI E VIEW GIUSTE
        //        games_selection_edit_textview.setOnClickListener {
        //            val mcurrentDate = Calendar.getInstance()
        //            val mYear = mcurrentDate[Calendar.YEAR]
        //            val mMonth = mcurrentDate[Calendar.MONTH]
        //            val mDay = mcurrentDate[Calendar.DAY_OF_MONTH]
        //            val mDatePicker: DatePickerDialog
        //            mDatePicker = DatePickerDialog(
        //                this@CreateTournamentActivity,
        //                OnDateSetListener { _, selectedyear, selectedmonth, selectedday ->
        //                    games_selection_edit_textview.text = "$selectedday/${selectedmonth+1}/$selectedyear"
        //                }, mYear, mMonth, mDay
        //            )
        //            mDatePicker.setTitle("Select Date")
        //            mDatePicker.show()
        //        }
//        games_selection_edit_textview.setOnClickListener {
//            val mcurrentTime = Calendar.getInstance()
//            val hour = mcurrentTime[Calendar.HOUR_OF_DAY]
//            val minute = mcurrentTime[Calendar.MINUTE]
//            val mTimePicker: TimePickerDialog
//            mTimePicker = TimePickerDialog(
//                this@CreateTournamentActivity,
//                TimePickerDialog.OnTimeSetListener { _, selectedHour, selectedMinute ->
//                    games_selection_edit_textview.text = "$selectedHour:$selectedMinute"
//                }, hour, minute,
//                true
//            )
//            mTimePicker.show()
//        }


    }


    override fun onBackPressed() {
        super.onBackPressed()
        startActivity(MainActivity(this@CreateTournamentActivity))
    }


    companion object {
        private fun buildIntent(context: Context) =
            Intent(context, CreateTournamentActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
            }

        operator fun invoke(context: Context) =
            buildIntent(context)
    }

}