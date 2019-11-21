(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Kodein-DI-kodein-di-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Kodein-DI-kodein-di-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Kodein-DI-kodein-di-erased'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kodein-DI-kodein-di-erased'.");
    }
    if (typeof this['Kodein-DI-kodein-di-core'] === 'undefined') {
      throw new Error("Error loading module 'Kodein-DI-kodein-di-erased'. Its dependency 'Kodein-DI-kodein-di-core' was not found. Please, check whether 'Kodein-DI-kodein-di-core' is loaded prior to 'Kodein-DI-kodein-di-erased'.");
    }
    root['Kodein-DI-kodein-di-erased'] = factory(typeof this['Kodein-DI-kodein-di-erased'] === 'undefined' ? {} : this['Kodein-DI-kodein-di-erased'], kotlin, this['Kodein-DI-kodein-di-core']);
  }
}(this, function (_, Kotlin, $module$Kodein_DI_kodein_di_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var On = $module$Kodein_DI_kodein_di_core.org.kodein.di.On_1o76ag$;
  var scoped = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.scoped_1fvha7$', wrapFunction(function () {
    var Kodein$BindBuilder$WithScope$Kodein$BindBuilder$WithScope$Impl_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Kodein.BindBuilder.WithScope.Impl;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (C_0, isC, $receiver, scope) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return new Kodein$BindBuilder$WithScope$Kodein$BindBuilder$WithScope$Impl_init(erased$result, scope);
    };
  }));
  var contexted = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.contexted_xa7eib$', wrapFunction(function () {
    var Kodein$BindBuilder$WithContext$Kodein$BindBuilder$WithContext$Impl_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Kodein.BindBuilder.WithContext.Impl;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (C_0, isC, $receiver) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return new Kodein$BindBuilder$WithContext$Kodein$BindBuilder$WithContext$Impl_init(erased$result);
    };
  }));
  var factory = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_207bw7$', wrapFunction(function () {
    var Factory_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Factory;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, creator) {
      var tmp$ = $receiver.contextType;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return new Factory_init(tmp$, erased$result, erased$result_0, creator);
    };
  }));
  var provider = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_mq97oy$', wrapFunction(function () {
    var Provider_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Provider;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, creator) {
      var tmp$ = $receiver.contextType;
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
      return new Provider_init(tmp$, erased$result, creator);
    };
  }));
  var singleton = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.singleton_qori8l$', wrapFunction(function () {
    var Singleton_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Singleton;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, ref, sync, creator) {
      if (ref === void 0)
        ref = null;
      if (sync === void 0)
        sync = true;
      var tmp$ = $receiver.scope;
      var tmp$_0 = $receiver.contextType;
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
      return new Singleton_init(tmp$, tmp$_0, erased$result, ref, sync, creator);
    };
  }));
  var multiton = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.multiton_hx5jmq$', wrapFunction(function () {
    var Multiton_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Multiton;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, ref, sync, creator) {
      if (ref === void 0)
        ref = null;
      if (sync === void 0)
        sync = true;
      var tmp$ = $receiver.scope;
      var tmp$_0 = $receiver.contextType;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return new Multiton_init(tmp$, tmp$_0, erased$result, erased$result_0, ref, sync, creator);
    };
  }));
  var eagerSingleton = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.eagerSingleton_y4yu9q$', wrapFunction(function () {
    var EagerSingleton_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.EagerSingleton;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, creator) {
      var tmp$ = $receiver.containerBuilder;
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
      return new EagerSingleton_init(tmp$, erased$result, creator);
    };
  }));
  var instance = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_jwzupw$', wrapFunction(function () {
    var InstanceBinding_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.InstanceBinding;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, instance) {
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
      return new InstanceBinding_init(erased$result, instance);
    };
  }));
  var factory_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_47zpfy$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.Factory_nijjsc$(erased$result, erased$result_0, tag);
    };
  }));
  var factoryOrNull = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factoryOrNull_47zpfy$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.FactoryOrNull_nijjsc$(erased$result, erased$result_0, tag);
    };
  }));
  var provider_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_tr0g5l$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
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
      return tmp$.Provider_xflu9r$(erased$result, tag);
    };
  }));
  var provider_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_o9qmz8$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function provider$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.Provider_veebl6$(erased$result, erased$result_0, tag, provider$lambda(arg));
    };
  }));
  var provider_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_9j2mo9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function provider$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var tmp$_0 = arg.type;
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
      return tmp$.Provider_veebl6$(tmp$_0, erased$result, tag, provider$lambda(arg));
    };
  }));
  var provider_3 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_cq1njk$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, fArg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.Provider_veebl6$(erased$result, erased$result_0, tag, fArg);
    };
  }));
  var providerOrNull = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_tr0g5l$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
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
      return tmp$.ProviderOrNull_xflu9r$(erased$result, tag);
    };
  }));
  var providerOrNull_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_o9qmz8$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function providerOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.ProviderOrNull_veebl6$(erased$result, erased$result_0, tag, providerOrNull$lambda(arg));
    };
  }));
  var providerOrNull_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_9j2mo9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function providerOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var tmp$_0 = arg.type;
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
      return tmp$.ProviderOrNull_veebl6$(tmp$_0, erased$result, tag, providerOrNull$lambda(arg));
    };
  }));
  var providerOrNull_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_cq1njk$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, fArg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.ProviderOrNull_veebl6$(erased$result, erased$result_0, tag, fArg);
    };
  }));
  var instance_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_tr0g5l$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
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
      return tmp$.Instance_xflu9r$(erased$result, tag);
    };
  }));
  var instance_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_o9qmz8$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.Instance_ibvr8m$(erased$result, erased$result_0, tag, arg);
    };
  }));
  var instance_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_9j2mo9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var tmp$_0 = arg.type;
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
      return tmp$.Instance_ibvr8m$(tmp$_0, erased$result, tag, arg.value);
    };
  }));
  var instanceOrNull = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_tr0g5l$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
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
      return tmp$.InstanceOrNull_xflu9r$(erased$result, tag);
    };
  }));
  var instanceOrNull_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_o9qmz8$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return tmp$.InstanceOrNull_ibvr8m$(erased$result, erased$result_0, tag, arg);
    };
  }));
  var instanceOrNull_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_9j2mo9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = $receiver.dkodein;
      var tmp$_0 = arg.type;
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
      return tmp$.InstanceOrNull_ibvr8m$(tmp$_0, erased$result, tag, arg.value);
    };
  }));
  var on = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.on_8sgfpc$', wrapFunction(function () {
    var KodeinContext = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinContext;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (C_0, isC, $receiver, context) {
      var tmp$ = $receiver.dkodein;
      var tmp$_0 = KodeinContext.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return tmp$.On_r7y1kq$(tmp$_0.invoke_wm568t$(erased$result, context));
    };
  }));
  var factory_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_6jsy2g$', wrapFunction(function () {
    var Factory = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Factory_pub27j$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return Factory($receiver, erased$result, erased$result_0, tag);
    };
  }));
  var factoryOrNull_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factoryOrNull_6jsy2g$', wrapFunction(function () {
    var FactoryOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.FactoryOrNull_pub27j$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return FactoryOrNull($receiver, erased$result, erased$result_0, tag);
    };
  }));
  var provider_4 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_l0rygt$', wrapFunction(function () {
    var Provider = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Provider_pnvkjc$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
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
      return Provider($receiver, erased$result, tag);
    };
  }));
  var provider_5 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_auvoz6$', wrapFunction(function () {
    var Provider = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Provider_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function provider$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return Provider($receiver, erased$result, erased$result_0, tag, provider$lambda(arg));
    };
  }));
  var provider_6 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_nfg775$', wrapFunction(function () {
    var Provider = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Provider_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function provider$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = arg.type;
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
      return Provider($receiver, tmp$, erased$result, tag, provider$lambda(arg));
    };
  }));
  var provider_7 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_hu4v62$', wrapFunction(function () {
    var Provider = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Provider_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, fArg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return Provider($receiver, erased$result, erased$result_0, tag, fArg);
    };
  }));
  var providerOrNull_3 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_l0rygt$', wrapFunction(function () {
    var ProviderOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.ProviderOrNull_pnvkjc$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
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
      return ProviderOrNull($receiver, erased$result, tag);
    };
  }));
  var providerOrNull_4 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_auvoz6$', wrapFunction(function () {
    var ProviderOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.ProviderOrNull_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function providerOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return ProviderOrNull($receiver, erased$result, erased$result_0, tag, providerOrNull$lambda(arg));
    };
  }));
  var providerOrNull_5 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_nfg775$', wrapFunction(function () {
    var ProviderOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.ProviderOrNull_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function providerOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = arg.type;
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
      return ProviderOrNull($receiver, tmp$, erased$result, tag, providerOrNull$lambda(arg));
    };
  }));
  var providerOrNull_6 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_hu4v62$', wrapFunction(function () {
    var ProviderOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.ProviderOrNull_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, fArg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return ProviderOrNull($receiver, erased$result, erased$result_0, tag, fArg);
    };
  }));
  var instance_3 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_l0rygt$', wrapFunction(function () {
    var Instance = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Instance_pnvkjc$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
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
      return Instance($receiver, erased$result, tag);
    };
  }));
  var instance_4 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_auvoz6$', wrapFunction(function () {
    var Instance = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Instance_nww7ik$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instance$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return Instance($receiver, erased$result, erased$result_0, tag, instance$lambda(arg));
    };
  }));
  var instance_5 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_nfg775$', wrapFunction(function () {
    var Instance = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Instance_nww7ik$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instance$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = arg.type;
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
      return Instance($receiver, tmp$, erased$result, tag, instance$lambda(arg));
    };
  }));
  var instance_6 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_hu4v62$', wrapFunction(function () {
    var Instance = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Instance_nww7ik$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, fArg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return Instance($receiver, erased$result, erased$result_0, tag, fArg);
    };
  }));
  var instanceOrNull_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_l0rygt$', wrapFunction(function () {
    var InstanceOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.InstanceOrNull_pnvkjc$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
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
      return InstanceOrNull($receiver, erased$result, tag);
    };
  }));
  var instanceOrNull_3 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_auvoz6$', wrapFunction(function () {
    var InstanceOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.InstanceOrNull_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instanceOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return InstanceOrNull($receiver, erased$result, erased$result_0, tag, instanceOrNull$lambda(arg));
    };
  }));
  var instanceOrNull_4 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_nfg775$', wrapFunction(function () {
    var InstanceOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.InstanceOrNull_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instanceOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, tag, arg) {
      if (tag === void 0)
        tag = null;
      var tmp$ = arg.type;
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
      return InstanceOrNull($receiver, tmp$, erased$result, tag, instanceOrNull$lambda(arg));
    };
  }));
  var instanceOrNull_5 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_hu4v62$', wrapFunction(function () {
    var InstanceOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.InstanceOrNull_s4sq5v$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, tag, fArg) {
      if (tag === void 0)
        tag = null;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return InstanceOrNull($receiver, erased$result, erased$result_0, tag, fArg);
    };
  }));
  var kcontext = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.kcontext_mh5how$', wrapFunction(function () {
    var KodeinContext = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinContext;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (C_0, isC, context) {
      var tmp$ = KodeinContext.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return tmp$.invoke_wm568t$(erased$result, context);
    };
  }));
  var kcontext_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.kcontext_klfg04$', wrapFunction(function () {
    var KodeinContext = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinContext;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function kcontext$lambda(closure$getContext) {
      return function () {
        return closure$getContext();
      };
    }
    return function (C_0, isC, getContext) {
      var tmp$ = KodeinContext.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return tmp$.invoke_9sjlkh$(erased$result, kcontext$lambda(getContext));
    };
  }));
  var on_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.on_s4ungm$', wrapFunction(function () {
    var On = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.On_1o76ag$;
    var KodeinContext = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinContext;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (C_0, isC, $receiver, context, trigger) {
      if (trigger === void 0)
        trigger = $receiver.kodeinTrigger;
      var tmp$ = KodeinContext.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return On($receiver, tmp$.invoke_wm568t$(erased$result, context), trigger);
    };
  }));
  var on_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.on_ixffi$', wrapFunction(function () {
    var On = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.On_1o76ag$;
    var KodeinContext = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinContext;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function kcontext$lambda(closure$getContext) {
      return function () {
        return closure$getContext();
      };
    }
    return function (C_0, isC, $receiver, trigger, getContext) {
      if (trigger === void 0)
        trigger = $receiver.kodeinTrigger;
      var tmp$ = KodeinContext.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return On($receiver, tmp$.invoke_9sjlkh$(erased$result, kcontext$lambda(getContext)), trigger);
    };
  }));
  function on_2($receiver, trigger) {
    return On($receiver, $receiver.kodeinContext, trigger);
  }
  var bind = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.bind_233l2u$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag, overrides) {
      if (tag === void 0)
        tag = null;
      if (overrides === void 0)
        overrides = null;
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
      return $receiver.Bind_lpxwra$(erased$result, tag, overrides);
    };
  }));
  function bind_0($receiver, tag, overrides) {
    if (tag === void 0)
      tag = null;
    if (overrides === void 0)
      overrides = null;
    return $receiver.Bind_b6zv6g$(tag, overrides);
  }
  var with_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.with_3qifm4$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, value) {
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
      $receiver.With_xhfjco$(erased$result, value);
    };
  }));
  var binding = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.binding_yftttq$', wrapFunction(function () {
    var SearchDSL$SearchDSL$Binding_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.SearchDSL.Binding;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
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
      return new SearchDSL$SearchDSL$Binding_init(erased$result, tag);
    };
  }));
  var context = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.context_b4d2st$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return $receiver.Context_ah7syo$(erased$result);
    };
  }));
  var argument = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.argument_b4d2st$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return $receiver.Argument_ah7syo$(erased$result);
    };
  }));
  var factory_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_hgx8fh$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var Factory_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Factory;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function factory$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, T_0, isT, $receiver, creator) {
      var tmp$ = $receiver.contextType;
      Multi2.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      return new Factory_init(tmp$, tmp$_0, erased$result_2, factory$lambda(creator));
    };
  }));
  var factory_3 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_vd71qn$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var Factory_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Factory;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function factory$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2, it.a3);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, T_0, isT, $receiver, creator) {
      var tmp$ = $receiver.contextType;
      Multi3.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]);
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      return new Factory_init(tmp$, tmp$_0, erased$result_3, factory$lambda(creator));
    };
  }));
  var factory_4 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_rhrjhr$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var Factory_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Factory;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function factory$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2, it.a3, it.a4);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, T_0, isT, $receiver, creator) {
      var tmp$ = $receiver.contextType;
      Multi4.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]);
      var erased$result_4;
      try {
        erased$result_4 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_4) {
        if (Kotlin.isType(ex_4, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_4;
      }
      return new Factory_init(tmp$, tmp$_0, erased$result_4, factory$lambda(creator));
    };
  }));
  var factory_5 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_fd04id$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var Factory_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Factory;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function factory$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2, it.a3, it.a4, it.a5);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, T_0, isT, $receiver, creator) {
      var tmp$ = $receiver.contextType;
      Multi5.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]);
      var erased$result_5;
      try {
        erased$result_5 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_5) {
        if (Kotlin.isType(ex_5, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_5;
      }
      return new Factory_init(tmp$, tmp$_0, erased$result_5, factory$lambda(creator));
    };
  }));
  var multiton_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.multiton_nhgk5k$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var Multiton_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Multiton;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function multiton$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, T_0, isT, $receiver, ref, sync, creator) {
      if (ref === void 0)
        ref = null;
      if (sync === void 0)
        sync = true;
      var tmp$ = $receiver.scope;
      var tmp$_0 = $receiver.contextType;
      Multi2.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
      var tmp$_1 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      return new Multiton_init(tmp$, tmp$_0, tmp$_1, erased$result_2, ref, sync, multiton$lambda(creator));
    };
  }));
  var multiton_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.multiton_5m7t2$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var Multiton_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Multiton;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function multiton$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2, it.a3);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, T_0, isT, $receiver, ref, sync, creator) {
      if (ref === void 0)
        ref = null;
      if (sync === void 0)
        sync = true;
      var tmp$ = $receiver.scope;
      var tmp$_0 = $receiver.contextType;
      Multi3.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
      var tmp$_1 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]);
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      return new Multiton_init(tmp$, tmp$_0, tmp$_1, erased$result_3, ref, sync, multiton$lambda(creator));
    };
  }));
  var multiton_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.multiton_sne01y$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var Multiton_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Multiton;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function multiton$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2, it.a3, it.a4);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, T_0, isT, $receiver, ref, sync, creator) {
      if (ref === void 0)
        ref = null;
      if (sync === void 0)
        sync = true;
      var tmp$ = $receiver.scope;
      var tmp$_0 = $receiver.contextType;
      Multi4.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
      var tmp$_1 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]);
      var erased$result_4;
      try {
        erased$result_4 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_4) {
        if (Kotlin.isType(ex_4, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_4;
      }
      return new Multiton_init(tmp$, tmp$_0, tmp$_1, erased$result_4, ref, sync, multiton$lambda(creator));
    };
  }));
  var multiton_3 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.multiton_5ghyui$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var Multiton_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Multiton;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function multiton$lambda(closure$creator) {
      return function ($receiver, it) {
        return closure$creator($receiver, it.a1, it.a2, it.a3, it.a4, it.a5);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, T_0, isT, $receiver, ref, sync, creator) {
      if (ref === void 0)
        ref = null;
      if (sync === void 0)
        sync = true;
      var tmp$ = $receiver.scope;
      var tmp$_0 = $receiver.contextType;
      Multi5.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
      var tmp$_1 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]);
      var erased$result_5;
      try {
        erased$result_5 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_5) {
        if (Kotlin.isType(ex_5, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_5;
      }
      return new Multiton_init(tmp$, tmp$_0, tmp$_1, erased$result_5, ref, sync, multiton$lambda(creator));
    };
  }));
  var M = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.M_o5fpdy$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, a1, a2) {
      Multi2.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
      return new Multi2(a1, a2, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]));
    };
  }));
  var M_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.M_uzi532$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, a1, a2, a3) {
      Multi3.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
      return new Multi3(a1, a2, a3, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]));
    };
  }));
  var M_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.M_2zz2ko$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, a1, a2, a3, a4) {
      Multi4.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
      return new Multi4(a1, a2, a3, a4, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]));
    };
  }));
  var M_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.M_6yyj4c$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, a1, a2, a3, a4, a5) {
      Multi5.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
      return new Multi5(a1, a2, a3, a4, a5, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]));
    };
  }));
  var erased = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.erased_e78r0y$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, $receiver) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
  var erased_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.erased_srtqgn$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, $receiver) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
  var erased_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.erased_r3eo2t$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, $receiver) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
  var erased_2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.erased_y6aagy$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, $receiver) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
  var factory2 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory2_gl4fnw$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var Factory = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Factory_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory2$lambda$lambda = wrapFunction(function () {
      var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2) {
        return function (a1, a2) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          Multi2.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi2));
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
          return tmp$(new Multi2(a1, a2, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1])));
        };
      };
    });
    function factory2$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2) {
      return function (it) {
        return factory2$lambda$lambda(it, typeClosure$A1, isA1, typeClosure$A2, isA2);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi2.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      return new KodeinPropertyMap_init(Factory($receiver, tmp$, erased$result_2, tag), factory2$lambda(A1_0, isA1, A2_0, isA2));
    };
  }));
  var factory3 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory3_u0yxzj$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var Factory = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Factory_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory3$lambda$lambda = wrapFunction(function () {
      var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3) {
        return function (a1, a2, a3) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          Multi3.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi3));
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
          return tmp$(new Multi3(a1, a2, a3, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2])));
        };
      };
    });
    function factory3$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3) {
      return function (it) {
        return factory3$lambda$lambda(it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi3.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]);
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      return new KodeinPropertyMap_init(Factory($receiver, tmp$, erased$result_3, tag), factory3$lambda(A1_0, isA1, A2_0, isA2, A3_0, isA3));
    };
  }));
  var factory4 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory4_i00dgv$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var Factory = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Factory_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory4$lambda$lambda = wrapFunction(function () {
      var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4) {
        return function (a1, a2, a3, a4) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          Multi4.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi4));
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
          return tmp$(new Multi4(a1, a2, a3, a4, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3])));
        };
      };
    });
    function factory4$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4) {
      return function (it) {
        return factory4$lambda$lambda(it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi4.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]);
      var erased$result_4;
      try {
        erased$result_4 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_4) {
        if (Kotlin.isType(ex_4, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_4;
      }
      return new KodeinPropertyMap_init(Factory($receiver, tmp$, erased$result_4, tag), factory4$lambda(A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4));
    };
  }));
  var factory5 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory5_4jhrhq$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var Factory = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Factory_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory5$lambda$lambda = wrapFunction(function () {
      var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5) {
        return function (a1, a2, a3, a4, a5) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          var A5_0 = typeClosure$A5;
          Multi5.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi5));
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
          return tmp$(new Multi5(a1, a2, a3, a4, a5, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4])));
        };
      };
    });
    function factory5$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5) {
      return function (it) {
        return factory5$lambda$lambda(it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi5.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]);
      var erased$result_5;
      try {
        erased$result_5 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_5) {
        if (Kotlin.isType(ex_5, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_5;
      }
      return new KodeinPropertyMap_init(Factory($receiver, tmp$, erased$result_5, tag), factory5$lambda(A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5));
    };
  }));
  var factory2OrNull = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory2OrNull_gl4fnw$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var FactoryOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.FactoryOrNull_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory2OrNull$lambda$lambda = wrapFunction(function () {
      var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2) {
        return function (a1, a2) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          Multi2.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi2));
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
          return tmp$(new Multi2(a1, a2, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1])));
        };
      };
    });
    function factory2OrNull$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2) {
      return function (it) {
        if (it == null) {
          return null;
        }
        var factory = it;
        return factory2OrNull$lambda$lambda(factory, typeClosure$A1, isA1, typeClosure$A2, isA2);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi2.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      return new KodeinPropertyMap_init(FactoryOrNull($receiver, tmp$, erased$result_2, tag), factory2OrNull$lambda(A1_0, isA1, A2_0, isA2));
    };
  }));
  var factory3OrNull = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory3OrNull_u0yxzj$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var FactoryOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.FactoryOrNull_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory3OrNull$lambda$lambda = wrapFunction(function () {
      var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3) {
        return function (a1, a2, a3) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          Multi3.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi3));
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
          return tmp$(new Multi3(a1, a2, a3, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2])));
        };
      };
    });
    function factory3OrNull$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3) {
      return function (it) {
        if (it == null) {
          return null;
        }
        var factory = it;
        return factory3OrNull$lambda$lambda(factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi3.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]);
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      return new KodeinPropertyMap_init(FactoryOrNull($receiver, tmp$, erased$result_3, tag), factory3OrNull$lambda(A1_0, isA1, A2_0, isA2, A3_0, isA3));
    };
  }));
  var factory4OrNull = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory4OrNull_i00dgv$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var FactoryOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.FactoryOrNull_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory4OrNull$lambda$lambda = wrapFunction(function () {
      var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4) {
        return function (a1, a2, a3, a4) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          Multi4.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi4));
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
          return tmp$(new Multi4(a1, a2, a3, a4, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3])));
        };
      };
    });
    function factory4OrNull$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4) {
      return function (it) {
        if (it == null) {
          return null;
        }
        var factory = it;
        return factory4OrNull$lambda$lambda(factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi4.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]);
      var erased$result_4;
      try {
        erased$result_4 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_4) {
        if (Kotlin.isType(ex_4, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_4;
      }
      return new KodeinPropertyMap_init(FactoryOrNull($receiver, tmp$, erased$result_4, tag), factory4OrNull$lambda(A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4));
    };
  }));
  var factory5OrNull = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory5OrNull_4jhrhq$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var FactoryOrNull = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.FactoryOrNull_pub27j$;
    var wrapFunction = Kotlin.wrapFunction;
    var KodeinPropertyMap_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.KodeinPropertyMap;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory5OrNull$lambda$lambda = wrapFunction(function () {
      var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5) {
        return function (a1, a2, a3, a4, a5) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          var A5_0 = typeClosure$A5;
          Multi5.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi5));
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
          return tmp$(new Multi5(a1, a2, a3, a4, a5, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4])));
        };
      };
    });
    function factory5OrNull$lambda(typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5) {
      return function (it) {
        if (it == null) {
          return null;
        }
        var factory = it;
        return factory5OrNull$lambda$lambda(factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5);
      };
    }
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi5.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]);
      var erased$result_5;
      try {
        erased$result_5 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_5) {
        if (Kotlin.isType(ex_5, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_5;
      }
      return new KodeinPropertyMap_init(FactoryOrNull($receiver, tmp$, erased$result_5, tag), factory5OrNull$lambda(A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5));
    };
  }));
  var factory2_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory2_xqbtbm$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory2$lambda$lambda = wrapFunction(function () {
      var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2) {
        return function (a1, a2) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          Multi2.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi2));
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
          return tmp$(new Multi2(a1, a2, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi2.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      return factory2$lambda$lambda($receiver.Factory_nijjsc$(tmp$, erased$result_2, tag), A1_0, isA1, A2_0, isA2);
    };
  }));
  var factory3_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory3_fzn0cr$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory3$lambda$lambda = wrapFunction(function () {
      var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3) {
        return function (a1, a2, a3) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          Multi3.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi3));
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
          return tmp$(new Multi3(a1, a2, a3, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi3.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]);
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      return factory3$lambda$lambda($receiver.Factory_nijjsc$(tmp$, erased$result_3, tag), A1_0, isA1, A2_0, isA2, A3_0, isA3);
    };
  }));
  var factory4_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory4_l3nph3$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory4$lambda$lambda = wrapFunction(function () {
      var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4) {
        return function (a1, a2, a3, a4) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          Multi4.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi4));
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
          return tmp$(new Multi4(a1, a2, a3, a4, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi4.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]);
      var erased$result_4;
      try {
        erased$result_4 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_4) {
        if (Kotlin.isType(ex_4, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_4;
      }
      return factory4$lambda$lambda($receiver.Factory_nijjsc$(tmp$, erased$result_4, tag), A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4);
    };
  }));
  var factory5_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory5_wgmcfs$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory5$lambda$lambda = wrapFunction(function () {
      var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$it, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5) {
        return function (a1, a2, a3, a4, a5) {
          var tmp$ = closure$it;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          var A5_0 = typeClosure$A5;
          Multi5.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi5));
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
          return tmp$(new Multi5(a1, a2, a3, a4, a5, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      Multi5.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
      var tmp$ = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]);
      var erased$result_5;
      try {
        erased$result_5 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_5) {
        if (Kotlin.isType(ex_5, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_5;
      }
      return factory5$lambda$lambda($receiver.Factory_nijjsc$(tmp$, erased$result_5, tag), A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5);
    };
  }));
  var factory2OrNull_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory2OrNull_xqbtbm$', wrapFunction(function () {
    var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory2OrNull$lambda = wrapFunction(function () {
      var Multi2 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi2;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2) {
        return function (a1, a2) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          Multi2.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi2));
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
          return tmp$(new Multi2(a1, a2, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$;
      Multi2.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi2));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1]);
      var erased$result_2;
      try {
        erased$result_2 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_2) {
        if (Kotlin.isType(ex_2, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_2;
      }
      tmp$ = $receiver.FactoryOrNull_nijjsc$(tmp$_0, erased$result_2, tag);
      if (tmp$ == null) {
        return null;
      }
      var factory = tmp$;
      return factory2OrNull$lambda(factory, A1_0, isA1, A2_0, isA2);
    };
  }));
  var factory3OrNull_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory3OrNull_fzn0cr$', wrapFunction(function () {
    var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory3OrNull$lambda = wrapFunction(function () {
      var Multi3 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi3;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3) {
        return function (a1, a2, a3) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          Multi3.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi3));
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
          return tmp$(new Multi3(a1, a2, a3, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$;
      Multi3.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi3));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2]);
      var erased$result_3;
      try {
        erased$result_3 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_3) {
        if (Kotlin.isType(ex_3, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_3;
      }
      tmp$ = $receiver.FactoryOrNull_nijjsc$(tmp$_0, erased$result_3, tag);
      if (tmp$ == null) {
        return null;
      }
      var factory = tmp$;
      return factory3OrNull$lambda(factory, A1_0, isA1, A2_0, isA2, A3_0, isA3);
    };
  }));
  var factory4OrNull_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory4OrNull_l3nph3$', wrapFunction(function () {
    var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory4OrNull$lambda = wrapFunction(function () {
      var Multi4 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi4;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4) {
        return function (a1, a2, a3, a4) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          Multi4.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi4));
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
          return tmp$(new Multi4(a1, a2, a3, a4, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$;
      Multi4.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi4));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3]);
      var erased$result_4;
      try {
        erased$result_4 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_4) {
        if (Kotlin.isType(ex_4, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_4;
      }
      tmp$ = $receiver.FactoryOrNull_nijjsc$(tmp$_0, erased$result_4, tag);
      if (tmp$ == null) {
        return null;
      }
      var factory = tmp$;
      return factory4OrNull$lambda(factory, A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4);
    };
  }));
  var factory5OrNull_0 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory5OrNull_wgmcfs$', wrapFunction(function () {
    var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
    var wrapFunction = Kotlin.wrapFunction;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var factory5OrNull$lambda = wrapFunction(function () {
      var Multi5 = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Multi5;
      var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
      var getKClass = Kotlin.getKClass;
      var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
      var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
      var Throwable = Error;
      return function (closure$factory, typeClosure$A1, isA1, typeClosure$A2, isA2, typeClosure$A3, isA3, typeClosure$A4, isA4, typeClosure$A5, isA5) {
        return function (a1, a2, a3, a4, a5) {
          var tmp$ = closure$factory;
          var A1_0 = typeClosure$A1;
          var A2_0 = typeClosure$A2;
          var A3_0 = typeClosure$A3;
          var A4_0 = typeClosure$A4;
          var A5_0 = typeClosure$A5;
          Multi5.Companion;
          var erased$result;
          try {
            erased$result = new JSTypeToken_init(getKClass(Multi5));
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
          return tmp$(new Multi5(a1, a2, a3, a4, a5, new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4])));
        };
      };
    });
    return function (A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5, T_0, isT, $receiver, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$;
      Multi5.Companion;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(Multi5));
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
      var tmp$_0 = new CompositeTypeToken_init(erased$result, [erased$result_0, erased$result_1, erased$result_2, erased$result_3, erased$result_4]);
      var erased$result_5;
      try {
        erased$result_5 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_5) {
        if (Kotlin.isType(ex_5, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_5;
      }
      tmp$ = $receiver.FactoryOrNull_nijjsc$(tmp$_0, erased$result_5, tag);
      if (tmp$ == null) {
        return null;
      }
      var factory = tmp$;
      return factory5OrNull$lambda(factory, A1_0, isA1, A2_0, isA2, A3_0, isA3, A4_0, isA4, A5_0, isA5);
    };
  }));
  var factory_6 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factory_bl9dsp$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.Factory_xuvl97$(erased$result, erased$result_0);
    };
  }));
  var factoryOrNull_1 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.factoryOrNull_bl9dsp$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.FactoryOrNull_xuvl97$(erased$result, erased$result_0);
    };
  }));
  var provider_8 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_d6eq0c$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return $receiver.Provider_996c1u$(erased$result);
    };
  }));
  var provider_9 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_bn4ajn$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function provider$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, arg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.Provider_ufnr7$(erased$result, erased$result_0, provider$lambda(arg));
    };
  }));
  var provider_10 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_cnefxc$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function provider$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, arg) {
      var tmp$ = arg.type;
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
      return $receiver.Provider_ufnr7$(tmp$, erased$result, provider$lambda(arg));
    };
  }));
  var provider_11 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.provider_govbw9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, fArg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.Provider_ufnr7$(erased$result, erased$result_0, fArg);
    };
  }));
  var providerOrNull_7 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_d6eq0c$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return $receiver.ProviderOrNull_996c1u$(erased$result);
    };
  }));
  var providerOrNull_8 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_bn4ajn$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function providerOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, arg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.ProviderOrNull_ufnr7$(erased$result, erased$result_0, providerOrNull$lambda(arg));
    };
  }));
  var providerOrNull_9 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_cnefxc$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function providerOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, arg) {
      var tmp$ = arg.type;
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
      return $receiver.ProviderOrNull_ufnr7$(tmp$, erased$result, providerOrNull$lambda(arg));
    };
  }));
  var providerOrNull_10 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.providerOrNull_govbw9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, fArg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.ProviderOrNull_ufnr7$(erased$result, erased$result_0, fArg);
    };
  }));
  var instance_7 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_d6eq0c$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return $receiver.Instance_996c1u$(erased$result);
    };
  }));
  var instance_8 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_bn4ajn$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instance$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, arg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.Instance_wxvcyy$(erased$result, erased$result_0, instance$lambda(arg));
    };
  }));
  var instance_9 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_cnefxc$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instance$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, arg) {
      var tmp$ = arg.type;
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
      return $receiver.Instance_wxvcyy$(tmp$, erased$result, instance$lambda(arg));
    };
  }));
  var instance_10 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instance_govbw9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, fArg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.Instance_wxvcyy$(erased$result, erased$result_0, fArg);
    };
  }));
  var instanceOrNull_6 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_d6eq0c$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return $receiver.InstanceOrNull_996c1u$(erased$result);
    };
  }));
  var instanceOrNull_7 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_bn4ajn$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instanceOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg;
      };
    }
    return function (A_0, isA, T_0, isT, $receiver, arg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.InstanceOrNull_ufnr7$(erased$result, erased$result_0, instanceOrNull$lambda(arg));
    };
  }));
  var instanceOrNull_8 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_cnefxc$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function instanceOrNull$lambda(closure$arg) {
      return function () {
        return closure$arg.value;
      };
    }
    return function (T_0, isT, $receiver, arg) {
      var tmp$ = arg.type;
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
      return $receiver.InstanceOrNull_ufnr7$(tmp$, erased$result, instanceOrNull$lambda(arg));
    };
  }));
  var instanceOrNull_9 = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.instanceOrNull_govbw9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (A_0, isA, T_0, isT, $receiver, fArg) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      return $receiver.InstanceOrNull_ufnr7$(erased$result, erased$result_0, fArg);
    };
  }));
  var constant = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.constant_35l6i7$', wrapFunction(function () {
    var Constant = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Constant_lgeszw$;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return Constant($receiver, erased$result);
    };
  }));
  var contextTranslator = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.contextTranslator_7h29gk$', wrapFunction(function () {
    var SimpleContextTranslator_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.SimpleContextTranslator;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (C_0, isC, S_0, isS, t) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
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
        erased$result_0 = new JSTypeToken_init(getKClass(S_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      return new SimpleContextTranslator_init(erased$result, erased$result_0, t);
    };
  }));
  var registerContextTranslator = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.registerContextTranslator_dac2nv$', wrapFunction(function () {
    var SimpleContextTranslator_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.SimpleContextTranslator;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (C_0, isC, S_0, isS, $receiver, t) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(C_0));
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
        erased$result_0 = new JSTypeToken_init(getKClass(S_0));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      $receiver.RegisterContextTranslator_5jq22i$(new SimpleContextTranslator_init(erased$result, erased$result_0, t));
    };
  }));
  var contextFinder = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.contextFinder_klfg04$', wrapFunction(function () {
    var SimpleAutoContextTranslator_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.SimpleAutoContextTranslator;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (S_0, isS, t) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(S_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      return new SimpleAutoContextTranslator_init(erased$result, t);
    };
  }));
  var registerContextFinder = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.registerContextFinder_gffo3f$', wrapFunction(function () {
    var SimpleAutoContextTranslator_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.SimpleAutoContextTranslator;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (S_0, isS, $receiver, t) {
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(S_0));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      $receiver.RegisterContextTranslator_5jq22i$(new SimpleAutoContextTranslator_init(erased$result, t));
    };
  }));
  var setBinding = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.setBinding_nu12c0$', wrapFunction(function () {
    var di = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di;
    var SetBinding_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.SetBinding;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var Set = Kotlin.kotlin.collections.Set;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    return function (T_0, isT, $receiver) {
      var tmp$ = di.AnyToken;
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
        erased$result_0 = new JSTypeToken_init(getKClass(Set));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      var erased$result_0_0;
      try {
        erased$result_0_0 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_0_0) {
        if (Kotlin.isType(ex_0_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0_0;
      }
      return new SetBinding_init(tmp$, erased$result, new CompositeTypeToken_init(erased$result_0, [erased$result_0_0]));
    };
  }));
  var argSetBinding = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.argSetBinding_rpgibv$', wrapFunction(function () {
    var di = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di;
    var ArgSetBinding_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.ArgSetBinding;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    var Set = Kotlin.kotlin.collections.Set;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    return function (A_0, isA, T_0, isT, $receiver) {
      var tmp$ = di.AnyToken;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(A_0));
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
      var erased$result_1;
      try {
        erased$result_1 = new JSTypeToken_init(getKClass(Set));
      }
       catch (ex_1) {
        if (Kotlin.isType(ex_1, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_1;
      }
      var erased$result_0_0;
      try {
        erased$result_0_0 = new JSTypeToken_init(getKClass(T_0));
      }
       catch (ex_0_0) {
        if (Kotlin.isType(ex_0_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0_0;
      }
      return new ArgSetBinding_init(tmp$, erased$result, erased$result_0, new CompositeTypeToken_init(erased$result_1, [erased$result_0_0]));
    };
  }));
  var inSet = defineInlineFunction('Kodein-DI-kodein-di-erased.org.kodein.di.erased.inSet_r9chv6$', wrapFunction(function () {
    var InSet = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.InSet_evytg1$;
    var Set = Kotlin.kotlin.collections.Set;
    var CompositeTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.CompositeTypeToken;
    var getKClass = Kotlin.getKClass;
    var JSTypeToken_init = _.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function (T_0, isT, $receiver) {
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
      return InSet($receiver, new CompositeTypeToken_init(erased$result, [erased$result_0]));
    };
  }));
  $$importsForInline$$['Kodein-DI-kodein-di-core'] = $module$Kodein_DI_kodein_di_core;
  $$importsForInline$$['Kodein-DI-kodein-di-erased'] = _;
  var package$org = _.org || (_.org = {});
  var package$kodein = package$org.kodein || (package$org.kodein = {});
  var package$di = package$kodein.di || (package$kodein.di = {});
  var package$erased = package$di.erased || (package$di.erased = {});
  package$erased.on_3e57hy$ = on_2;
  package$erased.bind_1pf7m9$ = bind_0;
  Kotlin.defineModule('Kodein-DI-kodein-di-erased', _);
  return _;
}));

//# sourceMappingURL=Kodein-DI-kodein-di-erased.js.map
