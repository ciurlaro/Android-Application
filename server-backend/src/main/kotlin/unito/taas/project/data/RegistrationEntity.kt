package unito.taas.project.data

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class RegistrationEntity(
        @Id @GeneratedValue val id: Long,
        @NotBlank @JoinColumn(name = "user") val user: String,
        val outcome: String?
)