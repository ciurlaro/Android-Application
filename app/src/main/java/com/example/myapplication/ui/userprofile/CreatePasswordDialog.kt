package com.example.myapplication.ui.userprofile

import android.app.AlertDialog
import android.app.Dialog
import android.os.Bundle
import com.example.myapplication.R
import com.example.myapplication.ui.BaseDialogFragment
import kotlinx.android.synthetic.main.dialog_create_password.*

class CreatePasswordDialog(private val passwordCallback: (String) -> Unit) : BaseDialogFragment() {

    override fun onCreateDialog(savedInstanceState: Bundle?) =
        AlertDialog.Builder(requireContext())
            .setView(R.layout.dialog_create_password)
            .setPositiveButton(resources.getString(R.string.link_accounts)) { _, _ -> requireDialog().checkPasswords() }
            .setNegativeButton(resources.getString(R.string.com_facebook_loginview_cancel_action)) { dialog, _ -> dialog.dismiss() }
            .create()!!

    private fun Dialog.checkPasswords() {
        if (dialog_create_pswd_password.text != null && dialog_create_pswd_repeat_password.text != null
                && dialog_create_pswd_password.text?.toString() == dialog_create_pswd_repeat_password.text?.toString()
                && dialog_create_pswd_password.text!!.isNotBlank() && dialog_create_pswd_repeat_password.text!!.isNotBlank()
        )
            passwordCallback(dialog_create_pswd_password.text!!.toString())
        else
            dialog_create_pswd_repeat_password.error = resources.getString(R.string.password_must_match)

    }

}