package unito.taas.project.data

import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class ModeEntity(@Id val modeName: String)