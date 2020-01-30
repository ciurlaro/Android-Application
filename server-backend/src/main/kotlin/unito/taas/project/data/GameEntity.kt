package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class GameEntity(
        @Id val gameName: String,
        @NotBlank @OneToMany val availableModes: List<ModeEntity>,
        @NotBlank val image: String,
        @NotBlank val icon: String
)

