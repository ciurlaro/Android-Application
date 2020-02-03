package unito.taas.project.data

import javax.validation.constraints.NotBlank

data class SpringUser(
    @NotBlank val id: String,
    @NotBlank val email: String,
    @NotBlank val nickname: String,
    @NotBlank val image: String,
    @NotBlank val isVerified: Boolean,
    @NotBlank val isSubscriber: Boolean
)
