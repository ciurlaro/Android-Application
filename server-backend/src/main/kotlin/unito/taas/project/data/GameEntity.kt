package unito.taas.project.data

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.validation.constraints.NotBlank

@Entity
data class GameEntity(
    @Id val gameName: String,
    @NotBlank val image: String,
    @NotBlank val icon: String,
    @NotBlank val svgIcon: String,
    @OneToMany val availableModes: List<ModeEntity> = emptyList()
)

