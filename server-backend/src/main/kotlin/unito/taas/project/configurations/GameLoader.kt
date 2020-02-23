package unito.taas.project.configurations

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.stereotype.Component
import unito.taas.project.data.GameEntity
import unito.taas.project.data.GameRepository
import unito.taas.project.isEmpty

@Component
class GameLoader @Autowired constructor(private val repo: GameRepository) :
    ApplicationRunner {

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