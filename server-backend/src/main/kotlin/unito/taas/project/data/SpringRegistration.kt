package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class SpringRegistration(
    @Id @GeneratedValue val id: Long,
    @NotBlank @ManyToOne @JoinColumn(name = "tournament") val springTournament: SpringTournament,
    @NotBlank @ManyToOne @JoinColumn(name = "user") val springUser: SpringUser,
    val outcome: String?
)