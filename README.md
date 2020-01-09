# ArenaTournament 


 - [Architecture](#Architecture)
   - [Kodein](#Kodein)
   - [BaseActivity & BaseFragment](#BaseActivity-and-BaseFragment)
   - [Structured and asynchronous concurrency](#Structured-and-asynchronous-concurrency)
      - [Coroutines](#Coroutines) 
      - [Asynchronous Flows](#Asynchronous-Flows)
   - [Kotlin Multiplatform](#Kotlin-Multiplatform)
   - [Other goodies](#Other-goodies) 
- [Use Cases](#Use-Cases)
    - [Requirements](#Requirements)
    - [Implementation hierarchy](#Implementation-hierarchy)
        - [Observation note](#Observation-note)
    - [Repository](#Repository)
    - [Data Sources](#Data-Sources)
        - [ArenaTournament Server](#ArenaTournament-Server)
            - [Testing](#Testing)
        - [Firebase Authentication](#Firebase-Authentication)
        - [Firebase Cloud Storage](#Firebase-Cloud-Storage)
   

## Architecture

Robert Cecil Martin’s book _“Clean architecture”_ (who's pdf is freely avaiable 
**[here](https://github.com/AlexGalhardo/ICMC-USP/blob/master/Book%20-%20Clean%20Architecture%20-%20Robert%20Cecil%20Martin.pdf)**)
 inspired most of the architectural design of the application.

It suggests some _best practises_ which target the creation of mid-level software that: 
- Is **change tolerant**, 
- Is **easy to understand**
- **Could be reused** as basis of components in many different software systems.

The purpose is to facilitate development, deployment, usage and maintenance.

In order to do so, the architecture of the system need to **elevate the features**, 
so that both the understanding of the system and, therefore, the aids in development and maintenance result simplified.

The architecture should clearly _”scream”_ it’s purpose, beyond the details of its specific implementation.

This particolar subtask is based on the idea that frameworks are tools to be used and not to be conditioned by; 
which means that **a good software architecture allows decisions** about frameworks, databases, web servers, 
other environmental issues and tools **to be deferred and delayed from the abstract layers**.

The natural implication of this mindset is the judicious adoption of paradigms of _responsibility division_: 
the implementation has to reflect different abstraction layers decoupling at the module level, in order to prove effectiveness.

The idea and scope is to partition the system into components such that some of them are core business rules and others 
contain necessary functions not directly related to the core business. 

A **clean** code arranging, such that dependencies point from lower-level details to higher-level abstractions,
 can be recognized an application of the Dependency Inversion and Stable Abstractions principles.
 The business rules should remain pristine, unsullied by baser concerns such as the user interface or database used. 
 
 Ideally, **business rules** should be the heart of the system: the most independent and therefore the most abstract, 
 reusable code in it.

**Final achievement**: a software system developed in thereby, allows whereas any of the less abstract parts of the system become obsolete 
(such as forexample the database, or the web framework), their replacement with the minimum fuss. 
This is the most useful achievement one could get in an environment such the Mobile Development one, 
due to the continuous evolution that characterizes it.


### Kodein

Although on one side the _Clean Architecture_ guidance suggested what to do, still lot of implementation decisions stayed uncovered. 

As already said, **maximizing layers decoupling has had the utmost importance** for several reasons, but unfortunately Android, 
unlike other development frameworks as for example Spring, doesn’t offer a build-in Dependency Injection mechanism; 
even though it's [guidelines](https://developer.android.com/training/dependency-injection) strongly suggest its usage.

This brought to the adoption of the **[Kodein Framework](https://kodein.org/Kodein-DI/)**, which provided an **out-of-the-box dipendency injection service**.

Kodein, exemplifying the concepts behind its usage, allows the **allocation of memory** regions called contexts and provides **access and rights policies** to them. 

A context can contain **singleton** instances _or_ **factory** functions.
The main idea is that **a context is aware of the content it has to provide and how to provide it**.
Another usefull feature Kodein supply is the division of the context in subregions called modules, such that each module manage different needs.


### Model-View-ViewModel pattern

The division between `Views` and `ViewModels` is a notoriously almost mandatory Android pattern. 
It surely handles an even more succesfull **separation of concern** than the one provided by the classical ModelViewController pattern, 
but it also adds **some objective difficulties** due to the Lifecycles, which developers must take into account.

![mvvm](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/httpatomoreillycomsourceoreillyimages1547825.png)

Above the previously mentioned difficulties, the unsafe access to the ModelViews is, without a doubt, the most painfull.

An elegant _Clean Architecture_ way to take advantage of this pattern bypassing this issue, is the ViewModel **delegation** 
to the Dependency Injection provider. 

To make this even more **transparent**, in _ArenaTournament_ the whole mechanism is **hidden under the coverage of the 
superclasses `BaseActivity` and `BaseFragment`**; in this way the `ViewModel` of each `Fragment` or `Activity` just appears 
as it was an innate property inside them. 

Among the others, also the `startActivity` default method is **unpleasant in the use**, since it requires the construction
 of an `Intent` and increases the quantity of avoidable boilerplate code.
 To facilitate and clean the code usage, `BaseActivity` and `BaseFragment` also conceal `startActivity` methods, 
 succeeding to make this a **one liner task**, regardless of whether the change of Activity requires the exchange of parameters or not.

 ![activities](https://github.com/CesareIurlaro/Android-Application/blob/master/images/Activities.png?raw=true)


### Structured and asynchronous concurrency

Sometimes long time operations are needed. Whenever their respective results need to be used to update the UI, 
an unwise use of the resources might return unresponsiveness and poor user experience.
Since **_ArenaTournament_ makes extensive use of network calls**, whose response time is unknown, 
a **clever management of concurrency and asynchrony needed** to be planned.

#### Coroutines

At the current status of facts, `AsyncTasks` are the way to achieve **asynchronous executions** in Android even though, 
for **[many reasons](https://www.techyourchance.com/asynctask-deprecated/)**, they are going to be deprecated 
in favor of Kotlin’s **[`Coroutines`](https://developer.android.com/kotlin/coroutines)** , which are the actual 
best practice suggested to improve performance in Kotlin.

Coroutines are designed for **parallel decomposition of work**; they are launched within a context of some scope, 
which means that the lifetime of a coroutine is limited by the lifetime of his scope.

It is possible to launch **nested coroutines** within the same scope; 
an outer coroutine does not complete until all the coroutines launched in its scope complete and 
if any child coroutine in this scope fails, this scope fails and all the rest of the children are cancelled.

Unlike `AsyncTask`, where the run time environment switches Threads according to the scheduler, 
in the Coroutines case it’s **the programmer which explicitly manages asynchronous executions**.

A function which execution can be suspended in favor of another function within the same scope, needs the `suspend` modifier. 
**Suspending functions** provide a safe abstraction for asynchronous operations.

Luckily enough, Coroutines are already avaiable and ready to be used.
Since they are going to be the next default Android concurrency management tool, they have also been the **natural choice in place of `AsyncTask`s**.

#### Asynchronous Flows

_ArenaTournament_ makes extensive use of multiple calls in order to get Entities.


> **e.g**
> 
> To get a `RegistrationEntity` object both the references to `TournamentEntity` and `UserEntity` are needed;
 but the `TournamentEntity` needs in turn the reference to a `GameEntity`.

This pattern is **common** all over the calls, which also are very **frequent**. 

Since such multiple chained kind of calls are so central, to waste as few resources as possible, they need to be 
**regulated so that the throughput results maximized**. 

This is what a **[`Flow`](https://kotlinlang.org/docs/reference/coroutines/flow.html#flows)** is made for: 
**asynchronous data collection and computing**.

---------------------------------------

Both `Couroutine`s and `Asynchronous Flow`s exploit a **logical tree representation** 
that only requires a simple programmatic explication of execution dependencies.


### Kotlin Multiplatform

**Kotlin Multiplatform** is a Kotlin feature that allows different
_targets compilations_:
-	**Kotlin/JVM**, which _outputs JAR/AAR files_ to be used by Java based
    Projects such as those in `Android`, or `Spring`.
-	**Kotlin/JS**, which _outputs JavaScript files_ to be used in other
    JavaScript based files and frameworks, like `Angular`, `React` or `Node`.
-	**Kotlin/Native**, which _outputs binaries_ to be used by native platforms.
    > Belong to this category, for example, _Apple_ frameworks
        (which open Kotlin usage to targets like iOS and macOS)
       or other native executables (like _Windows_ and _Linux_).


![Kotlin Multiplatform](https://github.com/CesareIurlaro/Android-Application/blob/master/images/Kotlin%20Multiplatform.png?raw=true)


It brings with it an **important consequence**: the possibility
to share **common behaviour code across different platforms**.

---------------------------------------
Sharing code between platforms is a powerful concept which exists in Android
in different declinations.

It may be hard to accomplish without a cross-platform framework like `Flutter` or `React Native`,
but the **tradeoff** in the usage of these frameworks is **objectively salty**.

The principle reasons are that
- They need a **framework-specific training** to get accustomed.
- They are just bridges to the native layer and consequently
    they permit **lower control** and **mediocre performances** compared
    to the native ones.

Kotlin Multiplatform, actually, is the only existing native cross-platform approach.

Instead of moving into another framework, it allows to share networking,
caching, business and application logics.

It perfectly **fits the clean architecture _modus operandi_**, since it
states characteristics and relationships that the various modules of the
 application must respect; it also delegates the specific implementation
 to the lowest possible abstraction layer: the platform.

It has thus been the most obvious choice to **minimize code rewriting**
and **maximize code reusing**.




### Other goodies
ArenaTournament makes use of the brand new [**Navigation**](https://developer.android.com/guide/navigation/navigation-getting-started) Component, 
a directed navigation graph whose nodes (_“destinations”_) are fragments and edges (_“actions”_) are the possible paths starting from a given node.

This component allows to control an activity navigation through its fragments, permitting a **safe parameters transfering** too. 
Navigating to a destination is done using a **NavController**, whose instance is provided into the `BaseFragmentedActivity` 
class with _Dependency Injection_ cover mechanisms similar to the already previously explained.
 
The application also makes use of the [**DataBinding**](https://developer.android.com/topic/libraries/data-binding) support,
to bind UI components in its layouts to data sources using a _declarative_, rather than programmatical, _format_.

Furthermore, all the components usage moves around the full compatibility with all the Android versions, with a careful use of the 
**[Support](https://developer.android.com/topic/libraries/support-library/index)** and 
**[Androidx](https://developer.android.com/jetpack/androidx)** _libraries_.


## Use Cases

### Requirements

As already said,
> a clean architecture **elevates the features** which, ideally,
 should be the most independent and therefore the most abstract,
 reusable code in the system.

also
> the implementation has to reflect different abstraction layers
**decoupling** at the module level,
  in order to prove effectiveness.


The analysis of the most abstract - and therefore the use of which should
have necessarily be made the simplest possible -
functionalities, led to the conclusion that the **use cases** were the features
that had to be elevated.

This clearly influenced the directionality of the abstraction and is the
reason,
in conjunction with the fact that the application makes extensive use of
network calls, for the so obtained stratification.

The idea is that a single use case is the **atomic operation** that a
user consumes; it may be the login, the updating
of its profile information, its subscription, the creation or the research
of a tournament.

It doesn't really matter **what** the user wants to do, the point is
that each his operation needs to be supported
by a single method call.

Also, whenever may happen the need to delete or add a feature,
its implementation should **always** be as **simple** as
 delete or add a single `UseCase` implementation.

### Implementation hierarchy

![hyerarchy](https://github.com/CesareIurlaro/Android-Application/blob/master/images/clean_architecture_reloaded_layers.png?raw=true)

The single method interface which rapresents these **user operations** is called `UseCase`.

A class which implements both this interface and its method, `CreateTournamentUseCase` for example, **should directly 
be used to apply the use case the user wants to perform**, in a perfect _clean architecture_ style.

Under the hood, the method inside the `UseCase` implementation will likely accomplish more than a single operation.
A common behaviour inside classes that implements this interface, for example, is the fetching of different pages.

#### Observation note
For the sake of completeness, it is useful to notice that in order to guarantee a standard data retrieval quality 
 and to lighten the amount of both Server and Client wasted resources, it is a good practise not to send all avaiable data at once,
 but to divide them in **chunks**, more properly called **pages**.

> Infact, even if to a **client** were sent all the data, he might not be able to handle them at once, because of the 
> computational or memory requirements. 

> Even on the **server**, on the other side, the operation would not be _tradeoff free_, since even supposing 
  the unrealistic case of a limitless powerfull calculator, the network needed to complete a massive transition may
  jeopardize the quality of other incoming and outgoing contemporary network calls, which is - of course - not acceptable
  in a real context. 

Even though the perfect way to handle such cases would indeed have been the usage of the 
 [Android paging library](https://developer.android.com/topic/libraries/architecture/paging), the realist -
 academic comprehension - usage of it, didn't really need the implementation of such shellproof leak protection. 
 
Such architectural choice would have required further levels of abstractions and complexities, which have been 
 considered unnecessary since the **unreal and unindustrial** specific context of this application.

What has however been done, is the **client-side throughput performance maximization**, through the use of Flows, 
 whose advantages have [previously](#Asynchronous-Flows) more thoroughly been illustrated. 


### Repository

The computational bricks `UseCase` implementations make use of, are taken from another - lower - abstraction layer,
 called **repository**.

The repository layer is responsible for making transparent the presence of multiple different communication channels to 
 the use cases layer.

This aspect of the application will be [deepened soon](#Data-Sources), but the concept that wants to pass in this section 
 is that the repository acts like a funnel of all the possible abstractions present on the immediately lower layer, 
 ready to the usage of the immediately following higher (and overall highest) layer.
 
> In other words, the **only one** class dependency that a `UseCase` implementation will ever need is a `Repository` implementation 
  or, at least, another `UseCase` as well.

### Data Sources
Since the application retrieves data from _different sources_ and in _different formats_, an abstraction that also covers 
the necessity to correctly handle this behaviour is needed.

This has been realized through the `DataSource` interface, which inherits from the _clean architecture_ the very same constructive
 **single purpose philosophy** just like as also the `UseCase` interface does.

This time, however, the purpose of the distinct `DataSource` implementations is to manage a single source and format communication 
per implementation, thus once more getting a complete transparency to higher abstraction layers.

 The application data sources and formats are 
 - `ArenaTournamentDatasourceImplementation`, which directly communicates with the ArenaTournament server
 - `FirebaseAuthDatasource`, which communicates with the Firebase Authentication service
 - `FirebaseStorageDatasource`, which communicates with the Firebase Storage service
 
---------------------------------------

#### ArenaTournament Server

Most of the **not security-sensible content** provided by ArenaTournament is managed through a Server Application written 
 in Spring and with which arose the need to communicate.

This has, at some point in the development, brought up the necessity for an infrastructure organized in such a way
 that would allow easy and strucured network messages exchanges.
 
Also in this case the _clean architecture_ guide helped manage a sensible hierarchy of responsibilities, which provided 
 the chance to execute **different network calls types** (`POST`, `GET`, `PUT`, `DELETE`), 
 with the possible presence of **parameters**.
 
On the bottom side of the DataSource abstraction laids infact another layer, whose leading actors are:
- **`Endpoints`**, which is an interface whose implementations specify a `protocol`, an `host`, a `port` and which methods
 are responsible to **build an HTTP message**, comprehensive of _URL_ and _parameters_.  
- **`HttpClient`**, an **HTTP Engine** - that is the object responsable for dispatching the messages that `Endpoints` 
 implementations build. 
 
These calls, whose application is **simple as a method invocation** inside the `ArenaTournamentDatasourceImplementation`,
returns `JSON` objects, whose handling _responsibility is demanded to the higher abstraction layer_. 

##### Testing

Since the development of both Client and Server has parallelly been carried forward, a further abstraction level has 
 been built on top of this: the **MockEngine**.
 
 > _MockEngine_ is a [Testing tool](https://ktor.io/clients/http-client/testing.html) which allows simulating HTTP
 calls without actually connecting to the endpoint. It also allows to set a code block, that can handle the request 
 and generates a response.

The _MockEngine_ has been used to **intercept HTTP messages** and check
their correctness. Given a correct HTTP message,
 it provides a response analogous to the one that the real Server would have provided.

In order to accomplish the correctness above mentioned, the HTTP messages
have to comply with the **[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
Stateless Protocol**.

#### Firebase Authentication

 > **Authentication**  
 A very desirable feature is the identification of a user. 
 Knowing a user's identity allows an app to provide an **homogeneous personalized experience** across several different 
 user's devices and over time.

-  **Firebase Authentication** provides backend services SDKs and
libraries to authenticate users.
 It supports authentication using passwords, phone numbers,
 popular federated identity providers like Google,
 Facebook and Twitter, and more; but also it leverages industry
 standards like _[OAuth 2.0](https://oauth.net/2/)_ and
 _[OpenID Connect](https://openid.net/connect/)_.


#### Firebase Cloud Storage   
 
> **Storage**  
 In order to enrich the customized experience with **ad hoc user-generated content**, an _online allocation space_
 is necessary. This space should be used to store and serve files whereas necessary.
 
- **Firebase Cloud Storage** is a powerful object storage service built for Google scale. 
 The Firebase SDKs for Cloud Storage add Google security to file uploads and downloads for Firebase apps, 
 regardless of network quality. It is possibile to use SDKs to store images, audio, video, or 
 other user-generated content. On the server, Google Cloud Storage allows files access.  
