# ArenaTournament 


 - [Architecture](#Architecture)
   - [Kodein](#Kodein)
   - [BaseActivity & BaseFragment](#BaseActivity%20and%20BaseFragment)
   - [Structured and asynchronous concurrency](#Structured%20and%20asynchronous%20concurrency)
      - [Coroutines](#Coroutines) 
      - [Asynchronous Flows](#Asynchronous%20Flows)
   - [Other goodies](#Other%20goodies) 
   

## Architecture

Robert Cecil Martin’s book _“Clean architecture”_ (who's pdf is freely avaiable **[here](https://github.com/AlexGalhardo/ICMC-USP/blob/master/Book%20-%20Clean%20Architecture%20-%20Robert%20Cecil%20Martin.pdf)**)
 inspired most of the architectural design of the application.

It suggests some _best practises_ which target the creation of mid-level software that: 
- Is **change tolerant**, 
- Is **easy to understand**
- **Could be reused** as basis of components in many different software systems.

The purpose is to facilitate development, deployment, usage and maintenance.

In order to do so, the architecture of the system need to **elevate the use cases and the features**, 
so that both the understanding of the system and, therefore, the aids in development and maintenance result simplified.

The architecture should clearly ”scream” it’s purpose, beyond the details of its specific implementation.

This particolar subtask is based on the idea that frameworks are tools to be used and not to be conditioned by; 
which means that **a good software architecture allows decisions** about frameworks, databases, web servers, 
other environmental issues and tools **to be deferred and delayed from the abstract layers**.

The natural implication of this mindset is the judicious adoption of paradigms of responsibility division: 
the implementation have to reflect different abstraction layers decoupling at the module level, in order to prove effectiveness.

The idea and scope is to partition the system into components such that some of them are core business rules and others 
contain necessary functions not directly related to the core business. 

A correct code arranging, such that dependencies point from lower-level details to higher-level abstractions,
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


### BaseActivity and BaseFragment

The division between `Views` and `ViewModels` is a notoriously almost mandatory Android pattern. 
It surely handles an even more succesfull **separation of concern** than the one provided by the classical ModelViewController pattern, 
but it also adds **some objective difficulties** due to the Lifecycles, which developers must take into account.

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

**e.g**
> To get a `RegistrationEntity` object both the references to `TournamentEntity` and `UserEntity` are needed;
> but the `TournamentEntity` needs in turn the reference to a `GameEntity`.

This pattern is **common** all over the calls, which also are very **frequent**. 

Since such multiple chained kind of calls are so central, to waste as few resources as possible, they need to be 
**regulated so that the throughput results maximized**. 

This is what **[`Flow`s](https://kotlinlang.org/docs/reference/coroutines/flow.html#flows)** are made for: 
**asynchronous data collection and computing**.

---------------------------------------

Both `Couroutine`s and `Asynchronous Flow`s exploit a **logical tree representation** 
that only requires a simple programmatic explication of execution dependencies.


#### Other goodies
ArenaTournament makes use of the brand new [**Navigation**](https://developer.android.com/guide/navigation/navigation-getting-started) Component, 
a directed navigation graph whose nodes (_“destinations”_) are fragments and edges (_“actions”_) are the possible paths starting from a given node.

This component allows to control an activity navigation through its fragments, permitting a **safe parameters transfering** too. 
Navigating to a destination is done using a **NavController**, whose instance is provided into the `BaseFragmentedActivity` 
class with _Dependency Injection_ cover mechanisms similar to the already previously explained.
 
The application also makes use of the [**DataBinding**](https://developer.android.com/topic/libraries/data-binding) support,
to bind UI components in its layouts to data sources using a declarative, rather than programmatically, format.

Furthermore, all the components usage moves around the full compatibility with all the Android versions, with a careful use of the Android 
**[Support](https://developer.android.com/topic/libraries/support-library/index)** and 
**[Androidx](https://developer.android.com/jetpack/androidx)** _libraries_.