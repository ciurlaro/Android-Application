package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class RegistrationEntity(
        @Id @GeneratedValue val id: Long,
        @NotBlank @ManyToOne @JoinColumn(name = "tournament") val tournament: TournamentEntity,
        @NotBlank @ManyToOne @JoinColumn(name = "user") val user: UserEntity,
        val outcome: String?
)