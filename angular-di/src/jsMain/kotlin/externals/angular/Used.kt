package externals.angular

//import InjectFlags

external interface ValueProvider<T> : ValueSansProvider<T> {
    var provide: InjectionToken<T>
    var multi: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ValueSansProvider<T> {
    var useValue: T
}

open external class InjectionToken<T>(_desc: String, options: `T$8`<T>? = definedExternally) {
    open var _desc: String
    open var ngInjectableDef: Any?
    override fun toString(): String
}

external interface `T$8`<T> {
    var providedIn: dynamic /* Type<Any> | 'root' | Nothing? */
        get() = definedExternally
        set(value) = definedExternally
    var factory: () -> T
}

external var INJECTOR: InjectionToken<Injector>

external interface `T$9` {
    var providers: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>
    var parent: Injector?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
}

open external class Injector {
    open fun <T> get(token: Type<T>, notFoundValue: T? = definedExternally, flags: InjectFlags? = definedExternally): T
    open fun <T> get(
        token: InjectionToken<T>,
        notFoundValue: T? = definedExternally,
        flags: InjectFlags? = definedExternally
    ): T

    open fun get(token: Any, notFoundValue: Any? = definedExternally): Any

    companion object {
        var THROW_IF_NOT_FOUND: Any
        var NULL: Injector
        fun create(
            providers: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>,
            parent: Injector? = definedExternally
        ): Injector

        fun create(options: `T$9`): Injector
        var ngInjectableDef: Any
    }
}

external enum class InjectFlags {
    Default /* = 0 */,
    Host /* = 1 */,
    Self /* = 2 */,
    SkipSelf /* = 4 */,
    Optional /* = 8 */
}

@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
external interface Type<T>

external interface FactoryProvider<T> : FactorySansProvider {
    var provide: InjectionToken<T>
    var multi: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface FactorySansProvider {
    var useFactory: dynamic
    var deps: Array<InjectionToken<*>>?
        get() = definedExternally
        set(value) = definedExternally
}