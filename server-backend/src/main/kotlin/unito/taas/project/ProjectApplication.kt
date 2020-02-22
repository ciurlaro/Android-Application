package unito.taas.project

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration
import org.springframework.stereotype.Component
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import unito.taas.project.data.GameEntity
import unito.taas.project.data.GameRepository

@SpringBootApplication
class ProjectApplication

fun main(args: Array<String>) {
    runApplication<ProjectApplication>(*args)
}

@Component
class GameLoader @Autowired constructor(private val repo: GameRepository) : ApplicationRunner {

    override fun run(args: ApplicationArguments?) {
        if (repo.isEmpty()) {
            repo.save(
                GameEntity(
                    "Overwatch",
                    "assets/images/overwatch.png",
                    "assets/icons/overwatch.png",
                    "assets/icons/overwatch.svg"
                )
            )
            repo.save(
                GameEntity(
                    "Heroes of the Storm",
                    "assets/images/hots.jpg",
                    "assets/icons/hots.png",
                    "assets/icons/hots.svg"
                )
            )
            repo.save(
                GameEntity(
                    "Diablo III",
                    "assets/images/diablo-III.png",
                    "assets/icons/diablo-III.png",
                    "assets/icons/diablo-III.svg"
                )
            )
            repo.save(
                GameEntity(
                    "Hearthstone",
                    "assets/images/hearthstone.jpg",
                    "assets/icons/hearthstone.png",
                    "assets/icons/hearthstone.svg"
                )
            )
            repo.save(
                GameEntity(
                    "World of Warcraft",
                    "assets/images/wow.png",
                    "assets/icons/wow.png",
                    "assets/icons/wow.svg"
                )
            )
        }
    }

}

@Configuration
class MyConfiguration {
    @Bean
    fun corsFilter(): FilterRegistrationBean<CorsFilter> {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = true
        config.addAllowedOrigin("http://localhost:4200")
        config.addAllowedHeader("*")
        config.addAllowedMethod("*")
        source.registerCorsConfiguration("/assets/**", config)
        val bean = FilterRegistrationBean(CorsFilter(source))
        bean.order = 0
        return bean
    }
}


