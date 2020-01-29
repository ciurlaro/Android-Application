package com.example.myapplication.ui.utils

import android.app.AlertDialog
import android.content.Context
import android.content.DialogInterface
import android.text.Editable
import android.text.TextWatcher
import android.widget.TextView
import com.example.myapplication.R
import com.example.myapplication.entities.GameEntity
import com.facebook.CallbackManager
import com.facebook.login.LoginManager
import com.google.android.material.dialog.MaterialAlertDialogBuilder
import com.google.android.material.textfield.TextInputLayout

fun buildGameChooserDialog(context: Context, games: List<GameEntity>, onGameSelected: (GameEntity) -> Unit) =
    AlertDialog.Builder(context)
        .setItems(games.map { it.name }.toTypedArray()) { _, selected ->
            onGameSelected(games[selected])
        }
        .setTitle(R.string.select_a_game)
        .setIcon(R.drawable.ic_videogame_asset_black_24dp)!!


fun buildRegistrationDialog(context: Context, onConfirmation: DialogInterface.OnClickListener) =
    MaterialAlertDialogBuilder(context)
        .setTitle(R.string.confirm_registration)
        .setMessage(R.string.registration_question)
        .setPositiveButton(R.string.confirm, onConfirmation)
        .setNegativeButton(R.string.dismiss, null)


fun TextView.addOnTextChangedListener(action: (s: CharSequence?, start: Int, before: Int, count: Int) -> Unit) =
    addTextChangedListener(object : TextWatcher {
        override fun afterTextChanged(s: Editable?) {}
        override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
        override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
            action(s, start, before, count)
        }
    })

fun TextView.resetLayoutErrorOnTextChanged(layout: TextInputLayout) =
    addOnTextChangedListener { _, _, _, _ -> layout.error = null }

typealias FacebookCallbackManager = CallbackManager
typealias FacebookLoginManager = LoginManager