package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class TournamentEntity(
        @Id @GeneratedValue val id: Long,
        @NotBlank val playersNumber: Int,
        @NotBlank val title: String,
        @NotBlank val tournamentDescription: String,
        @NotBlank val tournamentMode: String = "",
        @NotBlank @JoinColumn(name = "admin") val admin: String,
        @NotBlank @ManyToOne @JoinColumn(name = "game") val game: GameEntity
)