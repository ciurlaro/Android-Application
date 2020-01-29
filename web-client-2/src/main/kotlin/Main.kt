import kotlinx.html.dom.create
import kotlinx.html.h1
import org.kodein.di.Kodein
import kotlin.browser.document

val container by Kodein.lazy {
    import()
}

fun main() {


    println("Hello..")

    // veryFirstDoStuff()
    doStuff()

    println(".. World!")
}

fun doStuff() = with(document) {
    getElementById("footer7-h")?.apply {
        id = "OVOLLO"
        innerHTML = create.h1 { +"LOOOOOOL" }.outerHTML
    }
}

private fun veryFirstDoStuff() = with(document) {

    val div = createElement("div").apply {
        appendChild(createElement("h1").apply { textContent = "Hello" })
        appendChild(createElement("button").apply {
            textContent = "Click me"
            addEventListener("click", {
                println("clicked")
            })
        })
    }

    getElementById("root")?.apply {
        appendChild(div)
    }

}

