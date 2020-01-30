package unito.taas.project

import com.google.firebase.auth.FirebaseAuthException
import org.springframework.core.MethodParameter
import org.springframework.data.repository.support.QueryMethodParameterConversionException
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class UserExceptionHandler {

    @ExceptionHandler(FirebaseAuthException::class)
    fun authExceptionHandler(e: FirebaseAuthException): ResponseEntity<String> {
        return ResponseEntity.badRequest().body(e.errorCode)
    }

    @ExceptionHandler(QueryMethodParameterConversionException::class)
    fun convertDate(e: QueryMethodParameterConversionException): ResponseEntity<Any> {
        return ResponseEntity.badRequest().body(e.source)
    }
}