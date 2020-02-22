package unito.taas.project

import org.springframework.data.repository.CrudRepository

fun <T, ID> CrudRepository<T, ID>.isEmpty() =
	count() == 0L
