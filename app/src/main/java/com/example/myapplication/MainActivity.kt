package com.example.myapplication

import android.app.Dialog
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView


class MainActivity : BaseActivity() {

    var myDialog: Dialog? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.item_user)
        myDialog = Dialog(this)

        /*// However, if we're being restored from a previous state,
        // then we don't need to do anything and should return or else
        // we could end up with overlapping fragments.
        if (savedInstanceState != null) {
            return
        }

        // Create a new Fragment to be placed in the activity layout
        val firstFragment = SignInFragment()

        // In case this activity was started with special instructions from an
        // Intent, pass the Intent's extras to the fragment as arguments
        firstFragment.arguments = intent.extras

        // Add the fragment to the 'fragment_container' FrameLayout
        supportFragmentManager.beginTransaction()
            .add(R.id.sign_fragment_container, firstFragment).commit()


        button_sign_in.setOnClickListener {
            val newFragment = SignInFragment()

            val transaction = supportFragmentManager.beginTransaction().apply {
                // Replace whatever is in the fragment_container view with this fragment,
                // and add the transaction to the back stack so the user can navigate back
                replace(R.id.sign_fragment_container, newFragment)
                addToBackStack(null)
            }

            transaction.commit()

        }

        button_sign_up.setOnClickListener {
            val newFragment = SignUpFragment()

            val transaction = supportFragmentManager.beginTransaction().apply {
                // Replace whatever is in the fragment_container view with this fragment,
                // and add the transaction to the back stack so the user can navigate back
                replace(R.id.sign_fragment_container, newFragment)
                addToBackStack(null)
            }

            transaction.commit()
        }*/
    }

    fun showPopup(view: View) {
        var txtClose: TextView? = null
        var btn: Button? = null
        myDialog!!.setContentView(R.layout.popup)


        myDialog!!.window!!.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
        myDialog!!.show()
    }

}
