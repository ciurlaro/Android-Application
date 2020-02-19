package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class SpringRegistration(
    @Id @GeneratedValue val id: Long,
    @NotBlank @ManyToOne @JoinColumn(name = "tournament") val tournament: SpringTournament,
    @NotBlank @ManyToOne @JoinColumn(name = "user") val user: SpringUser,
    val outcome: String?
)