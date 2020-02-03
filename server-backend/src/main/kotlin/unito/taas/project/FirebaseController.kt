package unito.taas.project

//
//import com.google.cloud.firestore.Firestore
//import com.google.cloud.firestore.QueryDocumentSnapshot
//import com.google.firebase.FirebaseApp
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.web.bind.annotation.*
//
//
//@RestController
//// @RequestMapping("/api/")
//class FirebaseController(
//    @Autowired private val app: FirebaseApp,
//    @Autowired val firestore: Firestore
//) {
//
//    @GetMapping("get-collection/{collection}", produces = ["application/json"])
//    fun getCollection(@PathVariable collection: String) =
//        firestore.collection(collection).get().apply {
//            get().documents.also {
//                extractDocuments(it, collection)
//            }
//        }
////    fun getCollection(@PathVariable collection: String): ArrayList<Any> {
////        val future = firestore.collection(collection).get()
////        val documents = future.get().documents
////
////        return extractDocuments(documents, collection)
////    }
//
//
//    @GetMapping("get-available/{collection}", produces = ["application/json"])
//    fun getAvailable(@PathVariable collection: String): ArrayList<Any> {
//        val collectionRef = firestore.collection(collection)
//        val query = collectionRef.whereGreaterThan("players_number", 0)
//        val documents = query.get().get().documents
//
//        return extractDocuments(documents, collection)
//    }
//
//
//    @PostMapping("create-tournament", produces = ["application/json"])
//    fun createTournament(
//        @RequestParam players_number: Int,
//        @RequestParam tournament_mode: String,
//        @RequestParam tournament_description: String //, user_id: String
//    ) = hashMapOf(
//        "players_number" to players_number,
//        "tournament_mode" to tournament_mode,
//        "tournament_description" to tournament_description
//    ).also {
//        firestore.collection("tournaments").add(this)
//    }
////        HashMap<String, Any>().apply {
////            this["players_number"] = players_number
////            this["tournament_mode"] = tournament_mode
////            this["tournament_description"] = tournament_description
////            // this["user_id"] = user_id
////            firestore.collection("tournaments").add(this)
////        }
//
//
//    @PostMapping("create-registration", produces = ["application/json"])
//    fun createRegistration(
//        @RequestParam match_id: String,
//        @RequestParam user_id: String,
//        @RequestParam outcome: String
//    ) = hashMapOf(
//        "match_id" to match_id,
//        "user_id" to user_id,
//        "outcome" to outcome
//    ).also {
//        firestore.collection("registrations").add(this)
//    }
//
//
////    ): HashMap<String, Any> = HashMap<String, Any>().apply {
////        this["match_id"] = match_id
////        this["user_id"] = user_id
////        this["outcome"] = outcome
////        firestore.collection("registrations").add(this)
////    }
//
//
//    private fun extractDocuments(
//        documents: List<QueryDocumentSnapshot>,
//        collection: String
//    ): ArrayList<Any> {
//        val responseBody = arrayListOf<Any>()
//        for (document in documents) {
//            responseBody.add(HashMap(document.data).apply {
//                this[collection + "_id"] = document.id
//            })
//        }
//        return responseBody
//    }
//}