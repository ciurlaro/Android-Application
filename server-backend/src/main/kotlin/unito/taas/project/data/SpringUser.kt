package unito.taas.project.data

import javax.persistence.Entity
import javax.persistence.Id
import javax.validation.constraints.NotBlank

@Entity
data class SpringUser(
    @Id @NotBlank val id: String,
    @NotBlank val email: String,
    @NotBlank val nickname: String,
    @NotBlank val image: String,
    @NotBlank val isVerified: Boolean,
    @NotBlank val isSubscriber: Boolean
)
