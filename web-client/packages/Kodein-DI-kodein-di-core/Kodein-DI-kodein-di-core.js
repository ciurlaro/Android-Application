(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Kodein-DI-kodein-di-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kodein-DI-kodein-di-core'.");
    }
    root['Kodein-DI-kodein-di-core'] = factory(typeof this['Kodein-DI-kodein-di-core'] === 'undefined' ? {} : this['Kodein-DI-kodein-di-core'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var minus = Kotlin.kotlin.collections.minus_q4559j$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var minus_0 = Kotlin.kotlin.collections.minus_khz7k3$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var hashCode = Kotlin.hashCode;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var getCallableRef = Kotlin.getCallableRef;
  var Annotation = Kotlin.kotlin.Annotation;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Any = Object;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Pair_init = Kotlin.kotlin.Pair;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toSet_0 = Kotlin.kotlin.sequences.toSet_veqyi0$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Map = Kotlin.kotlin.collections.Map;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var asSequence_0 = Kotlin.kotlin.collections.asSequence_abgq59$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var Triple = Kotlin.kotlin.Triple;
  var flatMap = Kotlin.kotlin.sequences.flatMap_49vfel$;
  var mapNotNull = Kotlin.kotlin.sequences.mapNotNull_qpz9h9$;
  var toList_0 = Kotlin.kotlin.sequences.toList_veqyi0$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var throwUPAE = Kotlin.throwUPAE;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var kotlin = Kotlin.kotlin;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var getKClass = Kotlin.getKClass;
  var Throwable = Error;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var get_kotlin = Kotlin.kotlin.js.get_kotlin_2sk2mx$;
  KodeinDefinition.prototype = Object.create(KodeinDefining.prototype);
  KodeinDefinition.prototype.constructor = KodeinDefinition;
  CopySpecs.prototype = Object.create(SearchSpecs.prototype);
  CopySpecs.prototype.constructor = CopySpecs;
  Copy$BaseDSL.prototype = Object.create(SearchDSL.prototype);
  Copy$BaseDSL.prototype.constructor = Copy$BaseDSL;
  Copy$DSL.prototype = Object.create(Copy$BaseDSL.prototype);
  Copy$DSL.prototype.constructor = Copy$DSL;
  Copy$AllButDSL.prototype = Object.create(Copy$BaseDSL.prototype);
  Copy$AllButDSL.prototype.constructor = Copy$AllButDSL;
  Kodein$DependencyLoopException.prototype = Object.create(RuntimeException.prototype);
  Kodein$DependencyLoopException.prototype.constructor = Kodein$DependencyLoopException;
  Kodein$NotFoundException.prototype = Object.create(RuntimeException.prototype);
  Kodein$NotFoundException.prototype.constructor = Kodein$NotFoundException;
  Kodein$NoResultException.prototype = Object.create(RuntimeException.prototype);
  Kodein$NoResultException.prototype.constructor = Kodein$NoResultException;
  Kodein$OverridingException.prototype = Object.create(RuntimeException.prototype);
  Kodein$OverridingException.prototype.constructor = Kodein$OverridingException;
  FindDSL.prototype = Object.create(SearchDSL.prototype);
  FindDSL.prototype.constructor = FindDSL;
  StandardScopeRegistry.prototype = Object.create(ScopeRegistry.prototype);
  StandardScopeRegistry.prototype.constructor = StandardScopeRegistry;
  SingleItemScopeRegistry.prototype = Object.create(ScopeRegistry.prototype);
  SingleItemScopeRegistry.prototype.constructor = SingleItemScopeRegistry;
  ArgSetBinding.prototype = Object.create(BaseMultiBinding.prototype);
  ArgSetBinding.prototype.constructor = ArgSetBinding;
  SetBinding.prototype = Object.create(BaseMultiBinding.prototype);
  SetBinding.prototype.constructor = SetBinding;
  KodeinMainBuilderImpl.prototype = Object.create(KodeinBuilderImpl.prototype);
  KodeinMainBuilderImpl.prototype.constructor = KodeinMainBuilderImpl;
  KodeinContainerBuilderImpl$OverrideMode.prototype = Object.create(Enum.prototype);
  KodeinContainerBuilderImpl$OverrideMode.prototype.constructor = KodeinContainerBuilderImpl$OverrideMode;
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT.prototype = Object.create(KodeinContainerBuilderImpl$OverrideMode.prototype);
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT.prototype.constructor = KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT;
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT.prototype = Object.create(KodeinContainerBuilderImpl$OverrideMode.prototype);
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT.prototype.constructor = KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT;
  KodeinContainerBuilderImpl$OverrideMode$FORBID.prototype = Object.create(KodeinContainerBuilderImpl$OverrideMode.prototype);
  KodeinContainerBuilderImpl$OverrideMode$FORBID.prototype.constructor = KodeinContainerBuilderImpl$OverrideMode$FORBID;
  TypeChecker$Down.prototype = Object.create(TypeChecker.prototype);
  TypeChecker$Down.prototype.constructor = TypeChecker$Down;
  TypeChecker$Up.prototype = Object.create(TypeChecker.prototype);
  TypeChecker$Up.prototype.constructor = TypeChecker$Up;
  DKodeinImpl.prototype = Object.create(DKodeinBaseImpl.prototype);
  DKodeinImpl.prototype.constructor = DKodeinImpl;
  JSTypeToken.prototype = Object.create(AbstractKClassTypeToken.prototype);
  JSTypeToken.prototype.constructor = JSTypeToken;
  function KodeinDefining(binding, fromModule) {
    this.binding = binding;
    this.fromModule = fromModule;
  }
  KodeinDefining.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinDefining',
    interfaces: []
  };
  function KodeinDefinition(binding, fromModule, tree) {
    KodeinDefining.call(this, binding, fromModule);
    this.tree = tree;
  }
  KodeinDefinition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinDefinition',
    interfaces: [KodeinDefining]
  };
  function descriptionImpl$appendBindings(closure$keyBindDisp, closure$bindingDisp, closure$withOverrides) {
    return function ($receiver, ident, entries) {
      var tmp$;
      tmp$ = entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$keyBindDisp_0 = closure$keyBindDisp;
        var closure$bindingDisp_0 = closure$bindingDisp;
        var closure$withOverrides_0 = closure$withOverrides;
        var keyDescription = closure$keyBindDisp_0(element.key);
        $receiver.append_gw00v9$(repeat(' ', ident) + keyDescription + ' with ' + closure$bindingDisp_0(first(element.value).binding));
        if (closure$withOverrides_0) {
          var subIdent = keyDescription.length - 4 | 0;
          var tmp$_0;
          tmp$_0 = element.value.subList_vux9f0$(1, element.value.size).iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            $receiver.append_gw00v9$(repeat(' ', subIdent) + 'overrides ' + closure$bindingDisp_0(element_0.binding));
          }
        }
        $receiver.append_gw00v9$('\n');
      }
    };
  }
  function descriptionImpl($receiver, withOverrides, ident, keyBindDisp, bindingDisp) {
    var appendBindings = descriptionImpl$appendBindings(keyBindDisp, bindingDisp, withOverrides);
    var $receiver_0 = $receiver.entries;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = first(element.value).fromModule;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var byModule = destination;
    var modules = sorted(filterNotNull(byModule.keys));
    var $receiver_1 = StringBuilder_init();
    var tmp$_1;
    if ((tmp$_1 = byModule.get_11rb$(null)) != null) {
      appendBindings($receiver_1, ident, tmp$_1);
    }
    var tmp$_2;
    tmp$_2 = modules.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      $receiver_1.append_gw00v9$(repeat(' ', ident) + 'module ' + element_0 + ' {' + '\n');
      appendBindings($receiver_1, ident + 4 | 0, ensureNotNull(byModule.get_11rb$(element_0)));
      $receiver_1.append_gw00v9$(repeat(' ', ident) + '}' + '\n');
    }
    return $receiver_1.toString();
  }
  function description($receiver, withOverrides, ident) {
    if (withOverrides === void 0)
      withOverrides = false;
    if (ident === void 0)
      ident = 8;
    return descriptionImpl($receiver, withOverrides, ident, getPropertyCallableRef('bindDescription', 1, function ($receiver) {
      return $receiver.bindDescription;
    }), getPropertyCallableRef('description', 1, function ($receiver) {
      return $receiver.description;
    }));
  }
  function fullDescription($receiver, withOverrides, ident) {
    if (withOverrides === void 0)
      withOverrides = false;
    if (ident === void 0)
      ident = 8;
    return descriptionImpl($receiver, withOverrides, ident, getPropertyCallableRef('bindFullDescription', 1, function ($receiver) {
      return $receiver.bindFullDescription;
    }), getPropertyCallableRef('fullDescription', 1, function ($receiver) {
      return $receiver.fullDescription;
    }));
  }
  function CopySpecs(all) {
    SearchSpecs.call(this);
    this.all = all;
  }
  CopySpecs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CopySpecs',
    interfaces: [SearchSpecs]
  };
  function Copy() {
    Copy$Companion_getInstance();
  }
  function Copy$All() {
    Copy$All_instance = this;
  }
  Copy$All.prototype.keySet_8c2ul3$ = function (tree) {
    return tree.bindings.keys;
  };
  Copy$All.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'All',
    interfaces: [Copy]
  };
  var Copy$All_instance = null;
  function Copy$All_getInstance() {
    if (Copy$All_instance === null) {
      new Copy$All();
    }
    return Copy$All_instance;
  }
  function Copy$None() {
    Copy$None_instance = this;
  }
  Copy$None.prototype.keySet_8c2ul3$ = function (tree) {
    return emptySet();
  };
  Copy$None.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'None',
    interfaces: [Copy]
  };
  var Copy$None_instance = null;
  function Copy$None_getInstance() {
    if (Copy$None_instance === null) {
      new Copy$None();
    }
    return Copy$None_instance;
  }
  function Copy$NonCached() {
    Copy$NonCached_instance = this;
  }
  Copy$NonCached.prototype.keySet_8c2ul3$ = function (tree) {
    var $receiver = tree.bindings;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (first(element.value).binding.copier == null) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return destination.keys;
  };
  Copy$NonCached.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NonCached',
    interfaces: [Copy]
  };
  var Copy$NonCached_instance = null;
  function Copy$NonCached_getInstance() {
    if (Copy$NonCached_instance === null) {
      new Copy$NonCached();
    }
    return Copy$NonCached_instance;
  }
  function Copy$Companion() {
    Copy$Companion_instance = this;
  }
  Copy$Companion.prototype.invoke_agefms$ = function (f) {
    var $receiver = new Copy$DSL();
    f($receiver);
    return $receiver;
  };
  Copy$Companion.prototype.allBut_g0iejo$ = function (f) {
    var $receiver = new Copy$AllButDSL();
    f($receiver);
    return $receiver;
  };
  Copy$Companion.prototype.specsToKeys_9r57ek$ = function (tree, it) {
    var list = tree.find_f45sx$(it);
    if (list.isEmpty()) {
      throw new Kodein$NoResultException(it, 'No binding found that match this search: ' + it);
    }
    if (!it.all && list.size > 1) {
      var tmp$ = 'There were ' + list.size + ' matches for this search: ' + it + '\n';
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(list, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$_0;
      tmp$_0 = list.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var pair = to(element.first, element.second);
        destination.put_xwzc9p$(pair.first, pair.second);
      }
      throw new Kodein$NoResultException(it, tmp$ + description(destination, false));
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(list, 10));
    var tmp$_1;
    tmp$_1 = list.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.first);
    }
    return destination_0;
  };
  Copy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Copy$Companion_instance = null;
  function Copy$Companion_getInstance() {
    if (Copy$Companion_instance === null) {
      new Copy$Companion();
    }
    return Copy$Companion_instance;
  }
  function Copy$BaseDSL() {
    SearchDSL.call(this);
    this.copySpecs_8be2vx$ = ArrayList_init();
    this.ignoreSpecs_8be2vx$ = ArrayList_init();
    this.copy = new Copy$BaseDSL$Sentence(this.copySpecs_8be2vx$);
    this.ignore = new Copy$BaseDSL$Sentence(this.ignoreSpecs_8be2vx$);
  }
  function Copy$BaseDSL$Sentence(specs) {
    this.specs_0 = specs;
  }
  Copy$BaseDSL$Sentence.prototype.the_nj1dmr$ = function (binding) {
    var $receiver = new CopySpecs(false);
    binding.apply_f45sx$($receiver);
    this.specs_0.add_11rb$($receiver);
    return $receiver;
  };
  Copy$BaseDSL$Sentence.prototype.all_b5lpbx$ = function (spec) {
    var $receiver = new CopySpecs(true);
    spec.apply_f45sx$($receiver);
    this.specs_0.add_11rb$($receiver);
    return $receiver;
  };
  Copy$BaseDSL$Sentence.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sentence',
    interfaces: []
  };
  Copy$BaseDSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseDSL',
    interfaces: [Copy, SearchDSL]
  };
  function Copy$DSL() {
    Copy$BaseDSL.call(this);
  }
  Copy$DSL.prototype.keySet_8c2ul3$ = function (tree) {
    var $receiver = this.ignoreSpecs_8be2vx$;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = Copy$Companion_getInstance().specsToKeys_9r57ek$(tree, element);
      addAll(destination, list);
    }
    var ignored = destination;
    var $receiver_0 = this.copySpecs_8be2vx$;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var list_0 = Copy$Companion_getInstance().specsToKeys_9r57ek$(tree, element_0);
      addAll(destination_0, list_0);
    }
    return toSet(minus(destination_0, ignored));
  };
  Copy$DSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DSL',
    interfaces: [Copy$BaseDSL]
  };
  function Copy$AllButDSL() {
    Copy$BaseDSL.call(this);
  }
  Copy$AllButDSL.prototype.keySet_8c2ul3$ = function (tree) {
    var $receiver = this.copySpecs_8be2vx$;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = Copy$Companion_getInstance().specsToKeys_9r57ek$(tree, element);
      addAll(destination, list);
    }
    var kept = destination;
    var $receiver_0 = this.ignoreSpecs_8be2vx$;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var list_0 = Copy$Companion_getInstance().specsToKeys_9r57ek$(tree, element_0);
      addAll(destination_0, list_0);
    }
    var ignored = minus(destination_0, kept);
    return minus_0(tree.bindings.keys, ignored);
  };
  Copy$AllButDSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AllButDSL',
    interfaces: [Copy$BaseDSL]
  };
  Copy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Copy',
    interfaces: []
  };
  function DKodeinAware() {
  }
  DKodeinAware.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DKodeinAware',
    interfaces: []
  };
  function DKodeinBase() {
  }
  Object.defineProperty(DKodeinBase.prototype, 'kodein', {
    get: function () {
      return this.lazy;
    }
  });
  DKodeinBase.prototype.Factory_nijjsc$ = function (argType, type, tag, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(argType, type, tag) : this.Factory_nijjsc$$default(argType, type, tag);
  };
  DKodeinBase.prototype.FactoryOrNull_nijjsc$ = function (argType, type, tag, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(argType, type, tag) : this.FactoryOrNull_nijjsc$$default(argType, type, tag);
  };
  DKodeinBase.prototype.Provider_xflu9r$ = function (type, tag, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(type, tag) : this.Provider_xflu9r$$default(type, tag);
  };
  DKodeinBase.prototype.Provider_veebl6$ = function (argType, type, tag, arg, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(argType, type, tag, arg) : this.Provider_veebl6$$default(argType, type, tag, arg);
  };
  DKodeinBase.prototype.ProviderOrNull_xflu9r$ = function (type, tag, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(type, tag) : this.ProviderOrNull_xflu9r$$default(type, tag);
  };
  DKodeinBase.prototype.ProviderOrNull_veebl6$ = function (argType, type, tag, arg, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(argType, type, tag, arg) : this.ProviderOrNull_veebl6$$default(argType, type, tag, arg);
  };
  DKodeinBase.prototype.Instance_xflu9r$ = function (type, tag, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(type, tag) : this.Instance_xflu9r$$default(type, tag);
  };
  DKodeinBase.prototype.Instance_ibvr8m$ = function (argType, type, tag, arg, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(argType, type, tag, arg) : this.Instance_ibvr8m$$default(argType, type, tag, arg);
  };
  DKodeinBase.prototype.InstanceOrNull_xflu9r$ = function (type, tag, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(type, tag) : this.InstanceOrNull_xflu9r$$default(type, tag);
  };
  DKodeinBase.prototype.InstanceOrNull_ibvr8m$ = function (argType, type, tag, arg, callback$default) {
    if (tag === void 0)
      tag = null;
    return callback$default ? callback$default(argType, type, tag, arg) : this.InstanceOrNull_ibvr8m$$default(argType, type, tag, arg);
  };
  DKodeinBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DKodeinBase',
    interfaces: [DKodeinAware]
  };
  var newInstance = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.newInstance_h49m4t$', function ($receiver, creator) {
    return creator($receiver.dkodein);
  });
  function get_lazy($receiver) {
    return $receiver.dkodein.lazy;
  }
  function Kodein() {
    Kodein$Companion_getInstance();
  }
  function Kodein$DependencyLoopException(message) {
    RuntimeException_init(message, this);
    this.name = 'Kodein$DependencyLoopException';
  }
  Kodein$DependencyLoopException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DependencyLoopException',
    interfaces: [RuntimeException]
  };
  function Kodein$NotFoundException(key, message) {
    RuntimeException_init(message, this);
    this.key = key;
    this.name = 'Kodein$NotFoundException';
  }
  Kodein$NotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotFoundException',
    interfaces: [RuntimeException]
  };
  function Kodein$NoResultException(search, message) {
    RuntimeException_init(message, this);
    this.search = search;
    this.name = 'Kodein$NoResultException';
  }
  Kodein$NoResultException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoResultException',
    interfaces: [RuntimeException]
  };
  function Kodein$OverridingException(message) {
    RuntimeException_init(message, this);
    this.name = 'Kodein$OverridingException';
  }
  Kodein$OverridingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OverridingException',
    interfaces: [RuntimeException]
  };
  Object.defineProperty(Kodein.prototype, 'kodein', {
    get: function () {
      return this;
    }
  });
  function Kodein$Key(contextType, argType, type, tag) {
    this.contextType = contextType;
    this.argType = argType;
    this.type = type;
    this.tag = tag;
    this._hashCode_0 = 0;
  }
  Kodein$Key.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    if (this._hashCode_0 === 0) {
      this._hashCode_0 = hashCode(this.contextType);
      this._hashCode_0 = (31 * this._hashCode_0 | 0) + hashCode(this.argType) | 0;
      this._hashCode_0 = 29 * hashCode(this.type) | 0;
      this._hashCode_0 = (23 * this._hashCode_0 | 0) + ((tmp$_0 = (tmp$ = this.tag) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
    }
    return this._hashCode_0;
  };
  Kodein$Key.prototype.toString = function () {
    return this.description;
  };
  Kodein$Key.prototype.appendDescription_0 = function ($receiver, dispString) {
    $receiver.append_gw00v9$(' with ');
    if (!equals(this.contextType, get_AnyToken())) {
      $receiver.append_gw00v9$('?<' + dispString(this.contextType) + '>().');
    }
    $receiver.append_gw00v9$('? { ');
    if (!equals(this.argType, get_UnitToken())) {
      $receiver.append_gw00v9$(dispString(this.argType));
      $receiver.append_gw00v9$(' -> ');
    }
    $receiver.append_gw00v9$('? }');
  };
  Object.defineProperty(Kodein$Key.prototype, 'bindDescription', {
    get: function () {
      return 'bind<' + this.type.simpleDispString() + '>(' + (this.tag != null ? 'tag = ' + '"' + toString(this.tag) + '"' : '') + ')';
    }
  });
  Object.defineProperty(Kodein$Key.prototype, 'bindFullDescription', {
    get: function () {
      return 'bind<' + this.type.fullDispString() + '>(' + (this.tag != null ? 'tag = ' + '"' + toString(this.tag) + '"' : '') + ')';
    }
  });
  Object.defineProperty(Kodein$Key.prototype, 'description', {
    get: function () {
      var $receiver = StringBuilder_init();
      $receiver.append_gw00v9$(this.bindDescription);
      this.appendDescription_0($receiver, getCallableRef('simpleDispString', function ($receiver) {
        return $receiver.simpleDispString();
      }));
      return $receiver.toString();
    }
  });
  Object.defineProperty(Kodein$Key.prototype, 'internalDescription', {
    get: function () {
      return '(context: ' + this.contextType.simpleDispString() + ', arg: ' + this.argType.simpleDispString() + ', type: ' + this.type.simpleDispString() + ', tag: ' + toString(this.tag) + ')';
    }
  });
  Object.defineProperty(Kodein$Key.prototype, 'fullDescription', {
    get: function () {
      var $receiver = StringBuilder_init();
      $receiver.append_gw00v9$(this.bindFullDescription);
      this.appendDescription_0($receiver, getCallableRef('fullDispString', function ($receiver) {
        return $receiver.fullDispString();
      }));
      return $receiver.toString();
    }
  });
  Kodein$Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: []
  };
  Kodein$Key.prototype.component1 = function () {
    return this.contextType;
  };
  Kodein$Key.prototype.component2 = function () {
    return this.argType;
  };
  Kodein$Key.prototype.component3 = function () {
    return this.type;
  };
  Kodein$Key.prototype.component4 = function () {
    return this.tag;
  };
  Kodein$Key.prototype.copy_z1i2ll$ = function (contextType, argType, type, tag) {
    return new Kodein$Key(contextType === void 0 ? this.contextType : contextType, argType === void 0 ? this.argType : argType, type === void 0 ? this.type : type, tag === void 0 ? this.tag : tag);
  };
  Kodein$Key.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.contextType, other.contextType) && Kotlin.equals(this.argType, other.argType) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.tag, other.tag)))));
  };
  function Kodein$KodeinDsl() {
  }
  Kodein$KodeinDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinDsl',
    interfaces: [Annotation]
  };
  function Kodein$BindBuilder() {
  }
  function Kodein$BindBuilder$WithContext() {
  }
  function Kodein$BindBuilder$WithContext$Impl(contextType) {
    this.contextType_fg8l57$_0 = contextType;
  }
  Object.defineProperty(Kodein$BindBuilder$WithContext$Impl.prototype, 'contextType', {
    get: function () {
      return this.contextType_fg8l57$_0;
    }
  });
  Kodein$BindBuilder$WithContext$Impl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Impl',
    interfaces: [Kodein$BindBuilder$WithContext]
  };
  Kodein$BindBuilder$WithContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WithContext',
    interfaces: [Kodein$BindBuilder]
  };
  function Kodein$BindBuilder$WithScope() {
  }
  function Kodein$BindBuilder$WithScope$Impl(contextType, scope) {
    this.contextType_pajcyu$_0 = contextType;
    this.scope_xxycj3$_0 = scope;
  }
  Object.defineProperty(Kodein$BindBuilder$WithScope$Impl.prototype, 'contextType', {
    get: function () {
      return this.contextType_pajcyu$_0;
    }
  });
  Object.defineProperty(Kodein$BindBuilder$WithScope$Impl.prototype, 'scope', {
    get: function () {
      return this.scope_xxycj3$_0;
    }
  });
  Kodein$BindBuilder$WithScope$Impl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Impl',
    interfaces: [Kodein$BindBuilder$WithScope]
  };
  Kodein$BindBuilder$WithScope.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WithScope',
    interfaces: [Kodein$BindBuilder]
  };
  Kodein$BindBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BindBuilder',
    interfaces: []
  };
  function Kodein$Builder() {
  }
  function Kodein$Builder$TypeBinder() {
  }
  Kodein$Builder$TypeBinder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TypeBinder',
    interfaces: []
  };
  function Kodein$Builder$DirectBinder() {
  }
  Kodein$Builder$DirectBinder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DirectBinder',
    interfaces: []
  };
  function Kodein$Builder$ConstantBinder() {
  }
  Kodein$Builder$ConstantBinder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ConstantBinder',
    interfaces: []
  };
  Kodein$Builder.prototype.Bind_lpxwra$ = function (type, tag, overrides, callback$default) {
    if (tag === void 0)
      tag = null;
    if (overrides === void 0)
      overrides = null;
    return callback$default ? callback$default(type, tag, overrides) : this.Bind_lpxwra$$default(type, tag, overrides);
  };
  Kodein$Builder.prototype.Bind_b6zv6g$ = function (tag, overrides, callback$default) {
    if (tag === void 0)
      tag = null;
    if (overrides === void 0)
      overrides = null;
    return callback$default ? callback$default(tag, overrides) : this.Bind_b6zv6g$$default(tag, overrides);
  };
  Kodein$Builder.prototype.constant_obdoaf$ = function (tag, overrides, callback$default) {
    if (overrides === void 0)
      overrides = null;
    return callback$default ? callback$default(tag, overrides) : this.constant_obdoaf$$default(tag, overrides);
  };
  Kodein$Builder.prototype.import_mxj0o6$ = function (module_0, allowOverride, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    callback$default ? callback$default(module_0, allowOverride) : this.import_mxj0o6$$default(module_0, allowOverride);
  };
  Kodein$Builder.prototype.importAll_nybait$ = function (modules, allowOverride, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    callback$default ? callback$default(modules, allowOverride) : this.importAll_nybait$$default(modules, allowOverride);
  };
  Kodein$Builder.prototype.importAll_7ak0yr$ = function (modules, allowOverride, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    callback$default ? callback$default(modules, allowOverride) : this.importAll_7ak0yr$$default(modules, allowOverride);
  };
  Kodein$Builder.prototype.importOnce_mxj0o6$ = function (module_0, allowOverride, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    callback$default ? callback$default(module_0, allowOverride) : this.importOnce_mxj0o6$$default(module_0, allowOverride);
  };
  Kodein$Builder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Builder',
    interfaces: [Kodein$BindBuilder$WithScope, Kodein$BindBuilder$WithContext]
  };
  function Kodein$MainBuilder() {
  }
  Object.defineProperty(Kodein$MainBuilder.prototype, 'externalSource', {
    get: function () {
      return firstOrNull(this.externalSources);
    },
    set: function (value) {
      this.externalSources.clear();
      if (value != null) {
        this.externalSources.add_11rb$(value);
      }
    }
  });
  Kodein$MainBuilder.prototype.extend_xr6j32$ = function (kodein, allowOverride, copy, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    if (copy === void 0)
      copy = Copy$NonCached_getInstance();
    callback$default ? callback$default(kodein, allowOverride, copy) : this.extend_xr6j32$$default(kodein, allowOverride, copy);
  };
  Kodein$MainBuilder.prototype.extend_q0y52g$ = function (dkodein, allowOverride, copy, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    if (copy === void 0)
      copy = Copy$NonCached_getInstance();
    callback$default ? callback$default(dkodein, allowOverride, copy) : this.extend_q0y52g$$default(dkodein, allowOverride, copy);
  };
  Kodein$MainBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MainBuilder',
    interfaces: [Kodein$Builder]
  };
  function Kodein$Module(name, allowSilentOverride, prefix, init) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    if (prefix === void 0)
      prefix = '';
    this.name = name;
    this.allowSilentOverride = allowSilentOverride;
    this.prefix = prefix;
    this.init = init;
  }
  Kodein$Module.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Module',
    interfaces: []
  };
  function Kodein$Kodein$Module_init(allowSilentOverride, init, $this) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    $this = $this || Object.create(Kodein$Module.prototype);
    Kodein$Module.call($this, '', allowSilentOverride, '', init);
    return $this;
  }
  Kodein$Module.prototype.component1 = function () {
    return this.name;
  };
  Kodein$Module.prototype.component2 = function () {
    return this.allowSilentOverride;
  };
  Kodein$Module.prototype.component3 = function () {
    return this.prefix;
  };
  Kodein$Module.prototype.component4 = function () {
    return this.init;
  };
  Kodein$Module.prototype.copy_nytdc0$ = function (name, allowSilentOverride, prefix, init) {
    return new Kodein$Module(name === void 0 ? this.name : name, allowSilentOverride === void 0 ? this.allowSilentOverride : allowSilentOverride, prefix === void 0 ? this.prefix : prefix, init === void 0 ? this.init : init);
  };
  Kodein$Module.prototype.toString = function () {
    return 'Module(name=' + Kotlin.toString(this.name) + (', allowSilentOverride=' + Kotlin.toString(this.allowSilentOverride)) + (', prefix=' + Kotlin.toString(this.prefix)) + (', init=' + Kotlin.toString(this.init)) + ')';
  };
  Kodein$Module.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowSilentOverride) | 0;
    result = result * 31 + Kotlin.hashCode(this.prefix) | 0;
    result = result * 31 + Kotlin.hashCode(this.init) | 0;
    return result;
  };
  Kodein$Module.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.allowSilentOverride, other.allowSilentOverride) && Kotlin.equals(this.prefix, other.prefix) && Kotlin.equals(this.init, other.init)))));
  };
  function Kodein$Companion() {
    Kodein$Companion_instance = this;
    this.defaultFullDescriptionOnError = false;
  }
  Kodein$Companion.prototype.invoke_z3stfd$ = function (allowSilentOverride, init) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    return KodeinImpl_init_0(allowSilentOverride, init);
  };
  function Kodein$Companion$lazy$lambda(closure$allowSilentOverride, closure$init) {
    return function () {
      return KodeinImpl_init_0(closure$allowSilentOverride, closure$init);
    };
  }
  Kodein$Companion.prototype.lazy_z3stfd$ = function (allowSilentOverride, init) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    return new LazyKodein(Kodein$Companion$lazy$lambda(allowSilentOverride, init));
  };
  Kodein$Companion.prototype.direct_z3stfd$ = function (allowSilentOverride, init) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    return get_direct(KodeinImpl_init_0(allowSilentOverride, init));
  };
  Kodein$Companion.prototype.withDelayedCallbacks_z3stfd$ = function (allowSilentOverride, init) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    return KodeinImpl$Companion_getInstance().withDelayedCallbacks_z3stfd$(allowSilentOverride, init);
  };
  Kodein$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Kodein$Companion_instance = null;
  function Kodein$Companion_getInstance() {
    if (Kodein$Companion_instance === null) {
      new Kodein$Companion();
    }
    return Kodein$Companion_instance;
  }
  Kodein.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Kodein',
    interfaces: [KodeinAware]
  };
  function toProvider$lambda(closure$arg, this$toProvider) {
    return function () {
      return this$toProvider(closure$arg());
    };
  }
  function KodeinContext() {
    KodeinContext$Companion_getInstance();
  }
  function KodeinContext$Value(type, value) {
    this.type_9qp39n$_0 = type;
    this.value_ifzkxq$_0 = value;
  }
  Object.defineProperty(KodeinContext$Value.prototype, 'type', {
    get: function () {
      return this.type_9qp39n$_0;
    }
  });
  Object.defineProperty(KodeinContext$Value.prototype, 'value', {
    get: function () {
      return this.value_ifzkxq$_0;
    }
  });
  KodeinContext$Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Value',
    interfaces: [KodeinContext]
  };
  KodeinContext$Value.prototype.component1 = function () {
    return this.type;
  };
  KodeinContext$Value.prototype.component2 = function () {
    return this.value;
  };
  KodeinContext$Value.prototype.copy_2myob7$ = function (type, value) {
    return new KodeinContext$Value(type === void 0 ? this.type : type, value === void 0 ? this.value : value);
  };
  KodeinContext$Value.prototype.toString = function () {
    return 'Value(type=' + Kotlin.toString(this.type) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  KodeinContext$Value.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  KodeinContext$Value.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value)))));
  };
  function KodeinContext$Lazy(type, getValue) {
    this.type_r52ayq$_0 = type;
    this.getValue = getValue;
    this.value_bl77cb$_0 = lazy(this.getValue);
  }
  Object.defineProperty(KodeinContext$Lazy.prototype, 'type', {
    get: function () {
      return this.type_r52ayq$_0;
    }
  });
  Object.defineProperty(KodeinContext$Lazy.prototype, 'value', {
    get: function () {
      return this.value_bl77cb$_0.value;
    }
  });
  KodeinContext$Lazy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lazy',
    interfaces: [KodeinContext]
  };
  function KodeinContext$Companion() {
    KodeinContext$Companion_instance = this;
  }
  KodeinContext$Companion.prototype.invoke_wm568t$ = function (type, value) {
    return new KodeinContext$Value(type, value);
  };
  KodeinContext$Companion.prototype.invoke_9sjlkh$ = function (type, getValue) {
    return new KodeinContext$Lazy(type, getValue);
  };
  KodeinContext$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KodeinContext$Companion_instance = null;
  function KodeinContext$Companion_getInstance() {
    if (KodeinContext$Companion_instance === null) {
      new KodeinContext$Companion();
    }
    return KodeinContext$Companion_instance;
  }
  KodeinContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KodeinContext',
    interfaces: []
  };
  var get_anyType = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.get_anyType_78zqh4$', wrapFunction(function () {
    var TypeToken = _.org.kodein.di.TypeToken;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = $receiver.type, TypeToken) ? tmp$ : throwCCE();
    };
  }));
  function Contexes() {
    Contexes_instance = this;
    this.AnyKodeinContext = KodeinContext$Companion_getInstance().invoke_wm568t$(get_AnyToken(), null);
  }
  Contexes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Contexes',
    interfaces: []
  };
  var Contexes_instance = null;
  function Contexes_getInstance() {
    if (Contexes_instance === null) {
      new Contexes();
    }
    return Contexes_instance;
  }
  function get_AnyKodeinContext() {
    return Contexes_getInstance().AnyKodeinContext;
  }
  function KodeinAware() {
  }
  Object.defineProperty(KodeinAware.prototype, 'kodeinContext', {
    get: function () {
      return get_AnyKodeinContext();
    }
  });
  Object.defineProperty(KodeinAware.prototype, 'kodeinTrigger', {
    get: function () {
      return null;
    }
  });
  KodeinAware.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KodeinAware',
    interfaces: []
  };
  function Factory$lambda(this$Factory, closure$argType, closure$type, closure$tag) {
    return function (ctx, f) {
      var tmp$;
      return this$Factory.kodein.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, closure$tag), ctx.value);
    };
  }
  function Factory($receiver, argType, type, tag) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, Factory$lambda($receiver, argType, type, tag));
  }
  function FactoryOrNull$lambda(this$FactoryOrNull, closure$argType, closure$type, closure$tag) {
    return function (ctx, f) {
      var tmp$;
      return this$FactoryOrNull.kodein.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, closure$tag), ctx.value);
    };
  }
  function FactoryOrNull($receiver, argType, type, tag) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, FactoryOrNull$lambda($receiver, argType, type, tag));
  }
  function Provider$lambda(this$Provider, closure$type, closure$tag) {
    return function (ctx, f) {
      var tmp$;
      return this$Provider.kodein.container.provider_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), closure$type, closure$tag), ctx.value);
    };
  }
  function Provider($receiver, type, tag) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, Provider$lambda($receiver, type, tag));
  }
  function Provider$lambda_0(this$Provider, closure$argType, closure$type, closure$tag, closure$arg) {
    return function (ctx, f) {
      var tmp$;
      var $receiver = this$Provider.kodein.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, closure$tag), ctx.value);
      return toProvider$lambda(closure$arg, $receiver);
    };
  }
  function Provider_0($receiver, argType, type, tag, arg) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, Provider$lambda_0($receiver, argType, type, tag, arg));
  }
  function ProviderOrNull$lambda(this$ProviderOrNull, closure$type, closure$tag) {
    return function (ctx, f) {
      var tmp$;
      return this$ProviderOrNull.kodein.container.providerOrNull_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), closure$type, closure$tag), ctx.value);
    };
  }
  function ProviderOrNull($receiver, type, tag) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, ProviderOrNull$lambda($receiver, type, tag));
  }
  function ProviderOrNull$lambda_0(this$ProviderOrNull, closure$argType, closure$type, closure$tag, closure$arg) {
    return function (ctx, f) {
      var tmp$;
      var tmp$_0;
      return (tmp$ = this$ProviderOrNull.kodein.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$_0 = ctx.type, TypeToken) ? tmp$_0 : throwCCE(), closure$argType, closure$type, closure$tag), ctx.value)) != null ? toProvider$lambda(closure$arg, tmp$) : null;
    };
  }
  function ProviderOrNull_0($receiver, argType, type, tag, arg) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, ProviderOrNull$lambda_0($receiver, argType, type, tag, arg));
  }
  function Instance$lambda(this$Instance, closure$type, closure$tag) {
    return function (ctx, f) {
      var tmp$;
      return this$Instance.kodein.container.provider_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), closure$type, closure$tag), ctx.value)();
    };
  }
  function Instance($receiver, type, tag) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, Instance$lambda($receiver, type, tag));
  }
  function Instance$lambda_0(this$Instance, closure$argType, closure$type, closure$tag, closure$arg) {
    return function (ctx, f) {
      var tmp$;
      return this$Instance.kodein.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, closure$tag), ctx.value)(closure$arg());
    };
  }
  function Instance_0($receiver, argType, type, tag, arg) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, Instance$lambda_0($receiver, argType, type, tag, arg));
  }
  function InstanceOrNull$lambda(this$InstanceOrNull, closure$type, closure$tag) {
    return function (ctx, f) {
      var tmp$;
      var tmp$_0;
      return (tmp$ = this$InstanceOrNull.kodein.container.providerOrNull_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$_0 = ctx.type, TypeToken) ? tmp$_0 : throwCCE(), get_UnitToken(), closure$type, closure$tag), ctx.value)) != null ? tmp$() : null;
    };
  }
  function InstanceOrNull($receiver, type, tag) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, InstanceOrNull$lambda($receiver, type, tag));
  }
  function InstanceOrNull$lambda_0(this$InstanceOrNull, closure$argType, closure$type, closure$tag, closure$arg) {
    return function (ctx, f) {
      var tmp$;
      var tmp$_0;
      return (tmp$ = this$InstanceOrNull.kodein.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$_0 = ctx.type, TypeToken) ? tmp$_0 : throwCCE(), closure$argType, closure$type, closure$tag), ctx.value)) != null ? tmp$(closure$arg()) : null;
    };
  }
  function InstanceOrNull_0($receiver, argType, type, tag, arg) {
    if (tag === void 0)
      tag = null;
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, InstanceOrNull$lambda_0($receiver, argType, type, tag, arg));
  }
  function get_direct($receiver) {
    return new DKodeinImpl($receiver.kodein.container, $receiver.kodeinContext);
  }
  function KodeinWrapper(_base, kodeinContext, kodeinTrigger) {
    if (kodeinTrigger === void 0)
      kodeinTrigger = null;
    this._base_0 = _base;
    this.kodeinContext_2io6mh$_0 = kodeinContext;
    this.kodeinTrigger_y9rwbk$_0 = kodeinTrigger;
  }
  Object.defineProperty(KodeinWrapper.prototype, 'kodeinContext', {
    get: function () {
      return this.kodeinContext_2io6mh$_0;
    }
  });
  Object.defineProperty(KodeinWrapper.prototype, 'kodeinTrigger', {
    get: function () {
      return this.kodeinTrigger_y9rwbk$_0;
    }
  });
  Object.defineProperty(KodeinWrapper.prototype, 'kodein', {
    get: function () {
      return this;
    }
  });
  Object.defineProperty(KodeinWrapper.prototype, 'container', {
    get: function () {
      return this._base_0.container;
    }
  });
  KodeinWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinWrapper',
    interfaces: [Kodein]
  };
  function KodeinWrapper_init(base, kodeinContext, trigger, $this) {
    if (kodeinContext === void 0)
      kodeinContext = base.kodeinContext;
    if (trigger === void 0)
      trigger = base.kodeinTrigger;
    $this = $this || Object.create(KodeinWrapper.prototype);
    KodeinWrapper.call($this, base.kodein, kodeinContext, trigger);
    return $this;
  }
  function On($receiver, context, trigger) {
    if (context === void 0)
      context = $receiver.kodeinContext;
    if (trigger === void 0)
      trigger = $receiver.kodeinTrigger;
    return KodeinWrapper_init($receiver, context, trigger);
  }
  function newInstance$lambda(this$newInstance, closure$creator) {
    return function (ctx, f) {
      var $receiver = get_direct(this$newInstance.kodein).On_r7y1kq$(ctx);
      return closure$creator($receiver);
    };
  }
  function newInstance_0($receiver, creator) {
    return new KodeinProperty($receiver.kodeinTrigger, $receiver.kodeinContext, newInstance$lambda($receiver, creator));
  }
  function toProvider$lambda_0(closure$arg, this$toProvider) {
    return function () {
      return this$toProvider(closure$arg());
    };
  }
  function KodeinContainer() {
  }
  KodeinContainer.prototype.factory_3h818e$ = function (key, context, overrideLevel, callback$default) {
    if (overrideLevel === void 0)
      overrideLevel = 0;
    return callback$default ? callback$default(key, context, overrideLevel) : this.factory_3h818e$$default(key, context, overrideLevel);
  };
  KodeinContainer.prototype.factoryOrNull_3h818e$ = function (key, context, overrideLevel, callback$default) {
    if (overrideLevel === void 0)
      overrideLevel = 0;
    return callback$default ? callback$default(key, context, overrideLevel) : this.factoryOrNull_3h818e$$default(key, context, overrideLevel);
  };
  KodeinContainer.prototype.allFactories_3h818e$ = function (key, context, overrideLevel, callback$default) {
    if (overrideLevel === void 0)
      overrideLevel = 0;
    return callback$default ? callback$default(key, context, overrideLevel) : this.allFactories_3h818e$$default(key, context, overrideLevel);
  };
  function KodeinContainer$provider$lambda() {
    return Unit;
  }
  KodeinContainer.prototype.provider_wtviuz$$default = function (key, context, overrideLevel) {
    return toProvider$lambda_0(KodeinContainer$provider$lambda, this.factory_3h818e$(key, context));
  };
  KodeinContainer.prototype.provider_wtviuz$ = function (key, context, overrideLevel, callback$default) {
    if (overrideLevel === void 0)
      overrideLevel = 0;
    return callback$default ? callback$default(key, context, overrideLevel) : this.provider_wtviuz$$default(key, context, overrideLevel);
  };
  function KodeinContainer$providerOrNull$lambda() {
    return Unit;
  }
  KodeinContainer.prototype.providerOrNull_wtviuz$$default = function (key, context, overrideLevel) {
    var tmp$;
    return (tmp$ = this.factoryOrNull_3h818e$(key, context)) != null ? toProvider$lambda_0(KodeinContainer$providerOrNull$lambda, tmp$) : null;
  };
  KodeinContainer.prototype.providerOrNull_wtviuz$ = function (key, context, overrideLevel, callback$default) {
    if (overrideLevel === void 0)
      overrideLevel = 0;
    return callback$default ? callback$default(key, context, overrideLevel) : this.providerOrNull_wtviuz$$default(key, context, overrideLevel);
  };
  function KodeinContainer$allProviders$lambda$lambda() {
    return Unit;
  }
  KodeinContainer.prototype.allProviders_wtviuz$$default = function (key, context, overrideLevel) {
    var $receiver = this.allFactories_3h818e$(key, context);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toProvider$lambda_0(KodeinContainer$allProviders$lambda$lambda, item));
    }
    return destination;
  };
  KodeinContainer.prototype.allProviders_wtviuz$ = function (key, context, overrideLevel, callback$default) {
    if (overrideLevel === void 0)
      overrideLevel = 0;
    return callback$default ? callback$default(key, context, overrideLevel) : this.allProviders_wtviuz$$default(key, context, overrideLevel);
  };
  function KodeinContainer$Builder() {
  }
  KodeinContainer$Builder.prototype.bind_5vrb93$ = function (key, binding, fromModule, overrides, callback$default) {
    if (fromModule === void 0)
      fromModule = null;
    if (overrides === void 0)
      overrides = null;
    callback$default ? callback$default(key, binding, fromModule, overrides) : this.bind_5vrb93$$default(key, binding, fromModule, overrides);
  };
  KodeinContainer$Builder.prototype.extend_su2hik$ = function (container, allowOverride, copy, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    if (copy === void 0)
      copy = emptySet();
    callback$default ? callback$default(container, allowOverride, copy) : this.extend_su2hik$$default(container, allowOverride, copy);
  };
  KodeinContainer$Builder.prototype.subBuilder_dqye30$ = function (allowOverride, silentOverride, callback$default) {
    if (allowOverride === void 0)
      allowOverride = false;
    if (silentOverride === void 0)
      silentOverride = false;
    return callback$default ? callback$default(allowOverride, silentOverride) : this.subBuilder_dqye30$$default(allowOverride, silentOverride);
  };
  KodeinContainer$Builder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Builder',
    interfaces: []
  };
  KodeinContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KodeinContainer',
    interfaces: []
  };
  function KodeinTree() {
  }
  KodeinTree.prototype.find_7kv2rd$ = function (key, overrideLevel, all, callback$default) {
    if (overrideLevel === void 0)
      overrideLevel = 0;
    if (all === void 0)
      all = false;
    return callback$default ? callback$default(key, overrideLevel, all) : this.find_7kv2rd$$default(key, overrideLevel, all);
  };
  KodeinTree.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KodeinTree',
    interfaces: []
  };
  function toProvider$lambda_1(closure$arg, this$toProvider) {
    return function () {
      return this$toProvider(closure$arg());
    };
  }
  function Named(kodein) {
    this.kodein = kodein;
  }
  function Named$Factory$lambda(this$Named, closure$argType, closure$type) {
    return function (ctx, tag) {
      var tmp$;
      return this$Named.kodein.kodein.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, tag), ctx.value);
    };
  }
  Named.prototype.Factory_xuvl97$ = function (argType, type) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$Factory$lambda(this, argType, type));
  };
  function Named$FactoryOrNull$lambda(this$Named, closure$argType, closure$type) {
    return function (ctx, tag) {
      var tmp$;
      return this$Named.kodein.kodein.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, tag), ctx.value);
    };
  }
  Named.prototype.FactoryOrNull_xuvl97$ = function (argType, type) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$FactoryOrNull$lambda(this, argType, type));
  };
  function Named$Provider$lambda(this$Named, closure$type) {
    return function (ctx, tag) {
      var tmp$;
      return this$Named.kodein.kodein.container.provider_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), closure$type, tag), ctx.value);
    };
  }
  Named.prototype.Provider_996c1u$ = function (type) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$Provider$lambda(this, type));
  };
  function Named$Provider$lambda_0(this$Named, closure$argType, closure$type, closure$arg) {
    return function (ctx, tag) {
      var tmp$;
      var $receiver = this$Named.kodein.kodein.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, tag), ctx.value);
      return toProvider$lambda_1(closure$arg, $receiver);
    };
  }
  Named.prototype.Provider_ufnr7$ = function (argType, type, arg) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$Provider$lambda_0(this, argType, type, arg));
  };
  function Named$ProviderOrNull$lambda(this$Named, closure$type) {
    return function (ctx, tag) {
      var tmp$;
      return this$Named.kodein.kodein.container.providerOrNull_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), closure$type, tag), ctx.value);
    };
  }
  Named.prototype.ProviderOrNull_996c1u$ = function (type) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$ProviderOrNull$lambda(this, type));
  };
  function Named$ProviderOrNull$lambda_0(this$Named, closure$argType, closure$type, closure$arg) {
    return function (ctx, tag) {
      var tmp$;
      var tmp$_0;
      return (tmp$ = this$Named.kodein.kodein.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$_0 = ctx.type, TypeToken) ? tmp$_0 : throwCCE(), closure$argType, closure$type, tag), ctx.value)) != null ? toProvider$lambda_1(closure$arg, tmp$) : null;
    };
  }
  Named.prototype.ProviderOrNull_ufnr7$ = function (argType, type, arg) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$ProviderOrNull$lambda_0(this, argType, type, arg));
  };
  function Named$Instance$lambda(this$Named, closure$type) {
    return function (ctx, tag) {
      var tmp$;
      return this$Named.kodein.kodein.container.provider_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), closure$type, tag), ctx.value)();
    };
  }
  Named.prototype.Instance_996c1u$ = function (type) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$Instance$lambda(this, type));
  };
  function Named$Instance$lambda_0(this$Named, closure$argType, closure$type, closure$arg) {
    return function (ctx, tag) {
      var tmp$;
      return this$Named.kodein.kodein.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = ctx.type, TypeToken) ? tmp$ : throwCCE(), closure$argType, closure$type, tag), ctx.value)(closure$arg());
    };
  }
  Named.prototype.Instance_wxvcyy$ = function (argType, type, arg) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$Instance$lambda_0(this, argType, type, arg));
  };
  function Named$InstanceOrNull$lambda(this$Named, closure$type) {
    return function (ctx, tag) {
      var tmp$;
      var tmp$_0;
      return (tmp$ = this$Named.kodein.kodein.container.providerOrNull_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$_0 = ctx.type, TypeToken) ? tmp$_0 : throwCCE(), get_UnitToken(), closure$type, tag), ctx.value)) != null ? tmp$() : null;
    };
  }
  Named.prototype.InstanceOrNull_996c1u$ = function (type) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$InstanceOrNull$lambda(this, type));
  };
  function Named$InstanceOrNull$lambda_0(this$Named, closure$argType, closure$type, closure$arg) {
    return function (ctx, tag) {
      var tmp$;
      var tmp$_0;
      return (tmp$ = this$Named.kodein.kodein.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$_0 = ctx.type, TypeToken) ? tmp$_0 : throwCCE(), closure$argType, closure$type, tag), ctx.value)) != null ? tmp$(closure$arg()) : null;
    };
  }
  Named.prototype.InstanceOrNull_ufnr7$ = function (argType, type, arg) {
    return new KodeinProperty(this.kodein.kodeinTrigger, this.kodein.kodeinContext, Named$InstanceOrNull$lambda_0(this, argType, type, arg));
  };
  Named.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Named',
    interfaces: []
  };
  Named.prototype.unbox = function () {
    return this.kodein;
  };
  Named.prototype.toString = function () {
    return 'Named(kodein=' + Kotlin.toString(this.kodein) + ')';
  };
  Named.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kodein) | 0;
    return result;
  };
  Named.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kodein, other.kodein))));
  };
  function get_named($receiver) {
    return new Named($receiver);
  }
  function Constant($receiver, type) {
    return get_named($receiver).Instance_996c1u$(type);
  }
  function SearchSpecs(contextType, argType, type, tag) {
    if (contextType === void 0)
      contextType = null;
    if (argType === void 0)
      argType = null;
    if (type === void 0)
      type = null;
    if (tag === void 0)
      tag = SearchSpecs$NoDefinedTag_getInstance();
    this.contextType = contextType;
    this.argType = argType;
    this.type = type;
    this.tag = tag;
  }
  function SearchSpecs$NoDefinedTag() {
    SearchSpecs$NoDefinedTag_instance = this;
  }
  SearchSpecs$NoDefinedTag.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoDefinedTag',
    interfaces: []
  };
  var SearchSpecs$NoDefinedTag_instance = null;
  function SearchSpecs$NoDefinedTag_getInstance() {
    if (SearchSpecs$NoDefinedTag_instance === null) {
      new SearchSpecs$NoDefinedTag();
    }
    return SearchSpecs$NoDefinedTag_instance;
  }
  SearchSpecs.prototype.toString = function () {
    var args = ArrayList_init();
    if (this.contextType != null) {
      var tmp$;
      var element = 'contextType=' + toString((tmp$ = this.contextType) != null ? tmp$.simpleDispString() : null);
      args.add_11rb$(element);
    }
    if (this.argType != null) {
      var tmp$_0;
      var element_0 = 'argType=' + toString((tmp$_0 = this.argType) != null ? tmp$_0.simpleDispString() : null);
      args.add_11rb$(element_0);
    }
    if (this.type != null) {
      var tmp$_1;
      var element_1 = 'type=' + toString((tmp$_1 = this.type) != null ? tmp$_1.simpleDispString() : null);
      args.add_11rb$(element_1);
    }
    if (!equals(this.tag, SearchSpecs$NoDefinedTag_getInstance())) {
      var element_2 = 'tag=' + toString(this.tag);
      args.add_11rb$(element_2);
    }
    return '[' + joinToString(args, ', ') + ']';
  };
  SearchSpecs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SearchSpecs',
    interfaces: []
  };
  function SearchDSL() {
  }
  function SearchDSL$Spec() {
    SearchDSL$Spec$Companion_getInstance();
  }
  function SearchDSL$Spec$Companion() {
    SearchDSL$Spec$Companion_instance = this;
  }
  function SearchDSL$Spec$Companion$invoke$ObjectLiteral(closure$f) {
    this.closure$f = closure$f;
  }
  SearchDSL$Spec$Companion$invoke$ObjectLiteral.prototype.apply_f45sx$ = function (specs) {
    this.closure$f(specs);
  };
  SearchDSL$Spec$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SearchDSL$Spec]
  };
  SearchDSL$Spec$Companion.prototype.invoke_vlu7bh$ = function (f) {
    return new SearchDSL$Spec$Companion$invoke$ObjectLiteral(f);
  };
  SearchDSL$Spec$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SearchDSL$Spec$Companion_instance = null;
  function SearchDSL$Spec$Companion_getInstance() {
    if (SearchDSL$Spec$Companion_instance === null) {
      new SearchDSL$Spec$Companion();
    }
    return SearchDSL$Spec$Companion_instance;
  }
  SearchDSL$Spec.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Spec',
    interfaces: []
  };
  function SearchDSL$Binding(type, tag) {
    if (tag === void 0)
      tag = null;
    this.type = type;
    this.tag = tag;
  }
  SearchDSL$Binding.prototype.apply_f45sx$ = function (specs) {
    specs.type = this.type;
    if (this.tag != null)
      specs.tag = this.tag;
  };
  SearchDSL$Binding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binding',
    interfaces: [SearchDSL$Spec]
  };
  SearchDSL.prototype.with_hqw29d$ = function ($receiver, spec) {
    spec.apply_f45sx$($receiver);
    return $receiver;
  };
  SearchDSL.prototype.and_hqw29d$ = function ($receiver, spec) {
    spec.apply_f45sx$($receiver);
    return $receiver;
  };
  function SearchDSL$Context$lambda(closure$contextType) {
    return function ($receiver) {
      $receiver.contextType = closure$contextType;
      return Unit;
    };
  }
  SearchDSL.prototype.Context_ah7syo$ = function (contextType) {
    return SearchDSL$Spec$Companion_getInstance().invoke_vlu7bh$(SearchDSL$Context$lambda(contextType));
  };
  function SearchDSL$Argument$lambda(closure$argumentType) {
    return function ($receiver) {
      $receiver.argType = closure$argumentType;
      return Unit;
    };
  }
  SearchDSL.prototype.Argument_ah7syo$ = function (argumentType) {
    return SearchDSL$Spec$Companion_getInstance().invoke_vlu7bh$(SearchDSL$Argument$lambda(argumentType));
  };
  function SearchDSL$tag$lambda(closure$tag) {
    return function ($receiver) {
      $receiver.tag = closure$tag;
      return Unit;
    };
  }
  SearchDSL.prototype.tag_s8jyv4$ = function (tag) {
    return SearchDSL$Spec$Companion_getInstance().invoke_vlu7bh$(SearchDSL$tag$lambda(tag));
  };
  SearchDSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SearchDSL',
    interfaces: []
  };
  function FindDSL() {
    SearchDSL.call(this);
    this.specs_8be2vx$ = new SearchSpecs();
  }
  FindDSL.prototype.unaryPlus_9bvgng$ = function ($receiver) {
    $receiver.apply_f45sx$(this.specs_8be2vx$);
  };
  FindDSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FindDSL',
    interfaces: [SearchDSL]
  };
  function findAllBindings($receiver, f) {
    var dsl = new FindDSL();
    f(dsl);
    return $receiver.find_f45sx$(dsl.specs_8be2vx$);
  }
  function Typed() {
    Typed$Companion_getInstance();
  }
  function Typed$Companion() {
    Typed$Companion_instance = this;
  }
  Typed$Companion.prototype.invoke_d17rco$ = function (type, value) {
    return new TypedImpl(value, type);
  };
  Typed$Companion.prototype.invoke_kk9v3w$ = function (type, func) {
    return new TypedFunc(func, type);
  };
  Typed$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Typed$Companion_instance = null;
  function Typed$Companion_getInstance() {
    if (Typed$Companion_instance === null) {
      new Typed$Companion();
    }
    return Typed$Companion_instance;
  }
  Typed.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Typed',
    interfaces: []
  };
  function TypedImpl(value, type) {
    this.value_gdgjzw$_0 = value;
    this.type_ay3er7$_0 = type;
  }
  Object.defineProperty(TypedImpl.prototype, 'value', {
    get: function () {
      return this.value_gdgjzw$_0;
    }
  });
  Object.defineProperty(TypedImpl.prototype, 'type', {
    get: function () {
      return this.type_ay3er7$_0;
    }
  });
  TypedImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypedImpl',
    interfaces: [Typed]
  };
  TypedImpl.prototype.component1 = function () {
    return this.value;
  };
  TypedImpl.prototype.component2 = function () {
    return this.type;
  };
  TypedImpl.prototype.copy_ejswig$ = function (value, type) {
    return new TypedImpl(value === void 0 ? this.value : value, type === void 0 ? this.type : type);
  };
  TypedImpl.prototype.toString = function () {
    return 'TypedImpl(value=' + Kotlin.toString(this.value) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  TypedImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  TypedImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.type, other.type)))));
  };
  function TypedFunc(func, type) {
    this.type_3w4uz3$_0 = type;
    this.value_lyvfa0$_0 = lazy(func);
  }
  Object.defineProperty(TypedFunc.prototype, 'type', {
    get: function () {
      return this.type_3w4uz3$_0;
    }
  });
  Object.defineProperty(TypedFunc.prototype, 'value', {
    get: function () {
      return this.value_lyvfa0$_0.value;
    }
  });
  TypedFunc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypedFunc',
    interfaces: [Typed]
  };
  function toProvider$lambda_2(closure$arg, this$toProvider) {
    return function () {
      return this$toProvider(closure$arg());
    };
  }
  function WithContext() {
  }
  WithContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WithContext',
    interfaces: []
  };
  function SimpleBindingKodein() {
  }
  SimpleBindingKodein.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SimpleBindingKodein',
    interfaces: [WithContext, DKodein]
  };
  function BindingKodein() {
  }
  BindingKodein.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BindingKodein',
    interfaces: [SimpleBindingKodein]
  };
  function NoArgSimpleBindingKodein() {
  }
  NoArgSimpleBindingKodein.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NoArgSimpleBindingKodein',
    interfaces: [WithContext, DKodein]
  };
  function NoArgBindingKodein() {
  }
  NoArgBindingKodein.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NoArgBindingKodein',
    interfaces: [NoArgSimpleBindingKodein]
  };
  function NoArgBindingKodeinWrap(_kodein) {
    this._kodein_0 = _kodein;
  }
  function NoArgBindingKodeinWrap$overriddenProvider$lambda() {
    return Unit;
  }
  NoArgBindingKodeinWrap.prototype.overriddenProvider = function () {
    return toProvider$lambda_2(NoArgBindingKodeinWrap$overriddenProvider$lambda, this._kodein_0.overriddenFactory());
  };
  function NoArgBindingKodeinWrap$overriddenProviderOrNull$lambda() {
    return Unit;
  }
  NoArgBindingKodeinWrap.prototype.overriddenProviderOrNull = function () {
    var tmp$;
    return (tmp$ = this._kodein_0.overriddenFactoryOrNull()) != null ? toProvider$lambda_2(NoArgBindingKodeinWrap$overriddenProviderOrNull$lambda, tmp$) : null;
  };
  NoArgBindingKodeinWrap.prototype.overriddenInstance = function () {
    return this.overriddenProvider()();
  };
  NoArgBindingKodeinWrap.prototype.overriddenInstanceOrNull = function () {
    var tmp$;
    return (tmp$ = this.overriddenProviderOrNull()) != null ? tmp$() : null;
  };
  Object.defineProperty(NoArgBindingKodeinWrap.prototype, 'container', {
    get: function () {
      return this._kodein_0.container;
    }
  });
  Object.defineProperty(NoArgBindingKodeinWrap.prototype, 'dkodein', {
    get: function () {
      return this._kodein_0.dkodein;
    }
  });
  Object.defineProperty(NoArgBindingKodeinWrap.prototype, 'kodein', {
    get: function () {
      return this._kodein_0.kodein;
    }
  });
  Object.defineProperty(NoArgBindingKodeinWrap.prototype, 'lazy', {
    get: function () {
      return this._kodein_0.lazy;
    }
  });
  NoArgBindingKodeinWrap.prototype.Factory_nijjsc$$default = function (argType, type, tag) {
    return this._kodein_0.Factory_nijjsc$$default(argType, type, tag);
  };
  NoArgBindingKodeinWrap.prototype.FactoryOrNull_nijjsc$$default = function (argType, type, tag) {
    return this._kodein_0.FactoryOrNull_nijjsc$$default(argType, type, tag);
  };
  NoArgBindingKodeinWrap.prototype.Instance_xflu9r$$default = function (type, tag) {
    return this._kodein_0.Instance_xflu9r$$default(type, tag);
  };
  NoArgBindingKodeinWrap.prototype.Instance_ibvr8m$$default = function (argType, type, tag, arg) {
    return this._kodein_0.Instance_ibvr8m$$default(argType, type, tag, arg);
  };
  NoArgBindingKodeinWrap.prototype.InstanceOrNull_xflu9r$$default = function (type, tag) {
    return this._kodein_0.InstanceOrNull_xflu9r$$default(type, tag);
  };
  NoArgBindingKodeinWrap.prototype.InstanceOrNull_ibvr8m$$default = function (argType, type, tag, arg) {
    return this._kodein_0.InstanceOrNull_ibvr8m$$default(argType, type, tag, arg);
  };
  NoArgBindingKodeinWrap.prototype.On_r7y1kq$ = function (context) {
    return this._kodein_0.On_r7y1kq$(context);
  };
  NoArgBindingKodeinWrap.prototype.Provider_xflu9r$$default = function (type, tag) {
    return this._kodein_0.Provider_xflu9r$$default(type, tag);
  };
  NoArgBindingKodeinWrap.prototype.Provider_veebl6$$default = function (argType, type, tag, arg) {
    return this._kodein_0.Provider_veebl6$$default(argType, type, tag, arg);
  };
  NoArgBindingKodeinWrap.prototype.ProviderOrNull_xflu9r$$default = function (type, tag) {
    return this._kodein_0.ProviderOrNull_xflu9r$$default(type, tag);
  };
  NoArgBindingKodeinWrap.prototype.ProviderOrNull_veebl6$$default = function (argType, type, tag, arg) {
    return this._kodein_0.ProviderOrNull_veebl6$$default(argType, type, tag, arg);
  };
  Object.defineProperty(NoArgBindingKodeinWrap.prototype, 'context', {
    get: function () {
      return this._kodein_0.context;
    }
  });
  NoArgBindingKodeinWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoArgBindingKodeinWrap',
    interfaces: [NoArgBindingKodein, WithContext, DKodein]
  };
  function ExternalSource() {
    ExternalSource$Companion_getInstance();
  }
  function ExternalSource$Companion() {
    ExternalSource$Companion_instance = this;
  }
  ExternalSource$Companion.prototype.invoke_5hctao$ = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.bindings.ExternalSource.Companion.invoke_5hctao$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var ExternalSource = _.org.kodein.di.bindings.ExternalSource;
    function ExternalSource$Companion$invoke$ObjectLiteral(closure$f) {
      this.closure$f = closure$f;
    }
    ExternalSource$Companion$invoke$ObjectLiteral.prototype.getFactory_wct8sw$ = function (kodein, key) {
      return this.closure$f(kodein, key);
    };
    ExternalSource$Companion$invoke$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [ExternalSource]
    };
    return function (f) {
      return new ExternalSource$Companion$invoke$ObjectLiteral(f);
    };
  }));
  ExternalSource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ExternalSource$Companion_instance = null;
  function ExternalSource$Companion_getInstance() {
    if (ExternalSource$Companion_instance === null) {
      new ExternalSource$Companion();
    }
    return ExternalSource$Companion_instance;
  }
  ExternalSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ExternalSource',
    interfaces: []
  };
  function externalFactory(f) {
    return f;
  }
  function Binding() {
  }
  Binding.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Binding',
    interfaces: []
  };
  function KodeinBinding() {
  }
  KodeinBinding.prototype.factoryFullName = function () {
    return this.factoryName();
  };
  Object.defineProperty(KodeinBinding.prototype, 'scope', {
    get: function () {
      return null;
    }
  });
  Object.defineProperty(KodeinBinding.prototype, 'description', {
    get: function () {
      var tmp$;
      var arg = !equals(this.argType, get_UnitToken()) ? this.argType.simpleDispString() + ' -> ' : '';
      var scope = Kotlin.isType(this.scope, NoScope) ? null : this.scope;
      var context = (tmp$ = scope != null ? 'scoped(' + TTOf(scope).simpleDispString() + ').' : null) != null ? tmp$ : !equals(this.contextType, get_AnyToken()) ? 'contexted<' + this.contextType.simpleDispString() + '>().' : '';
      return context + this.factoryName() + ' { ' + arg + this.createdType.simpleDispString() + ' }';
    }
  });
  Object.defineProperty(KodeinBinding.prototype, 'fullDescription', {
    get: function () {
      var tmp$;
      var arg = !equals(this.argType, get_UnitToken()) ? this.argType.fullDispString() + ' -> ' : '';
      var scope = Kotlin.isType(this.scope, NoScope) ? null : this.scope;
      var context = (tmp$ = scope != null ? 'scoped(' + TTOf(scope).fullDispString() + ').' : null) != null ? tmp$ : !equals(this.contextType, get_AnyToken()) ? 'contexted<' + this.contextType.fullDispString() + '>().' : '';
      return context + this.factoryFullName() + ' { ' + arg + this.createdType.fullDispString() + ' }';
    }
  });
  function KodeinBinding$Copier() {
    KodeinBinding$Copier$Companion_getInstance();
  }
  function KodeinBinding$Copier$Companion() {
    KodeinBinding$Copier$Companion_instance = this;
  }
  function KodeinBinding$Copier$Companion$invoke$ObjectLiteral(closure$f) {
    this.closure$f = closure$f;
  }
  KodeinBinding$Copier$Companion$invoke$ObjectLiteral.prototype.copy_h7qrd7$ = function (builder) {
    return this.closure$f(builder);
  };
  KodeinBinding$Copier$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [KodeinBinding$Copier]
  };
  KodeinBinding$Copier$Companion.prototype.invoke_q3b22o$ = function (f) {
    return new KodeinBinding$Copier$Companion$invoke$ObjectLiteral(f);
  };
  KodeinBinding$Copier$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KodeinBinding$Copier$Companion_instance = null;
  function KodeinBinding$Copier$Companion_getInstance() {
    if (KodeinBinding$Copier$Companion_instance === null) {
      new KodeinBinding$Copier$Companion();
    }
    return KodeinBinding$Copier$Companion_instance;
  }
  KodeinBinding$Copier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Copier',
    interfaces: []
  };
  Object.defineProperty(KodeinBinding.prototype, 'copier', {
    get: function () {
      return null;
    }
  });
  Object.defineProperty(KodeinBinding.prototype, 'supportSubTypes', {
    get: function () {
      return false;
    }
  });
  KodeinBinding.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KodeinBinding',
    interfaces: [Binding]
  };
  function NoArgKodeinBinding() {
  }
  Object.defineProperty(NoArgKodeinBinding.prototype, 'argType', {
    get: function () {
      return get_UnitToken();
    }
  });
  NoArgKodeinBinding.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NoArgKodeinBinding',
    interfaces: [KodeinBinding, Binding]
  };
  function Reference(current, next) {
    this.current = current;
    this.next = next;
  }
  Reference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reference',
    interfaces: []
  };
  Reference.prototype.component1 = function () {
    return this.current;
  };
  Reference.prototype.component2 = function () {
    return this.next;
  };
  Reference.prototype.copy_wamhsy$ = function (current, next) {
    return new Reference(current === void 0 ? this.current : current, next === void 0 ? this.next : next);
  };
  Reference.prototype.toString = function () {
    return 'Reference(current=' + Kotlin.toString(this.current) + (', next=' + Kotlin.toString(this.next)) + ')';
  };
  Reference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.current) | 0;
    result = result * 31 + Kotlin.hashCode(this.next) | 0;
    return result;
  };
  Reference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.current, other.current) && Kotlin.equals(this.next, other.next)))));
  };
  function RefMaker() {
  }
  RefMaker.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RefMaker',
    interfaces: []
  };
  function SingletonReference() {
    SingletonReference_instance = this;
  }
  function SingletonReference$make$lambda(closure$value) {
    return function () {
      return closure$value;
    };
  }
  SingletonReference.prototype.make_9ce4rd$ = function (creator) {
    var value = creator();
    return new Reference(value, SingletonReference$make$lambda(value));
  };
  SingletonReference.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SingletonReference',
    interfaces: [RefMaker]
  };
  var SingletonReference_instance = null;
  function SingletonReference_getInstance() {
    if (SingletonReference_instance === null) {
      new SingletonReference();
    }
    return SingletonReference_instance;
  }
  function ScopeCloseable() {
  }
  ScopeCloseable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ScopeCloseable',
    interfaces: []
  };
  function ScopeRegistry() {
  }
  ScopeRegistry.prototype.getOrCreate_l6dfx6$ = function (key, sync, creator, callback$default) {
    if (sync === void 0)
      sync = true;
    return callback$default ? callback$default(key, sync, creator) : this.getOrCreate_l6dfx6$$default(key, sync, creator);
  };
  ScopeRegistry.prototype.close = function () {
    this.clear();
  };
  ScopeRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScopeRegistry',
    interfaces: [ScopeCloseable]
  };
  function StandardScopeRegistry() {
    ScopeRegistry.call(this);
    this._cache_0 = newConcurrentMap();
    this._lock_0 = new Any();
  }
  StandardScopeRegistry.prototype.getOrCreate_l6dfx6$$default = function (key, sync, creator) {
    var synchronizedIfNull$result;
    synchronizedIfNull$break: do {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = (tmp$_0 = this._cache_0.get_11rb$(key)) != null ? tmp$_0() : null) != null) {
        synchronizedIfNull$result = tmp$;
        break synchronizedIfNull$break;
      }
      var block$result;
      block$break: do {
        var tmp$_1;
        var tmp$_2;
        if ((tmp$_1 = (tmp$_2 = this._cache_0.get_11rb$(key)) != null ? tmp$_2() : null) != null) {
          block$result = tmp$_1;
          break block$break;
        }
        var tmp$_3 = creator();
        var current = tmp$_3.component1()
        , next = tmp$_3.component2();
        this._cache_0.put_xwzc9p$(key, next);
        synchronizedIfNull$result = current;
        break synchronizedIfNull$break;
      }
       while (false);
      var value = block$result;
      synchronizedIfNull$result = value;
    }
     while (false);
    return synchronizedIfNull$result;
  };
  StandardScopeRegistry.prototype.getOrNull_za3rmp$ = function (key) {
    return this._cache_0.get_11rb$(key);
  };
  StandardScopeRegistry.prototype.values = function () {
    var $receiver = this._cache_0;
    var destination = ArrayList_init_0($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Pair_init(item.key, item.value));
    }
    return destination;
  };
  StandardScopeRegistry.prototype.remove_za3rmp$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    (tmp$_1 = Kotlin.isType(tmp$_0 = (tmp$ = this._cache_0.remove_11rb$(key)) != null ? tmp$() : null, ScopeCloseable) ? tmp$_0 : null) != null ? (tmp$_1.close(), Unit) : null;
  };
  StandardScopeRegistry.prototype.clear = function () {
    var refs = toList(this._cache_0.values);
    this._cache_0.clear();
    var refs_0 = refs;
    var tmp$;
    tmp$ = refs_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1;
      (tmp$_1 = Kotlin.isType(tmp$_0 = element(), ScopeCloseable) ? tmp$_0 : null) != null ? (tmp$_1.close(), Unit) : null;
    }
  };
  Object.defineProperty(StandardScopeRegistry.prototype, 'size', {
    get: function () {
      return this._cache_0.size;
    }
  });
  StandardScopeRegistry.prototype.isEmpty = function () {
    return this._cache_0.isEmpty();
  };
  StandardScopeRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardScopeRegistry',
    interfaces: [ScopeRegistry]
  };
  function SingleItemScopeRegistry() {
    ScopeRegistry.call(this);
    this._lock_0 = new Any();
    this._pair_0 = null;
  }
  SingleItemScopeRegistry.prototype.getOrCreate_l6dfx6$$default = function (key, sync, creator) {
    var tmp$, tmp$_0;
    var synchronizedIfNull$result;
    synchronizedIfNull$break: do {
      var tmp$_1;
      var tmp$_2;
      var tmp$_3;
      if ((tmp$_2 = this._pair_0) != null) {
        var pKey = tmp$_2.component1()
        , pRef = tmp$_2.component2();
        tmp$_3 = equals(key, pKey) ? pRef() : null;
      }
       else
        tmp$_3 = null;
      if ((tmp$_1 = tmp$_3) != null) {
        synchronizedIfNull$result = to(null, tmp$_1);
        break synchronizedIfNull$break;
      }
      var block$result;
      block$break: do {
        var tmp$_4;
        var tmp$_5;
        var tmp$_6;
        if ((tmp$_5 = this._pair_0) != null) {
          var pKey_0 = tmp$_5.component1()
          , pRef_0 = tmp$_5.component2();
          tmp$_6 = equals(key, pKey_0) ? pRef_0() : null;
        }
         else
          tmp$_6 = null;
        if ((tmp$_4 = tmp$_6) != null) {
          block$result = tmp$_4;
          break block$break;
        }
        var tmp$_7;
        var oldRef = (tmp$_7 = this._pair_0) != null ? tmp$_7.second : null;
        var tmp$_8 = creator();
        var value = tmp$_8.component1()
        , ref = tmp$_8.component2();
        this._pair_0 = to(key, ref);
        synchronizedIfNull$result = to(oldRef, value);
        break synchronizedIfNull$break;
      }
       while (false);
      var value_0 = block$result;
      synchronizedIfNull$result = to(null, value_0);
    }
     while (false);
    var tmp$_9 = synchronizedIfNull$result;
    var oldRef_0 = tmp$_9.component1()
    , value_1 = tmp$_9.component2();
    (tmp$_0 = Kotlin.isType(tmp$ = oldRef_0 != null ? oldRef_0() : null, ScopeCloseable) ? tmp$ : null) != null ? (tmp$_0.close(), Unit) : null;
    return value_1;
  };
  SingleItemScopeRegistry.prototype.getOrNull_za3rmp$ = function (key) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this._pair_0) != null) {
      var pKey = tmp$.component1()
      , pRef = tmp$.component2();
      tmp$_0 = equals(key, pKey) ? pRef : null;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  SingleItemScopeRegistry.prototype.isEmpty = function () {
    return this._pair_0 == null;
  };
  SingleItemScopeRegistry.prototype.values = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this._pair_0) != null ? listOf(tmp$) : null) != null ? tmp$_0 : emptyList();
  };
  SingleItemScopeRegistry.prototype.remove_za3rmp$ = function (key) {
    var tmp$, tmp$_0;
    var synchronizedIfNotNull$result;
    synchronizedIfNotNull$break: do {
      if (this._pair_0 == null) {
        synchronizedIfNotNull$result = null;
        break synchronizedIfNotNull$break;
      }
      block$break: do {
        var tmp$_1;
        tmp$_1 = this._pair_0;
        if (tmp$_1 == null) {
          break block$break;
        }
        var value = tmp$_1;
        var pKey = value.component1()
        , pRef = value.component2();
        if (!equals(pKey, key))
          throw IllegalStateException_init('SingleItemScopeRegistry currently holds a different key' + '\n' + key.toString() + ' != ' + pKey.toString());
        this._pair_0 = null;
        synchronizedIfNotNull$result = pRef;
        break synchronizedIfNotNull$break;
      }
       while (false);
      synchronizedIfNotNull$result = null;
    }
     while (false);
    var ref = synchronizedIfNotNull$result;
    (tmp$_0 = Kotlin.isType(tmp$ = ref != null ? ref() : null, ScopeCloseable) ? tmp$ : null) != null ? (tmp$_0.close(), Unit) : null;
  };
  SingleItemScopeRegistry.prototype.clear = function () {
    var tmp$, tmp$_0;
    var synchronizedIfNotNull$result;
    synchronizedIfNotNull$break: do {
      if (this._pair_0 == null) {
        synchronizedIfNotNull$result = null;
        break synchronizedIfNotNull$break;
      }
      block$break: do {
        var tmp$_1;
        tmp$_1 = this._pair_0;
        if (tmp$_1 == null) {
          break block$break;
        }
        var value = tmp$_1;
        var pRef = value.component2();
        this._pair_0 = null;
        synchronizedIfNotNull$result = pRef;
        break synchronizedIfNotNull$break;
      }
       while (false);
      synchronizedIfNotNull$result = null;
    }
     while (false);
    var ref = synchronizedIfNotNull$result;
    (tmp$_0 = Kotlin.isType(tmp$ = ref != null ? ref() : null, ScopeCloseable) ? tmp$ : null) != null ? (tmp$_0.close(), Unit) : null;
  };
  SingleItemScopeRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleItemScopeRegistry',
    interfaces: [ScopeRegistry]
  };
  function ContextTranslator() {
  }
  ContextTranslator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ContextTranslator',
    interfaces: []
  };
  function SimpleContextTranslator(contextType, scopeType, t) {
    this.contextType_7ycxqf$_0 = contextType;
    this.scopeType_w1u01g$_0 = scopeType;
    this.t_0 = t;
  }
  Object.defineProperty(SimpleContextTranslator.prototype, 'contextType', {
    get: function () {
      return this.contextType_7ycxqf$_0;
    }
  });
  Object.defineProperty(SimpleContextTranslator.prototype, 'scopeType', {
    get: function () {
      return this.scopeType_w1u01g$_0;
    }
  });
  SimpleContextTranslator.prototype.translate_11rb$ = function (ctx) {
    return this.t_0(ctx);
  };
  SimpleContextTranslator.prototype.toString = function () {
    return '()';
  };
  SimpleContextTranslator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleContextTranslator',
    interfaces: [ContextTranslator]
  };
  function SimpleAutoContextTranslator(scopeType, t) {
    this.scopeType_68i7p9$_0 = scopeType;
    this.t_0 = t;
  }
  Object.defineProperty(SimpleAutoContextTranslator.prototype, 'scopeType', {
    get: function () {
      return this.scopeType_68i7p9$_0;
    }
  });
  Object.defineProperty(SimpleAutoContextTranslator.prototype, 'contextType', {
    get: function () {
      return get_AnyToken();
    }
  });
  SimpleAutoContextTranslator.prototype.translate_11rb$ = function (ctx) {
    return this.t_0();
  };
  SimpleAutoContextTranslator.prototype.toString = function () {
    return '(' + this.scopeType.simpleDispString() + ' -> ' + this.contextType.simpleDispString() + ')';
  };
  SimpleAutoContextTranslator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleAutoContextTranslator',
    interfaces: [ContextTranslator]
  };
  function toKContext($receiver, ctx) {
    return KodeinContext$Companion_getInstance().invoke_wm568t$($receiver.scopeType, $receiver.translate_11rb$(ctx));
  }
  function CompositeContextTranslator(src, dst) {
    this.src = src;
    this.dst = dst;
  }
  Object.defineProperty(CompositeContextTranslator.prototype, 'contextType', {
    get: function () {
      return this.src.contextType;
    }
  });
  Object.defineProperty(CompositeContextTranslator.prototype, 'scopeType', {
    get: function () {
      return this.dst.scopeType;
    }
  });
  CompositeContextTranslator.prototype.translate_11rb$ = function (ctx) {
    return this.dst.translate_11rb$(this.src.translate_11rb$(ctx));
  };
  CompositeContextTranslator.prototype.toString = function () {
    return '(' + this.src + ' -> ' + this.dst + ')';
  };
  CompositeContextTranslator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeContextTranslator',
    interfaces: [ContextTranslator]
  };
  function Scope() {
  }
  Scope.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Scope',
    interfaces: []
  };
  function UnboundedScope(registry) {
    if (registry === void 0)
      registry = new StandardScopeRegistry();
    this.registry = registry;
  }
  UnboundedScope.prototype.getRegistry_11rb$ = function (context) {
    return this.registry;
  };
  UnboundedScope.prototype.close = function () {
    this.registry.clear();
  };
  UnboundedScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnboundedScope',
    interfaces: [ScopeCloseable, Scope]
  };
  function SubScope(parentScope) {
    this.parentScope = parentScope;
  }
  function SubScope$Key(context) {
    this.context = context;
  }
  SubScope$Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: []
  };
  SubScope$Key.prototype.component1 = function () {
    return this.context;
  };
  SubScope$Key.prototype.copy_11rb$ = function (context) {
    return new SubScope$Key(context === void 0 ? this.context : context);
  };
  SubScope$Key.prototype.toString = function () {
    return 'Key(context=' + Kotlin.toString(this.context) + ')';
  };
  SubScope$Key.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.context) | 0;
    return result;
  };
  SubScope$Key.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.context, other.context))));
  };
  function SubScope$getRegistry$lambda$lambda(this$SubScope) {
    return function () {
      return this$SubScope.newRegistry();
    };
  }
  function SubScope$getRegistry$lambda(this$SubScope) {
    return function () {
      return SingletonReference_getInstance().make_9ce4rd$(SubScope$getRegistry$lambda$lambda(this$SubScope));
    };
  }
  SubScope.prototype.getRegistry_11rb$ = function (context) {
    var tmp$;
    var parentRegistry = this.parentScope.getRegistry_11rb$(this.getParentContext_11rb$(context));
    return Kotlin.isType(tmp$ = parentRegistry.getOrCreate_l6dfx6$(new SubScope$Key(context), false, SubScope$getRegistry$lambda(this)), ScopeRegistry) ? tmp$ : throwCCE();
  };
  SubScope.prototype.newRegistry = function () {
    return new StandardScopeRegistry();
  };
  SubScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubScope',
    interfaces: [Scope]
  };
  function NoScope() {
    this._registry_0 = new StandardScopeRegistry();
  }
  NoScope.prototype.getRegistry_11rb$ = function (context) {
    return this._registry_0;
  };
  NoScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoScope',
    interfaces: [Scope]
  };
  function BaseMultiBinding() {
  }
  BaseMultiBinding.prototype.factoryName = function () {
    return 'bindingSet';
  };
  BaseMultiBinding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseMultiBinding',
    interfaces: [KodeinBinding]
  };
  function SetBindingKodein(_base) {
    this._base_0 = _base;
  }
  SetBindingKodein.prototype.overriddenFactory = function () {
    throw IllegalStateException_init('Cannot access overrides in a Set binding');
  };
  SetBindingKodein.prototype.overriddenFactoryOrNull = function () {
    throw IllegalStateException_init('Cannot access overrides in a Set binding');
  };
  Object.defineProperty(SetBindingKodein.prototype, 'container', {
    get: function () {
      return this._base_0.container;
    }
  });
  Object.defineProperty(SetBindingKodein.prototype, 'context', {
    get: function () {
      return this._base_0.context;
    }
  });
  Object.defineProperty(SetBindingKodein.prototype, 'dkodein', {
    get: function () {
      return this._base_0.dkodein;
    }
  });
  Object.defineProperty(SetBindingKodein.prototype, 'kodein', {
    get: function () {
      return this._base_0.kodein;
    }
  });
  Object.defineProperty(SetBindingKodein.prototype, 'lazy', {
    get: function () {
      return this._base_0.lazy;
    }
  });
  SetBindingKodein.prototype.Factory_nijjsc$$default = function (argType, type, tag) {
    return this._base_0.Factory_nijjsc$$default(argType, type, tag);
  };
  SetBindingKodein.prototype.FactoryOrNull_nijjsc$$default = function (argType, type, tag) {
    return this._base_0.FactoryOrNull_nijjsc$$default(argType, type, tag);
  };
  SetBindingKodein.prototype.Instance_xflu9r$$default = function (type, tag) {
    return this._base_0.Instance_xflu9r$$default(type, tag);
  };
  SetBindingKodein.prototype.Instance_ibvr8m$$default = function (argType, type, tag, arg) {
    return this._base_0.Instance_ibvr8m$$default(argType, type, tag, arg);
  };
  SetBindingKodein.prototype.InstanceOrNull_xflu9r$$default = function (type, tag) {
    return this._base_0.InstanceOrNull_xflu9r$$default(type, tag);
  };
  SetBindingKodein.prototype.InstanceOrNull_ibvr8m$$default = function (argType, type, tag, arg) {
    return this._base_0.InstanceOrNull_ibvr8m$$default(argType, type, tag, arg);
  };
  SetBindingKodein.prototype.On_r7y1kq$ = function (context) {
    return this._base_0.On_r7y1kq$(context);
  };
  SetBindingKodein.prototype.Provider_xflu9r$$default = function (type, tag) {
    return this._base_0.Provider_xflu9r$$default(type, tag);
  };
  SetBindingKodein.prototype.Provider_veebl6$$default = function (argType, type, tag, arg) {
    return this._base_0.Provider_veebl6$$default(argType, type, tag, arg);
  };
  SetBindingKodein.prototype.ProviderOrNull_xflu9r$$default = function (type, tag) {
    return this._base_0.ProviderOrNull_xflu9r$$default(type, tag);
  };
  SetBindingKodein.prototype.ProviderOrNull_veebl6$$default = function (argType, type, tag, arg) {
    return this._base_0.ProviderOrNull_veebl6$$default(argType, type, tag, arg);
  };
  SetBindingKodein.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetBindingKodein',
    interfaces: [BindingKodein]
  };
  function ArgSetBinding(contextType, argType, _elementType, createdType) {
    BaseMultiBinding.call(this);
    this.contextType_ow6pp3$_0 = contextType;
    this.argType_8v72a8$_0 = argType;
    this._elementType_0 = _elementType;
    this.createdType_vhao76$_0 = createdType;
    this.set_ws4ahu$_0 = LinkedHashSet_init();
    this.copier_5ge0wy$_0 = KodeinBinding$Copier$Companion_getInstance().invoke_q3b22o$(ArgSetBinding$copier$lambda(this));
  }
  Object.defineProperty(ArgSetBinding.prototype, 'contextType', {
    get: function () {
      return this.contextType_ow6pp3$_0;
    }
  });
  Object.defineProperty(ArgSetBinding.prototype, 'argType', {
    get: function () {
      return this.argType_8v72a8$_0;
    }
  });
  Object.defineProperty(ArgSetBinding.prototype, 'createdType', {
    get: function () {
      return this.createdType_vhao76$_0;
    }
  });
  Object.defineProperty(ArgSetBinding.prototype, 'set', {
    get: function () {
      return this.set_ws4ahu$_0;
    }
  });
  function ArgSetBinding$getFactory$lambda$lambda(closure$arg) {
    return function (it) {
      return it(closure$arg);
    };
  }
  function ArgSetBinding$getFactory$lambda(closure$factories) {
    return function (arg) {
      return toSet_0(map(asSequence(closure$factories), ArgSetBinding$getFactory$lambda$lambda(arg)));
    };
  }
  ArgSetBinding.prototype.getFactory_bdfjz$ = function (kodein, key) {
    var subKodein = new SetBindingKodein(kodein);
    var subKey = new Kodein$Key(key.contextType, key.argType, this._elementType_0, key.tag);
    var $receiver = this.set;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.getFactory_bdfjz$(subKodein, subKey));
    }
    var factories = destination;
    return ArgSetBinding$getFactory$lambda(factories);
  };
  Object.defineProperty(ArgSetBinding.prototype, 'copier', {
    get: function () {
      return this.copier_5ge0wy$_0;
    }
  });
  function ArgSetBinding$copier$lambda(this$ArgSetBinding) {
    return function (builder) {
      var $receiver = new ArgSetBinding(this$ArgSetBinding.contextType, this$ArgSetBinding.argType, this$ArgSetBinding._elementType_0, this$ArgSetBinding.createdType);
      var this$ArgSetBinding_0 = this$ArgSetBinding;
      var tmp$ = $receiver.set;
      var $receiver_0 = this$ArgSetBinding_0.set;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1, tmp$_2;
        destination.add_11rb$((tmp$_2 = (tmp$_1 = item.copier) != null ? tmp$_1.copy_h7qrd7$(builder) : null) != null ? tmp$_2 : item);
      }
      tmp$.addAll_brywnq$(destination);
      return $receiver;
    };
  }
  ArgSetBinding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArgSetBinding',
    interfaces: [BaseMultiBinding]
  };
  function SetBinding(contextType, _elementType, createdType) {
    BaseMultiBinding.call(this);
    this.contextType_oye6mj$_0 = contextType;
    this._elementType_0 = _elementType;
    this.createdType_vf379q$_0 = createdType;
    this.set_84his2$_0 = LinkedHashSet_init();
    this.copier_lj1aum$_0 = KodeinBinding$Copier$Companion_getInstance().invoke_q3b22o$(SetBinding$copier$lambda(this));
  }
  Object.defineProperty(SetBinding.prototype, 'contextType', {
    get: function () {
      return this.contextType_oye6mj$_0;
    }
  });
  Object.defineProperty(SetBinding.prototype, 'createdType', {
    get: function () {
      return this.createdType_vf379q$_0;
    }
  });
  Object.defineProperty(SetBinding.prototype, 'set', {
    get: function () {
      return this.set_84his2$_0;
    }
  });
  function SetBinding$getFactory$lambda$lambda(it) {
    return it(Unit);
  }
  function SetBinding$getFactory$lambda(closure$providers) {
    return function (it) {
      return toSet_0(map(asSequence(closure$providers), SetBinding$getFactory$lambda$lambda));
    };
  }
  SetBinding.prototype.getFactory_bdfjz$ = function (kodein, key) {
    var subKodein = new SetBindingKodein(kodein);
    var subKey = new Kodein$Key(key.contextType, get_UnitToken(), this._elementType_0, key.tag);
    var $receiver = this.set;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.getFactory_bdfjz$(subKodein, subKey));
    }
    var providers = destination;
    return SetBinding$getFactory$lambda(providers);
  };
  Object.defineProperty(SetBinding.prototype, 'copier', {
    get: function () {
      return this.copier_lj1aum$_0;
    }
  });
  function SetBinding$copier$lambda(this$SetBinding) {
    return function (builder) {
      var $receiver = new SetBinding(this$SetBinding.contextType, this$SetBinding._elementType_0, this$SetBinding.createdType);
      var this$SetBinding_0 = this$SetBinding;
      var tmp$ = $receiver.set;
      var $receiver_0 = this$SetBinding_0.set;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1, tmp$_2;
        destination.add_11rb$((tmp$_2 = (tmp$_1 = item.copier) != null ? tmp$_1.copy_h7qrd7$(builder) : null) != null ? tmp$_2 : item);
      }
      tmp$.addAll_brywnq$(destination);
      return $receiver;
    };
  }
  SetBinding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetBinding',
    interfaces: [BaseMultiBinding, NoArgKodeinBinding]
  };
  function TypeBinderInSet(_binder, _colTypeToken) {
    this._binder_0 = _binder;
    this._colTypeToken_0 = _colTypeToken;
  }
  TypeBinderInSet.prototype.with_ys8c3j$ = function (binding) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    Kotlin.isType(tmp$ = this._binder_0, KodeinBuilderImpl$TypeBinder) ? tmp$ : throwCCE();
    var setKey = new Kodein$Key(binding.contextType, binding.argType, this._colTypeToken_0, this._binder_0.tag);
    tmp$_1 = (tmp$_0 = this._binder_0.containerBuilder_8be2vx$.bindingsMap_8be2vx$.get_11rb$(setKey)) != null ? first(tmp$_0) : null;
    if (tmp$_1 == null) {
      throw IllegalStateException_init('No set binding to ' + setKey);
    }
    var setBinding = tmp$_1;
    if ((Kotlin.isType(tmp$_2 = setBinding.binding, BaseMultiBinding) ? tmp$_2 : null) == null)
      throw IllegalStateException_init(setKey.toString() + ' is associated to a ' + setBinding.binding.factoryName() + ' while it should be associated with bindingSet');
    (Kotlin.isType(tmp$_3 = setBinding.binding.set, MutableSet) ? tmp$_3 : throwCCE()).add_11rb$(binding);
  };
  TypeBinderInSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeBinderInSet',
    interfaces: []
  };
  function InSet($receiver, setTypeToken) {
    return new TypeBinderInSet($receiver, setTypeToken);
  }
  function Factory_0(contextType, argType, createdType, creator) {
    this.contextType_alikkm$_0 = contextType;
    this.argType_1bz55r$_0 = argType;
    this.createdType_p958nh$_0 = createdType;
    this.creator_0 = creator;
  }
  Object.defineProperty(Factory_0.prototype, 'contextType', {
    get: function () {
      return this.contextType_alikkm$_0;
    }
  });
  Object.defineProperty(Factory_0.prototype, 'argType', {
    get: function () {
      return this.argType_1bz55r$_0;
    }
  });
  Object.defineProperty(Factory_0.prototype, 'createdType', {
    get: function () {
      return this.createdType_p958nh$_0;
    }
  });
  Factory_0.prototype.factoryName = function () {
    return 'factory';
  };
  function Factory$getFactory$lambda(this$Factory, closure$kodein) {
    return function (arg) {
      return this$Factory.creator_0(closure$kodein, arg);
    };
  }
  Factory_0.prototype.getFactory_bdfjz$ = function (kodein, key) {
    return Factory$getFactory$lambda(this, kodein);
  };
  Factory_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [KodeinBinding]
  };
  function BindingContextedKodein(base, context) {
    this.base = base;
    this.context_6m6051$_0 = context;
    var tmp$;
    this.$delegate_hvewh0$_0 = Kotlin.isType(tmp$ = base, BindingKodein) ? tmp$ : throwCCE();
  }
  Object.defineProperty(BindingContextedKodein.prototype, 'context', {
    get: function () {
      return this.context_6m6051$_0;
    }
  });
  Object.defineProperty(BindingContextedKodein.prototype, 'container', {
    get: function () {
      return this.$delegate_hvewh0$_0.container;
    }
  });
  Object.defineProperty(BindingContextedKodein.prototype, 'dkodein', {
    get: function () {
      return this.$delegate_hvewh0$_0.dkodein;
    }
  });
  Object.defineProperty(BindingContextedKodein.prototype, 'kodein', {
    get: function () {
      return this.$delegate_hvewh0$_0.kodein;
    }
  });
  Object.defineProperty(BindingContextedKodein.prototype, 'lazy', {
    get: function () {
      return this.$delegate_hvewh0$_0.lazy;
    }
  });
  BindingContextedKodein.prototype.Factory_nijjsc$$default = function (argType, type, tag) {
    return this.$delegate_hvewh0$_0.Factory_nijjsc$$default(argType, type, tag);
  };
  BindingContextedKodein.prototype.FactoryOrNull_nijjsc$$default = function (argType, type, tag) {
    return this.$delegate_hvewh0$_0.FactoryOrNull_nijjsc$$default(argType, type, tag);
  };
  BindingContextedKodein.prototype.Instance_xflu9r$$default = function (type, tag) {
    return this.$delegate_hvewh0$_0.Instance_xflu9r$$default(type, tag);
  };
  BindingContextedKodein.prototype.Instance_ibvr8m$$default = function (argType, type, tag, arg) {
    return this.$delegate_hvewh0$_0.Instance_ibvr8m$$default(argType, type, tag, arg);
  };
  BindingContextedKodein.prototype.InstanceOrNull_xflu9r$$default = function (type, tag) {
    return this.$delegate_hvewh0$_0.InstanceOrNull_xflu9r$$default(type, tag);
  };
  BindingContextedKodein.prototype.InstanceOrNull_ibvr8m$$default = function (argType, type, tag, arg) {
    return this.$delegate_hvewh0$_0.InstanceOrNull_ibvr8m$$default(argType, type, tag, arg);
  };
  BindingContextedKodein.prototype.On_r7y1kq$ = function (context) {
    return this.$delegate_hvewh0$_0.On_r7y1kq$(context);
  };
  BindingContextedKodein.prototype.Provider_xflu9r$$default = function (type, tag) {
    return this.$delegate_hvewh0$_0.Provider_xflu9r$$default(type, tag);
  };
  BindingContextedKodein.prototype.Provider_veebl6$$default = function (argType, type, tag, arg) {
    return this.$delegate_hvewh0$_0.Provider_veebl6$$default(argType, type, tag, arg);
  };
  BindingContextedKodein.prototype.ProviderOrNull_xflu9r$$default = function (type, tag) {
    return this.$delegate_hvewh0$_0.ProviderOrNull_xflu9r$$default(type, tag);
  };
  BindingContextedKodein.prototype.ProviderOrNull_veebl6$$default = function (argType, type, tag, arg) {
    return this.$delegate_hvewh0$_0.ProviderOrNull_veebl6$$default(argType, type, tag, arg);
  };
  BindingContextedKodein.prototype.overriddenFactory = function () {
    return this.$delegate_hvewh0$_0.overriddenFactory();
  };
  BindingContextedKodein.prototype.overriddenFactoryOrNull = function () {
    return this.$delegate_hvewh0$_0.overriddenFactoryOrNull();
  };
  BindingContextedKodein.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BindingContextedKodein',
    interfaces: [BindingKodein]
  };
  function ScopeKey(scopeId, arg) {
    this.scopeId = scopeId;
    this.arg = arg;
  }
  ScopeKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScopeKey',
    interfaces: []
  };
  ScopeKey.prototype.component1 = function () {
    return this.scopeId;
  };
  ScopeKey.prototype.component2 = function () {
    return this.arg;
  };
  ScopeKey.prototype.copy_87tcpy$ = function (scopeId, arg) {
    return new ScopeKey(scopeId === void 0 ? this.scopeId : scopeId, arg === void 0 ? this.arg : arg);
  };
  ScopeKey.prototype.toString = function () {
    return 'ScopeKey(scopeId=' + Kotlin.toString(this.scopeId) + (', arg=' + Kotlin.toString(this.arg)) + ')';
  };
  ScopeKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.scopeId) | 0;
    result = result * 31 + Kotlin.hashCode(this.arg) | 0;
    return result;
  };
  ScopeKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.scopeId, other.scopeId) && Kotlin.equals(this.arg, other.arg)))));
  };
  function Multiton(scope, contextType, argType, createdType, refMaker, sync, creator) {
    if (refMaker === void 0)
      refMaker = null;
    if (sync === void 0)
      sync = true;
    this.scope_bsg5s9$_0 = scope;
    this.contextType_hs4ak4$_0 = contextType;
    this.argType_hsadnx$_0 = argType;
    this.createdType_wfqymz$_0 = createdType;
    this.sync = sync;
    this.creator_0 = creator;
    this._refMaker_0 = refMaker != null ? refMaker : SingletonReference_getInstance();
    this._scopeId_0 = new Any();
    this.copier_5poue3$_0 = KodeinBinding$Copier$Companion_getInstance().invoke_q3b22o$(Multiton$copier$lambda(this));
  }
  Object.defineProperty(Multiton.prototype, 'scope', {
    get: function () {
      return this.scope_bsg5s9$_0;
    }
  });
  Object.defineProperty(Multiton.prototype, 'contextType', {
    get: function () {
      return this.contextType_hs4ak4$_0;
    }
  });
  Object.defineProperty(Multiton.prototype, 'argType', {
    get: function () {
      return this.argType_hsadnx$_0;
    }
  });
  Object.defineProperty(Multiton.prototype, 'createdType', {
    get: function () {
      return this.createdType_wfqymz$_0;
    }
  });
  Multiton.prototype.factoryName_0 = function (params) {
    var $receiver = StringBuilder_init();
    $receiver.append_gw00v9$('multiton');
    if (!params.isEmpty())
      $receiver.append_gw00v9$(joinToString(params, ', ', '(', ')'));
    return $receiver.toString();
  };
  Multiton.prototype.factoryName = function () {
    var params = ArrayList_init_0(2);
    if (!equals(this._refMaker_0, SingletonReference_getInstance()))
      params.add_11rb$('ref = ' + TTOf(this._refMaker_0).simpleDispString());
    return this.factoryName_0(params);
  };
  Multiton.prototype.factoryFullName = function () {
    var params = ArrayList_init_0(2);
    if (!equals(this._refMaker_0, SingletonReference_getInstance()))
      params.add_11rb$('ref = ' + TTOf(this._refMaker_0).fullDispString());
    return this.factoryName_0(params);
  };
  function Multiton$getFactory$lambda$lambda$lambda(closure$kodein, this$Multiton, closure$arg) {
    return function () {
      return this$Multiton.creator_0(new BindingContextedKodein(closure$kodein, closure$kodein.context), closure$arg);
    };
  }
  function Multiton$getFactory$lambda$lambda(this$Multiton, closure$kodein, closure$arg) {
    return function () {
      return this$Multiton._refMaker_0.make_9ce4rd$(Multiton$getFactory$lambda$lambda$lambda(closure$kodein, this$Multiton, closure$arg));
    };
  }
  function Multiton$getFactory$lambda(closure$registry, this$Multiton, closure$kodein) {
    return function (arg) {
      var tmp$;
      return Kotlin.isType(tmp$ = closure$registry.getOrCreate_l6dfx6$(new ScopeKey(this$Multiton._scopeId_0, arg), this$Multiton.sync, Multiton$getFactory$lambda$lambda(this$Multiton, closure$kodein, arg)), Any) ? tmp$ : throwCCE();
    };
  }
  Multiton.prototype.getFactory_bdfjz$ = function (kodein, key) {
    var registry = this.scope.getRegistry_11rb$(kodein.context);
    return Multiton$getFactory$lambda(registry, this, kodein);
  };
  Object.defineProperty(Multiton.prototype, 'copier', {
    get: function () {
      return this.copier_5poue3$_0;
    }
  });
  function Multiton$copier$lambda(this$Multiton) {
    return function (it) {
      return new Multiton(this$Multiton.scope, this$Multiton.contextType, this$Multiton.argType, this$Multiton.createdType, this$Multiton._refMaker_0, this$Multiton.sync, this$Multiton.creator_0);
    };
  }
  Multiton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multiton',
    interfaces: [KodeinBinding]
  };
  function Provider_1(contextType, createdType, creator) {
    this.contextType_vxra1v$_0 = contextType;
    this.createdType_ha4lz0$_0 = createdType;
    this.creator = creator;
  }
  Object.defineProperty(Provider_1.prototype, 'contextType', {
    get: function () {
      return this.contextType_vxra1v$_0;
    }
  });
  Object.defineProperty(Provider_1.prototype, 'createdType', {
    get: function () {
      return this.createdType_ha4lz0$_0;
    }
  });
  Provider_1.prototype.factoryName = function () {
    return 'provider';
  };
  function Provider$getFactory$lambda(closure$kodein, this$Provider) {
    return function (it) {
      return this$Provider.creator(new NoArgBindingKodeinWrap(closure$kodein));
    };
  }
  Provider_1.prototype.getFactory_bdfjz$ = function (kodein, key) {
    return Provider$getFactory$lambda(kodein, this);
  };
  Provider_1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Provider',
    interfaces: [NoArgKodeinBinding]
  };
  function Singleton(scope, contextType, createdType, refMaker, sync, creator) {
    if (refMaker === void 0)
      refMaker = null;
    if (sync === void 0)
      sync = true;
    this.scope_ssd95m$_0 = scope;
    this.contextType_rdxkor$_0 = contextType;
    this.createdType_cqawlw$_0 = createdType;
    this.sync = sync;
    this.creator = creator;
    this._refMaker_0 = refMaker != null ? refMaker : SingletonReference_getInstance();
    this._scopeKey_0 = new ScopeKey(new Any(), Unit);
    this.copier_o00oac$_0 = KodeinBinding$Copier$Companion_getInstance().invoke_q3b22o$(Singleton$copier$lambda(this));
  }
  Object.defineProperty(Singleton.prototype, 'scope', {
    get: function () {
      return this.scope_ssd95m$_0;
    }
  });
  Object.defineProperty(Singleton.prototype, 'contextType', {
    get: function () {
      return this.contextType_rdxkor$_0;
    }
  });
  Object.defineProperty(Singleton.prototype, 'createdType', {
    get: function () {
      return this.createdType_cqawlw$_0;
    }
  });
  Singleton.prototype.factoryName_0 = function (params) {
    var $receiver = StringBuilder_init();
    $receiver.append_gw00v9$('singleton');
    if (!params.isEmpty())
      $receiver.append_gw00v9$(joinToString(params, ', ', '(', ')'));
    return $receiver.toString();
  };
  Singleton.prototype.factoryName = function () {
    var params = ArrayList_init_0(2);
    if (!equals(this._refMaker_0, SingletonReference_getInstance()))
      params.add_11rb$('ref = ' + TTOf(this._refMaker_0).simpleDispString());
    return this.factoryName_0(params);
  };
  Singleton.prototype.factoryFullName = function () {
    var params = ArrayList_init_0(2);
    if (!equals(this._refMaker_0, SingletonReference_getInstance()))
      params.add_11rb$('ref = ' + TTOf(this._refMaker_0).fullDispString());
    return this.factoryName_0(params);
  };
  function Singleton$getFactory$lambda$lambda$lambda(closure$kodein, this$Singleton) {
    return function () {
      return this$Singleton.creator(new NoArgBindingKodeinWrap(new BindingContextedKodein(closure$kodein, closure$kodein.context)));
    };
  }
  function Singleton$getFactory$lambda$lambda(this$Singleton, closure$kodein) {
    return function () {
      return this$Singleton._refMaker_0.make_9ce4rd$(Singleton$getFactory$lambda$lambda$lambda(closure$kodein, this$Singleton));
    };
  }
  function Singleton$getFactory$lambda(closure$registry, this$Singleton, closure$kodein) {
    return function (it) {
      var tmp$;
      return Kotlin.isType(tmp$ = closure$registry.getOrCreate_l6dfx6$(this$Singleton._scopeKey_0, this$Singleton.sync, Singleton$getFactory$lambda$lambda(this$Singleton, closure$kodein)), Any) ? tmp$ : throwCCE();
    };
  }
  Singleton.prototype.getFactory_bdfjz$ = function (kodein, key) {
    var registry = this.scope.getRegistry_11rb$(kodein.context);
    return Singleton$getFactory$lambda(registry, this, kodein);
  };
  Object.defineProperty(Singleton.prototype, 'copier', {
    get: function () {
      return this.copier_o00oac$_0;
    }
  });
  function Singleton$copier$lambda(this$Singleton) {
    return function (it) {
      return new Singleton(this$Singleton.scope, this$Singleton.contextType, this$Singleton.createdType, this$Singleton._refMaker_0, this$Singleton.sync, this$Singleton.creator);
    };
  }
  Singleton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Singleton',
    interfaces: [NoArgKodeinBinding]
  };
  function EagerSingleton(builder, createdType, creator) {
    this.createdType_qwu2v6$_0 = createdType;
    this.creator = creator;
    this.contextType_c97esb$_0 = get_AnyToken();
    this._instance_0 = null;
    this._lock_0 = new Any();
    var key = new Kodein$Key(get_AnyToken(), get_UnitToken(), this.createdType, null);
    builder.onReady_iwejki$(EagerSingleton_init$lambda(key, this));
    this.copier_bupcim$_0 = KodeinBinding$Copier$Companion_getInstance().invoke_q3b22o$(EagerSingleton$copier$lambda(this));
  }
  Object.defineProperty(EagerSingleton.prototype, 'createdType', {
    get: function () {
      return this.createdType_qwu2v6$_0;
    }
  });
  Object.defineProperty(EagerSingleton.prototype, 'contextType', {
    get: function () {
      return this.contextType_c97esb$_0;
    }
  });
  function EagerSingleton$getFactory$lambda(this$EagerSingleton, closure$kodein) {
    return function (f) {
      var predicate = getPropertyCallableRef('_instance', 0, function ($receiver) {
        return $receiver._instance_0;
      }.bind(null, this$EagerSingleton), function ($receiver, value) {
        $receiver._instance_0 = value;
      }.bind(null, this$EagerSingleton));
      var synchronizedIfNull$result;
      synchronizedIfNull$break: do {
        var tmp$;
        if ((tmp$ = predicate()) != null) {
          synchronizedIfNull$result = tmp$;
          break synchronizedIfNull$break;
        }
        var block$result;
        block$break: do {
          var tmp$_0;
          if ((tmp$_0 = predicate()) != null) {
            block$result = tmp$_0;
            break block$break;
          }
          var closure$kodein_0 = closure$kodein;
          var this$EagerSingleton_0 = this$EagerSingleton;
          var $receiver = this$EagerSingleton_0.creator(new NoArgBindingKodeinWrap(closure$kodein_0));
          this$EagerSingleton_0._instance_0 = $receiver;
          synchronizedIfNull$result = $receiver;
          break synchronizedIfNull$break;
        }
         while (false);
        var value = block$result;
        synchronizedIfNull$result = value;
      }
       while (false);
      return synchronizedIfNull$result;
    };
  }
  EagerSingleton.prototype.getFactory_0 = function (kodein) {
    return EagerSingleton$getFactory$lambda(this, kodein);
  };
  EagerSingleton.prototype.getFactory_bdfjz$ = function (kodein, key) {
    return this.getFactory_0(kodein);
  };
  EagerSingleton.prototype.factoryName = function () {
    return 'eagerSingleton';
  };
  Object.defineProperty(EagerSingleton.prototype, 'copier', {
    get: function () {
      return this.copier_bupcim$_0;
    }
  });
  function EagerSingleton_init$lambda(closure$key, this$EagerSingleton) {
    return function ($receiver) {
      this$EagerSingleton.getFactory_0(new BindingKodeinImpl($receiver, closure$key, null, 0))(Unit);
      return Unit;
    };
  }
  function EagerSingleton$copier$lambda(this$EagerSingleton) {
    return function (builder) {
      return new EagerSingleton(builder, this$EagerSingleton.createdType, this$EagerSingleton.creator);
    };
  }
  EagerSingleton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EagerSingleton',
    interfaces: [NoArgKodeinBinding]
  };
  function InstanceBinding(createdType, instance) {
    this.createdType_nqy6ah$_0 = createdType;
    this.instance = instance;
    this.contextType_wmj7ls$_0 = get_AnyToken();
  }
  Object.defineProperty(InstanceBinding.prototype, 'createdType', {
    get: function () {
      return this.createdType_nqy6ah$_0;
    }
  });
  InstanceBinding.prototype.factoryName = function () {
    return 'instance';
  };
  Object.defineProperty(InstanceBinding.prototype, 'contextType', {
    get: function () {
      return this.contextType_wmj7ls$_0;
    }
  });
  function InstanceBinding$getFactory$lambda(this$InstanceBinding) {
    return function (it) {
      return this$InstanceBinding.instance;
    };
  }
  InstanceBinding.prototype.getFactory_bdfjz$ = function (kodein, key) {
    return InstanceBinding$getFactory$lambda(this);
  };
  Object.defineProperty(InstanceBinding.prototype, 'description', {
    get: function () {
      return this.factoryName() + ' ( ' + this.createdType.simpleDispString() + ' ) ';
    }
  });
  Object.defineProperty(InstanceBinding.prototype, 'fullDescription', {
    get: function () {
      return this.factoryFullName() + ' ( ' + this.createdType.fullDispString() + ' ) ';
    }
  });
  InstanceBinding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceBinding',
    interfaces: [NoArgKodeinBinding]
  };
  var toProvider = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.toProvider_uvcnfo$', wrapFunction(function () {
    function toProvider$lambda(closure$arg, this$toProvider) {
      return function () {
        return this$toProvider(closure$arg());
      };
    }
    return function ($receiver, arg) {
      return toProvider$lambda(arg, $receiver);
    };
  }));
  var erasedComp1 = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedComp1_q3lmfv$', wrapFunction(function () {
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, A1_0, isA1) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(A1_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0]);
    };
  }));
  var erasedComp2 = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedComp2_2ron8f$', wrapFunction(function () {
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, A1_0, isA1, A2_0, isA2) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(A1_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      var erased$result_1;
      try {
        erased$result_1 = new JSTypeToken_init(getKClass(A2_0));
      }
       catch (ex_1) {
        if (Kotlin.isType(ex_1, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_1;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
    };
  }));
  var erasedComp3 = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedComp3_9tzkpq$', wrapFunction(function () {
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, A1_0, isA1, A2_0, isA2, A3_0, isA3) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(A1_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      var erased$result_1;
      try {
        erased$result_1 = new JSTypeToken_init(getKClass(A2_0));
      }
       catch (ex_1) {
        if (Kotlin.isType(ex_1, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_1;
      }
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(A3_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]);
    };
  }));
  var erasedComp4 = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedComp4_tzi1es$', wrapFunction(function () {
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(A1_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      var erased$result_1;
      try {
        erased$result_1 = new JSTypeToken_init(getKClass(A2_0));
      }
       catch (ex_1) {
        if (Kotlin.isType(ex_1, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_1;
      }
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(A3_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(A4_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]);
    };
  }));
  var erasedComp5 = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedComp5_booqn9$', wrapFunction(function () {
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(A1_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      var erased$result_1;
      try {
        erased$result_1 = new JSTypeToken_init(getKClass(A2_0));
      }
       catch (ex_1) {
        if (Kotlin.isType(ex_1, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_1;
      }
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(A3_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(A4_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      var erased$result_4;
      try {
        erased$result_4 = new JSTypeToken_init(getKClass(A5_0));
      }
       catch (ex_4) {
        if (Kotlin.isType(ex_4, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_4;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]);
    };
  }));
  var erasedSet = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedSet_287e2$', wrapFunction(function () {
    var Set = Kotlin.kotlin.collections.Set;
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Set));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0]);
    };
  }));
  var erasedList = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedList_287e2$', wrapFunction(function () {
    var List = Kotlin.kotlin.collections.List;
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(List));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0]);
    };
  }));
  var erasedMap = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erasedMap_q3lmfv$', wrapFunction(function () {
    var Map = Kotlin.kotlin.collections.Map;
    var CompositeTypeToken_init = _.org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (K_0, isK, V_0, isV) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Map));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(K_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      var erased$result_1;
      try {
        erased$result_1 = new JSTypeToken_init(getKClass(V_0));
      }
       catch (ex_1) {
        if (Kotlin.isType(ex_1, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_1;
      }
      return new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
    };
  }));
  function toProvider$lambda_3(closure$arg, this$toProvider) {
    return function () {
      return this$toProvider(closure$arg());
    };
  }
  function get_anyType_0($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.type, TypeToken) ? tmp$ : throwCCE();
  }
  function DKodeinBaseImpl(container, context) {
    this.container_v4h7pm$_0 = container;
    this.context = context;
  }
  Object.defineProperty(DKodeinBaseImpl.prototype, 'container', {
    get: function () {
      return this.container_v4h7pm$_0;
    }
  });
  Object.defineProperty(DKodeinBaseImpl.prototype, 'dkodein', {
    get: function () {
      return this;
    }
  });
  Object.defineProperty(DKodeinBaseImpl.prototype, 'lazy', {
    get: function () {
      var tmp$;
      return On(new KodeinImpl(Kotlin.isType(tmp$ = this.container, KodeinContainerImpl) ? tmp$ : throwCCE()), this.context);
    }
  });
  DKodeinBaseImpl.prototype.On_r7y1kq$ = function (context) {
    return new DKodeinImpl(this.container, context);
  };
  DKodeinBaseImpl.prototype.Factory_nijjsc$$default = function (argType, type, tag) {
    var tmp$;
    return this.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = this.context.type, TypeToken) ? tmp$ : throwCCE(), argType, type, tag), this.context.value);
  };
  DKodeinBaseImpl.prototype.FactoryOrNull_nijjsc$$default = function (argType, type, tag) {
    var tmp$;
    return this.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = this.context.type, TypeToken) ? tmp$ : throwCCE(), argType, type, tag), this.context.value);
  };
  DKodeinBaseImpl.prototype.Provider_xflu9r$$default = function (type, tag) {
    var tmp$;
    return this.container.provider_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = this.context.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), type, tag), this.context.value);
  };
  DKodeinBaseImpl.prototype.Provider_veebl6$$default = function (argType, type, tag, arg) {
    var tmp$;
    return toProvider$lambda_3(arg, this.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = this.context.type, TypeToken) ? tmp$ : throwCCE(), argType, type, tag), this.context.value));
  };
  DKodeinBaseImpl.prototype.ProviderOrNull_xflu9r$$default = function (type, tag) {
    var tmp$;
    return this.container.providerOrNull_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = this.context.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), type, tag), this.context.value);
  };
  DKodeinBaseImpl.prototype.ProviderOrNull_veebl6$$default = function (argType, type, tag, arg) {
    var tmp$;
    var tmp$_0;
    return (tmp$ = this.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$_0 = this.context.type, TypeToken) ? tmp$_0 : throwCCE(), argType, type, tag), this.context.value)) != null ? toProvider$lambda_3(arg, tmp$) : null;
  };
  DKodeinBaseImpl.prototype.Instance_xflu9r$$default = function (type, tag) {
    var tmp$;
    return this.container.provider_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$ = this.context.type, TypeToken) ? tmp$ : throwCCE(), get_UnitToken(), type, tag), this.context.value)();
  };
  DKodeinBaseImpl.prototype.Instance_ibvr8m$$default = function (argType, type, tag, arg) {
    var tmp$;
    return this.container.factory_3h818e$(new Kodein$Key(Kotlin.isType(tmp$ = this.context.type, TypeToken) ? tmp$ : throwCCE(), argType, type, tag), this.context.value)(arg);
  };
  DKodeinBaseImpl.prototype.InstanceOrNull_xflu9r$$default = function (type, tag) {
    var tmp$;
    var tmp$_0;
    return (tmp$ = this.container.providerOrNull_wtviuz$(new Kodein$Key(Kotlin.isType(tmp$_0 = this.context.type, TypeToken) ? tmp$_0 : throwCCE(), get_UnitToken(), type, tag), this.context.value)) != null ? tmp$() : null;
  };
  DKodeinBaseImpl.prototype.InstanceOrNull_ibvr8m$$default = function (argType, type, tag, arg) {
    var tmp$;
    var tmp$_0;
    return (tmp$ = this.container.factoryOrNull_3h818e$(new Kodein$Key(Kotlin.isType(tmp$_0 = this.context.type, TypeToken) ? tmp$_0 : throwCCE(), argType, type, tag), this.context.value)) != null ? tmp$(arg) : null;
  };
  DKodeinBaseImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DKodeinBaseImpl',
    interfaces: [DKodein]
  };
  function KodeinBuilderImpl(moduleName, prefix, importedModules, containerBuilder) {
    this.moduleName_0 = moduleName;
    this.prefix_0 = prefix;
    this.importedModules_8be2vx$ = importedModules;
    this.containerBuilder_edriv5$_0 = containerBuilder;
    this.contextType_s8049c$_0 = get_AnyToken();
  }
  Object.defineProperty(KodeinBuilderImpl.prototype, 'containerBuilder', {
    get: function () {
      return this.containerBuilder_edriv5$_0;
    }
  });
  Object.defineProperty(KodeinBuilderImpl.prototype, 'contextType', {
    get: function () {
      return this.contextType_s8049c$_0;
    }
  });
  Object.defineProperty(KodeinBuilderImpl.prototype, 'scope', {
    get: function () {
      return new NoScope();
    }
  });
  function KodeinBuilderImpl$TypeBinder($outer, type, tag, overrides) {
    this.$outer = $outer;
    this.type = type;
    this.tag = tag;
    this.overrides = overrides;
  }
  Object.defineProperty(KodeinBuilderImpl$TypeBinder.prototype, 'containerBuilder_8be2vx$', {
    get: function () {
      return this.$outer.containerBuilder;
    }
  });
  KodeinBuilderImpl$TypeBinder.prototype.with_byf4r2$ = function (binding) {
    this.containerBuilder_8be2vx$.bind_5vrb93$(new Kodein$Key(binding.contextType, binding.argType, this.type, this.tag), binding, this.$outer.moduleName_0, this.overrides);
  };
  KodeinBuilderImpl$TypeBinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeBinder',
    interfaces: [Kodein$Builder$TypeBinder]
  };
  function KodeinBuilderImpl$DirectBinder($outer, _tag, _overrides) {
    this.$outer = $outer;
    this._tag_0 = _tag;
    this._overrides_0 = _overrides;
  }
  KodeinBuilderImpl$DirectBinder.prototype.from_hfwm1e$ = function (binding) {
    if (equals(binding.createdType, get_UnitToken())) {
      throw IllegalArgumentException_init('Using `bind() from` with a *Unit* ' + binding.factoryName() + ' is most likely an error. If you are sure you want to bind the Unit type, please use `bind<Unit>() with ' + binding.factoryName() + '`.');
    }
    this.$outer.containerBuilder.bind_5vrb93$(new Kodein$Key(binding.contextType, binding.argType, binding.createdType, this._tag_0), binding, this.$outer.moduleName_0, this._overrides_0);
  };
  KodeinBuilderImpl$DirectBinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirectBinder',
    interfaces: [Kodein$Builder$DirectBinder]
  };
  function KodeinBuilderImpl$ConstantBinder($outer, _tag, _overrides) {
    this.$outer = $outer;
    this._tag_0 = _tag;
    this._overrides_0 = _overrides;
  }
  KodeinBuilderImpl$ConstantBinder.prototype.With_xhfjco$ = function (valueType, value) {
    this.$outer.Bind_b6zv6g$(this._tag_0, this._overrides_0).from_hfwm1e$(new InstanceBinding(valueType, value));
  };
  KodeinBuilderImpl$ConstantBinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantBinder',
    interfaces: [Kodein$Builder$ConstantBinder]
  };
  KodeinBuilderImpl.prototype.Bind_lpxwra$$default = function (type, tag, overrides) {
    return new KodeinBuilderImpl$TypeBinder(this, type, tag, overrides);
  };
  KodeinBuilderImpl.prototype.Bind_b6zv6g$$default = function (tag, overrides) {
    return new KodeinBuilderImpl$DirectBinder(this, tag, overrides);
  };
  KodeinBuilderImpl.prototype.constant_obdoaf$$default = function (tag, overrides) {
    return new KodeinBuilderImpl$ConstantBinder(this, tag, overrides);
  };
  KodeinBuilderImpl.prototype.import_mxj0o6$$default = function (module_0, allowOverride) {
    var moduleName = this.prefix_0 + module_0.name;
    if (moduleName.length > 0 && this.importedModules_8be2vx$.contains_11rb$(moduleName)) {
      throw IllegalStateException_init('Module ' + '"' + moduleName + '"' + ' has already been imported!');
    }
    this.importedModules_8be2vx$.add_11rb$(moduleName);
    module_0.init(new KodeinBuilderImpl(moduleName, this.prefix_0 + module_0.prefix, this.importedModules_8be2vx$, this.containerBuilder.subBuilder_dqye30$(allowOverride, module_0.allowSilentOverride)));
  };
  KodeinBuilderImpl.prototype.importAll_7ak0yr$$default = function (modules, allowOverride) {
    var tmp$;
    tmp$ = modules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.import_mxj0o6$(element, allowOverride);
    }
  };
  KodeinBuilderImpl.prototype.importAll_nybait$$default = function (modules, allowOverride) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== modules.length; ++tmp$) {
      var element = modules[tmp$];
      this.import_mxj0o6$(element, allowOverride);
    }
  };
  KodeinBuilderImpl.prototype.importOnce_mxj0o6$$default = function (module_0, allowOverride) {
    if (module_0.name.length === 0)
      throw IllegalStateException_init('importOnce must be given a named module.');
    if (!this.importedModules_8be2vx$.contains_11rb$(module_0.name))
      this.import_mxj0o6$(module_0, allowOverride);
  };
  KodeinBuilderImpl.prototype.onReady_iwejki$ = function (cb) {
    this.containerBuilder.onReady_iwejki$(cb);
  };
  KodeinBuilderImpl.prototype.RegisterContextTranslator_5jq22i$ = function (translator) {
    this.containerBuilder.registerContextTranslator_5jq22i$(translator);
  };
  KodeinBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinBuilderImpl',
    interfaces: [Kodein$Builder]
  };
  function KodeinMainBuilderImpl(allowSilentOverride) {
    KodeinBuilderImpl.call(this, null, '', HashSet_init(), new KodeinContainerBuilderImpl(true, allowSilentOverride, HashMap_init(), ArrayList_init(), ArrayList_init()));
    this.externalSources_yrtd6t$_0 = ArrayList_init();
    this.fullDescriptionOnError_6cdgme$_0 = Kodein$Companion_getInstance().defaultFullDescriptionOnError;
  }
  Object.defineProperty(KodeinMainBuilderImpl.prototype, 'externalSources', {
    get: function () {
      return this.externalSources_yrtd6t$_0;
    }
  });
  Object.defineProperty(KodeinMainBuilderImpl.prototype, 'fullDescriptionOnError', {
    get: function () {
      return this.fullDescriptionOnError_6cdgme$_0;
    },
    set: function (fullDescriptionOnError) {
      this.fullDescriptionOnError_6cdgme$_0 = fullDescriptionOnError;
    }
  });
  KodeinMainBuilderImpl.prototype.extend_xr6j32$$default = function (kodein, allowOverride, copy) {
    var keys = copy.keySet_8c2ul3$(kodein.container.tree);
    this.containerBuilder.extend_su2hik$(kodein.container, allowOverride, keys);
    addAll(this.externalSources, kodein.container.tree.externalSources);
    var tmp$ = this.importedModules_8be2vx$;
    var $receiver = this.containerBuilder.bindingsMap_8be2vx$;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var $receiver_0 = element.value;
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination_0.add_11rb$(item.fromModule);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    tmp$.addAll_brywnq$(filterNotNull(destination));
  };
  KodeinMainBuilderImpl.prototype.extend_q0y52g$$default = function (dkodein, allowOverride, copy) {
    var keys = copy.keySet_8c2ul3$(dkodein.container.tree);
    this.containerBuilder.extend_su2hik$(dkodein.container, allowOverride, keys);
    addAll(this.externalSources, dkodein.container.tree.externalSources);
    var tmp$ = this.importedModules_8be2vx$;
    var $receiver = this.containerBuilder.bindingsMap_8be2vx$;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var $receiver_0 = element.value;
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination_0.add_11rb$(item.fromModule);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    tmp$.addAll_brywnq$(filterNotNull(destination));
  };
  KodeinMainBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinMainBuilderImpl',
    interfaces: [Kodein$MainBuilder, KodeinBuilderImpl]
  };
  function KodeinContainerBuilderImpl(allowOverride, silentOverride, bindingsMap, callbacks, translators) {
    this.bindingsMap_8be2vx$ = bindingsMap;
    this.callbacks_8be2vx$ = callbacks;
    this.translators_8be2vx$ = translators;
    this._overrideMode_0 = KodeinContainerBuilderImpl$OverrideMode$Companion_getInstance().get_dqye30$(allowOverride, silentOverride);
  }
  function KodeinContainerBuilderImpl$OverrideMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KodeinContainerBuilderImpl$OverrideMode_initFields() {
    KodeinContainerBuilderImpl$OverrideMode_initFields = function () {
    };
    new KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT();
    new KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT();
    new KodeinContainerBuilderImpl$OverrideMode$FORBID();
    KodeinContainerBuilderImpl$OverrideMode$Companion_getInstance();
  }
  function KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT() {
    KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT_instance = this;
    KodeinContainerBuilderImpl$OverrideMode.call(this, 'ALLOW_SILENT', 0);
  }
  Object.defineProperty(KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT.prototype, 'isAllowed', {
    get: function () {
      return true;
    }
  });
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT.prototype.must_1v8dbw$ = function (overrides) {
    return overrides;
  };
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ALLOW_SILENT',
    interfaces: [KodeinContainerBuilderImpl$OverrideMode]
  };
  var KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT_instance = null;
  function KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT_getInstance() {
    KodeinContainerBuilderImpl$OverrideMode_initFields();
    return KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT_instance;
  }
  function KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT() {
    KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT_instance = this;
    KodeinContainerBuilderImpl$OverrideMode.call(this, 'ALLOW_EXPLICIT', 1);
  }
  Object.defineProperty(KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT.prototype, 'isAllowed', {
    get: function () {
      return true;
    }
  });
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT.prototype.must_1v8dbw$ = function (overrides) {
    return overrides != null ? overrides : false;
  };
  KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ALLOW_EXPLICIT',
    interfaces: [KodeinContainerBuilderImpl$OverrideMode]
  };
  var KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT_instance = null;
  function KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT_getInstance() {
    KodeinContainerBuilderImpl$OverrideMode_initFields();
    return KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT_instance;
  }
  function KodeinContainerBuilderImpl$OverrideMode$FORBID() {
    KodeinContainerBuilderImpl$OverrideMode$FORBID_instance = this;
    KodeinContainerBuilderImpl$OverrideMode.call(this, 'FORBID', 2);
  }
  Object.defineProperty(KodeinContainerBuilderImpl$OverrideMode$FORBID.prototype, 'isAllowed', {
    get: function () {
      return false;
    }
  });
  KodeinContainerBuilderImpl$OverrideMode$FORBID.prototype.must_1v8dbw$ = function (overrides) {
    if (overrides != null && overrides)
      throw new Kodein$OverridingException('Overriding has been forbidden');
    else
      return false;
  };
  KodeinContainerBuilderImpl$OverrideMode$FORBID.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FORBID',
    interfaces: [KodeinContainerBuilderImpl$OverrideMode]
  };
  var KodeinContainerBuilderImpl$OverrideMode$FORBID_instance = null;
  function KodeinContainerBuilderImpl$OverrideMode$FORBID_getInstance() {
    KodeinContainerBuilderImpl$OverrideMode_initFields();
    return KodeinContainerBuilderImpl$OverrideMode$FORBID_instance;
  }
  function KodeinContainerBuilderImpl$OverrideMode$Companion() {
    KodeinContainerBuilderImpl$OverrideMode$Companion_instance = this;
  }
  KodeinContainerBuilderImpl$OverrideMode$Companion.prototype.get_dqye30$ = function (allow, silent) {
    if (!allow)
      return KodeinContainerBuilderImpl$OverrideMode$FORBID_getInstance();
    if (silent)
      return KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT_getInstance();
    return KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT_getInstance();
  };
  KodeinContainerBuilderImpl$OverrideMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KodeinContainerBuilderImpl$OverrideMode$Companion_instance = null;
  function KodeinContainerBuilderImpl$OverrideMode$Companion_getInstance() {
    KodeinContainerBuilderImpl$OverrideMode_initFields();
    if (KodeinContainerBuilderImpl$OverrideMode$Companion_instance === null) {
      new KodeinContainerBuilderImpl$OverrideMode$Companion();
    }
    return KodeinContainerBuilderImpl$OverrideMode$Companion_instance;
  }
  KodeinContainerBuilderImpl$OverrideMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OverrideMode',
    interfaces: [Enum]
  };
  function KodeinContainerBuilderImpl$OverrideMode$values() {
    return [KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT_getInstance(), KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT_getInstance(), KodeinContainerBuilderImpl$OverrideMode$FORBID_getInstance()];
  }
  KodeinContainerBuilderImpl$OverrideMode.values = KodeinContainerBuilderImpl$OverrideMode$values;
  function KodeinContainerBuilderImpl$OverrideMode$valueOf(name) {
    switch (name) {
      case 'ALLOW_SILENT':
        return KodeinContainerBuilderImpl$OverrideMode$ALLOW_SILENT_getInstance();
      case 'ALLOW_EXPLICIT':
        return KodeinContainerBuilderImpl$OverrideMode$ALLOW_EXPLICIT_getInstance();
      case 'FORBID':
        return KodeinContainerBuilderImpl$OverrideMode$FORBID_getInstance();
      default:throwISE('No enum constant org.kodein.di.internal.KodeinContainerBuilderImpl.OverrideMode.' + name);
    }
  }
  KodeinContainerBuilderImpl$OverrideMode.valueOf_61zpoe$ = KodeinContainerBuilderImpl$OverrideMode$valueOf;
  KodeinContainerBuilderImpl.prototype.checkOverrides_0 = function (key, overrides) {
    var mustOverride = this._overrideMode_0.must_1v8dbw$(overrides);
    if (mustOverride != null) {
      var tmp$ = mustOverride;
      if (tmp$) {
        var $receiver = this.bindingsMap_8be2vx$;
        var tmp$_0;
        tmp$ = !(Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key);
      }
      if (tmp$)
        throw new Kodein$OverridingException('Binding ' + key + ' must override an existing binding.');
      var tmp$_1 = !mustOverride;
      if (tmp$_1) {
        var $receiver_0 = this.bindingsMap_8be2vx$;
        var tmp$_2;
        tmp$_1 = (Kotlin.isType(tmp$_2 = $receiver_0, Map) ? tmp$_2 : throwCCE()).containsKey_11rb$(key);
      }
      if (tmp$_1)
        throw new Kodein$OverridingException('Binding ' + key + ' must not override an existing binding.');
    }
  };
  KodeinContainerBuilderImpl.prototype.bind_5vrb93$$default = function (key, binding, fromModule, overrides) {
    key.type.checkIsReified_za3rmp$(key);
    key.argType.checkIsReified_za3rmp$(key);
    this.checkOverrides_0(key, overrides);
    var $receiver = this.bindingsMap_8be2vx$;
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = newLinkedList();
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var bindings = tmp$;
    bindings.add_wxm5ur$(0, new KodeinDefining(binding, fromModule));
  };
  KodeinContainerBuilderImpl.prototype.checkMatch_0 = function (allowOverride) {
    if (!this._overrideMode_0.isAllowed && allowOverride)
      throw new Kodein$OverridingException('Overriding has been forbidden');
  };
  KodeinContainerBuilderImpl.prototype.extend_su2hik$$default = function (container, allowOverride, copy) {
    this.checkMatch_0(allowOverride);
    var tmp$;
    tmp$ = container.tree.bindings.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var bindings = element.value;
      var tmp$_0;
      if (!allowOverride)
        this.checkOverrides_0(key, null);
      if (copy.contains_11rb$(key)) {
        var $receiver = newLinkedList();
        var tmp$_1;
        tmp$_1 = bindings.iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          var tmp$_2, tmp$_3;
          $receiver.add_11rb$(new KodeinDefining((tmp$_3 = (tmp$_2 = item.binding.copier) != null ? tmp$_2.copy_h7qrd7$(this) : null) != null ? tmp$_3 : item.binding, item.fromModule));
        }
        tmp$_0 = $receiver;
      }
       else {
        tmp$_0 = newLinkedList_0(bindings);
      }
      var newBindings = tmp$_0;
      this.bindingsMap_8be2vx$.put_xwzc9p$(key, newBindings);
    }
    addAll(this.translators_8be2vx$, container.tree.registeredTranslators);
  };
  KodeinContainerBuilderImpl.prototype.subBuilder_dqye30$$default = function (allowOverride, silentOverride) {
    this.checkMatch_0(allowOverride);
    return new KodeinContainerBuilderImpl(allowOverride, silentOverride, this.bindingsMap_8be2vx$, this.callbacks_8be2vx$, this.translators_8be2vx$);
  };
  KodeinContainerBuilderImpl.prototype.onReady_iwejki$ = function (cb) {
    this.callbacks_8be2vx$.add_11rb$(cb);
  };
  KodeinContainerBuilderImpl.prototype.registerContextTranslator_5jq22i$ = function (translator) {
    this.translators_8be2vx$.add_11rb$(translator);
  };
  KodeinContainerBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinContainerBuilderImpl',
    interfaces: [KodeinContainer$Builder]
  };
  function KodeinContainerImpl(tree, node, fullDescriptionOnError) {
    this.tree_v872eb$_0 = tree;
    this.node_0 = node;
    this.fullDescriptionOnError_0 = fullDescriptionOnError;
    this.initCallbacks_rssl1$_0 = null;
  }
  Object.defineProperty(KodeinContainerImpl.prototype, 'tree', {
    get: function () {
      return this.tree_v872eb$_0;
    }
  });
  Object.defineProperty(KodeinContainerImpl.prototype, 'initCallbacks', {
    get: function () {
      return this.initCallbacks_rssl1$_0;
    },
    set: function (initCallbacks) {
      this.initCallbacks_rssl1$_0 = initCallbacks;
    }
  });
  function KodeinContainerImpl$Node(key, overrideLevel, parent, fullDescriptionOnError) {
    this.key_0 = key;
    this.overrideLevel_0 = overrideLevel;
    this.parent_0 = parent;
    this.fullDescriptionOnError_0 = fullDescriptionOnError;
  }
  KodeinContainerImpl$Node.prototype.check_jiuldt$ = function (searchedKey, searchedOverrideLevel) {
    if (!this.recursiveCheck_0(this, searchedKey, searchedOverrideLevel)) {
      var list = plus(this.recursiveLoop_0(this, searchedKey, searchedOverrideLevel, emptyList()), this.displayString_0(searchedKey, this.overrideLevel_0));
      var sb = StringBuilder_init();
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = list.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        sb.append_gw00v9$('  ');
        switch (index_0) {
          case 0:
            sb.append_gw00v9$('   ');
            break;
          case 1:
            sb.append_gw00v9$('  \u2554\u2569>');
            break;
          default:sb.append_gw00v9$('  \u2551');
            sb.append_gw00v9$(repeat('  ', index_0 - 1 | 0));
            sb.append_gw00v9$('\u255A>');
            break;
        }
        sb.append_gw00v9$(item);
        sb.append_gw00v9$('\n');
      }
      sb.append_gw00v9$('    \u255A');
      sb.append_gw00v9$(repeat('\u2550\u2550', list.size - 1 | 0));
      sb.append_gw00v9$('\u255D');
      throw new Kodein$DependencyLoopException('Dependency recursion:' + '\n' + sb);
    }
  };
  KodeinContainerImpl$Node.prototype.displayString_0 = function (key, overrideLevel) {
    var descProp = this.fullDescriptionOnError_0 ? getPropertyCallableRef('bindFullDescription', 0, function ($receiver) {
      return $receiver.bindFullDescription;
    }.bind(null, key)) : getPropertyCallableRef('bindDescription', 0, function ($receiver) {
      return $receiver.bindDescription;
    }.bind(null, key));
    return overrideLevel !== 0 ? 'overridden ' + descProp.get() : descProp.get();
  };
  KodeinContainerImpl$Node.prototype.recursiveLoop_0 = function (node, firstKey, firstOverrideLevel, tail) {
    var tmp$;
    if (node.parent_0 == null || ((firstKey != null ? firstKey.equals(node.key_0) : null) && firstOverrideLevel === node.overrideLevel_0))
      tmp$ = plus_0(listOf(this.displayString_0(node.key_0, node.overrideLevel_0)), tail);
    else
      return this.recursiveLoop_0(node.parent_0, firstKey, firstOverrideLevel, plus_0(listOf(this.displayString_0(node.key_0, node.overrideLevel_0)), tail));
    return tmp$;
  };
  KodeinContainerImpl$Node.prototype.recursiveCheck_0 = function (node, searchedKey, searchedOverrideLevel) {
    var tmp$;
    return ((tmp$ = node.key_0) != null ? tmp$.equals(searchedKey) : null) && node.overrideLevel_0 === searchedOverrideLevel ? false : node.parent_0 == null ? true : this.recursiveCheck_0(node.parent_0, searchedKey, searchedOverrideLevel);
  };
  KodeinContainerImpl$Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  KodeinContainerImpl.prototype.bindingKodein_0 = function (key, context, tree, overrideLevel) {
    var container = new KodeinContainerImpl(tree, new KodeinContainerImpl$Node(key, overrideLevel, this.node_0, this.fullDescriptionOnError_0), this.fullDescriptionOnError_0);
    return new BindingKodeinImpl(new DKodeinImpl(container, context), key, context.value, overrideLevel);
  };
  KodeinContainerImpl.prototype.factoryOrNull_3h818e$$default = function (key, context, overrideLevel) {
    var it = this.tree.find_7kv2rd$(key, 0);
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (it.size === 1) {
      var tmp$_3 = it.get_za3lpa$(0);
      var definition = tmp$_3.component2()
      , translator = tmp$_3.component3();
      (tmp$ = this.node_0) != null ? (tmp$.check_jiuldt$(key, 0), Unit) : null;
      var kContext = (tmp$_1 = translator != null ? toKContext(translator, context) : null) != null ? tmp$_1 : Kotlin.isType(tmp$_0 = KodeinContext$Companion_getInstance().invoke_wm568t$(key.contextType, context), KodeinContext) ? tmp$_0 : throwCCE();
      Kotlin.isType(tmp$_2 = key, Kodein$Key) ? tmp$_2 : throwCCE();
      var bindingKodein = this.bindingKodein_0(key, kContext, definition.tree, overrideLevel);
      return definition.binding.getFactory_bdfjz$(bindingKodein, key);
    }
    var bindingKodein_0 = this.bindingKodein_0(key, KodeinContext$Companion_getInstance().invoke_wm568t$(key.contextType, context), this.tree, overrideLevel);
    var tmp$_4;
    tmp$_4 = this.tree.externalSources.iterator();
    while (tmp$_4.hasNext()) {
      var element = tmp$_4.next();
      var tmp$_5;
      if ((tmp$_5 = element.getFactory_wct8sw$(bindingKodein_0, key)) != null) {
        var tmp$_6, tmp$_7;
        (tmp$_6 = this.node_0) != null ? (tmp$_6.check_jiuldt$(key, 0), Unit) : null;
        return typeof (tmp$_7 = tmp$_5) === 'function' ? tmp$_7 : throwCCE();
      }
    }
    return null;
  };
  function KodeinContainerImpl$factory$lambda($receiver, it) {
    return fullDescription($receiver, it);
  }
  function KodeinContainerImpl$factory$lambda_0($receiver, it) {
    return description($receiver, it);
  }
  KodeinContainerImpl.prototype.factory_3h818e$$default = function (key, context, overrideLevel) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = this.tree.find_7kv2rd$(key, overrideLevel);
    if (result.size === 1) {
      var tmp$_3 = result.get_za3lpa$(0);
      var definition = tmp$_3.component2()
      , translator = tmp$_3.component3();
      (tmp$ = this.node_0) != null ? (tmp$.check_jiuldt$(key, overrideLevel), Unit) : null;
      var kContext = (tmp$_1 = translator != null ? toKContext(translator, context) : null) != null ? tmp$_1 : Kotlin.isType(tmp$_0 = KodeinContext$Companion_getInstance().invoke_wm568t$(key.contextType, context), KodeinContext) ? tmp$_0 : throwCCE();
      Kotlin.isType(tmp$_2 = key, Kodein$Key) ? tmp$_2 : throwCCE();
      var bindingKodein = this.bindingKodein_0(key, kContext, definition.tree, overrideLevel);
      return definition.binding.getFactory_bdfjz$(bindingKodein, key);
    }
    var bindingKodein_0 = this.bindingKodein_0(key, KodeinContext$Companion_getInstance().invoke_wm568t$(key.contextType, context), this.tree, overrideLevel);
    var tmp$_4;
    tmp$_4 = this.tree.externalSources.iterator();
    while (tmp$_4.hasNext()) {
      var element = tmp$_4.next();
      var tmp$_5;
      if ((tmp$_5 = element.getFactory_wct8sw$(bindingKodein_0, key)) != null) {
        var tmp$_6, tmp$_7;
        (tmp$_6 = this.node_0) != null ? (tmp$_6.check_jiuldt$(key, overrideLevel), Unit) : null;
        return typeof (tmp$_7 = tmp$_5) === 'function' ? tmp$_7 : throwCCE();
      }
    }
    var withOverrides = overrideLevel !== 0;
    var descProp = this.fullDescriptionOnError_0 ? getPropertyCallableRef('fullDescription', 0, function ($receiver) {
      return $receiver.fullDescription;
    }.bind(null, key)) : getPropertyCallableRef('description', 0, function ($receiver) {
      return $receiver.description;
    }.bind(null, key));
    var descFun = this.fullDescriptionOnError_0 ? KodeinContainerImpl$factory$lambda : KodeinContainerImpl$factory$lambda_0;
    if (result.isEmpty()) {
      var $receiver = StringBuilder_init();
      $receiver.append_gw00v9$('No binding found for ' + descProp.get() + '\n');
      var forType = this.tree.find_f45sx$(new SearchSpecs(void 0, void 0, key.type));
      if (!forType.isEmpty()) {
        var tmp$_8 = 'Available bindings for this type:' + '\n';
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(forType, 10)), 16);
        var destination = LinkedHashMap_init_0(capacity);
        var tmp$_9;
        tmp$_9 = forType.iterator();
        while (tmp$_9.hasNext()) {
          var element_0 = tmp$_9.next();
          var pair = to(element_0.first, element_0.second);
          destination.put_xwzc9p$(pair.first, pair.second);
        }
        $receiver.append_gw00v9$(tmp$_8 + descFun(destination, withOverrides));
      }
      $receiver.append_gw00v9$('Registered in this Kodein container:' + '\n' + descFun(this.tree.bindings, withOverrides));
      var description = $receiver.toString();
      throw new Kodein$NotFoundException(key, description);
    }
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(result, 10)), 16);
    var destination_0 = LinkedHashMap_init_0(capacity_0);
    var tmp$_10;
    tmp$_10 = result.iterator();
    while (tmp$_10.hasNext()) {
      var element_1 = tmp$_10.next();
      var pair_0 = to(element_1.first, ensureNotNull(this.tree.get_1fn8vm$(element_1.first)).second);
      destination_0.put_xwzc9p$(pair_0.first, pair_0.second);
    }
    var potentials = destination_0;
    var $receiver_0 = this.tree.bindings;
    var destination_1 = LinkedHashMap_init();
    var tmp$_11;
    tmp$_11 = $receiver_0.entries.iterator();
    while (tmp$_11.hasNext()) {
      var element_2 = tmp$_11.next();
      var key_0 = element_2.key;
      if (!potentials.keys.contains_11rb$(key_0)) {
        destination_1.put_xwzc9p$(element_2.key, element_2.value);
      }
    }
    var others = destination_1;
    throw new Kodein$NotFoundException(key, potentials.size.toString() + ' bindings found that match ' + key + ':' + '\n' + descFun(potentials, withOverrides) + 'Other bindings registered in Kodein:' + '\n' + descFun(others, withOverrides));
  };
  KodeinContainerImpl.prototype.allFactories_3h818e$$default = function (key, context, overrideLevel) {
    var result = this.tree.find_7kv2rd$(key, overrideLevel, true);
    var destination = ArrayList_init_0(collectionSizeOrDefault(result, 10));
    var tmp$;
    tmp$ = result.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var definition = item.component2()
      , translator = item.component3();
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      (tmp$_1 = this.node_0) != null ? (tmp$_1.check_jiuldt$(key, overrideLevel), Unit) : null;
      var kContext = (tmp$_3 = translator != null ? toKContext(translator, context) : null) != null ? tmp$_3 : Kotlin.isType(tmp$_2 = KodeinContext$Companion_getInstance().invoke_wm568t$(key.contextType, context), KodeinContext) ? tmp$_2 : throwCCE();
      Kotlin.isType(tmp$_4 = key, Kodein$Key) ? tmp$_4 : throwCCE();
      var bindingKodein = this.bindingKodein_0(key, kContext, definition.tree, overrideLevel);
      tmp$_0.call(destination, definition.binding.getFactory_bdfjz$(bindingKodein, key));
    }
    return destination;
  };
  KodeinContainerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinContainerImpl',
    interfaces: [KodeinContainer]
  };
  function KodeinContainerImpl_init(builder, externalSources, fullDescriptionOnError, runCallbacks, $this) {
    $this = $this || Object.create(KodeinContainerImpl.prototype);
    KodeinContainerImpl.call($this, new KodeinTreeImpl(builder.bindingsMap_8be2vx$, externalSources, builder.translators_8be2vx$), null, fullDescriptionOnError);
    var init = KodeinContainerImpl_init$lambda($this, builder);
    if (runCallbacks)
      init();
    else {
      var lock = new Any();
      $this.initCallbacks = KodeinContainerImpl_init$lambda_0(lock, $this, init);
    }
    return $this;
  }
  function KodeinContainerImpl_init$lambda(this$KodeinContainerImpl, closure$builder) {
    return function () {
      var direct = new DKodeinImpl(this$KodeinContainerImpl, get_AnyKodeinContext());
      var tmp$;
      tmp$ = closure$builder.callbacks_8be2vx$.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(direct);
      }
      return Unit;
    };
  }
  function KodeinContainerImpl_init$lambda_0(closure$lock, this$KodeinContainerImpl, closure$init) {
    return function () {
      var predicate = getPropertyCallableRef('initCallbacks', 0, function ($receiver) {
        return $receiver.initCallbacks;
      }.bind(null, this$KodeinContainerImpl), function ($receiver, value) {
        $receiver.initCallbacks = value;
      }.bind(null, this$KodeinContainerImpl));
      synchronizedIfNotNull$break: do {
        if (predicate() == null) {
          break synchronizedIfNotNull$break;
        }
        block$break: do {
          var tmp$;
          tmp$ = predicate();
          if (tmp$ == null) {
            break block$break;
          }
          var value = tmp$;
          var this$KodeinContainerImpl_0 = this$KodeinContainerImpl;
          var closure$init_0 = closure$init;
          this$KodeinContainerImpl_0.initCallbacks = null;
          closure$init_0();
        }
         while (false);
      }
       while (false);
      return Unit;
    };
  }
  function KodeinImpl(_container) {
    KodeinImpl$Companion_getInstance();
    this._container_0 = _container;
    this.container_pp2tp7$_0 = lazy(KodeinImpl$container$lambda(this));
  }
  function KodeinImpl$Companion() {
    KodeinImpl$Companion_instance = this;
  }
  KodeinImpl$Companion.prototype.newBuilder_0 = function (allowSilentOverride, init) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    var $receiver = new KodeinMainBuilderImpl(allowSilentOverride);
    init($receiver);
    return $receiver;
  };
  function KodeinImpl$Companion$withDelayedCallbacks$lambda(closure$kodein) {
    return function () {
      var tmp$;
      (tmp$ = closure$kodein._container_0.initCallbacks) != null ? tmp$() : null;
      return Unit;
    };
  }
  KodeinImpl$Companion.prototype.withDelayedCallbacks_z3stfd$ = function (allowSilentOverride, init) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    var kodein = KodeinImpl_init(this.newBuilder_0(allowSilentOverride, init), false);
    return to(kodein, KodeinImpl$Companion$withDelayedCallbacks$lambda(kodein));
  };
  KodeinImpl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KodeinImpl$Companion_instance = null;
  function KodeinImpl$Companion_getInstance() {
    if (KodeinImpl$Companion_instance === null) {
      new KodeinImpl$Companion();
    }
    return KodeinImpl$Companion_instance;
  }
  Object.defineProperty(KodeinImpl.prototype, 'container', {
    get: function () {
      return this.container_pp2tp7$_0.value;
    }
  });
  function KodeinImpl$container$lambda(this$KodeinImpl) {
    return function () {
      if (this$KodeinImpl._container_0.initCallbacks != null)
        throw IllegalStateException_init('Kodein has not been initialized');
      return this$KodeinImpl._container_0;
    };
  }
  KodeinImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinImpl',
    interfaces: [Kodein]
  };
  function KodeinImpl_init(builder, runCallbacks, $this) {
    $this = $this || Object.create(KodeinImpl.prototype);
    KodeinImpl.call($this, KodeinContainerImpl_init(builder.containerBuilder, builder.externalSources, builder.fullDescriptionOnError, runCallbacks));
    return $this;
  }
  function KodeinImpl_init_0(allowSilentOverride, init, $this) {
    if (allowSilentOverride === void 0)
      allowSilentOverride = false;
    $this = $this || Object.create(KodeinImpl.prototype);
    KodeinImpl_init(KodeinImpl$Companion_getInstance().newBuilder_0(allowSilentOverride, init), true, $this);
    return $this;
  }
  function BindingKodeinImpl(dkodein, _key, context, _overrideLevel) {
    this.dkodein_yrl3zn$_0 = dkodein;
    this._key_0 = _key;
    this.context_53v1sk$_0 = context;
    this._overrideLevel_0 = _overrideLevel;
  }
  Object.defineProperty(BindingKodeinImpl.prototype, 'dkodein', {
    get: function () {
      return this.dkodein_yrl3zn$_0;
    }
  });
  Object.defineProperty(BindingKodeinImpl.prototype, 'context', {
    get: function () {
      return this.context_53v1sk$_0;
    }
  });
  BindingKodeinImpl.prototype.overriddenFactory = function () {
    var tmp$;
    return typeof (tmp$ = this.container.factory_3h818e$(this._key_0, this.context, this._overrideLevel_0 + 1 | 0)) === 'function' ? tmp$ : throwCCE();
  };
  BindingKodeinImpl.prototype.overriddenFactoryOrNull = function () {
    var tmp$;
    return (tmp$ = this.container.factoryOrNull_3h818e$(this._key_0, this.context, this._overrideLevel_0 + 1 | 0)) == null || typeof tmp$ === 'function' ? tmp$ : throwCCE();
  };
  Object.defineProperty(BindingKodeinImpl.prototype, 'container', {
    get: function () {
      return this.dkodein.container;
    }
  });
  Object.defineProperty(BindingKodeinImpl.prototype, 'kodein', {
    get: function () {
      return this.dkodein.kodein;
    }
  });
  Object.defineProperty(BindingKodeinImpl.prototype, 'lazy', {
    get: function () {
      return this.dkodein.lazy;
    }
  });
  BindingKodeinImpl.prototype.Factory_nijjsc$$default = function (argType, type, tag) {
    return this.dkodein.Factory_nijjsc$$default(argType, type, tag);
  };
  BindingKodeinImpl.prototype.FactoryOrNull_nijjsc$$default = function (argType, type, tag) {
    return this.dkodein.FactoryOrNull_nijjsc$$default(argType, type, tag);
  };
  BindingKodeinImpl.prototype.Instance_xflu9r$$default = function (type, tag) {
    return this.dkodein.Instance_xflu9r$$default(type, tag);
  };
  BindingKodeinImpl.prototype.Instance_ibvr8m$$default = function (argType, type, tag, arg) {
    return this.dkodein.Instance_ibvr8m$$default(argType, type, tag, arg);
  };
  BindingKodeinImpl.prototype.InstanceOrNull_xflu9r$$default = function (type, tag) {
    return this.dkodein.InstanceOrNull_xflu9r$$default(type, tag);
  };
  BindingKodeinImpl.prototype.InstanceOrNull_ibvr8m$$default = function (argType, type, tag, arg) {
    return this.dkodein.InstanceOrNull_ibvr8m$$default(argType, type, tag, arg);
  };
  BindingKodeinImpl.prototype.On_r7y1kq$ = function (context) {
    return this.dkodein.On_r7y1kq$(context);
  };
  BindingKodeinImpl.prototype.Provider_xflu9r$$default = function (type, tag) {
    return this.dkodein.Provider_xflu9r$$default(type, tag);
  };
  BindingKodeinImpl.prototype.Provider_veebl6$$default = function (argType, type, tag, arg) {
    return this.dkodein.Provider_veebl6$$default(argType, type, tag, arg);
  };
  BindingKodeinImpl.prototype.ProviderOrNull_xflu9r$$default = function (type, tag) {
    return this.dkodein.ProviderOrNull_xflu9r$$default(type, tag);
  };
  BindingKodeinImpl.prototype.ProviderOrNull_veebl6$$default = function (argType, type, tag, arg) {
    return this.dkodein.ProviderOrNull_veebl6$$default(argType, type, tag, arg);
  };
  BindingKodeinImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BindingKodeinImpl',
    interfaces: [BindingKodein, DKodein]
  };
  function TypeChecker() {
  }
  function TypeChecker$Down(type) {
    TypeChecker.call(this);
    this.type_j6ks2f$_0 = type;
    this.isAny = equals(this.type, get_AnyToken());
  }
  Object.defineProperty(TypeChecker$Down.prototype, 'type', {
    get: function () {
      return this.type_j6ks2f$_0;
    }
  });
  TypeChecker$Down.prototype.check_ah7syo$ = function (other) {
    return this.isAny || this.type.isAssignableFrom_ah7syo$(other);
  };
  TypeChecker$Down.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Down',
    interfaces: [TypeChecker]
  };
  TypeChecker$Down.prototype.component1 = function () {
    return this.type;
  };
  TypeChecker$Down.prototype.copy_ah7syo$ = function (type) {
    return new TypeChecker$Down(type === void 0 ? this.type : type);
  };
  TypeChecker$Down.prototype.toString = function () {
    return 'Down(type=' + Kotlin.toString(this.type) + ')';
  };
  TypeChecker$Down.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  TypeChecker$Down.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.type, other.type))));
  };
  function TypeChecker$Up(type) {
    TypeChecker.call(this);
    this.type_mdb90i$_0 = type;
  }
  Object.defineProperty(TypeChecker$Up.prototype, 'type', {
    get: function () {
      return this.type_mdb90i$_0;
    }
  });
  TypeChecker$Up.prototype.check_ah7syo$ = function (other) {
    return equals(other, get_AnyToken()) || other.isAssignableFrom_ah7syo$(this.type);
  };
  TypeChecker$Up.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Up',
    interfaces: [TypeChecker]
  };
  TypeChecker$Up.prototype.component1 = function () {
    return this.type;
  };
  TypeChecker$Up.prototype.copy_ah7syo$ = function (type) {
    return new TypeChecker$Up(type === void 0 ? this.type : type);
  };
  TypeChecker$Up.prototype.toString = function () {
    return 'Up(type=' + Kotlin.toString(this.type) + ')';
  };
  TypeChecker$Up.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  TypeChecker$Up.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.type, other.type))));
  };
  TypeChecker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeChecker',
    interfaces: []
  };
  function KodeinTreeImpl(map, externalSources, registeredTranslators) {
    this.externalSources_xtm6lt$_0 = externalSources;
    this.registeredTranslators_137aw7$_0 = registeredTranslators;
    this._cache_0 = newConcurrentMap();
    this._typeTree_0 = HashMap_init();
    this.bindings_3b2tew$_0 = null;
    this.translators_0 = ArrayList_init_1(this.registeredTranslators);
    var tmp$, tmp$_0;
    var tmp$_1;
    tmp$_1 = map.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var key = element.key;
      var bindings = element.value;
      var destination = ArrayList_init_0(collectionSizeOrDefault(bindings, 10));
      var tmp$_2;
      tmp$_2 = bindings.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3 = destination.add_11rb$;
        var transform$result;
        if (Kotlin.isType(item, KodeinDefinition)) {
          transform$result = item;
        }
         else {
          transform$result = new KodeinDefinition(item.binding, item.fromModule, this);
        }
        tmp$_3.call(destination, transform$result);
      }
      var definitions = destination;
      var $receiver = this._cache_0;
      var value = new Triple(key, definitions, null);
      $receiver.put_xwzc9p$(key, value);
      var typeChecker = first(bindings).binding.supportSubTypes ? new TypeChecker$Down(key.type) : new TypeChecker$Up(key.type);
      var $receiver_0 = this._typeTree_0;
      var tmp$_4;
      var value_0 = $receiver_0.get_11rb$(typeChecker);
      if (value_0 == null) {
        var answer = HashMap_init();
        $receiver_0.put_xwzc9p$(typeChecker, answer);
        tmp$_4 = answer;
      }
       else {
        tmp$_4 = value_0;
      }
      var contextTree = tmp$_4;
      var key_0 = new TypeChecker$Down(key.contextType);
      var tmp$_5;
      var value_1 = contextTree.get_11rb$(key_0);
      if (value_1 == null) {
        var answer_0 = HashMap_init();
        contextTree.put_xwzc9p$(key_0, answer_0);
        tmp$_5 = answer_0;
      }
       else {
        tmp$_5 = value_1;
      }
      var argumentTree = tmp$_5;
      var key_1 = new TypeChecker$Down(key.argType);
      var tmp$_6;
      var value_2 = argumentTree.get_11rb$(key_1);
      if (value_2 == null) {
        var answer_1 = HashMap_init();
        argumentTree.put_xwzc9p$(key_1, answer_1);
        tmp$_6 = answer_1;
      }
       else {
        tmp$_6 = value_2;
      }
      var tagTree = tmp$_6;
      var key_2 = key.tag;
      tagTree.put_xwzc9p$(key_2, key);
    }
    var $receiver_1 = this._cache_0;
    var destination_0 = LinkedHashMap_init_0(mapCapacity($receiver_1.size));
    var tmp$_7;
    tmp$_7 = $receiver_1.entries.iterator();
    while (tmp$_7.hasNext()) {
      var element_0 = tmp$_7.next();
      destination_0.put_xwzc9p$(element_0.key, element_0.value.second);
    }
    this.bindings_3b2tew$_0 = HashMap_init_0(destination_0);
    while (true) {
      var added = ArrayList_init();
      tmp$ = this.translators_0.iterator();
      while (tmp$.hasNext()) {
        var src = tmp$.next();
        tmp$_0 = this.translators_0.iterator();
        loop_label: while (tmp$_0.hasNext()) {
          var dst = tmp$_0.next();
          if (dst.contextType.isAssignableFrom_ah7syo$(src.scopeType) && !equals(src.contextType, dst.scopeType)) {
            var $receiver_2 = this.translators_0;
            var none$result;
            none$break: do {
              var tmp$_8;
              if (Kotlin.isType($receiver_2, Collection) && $receiver_2.isEmpty()) {
                none$result = true;
                break none$break;
              }
              tmp$_8 = $receiver_2.iterator();
              while (tmp$_8.hasNext()) {
                var element_1 = tmp$_8.next();
                if (equals(element_1.contextType, src.contextType) && equals(element_1.scopeType, dst.scopeType)) {
                  none$result = false;
                  break none$break;
                }
              }
              none$result = true;
            }
             while (false);
            if (none$result) {
              var tmp$_9, tmp$_10;
              var element_2 = new CompositeContextTranslator(Kotlin.isType(tmp$_9 = src, ContextTranslator) ? tmp$_9 : throwCCE(), Kotlin.isType(tmp$_10 = dst, ContextTranslator) ? tmp$_10 : throwCCE());
              added.add_11rb$(element_2);
            }
          }
        }
      }
      addAll(this.translators_0, added);
      if (added.isEmpty())
        break;
    }
  }
  Object.defineProperty(KodeinTreeImpl.prototype, 'externalSources', {
    get: function () {
      return this.externalSources_xtm6lt$_0;
    }
  });
  Object.defineProperty(KodeinTreeImpl.prototype, 'registeredTranslators', {
    get: function () {
      return this.registeredTranslators_137aw7$_0;
    }
  });
  Object.defineProperty(KodeinTreeImpl.prototype, 'bindings', {
    get: function () {
      return this.bindings_3b2tew$_0;
    }
  });
  function KodeinTreeImpl$findBySpecs$lambda(closure$specsBindType) {
    return function (f) {
      var bindType = f.key;
      return bindType.check_ah7syo$(closure$specsBindType);
    };
  }
  function KodeinTreeImpl$findBySpecs$lambda$lambda(it) {
    return new Triple(it.key, it.value, null);
  }
  function KodeinTreeImpl$findBySpecs$lambda_0(f) {
    var contextTree = f.value;
    return map(asSequence_0(contextTree), KodeinTreeImpl$findBySpecs$lambda$lambda);
  }
  function KodeinTreeImpl$findBySpecs$lambda_1(closure$specsContextType, this$KodeinTreeImpl) {
    return function (triple) {
      var contextType = triple.component1();
      if (contextType.check_ah7syo$(closure$specsContextType))
        return triple;
      else {
        var $receiver = this$KodeinTreeImpl.translators_0;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$;
          tmp$ = $receiver.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            var closure$specsContextType_0 = closure$specsContextType;
            if (element.contextType.isAssignableFrom_ah7syo$(closure$specsContextType_0) && contextType.check_ah7syo$(element.scopeType)) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        var translator = firstOrNull$result;
        return translator != null ? triple.copy_1llc0w$(void 0, void 0, translator) : null;
      }
    };
  }
  function KodeinTreeImpl$findBySpecs$lambda$lambda_0(closure$translator) {
    return function (it) {
      return new Triple(it.key, it.value, closure$translator);
    };
  }
  function KodeinTreeImpl$findBySpecs$lambda_2(f) {
    var argumentTree = f.component2()
    , translator = f.component3();
    return map(asSequence_0(argumentTree), KodeinTreeImpl$findBySpecs$lambda$lambda_0(translator));
  }
  function KodeinTreeImpl$findBySpecs$lambda_3(closure$specsArgType) {
    return function (f) {
      var argType = f.component1();
      return argType.check_ah7syo$(closure$specsArgType);
    };
  }
  function KodeinTreeImpl$findBySpecs$lambda$lambda_1(closure$translator) {
    return function (it) {
      return new Triple(it.key, it.value, closure$translator);
    };
  }
  function KodeinTreeImpl$findBySpecs$lambda_4(f) {
    var tagTree = f.component2()
    , translator = f.component3();
    return map(asSequence_0(tagTree), KodeinTreeImpl$findBySpecs$lambda$lambda_1(translator));
  }
  function KodeinTreeImpl$findBySpecs$lambda_5(closure$specsTag) {
    return function (f) {
      var tag = f.component1();
      return equals(tag, closure$specsTag);
    };
  }
  function KodeinTreeImpl$findBySpecs$lambda_6(f) {
    var key = f.component2()
    , translator = f.component3();
    return to(key, translator);
  }
  KodeinTreeImpl.prototype.findBySpecs_0 = function (specs) {
    var bindSeq = asSequence_0(this._typeTree_0);
    var specsBindType = specs.type;
    if (specsBindType != null && !equals(specsBindType, get_AnyToken())) {
      bindSeq = filter(bindSeq, KodeinTreeImpl$findBySpecs$lambda(specsBindType));
    }
    var contextSeq = flatMap(bindSeq, KodeinTreeImpl$findBySpecs$lambda_0);
    var specsContextType = specs.contextType;
    if (specsContextType != null) {
      contextSeq = mapNotNull(contextSeq, KodeinTreeImpl$findBySpecs$lambda_1(specsContextType, this));
    }
    var argSeq = flatMap(contextSeq, KodeinTreeImpl$findBySpecs$lambda_2);
    var specsArgType = specs.argType;
    if (specsArgType != null) {
      argSeq = filter(argSeq, KodeinTreeImpl$findBySpecs$lambda_3(specsArgType));
    }
    var tagSeq = flatMap(argSeq, KodeinTreeImpl$findBySpecs$lambda_4);
    var specsTag = specs.tag;
    if (!equals(specsTag, SearchSpecs$NoDefinedTag_getInstance())) {
      tagSeq = filter(tagSeq, KodeinTreeImpl$findBySpecs$lambda_5(specsTag));
    }
    var resultSeq = map(tagSeq, KodeinTreeImpl$findBySpecs$lambda_6);
    return toList_0(resultSeq);
  };
  KodeinTreeImpl.prototype.find_7kv2rd$$default = function (key, overrideLevel, all) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (!all) {
      if ((tmp$ = this._cache_0.get_11rb$(key)) != null) {
        var realKey = tmp$.component1()
        , list = tmp$.component2()
        , translator = tmp$.component3();
        var tmp$_6, tmp$_7, tmp$_8, tmp$_9;
        tmp$_6 = getOrNull(list, overrideLevel);
        if (tmp$_6 == null) {
          return emptyList();
        }
        var definition = tmp$_6;
        return listOf(new Triple(Kotlin.isType(tmp$_7 = realKey, Kodein$Key) ? tmp$_7 : throwCCE(), Kotlin.isType(tmp$_8 = definition, KodeinDefinition) ? tmp$_8 : throwCCE(), (tmp$_9 = translator) == null || Kotlin.isType(tmp$_9, ContextTranslator) ? tmp$_9 : throwCCE()));
      }
      if (!equals(key.contextType, get_AnyToken())) {
        var anyContextKey = key.copy_z1i2ll$(get_AnyToken());
        if ((tmp$_0 = this._cache_0.get_11rb$(anyContextKey)) != null) {
          block$break: do {
            var tmp$_10, tmp$_11, tmp$_12, tmp$_13;
            var realKey_0 = tmp$_0.component1()
            , list_0 = tmp$_0.component2()
            , translator_0 = tmp$_0.component3();
            if (translator_0 != null && !equals(translator_0.contextType, key.contextType) || (translator_0 == null && !equals(realKey_0.contextType, key.contextType)))
              break block$break;
            this._cache_0.put_xwzc9p$(key, tmp$_0);
            tmp$_10 = getOrNull(list_0, overrideLevel);
            if (tmp$_10 == null) {
              return emptyList();
            }
            var definition_0 = tmp$_10;
            return listOf(new Triple(Kotlin.isType(tmp$_11 = realKey_0, Kodein$Key) ? tmp$_11 : throwCCE(), Kotlin.isType(tmp$_12 = definition_0, KodeinDefinition) ? tmp$_12 : throwCCE(), (tmp$_13 = translator_0) == null || Kotlin.isType(tmp$_13, ContextTranslator) ? tmp$_13 : throwCCE()));
          }
           while (false);
        }
      }
      var $receiver = this.translators_0;
      var destination = ArrayList_init();
      var tmp$_14;
      tmp$_14 = $receiver.iterator();
      while (tmp$_14.hasNext()) {
        var element = tmp$_14.next();
        if (equals(element.contextType, key.contextType))
          destination.add_11rb$(element);
      }
      var $receiver_0 = this.translators_0;
      var destination_0 = ArrayList_init();
      var tmp$_15;
      tmp$_15 = $receiver_0.iterator();
      while (tmp$_15.hasNext()) {
        var element_0 = tmp$_15.next();
        if (equals(element_0.contextType, get_AnyToken()))
          destination_0.add_11rb$(element_0);
      }
      var applicableTranslators = plus_0(destination, destination_0);
      tmp$_1 = applicableTranslators.iterator();
      loop_label: while (tmp$_1.hasNext()) {
        var translator_1 = tmp$_1.next();
        var translatedKey = new Kodein$Key(translator_1.scopeType, key.argType, key.type, key.tag);
        if ((tmp$_3 = (tmp$_2 = this._cache_0.get_11rb$(translatedKey)) != null ? tmp$_2.third == null ? tmp$_2 : null : null) != null) {
          block$break: do {
            var tmp$_16, tmp$_17, tmp$_18, tmp$_19;
            if (tmp$_3.third != null)
              break block$break;
            var $receiver_1 = this._cache_0;
            var value = tmp$_3.copy_1llc0w$(void 0, void 0, translator_1);
            $receiver_1.put_xwzc9p$(key, value);
            var realKey_1 = tmp$_3.component1()
            , list_1 = tmp$_3.component2();
            tmp$_16 = getOrNull(list_1, overrideLevel);
            if (tmp$_16 == null) {
              return emptyList();
            }
            var definition_1 = tmp$_16;
            return listOf(new Triple(Kotlin.isType(tmp$_17 = realKey_1, Kodein$Key) ? tmp$_17 : throwCCE(), Kotlin.isType(tmp$_18 = definition_1, KodeinDefinition) ? tmp$_18 : throwCCE(), (tmp$_19 = translator_1) == null || Kotlin.isType(tmp$_19, ContextTranslator) ? tmp$_19 : throwCCE()));
          }
           while (false);
        }
      }
    }
    var result = this.findBySpecs_0(new SearchSpecs(key.contextType, key.argType, key.type, key.tag));
    if (result.size === 1) {
      var tmp$_20 = first(result);
      var realKey_2 = tmp$_20.component1()
      , translator_2 = tmp$_20.component2();
      tmp$_5 = (tmp$_4 = this._cache_0.get_11rb$(realKey_2)) != null ? tmp$_4.copy_1llc0w$(void 0, void 0, translator_2) : null;
      if (tmp$_5 == null) {
        throw this.notInMap_0(realKey_2, key);
      }
      this._cache_0.put_xwzc9p$(key, tmp$_5);
    }
    var destination_1 = ArrayList_init();
    var tmp$_21;
    tmp$_21 = result.iterator();
    loop_label: while (tmp$_21.hasNext()) {
      var element_1 = tmp$_21.next();
      var tmp$_0_0;
      var transform$result;
      transform$break: do {
        var realKey_3 = element_1.component1()
        , translator_3 = element_1.component2();
        var tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26;
        tmp$_22 = this._cache_0.get_11rb$(realKey_3);
        if (tmp$_22 == null) {
          throw this.notInMap_0(realKey_3, key);
        }
        var definitions = tmp$_22.component2();
        tmp$_23 = getOrNull(definitions, overrideLevel);
        if (tmp$_23 == null) {
          transform$result = null;
          break transform$break;
        }
        var definition_2 = tmp$_23;
        transform$result = new Triple(Kotlin.isType(tmp$_24 = realKey_3, Kodein$Key) ? tmp$_24 : throwCCE(), Kotlin.isType(tmp$_25 = definition_2, KodeinDefinition) ? tmp$_25 : throwCCE(), (tmp$_26 = translator_3) == null || Kotlin.isType(tmp$_26, ContextTranslator) ? tmp$_26 : throwCCE());
      }
       while (false);
      if ((tmp$_0_0 = transform$result) != null) {
        destination_1.add_11rb$(tmp$_0_0);
      }
    }
    return destination_1;
  };
  function KodeinTreeImpl$notInMap$lambda(it) {
    return it.internalDescription;
  }
  KodeinTreeImpl.prototype.notInMap_0 = function (result, request) {
    return IllegalStateException_init('Tree returned key ' + result.internalDescription + ' that is not in cache when searching for ' + request.internalDescription + '.' + '\n' + 'Keys in cache:' + '\n' + joinToString(this._cache_0.keys, '\n', void 0, void 0, void 0, void 0, KodeinTreeImpl$notInMap$lambda));
  };
  KodeinTreeImpl.prototype.find_f45sx$ = function (search) {
    var result = this.findBySpecs_0(search);
    var destination = ArrayList_init_0(collectionSizeOrDefault(result, 10));
    var tmp$;
    tmp$ = result.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var key = item.component1()
      , translator = item.component2();
      tmp$_0.call(destination, new Triple(key, ensureNotNull(this._cache_0.get_11rb$(key)).second, translator));
    }
    return destination;
  };
  KodeinTreeImpl.prototype.get_1fn8vm$ = function (key) {
    var tmp$;
    return (tmp$ = this._cache_0.get_11rb$(key)) == null || Kotlin.isType(tmp$, Triple) ? tmp$ : throwCCE();
  };
  KodeinTreeImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinTreeImpl',
    interfaces: [KodeinTree]
  };
  var synchronizedIfNull = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.internal.synchronizedIfNull_e1gqpa$', function (lock, predicate, ifNotNull, ifNull) {
    var tmp$;
    if ((tmp$ = predicate()) != null) {
      return ifNotNull(tmp$);
    }
    var block$result;
    block$break: do {
      var tmp$_0;
      if ((tmp$_0 = predicate()) != null) {
        block$result = tmp$_0;
        break block$break;
      }
      return ifNull();
    }
     while (false);
    var value = block$result;
    return ifNotNull(value);
  });
  var synchronizedIfNotNull = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.internal.synchronizedIfNotNull_sd401g$', function (lock, predicate, ifNull, ifNotNull) {
    if (predicate() == null) {
      return ifNull();
    }
    block$break: do {
      var tmp$;
      tmp$ = predicate();
      if (tmp$ == null) {
        break block$break;
      }
      var value = tmp$;
      return ifNotNull(value);
    }
     while (false);
    return ifNull();
  });
  function LateInitKodein() {
    this.baseKodein_2fca4g$_0 = this.baseKodein_2fca4g$_0;
  }
  Object.defineProperty(LateInitKodein.prototype, 'baseKodein', {
    get: function () {
      if (this.baseKodein_2fca4g$_0 == null)
        return throwUPAE('baseKodein');
      return this.baseKodein_2fca4g$_0;
    },
    set: function (baseKodein) {
      this.baseKodein_2fca4g$_0 = baseKodein;
    }
  });
  Object.defineProperty(LateInitKodein.prototype, 'container', {
    get: function () {
      return this.baseKodein.container;
    }
  });
  LateInitKodein.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LateInitKodein',
    interfaces: [Kodein]
  };
  function LazyKodein(f) {
    this.baseKodein_qiamam$_0 = lazy(f);
  }
  Object.defineProperty(LazyKodein.prototype, 'baseKodein', {
    get: function () {
      return this.baseKodein_qiamam$_0.value;
    }
  });
  Object.defineProperty(LazyKodein.prototype, 'container', {
    get: function () {
      return this.baseKodein.container;
    }
  });
  LazyKodein.prototype.getValue_n5byny$ = function (thisRef, property) {
    return this;
  };
  LazyKodein.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyKodein',
    interfaces: [Kodein]
  };
  function KodeinTrigger() {
    this.properties = ArrayList_init();
  }
  KodeinTrigger.prototype.trigger = function () {
    var tmp$;
    tmp$ = this.properties.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value;
    }
  };
  KodeinTrigger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinTrigger',
    interfaces: []
  };
  function LazyDelegate() {
  }
  LazyDelegate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LazyDelegate',
    interfaces: []
  };
  function KodeinProperty(trigger, originalContext, get) {
    this.trigger_8be2vx$ = trigger;
    this.originalContext = originalContext;
    this.get_0 = get;
  }
  function KodeinProperty$provideDelegate$lambda(closure$receiver, this$KodeinProperty, closure$prop) {
    return function () {
      var tmp$, tmp$_0;
      if (closure$receiver != null && this$KodeinProperty.originalContext === get_AnyKodeinContext()) {
        tmp$_0 = KodeinContext$Companion_getInstance().invoke_wm568t$(Kotlin.isType(tmp$ = TTOf(closure$receiver), TypeToken) ? tmp$ : throwCCE(), closure$receiver);
      }
       else
        tmp$_0 = this$KodeinProperty.originalContext;
      var context = tmp$_0;
      return this$KodeinProperty.get_0(context, closure$prop.callableName);
    };
  }
  KodeinProperty.prototype.provideDelegate_tpuvb9$ = function (receiver, prop) {
    var $receiver = lazy(KodeinProperty$provideDelegate$lambda(receiver, this, prop));
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.trigger_8be2vx$) != null ? tmp$.properties : null) != null ? tmp$_0.add_11rb$($receiver) : null;
    return $receiver;
  };
  KodeinProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinProperty',
    interfaces: [LazyDelegate]
  };
  function KodeinPropertyMap(base, map) {
    this.base_0 = base;
    this.map_0 = map;
  }
  function KodeinPropertyMap$provideDelegate$lambda(this$KodeinPropertyMap, closure$receiver, closure$prop) {
    return function () {
      return this$KodeinPropertyMap.map_0(this$KodeinPropertyMap.base_0.provideDelegate_tpuvb9$(closure$receiver, closure$prop).value);
    };
  }
  KodeinPropertyMap.prototype.provideDelegate_tpuvb9$ = function (receiver, prop) {
    var $receiver = lazy(KodeinPropertyMap$provideDelegate$lambda(this, receiver, prop));
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.base_0.trigger_8be2vx$) != null ? tmp$.properties : null) != null ? tmp$_0.add_11rb$($receiver) : null;
    return $receiver;
  };
  KodeinPropertyMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KodeinPropertyMap',
    interfaces: [LazyDelegate]
  };
  var subKodein = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.subKodein_wog6xs$', wrapFunction(function () {
    var Copy = _.org.kodein.di.Copy;
    var Kodein = _.org.kodein.di.Kodein;
    var Unit = Kotlin.kotlin.Unit;
    function subKodein$lambda(closure$parentKodein, closure$copy, closure$init) {
      return function ($receiver) {
        $receiver.extend_xr6j32$(closure$parentKodein, void 0, closure$copy);
        closure$init($receiver);
        return Unit;
      };
    }
    return function (parentKodein, allowSilentOverride, copy, init) {
      if (allowSilentOverride === void 0)
        allowSilentOverride = false;
      if (copy === void 0)
        copy = Copy.NonCached;
      return Kodein.Companion.lazy_z3stfd$(allowSilentOverride, subKodein$lambda(parentKodein, copy, init));
    };
  }));
  function Multi2(a1, a2, type) {
    Multi2$Companion_getInstance();
    this.a1 = a1;
    this.a2 = a2;
    this.type_ecngm$_0 = type;
  }
  Object.defineProperty(Multi2.prototype, 'type', {
    get: function () {
      return this.type_ecngm$_0;
    }
  });
  Object.defineProperty(Multi2.prototype, 'value', {
    get: function () {
      return this;
    }
  });
  function Multi2$Companion() {
    Multi2$Companion_instance = this;
  }
  Multi2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Multi2$Companion_instance = null;
  function Multi2$Companion_getInstance() {
    if (Multi2$Companion_instance === null) {
      new Multi2$Companion();
    }
    return Multi2$Companion_instance;
  }
  Multi2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multi2',
    interfaces: [Typed]
  };
  Multi2.prototype.component1 = function () {
    return this.a1;
  };
  Multi2.prototype.component2 = function () {
    return this.a2;
  };
  Multi2.prototype.component3 = function () {
    return this.type;
  };
  Multi2.prototype.copy_7vhz0c$ = function (a1, a2, type) {
    return new Multi2(a1 === void 0 ? this.a1 : a1, a2 === void 0 ? this.a2 : a2, type === void 0 ? this.type : type);
  };
  Multi2.prototype.toString = function () {
    return 'Multi2(a1=' + Kotlin.toString(this.a1) + (', a2=' + Kotlin.toString(this.a2)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Multi2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a1) | 0;
    result = result * 31 + Kotlin.hashCode(this.a2) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Multi2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a1, other.a1) && Kotlin.equals(this.a2, other.a2) && Kotlin.equals(this.type, other.type)))));
  };
  function Multi3(a1, a2, a3, type) {
    Multi3$Companion_getInstance();
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.type_ea1mrf$_0 = type;
  }
  Object.defineProperty(Multi3.prototype, 'type', {
    get: function () {
      return this.type_ea1mrf$_0;
    }
  });
  Object.defineProperty(Multi3.prototype, 'value', {
    get: function () {
      return this;
    }
  });
  function Multi3$Companion() {
    Multi3$Companion_instance = this;
  }
  Multi3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Multi3$Companion_instance = null;
  function Multi3$Companion_getInstance() {
    if (Multi3$Companion_instance === null) {
      new Multi3$Companion();
    }
    return Multi3$Companion_instance;
  }
  Multi3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multi3',
    interfaces: [Typed]
  };
  Multi3.prototype.component1 = function () {
    return this.a1;
  };
  Multi3.prototype.component2 = function () {
    return this.a2;
  };
  Multi3.prototype.component3 = function () {
    return this.a3;
  };
  Multi3.prototype.component4 = function () {
    return this.type;
  };
  Multi3.prototype.copy_x43t2d$ = function (a1, a2, a3, type) {
    return new Multi3(a1 === void 0 ? this.a1 : a1, a2 === void 0 ? this.a2 : a2, a3 === void 0 ? this.a3 : a3, type === void 0 ? this.type : type);
  };
  Multi3.prototype.toString = function () {
    return 'Multi3(a1=' + Kotlin.toString(this.a1) + (', a2=' + Kotlin.toString(this.a2)) + (', a3=' + Kotlin.toString(this.a3)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Multi3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a1) | 0;
    result = result * 31 + Kotlin.hashCode(this.a2) | 0;
    result = result * 31 + Kotlin.hashCode(this.a3) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Multi3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a1, other.a1) && Kotlin.equals(this.a2, other.a2) && Kotlin.equals(this.a3, other.a3) && Kotlin.equals(this.type, other.type)))));
  };
  function Multi4(a1, a2, a3, a4, type) {
    Multi4$Companion_getInstance();
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.type_syfwzg$_0 = type;
  }
  Object.defineProperty(Multi4.prototype, 'type', {
    get: function () {
      return this.type_syfwzg$_0;
    }
  });
  Object.defineProperty(Multi4.prototype, 'value', {
    get: function () {
      return this;
    }
  });
  function Multi4$Companion() {
    Multi4$Companion_instance = this;
  }
  Multi4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Multi4$Companion_instance = null;
  function Multi4$Companion_getInstance() {
    if (Multi4$Companion_instance === null) {
      new Multi4$Companion();
    }
    return Multi4$Companion_instance;
  }
  Multi4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multi4',
    interfaces: [Typed]
  };
  Multi4.prototype.component1 = function () {
    return this.a1;
  };
  Multi4.prototype.component2 = function () {
    return this.a2;
  };
  Multi4.prototype.component3 = function () {
    return this.a3;
  };
  Multi4.prototype.component4 = function () {
    return this.a4;
  };
  Multi4.prototype.component5 = function () {
    return this.type;
  };
  Multi4.prototype.copy_hotr16$ = function (a1, a2, a3, a4, type) {
    return new Multi4(a1 === void 0 ? this.a1 : a1, a2 === void 0 ? this.a2 : a2, a3 === void 0 ? this.a3 : a3, a4 === void 0 ? this.a4 : a4, type === void 0 ? this.type : type);
  };
  Multi4.prototype.toString = function () {
    return 'Multi4(a1=' + Kotlin.toString(this.a1) + (', a2=' + Kotlin.toString(this.a2)) + (', a3=' + Kotlin.toString(this.a3)) + (', a4=' + Kotlin.toString(this.a4)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Multi4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a1) | 0;
    result = result * 31 + Kotlin.hashCode(this.a2) | 0;
    result = result * 31 + Kotlin.hashCode(this.a3) | 0;
    result = result * 31 + Kotlin.hashCode(this.a4) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Multi4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a1, other.a1) && Kotlin.equals(this.a2, other.a2) && Kotlin.equals(this.a3, other.a3) && Kotlin.equals(this.a4, other.a4) && Kotlin.equals(this.type, other.type)))));
  };
  function Multi5(a1, a2, a3, a4, a5, type) {
    Multi5$Companion_getInstance();
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.a5 = a5;
    this.type_re9urn$_0 = type;
  }
  Object.defineProperty(Multi5.prototype, 'type', {
    get: function () {
      return this.type_re9urn$_0;
    }
  });
  Object.defineProperty(Multi5.prototype, 'value', {
    get: function () {
      return this;
    }
  });
  function Multi5$Companion() {
    Multi5$Companion_instance = this;
  }
  Multi5$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Multi5$Companion_instance = null;
  function Multi5$Companion_getInstance() {
    if (Multi5$Companion_instance === null) {
      new Multi5$Companion();
    }
    return Multi5$Companion_instance;
  }
  Multi5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multi5',
    interfaces: [Typed]
  };
  Multi5.prototype.component1 = function () {
    return this.a1;
  };
  Multi5.prototype.component2 = function () {
    return this.a2;
  };
  Multi5.prototype.component3 = function () {
    return this.a3;
  };
  Multi5.prototype.component4 = function () {
    return this.a4;
  };
  Multi5.prototype.component5 = function () {
    return this.a5;
  };
  Multi5.prototype.component6 = function () {
    return this.type;
  };
  Multi5.prototype.copy_66uewp$ = function (a1, a2, a3, a4, a5, type) {
    return new Multi5(a1 === void 0 ? this.a1 : a1, a2 === void 0 ? this.a2 : a2, a3 === void 0 ? this.a3 : a3, a4 === void 0 ? this.a4 : a4, a5 === void 0 ? this.a5 : a5, type === void 0 ? this.type : type);
  };
  Multi5.prototype.toString = function () {
    return 'Multi5(a1=' + Kotlin.toString(this.a1) + (', a2=' + Kotlin.toString(this.a2)) + (', a3=' + Kotlin.toString(this.a3)) + (', a4=' + Kotlin.toString(this.a4)) + (', a5=' + Kotlin.toString(this.a5)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Multi5.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a1) | 0;
    result = result * 31 + Kotlin.hashCode(this.a2) | 0;
    result = result * 31 + Kotlin.hashCode(this.a3) | 0;
    result = result * 31 + Kotlin.hashCode(this.a4) | 0;
    result = result * 31 + Kotlin.hashCode(this.a5) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Multi5.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a1, other.a1) && Kotlin.equals(this.a2, other.a2) && Kotlin.equals(this.a3, other.a3) && Kotlin.equals(this.a4, other.a4) && Kotlin.equals(this.a5, other.a5) && Kotlin.equals(this.type, other.type)))));
  };
  function TypeToken() {
  }
  TypeToken.prototype.isAssignableFrom_ah7syo$ = function (typeToken) {
    if (equals(this, typeToken) || equals(this, get_AnyToken()))
      return true;
    var raw = this.getRaw();
    if (raw != null && equals(raw, typeToken.getRaw())) {
      var thisParams = this.getGenericParameters();
      if (thisParams.length === 0)
        return true;
      var tokenParams = typeToken.getGenericParameters();
      var tmp$, tmp$_0;
      var index = 0;
      for (tmp$ = 0; tmp$ !== thisParams.length; ++tmp$) {
        var item = thisParams[tmp$];
        var tokenParam = tokenParams[tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0];
        if (!item.isAssignableFrom_ah7syo$(tokenParam))
          return false;
      }
      return true;
    }
    var $receiver = typeToken.getSuper();
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (this.isAssignableFrom_ah7syo$(element)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  TypeToken.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TypeToken',
    interfaces: []
  };
  function CompositeTypeToken(main, params) {
    this.main = main;
    this.params = params;
    if (this.params.length === 0)
      throw IllegalStateException_init('CompositeTypeToken must be given at least one type parameter');
  }
  function CompositeTypeToken$simpleDispString$lambda(it) {
    return it.simpleDispString();
  }
  CompositeTypeToken.prototype.simpleDispString = function () {
    return this.main.simpleErasedDispString() + '<' + joinToString_0(this.params, ', ', void 0, void 0, void 0, void 0, CompositeTypeToken$simpleDispString$lambda) + '>';
  };
  CompositeTypeToken.prototype.simpleErasedDispString = function () {
    return this.main.simpleErasedDispString();
  };
  function CompositeTypeToken$fullDispString$lambda(it) {
    return it.fullDispString();
  }
  CompositeTypeToken.prototype.fullDispString = function () {
    return this.main.fullErasedDispString() + '<' + joinToString_0(this.params, ', ', void 0, void 0, void 0, void 0, CompositeTypeToken$fullDispString$lambda) + '>';
  };
  CompositeTypeToken.prototype.fullErasedDispString = function () {
    return this.main.fullErasedDispString();
  };
  CompositeTypeToken.prototype.checkIsReified_za3rmp$ = function (disp) {
    this.main.checkIsReified_za3rmp$(disp);
    var $receiver = this.params;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.checkIsReified_za3rmp$(disp);
    }
  };
  CompositeTypeToken.prototype.getRaw = function () {
    return this.main.getRaw();
  };
  CompositeTypeToken.prototype.isGeneric = function () {
    return true;
  };
  CompositeTypeToken.prototype.isWildcard = function () {
    return false;
  };
  CompositeTypeToken.prototype.getSuper = function () {
    return this.main.getSuper();
  };
  CompositeTypeToken.prototype.getGenericParameters = function () {
    return this.params;
  };
  CompositeTypeToken.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, CompositeTypeToken))
      return false;
    return equals(this.main, other.main) && contentEquals(this.params, other.params);
  };
  CompositeTypeToken.prototype.hashCode = function () {
    return (31 * hashCode(this.main) | 0) + contentHashCode(this.params) | 0;
  };
  CompositeTypeToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeTypeToken',
    interfaces: [TypeToken]
  };
  function Tokens() {
    Tokens_instance = this;
    var T_0 = Object.getPrototypeOf(kotlin.Unit).constructor;
    kotlin.Unit;
    var erased$result;
    try {
      erased$result = new JSTypeToken(getKClass(T_0));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    this.UnitToken = erased$result;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken(PrimitiveClasses$anyClass);
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    this.AnyToken = erased$result_0;
  }
  Tokens.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Tokens',
    interfaces: []
  };
  var Tokens_instance = null;
  function Tokens_getInstance() {
    if (Tokens_instance === null) {
      new Tokens();
    }
    return Tokens_instance;
  }
  function AbstractKClassTypeToken(type) {
    this.type = type;
  }
  AbstractKClassTypeToken.prototype.simpleDispString = function () {
    return this.simpleErasedDispString();
  };
  AbstractKClassTypeToken.prototype.fullDispString = function () {
    return this.fullErasedDispString();
  };
  AbstractKClassTypeToken.prototype.checkIsReified_za3rmp$ = function (disp) {
  };
  AbstractKClassTypeToken.prototype.getRaw = function () {
    return this;
  };
  AbstractKClassTypeToken.prototype.isGeneric = function () {
    return false;
  };
  AbstractKClassTypeToken.prototype.isWildcard = function () {
    return false;
  };
  AbstractKClassTypeToken.prototype.getSuper = function () {
    return emptyList();
  };
  AbstractKClassTypeToken.prototype.getGenericParameters = function () {
    return [];
  };
  AbstractKClassTypeToken.prototype.isAssignableFrom_ah7syo$ = function (typeToken) {
    var tmp$;
    if (this != null ? this.equals(typeToken) : null)
      return true;
    if ((tmp$ = this.type) != null ? tmp$.equals(PrimitiveClasses$anyClass) : null)
      return true;
    return false;
  };
  AbstractKClassTypeToken.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (!Kotlin.isType(other, AbstractKClassTypeToken))
      return false;
    if (!((tmp$ = this.type) != null ? tmp$.equals(other.type) : null))
      return false;
    return true;
  };
  AbstractKClassTypeToken.prototype.hashCode = function () {
    return this.type.hashCode();
  };
  AbstractKClassTypeToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractKClassTypeToken',
    interfaces: [TypeToken]
  };
  function get_UnitToken() {
    return Tokens_getInstance().UnitToken;
  }
  function get_AnyToken() {
    return Tokens_getInstance().AnyToken;
  }
  function DKodein() {
  }
  DKodein.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DKodein',
    interfaces: [DKodeinBase]
  };
  function DKodeinImpl(container, context) {
    DKodeinBaseImpl.call(this, container, context);
  }
  DKodeinImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DKodeinImpl',
    interfaces: [DKodeinBaseImpl, DKodein]
  };
  function newConcurrentMap() {
    return HashMap_init();
  }
  function newLinkedList() {
    return ArrayList_init();
  }
  function newLinkedList_0(c) {
    return ArrayList_init_1(c);
  }
  var maySynchronized = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.internal.maySynchronized_c7lj6g$', function (lock, block) {
    return block();
  });
  function JSTypeToken(type) {
    AbstractKClassTypeToken.call(this, type);
  }
  JSTypeToken.prototype.simpleErasedDispString = function () {
    var tmp$;
    return (tmp$ = this.type.simpleName) != null ? tmp$ : get_js(this.type).name;
  };
  JSTypeToken.prototype.fullErasedDispString = function () {
    return get_js(this.type).name;
  };
  JSTypeToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSTypeToken',
    interfaces: [AbstractKClassTypeToken]
  };
  var erased = defineInlineFunction('Kodein-DI-kodein-di-core.org.kodein.di.erased_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT) {
      try {
        return new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
    };
  }));
  function TT(cls) {
    return TT_0(get_kotlin(cls));
  }
  function TT_0(cls) {
    return new JSTypeToken(cls);
  }
  function TTOf(obj) {
    return new JSTypeToken(Kotlin.getKClassFromExpression(obj));
  }
  var package$org = _.org || (_.org = {});
  var package$kodein = package$org.kodein || (package$org.kodein = {});
  var package$di = package$kodein.di || (package$kodein.di = {});
  package$di.KodeinDefining = KodeinDefining;
  package$di.KodeinDefinition = KodeinDefinition;
  package$di.description_lzapes$ = description;
  package$di.fullDescription_lzapes$ = fullDescription;
  package$di.CopySpecs = CopySpecs;
  Object.defineProperty(Copy, 'All', {
    get: Copy$All_getInstance
  });
  Object.defineProperty(Copy, 'None', {
    get: Copy$None_getInstance
  });
  Object.defineProperty(Copy, 'NonCached', {
    get: Copy$NonCached_getInstance
  });
  Object.defineProperty(Copy, 'Companion', {
    get: Copy$Companion_getInstance
  });
  Copy$BaseDSL.Sentence = Copy$BaseDSL$Sentence;
  Copy.BaseDSL = Copy$BaseDSL;
  Copy.DSL = Copy$DSL;
  Copy.AllButDSL = Copy$AllButDSL;
  package$di.Copy = Copy;
  package$di.DKodeinAware = DKodeinAware;
  package$di.DKodeinBase = DKodeinBase;
  package$di.newInstance_h49m4t$ = newInstance;
  package$di.get_lazy_wlnwds$ = get_lazy;
  Kodein.DependencyLoopException = Kodein$DependencyLoopException;
  Kodein.NotFoundException = Kodein$NotFoundException;
  Kodein.NoResultException = Kodein$NoResultException;
  Kodein.OverridingException = Kodein$OverridingException;
  Kodein.Key = Kodein$Key;
  Kodein.KodeinDsl = Kodein$KodeinDsl;
  Kodein$BindBuilder$WithContext.Impl = Kodein$BindBuilder$WithContext$Impl;
  Kodein$BindBuilder.WithContext = Kodein$BindBuilder$WithContext;
  Kodein$BindBuilder$WithScope.Impl = Kodein$BindBuilder$WithScope$Impl;
  Kodein$BindBuilder.WithScope = Kodein$BindBuilder$WithScope;
  Kodein.BindBuilder = Kodein$BindBuilder;
  Kodein$Builder.TypeBinder = Kodein$Builder$TypeBinder;
  Kodein$Builder.DirectBinder = Kodein$Builder$DirectBinder;
  Kodein$Builder.ConstantBinder = Kodein$Builder$ConstantBinder;
  Kodein.Builder = Kodein$Builder;
  Kodein.MainBuilder = Kodein$MainBuilder;
  Kodein.Module_init_vkhxz4$ = Kodein$Kodein$Module_init;
  Kodein.Module = Kodein$Module;
  Object.defineProperty(Kodein, 'Companion', {
    get: Kodein$Companion_getInstance
  });
  package$di.Kodein = Kodein;
  KodeinContext.Value = KodeinContext$Value;
  KodeinContext.Lazy = KodeinContext$Lazy;
  Object.defineProperty(KodeinContext, 'Companion', {
    get: KodeinContext$Companion_getInstance
  });
  package$di.KodeinContext = KodeinContext;
  package$di.TypeToken = TypeToken;
  package$di.get_anyType_78zqh4$ = get_anyType;
  Object.defineProperty(package$di, 'AnyKodeinContext', {
    get: get_AnyKodeinContext
  });
  package$di.KodeinAware = KodeinAware;
  $$importsForInline$$['Kodein-DI-kodein-di-core'] = _;
  package$di.Factory_pub27j$ = Factory;
  package$di.FactoryOrNull_pub27j$ = FactoryOrNull;
  package$di.Provider_pnvkjc$ = Provider;
  package$di.Provider_s4sq5v$ = Provider_0;
  package$di.ProviderOrNull_pnvkjc$ = ProviderOrNull;
  package$di.ProviderOrNull_s4sq5v$ = ProviderOrNull_0;
  package$di.Instance_pnvkjc$ = Instance;
  package$di.Instance_nww7ik$ = Instance_0;
  package$di.InstanceOrNull_pnvkjc$ = InstanceOrNull;
  package$di.InstanceOrNull_s4sq5v$ = InstanceOrNull_0;
  package$di.get_direct_oytss6$ = get_direct;
  package$di.On_1o76ag$ = On;
  package$di.newInstance_dp4y7t$ = newInstance_0;
  KodeinContainer.Builder = KodeinContainer$Builder;
  package$di.KodeinContainer = KodeinContainer;
  package$di.KodeinTree = KodeinTree;
  package$di.Named = Named;
  package$di.get_named_oytss6$ = get_named;
  package$di.Constant_lgeszw$ = Constant;
  Object.defineProperty(SearchSpecs, 'NoDefinedTag', {
    get: SearchSpecs$NoDefinedTag_getInstance
  });
  package$di.SearchSpecs = SearchSpecs;
  Object.defineProperty(SearchDSL$Spec, 'Companion', {
    get: SearchDSL$Spec$Companion_getInstance
  });
  SearchDSL.Spec = SearchDSL$Spec;
  SearchDSL.Binding = SearchDSL$Binding;
  package$di.SearchDSL = SearchDSL;
  package$di.FindDSL = FindDSL;
  package$di.findAllBindings_ew0lkc$ = findAllBindings;
  Object.defineProperty(Typed, 'Companion', {
    get: Typed$Companion_getInstance
  });
  package$di.Typed = Typed;
  var package$bindings = package$di.bindings || (package$di.bindings = {});
  package$bindings.WithContext = WithContext;
  package$bindings.SimpleBindingKodein = SimpleBindingKodein;
  package$bindings.BindingKodein = BindingKodein;
  package$bindings.NoArgSimpleBindingKodein = NoArgSimpleBindingKodein;
  package$bindings.NoArgBindingKodein = NoArgBindingKodein;
  package$bindings.NoArgBindingKodeinWrap = NoArgBindingKodeinWrap;
  package$bindings.ExternalSource = ExternalSource;
  Object.defineProperty(ExternalSource, 'Companion', {
    get: ExternalSource$Companion_getInstance
  });
  package$bindings.externalFactory_x0lpf$ = externalFactory;
  package$bindings.Binding = Binding;
  Object.defineProperty(KodeinBinding$Copier, 'Companion', {
    get: KodeinBinding$Copier$Companion_getInstance
  });
  KodeinBinding.Copier = KodeinBinding$Copier;
  package$bindings.KodeinBinding = KodeinBinding;
  package$bindings.NoArgKodeinBinding = NoArgKodeinBinding;
  package$bindings.Reference = Reference;
  package$bindings.RefMaker = RefMaker;
  Object.defineProperty(package$bindings, 'SingletonReference', {
    get: SingletonReference_getInstance
  });
  package$bindings.ScopeCloseable = ScopeCloseable;
  package$bindings.ScopeRegistry = ScopeRegistry;
  package$bindings.StandardScopeRegistry = StandardScopeRegistry;
  package$bindings.SingleItemScopeRegistry = SingleItemScopeRegistry;
  package$bindings.ContextTranslator = ContextTranslator;
  package$bindings.SimpleContextTranslator = SimpleContextTranslator;
  package$bindings.SimpleAutoContextTranslator = SimpleAutoContextTranslator;
  package$bindings.toKContext_88asxu$ = toKContext;
  package$bindings.CompositeContextTranslator = CompositeContextTranslator;
  package$bindings.Scope = Scope;
  package$bindings.UnboundedScope = UnboundedScope;
  package$bindings.SubScope = SubScope;
  package$bindings.NoScope = NoScope;
  package$bindings.BaseMultiBinding = BaseMultiBinding;
  package$bindings.ArgSetBinding = ArgSetBinding;
  package$bindings.SetBinding = SetBinding;
  package$bindings.TypeBinderInSet = TypeBinderInSet;
  package$bindings.InSet_evytg1$ = InSet;
  package$bindings.Factory = Factory_0;
  package$bindings.Multiton = Multiton;
  package$bindings.Provider = Provider_1;
  package$bindings.Singleton = Singleton;
  package$bindings.EagerSingleton = EagerSingleton;
  package$bindings.InstanceBinding = InstanceBinding;
  package$di.toProvider_uvcnfo$ = toProvider;
  var package$internal = package$di.internal || (package$di.internal = {});
  package$internal.DKodeinBaseImpl = DKodeinBaseImpl;
  KodeinBuilderImpl.TypeBinder = KodeinBuilderImpl$TypeBinder;
  KodeinBuilderImpl.DirectBinder = KodeinBuilderImpl$DirectBinder;
  KodeinBuilderImpl.ConstantBinder = KodeinBuilderImpl$ConstantBinder;
  package$internal.KodeinBuilderImpl = KodeinBuilderImpl;
  package$internal.KodeinMainBuilderImpl = KodeinMainBuilderImpl;
  package$internal.KodeinContainerBuilderImpl = KodeinContainerBuilderImpl;
  package$internal.KodeinContainerImpl_init_kgvle1$ = KodeinContainerImpl_init;
  package$internal.KodeinContainerImpl = KodeinContainerImpl;
  Object.defineProperty(KodeinImpl, 'Companion', {
    get: KodeinImpl$Companion_getInstance
  });
  package$internal.KodeinImpl_init_z3stfd$ = KodeinImpl_init_0;
  package$internal.KodeinImpl = KodeinImpl;
  package$internal.BindingKodeinImpl = BindingKodeinImpl;
  package$internal.KodeinTreeImpl = KodeinTreeImpl;
  package$internal.maySynchronized_c7lj6g$ = maySynchronized;
  package$internal.synchronizedIfNull_e1gqpa$ = synchronizedIfNull;
  package$internal.synchronizedIfNotNull_sd401g$ = synchronizedIfNotNull;
  package$di.LateInitKodein = LateInitKodein;
  package$di.LazyKodein = LazyKodein;
  package$di.KodeinTrigger = KodeinTrigger;
  package$di.LazyDelegate = LazyDelegate;
  package$di.KodeinProperty = KodeinProperty;
  package$di.KodeinPropertyMap = KodeinPropertyMap;
  package$di.subKodein_wog6xs$ = subKodein;
  Object.defineProperty(Multi2, 'Companion', {
    get: Multi2$Companion_getInstance
  });
  package$di.Multi2 = Multi2;
  Object.defineProperty(Multi3, 'Companion', {
    get: Multi3$Companion_getInstance
  });
  package$di.Multi3 = Multi3;
  Object.defineProperty(Multi4, 'Companion', {
    get: Multi4$Companion_getInstance
  });
  package$di.Multi4 = Multi4;
  Object.defineProperty(Multi5, 'Companion', {
    get: Multi5$Companion_getInstance
  });
  package$di.Multi5 = Multi5;
  package$di.CompositeTypeToken = CompositeTypeToken;
  package$di.AbstractKClassTypeToken = AbstractKClassTypeToken;
  Object.defineProperty(package$di, 'UnitToken', {
    get: get_UnitToken
  });
  Object.defineProperty(package$di, 'AnyToken', {
    get: get_AnyToken
  });
  package$di.DKodein = DKodein;
  package$internal.DKodeinImpl = DKodeinImpl;
  package$internal.newConcurrentMap_3w54xu$ = newConcurrentMap;
  package$internal.newLinkedList_tnbmyv$ = newLinkedList;
  package$internal.newLinkedList_5x7s3c$ = newLinkedList_0;
  package$di.JSTypeToken = JSTypeToken;
  package$di.TT_x7e9z0$ = TT;
  package$di.TT_lmshww$ = TT_0;
  package$di.TTOf_issdgt$ = TTOf;
  Kodein$MainBuilder.prototype.Bind_lpxwra$ = Kodein$Builder.prototype.Bind_lpxwra$;
  Kodein$MainBuilder.prototype.Bind_b6zv6g$ = Kodein$Builder.prototype.Bind_b6zv6g$;
  Kodein$MainBuilder.prototype.constant_obdoaf$ = Kodein$Builder.prototype.constant_obdoaf$;
  Kodein$MainBuilder.prototype.import_mxj0o6$ = Kodein$Builder.prototype.import_mxj0o6$;
  Kodein$MainBuilder.prototype.importAll_nybait$ = Kodein$Builder.prototype.importAll_nybait$;
  Kodein$MainBuilder.prototype.importAll_7ak0yr$ = Kodein$Builder.prototype.importAll_7ak0yr$;
  Kodein$MainBuilder.prototype.importOnce_mxj0o6$ = Kodein$Builder.prototype.importOnce_mxj0o6$;
  Object.defineProperty(Kodein.prototype, 'kodeinContext', Object.getOwnPropertyDescriptor(KodeinAware.prototype, 'kodeinContext'));
  Object.defineProperty(Kodein.prototype, 'kodeinTrigger', Object.getOwnPropertyDescriptor(KodeinAware.prototype, 'kodeinTrigger'));
  Object.defineProperty(DKodein.prototype, 'kodein', Object.getOwnPropertyDescriptor(DKodeinBase.prototype, 'kodein'));
  DKodein.prototype.Factory_nijjsc$ = DKodeinBase.prototype.Factory_nijjsc$;
  DKodein.prototype.FactoryOrNull_nijjsc$ = DKodeinBase.prototype.FactoryOrNull_nijjsc$;
  DKodein.prototype.Provider_xflu9r$ = DKodeinBase.prototype.Provider_xflu9r$;
  DKodein.prototype.Provider_veebl6$ = DKodeinBase.prototype.Provider_veebl6$;
  DKodein.prototype.ProviderOrNull_xflu9r$ = DKodeinBase.prototype.ProviderOrNull_xflu9r$;
  DKodein.prototype.ProviderOrNull_veebl6$ = DKodeinBase.prototype.ProviderOrNull_veebl6$;
  DKodein.prototype.Instance_xflu9r$ = DKodeinBase.prototype.Instance_xflu9r$;
  DKodein.prototype.Instance_ibvr8m$ = DKodeinBase.prototype.Instance_ibvr8m$;
  DKodein.prototype.InstanceOrNull_xflu9r$ = DKodeinBase.prototype.InstanceOrNull_xflu9r$;
  DKodein.prototype.InstanceOrNull_ibvr8m$ = DKodeinBase.prototype.InstanceOrNull_ibvr8m$;
  Object.defineProperty(SimpleBindingKodein.prototype, 'kodein', Object.getOwnPropertyDescriptor(DKodein.prototype, 'kodein'));
  SimpleBindingKodein.prototype.Factory_nijjsc$ = DKodein.prototype.Factory_nijjsc$;
  SimpleBindingKodein.prototype.FactoryOrNull_nijjsc$ = DKodein.prototype.FactoryOrNull_nijjsc$;
  SimpleBindingKodein.prototype.Provider_xflu9r$ = DKodein.prototype.Provider_xflu9r$;
  SimpleBindingKodein.prototype.Provider_veebl6$ = DKodein.prototype.Provider_veebl6$;
  SimpleBindingKodein.prototype.ProviderOrNull_xflu9r$ = DKodein.prototype.ProviderOrNull_xflu9r$;
  SimpleBindingKodein.prototype.ProviderOrNull_veebl6$ = DKodein.prototype.ProviderOrNull_veebl6$;
  SimpleBindingKodein.prototype.Instance_xflu9r$ = DKodein.prototype.Instance_xflu9r$;
  SimpleBindingKodein.prototype.Instance_ibvr8m$ = DKodein.prototype.Instance_ibvr8m$;
  SimpleBindingKodein.prototype.InstanceOrNull_xflu9r$ = DKodein.prototype.InstanceOrNull_xflu9r$;
  SimpleBindingKodein.prototype.InstanceOrNull_ibvr8m$ = DKodein.prototype.InstanceOrNull_ibvr8m$;
  Object.defineProperty(BindingKodein.prototype, 'kodein', Object.getOwnPropertyDescriptor(SimpleBindingKodein.prototype, 'kodein'));
  BindingKodein.prototype.Factory_nijjsc$ = SimpleBindingKodein.prototype.Factory_nijjsc$;
  BindingKodein.prototype.FactoryOrNull_nijjsc$ = SimpleBindingKodein.prototype.FactoryOrNull_nijjsc$;
  BindingKodein.prototype.Provider_xflu9r$ = SimpleBindingKodein.prototype.Provider_xflu9r$;
  BindingKodein.prototype.Provider_veebl6$ = SimpleBindingKodein.prototype.Provider_veebl6$;
  BindingKodein.prototype.ProviderOrNull_xflu9r$ = SimpleBindingKodein.prototype.ProviderOrNull_xflu9r$;
  BindingKodein.prototype.ProviderOrNull_veebl6$ = SimpleBindingKodein.prototype.ProviderOrNull_veebl6$;
  BindingKodein.prototype.Instance_xflu9r$ = SimpleBindingKodein.prototype.Instance_xflu9r$;
  BindingKodein.prototype.Instance_ibvr8m$ = SimpleBindingKodein.prototype.Instance_ibvr8m$;
  BindingKodein.prototype.InstanceOrNull_xflu9r$ = SimpleBindingKodein.prototype.InstanceOrNull_xflu9r$;
  BindingKodein.prototype.InstanceOrNull_ibvr8m$ = SimpleBindingKodein.prototype.InstanceOrNull_ibvr8m$;
  Object.defineProperty(NoArgSimpleBindingKodein.prototype, 'kodein', Object.getOwnPropertyDescriptor(DKodein.prototype, 'kodein'));
  NoArgSimpleBindingKodein.prototype.Factory_nijjsc$ = DKodein.prototype.Factory_nijjsc$;
  NoArgSimpleBindingKodein.prototype.FactoryOrNull_nijjsc$ = DKodein.prototype.FactoryOrNull_nijjsc$;
  NoArgSimpleBindingKodein.prototype.Provider_xflu9r$ = DKodein.prototype.Provider_xflu9r$;
  NoArgSimpleBindingKodein.prototype.Provider_veebl6$ = DKodein.prototype.Provider_veebl6$;
  NoArgSimpleBindingKodein.prototype.ProviderOrNull_xflu9r$ = DKodein.prototype.ProviderOrNull_xflu9r$;
  NoArgSimpleBindingKodein.prototype.ProviderOrNull_veebl6$ = DKodein.prototype.ProviderOrNull_veebl6$;
  NoArgSimpleBindingKodein.prototype.Instance_xflu9r$ = DKodein.prototype.Instance_xflu9r$;
  NoArgSimpleBindingKodein.prototype.Instance_ibvr8m$ = DKodein.prototype.Instance_ibvr8m$;
  NoArgSimpleBindingKodein.prototype.InstanceOrNull_xflu9r$ = DKodein.prototype.InstanceOrNull_xflu9r$;
  NoArgSimpleBindingKodein.prototype.InstanceOrNull_ibvr8m$ = DKodein.prototype.InstanceOrNull_ibvr8m$;
  Object.defineProperty(NoArgBindingKodein.prototype, 'kodein', Object.getOwnPropertyDescriptor(NoArgSimpleBindingKodein.prototype, 'kodein'));
  NoArgBindingKodein.prototype.Factory_nijjsc$ = NoArgSimpleBindingKodein.prototype.Factory_nijjsc$;
  NoArgBindingKodein.prototype.FactoryOrNull_nijjsc$ = NoArgSimpleBindingKodein.prototype.FactoryOrNull_nijjsc$;
  NoArgBindingKodein.prototype.Provider_xflu9r$ = NoArgSimpleBindingKodein.prototype.Provider_xflu9r$;
  NoArgBindingKodein.prototype.Provider_veebl6$ = NoArgSimpleBindingKodein.prototype.Provider_veebl6$;
  NoArgBindingKodein.prototype.ProviderOrNull_xflu9r$ = NoArgSimpleBindingKodein.prototype.ProviderOrNull_xflu9r$;
  NoArgBindingKodein.prototype.ProviderOrNull_veebl6$ = NoArgSimpleBindingKodein.prototype.ProviderOrNull_veebl6$;
  NoArgBindingKodein.prototype.Instance_xflu9r$ = NoArgSimpleBindingKodein.prototype.Instance_xflu9r$;
  NoArgBindingKodein.prototype.Instance_ibvr8m$ = NoArgSimpleBindingKodein.prototype.Instance_ibvr8m$;
  NoArgBindingKodein.prototype.InstanceOrNull_xflu9r$ = NoArgSimpleBindingKodein.prototype.InstanceOrNull_xflu9r$;
  NoArgBindingKodein.prototype.InstanceOrNull_ibvr8m$ = NoArgSimpleBindingKodein.prototype.InstanceOrNull_ibvr8m$;
  NoArgBindingKodeinWrap.prototype.Factory_nijjsc$ = NoArgBindingKodein.prototype.Factory_nijjsc$;
  NoArgBindingKodeinWrap.prototype.FactoryOrNull_nijjsc$ = NoArgBindingKodein.prototype.FactoryOrNull_nijjsc$;
  NoArgBindingKodeinWrap.prototype.Provider_xflu9r$ = NoArgBindingKodein.prototype.Provider_xflu9r$;
  NoArgBindingKodeinWrap.prototype.Provider_veebl6$ = NoArgBindingKodein.prototype.Provider_veebl6$;
  NoArgBindingKodeinWrap.prototype.ProviderOrNull_xflu9r$ = NoArgBindingKodein.prototype.ProviderOrNull_xflu9r$;
  NoArgBindingKodeinWrap.prototype.ProviderOrNull_veebl6$ = NoArgBindingKodein.prototype.ProviderOrNull_veebl6$;
  NoArgBindingKodeinWrap.prototype.Instance_ibvr8m$ = NoArgBindingKodein.prototype.Instance_ibvr8m$;
  NoArgBindingKodeinWrap.prototype.Instance_xflu9r$ = NoArgBindingKodein.prototype.Instance_xflu9r$;
  NoArgBindingKodeinWrap.prototype.InstanceOrNull_xflu9r$ = NoArgBindingKodein.prototype.InstanceOrNull_xflu9r$;
  NoArgBindingKodeinWrap.prototype.InstanceOrNull_ibvr8m$ = NoArgBindingKodein.prototype.InstanceOrNull_ibvr8m$;
  NoArgKodeinBinding.prototype.factoryFullName = KodeinBinding.prototype.factoryFullName;
  Object.defineProperty(NoArgKodeinBinding.prototype, 'scope', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'scope'));
  Object.defineProperty(NoArgKodeinBinding.prototype, 'description', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'description'));
  Object.defineProperty(NoArgKodeinBinding.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(NoArgKodeinBinding.prototype, 'copier', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'copier'));
  Object.defineProperty(NoArgKodeinBinding.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'supportSubTypes'));
  BaseMultiBinding.prototype.factoryFullName = KodeinBinding.prototype.factoryFullName;
  Object.defineProperty(BaseMultiBinding.prototype, 'scope', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'scope'));
  Object.defineProperty(BaseMultiBinding.prototype, 'description', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'description'));
  Object.defineProperty(BaseMultiBinding.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(BaseMultiBinding.prototype, 'copier', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'copier'));
  Object.defineProperty(BaseMultiBinding.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'supportSubTypes'));
  SetBindingKodein.prototype.Factory_nijjsc$ = BindingKodein.prototype.Factory_nijjsc$;
  SetBindingKodein.prototype.FactoryOrNull_nijjsc$ = BindingKodein.prototype.FactoryOrNull_nijjsc$;
  SetBindingKodein.prototype.Provider_veebl6$ = BindingKodein.prototype.Provider_veebl6$;
  SetBindingKodein.prototype.Provider_xflu9r$ = BindingKodein.prototype.Provider_xflu9r$;
  SetBindingKodein.prototype.ProviderOrNull_veebl6$ = BindingKodein.prototype.ProviderOrNull_veebl6$;
  SetBindingKodein.prototype.ProviderOrNull_xflu9r$ = BindingKodein.prototype.ProviderOrNull_xflu9r$;
  SetBindingKodein.prototype.Instance_ibvr8m$ = BindingKodein.prototype.Instance_ibvr8m$;
  SetBindingKodein.prototype.Instance_xflu9r$ = BindingKodein.prototype.Instance_xflu9r$;
  SetBindingKodein.prototype.InstanceOrNull_xflu9r$ = BindingKodein.prototype.InstanceOrNull_xflu9r$;
  SetBindingKodein.prototype.InstanceOrNull_ibvr8m$ = BindingKodein.prototype.InstanceOrNull_ibvr8m$;
  Object.defineProperty(SetBinding.prototype, 'argType', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'argType'));
  SetBinding.prototype.factoryFullName = NoArgKodeinBinding.prototype.factoryFullName;
  Object.defineProperty(SetBinding.prototype, 'scope', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'scope'));
  Object.defineProperty(SetBinding.prototype, 'description', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'description'));
  Object.defineProperty(SetBinding.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(SetBinding.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'supportSubTypes'));
  Factory_0.prototype.factoryFullName = KodeinBinding.prototype.factoryFullName;
  Object.defineProperty(Factory_0.prototype, 'scope', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'scope'));
  Object.defineProperty(Factory_0.prototype, 'description', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'description'));
  Object.defineProperty(Factory_0.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(Factory_0.prototype, 'copier', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'copier'));
  Object.defineProperty(Factory_0.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'supportSubTypes'));
  BindingContextedKodein.prototype.Factory_nijjsc$ = BindingKodein.prototype.Factory_nijjsc$;
  BindingContextedKodein.prototype.FactoryOrNull_nijjsc$ = BindingKodein.prototype.FactoryOrNull_nijjsc$;
  BindingContextedKodein.prototype.Provider_xflu9r$ = BindingKodein.prototype.Provider_xflu9r$;
  BindingContextedKodein.prototype.Provider_veebl6$ = BindingKodein.prototype.Provider_veebl6$;
  BindingContextedKodein.prototype.ProviderOrNull_xflu9r$ = BindingKodein.prototype.ProviderOrNull_xflu9r$;
  BindingContextedKodein.prototype.ProviderOrNull_veebl6$ = BindingKodein.prototype.ProviderOrNull_veebl6$;
  BindingContextedKodein.prototype.Instance_ibvr8m$ = BindingKodein.prototype.Instance_ibvr8m$;
  BindingContextedKodein.prototype.Instance_xflu9r$ = BindingKodein.prototype.Instance_xflu9r$;
  BindingContextedKodein.prototype.InstanceOrNull_xflu9r$ = BindingKodein.prototype.InstanceOrNull_xflu9r$;
  BindingContextedKodein.prototype.InstanceOrNull_ibvr8m$ = BindingKodein.prototype.InstanceOrNull_ibvr8m$;
  Object.defineProperty(Multiton.prototype, 'description', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'description'));
  Object.defineProperty(Multiton.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(Multiton.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(KodeinBinding.prototype, 'supportSubTypes'));
  Object.defineProperty(Provider_1.prototype, 'argType', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'argType'));
  Provider_1.prototype.factoryFullName = NoArgKodeinBinding.prototype.factoryFullName;
  Object.defineProperty(Provider_1.prototype, 'scope', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'scope'));
  Object.defineProperty(Provider_1.prototype, 'description', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'description'));
  Object.defineProperty(Provider_1.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(Provider_1.prototype, 'copier', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'copier'));
  Object.defineProperty(Provider_1.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'supportSubTypes'));
  Object.defineProperty(Singleton.prototype, 'argType', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'argType'));
  Object.defineProperty(Singleton.prototype, 'description', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'description'));
  Object.defineProperty(Singleton.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(Singleton.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'supportSubTypes'));
  Object.defineProperty(EagerSingleton.prototype, 'argType', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'argType'));
  EagerSingleton.prototype.factoryFullName = NoArgKodeinBinding.prototype.factoryFullName;
  Object.defineProperty(EagerSingleton.prototype, 'scope', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'scope'));
  Object.defineProperty(EagerSingleton.prototype, 'description', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'description'));
  Object.defineProperty(EagerSingleton.prototype, 'fullDescription', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'fullDescription'));
  Object.defineProperty(EagerSingleton.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'supportSubTypes'));
  Object.defineProperty(InstanceBinding.prototype, 'argType', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'argType'));
  InstanceBinding.prototype.factoryFullName = NoArgKodeinBinding.prototype.factoryFullName;
  Object.defineProperty(InstanceBinding.prototype, 'scope', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'scope'));
  Object.defineProperty(InstanceBinding.prototype, 'copier', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'copier'));
  Object.defineProperty(InstanceBinding.prototype, 'supportSubTypes', Object.getOwnPropertyDescriptor(NoArgKodeinBinding.prototype, 'supportSubTypes'));
  Object.defineProperty(DKodeinBaseImpl.prototype, 'kodein', Object.getOwnPropertyDescriptor(DKodein.prototype, 'kodein'));
  DKodeinBaseImpl.prototype.Factory_nijjsc$ = DKodein.prototype.Factory_nijjsc$;
  DKodeinBaseImpl.prototype.FactoryOrNull_nijjsc$ = DKodein.prototype.FactoryOrNull_nijjsc$;
  DKodeinBaseImpl.prototype.Provider_xflu9r$ = DKodein.prototype.Provider_xflu9r$;
  DKodeinBaseImpl.prototype.Provider_veebl6$ = DKodein.prototype.Provider_veebl6$;
  DKodeinBaseImpl.prototype.ProviderOrNull_xflu9r$ = DKodein.prototype.ProviderOrNull_xflu9r$;
  DKodeinBaseImpl.prototype.ProviderOrNull_veebl6$ = DKodein.prototype.ProviderOrNull_veebl6$;
  DKodeinBaseImpl.prototype.Instance_xflu9r$ = DKodein.prototype.Instance_xflu9r$;
  DKodeinBaseImpl.prototype.Instance_ibvr8m$ = DKodein.prototype.Instance_ibvr8m$;
  DKodeinBaseImpl.prototype.InstanceOrNull_xflu9r$ = DKodein.prototype.InstanceOrNull_xflu9r$;
  DKodeinBaseImpl.prototype.InstanceOrNull_ibvr8m$ = DKodein.prototype.InstanceOrNull_ibvr8m$;
  KodeinBuilderImpl.prototype.Bind_lpxwra$ = Kodein$Builder.prototype.Bind_lpxwra$;
  KodeinBuilderImpl.prototype.Bind_b6zv6g$ = Kodein$Builder.prototype.Bind_b6zv6g$;
  KodeinBuilderImpl.prototype.constant_obdoaf$ = Kodein$Builder.prototype.constant_obdoaf$;
  KodeinBuilderImpl.prototype.import_mxj0o6$ = Kodein$Builder.prototype.import_mxj0o6$;
  KodeinBuilderImpl.prototype.importAll_7ak0yr$ = Kodein$Builder.prototype.importAll_7ak0yr$;
  KodeinBuilderImpl.prototype.importAll_nybait$ = Kodein$Builder.prototype.importAll_nybait$;
  KodeinBuilderImpl.prototype.importOnce_mxj0o6$ = Kodein$Builder.prototype.importOnce_mxj0o6$;
  Object.defineProperty(KodeinMainBuilderImpl.prototype, 'externalSource', Object.getOwnPropertyDescriptor(Kodein$MainBuilder.prototype, 'externalSource'));
  KodeinMainBuilderImpl.prototype.extend_xr6j32$ = Kodein$MainBuilder.prototype.extend_xr6j32$;
  KodeinMainBuilderImpl.prototype.extend_q0y52g$ = Kodein$MainBuilder.prototype.extend_q0y52g$;
  KodeinContainerBuilderImpl.prototype.bind_5vrb93$ = KodeinContainer$Builder.prototype.bind_5vrb93$;
  KodeinContainerBuilderImpl.prototype.extend_su2hik$ = KodeinContainer$Builder.prototype.extend_su2hik$;
  KodeinContainerBuilderImpl.prototype.subBuilder_dqye30$ = KodeinContainer$Builder.prototype.subBuilder_dqye30$;
  KodeinContainerImpl.prototype.provider_wtviuz$$default = KodeinContainer.prototype.provider_wtviuz$$default;
  KodeinContainerImpl.prototype.providerOrNull_wtviuz$$default = KodeinContainer.prototype.providerOrNull_wtviuz$$default;
  KodeinContainerImpl.prototype.allProviders_wtviuz$$default = KodeinContainer.prototype.allProviders_wtviuz$$default;
  KodeinContainerImpl.prototype.factoryOrNull_3h818e$ = KodeinContainer.prototype.factoryOrNull_3h818e$;
  KodeinContainerImpl.prototype.factory_3h818e$ = KodeinContainer.prototype.factory_3h818e$;
  KodeinContainerImpl.prototype.allFactories_3h818e$ = KodeinContainer.prototype.allFactories_3h818e$;
  KodeinContainerImpl.prototype.provider_wtviuz$ = KodeinContainer.prototype.provider_wtviuz$;
  KodeinContainerImpl.prototype.providerOrNull_wtviuz$ = KodeinContainer.prototype.providerOrNull_wtviuz$;
  KodeinContainerImpl.prototype.allProviders_wtviuz$ = KodeinContainer.prototype.allProviders_wtviuz$;
  Object.defineProperty(KodeinImpl.prototype, 'kodein', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodein'));
  Object.defineProperty(KodeinImpl.prototype, 'kodeinContext', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodeinContext'));
  Object.defineProperty(KodeinImpl.prototype, 'kodeinTrigger', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodeinTrigger'));
  BindingKodeinImpl.prototype.Factory_nijjsc$ = DKodein.prototype.Factory_nijjsc$;
  BindingKodeinImpl.prototype.FactoryOrNull_nijjsc$ = DKodein.prototype.FactoryOrNull_nijjsc$;
  BindingKodeinImpl.prototype.Provider_veebl6$ = DKodein.prototype.Provider_veebl6$;
  BindingKodeinImpl.prototype.Provider_xflu9r$ = DKodein.prototype.Provider_xflu9r$;
  BindingKodeinImpl.prototype.ProviderOrNull_xflu9r$ = DKodein.prototype.ProviderOrNull_xflu9r$;
  BindingKodeinImpl.prototype.ProviderOrNull_veebl6$ = DKodein.prototype.ProviderOrNull_veebl6$;
  BindingKodeinImpl.prototype.Instance_ibvr8m$ = DKodein.prototype.Instance_ibvr8m$;
  BindingKodeinImpl.prototype.Instance_xflu9r$ = DKodein.prototype.Instance_xflu9r$;
  BindingKodeinImpl.prototype.InstanceOrNull_ibvr8m$ = DKodein.prototype.InstanceOrNull_ibvr8m$;
  BindingKodeinImpl.prototype.InstanceOrNull_xflu9r$ = DKodein.prototype.InstanceOrNull_xflu9r$;
  KodeinTreeImpl.prototype.find_7kv2rd$ = KodeinTree.prototype.find_7kv2rd$;
  Object.defineProperty(LateInitKodein.prototype, 'kodein', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodein'));
  Object.defineProperty(LateInitKodein.prototype, 'kodeinContext', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodeinContext'));
  Object.defineProperty(LateInitKodein.prototype, 'kodeinTrigger', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodeinTrigger'));
  Object.defineProperty(LazyKodein.prototype, 'kodein', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodein'));
  Object.defineProperty(LazyKodein.prototype, 'kodeinContext', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodeinContext'));
  Object.defineProperty(LazyKodein.prototype, 'kodeinTrigger', Object.getOwnPropertyDescriptor(Kodein.prototype, 'kodeinTrigger'));
  CompositeTypeToken.prototype.isAssignableFrom_ah7syo$ = TypeToken.prototype.isAssignableFrom_ah7syo$;
  Kotlin.defineModule('Kodein-DI-kodein-di-core', _);
  return _;
}));

//# sourceMappingURL=Kodein-DI-kodein-di-core.js.map
