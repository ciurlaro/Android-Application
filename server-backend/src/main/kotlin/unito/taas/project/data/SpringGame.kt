package unito.taas.project.data

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.validation.constraints.NotBlank

@Entity
data class SpringGame(
    @Id val gameName: String,
    @NotBlank @OneToMany val availableSpringModes: List<SpringMode>,
    @NotBlank val image: String,
    @NotBlank val icon: String
)

