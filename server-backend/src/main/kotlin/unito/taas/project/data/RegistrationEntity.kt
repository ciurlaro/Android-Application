package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class RegistrationEntity(
        @Id @GeneratedValue val id: Long,
        @NotBlank @ManyToOne @JoinColumn(name = "match") val match: MatchEntity,
        @NotBlank @ManyToOne @JoinColumn(name = "user") val user: UserEntity,
        val outcome: String?
)