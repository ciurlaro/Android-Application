package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class SpringTournament(
    @Id @GeneratedValue val id: Long,
    @NotBlank val playersNumber: Int,
    @NotBlank val title: String,
    @NotBlank val tournamentDescription: String,
    @NotBlank val tournamentMode: String,
    @NotBlank @ManyToOne @JoinColumn(name = "admin") val admin: SpringUser,
    @NotBlank @ManyToOne @JoinColumn(name = "game") val springGame: SpringGame
)