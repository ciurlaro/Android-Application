package unito.taas.project.configurations

import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@Configuration
class CustomCorsConfiguration {

    @Bean
    fun corsFilter() =
        with(CorsConfiguration()) {
            allowCredentials = true
            addAllowedOrigin("http://localhost:4200")
            addAllowedHeader("*")
            addAllowedMethod("*")
            UrlBasedCorsConfigurationSource().run {
                registerCorsConfiguration("/assets/**", this@with)
                FilterRegistrationBean(CorsFilter(this)).apply {
                    order = 0
                }
            }
        }
}