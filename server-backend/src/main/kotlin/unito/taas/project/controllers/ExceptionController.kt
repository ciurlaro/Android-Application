package unito.taas.project.controllers

import org.springframework.core.io.ClassPathResource
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.servlet.NoHandlerFoundException

@Controller
@ControllerAdvice
class UserExceptionHandler {

    private val content by lazy {
        ResponseEntity.ok().body(ClassPathResource("static/index.html").file.readText())
    }

    @GetMapping("")
    @ExceptionHandler(NoHandlerFoundException::class)
    fun notFound() = content

}