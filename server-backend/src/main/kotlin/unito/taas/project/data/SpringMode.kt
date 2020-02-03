package unito.taas.project.data

import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class SpringMode(@Id val modeName: String)