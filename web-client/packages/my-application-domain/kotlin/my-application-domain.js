(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'klock-root-klock', 'rxjs'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('klock-root-klock'), require('rxjs'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'my-application-domain'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'my-application-domain'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'my-application-domain'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'my-application-domain'.");
    }
    if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'my-application-domain'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'my-application-domain'.");
    }
    if (typeof rxjs === 'undefined') {
      throw new Error("Error loading module 'my-application-domain'. Its dependency 'rxjs' was not found. Please, check whether 'rxjs' is loaded prior to 'my-application-domain'.");
    }
    root['my-application-domain'] = factory(typeof this['my-application-domain'] === 'undefined' ? {} : this['my-application-domain'], kotlin, this['kotlinx-coroutines-core'], this['klock-root-klock'], rxjs);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$klock_root_klock, $module$rxjs) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Throwable = Error;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var asFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.asFlow_9tsm8a$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var flatMapConcat = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.flatMapConcat_oq6m0l$;
  var toList = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.toList_7a0s5y$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var L42 = Kotlin.Long.fromInt(42);
  var DateTimeTz = $module$klock_root_klock.com.soywiz.klock.DateTimeTz;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var promise = $module$kotlinx_coroutines_core.kotlinx.coroutines.promise_pda6u4$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var catch_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.catch_xmh1mw$;
  var onEach = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.onEach_706ovd$;
  var onCompletion = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.onCompletion_sp7fh9$;
  var launchIn = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.launchIn_wegvf8$;
  var Observable = $module$rxjs.Observable;
  AuthProviders.prototype = Object.create(Enum.prototype);
  AuthProviders.prototype.constructor = AuthProviders;
  AuthException.prototype = Object.create(Throwable.prototype);
  AuthException.prototype.constructor = AuthException;
  AuthException$AuthGenericException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthGenericException.prototype.constructor = AuthException$AuthGenericException;
  AuthException$AuthWeakPasswordException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthWeakPasswordException.prototype.constructor = AuthException$AuthWeakPasswordException;
  AuthException$AuthMalformedEmailException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthMalformedEmailException.prototype.constructor = AuthException$AuthMalformedEmailException;
  AuthException$AuthInvalidCredentialsException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthInvalidCredentialsException.prototype.constructor = AuthException$AuthInvalidCredentialsException;
  AuthException$AuthNotAuthenticatedException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthNotAuthenticatedException.prototype.constructor = AuthException$AuthNotAuthenticatedException;
  AuthException$AuthInvalidTokenException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthInvalidTokenException.prototype.constructor = AuthException$AuthInvalidTokenException;
  AuthException$AuthUserCollisionException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthUserCollisionException.prototype.constructor = AuthException$AuthUserCollisionException;
  AuthException$AuthInvalidUserException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthInvalidUserException.prototype.constructor = AuthException$AuthInvalidUserException;
  AuthException$AuthRecentLoginRequiredException.prototype = Object.create(AuthException.prototype);
  AuthException$AuthRecentLoginRequiredException.prototype.constructor = AuthException$AuthRecentLoginRequiredException;
  function AuthenticationManager() {
  }
  AuthenticationManager.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthenticationManager',
    interfaces: []
  };
  function AuthProviders(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AuthProviders_initFields() {
    AuthProviders_initFields = function () {
    };
    AuthProviders$GOOGLE_instance = new AuthProviders('GOOGLE', 0);
    AuthProviders$FACEBOOK_instance = new AuthProviders('FACEBOOK', 1);
    AuthProviders$EMAIL_PASSWORD_instance = new AuthProviders('EMAIL_PASSWORD', 2);
  }
  var AuthProviders$GOOGLE_instance;
  function AuthProviders$GOOGLE_getInstance() {
    AuthProviders_initFields();
    return AuthProviders$GOOGLE_instance;
  }
  var AuthProviders$FACEBOOK_instance;
  function AuthProviders$FACEBOOK_getInstance() {
    AuthProviders_initFields();
    return AuthProviders$FACEBOOK_instance;
  }
  var AuthProviders$EMAIL_PASSWORD_instance;
  function AuthProviders$EMAIL_PASSWORD_getInstance() {
    AuthProviders_initFields();
    return AuthProviders$EMAIL_PASSWORD_instance;
  }
  AuthProviders.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthProviders',
    interfaces: [Enum]
  };
  function AuthProviders$values() {
    return [AuthProviders$GOOGLE_getInstance(), AuthProviders$FACEBOOK_getInstance(), AuthProviders$EMAIL_PASSWORD_getInstance()];
  }
  AuthProviders.values = AuthProviders$values;
  function AuthProviders$valueOf(name) {
    switch (name) {
      case 'GOOGLE':
        return AuthProviders$GOOGLE_getInstance();
      case 'FACEBOOK':
        return AuthProviders$FACEBOOK_getInstance();
      case 'EMAIL_PASSWORD':
        return AuthProviders$EMAIL_PASSWORD_getInstance();
      default:throwISE('No enum constant com.example.myapplication.entities.AuthProviders.' + name);
    }
  }
  AuthProviders.valueOf_61zpoe$ = AuthProviders$valueOf;
  function AuthUserEntity(id, email) {
    this.id = id;
    this.email = email;
  }
  AuthUserEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthUserEntity',
    interfaces: []
  };
  AuthUserEntity.prototype.component1 = function () {
    return this.id;
  };
  AuthUserEntity.prototype.component2 = function () {
    return this.email;
  };
  AuthUserEntity.prototype.copy_puj7f4$ = function (id, email) {
    return new AuthUserEntity(id === void 0 ? this.id : id, email === void 0 ? this.email : email);
  };
  AuthUserEntity.prototype.toString = function () {
    return 'AuthUserEntity(id=' + Kotlin.toString(this.id) + (', email=' + Kotlin.toString(this.email)) + ')';
  };
  AuthUserEntity.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  AuthUserEntity.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.email, other.email)))));
  };
  function GameEntity(name, availableModes, image, icon) {
    this.name = name;
    this.availableModes = availableModes;
    this.image = image;
    this.icon = icon;
  }
  GameEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameEntity',
    interfaces: []
  };
  function MatchEntity(id, matchDateTime, playersCount, isRegistrationPossible, tournament) {
    this.id = id;
    this.matchDateTime = matchDateTime;
    this.playersCount = playersCount;
    this.isRegistrationPossible = isRegistrationPossible;
    this.tournament = tournament;
  }
  MatchEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchEntity',
    interfaces: []
  };
  function ModeEntity(modeName) {
    this.modeName = modeName;
  }
  ModeEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModeEntity',
    interfaces: []
  };
  function RegistrationEntity(user, match, outcome) {
    if (outcome === void 0)
      outcome = null;
    this.user = user;
    this.match = match;
    this.outcome = outcome;
  }
  RegistrationEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegistrationEntity',
    interfaces: []
  };
  function TournamentEntity(id, playersNumber, title, tournamentDescription, tournamentMode, admin, game) {
    this.id = id;
    this.playersNumber = playersNumber;
    this.title = title;
    this.tournamentDescription = tournamentDescription;
    this.tournamentMode = tournamentMode;
    this.admin = admin;
    this.game = game;
  }
  TournamentEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TournamentEntity',
    interfaces: []
  };
  function UserEntity(id, email, nickname, image, verified, subscriber) {
    if (verified === void 0)
      verified = false;
    this.id = id;
    this.email = email;
    this.nickname = nickname;
    this.image = image;
    this.verified = verified;
    this.subscriber = subscriber;
  }
  UserEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserEntity',
    interfaces: []
  };
  UserEntity.prototype.component1 = function () {
    return this.id;
  };
  UserEntity.prototype.component2 = function () {
    return this.email;
  };
  UserEntity.prototype.component3 = function () {
    return this.nickname;
  };
  UserEntity.prototype.component4 = function () {
    return this.image;
  };
  UserEntity.prototype.component5 = function () {
    return this.verified;
  };
  UserEntity.prototype.component6 = function () {
    return this.subscriber;
  };
  UserEntity.prototype.copy_ig9fkk$ = function (id, email, nickname, image, verified, subscriber) {
    return new UserEntity(id === void 0 ? this.id : id, email === void 0 ? this.email : email, nickname === void 0 ? this.nickname : nickname, image === void 0 ? this.image : image, verified === void 0 ? this.verified : verified, subscriber === void 0 ? this.subscriber : subscriber);
  };
  UserEntity.prototype.toString = function () {
    return 'UserEntity(id=' + Kotlin.toString(this.id) + (', email=' + Kotlin.toString(this.email)) + (', nickname=' + Kotlin.toString(this.nickname)) + (', image=' + Kotlin.toString(this.image)) + (', verified=' + Kotlin.toString(this.verified)) + (', subscriber=' + Kotlin.toString(this.subscriber)) + ')';
  };
  UserEntity.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.nickname) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.verified) | 0;
    result = result * 31 + Kotlin.hashCode(this.subscriber) | 0;
    return result;
  };
  UserEntity.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.nickname, other.nickname) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.verified, other.verified) && Kotlin.equals(this.subscriber, other.subscriber)))));
  };
  function AuthException(message) {
    if (message === void 0)
      message = null;
    Throwable.call(this);
    this.message_fcpcn$_0 = message;
    this.cause_pacmiv$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'AuthException';
  }
  function AuthException$AuthGenericException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthGenericException';
  }
  AuthException$AuthGenericException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthGenericException',
    interfaces: [AuthException]
  };
  function AuthException$AuthWeakPasswordException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthWeakPasswordException';
  }
  AuthException$AuthWeakPasswordException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthWeakPasswordException',
    interfaces: [AuthException]
  };
  function AuthException$AuthMalformedEmailException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthMalformedEmailException';
  }
  AuthException$AuthMalformedEmailException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthMalformedEmailException',
    interfaces: [AuthException]
  };
  function AuthException$AuthInvalidCredentialsException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthInvalidCredentialsException';
  }
  AuthException$AuthInvalidCredentialsException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthInvalidCredentialsException',
    interfaces: [AuthException]
  };
  function AuthException$AuthNotAuthenticatedException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthNotAuthenticatedException';
  }
  AuthException$AuthNotAuthenticatedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthNotAuthenticatedException',
    interfaces: [AuthException]
  };
  function AuthException$AuthInvalidTokenException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthInvalidTokenException';
  }
  AuthException$AuthInvalidTokenException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthInvalidTokenException',
    interfaces: [AuthException]
  };
  function AuthException$AuthUserCollisionException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthUserCollisionException';
  }
  AuthException$AuthUserCollisionException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthUserCollisionException',
    interfaces: [AuthException]
  };
  function AuthException$AuthInvalidUserException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthInvalidUserException';
  }
  AuthException$AuthInvalidUserException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthInvalidUserException',
    interfaces: [AuthException]
  };
  function AuthException$AuthRecentLoginRequiredException(message) {
    if (message === void 0)
      message = null;
    AuthException.call(this, message);
    this.name = 'AuthException$AuthRecentLoginRequiredException';
  }
  AuthException$AuthRecentLoginRequiredException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthRecentLoginRequiredException',
    interfaces: [AuthException]
  };
  Object.defineProperty(AuthException.prototype, 'message', {
    get: function () {
      return this.message_fcpcn$_0;
    }
  });
  Object.defineProperty(AuthException.prototype, 'cause', {
    get: function () {
      return this.cause_pacmiv$_0;
    }
  });
  AuthException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthException',
    interfaces: [Throwable]
  };
  function ArenaTournamentRepository() {
  }
  ArenaTournamentRepository.prototype.createRegistration_a17aol$ = function (user, match, outcome, continuation, callback$default) {
    if (outcome === void 0)
      outcome = null;
    return callback$default ? callback$default(user, match, outcome, continuation) : this.createRegistration_a17aol$$default(user, match, outcome, continuation);
  };
  ArenaTournamentRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ArenaTournamentRepository',
    interfaces: []
  };
  function CreateGameUseCase(repository) {
    this.repository_0 = repository;
  }
  CreateGameUseCase.prototype.buildAction_11rb$ = function (params, continuation) {
    return this.repository_0.createGame_jvrvdj$(params.name, params.availableModes, params.image, params.icon, continuation);
  };
  CreateGameUseCase.prototype.buildAction_jvrvdj$ = function (name, availableModes, image, icon, continuation) {
    return this.buildAction_11rb$(new CreateGameUseCase$Params(name, availableModes, image, icon), continuation);
  };
  function CreateGameUseCase$Params(name, availableModes, image, icon) {
    this.name = name;
    this.availableModes = availableModes;
    this.image = image;
    this.icon = icon;
  }
  CreateGameUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  CreateGameUseCase$Params.prototype.component1 = function () {
    return this.name;
  };
  CreateGameUseCase$Params.prototype.component2 = function () {
    return this.availableModes;
  };
  CreateGameUseCase$Params.prototype.component3 = function () {
    return this.image;
  };
  CreateGameUseCase$Params.prototype.component4 = function () {
    return this.icon;
  };
  CreateGameUseCase$Params.prototype.copy_jvrvdj$ = function (name, availableModes, image, icon) {
    return new CreateGameUseCase$Params(name === void 0 ? this.name : name, availableModes === void 0 ? this.availableModes : availableModes, image === void 0 ? this.image : image, icon === void 0 ? this.icon : icon);
  };
  CreateGameUseCase$Params.prototype.toString = function () {
    return 'Params(name=' + Kotlin.toString(this.name) + (', availableModes=' + Kotlin.toString(this.availableModes)) + (', image=' + Kotlin.toString(this.image)) + (', icon=' + Kotlin.toString(this.icon)) + ')';
  };
  CreateGameUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.availableModes) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    return result;
  };
  CreateGameUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.availableModes, other.availableModes) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.icon, other.icon)))));
  };
  CreateGameUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateGameUseCase',
    interfaces: [UseCaseWithParamsSuspending]
  };
  function GetGamesByModeUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetGamesByModeUseCase$buildAction$lambda(this$GetGamesByModeUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetGamesByModeUseCase = this$GetGamesByModeUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetGamesByModeUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetGamesByModeUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetGamesByModeUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetGamesByModeUseCase$buildAction$lambda;
  Coroutine$GetGamesByModeUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetGamesByModeUseCase.repository_0.getGamesByMode_bm4lxs$(this.local$closure$params.mode, this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetGamesByModeUseCase$buildAction$lambda(this$GetGamesByModeUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetGamesByModeUseCase$buildAction$lambda(this$GetGamesByModeUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetGamesByModeUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetGamesByModeUseCase$buildAction$lambda(this, params));
  };
  GetGamesByModeUseCase.prototype.buildAction_bm4lxs$ = function (mode, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetGamesByModeUseCase$Params(mode, maxPage));
  };
  function GetGamesByModeUseCase$Params(mode, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.mode = mode;
    this.maxPage = maxPage;
  }
  GetGamesByModeUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetGamesByModeUseCase$Params.prototype.component1 = function () {
    return this.mode;
  };
  GetGamesByModeUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetGamesByModeUseCase$Params.prototype.copy_bm4lxs$ = function (mode, maxPage) {
    return new GetGamesByModeUseCase$Params(mode === void 0 ? this.mode : mode, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetGamesByModeUseCase$Params.prototype.toString = function () {
    return 'Params(mode=' + Kotlin.toString(this.mode) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetGamesByModeUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetGamesByModeUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mode, other.mode) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetGamesByModeUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetGamesByModeUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetGamesContainingNameUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetGamesContainingNameUseCase$buildAction$lambda(this$GetGamesContainingNameUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetGamesContainingNameUseCase = this$GetGamesContainingNameUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetGamesContainingNameUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetGamesContainingNameUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetGamesContainingNameUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetGamesContainingNameUseCase$buildAction$lambda;
  Coroutine$GetGamesContainingNameUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetGamesContainingNameUseCase.repository_0.getGamesContainingName_bm4lxs$(this.local$closure$params.gameName, this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetGamesContainingNameUseCase$buildAction$lambda(this$GetGamesContainingNameUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetGamesContainingNameUseCase$buildAction$lambda(this$GetGamesContainingNameUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetGamesContainingNameUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetGamesContainingNameUseCase$buildAction$lambda(this, params));
  };
  GetGamesContainingNameUseCase.prototype.buildAction_bm4lxs$ = function (gameName, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetGamesContainingNameUseCase$Params(gameName, maxPage));
  };
  function GetGamesContainingNameUseCase$Params(gameName, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.gameName = gameName;
    this.maxPage = maxPage;
  }
  GetGamesContainingNameUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetGamesContainingNameUseCase$Params.prototype.component1 = function () {
    return this.gameName;
  };
  GetGamesContainingNameUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetGamesContainingNameUseCase$Params.prototype.copy_bm4lxs$ = function (gameName, maxPage) {
    return new GetGamesContainingNameUseCase$Params(gameName === void 0 ? this.gameName : gameName, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetGamesContainingNameUseCase$Params.prototype.toString = function () {
    return 'Params(gameName=' + Kotlin.toString(this.gameName) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetGamesContainingNameUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameName) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetGamesContainingNameUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameName, other.gameName) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetGamesContainingNameUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetGamesContainingNameUseCase',
    interfaces: [UseCaseWithParams]
  };
  function CreateMatchUseCase(repository) {
    this.repository_0 = repository;
  }
  CreateMatchUseCase.prototype.buildAction_11rb$ = function (params, continuation) {
    return this.repository_0.createMatch_5crsrq$(params.matchDateTime, params.playersCount, params.isRegistrationPossible, params.tournament, continuation);
  };
  CreateMatchUseCase.prototype.buildAction_5crsrq$ = function (matchDateTime, playersCount, isRegistrationPossible, tournament, continuation) {
    return this.buildAction_11rb$(new CreateMatchUseCase$Params(matchDateTime, playersCount, isRegistrationPossible, tournament), continuation);
  };
  function CreateMatchUseCase$Params(matchDateTime, playersCount, isRegistrationPossible, tournament) {
    this.matchDateTime = matchDateTime;
    this.playersCount = playersCount;
    this.isRegistrationPossible = isRegistrationPossible;
    this.tournament = tournament;
  }
  CreateMatchUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  CreateMatchUseCase$Params.prototype.component1 = function () {
    return this.matchDateTime;
  };
  CreateMatchUseCase$Params.prototype.component2 = function () {
    return this.playersCount;
  };
  CreateMatchUseCase$Params.prototype.component3 = function () {
    return this.isRegistrationPossible;
  };
  CreateMatchUseCase$Params.prototype.component4 = function () {
    return this.tournament;
  };
  CreateMatchUseCase$Params.prototype.copy_5crsrq$ = function (matchDateTime, playersCount, isRegistrationPossible, tournament) {
    return new CreateMatchUseCase$Params(matchDateTime === void 0 ? this.matchDateTime : matchDateTime, playersCount === void 0 ? this.playersCount : playersCount, isRegistrationPossible === void 0 ? this.isRegistrationPossible : isRegistrationPossible, tournament === void 0 ? this.tournament : tournament);
  };
  CreateMatchUseCase$Params.prototype.toString = function () {
    return 'Params(matchDateTime=' + Kotlin.toString(this.matchDateTime) + (', playersCount=' + Kotlin.toString(this.playersCount)) + (', isRegistrationPossible=' + Kotlin.toString(this.isRegistrationPossible)) + (', tournament=' + Kotlin.toString(this.tournament)) + ')';
  };
  CreateMatchUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matchDateTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.playersCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRegistrationPossible) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournament) | 0;
    return result;
  };
  CreateMatchUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.matchDateTime, other.matchDateTime) && Kotlin.equals(this.playersCount, other.playersCount) && Kotlin.equals(this.isRegistrationPossible, other.isRegistrationPossible) && Kotlin.equals(this.tournament, other.tournament)))));
  };
  CreateMatchUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateMatchUseCase',
    interfaces: [UseCaseWithParamsSuspending]
  };
  function unsafeFlow$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$.prototype.constructor = Coroutine$collect_42ocv1$;
  Coroutine$collect_42ocv1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  unsafeFlow$ObjectLiteral.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda;
  Coroutine$unsafeTransform$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function unsafeTransform$lambda$lambda(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$unsafeTransform = this$unsafeTransform_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
    Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda(this.local$closure$transform, this.local$$receiver)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        }
         catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          }
           else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$transform_0, this$unsafeTransform_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda.prototype.constructor = Coroutine$map$lambda;
  Coroutine$map$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.emit_11rb$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function map$lambda(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GetAllAvailableMatchesUseCase(getAvailableMatchesPerPageUseCase, getAllRegistrationsByMatchUseCase) {
    this.getAvailableMatchesPerPageUseCase_0 = getAvailableMatchesPerPageUseCase;
    this.getAllRegistrationsByMatchUseCase_0 = getAllRegistrationsByMatchUseCase;
  }
  function Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda$lambda(this$GetAllAvailableMatchesUseCase_0, closure$it_0, match_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetAllAvailableMatchesUseCase = this$GetAllAvailableMatchesUseCase_0;
    this.local$closure$it = closure$it_0;
    this.local$match = match_0;
  }
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda$lambda.prototype.constructor = Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda$lambda;
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = toList(this.local$this$GetAllAvailableMatchesUseCase.getAllRegistrationsByMatchUseCase_0.buildAction_wj5ll4$(this.local$match, this.local$closure$it), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return to(this.local$match, this.result_0.size);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetAllAvailableMatchesUseCase$buildAction$lambda$lambda(this$GetAllAvailableMatchesUseCase_0, closure$it_0) {
    return function (match_0, continuation_0, suspended) {
      var instance = new Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda$lambda(this$GetAllAvailableMatchesUseCase_0, closure$it_0, match_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda(this$GetAllAvailableMatchesUseCase_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetAllAvailableMatchesUseCase = this$GetAllAvailableMatchesUseCase_0;
    this.local$it = it_0;
  }
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda;
  Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$this$GetAllAvailableMatchesUseCase.getAvailableMatchesPerPageUseCase_0.buildAction_za3lpa$(this.local$it);
            return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(GetAllAvailableMatchesUseCase$buildAction$lambda$lambda(this.local$this$GetAllAvailableMatchesUseCase, this.local$it)), $receiver));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetAllAvailableMatchesUseCase$buildAction$lambda(this$GetAllAvailableMatchesUseCase_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetAllAvailableMatchesUseCase$buildAction$lambda(this$GetAllAvailableMatchesUseCase_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetAllAvailableMatchesUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.pages)), GetAllAvailableMatchesUseCase$buildAction$lambda(this));
  };
  GetAllAvailableMatchesUseCase.prototype.buildAction_za3lpa$ = function (pages) {
    if (pages === void 0)
      pages = 1;
    return this.buildAction_11rb$(new GetAllAvailableMatchesUseCase$Params(pages));
  };
  function GetAllAvailableMatchesUseCase$Params(pages) {
    if (pages === void 0)
      pages = 1;
    this.pages = pages;
  }
  GetAllAvailableMatchesUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetAllAvailableMatchesUseCase$Params.prototype.component1 = function () {
    return this.pages;
  };
  GetAllAvailableMatchesUseCase$Params.prototype.copy_za3lpa$ = function (pages) {
    return new GetAllAvailableMatchesUseCase$Params(pages === void 0 ? this.pages : pages);
  };
  GetAllAvailableMatchesUseCase$Params.prototype.toString = function () {
    return 'Params(pages=' + Kotlin.toString(this.pages) + ')';
  };
  GetAllAvailableMatchesUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pages) | 0;
    return result;
  };
  GetAllAvailableMatchesUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pages, other.pages))));
  };
  GetAllAvailableMatchesUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetAllAvailableMatchesUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetAllMatchesByUserUseCase(repository, getCurrentUserInfoUseCase) {
    this.repository_0 = repository;
    this.getCurrentUserInfoUseCase_0 = getCurrentUserInfoUseCase;
  }
  function Coroutine$GetAllMatchesByUserUseCase$buildAction$lambda(this$GetAllMatchesByUserUseCase_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetAllMatchesByUserUseCase = this$GetAllMatchesByUserUseCase_0;
    this.local$tmp$ = void 0;
    this.local$it = it_0;
  }
  Coroutine$GetAllMatchesByUserUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetAllMatchesByUserUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetAllMatchesByUserUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetAllMatchesByUserUseCase$buildAction$lambda;
  Coroutine$GetAllMatchesByUserUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$GetAllMatchesByUserUseCase.repository_0;
            this.state_0 = 2;
            this.result_0 = this.local$this$GetAllMatchesByUserUseCase.getCurrentUserInfoUseCase_0.buildAction(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$tmp$.getMatchesByUser_bm4lxs$(this.result_0.id, this.local$it);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetAllMatchesByUserUseCase$buildAction$lambda(this$GetAllMatchesByUserUseCase_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetAllMatchesByUserUseCase$buildAction$lambda(this$GetAllMatchesByUserUseCase_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetAllMatchesByUserUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetAllMatchesByUserUseCase$buildAction$lambda(this));
  };
  GetAllMatchesByUserUseCase.prototype.buildAction_za3lpa$ = function (maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetAllMatchesByUserUseCase$Params(maxPage));
  };
  function GetAllMatchesByUserUseCase$Params(maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.maxPage = maxPage;
  }
  GetAllMatchesByUserUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetAllMatchesByUserUseCase$Params.prototype.component1 = function () {
    return this.maxPage;
  };
  GetAllMatchesByUserUseCase$Params.prototype.copy_za3lpa$ = function (maxPage) {
    return new GetAllMatchesByUserUseCase$Params(maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetAllMatchesByUserUseCase$Params.prototype.toString = function () {
    return 'Params(maxPage=' + Kotlin.toString(this.maxPage) + ')';
  };
  GetAllMatchesByUserUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetAllMatchesByUserUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.maxPage, other.maxPage))));
  };
  GetAllMatchesByUserUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetAllMatchesByUserUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetAvailableMatchesPerPageUseCase(repository) {
    this.repository_0 = repository;
  }
  GetAvailableMatchesPerPageUseCase.prototype.buildAction_11rb$ = function (params) {
    return this.repository_0.getMatchesAvailable_za3lpa$(params.page);
  };
  GetAvailableMatchesPerPageUseCase.prototype.buildAction_za3lpa$ = function (page) {
    return this.buildAction_11rb$(new GetAvailableMatchesPerPageUseCase$Params(page));
  };
  function GetAvailableMatchesPerPageUseCase$Params(page) {
    this.page = page;
  }
  GetAvailableMatchesPerPageUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetAvailableMatchesPerPageUseCase$Params.prototype.component1 = function () {
    return this.page;
  };
  GetAvailableMatchesPerPageUseCase$Params.prototype.copy_za3lpa$ = function (page) {
    return new GetAvailableMatchesPerPageUseCase$Params(page === void 0 ? this.page : page);
  };
  GetAvailableMatchesPerPageUseCase$Params.prototype.toString = function () {
    return 'Params(page=' + Kotlin.toString(this.page) + ')';
  };
  GetAvailableMatchesPerPageUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  GetAvailableMatchesPerPageUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.page, other.page))));
  };
  GetAvailableMatchesPerPageUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetAvailableMatchesPerPageUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetMatchesByTournamentUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetMatchesByTournamentUseCase$buildAction$lambda(this$GetMatchesByTournamentUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetMatchesByTournamentUseCase = this$GetMatchesByTournamentUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetMatchesByTournamentUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetMatchesByTournamentUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetMatchesByTournamentUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetMatchesByTournamentUseCase$buildAction$lambda;
  Coroutine$GetMatchesByTournamentUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetMatchesByTournamentUseCase.repository_0.getMatchesByTournament_yhmem3$(this.local$closure$params.tournament.id, this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetMatchesByTournamentUseCase$buildAction$lambda(this$GetMatchesByTournamentUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetMatchesByTournamentUseCase$buildAction$lambda(this$GetMatchesByTournamentUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetMatchesByTournamentUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetMatchesByTournamentUseCase$buildAction$lambda(this, params));
  };
  GetMatchesByTournamentUseCase.prototype.buildAction_cy1osw$ = function (tournament, page) {
    if (page === void 0)
      page = 1;
    return this.buildAction_11rb$(new GetMatchesByTournamentUseCase$Params(tournament, page));
  };
  function GetMatchesByTournamentUseCase$Params(tournament, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.tournament = tournament;
    this.maxPage = maxPage;
  }
  GetMatchesByTournamentUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetMatchesByTournamentUseCase$Params.prototype.component1 = function () {
    return this.tournament;
  };
  GetMatchesByTournamentUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetMatchesByTournamentUseCase$Params.prototype.copy_cy1osw$ = function (tournament, maxPage) {
    return new GetMatchesByTournamentUseCase$Params(tournament === void 0 ? this.tournament : tournament, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetMatchesByTournamentUseCase$Params.prototype.toString = function () {
    return 'Params(tournament=' + Kotlin.toString(this.tournament) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetMatchesByTournamentUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tournament) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetMatchesByTournamentUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tournament, other.tournament) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetMatchesByTournamentUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetMatchesByTournamentUseCase',
    interfaces: [UseCaseWithParams]
  };
  function CreateGameModeUseCase(repository) {
    this.repository_0 = repository;
  }
  CreateGameModeUseCase.prototype.buildAction_11rb$ = function (params, continuation) {
    return this.repository_0.createGameMode_61zpoe$(params.modeName, continuation);
  };
  CreateGameModeUseCase.prototype.buildAction_61zpoe$ = function (modeName, continuation) {
    return this.buildAction_11rb$(new CreateGameModeUseCase$Params(modeName), continuation);
  };
  function CreateGameModeUseCase$Params(modeName) {
    this.modeName = modeName;
  }
  CreateGameModeUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  CreateGameModeUseCase$Params.prototype.component1 = function () {
    return this.modeName;
  };
  CreateGameModeUseCase$Params.prototype.copy_61zpoe$ = function (modeName) {
    return new CreateGameModeUseCase$Params(modeName === void 0 ? this.modeName : modeName);
  };
  CreateGameModeUseCase$Params.prototype.toString = function () {
    return 'Params(modeName=' + Kotlin.toString(this.modeName) + ')';
  };
  CreateGameModeUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.modeName) | 0;
    return result;
  };
  CreateGameModeUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.modeName, other.modeName))));
  };
  CreateGameModeUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateGameModeUseCase',
    interfaces: [UseCaseWithParamsSuspending]
  };
  function CreateRegistrationUseCase(repository) {
    this.repository_0 = repository;
  }
  CreateRegistrationUseCase.prototype.buildAction_11rb$ = function (params, continuation) {
    return this.repository_0.createRegistration_a17aol$(params.user, params.match, void 0, continuation);
  };
  CreateRegistrationUseCase.prototype.buildAction_eaa3um$ = function (user, match, continuation) {
    return this.buildAction_11rb$(new CreateRegistrationUseCase$Params(user, match), continuation);
  };
  function CreateRegistrationUseCase$Params(user, match) {
    this.user = user;
    this.match = match;
  }
  CreateRegistrationUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  CreateRegistrationUseCase$Params.prototype.component1 = function () {
    return this.user;
  };
  CreateRegistrationUseCase$Params.prototype.component2 = function () {
    return this.match;
  };
  CreateRegistrationUseCase$Params.prototype.copy_eaa3um$ = function (user, match) {
    return new CreateRegistrationUseCase$Params(user === void 0 ? this.user : user, match === void 0 ? this.match : match);
  };
  CreateRegistrationUseCase$Params.prototype.toString = function () {
    return 'Params(user=' + Kotlin.toString(this.user) + (', match=' + Kotlin.toString(this.match)) + ')';
  };
  CreateRegistrationUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.match) | 0;
    return result;
  };
  CreateRegistrationUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.match, other.match)))));
  };
  CreateRegistrationUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateRegistrationUseCase',
    interfaces: [UseCaseWithParamsSuspending]
  };
  function GetAllRegistrationsByMatchUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetAllRegistrationsByMatchUseCase$buildAction$lambda(this$GetAllRegistrationsByMatchUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetAllRegistrationsByMatchUseCase = this$GetAllRegistrationsByMatchUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetAllRegistrationsByMatchUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetAllRegistrationsByMatchUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetAllRegistrationsByMatchUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetAllRegistrationsByMatchUseCase$buildAction$lambda;
  Coroutine$GetAllRegistrationsByMatchUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetAllRegistrationsByMatchUseCase.repository_0.getRegistrationsByMatch_yhmem3$(this.local$closure$params.match.id, this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetAllRegistrationsByMatchUseCase$buildAction$lambda(this$GetAllRegistrationsByMatchUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetAllRegistrationsByMatchUseCase$buildAction$lambda(this$GetAllRegistrationsByMatchUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetAllRegistrationsByMatchUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetAllRegistrationsByMatchUseCase$buildAction$lambda(this, params));
  };
  GetAllRegistrationsByMatchUseCase.prototype.buildAction_wj5ll4$ = function (match, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetAllRegistrationsByMatchUseCase$Params(match, maxPage));
  };
  function GetAllRegistrationsByMatchUseCase$Params(match, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.match = match;
    this.maxPage = maxPage;
  }
  GetAllRegistrationsByMatchUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetAllRegistrationsByMatchUseCase$Params.prototype.component1 = function () {
    return this.match;
  };
  GetAllRegistrationsByMatchUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetAllRegistrationsByMatchUseCase$Params.prototype.copy_wj5ll4$ = function (match, maxPage) {
    return new GetAllRegistrationsByMatchUseCase$Params(match === void 0 ? this.match : match, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetAllRegistrationsByMatchUseCase$Params.prototype.toString = function () {
    return 'Params(match=' + Kotlin.toString(this.match) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetAllRegistrationsByMatchUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.match) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetAllRegistrationsByMatchUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.match, other.match) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetAllRegistrationsByMatchUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetAllRegistrationsByMatchUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetRegistrationsByTournamentUseCase(getMatchesByTournamentUseCase, getAllRegistrationsByMatchUseCase) {
    this.getMatchesByTournamentUseCase_0 = getMatchesByTournamentUseCase;
    this.getAllRegistrationsByMatchUseCase_0 = getAllRegistrationsByMatchUseCase;
  }
  function Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda(this$GetRegistrationsByTournamentUseCase_0, closure$it_0, match_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetRegistrationsByTournamentUseCase = this$GetRegistrationsByTournamentUseCase_0;
    this.local$closure$it = closure$it_0;
    this.local$match = match_0;
  }
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda.prototype.constructor = Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda;
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetRegistrationsByTournamentUseCase.getAllRegistrationsByMatchUseCase_0.buildAction_wj5ll4$(this.local$match, this.local$closure$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda(this$GetRegistrationsByTournamentUseCase_0, closure$it_0) {
    return function (match_0, continuation_0, suspended) {
      var instance = new Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda(this$GetRegistrationsByTournamentUseCase_0, closure$it_0, match_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda(this$GetRegistrationsByTournamentUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetRegistrationsByTournamentUseCase = this$GetRegistrationsByTournamentUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda;
  Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return flatMapConcat(this.local$this$GetRegistrationsByTournamentUseCase.getMatchesByTournamentUseCase_0.buildAction_cy1osw$(this.local$closure$params.tournament), GetRegistrationsByTournamentUseCase$buildAction$lambda$lambda(this.local$this$GetRegistrationsByTournamentUseCase, this.local$it));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetRegistrationsByTournamentUseCase$buildAction$lambda(this$GetRegistrationsByTournamentUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetRegistrationsByTournamentUseCase$buildAction$lambda(this$GetRegistrationsByTournamentUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetRegistrationsByTournamentUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.pages)), GetRegistrationsByTournamentUseCase$buildAction$lambda(this, params));
  };
  GetRegistrationsByTournamentUseCase.prototype.buildAction_cy1osw$ = function (tournament, pages) {
    if (pages === void 0)
      pages = 1;
    return this.buildAction_11rb$(new GetRegistrationsByTournamentUseCase$Params(tournament, pages));
  };
  function GetRegistrationsByTournamentUseCase$Params(tournament, pages) {
    if (pages === void 0)
      pages = 1;
    this.tournament = tournament;
    this.pages = pages;
  }
  GetRegistrationsByTournamentUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetRegistrationsByTournamentUseCase$Params.prototype.component1 = function () {
    return this.tournament;
  };
  GetRegistrationsByTournamentUseCase$Params.prototype.component2 = function () {
    return this.pages;
  };
  GetRegistrationsByTournamentUseCase$Params.prototype.copy_cy1osw$ = function (tournament, pages) {
    return new GetRegistrationsByTournamentUseCase$Params(tournament === void 0 ? this.tournament : tournament, pages === void 0 ? this.pages : pages);
  };
  GetRegistrationsByTournamentUseCase$Params.prototype.toString = function () {
    return 'Params(tournament=' + Kotlin.toString(this.tournament) + (', pages=' + Kotlin.toString(this.pages)) + ')';
  };
  GetRegistrationsByTournamentUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tournament) | 0;
    result = result * 31 + Kotlin.hashCode(this.pages) | 0;
    return result;
  };
  GetRegistrationsByTournamentUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tournament, other.tournament) && Kotlin.equals(this.pages, other.pages)))));
  };
  GetRegistrationsByTournamentUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetRegistrationsByTournamentUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetRegistrationsByUserUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetRegistrationsByUserUseCase$buildAction$lambda(this$GetRegistrationsByUserUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetRegistrationsByUserUseCase = this$GetRegistrationsByUserUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetRegistrationsByUserUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetRegistrationsByUserUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetRegistrationsByUserUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetRegistrationsByUserUseCase$buildAction$lambda;
  Coroutine$GetRegistrationsByUserUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetRegistrationsByUserUseCase.repository_0.getRegistrationsByUser_bm4lxs$(this.local$closure$params.user.id, this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetRegistrationsByUserUseCase$buildAction$lambda(this$GetRegistrationsByUserUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetRegistrationsByUserUseCase$buildAction$lambda(this$GetRegistrationsByUserUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetRegistrationsByUserUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetRegistrationsByUserUseCase$buildAction$lambda(this, params));
  };
  GetRegistrationsByUserUseCase.prototype.buildAction_b53mcy$ = function (user, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetRegistrationsByUserUseCase$Params(user, maxPage));
  };
  function GetRegistrationsByUserUseCase$Params(user, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.user = user;
    this.maxPage = maxPage;
  }
  GetRegistrationsByUserUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetRegistrationsByUserUseCase$Params.prototype.component1 = function () {
    return this.user;
  };
  GetRegistrationsByUserUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetRegistrationsByUserUseCase$Params.prototype.copy_b53mcy$ = function (user, maxPage) {
    return new GetRegistrationsByUserUseCase$Params(user === void 0 ? this.user : user, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetRegistrationsByUserUseCase$Params.prototype.toString = function () {
    return 'Params(user=' + Kotlin.toString(this.user) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetRegistrationsByUserUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetRegistrationsByUserUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetRegistrationsByUserUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetRegistrationsByUserUseCase',
    interfaces: [UseCaseWithParams]
  };
  function CreateTournamentUseCase(repository) {
    this.repository_0 = repository;
  }
  CreateTournamentUseCase.prototype.buildAction_11rb$ = function (params, continuation) {
    return this.repository_0.createTournament_1813a1$(params.playersNumber, params.title, params.tournamentDescription, params.tournamentMode, params.admin, params.game, continuation);
  };
  CreateTournamentUseCase.prototype.buildAction_1813a1$ = function (playersNumber, title, tournamentDescription, tournamentMode, admin, game, continuation) {
    return this.buildAction_11rb$(new CreateTournamentUseCase$Params(playersNumber, title, tournamentDescription, tournamentMode, admin, game), continuation);
  };
  function CreateTournamentUseCase$Params(playersNumber, title, tournamentDescription, tournamentMode, admin, game) {
    this.playersNumber = playersNumber;
    this.title = title;
    this.tournamentDescription = tournamentDescription;
    this.tournamentMode = tournamentMode;
    this.admin = admin;
    this.game = game;
  }
  CreateTournamentUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  CreateTournamentUseCase$Params.prototype.component1 = function () {
    return this.playersNumber;
  };
  CreateTournamentUseCase$Params.prototype.component2 = function () {
    return this.title;
  };
  CreateTournamentUseCase$Params.prototype.component3 = function () {
    return this.tournamentDescription;
  };
  CreateTournamentUseCase$Params.prototype.component4 = function () {
    return this.tournamentMode;
  };
  CreateTournamentUseCase$Params.prototype.component5 = function () {
    return this.admin;
  };
  CreateTournamentUseCase$Params.prototype.component6 = function () {
    return this.game;
  };
  CreateTournamentUseCase$Params.prototype.copy_1813a1$ = function (playersNumber, title, tournamentDescription, tournamentMode, admin, game) {
    return new CreateTournamentUseCase$Params(playersNumber === void 0 ? this.playersNumber : playersNumber, title === void 0 ? this.title : title, tournamentDescription === void 0 ? this.tournamentDescription : tournamentDescription, tournamentMode === void 0 ? this.tournamentMode : tournamentMode, admin === void 0 ? this.admin : admin, game === void 0 ? this.game : game);
  };
  CreateTournamentUseCase$Params.prototype.toString = function () {
    return 'Params(playersNumber=' + Kotlin.toString(this.playersNumber) + (', title=' + Kotlin.toString(this.title)) + (', tournamentDescription=' + Kotlin.toString(this.tournamentDescription)) + (', tournamentMode=' + Kotlin.toString(this.tournamentMode)) + (', admin=' + Kotlin.toString(this.admin)) + (', game=' + Kotlin.toString(this.game)) + ')';
  };
  CreateTournamentUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.playersNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentDescription) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.admin) | 0;
    result = result * 31 + Kotlin.hashCode(this.game) | 0;
    return result;
  };
  CreateTournamentUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.playersNumber, other.playersNumber) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.tournamentDescription, other.tournamentDescription) && Kotlin.equals(this.tournamentMode, other.tournamentMode) && Kotlin.equals(this.admin, other.admin) && Kotlin.equals(this.game, other.game)))));
  };
  CreateTournamentUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateTournamentUseCase',
    interfaces: [UseCaseWithParamsSuspending]
  };
  function GetCreatedTournamentsByAdminUseCase(repository, getCurrentUserInfoUseCase) {
    this.repository_0 = repository;
    this.getCurrentUserInfoUseCase_0 = getCurrentUserInfoUseCase;
  }
  function Coroutine$GetCreatedTournamentsByAdminUseCase$buildAction$lambda(this$GetCreatedTournamentsByAdminUseCase_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetCreatedTournamentsByAdminUseCase = this$GetCreatedTournamentsByAdminUseCase_0;
    this.local$tmp$ = void 0;
    this.local$it = it_0;
  }
  Coroutine$GetCreatedTournamentsByAdminUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetCreatedTournamentsByAdminUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetCreatedTournamentsByAdminUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetCreatedTournamentsByAdminUseCase$buildAction$lambda;
  Coroutine$GetCreatedTournamentsByAdminUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$GetCreatedTournamentsByAdminUseCase.repository_0;
            this.state_0 = 2;
            this.result_0 = this.local$this$GetCreatedTournamentsByAdminUseCase.getCurrentUserInfoUseCase_0.buildAction(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$tmp$.getTournamentsByUser_bm4lxs$(this.result_0.id, this.local$it);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetCreatedTournamentsByAdminUseCase$buildAction$lambda(this$GetCreatedTournamentsByAdminUseCase_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetCreatedTournamentsByAdminUseCase$buildAction$lambda(this$GetCreatedTournamentsByAdminUseCase_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetCreatedTournamentsByAdminUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetCreatedTournamentsByAdminUseCase$buildAction$lambda(this));
  };
  GetCreatedTournamentsByAdminUseCase.prototype.buildAction_za3lpa$ = function (maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetCreatedTournamentsByAdminUseCase$Params(maxPage));
  };
  function GetCreatedTournamentsByAdminUseCase$Params(maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.maxPage = maxPage;
  }
  GetCreatedTournamentsByAdminUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetCreatedTournamentsByAdminUseCase$Params.prototype.component1 = function () {
    return this.maxPage;
  };
  GetCreatedTournamentsByAdminUseCase$Params.prototype.copy_za3lpa$ = function (maxPage) {
    return new GetCreatedTournamentsByAdminUseCase$Params(maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetCreatedTournamentsByAdminUseCase$Params.prototype.toString = function () {
    return 'Params(maxPage=' + Kotlin.toString(this.maxPage) + ')';
  };
  GetCreatedTournamentsByAdminUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetCreatedTournamentsByAdminUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.maxPage, other.maxPage))));
  };
  GetCreatedTournamentsByAdminUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetCreatedTournamentsByAdminUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetShowCaseTournamentsUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetShowCaseTournamentsUseCase$buildAction$lambda(this$GetShowCaseTournamentsUseCase_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetShowCaseTournamentsUseCase = this$GetShowCaseTournamentsUseCase_0;
    this.local$it = it_0;
  }
  Coroutine$GetShowCaseTournamentsUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetShowCaseTournamentsUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetShowCaseTournamentsUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetShowCaseTournamentsUseCase$buildAction$lambda;
  Coroutine$GetShowCaseTournamentsUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetShowCaseTournamentsUseCase.repository_0.getShowCaseTournaments_za3lpa$(this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetShowCaseTournamentsUseCase$buildAction$lambda(this$GetShowCaseTournamentsUseCase_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetShowCaseTournamentsUseCase$buildAction$lambda(this$GetShowCaseTournamentsUseCase_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetShowCaseTournamentsUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetShowCaseTournamentsUseCase$buildAction$lambda(this));
  };
  GetShowCaseTournamentsUseCase.prototype.buildAction_za3lpa$ = function (maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetShowCaseTournamentsUseCase$Params(maxPage));
  };
  function GetShowCaseTournamentsUseCase$Params(maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.maxPage = maxPage;
  }
  GetShowCaseTournamentsUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetShowCaseTournamentsUseCase$Params.prototype.component1 = function () {
    return this.maxPage;
  };
  GetShowCaseTournamentsUseCase$Params.prototype.copy_za3lpa$ = function (maxPage) {
    return new GetShowCaseTournamentsUseCase$Params(maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetShowCaseTournamentsUseCase$Params.prototype.toString = function () {
    return 'Params(maxPage=' + Kotlin.toString(this.maxPage) + ')';
  };
  GetShowCaseTournamentsUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetShowCaseTournamentsUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.maxPage, other.maxPage))));
  };
  GetShowCaseTournamentsUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetShowCaseTournamentsUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetTournamentsByGameUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetTournamentsByGameUseCase$buildAction$lambda(this$GetTournamentsByGameUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetTournamentsByGameUseCase = this$GetTournamentsByGameUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetTournamentsByGameUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetTournamentsByGameUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetTournamentsByGameUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetTournamentsByGameUseCase$buildAction$lambda;
  Coroutine$GetTournamentsByGameUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetTournamentsByGameUseCase.repository_0.getTournamentsByGame_bm4lxs$(this.local$closure$params.game.name, this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetTournamentsByGameUseCase$buildAction$lambda(this$GetTournamentsByGameUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetTournamentsByGameUseCase$buildAction$lambda(this$GetTournamentsByGameUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetTournamentsByGameUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetTournamentsByGameUseCase$buildAction$lambda(this, params));
  };
  GetTournamentsByGameUseCase.prototype.buildAction_m79k93$ = function (game, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetTournamentsByGameUseCase$Params(game, maxPage));
  };
  function GetTournamentsByGameUseCase$Params(game, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.game = game;
    this.maxPage = maxPage;
  }
  GetTournamentsByGameUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetTournamentsByGameUseCase$Params.prototype.component1 = function () {
    return this.game;
  };
  GetTournamentsByGameUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetTournamentsByGameUseCase$Params.prototype.copy_m79k93$ = function (game, maxPage) {
    return new GetTournamentsByGameUseCase$Params(game === void 0 ? this.game : game, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetTournamentsByGameUseCase$Params.prototype.toString = function () {
    return 'Params(game=' + Kotlin.toString(this.game) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetTournamentsByGameUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.game) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetTournamentsByGameUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.game, other.game) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetTournamentsByGameUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetTournamentsByGameUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetTournamentsByModePerPageUseCase(repository) {
    this.repository_0 = repository;
  }
  GetTournamentsByModePerPageUseCase.prototype.buildAction_11rb$ = function (params) {
    return this.repository_0.getTournamentsByMode_bm4lxs$(params.mode, params.page);
  };
  GetTournamentsByModePerPageUseCase.prototype.buildAction_bm4lxs$ = function (mode, page) {
    return this.buildAction_11rb$(new GetTournamentsByModePerPageUseCase$Params(mode, page));
  };
  function GetTournamentsByModePerPageUseCase$Params(mode, page) {
    this.mode = mode;
    this.page = page;
  }
  GetTournamentsByModePerPageUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetTournamentsByModePerPageUseCase$Params.prototype.component1 = function () {
    return this.mode;
  };
  GetTournamentsByModePerPageUseCase$Params.prototype.component2 = function () {
    return this.page;
  };
  GetTournamentsByModePerPageUseCase$Params.prototype.copy_bm4lxs$ = function (mode, page) {
    return new GetTournamentsByModePerPageUseCase$Params(mode === void 0 ? this.mode : mode, page === void 0 ? this.page : page);
  };
  GetTournamentsByModePerPageUseCase$Params.prototype.toString = function () {
    return 'Params(mode=' + Kotlin.toString(this.mode) + (', page=' + Kotlin.toString(this.page)) + ')';
  };
  GetTournamentsByModePerPageUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  GetTournamentsByModePerPageUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mode, other.mode) && Kotlin.equals(this.page, other.page)))));
  };
  GetTournamentsByModePerPageUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetTournamentsByModePerPageUseCase',
    interfaces: [UseCaseWithParams]
  };
  function unsafeFlow$ObjectLiteral_0(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_0($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_0.prototype.constructor = Coroutine$collect_42ocv1$_0;
  Coroutine$collect_42ocv1$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  unsafeFlow$ObjectLiteral_0.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_0(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_0.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_0;
  Coroutine$unsafeTransform$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_0 = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$unsafeTransform = this$unsafeTransform_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
    Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_0(this.local$closure$transform, this.local$$receiver)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        }
         catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          }
           else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$transform_0, this$unsafeTransform_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$map$lambda_0(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_0.prototype.constructor = Coroutine$map$lambda_0;
  Coroutine$map$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.emit_11rb$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function map$lambda_0(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_0(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GetTournamentsByModeUseCase(getTournamentsByModePerPageUseCase, getMatchesByTournamentUseCase) {
    this.getTournamentsByModePerPageUseCase_0 = getTournamentsByModePerPageUseCase;
    this.getMatchesByTournamentUseCase_0 = getMatchesByTournamentUseCase;
  }
  function Coroutine$GetTournamentsByModeUseCase$buildAction$lambda$lambda(this$GetTournamentsByModeUseCase_0, tournament_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetTournamentsByModeUseCase = this$GetTournamentsByModeUseCase_0;
    this.local$tournament = tournament_0;
  }
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda$lambda.prototype.constructor = Coroutine$GetTournamentsByModeUseCase$buildAction$lambda$lambda;
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = toList(this.local$this$GetTournamentsByModeUseCase.getMatchesByTournamentUseCase_0.buildAction_cy1osw$(this.local$tournament), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            var sum = 0;
            tmp$ = this.result_0.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              sum = sum + element.playersCount | 0;
            }

            return to(this.local$tournament, sum);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetTournamentsByModeUseCase$buildAction$lambda$lambda(this$GetTournamentsByModeUseCase_0) {
    return function (tournament_0, continuation_0, suspended) {
      var instance = new Coroutine$GetTournamentsByModeUseCase$buildAction$lambda$lambda(this$GetTournamentsByModeUseCase_0, tournament_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GetTournamentsByModeUseCase$buildAction$lambda(this$GetTournamentsByModeUseCase_0, closure$params_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetTournamentsByModeUseCase = this$GetTournamentsByModeUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$page = page_0;
  }
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetTournamentsByModeUseCase$buildAction$lambda;
  Coroutine$GetTournamentsByModeUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$this$GetTournamentsByModeUseCase.getTournamentsByModePerPageUseCase_0.buildAction_11rb$(new GetTournamentsByModePerPageUseCase$Params(this.local$closure$params.mode, this.local$page));
            return new unsafeFlow$ObjectLiteral_0(unsafeTransform$lambda_0(map$lambda_0(GetTournamentsByModeUseCase$buildAction$lambda$lambda(this.local$this$GetTournamentsByModeUseCase)), $receiver));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetTournamentsByModeUseCase$buildAction$lambda(this$GetTournamentsByModeUseCase_0, closure$params_0) {
    return function (page_0, continuation_0, suspended) {
      var instance = new Coroutine$GetTournamentsByModeUseCase$buildAction$lambda(this$GetTournamentsByModeUseCase_0, closure$params_0, page_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetTournamentsByModeUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetTournamentsByModeUseCase$buildAction$lambda(this, params));
  };
  GetTournamentsByModeUseCase.prototype.buildAction_bm4lxs$ = function (mode, page) {
    if (page === void 0)
      page = 1;
    return this.buildAction_11rb$(new GetTournamentsByModeUseCase$Params(mode, page));
  };
  function GetTournamentsByModeUseCase$Params(mode, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.mode = mode;
    this.maxPage = maxPage;
  }
  GetTournamentsByModeUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetTournamentsByModeUseCase$Params.prototype.component1 = function () {
    return this.mode;
  };
  GetTournamentsByModeUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetTournamentsByModeUseCase$Params.prototype.copy_bm4lxs$ = function (mode, maxPage) {
    return new GetTournamentsByModeUseCase$Params(mode === void 0 ? this.mode : mode, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetTournamentsByModeUseCase$Params.prototype.toString = function () {
    return 'Params(mode=' + Kotlin.toString(this.mode) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetTournamentsByModeUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetTournamentsByModeUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mode, other.mode) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetTournamentsByModeUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetTournamentsByModeUseCase',
    interfaces: [UseCaseWithParams]
  };
  function GetTournamentsContainingTitleUseCase(repository) {
    this.repository_0 = repository;
  }
  function Coroutine$GetTournamentsContainingTitleUseCase$buildAction$lambda(this$GetTournamentsContainingTitleUseCase_0, closure$params_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GetTournamentsContainingTitleUseCase = this$GetTournamentsContainingTitleUseCase_0;
    this.local$closure$params = closure$params_0;
    this.local$it = it_0;
  }
  Coroutine$GetTournamentsContainingTitleUseCase$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetTournamentsContainingTitleUseCase$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetTournamentsContainingTitleUseCase$buildAction$lambda.prototype.constructor = Coroutine$GetTournamentsContainingTitleUseCase$buildAction$lambda;
  Coroutine$GetTournamentsContainingTitleUseCase$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$GetTournamentsContainingTitleUseCase.repository_0.getTournamentsContainingTitle_bm4lxs$(this.local$closure$params.title, this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetTournamentsContainingTitleUseCase$buildAction$lambda(this$GetTournamentsContainingTitleUseCase_0, closure$params_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GetTournamentsContainingTitleUseCase$buildAction$lambda(this$GetTournamentsContainingTitleUseCase_0, closure$params_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetTournamentsContainingTitleUseCase.prototype.buildAction_11rb$ = function (params) {
    return flatMapConcat(asFlow(until(0, params.maxPage)), GetTournamentsContainingTitleUseCase$buildAction$lambda(this, params));
  };
  GetTournamentsContainingTitleUseCase.prototype.buildAction_bm4lxs$ = function (title, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    return this.buildAction_11rb$(new GetTournamentsContainingTitleUseCase$Params(title, maxPage));
  };
  function GetTournamentsContainingTitleUseCase$Params(title, maxPage) {
    if (maxPage === void 0)
      maxPage = 1;
    this.title = title;
    this.maxPage = maxPage;
  }
  GetTournamentsContainingTitleUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  GetTournamentsContainingTitleUseCase$Params.prototype.component1 = function () {
    return this.title;
  };
  GetTournamentsContainingTitleUseCase$Params.prototype.component2 = function () {
    return this.maxPage;
  };
  GetTournamentsContainingTitleUseCase$Params.prototype.copy_bm4lxs$ = function (title, maxPage) {
    return new GetTournamentsContainingTitleUseCase$Params(title === void 0 ? this.title : title, maxPage === void 0 ? this.maxPage : maxPage);
  };
  GetTournamentsContainingTitleUseCase$Params.prototype.toString = function () {
    return 'Params(title=' + Kotlin.toString(this.title) + (', maxPage=' + Kotlin.toString(this.maxPage)) + ')';
  };
  GetTournamentsContainingTitleUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxPage) | 0;
    return result;
  };
  GetTournamentsContainingTitleUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.maxPage, other.maxPage)))));
  };
  GetTournamentsContainingTitleUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetTournamentsContainingTitleUseCase',
    interfaces: [UseCaseWithParams]
  };
  function UseCase() {
  }
  UseCase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UseCase',
    interfaces: []
  };
  function UseCaseSuspending() {
  }
  UseCaseSuspending.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UseCaseSuspending',
    interfaces: []
  };
  function UseCaseWithParams() {
  }
  UseCaseWithParams.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UseCaseWithParams',
    interfaces: []
  };
  function UseCaseWithParamsSuspending() {
  }
  UseCaseWithParamsSuspending.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UseCaseWithParamsSuspending',
    interfaces: []
  };
  function CreateUserUseCase(repository, authenticationManager) {
    this.repository_0 = repository;
    this.authenticationManager_0 = authenticationManager;
  }
  function Coroutine$buildAction_11rb$($this, params_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$params = params_0;
  }
  Coroutine$buildAction_11rb$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$buildAction_11rb$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$buildAction_11rb$.prototype.constructor = Coroutine$buildAction_11rb$;
  Coroutine$buildAction_11rb$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.authenticationManager_0.createAccountWithEmailAndPassword_puj7f4$(this.local$params.email, this.local$params.password, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  CreateUserUseCase.prototype.buildAction_11rb$ = function (params_0, continuation_0, suspended) {
    var instance = new Coroutine$buildAction_11rb$(this, params_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  CreateUserUseCase.prototype.buildAction_w74nik$ = function (email, password, nickname, image, continuation) {
    return this.buildAction_11rb$(new CreateUserUseCase$Params(email, password, nickname, image), continuation);
  };
  function CreateUserUseCase$Params(email, password, nickname, image) {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.image = image;
  }
  CreateUserUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  CreateUserUseCase$Params.prototype.component1 = function () {
    return this.email;
  };
  CreateUserUseCase$Params.prototype.component2 = function () {
    return this.password;
  };
  CreateUserUseCase$Params.prototype.component3 = function () {
    return this.nickname;
  };
  CreateUserUseCase$Params.prototype.component4 = function () {
    return this.image;
  };
  CreateUserUseCase$Params.prototype.copy_w74nik$ = function (email, password, nickname, image) {
    return new CreateUserUseCase$Params(email === void 0 ? this.email : email, password === void 0 ? this.password : password, nickname === void 0 ? this.nickname : nickname, image === void 0 ? this.image : image);
  };
  CreateUserUseCase$Params.prototype.toString = function () {
    return 'Params(email=' + Kotlin.toString(this.email) + (', password=' + Kotlin.toString(this.password)) + (', nickname=' + Kotlin.toString(this.nickname)) + (', image=' + Kotlin.toString(this.image)) + ')';
  };
  CreateUserUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.nickname) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    return result;
  };
  CreateUserUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.email, other.email) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.nickname, other.nickname) && Kotlin.equals(this.image, other.image)))));
  };
  CreateUserUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateUserUseCase',
    interfaces: [UseCaseWithParamsSuspending]
  };
  function GetAccountVerificationStatusUseCase(repository) {
    this.repository_0 = repository;
  }
  GetAccountVerificationStatusUseCase.prototype.buildAction = function (continuation) {
    return this.repository_0.isAccountVerified(continuation);
  };
  GetAccountVerificationStatusUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetAccountVerificationStatusUseCase',
    interfaces: [UseCaseSuspending]
  };
  function GetCurrentUserInfoUseCase(repository) {
    this.repository_0 = repository;
  }
  GetCurrentUserInfoUseCase.prototype.buildAction = function (continuation) {
    return this.repository_0.getCurrentUser(continuation);
  };
  GetCurrentUserInfoUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetCurrentUserInfoUseCase',
    interfaces: [UseCaseSuspending]
  };
  function IsSubscribedAccountUseCase(repository) {
    this.repository_0 = repository;
  }
  IsSubscribedAccountUseCase.prototype.buildAction = function (continuation) {
    return this.repository_0.isAccountSubscribed(continuation);
  };
  IsSubscribedAccountUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsSubscribedAccountUseCase',
    interfaces: [UseCaseSuspending]
  };
  function SigninUserUseCase(authenticationManager) {
    this.authenticationManager_0 = authenticationManager;
  }
  SigninUserUseCase.prototype.buildAction_11rb$ = function (params, continuation) {
    return this.authenticationManager_0.loginWithEmailAndPassword_puj7f4$(params.email, params.password, continuation);
  };
  SigninUserUseCase.prototype.buildAction_puj7f4$ = function (email, password, continuation) {
    return this.buildAction_11rb$(new SigninUserUseCase$Params(email, password), continuation);
  };
  function SigninUserUseCase$Params(email, password) {
    this.email = email;
    this.password = password;
  }
  SigninUserUseCase$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  SigninUserUseCase$Params.prototype.component1 = function () {
    return this.email;
  };
  SigninUserUseCase$Params.prototype.component2 = function () {
    return this.password;
  };
  SigninUserUseCase$Params.prototype.copy_puj7f4$ = function (email, password) {
    return new SigninUserUseCase$Params(email === void 0 ? this.email : email, password === void 0 ? this.password : password);
  };
  SigninUserUseCase$Params.prototype.toString = function () {
    return 'Params(email=' + Kotlin.toString(this.email) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  SigninUserUseCase$Params.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  SigninUserUseCase$Params.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.email, other.email) && Kotlin.equals(this.password, other.password)))));
  };
  SigninUserUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SigninUserUseCase',
    interfaces: [UseCaseWithParamsSuspending]
  };
  function DummyClasses() {
    DummyClasses$Companion_getInstance();
  }
  function DummyClasses$Companion() {
    DummyClasses$Companion_instance = this;
    this.user = new UserEntity('User', 'user@user.user', 'nickname', 'image', true, true);
    this.game = new GameEntity('COD', listOf('Free4All'), 'image', 'icon');
    this.tournament = new TournamentEntity(L42, 42, '42', '42', '42', this.user, this.game);
    this.match = new MatchEntity(L42, DateTimeTz.Companion.nowLocal(), 42, true, this.tournament);
  }
  DummyClasses$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DummyClasses$Companion_instance = null;
  function DummyClasses$Companion_getInstance() {
    if (DummyClasses$Companion_instance === null) {
      new DummyClasses$Companion();
    }
    return DummyClasses$Companion_instance;
  }
  DummyClasses.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyClasses',
    interfaces: []
  };
  function Quadruple(first, second, third, fourth) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.fourth = fourth;
  }
  Quadruple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quadruple',
    interfaces: []
  };
  Quadruple.prototype.component1 = function () {
    return this.first;
  };
  Quadruple.prototype.component2 = function () {
    return this.second;
  };
  Quadruple.prototype.component3 = function () {
    return this.third;
  };
  Quadruple.prototype.component4 = function () {
    return this.fourth;
  };
  Quadruple.prototype.copy_18alr2$ = function (first, second, third, fourth) {
    return new Quadruple(first === void 0 ? this.first : first, second === void 0 ? this.second : second, third === void 0 ? this.third : third, fourth === void 0 ? this.fourth : fourth);
  };
  Quadruple.prototype.toString = function () {
    return 'Quadruple(first=' + Kotlin.toString(this.first) + (', second=' + Kotlin.toString(this.second)) + (', third=' + Kotlin.toString(this.third)) + (', fourth=' + Kotlin.toString(this.fourth)) + ')';
  };
  Quadruple.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.first) | 0;
    result = result * 31 + Kotlin.hashCode(this.second) | 0;
    result = result * 31 + Kotlin.hashCode(this.third) | 0;
    result = result * 31 + Kotlin.hashCode(this.fourth) | 0;
    return result;
  };
  Quadruple.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.first, other.first) && Kotlin.equals(this.second, other.second) && Kotlin.equals(this.third, other.third) && Kotlin.equals(this.fourth, other.fourth)))));
  };
  function Quintuple(first, second, third, fourth, fifth) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.fourth = fourth;
    this.fifth = fifth;
  }
  Quintuple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quintuple',
    interfaces: []
  };
  Quintuple.prototype.component1 = function () {
    return this.first;
  };
  Quintuple.prototype.component2 = function () {
    return this.second;
  };
  Quintuple.prototype.component3 = function () {
    return this.third;
  };
  Quintuple.prototype.component4 = function () {
    return this.fourth;
  };
  Quintuple.prototype.component5 = function () {
    return this.fifth;
  };
  Quintuple.prototype.copy_mzll3x$ = function (first, second, third, fourth, fifth) {
    return new Quintuple(first === void 0 ? this.first : first, second === void 0 ? this.second : second, third === void 0 ? this.third : third, fourth === void 0 ? this.fourth : fourth, fifth === void 0 ? this.fifth : fifth);
  };
  Quintuple.prototype.toString = function () {
    return 'Quintuple(first=' + Kotlin.toString(this.first) + (', second=' + Kotlin.toString(this.second)) + (', third=' + Kotlin.toString(this.third)) + (', fourth=' + Kotlin.toString(this.fourth)) + (', fifth=' + Kotlin.toString(this.fifth)) + ')';
  };
  Quintuple.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.first) | 0;
    result = result * 31 + Kotlin.hashCode(this.second) | 0;
    result = result * 31 + Kotlin.hashCode(this.third) | 0;
    result = result * 31 + Kotlin.hashCode(this.fourth) | 0;
    result = result * 31 + Kotlin.hashCode(this.fifth) | 0;
    return result;
  };
  Quintuple.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.first, other.first) && Kotlin.equals(this.second, other.second) && Kotlin.equals(this.third, other.third) && Kotlin.equals(this.fourth, other.fourth) && Kotlin.equals(this.fifth, other.fifth)))));
  };
  function JsCreateGame(usecase) {
    this.usecase_hfbjrf$_0 = usecase;
  }
  Object.defineProperty(JsCreateGame.prototype, 'usecase', {
    get: function () {
      return this.usecase_hfbjrf$_0;
    }
  });
  function Coroutine$JsCreateGame$buildAction$lambda(this$JsCreateGame_0, closure$params_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsCreateGame = this$JsCreateGame_0;
    this.local$closure$params = closure$params_0;
  }
  Coroutine$JsCreateGame$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsCreateGame$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsCreateGame$buildAction$lambda.prototype.constructor = Coroutine$JsCreateGame$buildAction$lambda;
  Coroutine$JsCreateGame$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsCreateGame.usecase.buildAction_11rb$(this.local$closure$params, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsCreateGame$buildAction$lambda(this$JsCreateGame_0, closure$params_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsCreateGame$buildAction$lambda(this$JsCreateGame_0, closure$params_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsCreateGame.prototype.buildAction_11rc$ = function (params) {
    return promise(coroutines.GlobalScope, void 0, void 0, JsCreateGame$buildAction$lambda(this, params));
  };
  JsCreateGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCreateGame',
    interfaces: [JsUseCaseWithParamsPromise]
  };
  function JsGetGamesByMode(usecase) {
    this.usecase_4pz336$_0 = usecase;
  }
  Object.defineProperty(JsGetGamesByMode.prototype, 'usecase', {
    get: function () {
      return this.usecase_4pz336$_0;
    }
  });
  JsGetGamesByMode.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetGamesByMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetGamesByMode',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetGamesContainingName(usecase) {
    this.usecase_6obdwh$_0 = usecase;
  }
  Object.defineProperty(JsGetGamesContainingName.prototype, 'usecase', {
    get: function () {
      return this.usecase_6obdwh$_0;
    }
  });
  JsGetGamesContainingName.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetGamesContainingName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetGamesContainingName',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsUseCase() {
  }
  JsUseCase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsUseCase',
    interfaces: []
  };
  function JsUseCasePromise() {
  }
  JsUseCasePromise.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsUseCasePromise',
    interfaces: []
  };
  function JsUseCaseWithParamsObservable() {
  }
  JsUseCaseWithParamsObservable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsUseCaseWithParamsObservable',
    interfaces: []
  };
  function JsUseCaseWithParamsPromise() {
  }
  JsUseCaseWithParamsPromise.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsUseCaseWithParamsPromise',
    interfaces: []
  };
  function JsCreateMatch(usecase) {
    this.usecase_pdeckx$_0 = usecase;
  }
  Object.defineProperty(JsCreateMatch.prototype, 'usecase', {
    get: function () {
      return this.usecase_pdeckx$_0;
    }
  });
  function Coroutine$JsCreateMatch$buildAction$lambda(this$JsCreateMatch_0, closure$params_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsCreateMatch = this$JsCreateMatch_0;
    this.local$closure$params = closure$params_0;
  }
  Coroutine$JsCreateMatch$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsCreateMatch$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsCreateMatch$buildAction$lambda.prototype.constructor = Coroutine$JsCreateMatch$buildAction$lambda;
  Coroutine$JsCreateMatch$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsCreateMatch.usecase.buildAction_11rb$(this.local$closure$params, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsCreateMatch$buildAction$lambda(this$JsCreateMatch_0, closure$params_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsCreateMatch$buildAction$lambda(this$JsCreateMatch_0, closure$params_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsCreateMatch.prototype.buildAction_11rc$ = function (params) {
    return promise(coroutines.GlobalScope, void 0, void 0, JsCreateMatch$buildAction$lambda(this, params));
  };
  JsCreateMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCreateMatch',
    interfaces: [JsUseCaseWithParamsPromise]
  };
  function JsGetAllAvailableMatches(usecase) {
    this.usecase_ckpagj$_0 = usecase;
  }
  Object.defineProperty(JsGetAllAvailableMatches.prototype, 'usecase', {
    get: function () {
      return this.usecase_ckpagj$_0;
    }
  });
  JsGetAllAvailableMatches.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetAllAvailableMatches.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetAllAvailableMatches',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetAllMatchesByUser(usecase) {
    this.usecase_8adqcw$_0 = usecase;
  }
  Object.defineProperty(JsGetAllMatchesByUser.prototype, 'usecase', {
    get: function () {
      return this.usecase_8adqcw$_0;
    }
  });
  JsGetAllMatchesByUser.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetAllMatchesByUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetAllMatchesByUser',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetMatchesByTournament(usecase) {
    this.usecase_dbrk9h$_0 = usecase;
  }
  Object.defineProperty(JsGetMatchesByTournament.prototype, 'usecase', {
    get: function () {
      return this.usecase_dbrk9h$_0;
    }
  });
  JsGetMatchesByTournament.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetMatchesByTournament.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetMatchesByTournament',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsCreateGameMode(usecase) {
    this.usecase_wglver$_0 = usecase;
  }
  Object.defineProperty(JsCreateGameMode.prototype, 'usecase', {
    get: function () {
      return this.usecase_wglver$_0;
    }
  });
  function Coroutine$JsCreateGameMode$buildAction$lambda(this$JsCreateGameMode_0, closure$params_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsCreateGameMode = this$JsCreateGameMode_0;
    this.local$closure$params = closure$params_0;
  }
  Coroutine$JsCreateGameMode$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsCreateGameMode$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsCreateGameMode$buildAction$lambda.prototype.constructor = Coroutine$JsCreateGameMode$buildAction$lambda;
  Coroutine$JsCreateGameMode$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsCreateGameMode.usecase.buildAction_11rb$(this.local$closure$params, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsCreateGameMode$buildAction$lambda(this$JsCreateGameMode_0, closure$params_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsCreateGameMode$buildAction$lambda(this$JsCreateGameMode_0, closure$params_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsCreateGameMode.prototype.buildAction_11rc$ = function (params) {
    return promise(coroutines.GlobalScope, void 0, void 0, JsCreateGameMode$buildAction$lambda(this, params));
  };
  JsCreateGameMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCreateGameMode',
    interfaces: [JsUseCaseWithParamsPromise]
  };
  function JsCreateRegistration(usecase) {
    this.usecase_9kix91$_0 = usecase;
  }
  Object.defineProperty(JsCreateRegistration.prototype, 'usecase', {
    get: function () {
      return this.usecase_9kix91$_0;
    }
  });
  function Coroutine$JsCreateRegistration$buildAction$lambda(this$JsCreateRegistration_0, closure$params_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsCreateRegistration = this$JsCreateRegistration_0;
    this.local$closure$params = closure$params_0;
  }
  Coroutine$JsCreateRegistration$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsCreateRegistration$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsCreateRegistration$buildAction$lambda.prototype.constructor = Coroutine$JsCreateRegistration$buildAction$lambda;
  Coroutine$JsCreateRegistration$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsCreateRegistration.usecase.buildAction_11rb$(this.local$closure$params, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsCreateRegistration$buildAction$lambda(this$JsCreateRegistration_0, closure$params_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsCreateRegistration$buildAction$lambda(this$JsCreateRegistration_0, closure$params_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsCreateRegistration.prototype.buildAction_11rc$ = function (params) {
    return promise(coroutines.GlobalScope, void 0, void 0, JsCreateRegistration$buildAction$lambda(this, params));
  };
  JsCreateRegistration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCreateRegistration',
    interfaces: [JsUseCaseWithParamsPromise]
  };
  function JsGetAllRegistrationsByMatch(usecase) {
    this.usecase_zezdzp$_0 = usecase;
  }
  Object.defineProperty(JsGetAllRegistrationsByMatch.prototype, 'usecase', {
    get: function () {
      return this.usecase_zezdzp$_0;
    }
  });
  JsGetAllRegistrationsByMatch.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetAllRegistrationsByMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetAllRegistrationsByMatch',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetRegistrationsByTournament(usecase) {
    this.usecase_fd20m2$_0 = usecase;
  }
  Object.defineProperty(JsGetRegistrationsByTournament.prototype, 'usecase', {
    get: function () {
      return this.usecase_fd20m2$_0;
    }
  });
  JsGetRegistrationsByTournament.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetRegistrationsByTournament.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetRegistrationsByTournament',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetRegistrationsByUser(usecase) {
    this.usecase_3j59do$_0 = usecase;
  }
  Object.defineProperty(JsGetRegistrationsByUser.prototype, 'usecase', {
    get: function () {
      return this.usecase_3j59do$_0;
    }
  });
  JsGetRegistrationsByUser.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetRegistrationsByUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetRegistrationsByUser',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsCreateTournament(usecase) {
    this.usecase_rx51kb$_0 = usecase;
  }
  Object.defineProperty(JsCreateTournament.prototype, 'usecase', {
    get: function () {
      return this.usecase_rx51kb$_0;
    }
  });
  function Coroutine$JsCreateTournament$buildAction$lambda(this$JsCreateTournament_0, closure$params_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsCreateTournament = this$JsCreateTournament_0;
    this.local$closure$params = closure$params_0;
  }
  Coroutine$JsCreateTournament$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsCreateTournament$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsCreateTournament$buildAction$lambda.prototype.constructor = Coroutine$JsCreateTournament$buildAction$lambda;
  Coroutine$JsCreateTournament$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsCreateTournament.usecase.buildAction_11rb$(this.local$closure$params, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsCreateTournament$buildAction$lambda(this$JsCreateTournament_0, closure$params_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsCreateTournament$buildAction$lambda(this$JsCreateTournament_0, closure$params_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsCreateTournament.prototype.buildAction_11rc$ = function (params) {
    return promise(coroutines.GlobalScope, void 0, void 0, JsCreateTournament$buildAction$lambda(this, params));
  };
  JsCreateTournament.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCreateTournament',
    interfaces: [JsUseCaseWithParamsPromise]
  };
  function JsGetCreatedTournamentsByAdmin(usecase) {
    this.usecase_t7c6o6$_0 = usecase;
  }
  Object.defineProperty(JsGetCreatedTournamentsByAdmin.prototype, 'usecase', {
    get: function () {
      return this.usecase_t7c6o6$_0;
    }
  });
  JsGetCreatedTournamentsByAdmin.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetCreatedTournamentsByAdmin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetCreatedTournamentsByAdmin',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetShowcaseTournaments(usecase) {
    this.usecase_64rfhp$_0 = usecase;
  }
  Object.defineProperty(JsGetShowcaseTournaments.prototype, 'usecase', {
    get: function () {
      return this.usecase_64rfhp$_0;
    }
  });
  JsGetShowcaseTournaments.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetShowcaseTournaments.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetShowcaseTournaments',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetTournamentsByGame(usecase) {
    this.usecase_k69brx$_0 = usecase;
  }
  Object.defineProperty(JsGetTournamentsByGame.prototype, 'usecase', {
    get: function () {
      return this.usecase_k69brx$_0;
    }
  });
  JsGetTournamentsByGame.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetTournamentsByGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetTournamentsByGame',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetTournamentsByMode(usecase) {
    this.usecase_4ad1l8$_0 = usecase;
  }
  Object.defineProperty(JsGetTournamentsByMode.prototype, 'usecase', {
    get: function () {
      return this.usecase_4ad1l8$_0;
    }
  });
  JsGetTournamentsByMode.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetTournamentsByMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetTournamentsByMode',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsGetTournamentsContainingTitle(usecase) {
    this.usecase_s8a8ky$_0 = usecase;
  }
  Object.defineProperty(JsGetTournamentsContainingTitle.prototype, 'usecase', {
    get: function () {
      return this.usecase_s8a8ky$_0;
    }
  });
  JsGetTournamentsContainingTitle.prototype.buildAction_11rc$ = function (params) {
    return toObservable(this.usecase.buildAction_11rb$(params));
  };
  JsGetTournamentsContainingTitle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetTournamentsContainingTitle',
    interfaces: [JsUseCaseWithParamsObservable]
  };
  function JsCreateUser(usecase) {
    this.usecase_qyruz9$_0 = usecase;
  }
  Object.defineProperty(JsCreateUser.prototype, 'usecase', {
    get: function () {
      return this.usecase_qyruz9$_0;
    }
  });
  function Coroutine$JsCreateUser$buildAction$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$JsCreateUser$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsCreateUser$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsCreateUser$buildAction$lambda.prototype.constructor = Coroutine$JsCreateUser$buildAction$lambda;
  Coroutine$JsCreateUser$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            throw new NotImplementedError_init();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsCreateUser$buildAction$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$JsCreateUser$buildAction$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  JsCreateUser.prototype.buildAction_11rc$ = function (params) {
    return promise(coroutines.GlobalScope, void 0, void 0, JsCreateUser$buildAction$lambda);
  };
  JsCreateUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCreateUser',
    interfaces: [JsUseCaseWithParamsPromise]
  };
  function JsGetAccountVerificationStatus(usecase) {
    this.usecase_fki488$_0 = usecase;
  }
  Object.defineProperty(JsGetAccountVerificationStatus.prototype, 'usecase', {
    get: function () {
      return this.usecase_fki488$_0;
    }
  });
  function Coroutine$JsGetAccountVerificationStatus$buildAction$lambda(this$JsGetAccountVerificationStatus_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsGetAccountVerificationStatus = this$JsGetAccountVerificationStatus_0;
  }
  Coroutine$JsGetAccountVerificationStatus$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsGetAccountVerificationStatus$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsGetAccountVerificationStatus$buildAction$lambda.prototype.constructor = Coroutine$JsGetAccountVerificationStatus$buildAction$lambda;
  Coroutine$JsGetAccountVerificationStatus$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsGetAccountVerificationStatus.usecase.buildAction(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsGetAccountVerificationStatus$buildAction$lambda(this$JsGetAccountVerificationStatus_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsGetAccountVerificationStatus$buildAction$lambda(this$JsGetAccountVerificationStatus_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsGetAccountVerificationStatus.prototype.buildAction = function () {
    return promise(coroutines.GlobalScope, void 0, void 0, JsGetAccountVerificationStatus$buildAction$lambda(this));
  };
  JsGetAccountVerificationStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetAccountVerificationStatus',
    interfaces: [JsUseCasePromise]
  };
  function JsGetUserInfo(usecase) {
    this.usecase_c1135j$_0 = usecase;
  }
  Object.defineProperty(JsGetUserInfo.prototype, 'usecase', {
    get: function () {
      return this.usecase_c1135j$_0;
    }
  });
  function Coroutine$JsGetUserInfo$buildAction$lambda(this$JsGetUserInfo_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsGetUserInfo = this$JsGetUserInfo_0;
  }
  Coroutine$JsGetUserInfo$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsGetUserInfo$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsGetUserInfo$buildAction$lambda.prototype.constructor = Coroutine$JsGetUserInfo$buildAction$lambda;
  Coroutine$JsGetUserInfo$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsGetUserInfo.usecase.buildAction(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsGetUserInfo$buildAction$lambda(this$JsGetUserInfo_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsGetUserInfo$buildAction$lambda(this$JsGetUserInfo_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsGetUserInfo.prototype.buildAction = function () {
    return promise(coroutines.GlobalScope, void 0, void 0, JsGetUserInfo$buildAction$lambda(this));
  };
  JsGetUserInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGetUserInfo',
    interfaces: [JsUseCasePromise]
  };
  function JsIsSubscribedAccount(usecase) {
    this.usecase_xos3fn$_0 = usecase;
  }
  Object.defineProperty(JsIsSubscribedAccount.prototype, 'usecase', {
    get: function () {
      return this.usecase_xos3fn$_0;
    }
  });
  function Coroutine$JsIsSubscribedAccount$buildAction$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$JsIsSubscribedAccount$buildAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsIsSubscribedAccount$buildAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsIsSubscribedAccount$buildAction$lambda.prototype.constructor = Coroutine$JsIsSubscribedAccount$buildAction$lambda;
  Coroutine$JsIsSubscribedAccount$buildAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            throw new NotImplementedError_init();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsIsSubscribedAccount$buildAction$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$JsIsSubscribedAccount$buildAction$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  JsIsSubscribedAccount.prototype.buildAction_11rc$ = function (params) {
    return promise(coroutines.GlobalScope, void 0, void 0, JsIsSubscribedAccount$buildAction$lambda);
  };
  JsIsSubscribedAccount.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsIsSubscribedAccount',
    interfaces: [JsUseCaseWithParamsPromise]
  };
  function Coroutine$toObservable$lambda$lambda(closure$subscriber_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$subscriber = closure$subscriber_0;
    this.local$it = it_0;
  }
  Coroutine$toObservable$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toObservable$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toObservable$lambda$lambda.prototype.constructor = Coroutine$toObservable$lambda$lambda;
  Coroutine$toObservable$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!Kotlin.isType(this.local$it, CancellationException))
              return this.local$closure$subscriber.error(this.local$it), Unit;
            else
              return this.local$closure$subscriber.complete(), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toObservable$lambda$lambda(closure$subscriber_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$toObservable$lambda$lambda(closure$subscriber_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$toObservable$lambda$lambda_0(closure$subscriber_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$subscriber = closure$subscriber_0;
    this.local$e = e_0;
  }
  Coroutine$toObservable$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toObservable$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toObservable$lambda$lambda_0.prototype.constructor = Coroutine$toObservable$lambda$lambda_0;
  Coroutine$toObservable$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$subscriber.next(this.local$e), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toObservable$lambda$lambda_0(closure$subscriber_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$toObservable$lambda$lambda_0(closure$subscriber_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$toObservable$lambda$lambda_1(closure$subscriber_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$subscriber = closure$subscriber_0;
  }
  Coroutine$toObservable$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toObservable$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toObservable$lambda$lambda_1.prototype.constructor = Coroutine$toObservable$lambda$lambda_1;
  Coroutine$toObservable$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$subscriber.complete(), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toObservable$lambda$lambda_1(closure$subscriber_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$toObservable$lambda$lambda_1(closure$subscriber_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toObservable$lambda(this$toObservable) {
    return function (subscriber) {
      launchIn(onCompletion(onEach(catch_0(this$toObservable, toObservable$lambda$lambda(subscriber)), toObservable$lambda$lambda_0(subscriber)), toObservable$lambda$lambda_1(subscriber)), coroutines.GlobalScope);
      return Unit;
    };
  }
  function toObservable($receiver) {
    return new Observable(toObservable$lambda($receiver));
  }
  var package$com = _.com || (_.com = {});
  var package$example = package$com.example || (package$com.example = {});
  var package$myapplication = package$example.myapplication || (package$example.myapplication = {});
  var package$auth = package$myapplication.auth || (package$myapplication.auth = {});
  package$auth.AuthenticationManager = AuthenticationManager;
  Object.defineProperty(AuthProviders, 'GOOGLE', {
    get: AuthProviders$GOOGLE_getInstance
  });
  Object.defineProperty(AuthProviders, 'FACEBOOK', {
    get: AuthProviders$FACEBOOK_getInstance
  });
  Object.defineProperty(AuthProviders, 'EMAIL_PASSWORD', {
    get: AuthProviders$EMAIL_PASSWORD_getInstance
  });
  var package$entities = package$myapplication.entities || (package$myapplication.entities = {});
  package$entities.AuthProviders = AuthProviders;
  package$entities.AuthUserEntity = AuthUserEntity;
  package$entities.GameEntity = GameEntity;
  package$entities.MatchEntity = MatchEntity;
  package$entities.ModeEntity = ModeEntity;
  package$entities.RegistrationEntity = RegistrationEntity;
  package$entities.TournamentEntity = TournamentEntity;
  package$entities.UserEntity = UserEntity;
  AuthException.AuthGenericException = AuthException$AuthGenericException;
  AuthException.AuthWeakPasswordException = AuthException$AuthWeakPasswordException;
  AuthException.AuthMalformedEmailException = AuthException$AuthMalformedEmailException;
  AuthException.AuthInvalidCredentialsException = AuthException$AuthInvalidCredentialsException;
  AuthException.AuthNotAuthenticatedException = AuthException$AuthNotAuthenticatedException;
  AuthException.AuthInvalidTokenException = AuthException$AuthInvalidTokenException;
  AuthException.AuthUserCollisionException = AuthException$AuthUserCollisionException;
  AuthException.AuthInvalidUserException = AuthException$AuthInvalidUserException;
  AuthException.AuthRecentLoginRequiredException = AuthException$AuthRecentLoginRequiredException;
  var package$exceptions = package$myapplication.exceptions || (package$myapplication.exceptions = {});
  package$exceptions.AuthException = AuthException;
  var package$repositories = package$myapplication.repositories || (package$myapplication.repositories = {});
  package$repositories.ArenaTournamentRepository = ArenaTournamentRepository;
  CreateGameUseCase.Params = CreateGameUseCase$Params;
  var package$usecases = package$myapplication.usecases || (package$myapplication.usecases = {});
  var package$game = package$usecases.game || (package$usecases.game = {});
  package$game.CreateGameUseCase = CreateGameUseCase;
  GetGamesByModeUseCase.Params = GetGamesByModeUseCase$Params;
  package$game.GetGamesByModeUseCase = GetGamesByModeUseCase;
  GetGamesContainingNameUseCase.Params = GetGamesContainingNameUseCase$Params;
  package$game.GetGamesContainingNameUseCase = GetGamesContainingNameUseCase;
  CreateMatchUseCase.Params = CreateMatchUseCase$Params;
  var package$match = package$usecases.match || (package$usecases.match = {});
  package$match.CreateMatchUseCase = CreateMatchUseCase;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  GetAllAvailableMatchesUseCase.Params = GetAllAvailableMatchesUseCase$Params;
  package$match.GetAllAvailableMatchesUseCase = GetAllAvailableMatchesUseCase;
  GetAllMatchesByUserUseCase.Params = GetAllMatchesByUserUseCase$Params;
  package$match.GetAllMatchesByUserUseCase = GetAllMatchesByUserUseCase;
  GetAvailableMatchesPerPageUseCase.Params = GetAvailableMatchesPerPageUseCase$Params;
  package$match.GetAvailableMatchesPerPageUseCase = GetAvailableMatchesPerPageUseCase;
  GetMatchesByTournamentUseCase.Params = GetMatchesByTournamentUseCase$Params;
  package$match.GetMatchesByTournamentUseCase = GetMatchesByTournamentUseCase;
  CreateGameModeUseCase.Params = CreateGameModeUseCase$Params;
  var package$mode = package$usecases.mode || (package$usecases.mode = {});
  package$mode.CreateGameModeUseCase = CreateGameModeUseCase;
  CreateRegistrationUseCase.Params = CreateRegistrationUseCase$Params;
  var package$registration = package$usecases.registration || (package$usecases.registration = {});
  package$registration.CreateRegistrationUseCase = CreateRegistrationUseCase;
  GetAllRegistrationsByMatchUseCase.Params = GetAllRegistrationsByMatchUseCase$Params;
  package$registration.GetAllRegistrationsByMatchUseCase = GetAllRegistrationsByMatchUseCase;
  GetRegistrationsByTournamentUseCase.Params = GetRegistrationsByTournamentUseCase$Params;
  package$registration.GetRegistrationsByTournamentUseCase = GetRegistrationsByTournamentUseCase;
  GetRegistrationsByUserUseCase.Params = GetRegistrationsByUserUseCase$Params;
  package$registration.GetRegistrationsByUserUseCase = GetRegistrationsByUserUseCase;
  CreateTournamentUseCase.Params = CreateTournamentUseCase$Params;
  var package$tournament = package$usecases.tournament || (package$usecases.tournament = {});
  package$tournament.CreateTournamentUseCase = CreateTournamentUseCase;
  GetCreatedTournamentsByAdminUseCase.Params = GetCreatedTournamentsByAdminUseCase$Params;
  package$tournament.GetCreatedTournamentsByAdminUseCase = GetCreatedTournamentsByAdminUseCase;
  GetShowCaseTournamentsUseCase.Params = GetShowCaseTournamentsUseCase$Params;
  package$tournament.GetShowCaseTournamentsUseCase = GetShowCaseTournamentsUseCase;
  GetTournamentsByGameUseCase.Params = GetTournamentsByGameUseCase$Params;
  package$tournament.GetTournamentsByGameUseCase = GetTournamentsByGameUseCase;
  GetTournamentsByModePerPageUseCase.Params = GetTournamentsByModePerPageUseCase$Params;
  package$tournament.GetTournamentsByModePerPageUseCase = GetTournamentsByModePerPageUseCase;
  GetTournamentsByModeUseCase.Params = GetTournamentsByModeUseCase$Params;
  package$tournament.GetTournamentsByModeUseCase = GetTournamentsByModeUseCase;
  GetTournamentsContainingTitleUseCase.Params = GetTournamentsContainingTitleUseCase$Params;
  package$tournament.GetTournamentsContainingTitleUseCase = GetTournamentsContainingTitleUseCase;
  package$usecases.UseCase = UseCase;
  package$usecases.UseCaseSuspending = UseCaseSuspending;
  package$usecases.UseCaseWithParams = UseCaseWithParams;
  package$usecases.UseCaseWithParamsSuspending = UseCaseWithParamsSuspending;
  CreateUserUseCase.Params = CreateUserUseCase$Params;
  var package$user = package$usecases.user || (package$usecases.user = {});
  package$user.CreateUserUseCase = CreateUserUseCase;
  package$user.GetAccountVerificationStatusUseCase = GetAccountVerificationStatusUseCase;
  package$user.GetCurrentUserInfoUseCase = GetCurrentUserInfoUseCase;
  package$user.IsSubscribedAccountUseCase = IsSubscribedAccountUseCase;
  SigninUserUseCase.Params = SigninUserUseCase$Params;
  package$user.SigninUserUseCase = SigninUserUseCase;
  Object.defineProperty(DummyClasses, 'Companion', {
    get: DummyClasses$Companion_getInstance
  });
  var package$utils = package$myapplication.utils || (package$myapplication.utils = {});
  package$utils.DummyClasses = DummyClasses;
  package$utils.Quadruple = Quadruple;
  package$utils.Quintuple = Quintuple;
  package$game.JsCreateGame = JsCreateGame;
  package$game.JsGetGamesByMode = JsGetGamesByMode;
  package$game.JsGetGamesContainingName = JsGetGamesContainingName;
  package$usecases.JsUseCase = JsUseCase;
  package$usecases.JsUseCasePromise = JsUseCasePromise;
  package$usecases.JsUseCaseWithParamsObservable = JsUseCaseWithParamsObservable;
  package$usecases.JsUseCaseWithParamsPromise = JsUseCaseWithParamsPromise;
  package$match.JsCreateMatch = JsCreateMatch;
  package$match.JsGetAllAvailableMatches = JsGetAllAvailableMatches;
  package$match.JsGetAllMatchesByUser = JsGetAllMatchesByUser;
  package$match.JsGetMatchesByTournament = JsGetMatchesByTournament;
  package$mode.JsCreateGameMode = JsCreateGameMode;
  package$registration.JsCreateRegistration = JsCreateRegistration;
  package$registration.JsGetAllRegistrationsByMatch = JsGetAllRegistrationsByMatch;
  package$registration.JsGetRegistrationsByTournament = JsGetRegistrationsByTournament;
  package$registration.JsGetRegistrationsByUser = JsGetRegistrationsByUser;
  package$tournament.JsCreateTournament = JsCreateTournament;
  package$tournament.JsGetCreatedTournamentsByAdmin = JsGetCreatedTournamentsByAdmin;
  package$tournament.JsGetShowcaseTournaments = JsGetShowcaseTournaments;
  package$tournament.JsGetTournamentsByGame = JsGetTournamentsByGame;
  package$tournament.JsGetTournamentsByMode = JsGetTournamentsByMode;
  package$tournament.JsGetTournamentsContainingTitle = JsGetTournamentsContainingTitle;
  package$user.JsCreateUser = JsCreateUser;
  package$user.JsGetAccountVerificationStatus = JsGetAccountVerificationStatus;
  package$user.JsGetUserInfo = JsGetUserInfo;
  package$user.JsIsSubscribedAccount = JsIsSubscribedAccount;
  package$usecases.toObservable_x2ftfk$ = toObservable;
  Kotlin.defineModule('my-application-domain', _);
  return _;
}));

//# sourceMappingURL=my-application-domain.js.map
