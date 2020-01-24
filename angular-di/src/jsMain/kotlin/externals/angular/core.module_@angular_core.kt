//@file:Suppress(
//    "INTERFACE_WITH_SUPERCLASS",
//    "OVERRIDING_FINAL_MEMBER",
//    "RETURN_TYPE_MISMATCH_ON_OVERRIDE",
//    "CONFLICTING_OVERLOADS",
//    "EXTERNAL_DELEGATION"
//)
//
//import org.w3c.dom.*
//import org.w3c.dom.events.EventListener
//import org.w3c.dom.events.EventTarget
//import kotlin.js.Console
//import kotlin.js.Json
//import kotlin.js.Promise
//
//external interface AbstractType<T> : Function {
//    override var prototype: T
//}
//
//external var ACTIVE_INDEX: Any
//
//external interface AfterContentChecked {
//    fun ngAfterContentChecked()
//}
//
//external interface AfterContentInit {
//    fun ngAfterContentInit()
//}
//
//external interface AfterViewChecked {
//    fun ngAfterViewChecked()
//}
//
//external interface AfterViewInit {
//    fun ngAfterViewInit()
//}
//
//external var ANALYZE_FOR_ENTRY_COMPONENTS: InjectionToken<Any>
//
//external var APP_BOOTSTRAP_LISTENER: InjectionToken<Array<(compRef: ComponentRef<Any>) -> Unit>>
//
//external var APP_ID: InjectionToken<String>
//
//external var APP_INITIALIZER: InjectionToken<Array<() -> Unit>>
//
//open external class ApplicationInitStatus(appInits: Array<() -> Any>) {
//    open var appInits: Any
//    open var resolve: Any
//    open var reject: Any
//    open var initialized: Any
//    open var donePromise: Promise<Any>
//    open var done: Any
//}
//
//open external class ApplicationModule(appRef: ApplicationRef)
//
//open external class ApplicationRef {
//    open var _zone: Any
//    open var _console: Any
//    open var _injector: Any
//    open var _exceptionHandler: Any
//    open var _componentFactoryResolver: Any
//    open var _initStatus: Any
//    open var _bootstrapListeners: Any
//    open var _views: Any
//    open var _runningTick: Any
//    open var _enforceNoNewChanges: Any
//    open var _stable: Any
//    open var componentTypes: Array<Type<Any>>
//    open var components: Array<ComponentRef<Any>>
//    open var isStable: Any
//    open fun <C> bootstrap(
//        componentOrFactory: ComponentFactory<C>,
//        rootSelectorOrNode: String? = definedExternally
//    ): ComponentRef<C>
//
//    open fun <C> bootstrap(
//        componentOrFactory: ComponentFactory<C>,
//        rootSelectorOrNode: Any? = definedExternally
//    ): ComponentRef<C>
//
//    open fun <C> bootstrap(
//        componentOrFactory: Type<C>,
//        rootSelectorOrNode: String? = definedExternally
//    ): ComponentRef<C>
//
//    open fun <C> bootstrap(componentOrFactory: Type<C>, rootSelectorOrNode: Any? = definedExternally): ComponentRef<C>
//    open fun tick()
//    open fun attachView(viewRef: ViewRef)
//    open fun detachView(viewRef: ViewRef)
//    open var _loadComponent: Any
//    open var _unloadComponent: Any
//    open var viewCount: Number
//    open fun <C> bootstrap(componentOrFactory: ComponentFactory<C>): ComponentRef<C>
//    open fun <C> bootstrap(componentOrFactory: Type<C>): ComponentRef<C>
//}
//
//external fun asNativeElements(debugEls: Array<DebugElement>): Any
//
//external fun assertPlatform(requiredToken: Any): PlatformRef
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Attribute {
//    var attributeName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : AttributeDecorator by definedExternally
//}
//
//external interface AttributeDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun AttributeDecorator.invoke(name: String): Any {
//    asDynamic()(name)
//}
//
//external var BINDING_INDEX: Any
//
//external interface BindingDef {
//    var flags: ɵBindingFlags
//    var ns: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var name: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var nonMinifiedName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var securityContext: SecurityContext?
//        get() = definedExternally
//        set(value) = definedExternally
//    var suffix: String?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface BootstrapOptions {
//    var ngZone: dynamic /* NgZone | 'zone.js' | 'noop' */
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external var BRAND: Any
//
//external enum class BypassType {
//    Url /* = "Url" */,
//    Html /* = "Html" */,
//    ResourceUrl /* = "ResourceUrl" */,
//    Script /* = "Script" */,
//    Style /* = "Style" */
//}
//
//external enum class ChangeDetectionStrategy {
//    OnPush /* = 0 */,
//    Default /* = 1 */
//}
//
//open external class ChangeDetectorRef {
//    open fun markForCheck()
//    open fun detach()
//    open fun detectChanges()
//    open fun checkNoChanges()
//    open fun reattach()
//}
//
//external var CHILD_HEAD: Any
//
//external var CHILD_TAIL: Any
//
//external interface ClassProvider : ClassSansProvider {
//    var provide: Any
//    var multi: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ClassSansProvider {
//    var useClass: Any
//}
//
//external var CLEANUP: Any
//
//external interface CollectionChangeRecord<V> : IterableChangeRecord<V>
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface COMMENT_MARKER {
//    var marker: String /* 'comment' */
//
//    companion object : COMMENT_MARKER by definedExternally
//}
//
//external fun compileInjectable(type: Type<Any>, srcMeta: Injectable? = definedExternally)
//
//open external class Compiler {
//    open var compileModuleSync: (moduleType: Type<T>) -> NgModuleFactory<T>
//    open var compileModuleAsync: (moduleType: Type<T>) -> Promise<NgModuleFactory<T>>
//    open var compileModuleAndAllComponentsSync: (moduleType: Type<T>) -> ModuleWithComponentFactories<T>
//    open var compileModuleAndAllComponentsAsync: (moduleType: Type<T>) -> Promise<ModuleWithComponentFactories<T>>
//    open fun clearCache()
//    open fun clearCacheFor(type: Type<Any>)
//    open fun getModuleId(moduleType: Type<Any>): String?
//}
//
//external var COMPILER_OPTIONS: InjectionToken<Array<CompilerOptions>>
//
//open external class CompilerFactory {
//    open fun createCompiler(options: Array<CompilerOptions>? = definedExternally): Compiler
//}
//
//external interface CompilerOptions {
//    var useJit: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//    var defaultEncapsulation: ViewEncapsulation?
//        get() = definedExternally
//        set(value) = definedExternally
//    var providers: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var missingTranslation: MissingTranslationStrategy?
//        get() = definedExternally
//        set(value) = definedExternally
//    var preserveWhitespaces: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Component : Directive {
//    var changeDetection: ChangeDetectionStrategy?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewProviders: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var moduleId: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var templateUrl: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var template: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var styleUrls: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var styles: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var animations: Array<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var encapsulation: ViewEncapsulation?
//        get() = definedExternally
//        set(value) = definedExternally
//    var interpolation: dynamic /* JsTuple<String, String> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var entryComponents: Array<dynamic /* Type<Any> | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var preserveWhitespaces: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : ComponentDecorator by definedExternally
//}
//
//external interface ComponentDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ComponentDecorator.invoke(obj: Component): TypeDecorator {
//    asDynamic()(obj)
//}
//
//external interface ComponentDefFeature {
//    var ngInherit: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T> ComponentDefFeature.invoke(componentDef: ɵComponentDef<T>) {
//    asDynamic()(componentDef)
//}
//
//external interface `T$0` {
//    var propName: String
//    var templateName: String
//}
//
//open external class ComponentFactory<C> {
//    open var selector: String
//    open var componentType: Any
//    open var ngContentSelectors: Array<String>
//    open var inputs: Array<`T$0`>
//    open var outputs: Array<`T$0`>
//    open fun create(
//        injector: Injector,
//        projectableNodes: Array<Array<Any>>? = definedExternally,
//        rootSelectorOrNode: String? = definedExternally,
//        ngModule: NgModuleRef<Any>? = definedExternally
//    ): ComponentRef<C>
//
//    open fun create(
//        injector: Injector,
//        projectableNodes: Array<Array<Any>>? = definedExternally,
//        rootSelectorOrNode: Any? = definedExternally,
//        ngModule: NgModuleRef<Any>? = definedExternally
//    ): ComponentRef<C>
//
//    open fun create(injector: Injector): ComponentRef<C>
//}
//
//open external class ComponentFactoryResolver {
//    open fun <T> resolveComponentFactory(component: Type<T>): ComponentFactory<T>
//
//    companion object {
//        var NULL: ComponentFactoryResolver
//    }
//}
//
//external interface ComponentInstance
//
//open external class ComponentRef<C> {
//    open var location: ElementRef<Any>
//    open var injector: Injector
//    open var instance: C
//    open var hostView: ViewRef
//    open var changeDetectorRef: ChangeDetectorRef
//    open var componentType: Any
//    open fun destroy()
//    open fun onDestroy(callback: Function<*>)
//}
//
//external interface ComponentTemplate<T> {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T, U : T> ComponentTemplate<T>.invoke(rf: ɵRenderFlags, ctx: T) {
//    asDynamic()(rf, ctx)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T, U : T> ComponentTemplate<T>.invoke(rf: ɵRenderFlags, ctx: U) {
//    asDynamic()(rf, ctx)
//}
//
//external interface ConstructorProvider : ConstructorSansProvider {
//    var provide: Any
//    var multi: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ConstructorSansProvider {
//    var deps: Array<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//typealias ContentChild = Query
//
//external var ContentChild: ContentChildDecorator
//
//external interface `T$1` {
//    var read: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var static: Boolean
//}
//
//external interface ContentChildDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ContentChildDecorator.invoke(selector: Type<Any>, opts: `T$1`): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ContentChildDecorator.invoke(selector: Function<*>, opts: `T$1`): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ContentChildDecorator.invoke(selector: String, opts: `T$1`): Any {
//    asDynamic()(selector, opts)
//}
//
//typealias ContentChildren = Query
//
//external var ContentChildren: ContentChildrenDecorator
//
//external interface `T$2` {
//    var descendants: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//    var read: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ContentChildrenDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ContentChildrenDecorator.invoke(selector: Type<Any>, opts: `T$2`? = definedExternally): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ContentChildrenDecorator.invoke(selector: Function<*>, opts: `T$2`? = definedExternally): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ContentChildrenDecorator.invoke(selector: String, opts: `T$2`? = definedExternally): Any {
//    asDynamic()(selector, opts)
//}
//
//typealias ContentQueriesFunction<T> = (rf: ɵRenderFlags, ctx: U, directiveIndex: Number) -> Unit
//
//external var CONTEXT: Any
//
//external interface CreateComponentOptions {
//    var rendererFactory: RendererFactory3?
//        get() = definedExternally
//        set(value) = definedExternally
//    var sanitizer: Sanitizer?
//        get() = definedExternally
//        set(value) = definedExternally
//    var playerHandler: ɵPlayerHandler?
//        get() = definedExternally
//        set(value) = definedExternally
//    var host: dynamic /* RElement | String */
//        get() = definedExternally
//        set(value) = definedExternally
//    var injector: Injector?
//        get() = definedExternally
//        set(value) = definedExternally
//    var hostFeatures: Array<HostFeature>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var scheduler: ((work: () -> Unit) -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun createPlatform(injector: Injector): PlatformRef
//
//external fun createPlatformFactory(
//    parentPlatformFactory: ((extraProviders: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>? /* = null */) -> PlatformRef)?,
//    name: String,
//    providers: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>? = definedExternally
//): (extraProviders: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>? /* = null */) -> PlatformRef
//
//typealias CssSelector = Array<dynamic /* String | SelectorFlags */>
//
//external var CUSTOM_ELEMENTS_SCHEMA: SchemaMetadata
//
//external interface `T$3` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$3`.get(key: String): String? = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$3`.set(key: String, value: String?) {
//    asDynamic()[key] = value
//}
//
//external interface `T$4` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$4`.get(key: String): Boolean? = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$4`.set(key: String, value: Boolean) {
//    asDynamic()[key] = value
//}
//
//external interface DebugElement : DebugNode {
//    var name: String
//    var properties: Json
//    var attributes: `T$3`
//    var classes: `T$4`
//    var styles: `T$3`
//    var childNodes: Array<DebugNode>
//    var nativeElement: Any
//    var children: Array<DebugElement>
//    fun query(predicate: Predicate<DebugElement>): DebugElement
//    fun queryAll(predicate: Predicate<DebugElement>): Array<DebugElement>
//    fun queryAllNodes(predicate: Predicate<DebugNode>): Array<DebugNode>
//    fun triggerEventHandler(eventName: String, eventObj: Any)
//
//    companion object
//}
//
//open external class DebugElement__POST_R3__(nativeNode: Element) : DebugNode__POST_R3__, DebugElement {
//    override var nativeElement: Element?
//    override var name: String
//    override var properties: Json
//    override var attributes: `T$3`
//    override var styles: `T$3`
//    override var classes: `T$4`
//    override var childNodes: Array<DebugNode>
//    override var children: Array<DebugElement>
//    override fun query(predicate: Predicate<DebugElement>): DebugElement
//    override fun queryAll(predicate: Predicate<DebugElement>): Array<DebugElement>
//    override fun queryAllNodes(predicate: Predicate<DebugNode>): Array<DebugNode>
//    override fun triggerEventHandler(eventName: String, eventObj: Any)
//}
//
//open external class DebugEventListener(name: String, callback: Function<*>) {
//    open var name: String
//    open var callback: Function<*>
//}
//
//external interface DebugNode {
//    var listeners: Array<DebugEventListener>
//    var parent: DebugElement?
//        get() = definedExternally
//        set(value) = definedExternally
//    var nativeNode: Any
//    var injector: Injector
//    var componentInstance: Any
//    var context: Any
//    var references: Json
//    var providerTokens: Array<Any>
//
//    companion object
//}
//
//open external class DebugNode__POST_R3__(nativeNode: Node) : DebugNode {
//    override var nativeNode: Node
//    override var parent: DebugElement?
//    override var injector: Injector
//    override var componentInstance: Any
//    override var context: Any
//    override var listeners: Array<DebugEventListener>
//    override var references: Json
//    override var providerTokens: Array<Any>
//}
//
//external var DECLARATION_LCONTAINER: Any
//
//external var DECLARATION_VIEW: Any
//
//open external class DefaultIterableDiffer<V>(trackByFn: TrackByFunction<V>? = definedExternally) : IterableDiffer<V>,
//    IterableChanges<V> {
//    open var length: Number
//    open var collection: dynamic /* Array<V> | Iterable<V> | Nothing? */
//    open var _linkedRecords: Any
//    open var _unlinkedRecords: Any
//    open var _previousItHead: Any
//    open var _itHead: Any
//    open var _itTail: Any
//    open var _additionsHead: Any
//    open var _additionsTail: Any
//    open var _movesHead: Any
//    open var _movesTail: Any
//    open var _removalsHead: Any
//    open var _removalsTail: Any
//    open var _identityChangesHead: Any
//    open var _identityChangesTail: Any
//    open var _trackByFn: Any
//    open fun forEachItem(fn: (record: IterableChangeRecord_<V>) -> Unit)
//    override fun forEachOperation(fn: (item: IterableChangeRecord<V>, previousIndex: Number?, currentIndex: Number?) -> Unit)
//    open fun forEachPreviousItem(fn: (record: IterableChangeRecord_<V>) -> Unit)
//    open fun forEachAddedItem(fn: (record: IterableChangeRecord_<V>) -> Unit)
//    open fun forEachMovedItem(fn: (record: IterableChangeRecord_<V>) -> Unit)
//    open fun forEachRemovedItem(fn: (record: IterableChangeRecord_<V>) -> Unit)
//    open fun forEachIdentityChange(fn: (record: IterableChangeRecord_<V>) -> Unit)
//    open fun diff(collection: Array<V>): DefaultIterableDiffer<V>?
//    open fun diff(collection: Iterable<V>): DefaultIterableDiffer<V>?
//    open fun onDestroy()
//    open fun check(collection: Array<V>): Boolean
//    open fun check(collection: Iterable<V>): Boolean
//    open var isDirty: Boolean
//    open var _addToRemovals: Any
//    override fun diff(obj: Array<V>): IterableChanges<V>?
//    override fun diff(obj: Iterable<V>): IterableChanges<V>?
//}
//
//external var defineInjectable: Any
//
//external interface Definition<DF : DefinitionFactory<Any>> {
//    var factory: DF?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface DefinitionFactory<D : Definition<Any>> {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <D : Definition<Any>> DefinitionFactory<D>.invoke(logger: NodeLogger): D {
//    asDynamic()(logger)
//}
//
//external interface DepDef {
//    var flags: ɵDepFlags
//    var token: Any
//    var tokenKey: String
//}
//
//external fun destroyPlatform()
//
//external interface `T$5` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$5`.get(key: String): String? = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$5`.set(key: String, value: String) {
//    asDynamic()[key] = value
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Directive {
//    var selector: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var inputs: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var outputs: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var exportAs: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var queries: Json?
//        get() = definedExternally
//        set(value) = definedExternally
//    var host: `T$5`?
//        get() = definedExternally
//        set(value) = definedExternally
//    var jit: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : DirectiveDecorator by definedExternally
//}
//
//external interface DirectiveDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun DirectiveDecorator.invoke(obj: Directive): TypeDecorator {
//    asDynamic()(obj)
//}
//
//external interface DirectiveDefFeature {
//    var ngInherit: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T> DirectiveDefFeature.invoke(directiveDef: ɵDirectiveDef<T>) {
//    asDynamic()(directiveDef)
//}
//
//typealias DirectiveDefList = Array<dynamic /* ɵDirectiveDef<Any> | ɵComponentDef<Any> */>
//
//external interface DirectiveInstance
//
//typealias DirectiveTypeList = Array<dynamic /* ɵDirectiveType<Any> | ɵComponentType<Any> | Type<Any> */>
//
//external interface DisposableFn {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun DisposableFn.invoke() {
//    asDynamic()()
//}
//
//external interface DoBootstrap {
//    fun ngDoBootstrap(appRef: ApplicationRef)
//}
//
//external interface DoCheck {
//    fun ngDoCheck()
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface ELEMENT_MARKER {
//    var marker: String /* 'element' */
//
//    companion object : ELEMENT_MARKER by definedExternally
//}
//
//external interface `T$6` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$6`.get(tokenKey: String): NodeDef? = asDynamic()[tokenKey]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$6`.set(tokenKey: String, value: NodeDef) {
//    asDynamic()[tokenKey] = value
//}
//
//external interface ElementDef {
//    var name: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var ns: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var attrs: Array<dynamic /* JsTuple<String, String, String> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var template: ɵViewDefinition?
//        get() = definedExternally
//        set(value) = definedExternally
//    var componentProvider: NodeDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var componentRendererType: RendererType2?
//        get() = definedExternally
//        set(value) = definedExternally
//    var componentView: ViewDefinitionFactory?
//        get() = definedExternally
//        set(value) = definedExternally
//    var publicProviders: dynamic /* `T$6` | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var allProviders: dynamic /* `T$6` | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var handleEvent: ElementHandleEventFn?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ElementHandleEventFn {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ElementHandleEventFn.invoke(view: ViewData, eventName: String, event: Any): Boolean {
//    asDynamic()(view, eventName, event)
//}
//
//open external class ElementRef<T : Any>(nativeElement: T) {
//    open var nativeElement: T
//}
//
//open external class EmbeddedViewRef<C> : ViewRef {
//    open var context: C
//    open var rootNodes: Array<Any>
//}
//
//external fun enableProdMode()
//
//open external class ErrorHandler {
//    open fun handleError(error: Any)
//}
//
//open external class EventEmitter<T : Any>(isAsync: Boolean? = definedExternally) : Subject<T> {
//    open fun emit(value: T? = definedExternally)
//    open fun subscribe(
//        generatorOrNext: Any? = definedExternally,
//        error: Any? = definedExternally,
//        complete: Any? = definedExternally
//    ): Subscription
//}
//
//external interface ExistingProvider : ExistingSansProvider {
//    var provide: Any
//    var multi: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ExistingSansProvider {
//    var useExisting: Any
//}
//
//typealias ExpandoInstructions = Array<dynamic /* Number | HostBindingsFunction<Any> | Nothing? */>
//
//external interface FactoryFn<T> {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T, U : T> FactoryFn<T>.invoke(t: Type<U>): U {
//    asDynamic()(t)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T> FactoryFn<T>.invoke(t: Nothing? = definedExternally): T {
//    asDynamic()(t)
//}
//
//
//
//external var FLAGS: Any
//
//external fun forwardRef(forwardRefFn: ForwardRefFn): Type<Any>
//
//external interface ForwardRefFn {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ForwardRefFn.invoke(): Any {
//    asDynamic()()
//}
//
//external var getDebugNode: (nativeNode: Any) -> DebugNode?
//
//external var getModuleFactory: (id: String) -> NgModuleFactory<Any>
//
//external fun getPlatform(): PlatformRef?
//
//external interface GetTestability {
//    fun addToWindow(registry: TestabilityRegistry)
//    fun findTestabilityInTree(registry: TestabilityRegistry, elem: Any, findInAncestors: Boolean): Testability?
//}
//
//external interface `T$38` {
//    var name: String /* 'document' | 'window' | 'body' */
//    var target: EventTarget
//}
//
//typealias GlobalTargetResolver = (element: Any) -> `T$38`
//
//typealias HookData = Array<dynamic /* Number | () -> Unit */>
//
//external var HOST: Any
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Host {
//    companion object : HostDecorator by definedExternally
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface HostBinding {
//    var hostPropertyName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : HostBindingDecorator by definedExternally
//}
//
//external interface HostBindingDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun HostBindingDecorator.invoke(hostPropertyName: String? = definedExternally): Any {
//    asDynamic()(hostPropertyName)
//}
//
//typealias HostBindingsFunction<T> = (rf: ɵRenderFlags, ctx: U, elementIndex: Number) -> Unit
//
//external interface HostDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun HostDecorator.invoke(): Any {
//    asDynamic()()
//}
//
//typealias HostFeature = (component: T, componentDef: ɵComponentDef<T>) -> Unit
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface HostListener {
//    var eventName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var args: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : HostListenerDecorator by definedExternally
//}
//
//external interface HostListenerDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun HostListenerDecorator.invoke(eventName: String, args: Array<String>? = definedExternally): Any {
//    asDynamic()(eventName, args)
//}
//
//external interface I18nLocalizeOptions {
//    var translations: `T$5`
//}
//
//typealias I18nMutateOpCodes = Array<dynamic /* Number | String | ELEMENT_MARKER | COMMENT_MARKER | Nothing? */>
//
//typealias I18nUpdateOpCodes = Array<dynamic /* String | Number | SanitizerFn | Nothing? */>
//
//external enum class IcuType {
//    select /* = 0 */,
//    plural /* = 1 */
//}
//
//typealias InitialInputData = Array<InitialInputs?>
//
//typealias InitialInputs = Array<String>
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Inject {
//    var token: Any
//
//    companion object : InjectDecorator by definedExternally
//}
//
//external var inject: Any
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Injectable {
//    var providedIn: dynamic /* Type<Any> | 'root' | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : InjectableDecorator by definedExternally
//}
//
//external interface `T$7` {
//    var providedIn: dynamic /* Type<Any> | 'root' | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface InjectableDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun InjectableDecorator.invoke(): TypeDecorator {
//    asDynamic()()
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun InjectableDecorator.invoke(options: `T$7` /* `T$7` & InjectableProvider */ = definedExternally): TypeDecorator {
//    asDynamic()(options)
//}
//
//external interface InjectableType<T> : Type<T> {
//    var ngInjectableDef: Any
//}
//
//external fun injectChangeDetectorRef(isPipe: Boolean? = definedExternally): ChangeDetectorRef
//
//external interface InjectDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun InjectDecorator.invoke(token: Any): Any {
//    asDynamic()(token)
//}
//
//external fun injectElementRef(ElementRefToken: Any): ElementRef<Any>
//
//external enum class InjectFlags {
//    Default /* = 0 */,
//    Host /* = 1 */,
//    Self /* = 2 */,
//    SkipSelf /* = 4 */,
//    Optional /* = 8 */
//}
//
//external var INJECTOR_2: Any
//
//external interface InjectorType<T> : Type<T> {
//    var ngInjectorDef: Any
//}
//
//external interface InjectorTypeWithProviders<T> {
//    var ngModule: InjectorType<T>
//    var providers: Array<dynamic /* Type<Any> | ValueProvider | ExistingProvider | FactoryProvider | ConstructorProvider | StaticClassProvider | ClassProvider | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun injectRenderer2(): Renderer2
//
//external fun <T> injectTemplateRef(TemplateRefToken: Any, ElementRefToken: Any): TemplateRef<T>?
//
//external fun injectViewContainerRef(ViewContainerRefToken: Any, ElementRefToken: Any): ViewContainerRef
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Input {
//    var bindingPropertyName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : InputDecorator by definedExternally
//}
//
//external interface InputDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun InputDecorator.invoke(bindingPropertyName: String? = definedExternally): Any {
//    asDynamic()(bindingPropertyName)
//}
//
//external interface InternalNgModuleRef<T> : NgModuleRef<T> {
//    var _bootstrapComponents: Array<Type<Any>>
//}
//
//external interface InternalViewRef : ViewRef {
//    fun detachFromAppRef()
//    fun attachToAppRef(appRef: ApplicationRef)
//}
//
//external fun isDevMode(): Boolean
//
//external interface IterableChangeRecord<V> {
//    var currentIndex: Number?
//        get() = definedExternally
//        set(value) = definedExternally
//    var previousIndex: Number?
//        get() = definedExternally
//        set(value) = definedExternally
//    var item: V
//    var trackById: Any
//}
//
//open external class IterableChangeRecord_<V>(item: V, trackById: Any) : IterableChangeRecord<V> {
//    override var item: V
//    override var trackById: Any
//    override var currentIndex: Number?
//    override var previousIndex: Number?
//}
//
//external interface IterableChanges<V> {
//    fun forEachItem(fn: (record: IterableChangeRecord<V>) -> Unit)
//    fun forEachOperation(fn: (record: IterableChangeRecord<V>, previousIndex: Number?, currentIndex: Number?) -> Unit)
//    fun forEachPreviousItem(fn: (record: IterableChangeRecord<V>) -> Unit)
//    fun forEachAddedItem(fn: (record: IterableChangeRecord<V>) -> Unit)
//    fun forEachMovedItem(fn: (record: IterableChangeRecord<V>) -> Unit)
//    fun forEachRemovedItem(fn: (record: IterableChangeRecord<V>) -> Unit)
//    fun forEachIdentityChange(fn: (record: IterableChangeRecord<V>) -> Unit)
//}
//
//external interface IterableDiffer<V> {
//    fun diff(obj: Array<V>): IterableChanges<V>?
//    fun diff(obj: Iterable<V>): IterableChanges<V>?
//}
//
//external interface IterableDifferFactory {
//    fun supports(objects: Any): Boolean
//    fun <V> create(trackByFn: TrackByFunction<V>? = definedExternally): IterableDiffer<V>
//}
//
//open external class IterableDiffers(factories: Array<IterableDifferFactory>) {
//    open var factories: Array<IterableDifferFactory>
//    open fun find(iterable: Any): IterableDifferFactory
//
//    companion object {
//        var ngInjectableDef: Any
//        fun create(
//            factories: Array<IterableDifferFactory>,
//            parent: IterableDiffers? = definedExternally
//        ): IterableDiffers
//
//        fun extend(factories: Array<IterableDifferFactory>): dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */
//    }
//}
//
//external interface KeyValueChangeRecord<K, V> {
//    var key: K
//    var currentValue: V?
//        get() = definedExternally
//        set(value) = definedExternally
//    var previousValue: V?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface KeyValueChanges<K, V> {
//    fun forEachItem(fn: (r: KeyValueChangeRecord<K, V>) -> Unit)
//    fun forEachPreviousItem(fn: (r: KeyValueChangeRecord<K, V>) -> Unit)
//    fun forEachChangedItem(fn: (r: KeyValueChangeRecord<K, V>) -> Unit)
//    fun forEachAddedItem(fn: (r: KeyValueChangeRecord<K, V>) -> Unit)
//    fun forEachRemovedItem(fn: (r: KeyValueChangeRecord<K, V>) -> Unit)
//}
//
//external interface `T$10`<V> {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <V> `T$10`<V>.get(key: String): V? = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <V> `T$10`<V>.set(key: String, value: V) {
//    asDynamic()[key] = value
//}
//
//external interface KeyValueDiffer<K, V> {
//    fun diff(obj: Map<K, V>): KeyValueChanges<K, V>?
//    fun diff(obj: `T$10`<V>): KeyValueChanges<String, V>?
//}
//
//external interface KeyValueDifferFactory {
//    fun supports(objects: Any): Boolean
//    fun <K, V> create(): KeyValueDiffer<K, V>
//}
//
//open external class KeyValueDiffers(factories: Array<KeyValueDifferFactory>) {
//    open var factories: Array<KeyValueDifferFactory>
//    open fun find(kv: Any): KeyValueDifferFactory
//
//    companion object {
//        var ngInjectableDef: Any
//        fun <S> create(
//            factories: Array<KeyValueDifferFactory>,
//            parent: KeyValueDiffers? = definedExternally
//        ): KeyValueDiffers
//
//        fun <S> extend(factories: Array<KeyValueDifferFactory>): dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */
//    }
//}
//
//typealias LContainer = Array<Any>
//
//external var LOCALE_ID: InjectionToken<String>
//
//typealias LocalRefExtractor = (tNode: dynamic /* TContainerNode | ɵangular_packages_core_core_bf | TElementContainerNode */, currentView: ɵangular_packages_core_core_bj) -> Any
//
//external interface LQueries {
//    var queries: Array<LQuery<Any>>
//    fun createEmbeddedView(tView: TView): LQueries?
//    fun insertView(tView: TView)
//    fun detachView(tView: TView)
//}
//
//external interface LQuery<T> {
//    var matches: Array<T?>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var queryList: QueryList<T>
//    fun clone(): LQuery<T>
//    fun setDirty()
//}
//
//external enum class LViewFlags {
//    InitPhaseStateIncrementer /* = 1 */,
//    InitPhaseStateMask /* = 3 */,
//    CreationMode /* = 4 */,
//    FirstLViewPass /* = 8 */,
//    CheckAlways /* = 16 */,
//    ManualOnPush /* = 32 */,
//    Dirty /* = 64 */,
//    Attached /* = 128 */,
//    Destroyed /* = 256 */,
//    IsRoot /* = 512 */,
//    IndexWithinInitPhaseIncrementer /* = 1024 */,
//    IndexWithinInitPhaseShift /* = 10 */,
//    IndexWithinInitPhaseReset /* = 1023 */
//}
//
//external enum class MissingTranslationStrategy {
//    Error /* = 0 */,
//    Warning /* = 1 */,
//    Ignore /* = 2 */
//}
//
//open external class ModuleWithComponentFactories<T>(
//    ngModuleFactory: NgModuleFactory<T>,
//    componentFactories: Array<ComponentFactory<Any>>
//) {
//    open var ngModuleFactory: NgModuleFactory<T>
//    open var componentFactories: Array<ComponentFactory<Any>>
//}
//
//external interface ModuleWithProviders<T> {
//    var ngModule: Any
//    var providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external var MOVED_VIEWS: Any
//
//external var NATIVE: Any
//
//external var NEXT: Any
//
//external interface NgContentDef {
//    var index: Number
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface NgModule {
//    var providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var declarations: Array<dynamic /* Type<Any> | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var imports: Array<dynamic /* Type<Any> | ModuleWithProviders<Any> | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var exports: Array<dynamic /* Type<Any> | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var entryComponents: Array<dynamic /* Type<Any> | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var bootstrap: Array<dynamic /* Type<Any> | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var schemas: Array<dynamic /* SchemaMetadata | Array<Any> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var id: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var jit: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : NgModuleDecorator by definedExternally
//}
//
//external interface NgModuleDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun NgModuleDecorator.invoke(obj: NgModule? = definedExternally): TypeDecorator {
//    asDynamic()(obj)
//}
//
//external interface `T$11` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$11`.get(tokenKey: String): NgModuleProviderDef? = asDynamic()[tokenKey]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$11`.set(tokenKey: String, value: NgModuleProviderDef) {
//    asDynamic()[tokenKey] = value
//}
//
//external interface NgModuleDefinition : Definition<NgModuleDefinitionFactory> {
//    var providers: Array<NgModuleProviderDef>
//    var providersByKey: `T$11`
//    var modules: Array<Any>
//    var isRoot: Boolean
//}
//
//external interface NgModuleDefinitionFactory : DefinitionFactory<NgModuleDefinition>
//
//open external class NgModuleFactory<T> {
//    open var moduleType: Any
//    open fun create(parentInjector: Injector?): NgModuleRef<T>
//}
//
//open external class NgModuleFactoryLoader {
//    open fun load(path: String): Promise<NgModuleFactory<Any>>
//}
//
//external interface NgModuleProviderDef {
//    var flags: ɵNodeFlags
//    var index: Number
//    var token: Any
//    var value: Any
//    var deps: Array<DepDef>
//}
//
//open external class NgModuleRef<T> {
//    open var injector: Injector
//    open var componentFactoryResolver: ComponentFactoryResolver
//    open var instance: T
//    open fun destroy()
//    open fun onDestroy(callback: () -> Unit)
//}
//
//open external class NgProbeToken(name: String, token: Any) {
//    open var name: String
//    open var token: Any
//}
//
//external interface `T$12` {
//    var enableLongStackTrace: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//open external class NgZone(__0: `T$12`) {
//    open var hasPendingMicrotasks: Boolean
//    open var hasPendingMacrotasks: Boolean
//    open var isStable: Boolean
//    open var onUnstable: EventEmitter<Any>
//    open var onMicrotaskEmpty: EventEmitter<Any>
//    open var onStable: EventEmitter<Any>
//    open var onError: EventEmitter<Any>
//    open fun <T> run(
//        fn: (args: Array<Any>) -> T,
//        applyThis: Any? = definedExternally,
//        applyArgs: Array<Any>? = definedExternally
//    ): T
//
//    open fun <T> runTask(
//        fn: (args: Array<Any>) -> T,
//        applyThis: Any? = definedExternally,
//        applyArgs: Array<Any>? = definedExternally,
//        name: String? = definedExternally
//    ): T
//
//    open fun <T> runGuarded(
//        fn: (args: Array<Any>) -> T,
//        applyThis: Any? = definedExternally,
//        applyArgs: Array<Any>? = definedExternally
//    ): T
//
//    open fun <T> runOutsideAngular(fn: (args: Array<Any>) -> T): T
//
//    companion object {
//        fun isInAngularZone(): Boolean
//        fun assertInAngularZone()
//        fun assertNotInAngularZone()
//    }
//}
//
//external var NO_ERRORS_SCHEMA: SchemaMetadata
//
//external interface NodeCheckFn {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun NodeCheckFn.invoke(
//    view: ViewData,
//    nodeIndex: Number,
//    argStyle: ɵArgumentType.Dynamic,
//    values: Array<Any>
//): Any {
//    asDynamic()(view, nodeIndex, argStyle, values)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun NodeCheckFn.invoke(
//    view: ViewData,
//    nodeIndex: Number,
//    argStyle: ɵArgumentType.Inline,
//    v0: Any? = definedExternally,
//    v1: Any? = definedExternally,
//    v2: Any? = definedExternally,
//    v3: Any? = definedExternally,
//    v4: Any? = definedExternally,
//    v5: Any? = definedExternally,
//    v6: Any? = definedExternally,
//    v7: Any? = definedExternally,
//    v8: Any? = definedExternally,
//    v9: Any? = definedExternally
//): Any {
//    asDynamic()(view, nodeIndex, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9)
//}
//
//open external class NodeData {
//    open var __brand: Any
//}
//
//external interface `T$13` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$13`.get(refId: String): ɵQueryValueType? = asDynamic()[refId]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$13`.set(refId: String, value: ɵQueryValueType) {
//    asDynamic()[refId] = value
//}
//
//external interface `T$14` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$14`.get(queryId: Number): ɵQueryValueType? = asDynamic()[queryId]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$14`.set(queryId: Number, value: ɵQueryValueType) {
//    asDynamic()[queryId] = value
//}
//
//external interface NodeDef {
//    var flags: ɵNodeFlags
//    var nodeIndex: Number
//    var checkIndex: Number
//    var parent: NodeDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var renderParent: NodeDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var ngContentIndex: Number?
//        get() = definedExternally
//        set(value) = definedExternally
//    var childCount: Number
//    var childFlags: ɵNodeFlags
//    var directChildFlags: ɵNodeFlags
//    var bindingIndex: Number
//    var bindings: Array<BindingDef>
//    var bindingFlags: ɵBindingFlags
//    var outputIndex: Number
//    var outputs: Array<OutputDef>
//    var references: `T$13`
//    var matchedQueries: `T$14`
//    var matchedQueryIds: Number
//    var childMatchedQueries: Number
//    var element: ElementDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var provider: ProviderDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var text: TextDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var query: QueryDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var ngContent: NgContentDef?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface NodeLogger {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun NodeLogger.invoke(): () -> Unit {
//    asDynamic()()
//}
//
//external interface ObjectOrientedRenderer3 {
//    fun createComment(data: String): RComment
//    fun createElement(tagName: String): RElement
//    fun createElementNS(namespace: String, tagName: String): RElement
//    fun createTextNode(data: String): RText
//    fun querySelector(selectors: String): RElement?
//}
//
//external interface OnChanges {
//    fun ngOnChanges(changes: SimpleChanges)
//}
//
//external interface OnDestroy {
//    fun ngOnDestroy()
//}
//
//external interface OnInit {
//    fun ngOnInit()
//}
//
//external interface OpaqueViewState {
//    var __brand__: String /* 'Brand for OpaqueViewState that nothing will match' */
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Optional {
//    companion object : OptionalDecorator by definedExternally
//}
//
//external interface OptionalDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun OptionalDecorator.invoke(): Any {
//    asDynamic()()
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Output {
//    var bindingPropertyName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : OutputDecorator by definedExternally
//}
//
//external interface OutputDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun OutputDecorator.invoke(bindingPropertyName: String? = definedExternally): Any {
//    asDynamic()(bindingPropertyName)
//}
//
//external interface OutputDef {
//    var type: OutputType
//    var target: dynamic /* 'window' | 'document' | 'body' | 'component' | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var eventName: String
//    var propName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external enum class OutputType {
//    ElementOutput /* = 0 */,
//    DirectiveOutput /* = 1 */
//}
//
//external var PACKAGE_ROOT_URL: InjectionToken<String>
//
//external var PARENT: Any
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Pipe {
//    var name: String
//    var pure: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    companion object : PipeDecorator by definedExternally
//}
//
//external interface PipeDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun PipeDecorator.invoke(obj: Pipe): TypeDecorator {
//    asDynamic()(obj)
//}
//
//typealias PipeDefList = Array<ɵPipeDef<Any>>
//
//external interface PipeTransform {
//    fun transform(value: Any, vararg args: Any): Any
//}
//
//external interface PipeType<T> : Type<T> {
//    var ngPipeDef: Any
//}
//
//typealias PipeTypeList = Array<dynamic /* PipeType<Any> | Type<Any> */>
//
//external var PLATFORM_ID: InjectionToken<Any>
//
//external var PLATFORM_INITIALIZER: InjectionToken<Array<() -> Unit>>
//
//external var platformCore: (extraProviders: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>?) -> PlatformRef
//
//open external class PlatformRef {
//    open var _injector: Any
//    open var _modules: Any
//    open var _destroyListeners: Any
//    open var _destroyed: Any
//    open fun <M> bootstrapModuleFactory(
//        moduleFactory: NgModuleFactory<M>,
//        options: BootstrapOptions? = definedExternally
//    ): Promise<NgModuleRef<M>>
//
//    open fun <M> bootstrapModule(
//        moduleType: Type<M>,
//        compilerOptions: CompilerOptions? /* CompilerOptions & BootstrapOptions */ = definedExternally
//    ): Promise<NgModuleRef<M>>
//
//    open fun <M> bootstrapModule(
//        moduleType: Type<M>,
//        compilerOptions: Array<CompilerOptions /* CompilerOptions & BootstrapOptions */>? = definedExternally
//    ): Promise<NgModuleRef<M>>
//
//    open var _moduleDoBootstrap: Any
//    open fun onDestroy(callback: () -> Unit)
//    open var injector: Injector
//    open fun destroy()
//    open var destroyed: Boolean
//    open fun <M> bootstrapModule(moduleType: Type<M>): Promise<NgModuleRef<M>>
//}
//
//external interface `T$15` {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$15`.get(key: String): Array<Any>? = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$15`.set(key: String, value: Array<Any>) {
//    asDynamic()[key] = value
//}
//
//external interface PlatformReflectionCapabilities {
//    fun isReflectionEnabled(): Boolean
//    fun factory(type: Type<Any>): Function<*>
//    fun hasLifecycleHook(type: Any, lcProperty: String): Boolean
//    fun guards(type: Any): Json
//    fun parameters(type: Type<Any>): Array<Array<Any>>
//    fun annotations(type: Type<Any>): Array<Any>
//    fun propMetadata(typeOrFunc: Type<Any>): `T$15`
//    fun getter(name: String): ɵGetterFn
//    fun setter(name: String): ɵSetterFn
//    fun method(name: String): ɵMethodFn
//    fun importUri(type: Type<Any>): String
//    fun resourceUri(type: Type<Any>): String
//    fun resolveIdentifier(name: String, moduleUrl: String, members: Array<String>, runtime: Any): Any
//    fun resolveEnum(enumIdentifier: Any, name: String): Any
//}
//
//external interface Predicate<T> {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T> Predicate<T>.invoke(value: T): Boolean {
//    asDynamic()(value)
//}
//
//external var PREORDER_HOOK_FLAGS: Any
//
//external enum class PreOrderHookFlags {
//    IndexOfTheNextPreOrderHookMaskMask /* = 65535 */,
//    NumberOfInitHooksCalledIncrementer /* = 65536 */,
//    NumberOfInitHooksCalledShift /* = 16 */,
//    NumberOfInitHooksCalledMask /* = 4294901760 */
//}
//
//external interface ProceduralRenderer3 {
//    fun destroy()
//    fun createComment(value: String): RComment
//    fun createElement(name: String, namespace: String? = definedExternally): RElement
//    fun createText(value: String): RText
//    var destroyNode: ((node: RNode) -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    fun appendChild(parent: RElement, newChild: RNode)
//    fun insertBefore(parent: RNode, newChild: RNode, refChild: RNode?)
//    fun removeChild(parent: RElement, oldChild: RNode, isHostElement: Boolean? = definedExternally)
//    fun selectRootElement(selectorOrNode: String): RElement
//    fun selectRootElement(selectorOrNode: Any): RElement
//    fun parentNode(node: RNode): RElement?
//    fun nextSibling(node: RNode): RNode?
//    fun setAttribute(el: RElement, name: String, value: String, namespace: String? = definedExternally)
//    fun removeAttribute(el: RElement, name: String, namespace: String? = definedExternally)
//    fun addClass(el: RElement, name: String)
//    fun removeClass(el: RElement, name: String)
//    fun setStyle(el: RElement, style: String, value: Any, flags: RendererStyleFlags2? = definedExternally)
//    fun setStyle(el: RElement, style: String, value: Any, flags: RendererStyleFlags3? = definedExternally)
//    fun removeStyle(el: RElement, style: String, flags: RendererStyleFlags2? = definedExternally)
//    fun removeStyle(el: RElement, style: String, flags: RendererStyleFlags3? = definedExternally)
//    fun setProperty(el: RElement, name: String, value: Any)
//    fun setValue(node: RText, value: String)
//    fun setValue(node: RComment, value: String)
//    fun listen(target: String, eventName: String, callback: (event: Any) -> dynamic): () -> Unit
//    fun listen(target: RNode, eventName: String, callback: (event: Any) -> dynamic): () -> Unit
//    fun setStyle(el: RElement, style: String, value: Any)
//    fun removeStyle(el: RElement, style: String)
//}
//
//typealias ProcessProvidersFunction = (providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>) -> Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>
//
//typealias ProjectionSlots = Array<dynamic /* ɵCssSelectorList | '*' */>
//
//external interface PropertyAliases {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun PropertyAliases.get(key: String): PropertyAliasValue? = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun PropertyAliases.set(key: String, value: PropertyAliasValue) {
//    asDynamic()[key] = value
//}
//
//typealias PropertyAliasValue = Array<dynamic /* Number | String */>
//
//external interface ProviderDef {
//    var token: Any
//    var value: Any
//    var deps: Array<DepDef>
//}
//
//external interface ProviderOverride {
//    var token: Any
//    var flags: ɵNodeFlags
//    var value: Any
//    var deps: Array<dynamic /* dynamic | Any */>
//    var deprecatedBehavior: Boolean
//}
//
//external interface PublicTestability {
//    fun isStable(): Boolean
//    fun whenStable(
//        callback: Function<*>,
//        timeout: Number? = definedExternally,
//        updateCallback: Function<*>? = definedExternally
//    )
//
//    fun findProviders(using: Any, provider: String, exactMatch: Boolean): Array<Any>
//}
//
//external var QUERIES: Any
//
//open external class Query {
//    open var descendants: Boolean
//    open var first: Boolean
//    open var read: Any
//    open var isViewQuery: Boolean
//    open var selector: Any
//    open var static: Boolean
//}
//
//external interface QueryBindingDef {
//    var propName: String
//    var bindingType: ɵQueryBindingType
//}
//
//external interface QueryDef {
//    var id: Number
//    var filterId: Number
//    var bindings: Array<QueryBindingDef>
//}
//
//open external class QueryList<T> {
//    open var dirty: Any
//    open var _results: Any
//    open var changes: Any
//    open var length: Number
//    open var first: T
//    open var last: T
//    open fun <U> map(fn: (item: T, index: Number, array: Array<T>) -> U): Array<U>
//    open fun filter(fn: (item: T, index: Number, array: Array<T>) -> Boolean): Array<T>
//    open fun find(fn: (item: T, index: Number, array: Array<T>) -> Boolean): T?
//    open fun <U> reduce(fn: (prevValue: U, curValue: T, curIndex: Number, array: Array<T>) -> U, init: U): U
//    open fun forEach(fn: (item: T, index: Number, array: Array<T>) -> Unit)
//    open fun some(fn: (value: T, index: Number, array: Array<T>) -> Boolean): Boolean
//    open fun toArray(): Array<T>
//    override fun toString(): String
//    open fun reset(resultsTree: Array<dynamic /* T | Array<Any> */>)
//    open fun notifyOnChanges()
//    open fun setDirty()
//    open fun destroy()
//}
//
//open external class R3Injector(
//    def: InjectorType<Any>,
//    additionalProviders: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>?,
//    parent: Injector,
//    source: String? = definedExternally
//) {
//    open var parent: Injector
//    open var records: Any
//    open var injectorDefTypes: Any
//    open var onDestroy: Any
//    open var isRootInjector: Any
//    open var source: String?
//    open var destroyed: Boolean
//    open var _destroyed: Any
//    open fun destroy()
//    open fun <T> get(
//        token: Type<T>,
//        notFoundValue: Any? = definedExternally,
//        flags: InjectFlags? = definedExternally
//    ): T
//
//    open fun <T> get(
//        token: InjectionToken<T>,
//        notFoundValue: Any? = definedExternally,
//        flags: InjectFlags? = definedExternally
//    ): T
//
//    override fun toString(): String
//    open var assertNotDestroyed: Any
//    open var processInjectorType: Any
//    open var processProvider: Any
//    open var hydrate: Any
//    open var injectableDefInScope: Any
//}
//
//external interface Range
//
//external interface RComment : RNode {
//    var textContent: String?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface RCssStyleDeclaration {
//    fun removeProperty(propertyName: String): String
//    fun setProperty(propertyName: String, value: String?, priority: String? = definedExternally)
//}
//
//external interface RDomTokenList {
//    fun add(token: String)
//    fun remove(token: String)
//}
//
//open external class ReflectiveInjector : Injector {
//    open var parent: Injector?
//    open fun resolveAndCreateChild(providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>): ReflectiveInjector
//    open fun createChildFromResolved(providers: Array<ResolvedReflectiveProvider>): ReflectiveInjector
//    open fun resolveAndInstantiate(provider: TypeProvider): Any
//    open fun resolveAndInstantiate(provider: ValueProvider): Any
//    open fun resolveAndInstantiate(provider: ClassProvider): Any
//    open fun resolveAndInstantiate(provider: ConstructorProvider): Any
//    open fun resolveAndInstantiate(provider: ExistingProvider): Any
//    open fun resolveAndInstantiate(provider: FactoryProvider): Any
//    open fun resolveAndInstantiate(provider: Array<Any>): Any
//    open fun instantiateResolved(provider: ResolvedReflectiveProvider): Any
//    override fun get(token: Any, notFoundValue: Any?): Any
//
//    companion object {
//        fun resolve(providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>): Array<ResolvedReflectiveProvider>
//        fun resolveAndCreate(
//            providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>,
//            parent: Injector? = definedExternally
//        ): ReflectiveInjector
//
//        fun fromResolvedProviders(
//            providers: Array<ResolvedReflectiveProvider>,
//            parent: Injector? = definedExternally
//        ): ReflectiveInjector
//    }
//}
//
//open external class ReflectiveKey(token: Any, id: Number) {
//    open var token: Any
//    open var id: Number
//    open var displayName: String
//
//    companion object {
//        fun get(token: Any): ReflectiveKey
//        var numberOfKeys: Number
//    }
//}
//
//external interface RElement : RNode {
//    var style: RCssStyleDeclaration
//    var classList: RDomTokenList
//    var className: String
//    fun setAttribute(name: String, value: String)
//    fun removeAttribute(name: String)
//    fun setAttributeNS(namespaceURI: String, qualifiedName: String, value: String)
//    fun addEventListener(type: String, listener: EventListener, useCapture: Boolean? = definedExternally)
//    fun removeEventListener(
//        type: String,
//        listener: EventListener? = definedExternally,
//        options: Boolean? = definedExternally
//    )
//
//    val setProperty: ((name: String, value: Any) -> Unit)?
//        get() = definedExternally
//}
//
//open external class RenderComponentType(
//    id: String,
//    templateUrl: String,
//    slotCount: Number,
//    encapsulation: ViewEncapsulation,
//    styles: Array<dynamic /* String | Array<Any> */>,
//    animations: Any
//) {
//    open var id: String
//    open var templateUrl: String
//    open var slotCount: Number
//    open var encapsulation: ViewEncapsulation
//    open var styles: Array<dynamic /* String | Array<Any> */>
//    open var animations: Any
//}
//
//external var RENDERER: Any
//
//open external class Renderer {
//    open fun selectRootElement(selectorOrNode: String, debugInfo: ɵRenderDebugInfo? = definedExternally): Any
//    open fun selectRootElement(selectorOrNode: Any, debugInfo: ɵRenderDebugInfo? = definedExternally): Any
//    open fun createElement(parentElement: Any, name: String, debugInfo: ɵRenderDebugInfo? = definedExternally): Any
//    open fun createViewRoot(hostElement: Any): Any
//    open fun createTemplateAnchor(parentElement: Any, debugInfo: ɵRenderDebugInfo? = definedExternally): Any
//    open fun createText(parentElement: Any, value: String, debugInfo: ɵRenderDebugInfo? = definedExternally): Any
//    open fun projectNodes(parentElement: Any, nodes: Array<Any>)
//    open fun attachViewAfter(node: Any, viewRootNodes: Array<Any>)
//    open fun detachView(viewRootNodes: Array<Any>)
//    open fun destroyView(hostElement: Any, viewAllNodes: Array<Any>)
//    open fun listen(renderElement: Any, name: String, callback: Function<*>): Function<*>
//    open fun listenGlobal(target: String, name: String, callback: Function<*>): Function<*>
//    open fun setElementProperty(renderElement: Any, propertyName: String, propertyValue: Any)
//    open fun setElementAttribute(renderElement: Any, attributeName: String, attributeValue: String? = definedExternally)
//    open fun setBindingDebugInfo(renderElement: Any, propertyName: String, propertyValue: String)
//    open fun setElementClass(renderElement: Any, className: String, isAdd: Boolean)
//    open fun setElementStyle(renderElement: Any, styleName: String, styleValue: String? = definedExternally)
//    open fun invokeElementMethod(renderElement: Any, methodName: String, args: Array<Any>? = definedExternally)
//    open fun setText(renderNode: Any, text: String)
//    open fun animate(
//        element: Any,
//        startingStyles: Any,
//        keyframes: Array<Any>,
//        duration: Number,
//        delay: Number,
//        easing: String,
//        previousPlayers: Array<Any>? = definedExternally
//    ): Any
//}
//
//open external class Renderer2 {
//    open var data: Json
//    open fun destroy()
//    open fun createElement(name: String, namespace: String? = definedExternally): Any
//    open fun createComment(value: String): Any
//    open fun createText(value: String): Any
//    open var destroyNode: ((node: Any) -> Unit)?
//    open fun appendChild(parent: Any, newChild: Any)
//    open fun insertBefore(parent: Any, newChild: Any, refChild: Any)
//    open fun removeChild(parent: Any, oldChild: Any, isHostElement: Boolean? = definedExternally)
//    open fun selectRootElement(selectorOrNode: String, preserveContent: Boolean? = definedExternally): Any
//    open fun selectRootElement(selectorOrNode: Any, preserveContent: Boolean? = definedExternally): Any
//    open fun parentNode(node: Any): Any
//    open fun nextSibling(node: Any): Any
//    open fun setAttribute(el: Any, name: String, value: String, namespace: String? = definedExternally)
//    open fun removeAttribute(el: Any, name: String, namespace: String? = definedExternally)
//    open fun addClass(el: Any, name: String)
//    open fun removeClass(el: Any, name: String)
//    open fun setStyle(el: Any, style: String, value: Any, flags: RendererStyleFlags2? = definedExternally)
//    open fun removeStyle(el: Any, style: String, flags: RendererStyleFlags2? = definedExternally)
//    open fun setProperty(el: Any, name: String, value: Any)
//    open fun setValue(node: Any, value: String)
//    open fun listen(target: String, eventName: String, callback: (event: Any) -> dynamic): () -> Unit
//    open fun listen(target: Any, eventName: String, callback: (event: Any) -> dynamic): () -> Unit
//}
//
//external var RENDERER_FACTORY: Any
//
//open external class RendererFactory2 {
//    open fun createRenderer(hostElement: Any, type: RendererType2?): Renderer2
//    open fun begin()
//    open fun end()
//    open fun whenRenderingDone(): Promise<Any>
//}
//
//external interface RendererFactory3 {
//    fun createRenderer(
//        hostElement: RElement?,
//        rendererType: RendererType2?
//    ): dynamic /* ObjectOrientedRenderer3 | ProceduralRenderer3 */
//
//    val begin: (() -> Unit)?
//        get() = definedExternally
//    val end: (() -> Unit)?
//        get() = definedExternally
//}
//
//external enum class RendererStyleFlags2 {
//    Important /* = 1 */,
//    DashCase /* = 2 */
//}
//
//external enum class RendererStyleFlags3 {
//    Important /* = 1 */,
//    DashCase /* = 2 */
//}
//
//external interface RendererType2 {
//    var id: String
//    var encapsulation: ViewEncapsulation
//    var styles: Array<dynamic /* String | Array<Any> */>
//    var data: Json
//}
//
//open external class ResolvedReflectiveFactory(
//    factory: Function<*>,
//    dependencies: Array<ɵangular_packages_core_core_d>
//) {
//    open var factory: Function<*>
//    open var dependencies: Array<ɵangular_packages_core_core_d>
//}
//
//external interface ResolvedReflectiveProvider {
//    var key: ReflectiveKey
//    var resolvedFactories: Array<ResolvedReflectiveFactory>
//    var multiProvider: Boolean
//}
//
//external fun <T> resolveForwardRef(type: T): T
//
//external interface RNode {
//    var parentNode: RNode?
//        get() = definedExternally
//        set(value) = definedExternally
//    var parentElement: RElement?
//        get() = definedExternally
//        set(value) = definedExternally
//    var nextSibling: RNode?
//        get() = definedExternally
//        set(value) = definedExternally
//
//    fun removeChild(oldChild: RNode): RNode
//    fun insertBefore(newChild: RNode, refChild: RNode?, isViewRoot: Boolean)
//    fun appendChild(newChild: RNode): RNode
//}
//
//external interface RootContext {
//    var scheduler: (workFn: () -> Unit) -> Unit
//    var clean: Promise<Nothing?>
//    var components: Array<Any>
//    var playerHandler: ɵPlayerHandler?
//        get() = definedExternally
//        set(value) = definedExternally
//    var flags: RootContextFlags
//}
//
//external enum class RootContextFlags {
//    Empty /* = 0 */,
//    DetectChanges /* = 1 */,
//    FlushPlayers /* = 2 */
//}
//
//external interface RootData {
//    var injector: Injector
//    var ngModule: NgModuleRef<Any>
//    var projectableNodes: Array<Array<Any>>
//    var selectorOrNode: Any
//    var renderer: Renderer2
//    var rendererFactory: RendererFactory2
//    var errorHandler: ErrorHandler
//    var sanitizer: Sanitizer
//}
//
//open external class RootRenderer {
//    open fun renderComponent(componentType: RenderComponentType): Renderer
//}
//
//external interface RText : RNode {
//    var textContent: String?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external var SANITIZER: Any
//
//open external class Sanitizer {
//    open fun sanitize(context: SecurityContext, value: Any): String?
//    open fun sanitize(context: SecurityContext, value: String): String?
//    open fun sanitize(context: SecurityContext, value: Nothing?): String?
//}
//
//typealias SanitizerFn = (value: Any, tagName: String? /* = null */, propName: String? /* = null */) -> String
//
//external interface SchemaMetadata {
//    var name: String
//}
//
//external interface Scope {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun Scope.invoke(vararg args: Any): Any {
//    asDynamic()(args)
//}
//
//external enum class SecurityContext {
//    NONE /* = 0 */,
//    HTML /* = 1 */,
//    STYLE /* = 2 */,
//    SCRIPT /* = 3 */,
//    URL /* = 4 */,
//    RESOURCE_URL /* = 5 */
//}
//
//external enum class SelectorFlags {
//    NOT /* = 1 */,
//    ATTRIBUTE /* = 2 */,
//    ELEMENT /* = 4 */,
//    CLASS /* = 8 */
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface Self {
//    companion object : SelfDecorator by definedExternally
//}
//
//external interface SelfDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun SelfDecorator.invoke(): Any {
//    asDynamic()()
//}
//
//external fun setTestabilityGetter(getter: GetTestability)
//
//open external class SimpleChange(previousValue: Any, currentValue: Any, firstChange: Boolean) {
//    open var previousValue: Any
//    open var currentValue: Any
//    open var firstChange: Boolean
//    open fun isFirstChange(): Boolean
//}
//
//external interface SimpleChanges {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun SimpleChanges.get(propName: String): SimpleChange? = asDynamic()[propName]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun SimpleChanges.set(propName: String, value: SimpleChange) {
//    asDynamic()[propName] = value
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface SkipSelf {
//    companion object : SkipSelfDecorator by definedExternally
//}
//
//external interface SkipSelfDecorator {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun SkipSelfDecorator.invoke(): Any {
//    asDynamic()()
//}
//
//external interface StaticClassProvider : StaticClassSansProvider {
//    var provide: Any
//    var multi: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface StaticClassSansProvider {
//    var useClass: Any
//    var deps: Array<Any>
//}
//
//external interface StyleSanitizeFn {
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun StyleSanitizeFn.invoke(
//    prop: String,
//    value: String?,
//    mode: StyleSanitizeMode? = definedExternally
//): Any {
//    asDynamic()(prop, value, mode)
//}
//
//external enum class StyleSanitizeMode {
//    ValidateProperty /* = 1 */,
//    SanitizeOnly /* = 2 */,
//    ValidateAndSanitize /* = 3 */
//}
//
//typealias StylingMapArray = Array<dynamic /* dynamic | String | Number | Nothing? */>
//
//external enum class StylingMapArrayIndex {
//    RawValuePosition /* = 0 */,
//    ValuesStartPosition /* = 1 */,
//    TupleSize /* = 2 */,
//    PropOffset /* = 0 */,
//    ValueOffset /* = 1 */
//}
//
//open external class SystemJsNgModuleLoader(
//    _compiler: Compiler,
//    config: SystemJsNgModuleLoaderConfig? = definedExternally
//) : NgModuleFactoryLoader {
//    open var _compiler: Any
//    open var _config: Any
//    override fun load(path: String): Promise<NgModuleFactory<Any>>
//    open var loadAndCompile: Any
//    open var loadFactory: Any
//}
//
//open external class SystemJsNgModuleLoaderConfig {
//    open var factoryPathPrefix: String
//    open var factoryPathSuffix: String
//}
//
//external var T_HOST: Any
//
//typealias TAttributes = Array<dynamic /* String | ɵAttributeMarker | CssSelector */>
//
//external interface TContainerNode : TNode {
//    override var index: Number
//    var child: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var parent: dynamic /* ɵangular_packages_core_core_bf | TElementContainerNode | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    override var tViews: dynamic /* TView | Array<TView> | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    override var projection: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//typealias TData = Array<dynamic /* TNode | ɵPipeDef<Any> | ɵDirectiveDef<Any> | ɵComponentDef<Any> | Number | Type<Any> | InjectionToken<Any> | TI18n | I18nUpdateOpCodes | Nothing? | String */>
//
//external interface TElementContainerNode : TNode {
//    override var index: Number
//    override var parent: dynamic /* ɵangular_packages_core_core_bf | TElementContainerNode | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    override var tViews: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var projection: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//open external class TemplateRef<C> {
//    open var elementRef: ElementRef<Any>
//    open fun createEmbeddedView(context: C): EmbeddedViewRef<C>
//}
//
//open external class Testability(_ngZone: NgZone) : PublicTestability {
//    open var _ngZone: Any
//    open var _pendingCount: Any
//    open var _isZoneStable: Any
//    open var _callbacks: Any
//    open var taskTrackingZone: Any
//    open var _watchAngularEvents: Any
//    open fun increasePendingRequestCount(): Number
//    open fun decreasePendingRequestCount(): Number
//    override fun isStable(): Boolean
//    open var _runCallbacksIfReady: Any
//    open var getPendingTasks: Any
//    open var addCallback: Any
//    override fun whenStable(doneCb: Function<*>, timeout: Number?, updateCb: Function<*>?)
//    open fun getPendingRequestCount(): Number
//    override fun findProviders(using: Any, provider: String, exactMatch: Boolean): Array<Any>
//}
//
//open external class TestabilityRegistry {
//    open fun registerApplication(token: Any, testability: Testability)
//    open fun unregisterApplication(token: Any)
//    open fun unregisterAllApplications()
//    open fun getTestability(elem: Any): Testability?
//    open fun getAllTestabilities(): Array<Testability>
//    open fun getAllRootElements(): Array<Any>
//    open fun findTestabilityInTree(elem: Node, findInAncestors: Boolean? = definedExternally): Testability?
//}
//
//external interface TextDef {
//    var prefix: String
//}
//
//external interface TI18n {
//    var vars: Number
//    var create: I18nMutateOpCodes
//    var update: I18nUpdateOpCodes
//    var icus: Array<TIcu>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface TIcu {
//    var type: IcuType
//    var vars: Array<Number>
//    var childIcus: Array<Array<Number>>
//    var cases: Array<Any>
//    var create: Array<I18nMutateOpCodes>
//    var remove: Array<I18nMutateOpCodes>
//    var update: Array<I18nUpdateOpCodes>
//}
//
//external interface TNode {
//    var type: TNodeType
//    var index: Number
//    var injectorIndex: Number
//    var directiveStart: Number
//    var directiveEnd: Number
//    var propertyMetadataStartIndex: Number
//    var propertyMetadataEndIndex: Number
//    var flags: TNodeFlags
//    var providerIndexes: TNodeProviderIndexes
//    var tagName: String?
//        get() = definedExternally
//        set(value) = definedExternally
//    var attrs: TAttributes?
//        get() = definedExternally
//        set(value) = definedExternally
//    var localNames: Array<dynamic /* String | Number */>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var initialInputs: InitialInputData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var inputs: PropertyAliases?
//        get() = definedExternally
//        set(value) = definedExternally
//    var outputs: PropertyAliases?
//        get() = definedExternally
//        set(value) = definedExternally
//    var tViews: dynamic /* TView | Array<TView> | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var next: TNode?
//        get() = definedExternally
//        set(value) = definedExternally
//    var projectionNext: TNode?
//        get() = definedExternally
//        set(value) = definedExternally
//    var child: TNode?
//        get() = definedExternally
//        set(value) = definedExternally
//    var parent: dynamic /* ɵangular_packages_core_core_bf | TContainerNode | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var projection: dynamic /* Array<dynamic /* TNode | Array<RNode> */> | Number | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var styles: dynamic /* StylingMapArray | TStylingContext | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var classes: dynamic /* StylingMapArray | TStylingContext | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external enum class TNodeFlags {
//    isComponent /* = 1 */,
//    isProjected /* = 2 */,
//    hasContentQuery /* = 4 */,
//    hasClassInput /* = 8 */,
//    hasStyleInput /* = 16 */,
//    isDetached /* = 32 */
//}
//
//external enum class TNodeProviderIndexes {
//    ProvidersStartIndexMask /* = 65535 */,
//    CptViewProvidersCountShift /* = 16 */,
//    CptViewProvidersCountShifter /* = 65536 */
//}
//
//external enum class TNodeType {
//    Container /* = 0 */,
//    Projection /* = 1 */,
//    View /* = 2 */,
//    Element /* = 3 */,
//    ElementContainer /* = 4 */,
//    IcuContainer /* = 5 */
//}
//
//external interface TProjectionNode : TNode {
//    var child: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var parent: dynamic /* ɵangular_packages_core_core_bf | TElementContainerNode | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    override var tViews: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var projection: Number
//}
//
//external interface TQueries {
//    fun track(tQuery: TQuery)
//    fun getByIndex(index: Number): TQuery
//    var length: Number
//    fun elementStart(tView: TView, tNode: TNode)
//    fun elementEnd(tNode: TNode)
//    fun template(tView: TView, tNode: TNode)
//    fun embeddedTView(tNode: TNode): TQueries?
//}
//
//external interface TQuery {
//    var metadata: TQueryMetadata
//    var indexInDeclarationView: Number
//    var matches: Array<Number>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var crossesNgTemplate: Boolean
//    fun elementStart(tView: TView, tNode: TNode)
//    fun elementEnd(tNode: TNode)
//    fun template(tView: TView, tNode: TNode)
//    fun embeddedTView(tNode: TNode, childQueryIndex: Number): TQuery?
//}
//
//external interface TQueryMetadata {
//    var predicate: dynamic /* Type<Any> | Array<String> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var descendants: Boolean
//    var read: Any
//    var isStatic: Boolean
//}
//
//external interface TrackByFunction<T>
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T> TrackByFunction<T>.invoke(index: Number, item: T): Any {
//    asDynamic()(index, item)
//}
//
//external var TRANSLATIONS: InjectionToken<String>
//
//external var TRANSLATIONS_FORMAT: InjectionToken<String>
//
//external interface TrustedHtmlString : TrustedString
//
//external interface TrustedResourceUrlString : TrustedString
//
//external interface TrustedScriptString : TrustedString
//
//typealias TrustedString = String
//
//external interface TrustedStyleString : TrustedString
//
//external interface TrustedUrlString : TrustedString
//
//typealias TsickleIssue1009 = Any
//
//external enum class TStylingConfigFlags {
//    Initial /* = 0 */,
//    Locked /* = 1 */,
//    PersistStateValues /* = 2 */,
//    Mask /* = 3 */,
//    TotalBits /* = 2 */
//}
//
//typealias TStylingContext = Array<dynamic /* Number | String | Boolean | Nothing? | StylingMapArray | dynamic */>
//
//external enum class TStylingContextIndex {
//    InitialStylingValuePosition /* = 0 */,
//    ConfigPosition /* = 1 */,
//    LastDirectiveIndexPosition /* = 2 */,
//    MapBindingsPosition /* = 3 */,
//    MapBindingsBitGuardPosition /* = 3 */,
//    MapBindingsValuesCountPosition /* = 4 */,
//    MapBindingsPropPosition /* = 5 */,
//    MapBindingsBindingsStartPosition /* = 6 */,
//    ConfigAndGuardOffset /* = 0 */,
//    ValuesCountOffset /* = 1 */,
//    PropOffset /* = 2 */,
//    BindingsStartOffset /* = 3 */,
//    MinTupleLength /* = 4 */
//}
//
//external interface TTextNode : TNode {
//    override var index: Number
//    var child: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var parent: dynamic /* ɵangular_packages_core_core_bf | TElementContainerNode | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    override var tViews: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var projection: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external var TVIEW: Any
//
//external interface TView {
//    var id: Number
//    var blueprint: ɵangular_packages_core_core_bj
//    var template: ComponentTemplate<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewQuery: ViewQueriesFunction<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var node: dynamic /* TViewNode | ɵangular_packages_core_core_bf | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var firstTemplatePass: Boolean
//    var data: TData
//    var bindingStartIndex: Number
//    var expandoStartIndex: Number
//    var staticViewQueries: Boolean
//    var staticContentQueries: Boolean
//    var firstChild: TNode?
//        get() = definedExternally
//        set(value) = definedExternally
//    var expandoInstructions: ExpandoInstructions?
//        get() = definedExternally
//        set(value) = definedExternally
//    var directiveRegistry: DirectiveDefList?
//        get() = definedExternally
//        set(value) = definedExternally
//    var pipeRegistry: PipeDefList?
//        get() = definedExternally
//        set(value) = definedExternally
//    var preOrderHooks: HookData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var preOrderCheckHooks: HookData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var contentHooks: HookData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var contentCheckHooks: HookData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewHooks: HookData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewCheckHooks: HookData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var destroyHooks: HookData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var cleanup: Array<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var components: Array<Number>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var queries: TQueries?
//        get() = definedExternally
//        set(value) = definedExternally
//    var contentQueries: Array<Number>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var schemas: Array<SchemaMetadata>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface TViewNode : TNode {
//    override var index: Number
//    override var parent: TContainerNode?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var tViews: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var projection: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external var TYPE: Any
//
//external interface TypeDecorator
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun <T : Type<Any>> TypeDecorator.invoke(type: T): T {
//    asDynamic()(type)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun TypeDecorator.invoke(
//    target: Any,
//    propertyKey: String? = definedExternally,
//    parameterIndex: Number? = definedExternally
//) {
//    asDynamic()(target, propertyKey, parameterIndex)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun TypeDecorator.invoke(
//    target: Any,
//    propertyKey: Any? = definedExternally,
//    parameterIndex: Number? = definedExternally
//) {
//    asDynamic()(target, propertyKey, parameterIndex)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun TypeDecorator.invoke(target: Any) {
//    asDynamic()(target)
//}
//
//external interface TypeProvider : Type<Any>
//
//
//
//external var VERSION: Version
//
//open external class Version(full: String) {
//    open var full: String
//    open var major: String
//    open var minor: String
//    open var patch: String
//}
//
//external var VIEW_REFS: Any
//
//typealias ViewChild = Query
//
//external var ViewChild: ViewChildDecorator
//
//external interface ViewChildDecorator
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewChildDecorator.invoke(selector: Type<Any>, opts: `T$1`): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewChildDecorator.invoke(selector: Function<*>, opts: `T$1`): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewChildDecorator.invoke(selector: String, opts: `T$1`): Any {
//    asDynamic()(selector, opts)
//}
//
//typealias ViewChildren = Query
//
//external var ViewChildren: ViewChildrenDecorator
//
//external interface `T$16` {
//    var read: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ViewChildrenDecorator
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewChildrenDecorator.invoke(selector: Type<Any>, opts: `T$16`? = definedExternally): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewChildrenDecorator.invoke(selector: Function<*>, opts: `T$16`? = definedExternally): Any {
//    asDynamic()(selector, opts)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewChildrenDecorator.invoke(selector: String, opts: `T$16`? = definedExternally): Any {
//    asDynamic()(selector, opts)
//}
//
//open external class ViewContainerRef {
//    open var element: ElementRef<Any>
//    open var injector: Injector
//    open var parentInjector: Injector
//    open fun clear()
//    open fun get(index: Number): ViewRef?
//    open var length: Number
//    open fun <C> createEmbeddedView(
//        templateRef: TemplateRef<C>,
//        context: C? = definedExternally,
//        index: Number? = definedExternally
//    ): EmbeddedViewRef<C>
//
//    open fun <C> createComponent(
//        componentFactory: ComponentFactory<C>,
//        index: Number? = definedExternally,
//        injector: Injector? = definedExternally,
//        projectableNodes: Array<Array<Any>>? = definedExternally,
//        ngModule: NgModuleRef<Any>? = definedExternally
//    ): ComponentRef<C>
//
//    open fun insert(viewRef: ViewRef, index: Number? = definedExternally): ViewRef
//    open fun move(viewRef: ViewRef, currentIndex: Number): ViewRef
//    open fun indexOf(viewRef: ViewRef): Number
//    open fun remove(index: Number? = definedExternally)
//    open fun detach(index: Number? = definedExternally): ViewRef?
//}
//
//external interface `T$17`
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$17`.get(key: Number): NodeData? = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$17`.set(key: Number, value: NodeData) {
//    asDynamic()[key] = value
//}
//
//external interface ViewData {
//    var def: ɵViewDefinition
//    var root: RootData
//    var renderer: Renderer2
//    var parentNodeDef: NodeDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var parent: ViewData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewContainerParent: ViewData?
//        get() = definedExternally
//        set(value) = definedExternally
//    var component: Any
//    var context: Any
//    var nodes: `T$17`
//    var state: ViewState
//    var oldValues: Array<Any>
//    var disposables: Array<DisposableFn>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var initIndex: Number
//}
//
//external interface ViewDefinitionFactory : DefinitionFactory<ɵViewDefinition>
//
//external enum class ViewEncapsulation {
//    Emulated /* = 0 */,
//    Native /* = 1 */,
//    None /* = 2 */,
//    ShadowDom /* = 3 */
//}
//
//external interface viewEngine_ChangeDetectorRef_interface : ChangeDetectorRef
//
//external interface ViewHandleEventFn
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewHandleEventFn.invoke(
//    view: ViewData,
//    nodeIndex: Number,
//    eventName: String,
//    event: Any
//): Boolean {
//    asDynamic()(view, nodeIndex, eventName, event)
//}
//
//typealias ViewQueriesFunction<T> = (rf: ɵRenderFlags, ctx: U) -> Unit
//
//open external class ViewRef : ChangeDetectorRef {
//    open fun destroy()
//    open var destroyed: Boolean
//    open fun onDestroy(callback: Function<*>): Any
//}
//
//open external class ViewRef_2<T>(_lView: ɵangular_packages_core_core_bj, _context: T?, _componentIndex: Number) :
//    EmbeddedViewRef<T>, InternalViewRef, viewEngine_ChangeDetectorRef_interface {
//    open var _context: Any
//    open var _componentIndex: Any
//    open var _appRef: Any
//    open var _viewContainerRef: Any
//    override var rootNodes: Array<Any>
//    open var context: T
//    override var destroyed: Boolean
//    override fun destroy()
//    override fun onDestroy(callback: Function<*>)
//    override fun markForCheck()
//    override fun detach()
//    override fun reattach()
//    override fun detectChanges()
//    override fun checkNoChanges()
//    open fun attachToViewContainerRef(vcRef: ViewContainerRef)
//    override fun detachFromAppRef()
//    override fun attachToAppRef(appRef: ApplicationRef)
//    open var _lookUpContext: Any
//}
//
//external enum class ViewState {
//    BeforeFirstCheck /* = 1 */,
//    FirstCheck /* = 2 */,
//    Attached /* = 4 */,
//    ChecksEnabled /* = 8 */,
//    IsProjectedView /* = 16 */,
//    CheckProjectedView /* = 32 */,
//    CheckProjectedViews /* = 64 */,
//    Destroyed /* = 128 */,
//    InitState_Mask /* = 1792 */,
//    InitState_BeforeInit /* = 0 */,
//    InitState_CallingOnInit /* = 256 */,
//    InitState_CallingAfterContentInit /* = 512 */,
//    InitState_CallingAfterViewInit /* = 768 */,
//    InitState_AfterInit /* = 1024 */,
//    CatDetectChanges /* = 12 */,
//    CatInit /* = 13 */
//}
//
//external interface ViewUpdateFn
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun ViewUpdateFn.invoke(check: NodeCheckFn, view: ViewData) {
//    asDynamic()(check, view)
//}
//
//open external class WrappedValue(value: Any) {
//    open var wrapped: Any
//
//    companion object {
//        fun wrap(value: Any): WrappedValue
//        fun unwrap(value: Any): Any
//        fun isWrapped(value: Any): Boolean
//    }
//}
//
//external var wtfCreateScope: (signature: String, flags: Any? /* = null */) -> WtfScopeFn
//
//external var wtfEndTimeRange: (range: Any) -> Unit
//
//external var wtfLeave: (scope: Any, returnValue: T? /* = null */) -> T
//
//external interface WtfScopeFn
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun WtfScopeFn.invoke(arg0: Any? = definedExternally, arg1: Any? = definedExternally): Any {
//    asDynamic()(arg0, arg1)
//}
//
//external var wtfStartTimeRange: (rangeType: String, action: String) -> Any
//
//external fun ɵ_sanitizeHtml(defaultDoc: Any, unsafeHtmlInput: String): String
//
//external fun ɵ_sanitizeStyle(value: String): String
//
//external fun ɵ_sanitizeUrl(url: String): String
//
//external var ɵALLOW_MULTIPLE_PLATFORMS: InjectionToken<Boolean>
//
//external fun ɵand(
//    flags: ɵNodeFlags,
//    matchedQueriesDsl: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    ngContentIndex: Number?,
//    childCount: Number,
//    handleEvent: ElementHandleEventFn? = definedExternally,
//    templateFactory: ViewDefinitionFactory? = definedExternally
//): NodeDef
//
//external fun <T> ɵangular_packages_core_core_a(token: Type<T>): T
//
//external fun <T> ɵangular_packages_core_core_a(token: InjectionToken<T>): T
//
//external fun <T> ɵangular_packages_core_core_a(token: Type<T>, flags: InjectFlags? = definedExternally): T?
//
//external fun <T> ɵangular_packages_core_core_a(token: InjectionToken<T>, flags: InjectFlags? = definedExternally): T?
//
//open external class ɵangular_packages_core_core_b : Injector {
//    override fun get(token: Any, notFoundValue: Any?): Any
//}
//
//external var ɵangular_packages_core_core_ba: InjectionToken<(fn: () -> Unit) -> Unit>
//
//external fun ɵangular_packages_core_core_bb(tNode: TNode, attrNameToInject: String): String?
//
//external fun ɵangular_packages_core_core_bc(): ɵangular_packages_core_core_bj
//
//external fun ɵangular_packages_core_core_bd(): TNode
//
//external fun <T> ɵangular_packages_core_core_be(level: Number? = definedExternally): T
//
//external interface ɵangular_packages_core_core_bf : TNode {
//    override var index: Number
//    override var parent: dynamic /* ɵangular_packages_core_core_bf | TElementContainerNode | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    override var tViews: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    override var projection: Array<dynamic /* TNode | Array<RNode> */>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun ɵangular_packages_core_core_bg(tag: String, prop: String): Any
//
//external fun ɵangular_packages_core_core_bh(
//    name: String,
//    props: ((args: Array<Any>) -> Any)? = definedExternally,
//    parentClass: Any? = definedExternally
//): Any
//
//external fun ɵangular_packages_core_core_bi(
//    name: String,
//    props: ((args: Array<Any>) -> Any)? = definedExternally,
//    parentClass: Any? = definedExternally,
//    additionalProcessing: ((target: Any, name: String, args: Array<Any>) -> Unit)? = definedExternally
//): Any
//
//typealias ɵangular_packages_core_core_bj = Array<Any>
//
//external fun ɵangular_packages_core_core_bk(fn: () -> Unit): String
//
//external fun <T> ɵangular_packages_core_core_bl(view: ɵangular_packages_core_core_bj, index: Number): T
//
//external fun <T> ɵangular_packages_core_core_bl(view: TData, index: Number): T
//
//external fun ɵangular_packages_core_core_bm(viewOrComponent: ɵangular_packages_core_core_bj): RootContext
//
//external fun ɵangular_packages_core_core_bm(viewOrComponent: Any): RootContext
//
//external fun <T> ɵangular_packages_core_core_bn(objWithPropertyToExtract: T): String
//
//open external class ɵangular_packages_core_core_c(
//    _providers: Array<ResolvedReflectiveProvider>,
//    _parent: Injector? = definedExternally
//) : ReflectiveInjector {
//    override var parent: Injector?
//    open var keyIds: Array<Number>
//    open var objs: Array<Any>
//    override fun get(token: Any, notFoundValue: Any?): Any
//    override fun resolveAndCreateChild(providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>): ReflectiveInjector
//    override fun createChildFromResolved(providers: Array<ResolvedReflectiveProvider>): ReflectiveInjector
//    override fun resolveAndInstantiate(provider: TypeProvider): Any
//    override fun resolveAndInstantiate(provider: ValueProvider): Any
//    override fun resolveAndInstantiate(provider: ClassProvider): Any
//    override fun resolveAndInstantiate(provider: ConstructorProvider): Any
//    override fun resolveAndInstantiate(provider: ExistingProvider): Any
//    override fun resolveAndInstantiate(provider: FactoryProvider): Any
//    override fun resolveAndInstantiate(provider: Array<Any>): Any
//    override fun instantiateResolved(provider: ResolvedReflectiveProvider): Any
//    open fun getProviderAtIndex(index: Number): ResolvedReflectiveProvider
//    open var _getMaxNumberOfObjects: Any
//    open var _instantiateProvider: Any
//    open var _instantiate: Any
//    open var _getByReflectiveDependency: Any
//    open var _getByKey: Any
//    open var _getObjByKeyId: Any
//    open var displayName: String
//    override fun toString(): String
//
//    companion object {
//        var INJECTOR_KEY: Any
//    }
//}
//
//open external class ɵangular_packages_core_core_d {
//    constructor(key: ReflectiveKey, optional: Boolean, visibility: Self)
//    constructor(key: ReflectiveKey, optional: Boolean, visibility: SkipSelf)
//    constructor(key: ReflectiveKey, optional: Boolean, visibility: Nothing?)
//
//    open var key: ReflectiveKey
//    open var optional: Boolean
//    open var visibility: dynamic /* Self | SkipSelf | Nothing? */
//
//    companion object {
//        fun fromKey(key: ReflectiveKey): ɵangular_packages_core_core_d
//    }
//}
//
//external fun ɵangular_packages_core_core_e(providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>): Array<ResolvedReflectiveProvider>
//
//external fun ɵangular_packages_core_core_f(): String
//
//external fun ɵangular_packages_core_core_g(
//    ElementRefToken: Any,
//    tNode: TNode,
//    view: ɵangular_packages_core_core_bj
//): ElementRef<Any>
//
//external fun <T> ɵangular_packages_core_core_h(
//    TemplateRefToken: Any,
//    ElementRefToken: Any,
//    hostTNode: TNode,
//    hostView: ɵangular_packages_core_core_bj
//): TemplateRef<T>?
//
//external fun ɵangular_packages_core_core_i(id: String): NgModuleFactory<Any>
//
//open external class ɵangular_packages_core_core_j(
//    nativeNode: Any,
//    parent: DebugNode?,
//    _debugContext: ɵangular_packages_core_core_z
//) {
//    open var listeners: Array<DebugEventListener>
//    open var parent: DebugElement?
//    open var nativeNode: Any
//    open var _debugContext: Any
//    open var injector: Injector
//    open var componentInstance: Any
//    open var context: Any
//    open var references: Json
//    open var providerTokens: Array<Any>
//}
//
//open external class ɵangular_packages_core_core_k(
//    nativeNode: Any,
//    parent: Any,
//    _debugContext: ɵangular_packages_core_core_z
//) : ɵangular_packages_core_core_j, DebugElement {
//    override var name: String
//    override var properties: Json
//    override var attributes: `T$3`
//    override var classes: `T$4`
//    override var styles: `T$3`
//    override var childNodes: Array<DebugNode>
//    override var nativeElement: Any
//    open fun addChild(child: DebugNode)
//    open fun removeChild(child: DebugNode)
//    open fun insertChildrenAfter(child: DebugNode, newChildren: Array<DebugNode>)
//    open fun insertBefore(refChild: DebugNode, newChild: DebugNode)
//    override fun query(predicate: Predicate<DebugElement>): DebugElement
//    override fun queryAll(predicate: Predicate<DebugElement>): Array<DebugElement>
//    override fun queryAllNodes(predicate: Predicate<DebugNode>): Array<DebugNode>
//    override var children: Array<DebugElement>
//    override fun triggerEventHandler(eventName: String, eventObj: Any)
//}
//
//open external class ɵangular_packages_core_core_l : IterableDifferFactory {
//    open fun supports(obj: Any?): Boolean
//    override fun supports(objects: Any): Boolean
//    open fun <V> create(trackByFn: TrackByFunction<V>? = definedExternally): DefaultIterableDiffer<V>
//}
//
//open external class ɵangular_packages_core_core_m<K, V> : KeyValueDifferFactory {
//    override fun supports(obj: Any): Boolean
//    override fun <K, V> create(): KeyValueDiffer<K, V>
//}
//
//external fun ɵangular_packages_core_core_n(): IterableDiffers
//
//external fun ɵangular_packages_core_core_o(): KeyValueDiffers
//
//external fun ɵangular_packages_core_core_p(locale: String? = definedExternally): String
//
//external var ɵangular_packages_core_core_q: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>
//
//external fun ɵangular_packages_core_core_r(ngZone: NgZone): (fn: () -> Unit) -> Unit
//
//external var ɵangular_packages_core_core_s: Boolean
//
//external fun ɵangular_packages_core_core_t(): Boolean
//
//external fun ɵangular_packages_core_core_u(signature: String, flags: Any? = definedExternally): Any
//
//external fun <T> ɵangular_packages_core_core_v(scope: Scope)
//
//external fun <T> ɵangular_packages_core_core_v(scope: Scope, returnValue: T? = definedExternally): T
//
//external fun ɵangular_packages_core_core_w(rangeType: String, action: String): Range
//
//external fun ɵangular_packages_core_core_x(range: Range)
//
//external fun ɵangular_packages_core_core_y(
//    checkIndex: Number,
//    flags: ɵNodeFlags,
//    matchedQueriesDsl: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    childCount: Number,
//    token: Any,
//    value: Any,
//    deps: Array<dynamic /* dynamic | Any */>,
//    bindings: Array<BindingDef>? = definedExternally,
//    outputs: Array<OutputDef>? = definedExternally
//): NodeDef
//
//open external class ɵangular_packages_core_core_z {
//    open var view: ViewData
//    open var nodeIndex: Number?
//    open var injector: Injector
//    open var component: Any
//    open var providerTokens: Array<Any>
//    open var references: Json
//    open var context: Any
//    open var componentRenderElement: Any
//    open var renderNode: Any
//    open fun logError(console: Console, vararg values: Any)
//}
//
//external object ɵAPP_ID_RANDOM_PROVIDER {
//    var provide: InjectionToken<String>
//    var useFactory: Any
//    var deps: Array<Any>
//}
//
//external var ɵAPP_ROOT: InjectionToken<Boolean>
//
//external enum class ɵArgumentType {
//    Inline /* = 0 */,
//    Dynamic /* = 1 */
//}
//
//external enum class ɵAttributeMarker {
//    NamespaceURI /* = 0 */,
//    Classes /* = 1 */,
//    Styles /* = 2 */,
//    Bindings /* = 3 */,
//    Template /* = 4 */,
//    ProjectAs /* = 5 */,
//    I18n /* = 6 */
//}
//
//external enum class ɵBindingFlags {
//    TypeElementAttribute /* = 1 */,
//    TypeElementClass /* = 2 */,
//    TypeElementStyle /* = 4 */,
//    TypeProperty /* = 8 */,
//    SyntheticProperty /* = 16 */,
//    SyntheticHostProperty /* = 32 */,
//    CatSyntheticProperty /* = 48 */,
//    Types /* = 15 */
//}
//
//external fun ɵbypassSanitizationTrustHtml(trustedHtml: String): TrustedHtmlString
//
//external fun ɵbypassSanitizationTrustResourceUrl(trustedResourceUrl: String): TrustedResourceUrlString
//
//external fun ɵbypassSanitizationTrustScript(trustedScript: String): TrustedScriptString
//
//external fun ɵbypassSanitizationTrustStyle(trustedStyle: String): TrustedStyleString
//
//external fun ɵbypassSanitizationTrustUrl(trustedUrl: String): TrustedUrlString
//
//external fun ɵccf(
//    selector: String,
//    componentType: Type<Any>,
//    viewDefFactory: ViewDefinitionFactory,
//    inputs: `T$5`,
//    outputs: `T$5`,
//    ngContentSelectors: Array<String>
//): ComponentFactory<Any>
//
//external fun ɵccf(
//    selector: String,
//    componentType: Type<Any>,
//    viewDefFactory: ViewDefinitionFactory,
//    inputs: Nothing?,
//    outputs: `T$5`,
//    ngContentSelectors: Array<String>
//): ComponentFactory<Any>
//
//external enum class ɵChangeDetectorStatus {
//    CheckOnce /* = 0 */,
//    Checked /* = 1 */,
//    CheckAlways /* = 2 */,
//    Detached /* = 3 */,
//    Errored /* = 4 */,
//    Destroyed /* = 5 */
//}
//
//external fun ɵclearOverrides()
//
//external fun ɵclearResolutionOfComponentResourcesQueue(): Map<Type<Any>, Component>
//
//external fun ɵcmf(
//    ngModuleType: Type<Any>,
//    bootstrapComponents: Array<Type<Any>>,
//    defFactory: NgModuleDefinitionFactory
//): NgModuleFactory<Any>
//
//open external class ɵCodegenComponentFactoryResolver(
//    factories: Array<ComponentFactory<Any>>,
//    _parent: ComponentFactoryResolver,
//    _ngModule: NgModuleRef<Any>
//) : ComponentFactoryResolver {
//    open var _parent: Any
//    open var _ngModule: Any
//    open var _factories: Any
//    open fun <T> resolveComponentFactory(component: Any): ComponentFactory<T>
//    override fun <T> resolveComponentFactory(component: Type<T>): ComponentFactory<T>
//}
//
//external fun ɵcompileComponent(type: Type<Any>, metadata: Component)
//
//external fun ɵcompileDirective(type: Type<Any>, directive: Directive)
//
//external fun ɵcompileNgModule(moduleType: Type<Any>, ngModule: NgModule? = definedExternally)
//
//external fun ɵcompileNgModuleDefs(
//    moduleType: ɵNgModuleType<Any>,
//    ngModule: NgModule,
//    allowDuplicateDeclarationsInRoot: Boolean? = definedExternally
//)
//
//external fun <M> ɵcompileNgModuleFactory__POST_R3__(
//    injector: Injector,
//    options: CompilerOptions,
//    moduleType: Type<M>
//): Promise<NgModuleFactory<M>>
//
//external fun ɵcompilePipe(type: Type<Any>, meta: Pipe)
//
//external var ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__: (moduleType: Type<T>) -> Promise<ModuleWithComponentFactories<T>>
//
//external var ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__: (moduleType: Type<T>) -> ModuleWithComponentFactories<T>
//
//external var ɵCompiler_compileModuleAsync__POST_R3__: (moduleType: Type<T>) -> Promise<NgModuleFactory<T>>
//
//external var ɵCompiler_compileModuleSync__POST_R3__: (moduleType: Type<T>) -> NgModuleFactory<T>
//
//external interface ɵComponentDef<T> : ɵDirectiveDef<T> {
//    var id: String
//    var template: ComponentTemplate<T>
//    var ngContentSelectors: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var styles: Array<String>
//    var consts: Number
//    var vars: Number
//    override var viewQuery: ViewQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var encapsulation: ViewEncapsulation
//    var data: Json
//    var onPush: Boolean
//    var directiveDefs: dynamic /* () -> DirectiveDefList | DirectiveDefList */
//        get() = definedExternally
//        set(value) = definedExternally
//    var pipeDefs: dynamic /* () -> PipeDefList | PipeDefList */
//        get() = definedExternally
//        set(value) = definedExternally
//    var schemas: Array<SchemaMetadata>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var tView: TView?
//        get() = definedExternally
//        set(value) = definedExternally
//    var `_`: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ɵComponentType<T> : Type<T> {
//    var ngComponentDef: Any
//}
//
//open external class ɵConsole {
//    open fun log(message: String)
//    open fun warn(message: String)
//}
//
//external fun ɵcreateInjector(
//    defType: Any,
//    parent: Injector? = definedExternally,
//    additionalProviders: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>? = definedExternally,
//    name: String? = definedExternally
//): Injector
//
//external interface `T$18` {
//    var styles: Array<dynamic /* String | Array<Any> */>
//    var encapsulation: ViewEncapsulation
//    var data: `T$15`
//}
//
//external fun ɵcrt(values: `T$18`): RendererType2
//
//typealias ɵCssSelectorList = Array<CssSelector>
//
//external var ɵDEFAULT_LOCALE_ID: Any
//
//external var ɵdefaultIterableDiffers: IterableDiffers
//
//external var ɵdefaultKeyValueDiffers: KeyValueDiffers
//
//external enum class ɵDepFlags {
//    None /* = 0 */,
//    SkipSelf /* = 1 */,
//    Optional /* = 2 */,
//    Self /* = 4 */,
//    Value /* = 8 */
//}
//
//external fun <T> ɵdetectChanges(component: T)
//
//external fun ɵdevModeEqual(a: Any, b: Any): Boolean
//
//external interface `T$19`
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$19`.get(name: String): dynamic /* JsTuple<Number, String> */ = asDynamic()[name]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$19`.set(name: String, value: dynamic /* JsTuple<Number, String> */) {
//    asDynamic()[name] = value
//}
//
//external fun ɵdid(
//    checkIndex: Number,
//    flags: ɵNodeFlags,
//    matchedQueries: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    childCount: Number,
//    ctor: Any,
//    deps: Array<dynamic /* dynamic | Any */>,
//    props: Nothing? = definedExternally,
//    outputs: Nothing? = definedExternally
//): NodeDef
//
//external fun ɵdid(
//    checkIndex: Number,
//    flags: ɵNodeFlags,
//    matchedQueries: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    childCount: Number,
//    ctor: Any,
//    deps: Array<dynamic /* dynamic | Any */>,
//    props: Nothing? = definedExternally,
//    outputs: `T$5`? = definedExternally
//): NodeDef
//
//external fun ɵdid(
//    checkIndex: Number,
//    flags: ɵNodeFlags,
//    matchedQueries: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    childCount: Number,
//    ctor: Any,
//    deps: Array<dynamic /* dynamic | Any */>,
//    props: `T$19`? = definedExternally,
//    outputs: Nothing? = definedExternally
//): NodeDef
//
//external fun ɵdid(
//    checkIndex: Number,
//    flags: ɵNodeFlags,
//    matchedQueries: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    childCount: Number,
//    ctor: Any,
//    deps: Array<dynamic /* dynamic | Any */>,
//    props: `T$19`? = definedExternally,
//    outputs: `T$5`? = definedExternally
//): NodeDef
//
//external interface ɵDirectiveDef<T> : ɵɵBaseDef<T> {
//    var type: Any
//    var providersResolver: ((def: ɵDirectiveDef<U>, processProvidersFn: ProcessProvidersFunction? /* = null */) -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var selectors: ɵCssSelectorList
//    var exportAs: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var factory: FactoryFn<T>
//    var onChanges: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var onInit: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var doCheck: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var afterContentInit: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var afterContentChecked: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var afterViewInit: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var afterViewChecked: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var onDestroy: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//    var features: Array<DirectiveDefFeature>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var setInput: ((self: ɵDirectiveDef<U>, instance: U, value: Any, publicName: String, privateName: String) -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ɵDirectiveType<T> : Type<T> {
//    var ngDirectiveDef: Any
//}
//
//external interface ɵDirectRenderer {
//    fun remove(node: Any)
//    fun appendChild(node: Any, parent: Any)
//    fun insertBefore(node: Any, refNode: Any)
//    fun nextSibling(node: Any): Any
//    fun parentElement(node: Any): Any
//}
//
//external fun ɵeld(
//    checkIndex: Number,
//    flags: ɵNodeFlags,
//    matchedQueriesDsl: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    ngContentIndex: Number?,
//    childCount: Number,
//    namespaceAndName: String?,
//    fixedAttrs: Array<dynamic /* JsTuple<String, String> */>? = definedExternally,
//    bindings: Array<dynamic /* JsTuple<ɵBindingFlags, String, dynamic> */>? = definedExternally,
//    outputs: Array<dynamic /* JsTuple<String, String> */>? = definedExternally,
//    handleEvent: ElementHandleEventFn? = definedExternally,
//    componentView: ViewDefinitionFactory? = definedExternally,
//    componentRendererType: RendererType2? = definedExternally
//): NodeDef
//
//external var ɵEMPTY_ARRAY: Array<Any>
//
//external var ɵEMPTY_MAP: Json
//
//external fun ɵfindLocaleData(locale: String): Any
//
//external fun ɵflushModuleScopingQueueAsMuchAsPossible()
//
//external fun ɵgetComponentViewDefinitionFactory(componentFactory: ComponentFactory<Any>): ViewDefinitionFactory
//
//external fun ɵgetDebugNode__POST_R3__(nativeNode: Element): DebugElement__POST_R3__
//
//external fun ɵgetDebugNode__POST_R3__(nativeNode: Node): DebugNode__POST_R3__
//
//external fun ɵgetDebugNode__POST_R3__(nativeNode: Nothing?): Nothing?
//
//external fun ɵgetDirectives(target: Any): Array<Any>
//
//external fun <T> ɵgetHostElement(directive: T): Element
//
//external fun <T> ɵgetInjectableDef(type: Any): ɵɵInjectableDef<T>?
//
//external fun ɵgetLContext(target: Any): ɵLContext?
//
//external fun ɵgetLocalePluralCase(locale: String): (value: Number) -> Number
//
//external fun ɵgetModuleFactory__POST_R3__(id: String): NgModuleFactory<Any>
//
//typealias ɵGetterFn = (obj: Any) -> Any
//
//external var ɵglobal: Any
//
//external fun ɵi18nConfigureLocalize(options: I18nLocalizeOptions? = definedExternally)
//
//external fun ɵinitServicesIfNeeded()
//
//external fun ɵINJECTOR_IMPL__POST_R3__(
//    providers: Array<dynamic /* ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | Array<Any> */>,
//    parent: Injector?,
//    name: String
//): Injector
//
//external fun ɵinlineInterpolate(
//    valueCount: Number,
//    c0: String,
//    a1: Any,
//    c1: String,
//    a2: Any? = definedExternally,
//    c2: String? = definedExternally,
//    a3: Any? = definedExternally,
//    c3: String? = definedExternally,
//    a4: Any? = definedExternally,
//    c4: String? = definedExternally,
//    a5: Any? = definedExternally,
//    c5: String? = definedExternally,
//    a6: Any? = definedExternally,
//    c6: String? = definedExternally,
//    a7: Any? = definedExternally,
//    c7: String? = definedExternally,
//    a8: Any? = definedExternally,
//    c8: String? = definedExternally,
//    a9: Any? = definedExternally,
//    c9: String? = definedExternally
//): String
//
//external fun ɵinterpolate(valueCount: Number, constAndInterp: Array<String>): String
//
//external fun <C> ɵisBoundToModule__POST_R3__(cf: ComponentFactory<C>): Boolean
//
//external fun ɵisDefaultChangeDetectionStrategy(changeDetectionStrategy: ChangeDetectionStrategy): Boolean
//
//external fun ɵisListLikeIterable(obj: Any): Boolean
//
//external fun ɵisObservable(obj: Any): Boolean
//
//external fun ɵisObservable(obj: Observable<Any>): Boolean
//
//external fun ɵisPromise(obj: Any): Boolean
//
//external var ɵivyEnabled: Any
//
//external interface ɵLContext {
//    var lView: ɵangular_packages_core_core_bj
//    var nodeIndex: Number
//    var native: RNode
//    var component: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var directives: Array<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var localRefs: Json?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun ɵLifecycleHooksFeature(component: Any, def: ɵComponentDef<Any>)
//
//external var ɵLOCALE_DATA: Json
//
//external enum class ɵLocaleDataIndex {
//    LocaleId /* = 0 */,
//    DayPeriodsFormat /* = 1 */,
//    DayPeriodsStandalone /* = 2 */,
//    DaysFormat /* = 3 */,
//    DaysStandalone /* = 4 */,
//    MonthsFormat /* = 5 */,
//    MonthsStandalone /* = 6 */,
//    Eras /* = 7 */,
//    FirstDayOfWeek /* = 8 */,
//    WeekendRange /* = 9 */,
//    DateFormat /* = 10 */,
//    TimeFormat /* = 11 */,
//    DateTimeFormat /* = 12 */,
//    NumberSymbols /* = 13 */,
//    NumberFormats /* = 14 */,
//    CurrencySymbol /* = 15 */,
//    CurrencyName /* = 16 */,
//    Currencies /* = 17 */,
//    PluralCase /* = 18 */,
//    ExtraData /* = 19 */
//}
//
//external fun ɵlooseIdentical(a: Any, b: Any): Boolean
//
//external interface `T$20`
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$20`.invoke(vararg args: Any): Any {
//    asDynamic()(args)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$20`.invoke(vararg args: Any): (cls: Any) -> Any {
//    asDynamic()(args)
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$20`.invoke(args: Any): Any {
//    asDynamic()(args)
//}
//
//external fun <T> ɵmakeDecorator(
//    name: String,
//    props: ((args: Array<Any>) -> Any)? = definedExternally,
//    parentClass: Any? = definedExternally,
//    additionalProcessing: ((type: Type<T>) -> Unit)? = definedExternally,
//    typeFn: ((type: Type<T>, args: Array<Any>) -> Unit)? = definedExternally
//): `T$20`
//
//external fun <T> ɵmarkDirty(component: T)
//
//typealias ɵMethodFn = (obj: Any, args: Array<Any>) -> Any
//
//external fun ɵmod(providers: Array<NgModuleProviderDef>): NgModuleDefinition
//
//external fun ɵmpd(
//    flags: ɵNodeFlags,
//    token: Any,
//    value: Any,
//    deps: Array<dynamic /* dynamic | Any */>
//): NgModuleProviderDef
//
//external fun ɵncd(ngContentIndex: Number?, index: Number): NodeDef
//
//external var ɵNG_BASE_DEF: String
//
//external var ɵNG_COMPONENT_DEF: String
//
//external var ɵNG_DIRECTIVE_DEF: String
//
//external var ɵNG_ELEMENT_ID: String
//
//external var ɵNG_INJECTABLE_DEF: String
//
//external var ɵNG_INJECTOR_DEF: String
//
//external var ɵNG_MODULE_DEF: String
//
//external var ɵNG_PIPE_DEF: String
//
//external interface ɵNgModuleDef<T> {
//    var type: T
//    var bootstrap: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var declarations: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var imports: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var exports: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var transitiveCompileScopes: ɵNgModuleTransitiveScopes?
//        get() = definedExternally
//        set(value) = definedExternally
//    var schemas: Array<SchemaMetadata>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var id: String?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//open external class ɵNgModuleFactory<T>(moduleType: Type<T>) : NgModuleFactory<T> {
//    override var moduleType: Any
//    override fun create(parentInjector: Injector?): NgModuleRef<T>
//}
//
//external interface `T$21` {
//    var directives: Any
//    var pipes: Any
//}
//
//external interface ɵNgModuleTransitiveScopes {
//    var compilation: `T$21`
//    var exported: `T$21`
//    var schemas: Array<SchemaMetadata>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ɵNgModuleType<T> : Type<T> {
//    var ngModuleDef: ɵNgModuleDef<T>
//}
//
//@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
//external interface ɵNO_CHANGE {
//    var brand: String /* 'NO_CHANGE' */
//
//    companion object : ɵNO_CHANGE by definedExternally
//}
//
//external enum class ɵNodeFlags {
//    None /* = 0 */,
//    TypeElement /* = 1 */,
//    TypeText /* = 2 */,
//    ProjectedTemplate /* = 4 */,
//    CatRenderNode /* = 3 */,
//    TypeNgContent /* = 8 */,
//    TypePipe /* = 16 */,
//    TypePureArray /* = 32 */,
//    TypePureObject /* = 64 */,
//    TypePurePipe /* = 128 */,
//    CatPureExpression /* = 224 */,
//    TypeValueProvider /* = 256 */,
//    TypeClassProvider /* = 512 */,
//    TypeFactoryProvider /* = 1024 */,
//    TypeUseExistingProvider /* = 2048 */,
//    LazyProvider /* = 4096 */,
//    PrivateProvider /* = 8192 */,
//    TypeDirective /* = 16384 */,
//    Component /* = 32768 */,
//    CatProviderNoDirective /* = 3840 */,
//    CatProvider /* = 20224 */,
//    OnInit /* = 65536 */,
//    OnDestroy /* = 131072 */,
//    DoCheck /* = 262144 */,
//    OnChanges /* = 524288 */,
//    AfterContentInit /* = 1048576 */,
//    AfterContentChecked /* = 2097152 */,
//    AfterViewInit /* = 4194304 */,
//    AfterViewChecked /* = 8388608 */,
//    EmbeddedViews /* = 16777216 */,
//    ComponentView /* = 33554432 */,
//    TypeContentQuery /* = 67108864 */,
//    TypeViewQuery /* = 134217728 */,
//    StaticQuery /* = 268435456 */,
//    DynamicQuery /* = 536870912 */,
//    TypeNgModule /* = 1073741824 */,
//    CatQuery /* = 201326592 */,
//    Types /* = 201347067 */
//}
//
//open external class ɵNoopNgZone : NgZone {
//    override var hasPendingMicrotasks: Boolean
//    override var hasPendingMacrotasks: Boolean
//    override var isStable: Boolean
//    override var onUnstable: EventEmitter<Any>
//    override var onMicrotaskEmpty: EventEmitter<Any>
//    override var onStable: EventEmitter<Any>
//    override var onError: EventEmitter<Any>
//    open fun run(fn: () -> Any): Any
//    open fun runGuarded(fn: () -> Any): Any
//    open fun runOutsideAngular(fn: () -> Any): Any
//    open fun <T> runTask(fn: () -> Any): Any
//}
//
//external object ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR
//
//external fun ɵnov(view: ViewData, index: Number): Any
//
//external fun ɵoverrideComponentView(comp: Type<Any>, componentFactory: ComponentFactory<Any>)
//
//external fun ɵoverrideProvider(override: ProviderOverride)
//
//external fun ɵpad(checkIndex: Number, argCount: Number): NodeDef
//
//external fun <C> ɵpatchComponentDefWithScope(
//    componentDef: ɵComponentDef<C>,
//    transitiveScopes: ɵNgModuleTransitiveScopes
//)
//
//external fun ɵpid(flags: ɵNodeFlags, ctor: Any, deps: Array<dynamic /* dynamic | Any */>): NodeDef
//
//external interface ɵPipeDef<T> {
//    var name: String
//    var factory: FactoryFn<T>
//    var pure: Boolean
//    var onDestroy: (() -> Unit)?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external interface ɵPlayer {
//    var parent: ɵPlayer?
//        get() = definedExternally
//        set(value) = definedExternally
//    var state: ɵPlayState
//    fun play()
//    fun pause()
//    fun finish()
//    fun destroy()
//    fun addEventListener(state: ɵPlayState, cb: (data: Any? /* = null */) -> Any)
//    fun addEventListener(state: String, cb: (data: Any? /* = null */) -> Any)
//}
//
//external interface ɵPlayerFactory {
//    var __brand__: String /* 'Brand for PlayerFactory that nothing will match' */
//}
//
//external interface ɵPlayerHandler {
//    fun flushPlayers()
//    fun queuePlayer(player: ɵPlayer, context: ComponentInstance)
//    fun queuePlayer(player: ɵPlayer, context: DirectiveInstance)
//    fun queuePlayer(player: ɵPlayer, context: HTMLElement)
//}
//
//external enum class ɵPlayState {
//    Pending /* = 0 */,
//    Running /* = 1 */,
//    Paused /* = 2 */,
//    Finished /* = 100 */,
//    Destroyed /* = 200 */
//}
//
//external interface `T$22`
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$22`.get(p: String): Number? = asDynamic()[p]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$22`.set(p: String, value: Number) {
//    asDynamic()[p] = value
//}
//
//external fun ɵpod(checkIndex: Number, propToIndex: `T$22`): NodeDef
//
//external fun ɵppd(checkIndex: Number, argCount: Number): NodeDef
//
//external fun ɵprd(
//    flags: ɵNodeFlags,
//    matchedQueries: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    token: Any,
//    value: Any,
//    deps: Array<dynamic /* dynamic | Any */>
//): NodeDef
//
//external fun ɵpublishDefaultGlobalUtils()
//
//external fun ɵpublishGlobalUtil(name: String, fn: Function<*>)
//
//external interface `T$23`
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$23`.get(propName: String): ɵQueryBindingType? = asDynamic()[propName]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$23`.set(propName: String, value: ɵQueryBindingType) {
//    asDynamic()[propName] = value
//}
//
//external fun ɵqud(flags: ɵNodeFlags, id: Number, bindings: `T$23`): NodeDef
//
//external enum class ɵQueryBindingType {
//    First /* = 0 */,
//    All /* = 1 */
//}
//
//external enum class ɵQueryValueType {
//    ElementRef /* = 0 */,
//    RenderElement /* = 1 */,
//    TemplateRef /* = 2 */,
//    ViewContainerRef /* = 3 */,
//    Provider /* = 4 */
//}
//
//open external class ɵReflectionCapabilities(reflect: Any? = definedExternally) : PlatformReflectionCapabilities {
//    open var _reflect: Any
//    override fun isReflectionEnabled(): Boolean
//    open fun <T> factory(t: Type<T>): (args: Array<Any>) -> T
//    open var _ownParameters: Any
//    override fun parameters(type: Type<Any>): Array<Array<Any>>
//    open var _ownAnnotations: Any
//    override fun annotations(typeOrFunc: Type<Any>): Array<Any>
//    open var _ownPropMetadata: Any
//    open fun propMetadata(typeOrFunc: Any): `T$15`
//    override fun propMetadata(typeOrFunc: Type<Any>): `T$15`
//    open fun ownPropMetadata(typeOrFunc: Any): `T$15`
//    override fun hasLifecycleHook(type: Any, lcProperty: String): Boolean
//    override fun guards(type: Any): Json
//    override fun getter(name: String): ɵGetterFn
//    override fun setter(name: String): ɵSetterFn
//    override fun method(name: String): ɵMethodFn
//    open fun importUri(type: Any): String
//    override fun importUri(type: Type<Any>): String
//    open fun resourceUri(type: Any): String
//    override fun resourceUri(type: Type<Any>): String
//    override fun resolveIdentifier(name: String, moduleUrl: String, members: Array<String>, runtime: Any): Any
//    override fun resolveEnum(enumIdentifier: Any, name: String): Any
//}
//
//external fun ɵregisterModuleFactory(id: String, factory: NgModuleFactory<Any>)
//
//external fun ɵregisterNgModuleType(ngModuleType: ɵNgModuleType<Any>)
//
//open external class ɵRender3ComponentFactory<T>(
//    componentDef: ɵComponentDef<Any>,
//    ngModule: NgModuleRef<Any>? = definedExternally
//) : ComponentFactory<T> {
//    open var componentDef: Any
//    open var ngModule: Any
//    override var selector: String
//    override var componentType: Any
//    override var ngContentSelectors: Array<String>
//    open var isBoundToModule: Boolean
//    override var inputs: Array<`T$0`>
//    override var outputs: Array<`T$0`>
//    open fun create(
//        injector: Injector,
//        projectableNodes: Array<Array<Any>>? = definedExternally,
//        rootSelectorOrNode: Any? = definedExternally,
//        ngModule: NgModuleRef<Any>? = definedExternally
//    ): ComponentRef<T>
//}
//
//open external class ɵRender3ComponentRef<T> : ComponentRef<T> {
//    constructor(
//        componentType: Type<T>,
//        instance: T,
//        location: ElementRef<Any>,
//        _rootLView: ɵangular_packages_core_core_bj,
//        _tNode: ɵangular_packages_core_core_bf
//    )
//
//    constructor(
//        componentType: Type<T>,
//        instance: T,
//        location: ElementRef<Any>,
//        _rootLView: ɵangular_packages_core_core_bj,
//        _tNode: TContainerNode
//    )
//
//    constructor(
//        componentType: Type<T>,
//        instance: T,
//        location: ElementRef<Any>,
//        _rootLView: ɵangular_packages_core_core_bj,
//        _tNode: TElementContainerNode
//    )
//
//    override var location: ElementRef<Any>
//    open var _rootLView: Any
//    open var _tNode: Any
//    open var destroyCbs: Array<() -> Unit>?
//    open var instance: T
//    open var hostView: ViewRef_2<T>
//    override var changeDetectorRef: ChangeDetectorRef
//    override var componentType: Any
//    override var injector: Injector
//    override fun destroy()
//    override fun onDestroy(callback: () -> Unit)
//}
//
//open external class ɵRender3NgModuleRef<T>(ngModuleType: Type<T>, _parent: Injector?) : NgModuleRef<T>,
//    InternalNgModuleRef<T> {
//    open var _parent: Injector?
//    override var _bootstrapComponents: Array<Type<Any>>
//    open var _r3Injector: R3Injector
//    override var injector: Injector
//    override var instance: T
//    open var destroyCbs: Array<() -> Unit>?
//    open fun get(
//        token: Any,
//        notFoundValue: Any? = definedExternally,
//        injectFlags: InjectFlags? = definedExternally
//    ): Any
//
//    override var componentFactoryResolver: ComponentFactoryResolver
//    override fun destroy()
//    override fun onDestroy(callback: () -> Unit)
//}
//
//external fun <T> ɵrenderComponent(
//    componentType: ɵComponentType<T>,
//    opts: CreateComponentOptions? = definedExternally
//): T
//
//external fun <T> ɵrenderComponent(componentType: Type<T>, opts: CreateComponentOptions? = definedExternally): T
//
//open external class ɵRenderDebugInfo {
//    open var injector: Injector
//    open var component: Any
//    open var providerTokens: Array<Any>
//    open var references: Json
//    open var context: Any
//    open var source: String
//}
//
//external enum class ɵRenderFlags {
//    Create /* = 1 */,
//    Update /* = 2 */
//}
//
//external fun ɵresetCompiledComponents()
//
//external interface `T$24` {
//    fun text(): Promise<String>
//}
//
//external fun ɵresolveComponentResources(resourceResolver: (url: String) -> Promise<dynamic /* String | `T$24` */>): Promise<Unit>
//
//external fun ɵsetClassMetadata(
//    type: Type<Any>,
//    decorators: Array<Any>?,
//    ctorParameters: (() -> Array<Any>)?,
//    propDecorators: Json?
//)
//
//external fun ɵsetCurrentInjector(injector: Injector?): Injector?
//
//external fun ɵsetLocaleId(localeId: String)
//
//typealias ɵSetterFn = (obj: Any, value: Any) -> Unit
//
//external fun <T> ɵstore(index: Number, value: T)
//
//external fun ɵstringify(token: Any): String
//
//external var ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__: Any
//
//external var ɵSWITCH_COMPILE_COMPONENT__POST_R3__: Any
//
//external var ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__: Any
//
//external var ɵSWITCH_COMPILE_INJECTABLE__POST_R3__: Any
//
//external var ɵSWITCH_COMPILE_NGMODULE__POST_R3__: Any
//
//external var ɵSWITCH_COMPILE_PIPE__POST_R3__: Any
//
//external var ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__: Any
//
//external var ɵSWITCH_IVY_ENABLED__POST_R3__: Any
//
//external var ɵSWITCH_RENDERER2_FACTORY__POST_R3__: Any
//
//external var ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__: Any
//
//external var ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__: Any
//
//external fun ɵted(checkIndex: Number, ngContentIndex: Number?, staticText: Array<String>): NodeDef
//
//external fun <T> ɵtransitiveScopesFor(
//    moduleType: Type<T>,
//    processNgModuleFn: ((ngModule: ɵNgModuleType<Any>) -> Unit)? = definedExternally
//): ɵNgModuleTransitiveScopes
//
//external fun ɵunv(view: ViewData, nodeIdx: Number, bindingIdx: Number, value: Any): Any
//
//external fun ɵvid(
//    flags: ɵViewFlags,
//    nodes: Array<NodeDef>,
//    updateDirectives: ViewUpdateFn? = definedExternally,
//    updateRenderer: ViewUpdateFn? = definedExternally
//): ɵViewDefinition
//
//external interface ɵViewDefinition : Definition<ViewDefinitionFactory> {
//    var flags: ɵViewFlags
//    var updateDirectives: ViewUpdateFn
//    var updateRenderer: ViewUpdateFn
//    var handleEvent: ViewHandleEventFn
//    var nodes: Array<NodeDef>
//    var nodeFlags: ɵNodeFlags
//    var rootNodeFlags: ɵNodeFlags
//    var lastRenderRootNode: NodeDef?
//        get() = definedExternally
//        set(value) = definedExternally
//    var bindingCount: Number
//    var outputCount: Number
//    var nodeMatchedQueries: Number
//}
//
//external enum class ɵViewFlags {
//    None /* = 0 */,
//    OnPush /* = 2 */
//}
//
//external fun ɵwhenRendered(component: Any): Promise<Nothing?>
//
//external fun ɵɵallocHostVars(count: Number)
//
//external fun ɵɵattribute(
//    name: String,
//    value: Any,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate1(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate2(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate3(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate4(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate5(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate6(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate7(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolate8(
//    attrName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    i6: String,
//    v7: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵattributeInterpolateV(
//    attrName: String,
//    values: Array<Any>,
//    sanitizer: SanitizerFn? = definedExternally,
//    namespace: String? = definedExternally
//): TsickleIssue1009
//
//external interface ɵɵBaseDef<T> {
//    var inputs: Any
//    var declaredInputs: Any
//    var outputs: Any
//    var contentQueries: ContentQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewQuery: ViewQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var hostBindings: HostBindingsFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun ɵɵclassMap(classes: Json)
//
//external fun ɵɵclassMap(classes: ɵNO_CHANGE)
//
//external fun ɵɵclassMap(classes: String)
//
//external fun ɵɵclassMap(classes: Nothing?)
//
//external fun ɵɵclassMapInterpolate1(prefix: String, v0: Any, suffix: String)
//
//external fun ɵɵclassMapInterpolate2(prefix: String, v0: Any, i0: String, v1: Any, suffix: String)
//
//external fun ɵɵclassMapInterpolate3(prefix: String, v0: Any, i0: String, v1: Any, i1: String, v2: Any, suffix: String)
//
//external fun ɵɵclassMapInterpolate4(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    suffix: String
//)
//
//external fun ɵɵclassMapInterpolate5(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    suffix: String
//)
//
//external fun ɵɵclassMapInterpolate6(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    suffix: String
//)
//
//external fun ɵɵclassMapInterpolate7(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    suffix: String
//)
//
//external fun ɵɵclassMapInterpolate8(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    i6: String,
//    v7: Any,
//    suffix: String
//)
//
//external fun ɵɵclassMapInterpolateV(values: Array<Any>)
//
//external fun ɵɵclassProp(className: String, value: Boolean?)
//
//typealias ɵɵComponentDefWithMeta<T, Selector, ExportAs, InputMap, OutputMap, QueryFields> = ɵComponentDef<T>
//
//external fun ɵɵcomponentHostSyntheticListener(
//    eventName: String,
//    listenerFn: (e: Any? /* = null */) -> Any,
//    useCapture: Boolean? = definedExternally,
//    eventTargetResolver: GlobalTargetResolver? = definedExternally
//)
//
//external fun ɵɵcontainer(index: Number)
//
//external fun ɵɵcontainerRefreshEnd()
//
//external fun ɵɵcontainerRefreshStart(index: Number)
//
//external fun <T> ɵɵcontentQuery(
//    directiveIndex: Number,
//    predicate: Type<Any>,
//    descend: Boolean,
//    read: Any? = definedExternally
//)
//
//external fun <T> ɵɵcontentQuery(
//    directiveIndex: Number,
//    predicate: Array<String>,
//    descend: Boolean,
//    read: Any? = definedExternally
//)
//
//external var ɵɵdefaultStyleSanitizer: StyleSanitizeFn
//
//external interface `T$25` {
//    var inputs: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var outputs: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var contentQueries: ContentQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewQuery: ViewQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var hostBindings: HostBindingsFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun <T> ɵɵdefineBase(baseDefinition: `T$25`): ɵɵBaseDef<T>
//
//external interface `T$26` {
//    var type: Any
//    var selectors: ɵCssSelectorList
//    var factory: FactoryFn<T>
//    var consts: Number
//    var vars: Number
//    var inputs: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var outputs: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var hostBindings: HostBindingsFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var contentQueries: ContentQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var exportAs: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var template: ComponentTemplate<T>
//    var ngContentSelectors: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewQuery: ViewQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var features: Array<ComponentDefFeature>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var encapsulation: ViewEncapsulation?
//        get() = definedExternally
//        set(value) = definedExternally
//    var data: Json?
//        get() = definedExternally
//        set(value) = definedExternally
//    var styles: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var changeDetection: ChangeDetectionStrategy?
//        get() = definedExternally
//        set(value) = definedExternally
//    var directives: dynamic /* () -> DirectiveTypeList | DirectiveTypeList */
//        get() = definedExternally
//        set(value) = definedExternally
//    var pipes: dynamic /* () -> PipeTypeList | PipeTypeList */
//        get() = definedExternally
//        set(value) = definedExternally
//    var schemas: Array<SchemaMetadata>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun <T> ɵɵdefineComponent(componentDefinition: `T$26`): Any
//
//external interface `T$27` {
//    var type: Any
//    var selectors: Array<Array<dynamic /* String | SelectorFlags */>>
//    var factory: FactoryFn<T>
//    var inputs: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var outputs: Any?
//        get() = definedExternally
//        set(value) = definedExternally
//    var features: Array<DirectiveDefFeature>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var hostBindings: HostBindingsFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var contentQueries: ContentQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var viewQuery: ViewQueriesFunction<T>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var exportAs: Array<String>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external var ɵɵdefineDirective: (directiveDefinition: `T$27`) -> Any
//
//external interface `T$28` {
//    var token: Any
//    var providedIn: dynamic /* Type<Any> | 'root' | 'any' | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var factory: () -> T
//}
//
//external fun <T> ɵɵdefineInjectable(opts: `T$28`): Any
//
//external interface `T$29` {
//    var factory: () -> Any
//    var providers: Array<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var imports: Array<Any>?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun ɵɵdefineInjector(options: `T$29`): Any
//
//external interface `T$30`<T> {
//    var type: T
//    var bootstrap: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var declarations: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var imports: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var exports: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var schemas: Array<SchemaMetadata>?
//        get() = definedExternally
//        set(value) = definedExternally
//    var id: String?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun <T> ɵɵdefineNgModule(def: `T$30`<T>): Any
//
//external interface `T$31` {
//    var name: String
//    var type: Any
//    var factory: FactoryFn<T>
//    var pure: Boolean?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun <T> ɵɵdefinePipe(pipeDef: `T$31`): Any
//
//typealias ɵɵDirectiveDefWithMeta<T, Selector, ExportAs, InputMap, OutputMap, QueryFields> = ɵDirectiveDef<T>
//
//external fun <T> ɵɵdirectiveInject(token: Type<T>): T
//
//external fun <T> ɵɵdirectiveInject(token: InjectionToken<T>): T
//
//external fun <T> ɵɵdirectiveInject(token: Type<T>, flags: InjectFlags): T
//
//external fun <T> ɵɵdirectiveInject(token: InjectionToken<T>, flags: InjectFlags): T
//
//external fun ɵɵdisableBindings()
//
//external fun ɵɵelement(
//    index: Number,
//    name: String,
//    attrs: TAttributes? = definedExternally,
//    localRefs: Array<String>? = definedExternally
//)
//
//external fun ɵɵelementContainer(
//    index: Number,
//    attrs: TAttributes? = definedExternally,
//    localRefs: Array<String>? = definedExternally
//)
//
//external fun ɵɵelementContainerEnd()
//
//external fun ɵɵelementContainerStart(
//    index: Number,
//    attrs: TAttributes? = definedExternally,
//    localRefs: Array<String>? = definedExternally
//)
//
//external fun ɵɵelementEnd()
//
//external fun ɵɵelementHostAttrs(attrs: TAttributes)
//
//external fun ɵɵelementStart(
//    index: Number,
//    name: String,
//    attrs: TAttributes? = definedExternally,
//    localRefs: Array<String>? = definedExternally
//)
//
//external fun ɵɵembeddedViewEnd()
//
//external fun ɵɵembeddedViewStart(viewBlockId: Number, consts: Number, vars: Number): ɵRenderFlags
//
//external fun ɵɵenableBindings()
//
//external fun ɵɵgetCurrentView(): OpaqueViewState
//
//external fun <T> ɵɵgetFactoryOf(type: Type<Any>): FactoryFn<T>?
//
//external fun <T> ɵɵgetInheritedFactory(type: Type<Any>): (type: Type<T>) -> T
//
//external fun <T> ɵɵhostProperty(
//    propName: String,
//    value: T,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵi18n(index: Number, message: String, subTemplateIndex: Number? = definedExternally)
//
//external fun ɵɵi18nApply(index: Number)
//
//external fun ɵɵi18nAttributes(index: Number, values: Array<String>)
//
//external fun ɵɵi18nEnd()
//
//external fun <T> ɵɵi18nExp(value: T): TsickleIssue1009
//
//external fun ɵɵi18nLocalize(input: String, placeholders: `T$5`? = definedExternally): String
//
//external interface `T$32`
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$32`.get(key: String): dynamic /* String | Array<String> */ = asDynamic()[key]
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$32`.set(key: String, value: String) {
//    asDynamic()[key] = value
//}
//
//@Suppress("NOTHING_TO_INLINE")
//inline operator fun `T$32`.set(key: String, value: Array<String>) {
//    asDynamic()[key] = value
//}
//
//external fun ɵɵi18nPostprocess(message: String, replacements: `T$32`? = definedExternally): String
//
//external fun ɵɵi18nStart(index: Number, message: String, subTemplateIndex: Number? = definedExternally)
//
//external fun ɵɵInheritDefinitionFeature(definition: ɵDirectiveDef<Any>)
//
//external fun ɵɵInheritDefinitionFeature(definition: ɵComponentDef<Any>)
//
//external fun <T> ɵɵinject(token: Type<T>): T
//
//external fun <T> ɵɵinject(token: InjectionToken<T>): T
//
//external fun <T> ɵɵinject(token: Type<T>, flags: InjectFlags? = definedExternally): T?
//
//external fun <T> ɵɵinject(token: InjectionToken<T>, flags: InjectFlags? = definedExternally): T?
//
//external interface ɵɵInjectableDef<T> {
//    var providedIn: dynamic /* InjectorType<Any> | 'root' | 'any' | Nothing? */
//        get() = definedExternally
//        set(value) = definedExternally
//    var token: Any
//    var factory: (t: Type<Any>? /* = null */) -> T
//    var value: T?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun ɵɵinjectAttribute(attrNameToInject: String): String?
//
//external interface ɵɵInjectorDef<T> {
//    var factory: () -> T
//    var providers: Array<dynamic /* Type<Any> | ValueProvider | ExistingProvider | FactoryProvider | ConstructorProvider | StaticClassProvider | ClassProvider | Array<Any> */>
//    var imports: Array<dynamic /* InjectorType<Any> | InjectorTypeWithProviders<Any> */>
//}
//
//external fun ɵɵinjectPipeChangeDetectorRef(flags: InjectFlags? = definedExternally): ChangeDetectorRef?
//
//external fun ɵɵlistener(
//    eventName: String,
//    listenerFn: (e: Any? /* = null */) -> Any,
//    useCapture: Boolean? = definedExternally,
//    eventTargetResolver: GlobalTargetResolver? = definedExternally
//)
//
//external fun <T> ɵɵload(index: Number): T
//
//external fun <T> ɵɵloadContentQuery(): QueryList<T>
//
//external fun <T> ɵɵloadViewQuery(): QueryList<T>
//
//external fun ɵɵnamespaceHTML()
//
//external fun ɵɵnamespaceMathML()
//
//external fun ɵɵnamespaceSVG()
//
//external fun <T> ɵɵnextContext(level: Number? = definedExternally): T
//
//typealias ɵɵNgModuleDefWithMeta<T, Declarations, Imports, Exports> = ɵNgModuleDef<T>
//
//external fun <T> ɵɵNgOnChangesFeature(): DirectiveDefFeature
//
//external fun ɵɵpipe(index: Number, pipeName: String): Any
//
//external fun ɵɵpipeBind1(index: Number, slotOffset: Number, v1: Any): Any
//
//external fun ɵɵpipeBind2(index: Number, slotOffset: Number, v1: Any, v2: Any): Any
//
//external fun ɵɵpipeBind3(index: Number, slotOffset: Number, v1: Any, v2: Any, v3: Any): Any
//
//external fun ɵɵpipeBind4(index: Number, slotOffset: Number, v1: Any, v2: Any, v3: Any, v4: Any): Any
//
//external fun ɵɵpipeBindV(index: Number, slotOffset: Number, values: dynamic /* JsTuple<Any, Any> */): Any
//
//typealias ɵɵPipeDefWithMeta<T, Name> = ɵPipeDef<T>
//
//external fun ɵɵprojection(
//    nodeIndex: Number,
//    selectorIndex: Number? = definedExternally,
//    attrs: TAttributes? = definedExternally
//)
//
//external fun ɵɵprojectionDef(projectionSlots: ProjectionSlots? = definedExternally)
//
//external fun <T> ɵɵproperty(propName: String, value: T, sanitizer: SanitizerFn? = definedExternally): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate(
//    propName: String,
//    v0: Any,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate1(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate2(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate3(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate4(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate5(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate6(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate7(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolate8(
//    propName: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    i6: String,
//    v7: Any,
//    suffix: String,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵpropertyInterpolateV(
//    propName: String,
//    values: Array<Any>,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun <T> ɵɵProvidersFeature(
//    providers: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>,
//    viewProviders: Array<dynamic /* TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | Array<Any> */>? = definedExternally
//): (definition: ɵDirectiveDef<T>) -> Unit
//
//external fun <T> ɵɵpureFunction0(slotOffset: Number, pureFn: () -> T, thisArg: Any? = definedExternally): T
//
//external fun ɵɵpureFunction1(
//    slotOffset: Number,
//    pureFn: (v: Any) -> Any,
//    exp: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunction2(
//    slotOffset: Number,
//    pureFn: (v1: Any, v2: Any) -> Any,
//    exp1: Any,
//    exp2: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunction3(
//    slotOffset: Number,
//    pureFn: (v1: Any, v2: Any, v3: Any) -> Any,
//    exp1: Any,
//    exp2: Any,
//    exp3: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunction4(
//    slotOffset: Number,
//    pureFn: (v1: Any, v2: Any, v3: Any, v4: Any) -> Any,
//    exp1: Any,
//    exp2: Any,
//    exp3: Any,
//    exp4: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunction5(
//    slotOffset: Number,
//    pureFn: (v1: Any, v2: Any, v3: Any, v4: Any, v5: Any) -> Any,
//    exp1: Any,
//    exp2: Any,
//    exp3: Any,
//    exp4: Any,
//    exp5: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunction6(
//    slotOffset: Number,
//    pureFn: (v1: Any, v2: Any, v3: Any, v4: Any, v5: Any, v6: Any) -> Any,
//    exp1: Any,
//    exp2: Any,
//    exp3: Any,
//    exp4: Any,
//    exp5: Any,
//    exp6: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunction7(
//    slotOffset: Number,
//    pureFn: (v1: Any, v2: Any, v3: Any, v4: Any, v5: Any, v6: Any, v7: Any) -> Any,
//    exp1: Any,
//    exp2: Any,
//    exp3: Any,
//    exp4: Any,
//    exp5: Any,
//    exp6: Any,
//    exp7: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunction8(
//    slotOffset: Number,
//    pureFn: (v1: Any, v2: Any, v3: Any, v4: Any, v5: Any, v6: Any, v7: Any, v8: Any) -> Any,
//    exp1: Any,
//    exp2: Any,
//    exp3: Any,
//    exp4: Any,
//    exp5: Any,
//    exp6: Any,
//    exp7: Any,
//    exp8: Any,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵpureFunctionV(
//    slotOffset: Number,
//    pureFn: (v: Array<Any>) -> Any,
//    exps: Array<Any>,
//    thisArg: Any? = definedExternally
//): Any
//
//external fun ɵɵqueryRefresh(queryList: QueryList<Any>): Boolean
//
//external fun <T> ɵɵreference(index: Number): T
//
//external interface `T$34` {
//    var name: String
//    var target: HTMLElement
//}
//
//external fun ɵɵresolveBody(element: RElement /* RElement & `T$33` */): `T$34`
//
//external interface `T$35` {
//    var name: String
//    var target: Document
//}
//
//external fun ɵɵresolveDocument(element: RElement /* RElement & `T$33` */): `T$35`
//
//external interface `T$36` {
//    var name: String
//    var target: Window?
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun ɵɵresolveWindow(element: RElement /* RElement & `T$33` */): `T$36`
//
//external fun ɵɵrestoreView(viewToRestore: OpaqueViewState)
//
//external fun ɵɵsanitizeHtml(unsafeHtml: Any): String
//
//external fun ɵɵsanitizeResourceUrl(unsafeResourceUrl: Any): String
//
//external fun ɵɵsanitizeScript(unsafeScript: Any): String
//
//external fun ɵɵsanitizeStyle(unsafeStyle: Any): String
//
//external fun ɵɵsanitizeUrl(unsafeUrl: Any): String
//
//external fun ɵɵsanitizeUrlOrResourceUrl(unsafeUrl: Any, tag: String, prop: String): Any
//
//external fun ɵɵselect(index: Number)
//
//external fun ɵɵsetComponentScope(type: ɵComponentType<Any>, directives: Array<Type<Any>>, pipes: Array<Type<Any>>)
//
//external interface `T$37` {
//    var declarations: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var imports: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//    var exports: dynamic /* Array<Type<Any>> | () -> Array<Type<Any>> */
//        get() = definedExternally
//        set(value) = definedExternally
//}
//
//external fun ɵɵsetNgModuleScope(type: Any, scope: `T$37`)
//
//external fun <T> ɵɵstaticContentQuery(
//    directiveIndex: Number,
//    predicate: Type<Any>,
//    descend: Boolean,
//    read: Any? = definedExternally
//)
//
//external fun <T> ɵɵstaticContentQuery(
//    directiveIndex: Number,
//    predicate: Array<String>,
//    descend: Boolean,
//    read: Any? = definedExternally
//)
//
//external fun <T> ɵɵstaticViewQuery(predicate: Type<Any>, descend: Boolean, read: Any? = definedExternally)
//
//external fun <T> ɵɵstaticViewQuery(predicate: Array<String>, descend: Boolean, read: Any? = definedExternally)
//
//external fun ɵɵstyleMap(styles: Json)
//
//external fun ɵɵstyleMap(styles: ɵNO_CHANGE)
//
//external fun ɵɵstyleMap(styles: Nothing?)
//
//external fun ɵɵstyleProp(prop: String, value: String, suffix: String? = definedExternally)
//
//external fun ɵɵstyleProp(prop: String, value: Number, suffix: String? = definedExternally)
//
//external fun ɵɵstyleProp(prop: String, value: String, suffix: String? = definedExternally)
//
//external fun ɵɵstyleProp(prop: String, value: Nothing?, suffix: String? = definedExternally)
//
//external fun ɵɵstylePropInterpolate1(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolate2(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolate3(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolate4(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolate5(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolate6(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolate7(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolate8(
//    prop: String,
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    i6: String,
//    v7: Any,
//    suffix: String,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstylePropInterpolateV(
//    prop: String,
//    values: Array<Any>,
//    valueSuffix: String? = definedExternally
//): TsickleIssue1009
//
//external fun ɵɵstyleSanitizer(sanitizer: StyleSanitizeFn?)
//
//external fun ɵɵstyling()
//
//external fun ɵɵstylingApply()
//
//external fun ɵɵtemplate(
//    index: Number,
//    templateFn: ComponentTemplate<Any>?,
//    consts: Number,
//    vars: Number,
//    tagName: String? = definedExternally,
//    attrs: TAttributes? = definedExternally,
//    localRefs: Array<String>? = definedExternally,
//    localRefExtractor: LocalRefExtractor? = definedExternally
//)
//
//external fun ɵɵtemplateRefExtractor(tNode: TNode, currentView: ɵangular_packages_core_core_bj): TemplateRef<Any>?
//
//external fun ɵɵtext(index: Number, value: Any? = definedExternally)
//
//external fun <T> ɵɵtextBinding(value: T)
//
//external fun <T> ɵɵtextBinding(value: ɵNO_CHANGE)
//
//external fun ɵɵtextInterpolate(v0: Any): TsickleIssue1009
//
//external fun ɵɵtextInterpolate1(prefix: String, v0: Any, suffix: String): TsickleIssue1009
//
//external fun ɵɵtextInterpolate2(prefix: String, v0: Any, i0: String, v1: Any, suffix: String): TsickleIssue1009
//
//external fun ɵɵtextInterpolate3(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    suffix: String
//): TsickleIssue1009
//
//external fun ɵɵtextInterpolate4(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    suffix: String
//): TsickleIssue1009
//
//external fun ɵɵtextInterpolate5(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    suffix: String
//): TsickleIssue1009
//
//external fun ɵɵtextInterpolate6(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    suffix: String
//): TsickleIssue1009
//
//external fun ɵɵtextInterpolate7(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    suffix: String
//): TsickleIssue1009
//
//external fun ɵɵtextInterpolate8(
//    prefix: String,
//    v0: Any,
//    i0: String,
//    v1: Any,
//    i1: String,
//    v2: Any,
//    i2: String,
//    v3: Any,
//    i3: String,
//    v4: Any,
//    i4: String,
//    v5: Any,
//    i5: String,
//    v6: Any,
//    i6: String,
//    v7: Any,
//    suffix: String
//): TsickleIssue1009
//
//external fun ɵɵtextInterpolateV(values: Array<Any>): TsickleIssue1009
//
//external fun <T> ɵɵupdateSyntheticHostBinding(
//    propName: String,
//    value: T,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun <T> ɵɵupdateSyntheticHostBinding(
//    propName: String,
//    value: ɵNO_CHANGE,
//    sanitizer: SanitizerFn? = definedExternally
//): TsickleIssue1009
//
//external fun <T> ɵɵviewQuery(predicate: Type<Any>, descend: Boolean, read: Any? = definedExternally)
//
//external fun <T> ɵɵviewQuery(predicate: Array<String>, descend: Boolean, read: Any? = definedExternally)
//
//external fun ɵdid(
//    checkIndex: Number,
//    flags: ɵNodeFlags,
//    matchedQueries: Array<dynamic /* JsTuple<dynamic, ɵQueryValueType> */>?,
//    childCount: Number,
//    ctor: Any,
//    deps: Array<dynamic /* dynamic | Any */>
//): NodeDef