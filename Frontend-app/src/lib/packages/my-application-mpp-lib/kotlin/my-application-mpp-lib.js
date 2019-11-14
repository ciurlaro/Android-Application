(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-runtime', 'my-application-data', 'ktor-ktor-client-core', 'ktor-ktor-http', 'ktor-ktor-utils', 'Kodein-DI-kodein-di-core', 'Kodein-DI-kodein-di-erased', 'my-application-domain', 'ktor-ktor-client-json', 'ktor-ktor-client-serialization'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('my-application-data'), require('ktor-ktor-client-core'), require('ktor-ktor-http'), require('ktor-ktor-utils'), require('Kodein-DI-kodein-di-core'), require('Kodein-DI-kodein-di-erased'), require('my-application-domain'), require('ktor-ktor-client-json'), require('ktor-ktor-client-serialization'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['my-application-data'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'my-application-data' was not found. Please, check whether 'my-application-data' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['Kodein-DI-kodein-di-core'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'Kodein-DI-kodein-di-core' was not found. Please, check whether 'Kodein-DI-kodein-di-core' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['Kodein-DI-kodein-di-erased'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'Kodein-DI-kodein-di-erased' was not found. Please, check whether 'Kodein-DI-kodein-di-erased' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['my-application-domain'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'my-application-domain' was not found. Please, check whether 'my-application-domain' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['ktor-ktor-client-json'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'ktor-ktor-client-json' was not found. Please, check whether 'ktor-ktor-client-json' is loaded prior to 'my-application-mpp-lib'.");
    }
    if (typeof this['ktor-ktor-client-serialization'] === 'undefined') {
      throw new Error("Error loading module 'my-application-mpp-lib'. Its dependency 'ktor-ktor-client-serialization' was not found. Please, check whether 'ktor-ktor-client-serialization' is loaded prior to 'my-application-mpp-lib'.");
    }
    root['my-application-mpp-lib'] = factory(typeof this['my-application-mpp-lib'] === 'undefined' ? {} : this['my-application-mpp-lib'], kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime'], this['my-application-data'], this['ktor-ktor-client-core'], this['ktor-ktor-http'], this['ktor-ktor-utils'], this['Kodein-DI-kodein-di-core'], this['Kodein-DI-kodein-di-erased'], this['my-application-domain'], this['ktor-ktor-client-json'], this['ktor-ktor-client-serialization']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$my_application_data, $module$ktor_ktor_client_core, $module$ktor_ktor_http, $module$ktor_ktor_utils, $module$Kodein_DI_kodein_di_core, $module$Kodein_DI_kodein_di_erased, $module$my_application_domain, $module$ktor_ktor_client_json, $module$ktor_ktor_client_serialization) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var CreateGameModeJSON = $module$my_application_data.com.example.myapplication.rawresponses.createresponses.CreateGameModeJSON;
  var ModeJSON = $module$my_application_data.com.example.myapplication.rawresponses.ModeJSON;
  var CreateGameJSON = $module$my_application_data.com.example.myapplication.rawresponses.createresponses.CreateGameJSON;
  var GameJSON = $module$my_application_data.com.example.myapplication.rawresponses.GameJSON;
  var CreateUserJSON = $module$my_application_data.com.example.myapplication.rawresponses.createresponses.CreateUserJSON;
  var UserJSON = $module$my_application_data.com.example.myapplication.rawresponses.UserJSON;
  var CreateTournamentJSON = $module$my_application_data.com.example.myapplication.rawresponses.createresponses.CreateTournamentJSON;
  var TournamentJSON = $module$my_application_data.com.example.myapplication.rawresponses.TournamentJSON;
  var CreateMatchJSON = $module$my_application_data.com.example.myapplication.rawresponses.createresponses.CreateMatchJSON;
  var MatchJSON = $module$my_application_data.com.example.myapplication.rawresponses.MatchJSON;
  var CreateRegistrationJSON = $module$my_application_data.com.example.myapplication.rawresponses.createresponses.CreateRegistrationJSON;
  var RegistrationJSON = $module$my_application_data.com.example.myapplication.rawresponses.RegistrationJSON;
  var MultipleGamesJSON = $module$my_application_data.com.example.myapplication.rawresponses.MultipleGamesJSON;
  var MultipleTournamentsJSON = $module$my_application_data.com.example.myapplication.rawresponses.MultipleTournamentsJSON;
  var MultipleMatchJSON = $module$my_application_data.com.example.myapplication.rawresponses.MultipleMatchJSON;
  var MultipleRegistrationsJSON = $module$my_application_data.com.example.myapplication.rawresponses.MultipleRegistrationsJSON;
  var MultipleUsersJSON = $module$my_application_data.com.example.myapplication.rawresponses.MultipleUsersJSON;
  var AccountStatusJSON = $module$my_application_data.com.example.myapplication.rawresponses.AccountStatusJSON;
  var SubscriptionStatusJSON = $module$my_application_data.com.example.myapplication.rawresponses.SubscriptionStatusJSON;
  var http = $module$ktor_ktor_http.io.ktor.http;
  var encodeBase64 = $module$ktor_ktor_utils.io.ktor.util.encodeBase64_pdl1vz$;
  var header = $module$ktor_ktor_client_core.io.ktor.client.request.header_xadl6p$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArenaTournamentDatasource = $module$my_application_data.com.example.myapplication.datasource.ArenaTournamentDatasource;
  var takeFrom = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.takeFrom_wol2ee$;
  var utils = $module$ktor_ktor_client_core.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var throwCCE = Kotlin.throwCCE;
  var getKClass = Kotlin.getKClass;
  var call_0 = $module$ktor_ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core.io.ktor.client.call.TypeInfo;
  var takeFrom_0 = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.takeFrom_jl1sg7$;
  var toString = Kotlin.toString;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var parametersOf = $module$ktor_ktor_http.io.ktor.http.parametersOf_cjfssn$;
  var URLProtocol = $module$ktor_ktor_http.io.ktor.http.URLProtocol;
  var Url = $module$ktor_ktor_http.io.ktor.http.Url;
  var ArenaTournamentDatasource$Endpoints = $module$my_application_data.com.example.myapplication.datasource.ArenaTournamentDatasource.Endpoints;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var Kodein$Module = $module$Kodein_DI_kodein_di_core.org.kodein.di.Kodein.Module;
  var JSTypeToken_init = $module$Kodein_DI_kodein_di_erased.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.JSTypeToken;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Throwable = Error;
  var HttpClient = $module$ktor_ktor_client_core.io.ktor.client.HttpClient;
  var TokenFactory = $module$my_application_data.com.example.myapplication.datasource.TokenFactory;
  var DateTimeMapper = $module$my_application_data.com.example.myapplication.mappers.DateTimeMapper;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Singleton_init = $module$Kodein_DI_kodein_di_erased.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.bindings.Singleton;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var AccountStatusMapper = $module$my_application_data.com.example.myapplication.mappers.AccountStatusMapper;
  var AccountSubscriptionMapper = $module$my_application_data.com.example.myapplication.mappers.AccountSubscriptionMapper;
  var GameMapper = $module$my_application_data.com.example.myapplication.mappers.GameMapper;
  var MatchMapper = $module$my_application_data.com.example.myapplication.mappers.MatchMapper;
  var TournamentMapper = $module$my_application_data.com.example.myapplication.mappers.TournamentMapper;
  var RegistrationMapper = $module$my_application_data.com.example.myapplication.mappers.RegistrationMapper;
  var UserMapper = $module$my_application_data.com.example.myapplication.mappers.UserMapper;
  var ModeMapper = $module$my_application_data.com.example.myapplication.mappers.ModeMapper;
  var GameLinkMapper = $module$my_application_data.com.example.myapplication.mappers.entitieslinkmapper.GameLinkMapper;
  var MatchLinkMapper = $module$my_application_data.com.example.myapplication.mappers.entitieslinkmapper.MatchLinkMapper;
  var TournamentLinkMapper = $module$my_application_data.com.example.myapplication.mappers.entitieslinkmapper.TournamentLinkMapper;
  var UserLinkMapper = $module$my_application_data.com.example.myapplication.mappers.entitieslinkmapper.UserLinkMapper;
  var ModeLinkMapper = $module$my_application_data.com.example.myapplication.mappers.entitieslinkmapper.ModeLinkMapper;
  var ArenaTournamentRepository = $module$my_application_domain.com.example.myapplication.repositories.ArenaTournamentRepository;
  var TournamentSplitter = $module$my_application_data.com.example.myapplication.splitters.TournamentSplitter;
  var MatchSplitter = $module$my_application_data.com.example.myapplication.splitters.MatchSplitter;
  var RegistrationSplitter = $module$my_application_data.com.example.myapplication.splitters.RegistrationSplitter;
  var ArenaTournamentRepositoryImplementation = $module$my_application_data.com.example.myapplication.repositories.ArenaTournamentRepositoryImplementation;
  var GameSplitter = $module$my_application_data.com.example.myapplication.splitters.GameSplitter;
  var GetGamesByModeUseCase = $module$my_application_domain.com.example.myapplication.usecases.game.GetGamesByModeUseCase;
  var GetGamesContainingNameUseCase = $module$my_application_domain.com.example.myapplication.usecases.game.GetGamesContainingNameUseCase;
  var GetTournamentsByGameUseCase = $module$my_application_domain.com.example.myapplication.usecases.tournament.GetTournamentsByGameUseCase;
  var GetTournamentsByModeUseCase = $module$my_application_domain.com.example.myapplication.usecases.tournament.GetTournamentsByModeUseCase;
  var GetTournamentsByModePerPageUseCase = $module$my_application_domain.com.example.myapplication.usecases.tournament.GetTournamentsByModePerPageUseCase;
  var GetMatchesByTournamentUseCase = $module$my_application_domain.com.example.myapplication.usecases.match.GetMatchesByTournamentUseCase;
  var GetTournamentsContainingTitleUseCase = $module$my_application_domain.com.example.myapplication.usecases.tournament.GetTournamentsContainingTitleUseCase;
  var GetAllAvailableMatchesUseCase = $module$my_application_domain.com.example.myapplication.usecases.match.GetAllAvailableMatchesUseCase;
  var GetAvailableMatchesPerPageUseCase = $module$my_application_domain.com.example.myapplication.usecases.match.GetAvailableMatchesPerPageUseCase;
  var GetAllRegistrationsByMatchUseCase = $module$my_application_domain.com.example.myapplication.usecases.registration.GetAllRegistrationsByMatchUseCase;
  var GetAllMatchesByUserUseCase = $module$my_application_domain.com.example.myapplication.usecases.match.GetAllMatchesByUserUseCase;
  var GetUserInfoUseCase = $module$my_application_domain.com.example.myapplication.usecases.user.GetUserInfoUseCase;
  var GetCreatedTournamentsByAdminUseCase = $module$my_application_domain.com.example.myapplication.usecases.tournament.GetCreatedTournamentsByAdminUseCase;
  var GetAccountVerificationStatusUseCase = $module$my_application_domain.com.example.myapplication.usecases.user.GetAccountVerificationStatusUseCase;
  var IsSubscribedAccountUseCase = $module$my_application_domain.com.example.myapplication.usecases.user.IsSubscribedAccountUseCase;
  var GetShowCaseTournamentsUseCase = $module$my_application_domain.com.example.myapplication.usecases.tournament.GetShowCaseTournamentsUseCase;
  var GetRegistrationsByUserUseCase = $module$my_application_domain.com.example.myapplication.usecases.registration.GetRegistrationsByUserUseCase;
  var GetRegistrationsByTournamentUseCase = $module$my_application_domain.com.example.myapplication.usecases.registration.GetRegistrationsByTournamentUseCase;
  var CreateUserUseCase = $module$my_application_domain.com.example.myapplication.usecases.user.CreateUserUseCase;
  var CreateGameModeUseCase = $module$my_application_domain.com.example.myapplication.usecases.mode.CreateGameModeUseCase;
  var CreateGameUseCase = $module$my_application_domain.com.example.myapplication.usecases.game.CreateGameUseCase;
  var CreateTournamentUseCase = $module$my_application_domain.com.example.myapplication.usecases.tournament.CreateTournamentUseCase;
  var CreateMatchUseCase = $module$my_application_domain.com.example.myapplication.usecases.match.CreateMatchUseCase;
  var CreateRegistrationUseCase = $module$my_application_domain.com.example.myapplication.usecases.registration.CreateRegistrationUseCase;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kodein = $module$Kodein_DI_kodein_di_core.org.kodein.di.Kodein;
  var JsCreateGame = $module$my_application_domain.com.example.myapplication.usecases.game.JsCreateGame;
  var JsGetGamesByMode = $module$my_application_domain.com.example.myapplication.usecases.game.JsGetGamesByMode;
  var JsGetGamesContainingName = $module$my_application_domain.com.example.myapplication.usecases.game.JsGetGamesContainingName;
  var JsCreateMatch = $module$my_application_domain.com.example.myapplication.usecases.match.JsCreateMatch;
  var JsGetAllAvailableMatches = $module$my_application_domain.com.example.myapplication.usecases.match.JsGetAllAvailableMatches;
  var JsGetAllMatchesByUser = $module$my_application_domain.com.example.myapplication.usecases.match.JsGetAllMatchesByUser;
  var JsGetMatchesByTournament = $module$my_application_domain.com.example.myapplication.usecases.match.JsGetMatchesByTournament;
  var JsCreateGameMode = $module$my_application_domain.com.example.myapplication.usecases.mode.JsCreateGameMode;
  var JsCreateRegistration = $module$my_application_domain.com.example.myapplication.usecases.registration.JsCreateRegistration;
  var JsGetAllRegistrationsByMatch = $module$my_application_domain.com.example.myapplication.usecases.registration.JsGetAllRegistrationsByMatch;
  var JsGetRegistrationsByTournament = $module$my_application_domain.com.example.myapplication.usecases.registration.JsGetRegistrationsByTournament;
  var JsCreateTournament = $module$my_application_domain.com.example.myapplication.usecases.tournament.JsCreateTournament;
  var JsGetCreatedTournamentsByAdmin = $module$my_application_domain.com.example.myapplication.usecases.tournament.JsGetCreatedTournamentsByAdmin;
  var JsGetShowcaseTournaments = $module$my_application_domain.com.example.myapplication.usecases.tournament.JsGetShowcaseTournaments;
  var JsGetTournamentsByGame = $module$my_application_domain.com.example.myapplication.usecases.tournament.JsGetTournamentsByGame;
  var JsGetTournamentsByMode = $module$my_application_domain.com.example.myapplication.usecases.tournament.JsGetTournamentsByMode;
  var JsGetTournamentsContainingTitle = $module$my_application_domain.com.example.myapplication.usecases.tournament.JsGetTournamentsContainingTitle;
  var JsCreateUser = $module$my_application_domain.com.example.myapplication.usecases.user.JsCreateUser;
  var JsGetAccountVerificationStatus = $module$my_application_domain.com.example.myapplication.usecases.user.JsGetAccountVerificationStatus;
  var JsGetUserInfo = $module$my_application_domain.com.example.myapplication.usecases.user.JsGetUserInfo;
  var JsIsSubscribedAccount = $module$my_application_domain.com.example.myapplication.usecases.user.JsIsSubscribedAccount;
  var KodeinAware = $module$Kodein_DI_kodein_di_core.org.kodein.di.KodeinAware;
  var Instance = $module$Kodein_DI_kodein_di_erased.$$importsForInline$$['Kodein-DI-kodein-di-core'].org.kodein.di.Instance_pnvkjc$;
  var JsGetRegistrationsByUser = $module$my_application_domain.com.example.myapplication.usecases.registration.JsGetRegistrationsByUser;
  var js = $module$ktor_ktor_client_core.io.ktor.client.engine.js;
  var JsonFeature = $module$ktor_ktor_client_json.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var HttpClient_0 = $module$ktor_ktor_client_core.io.ktor.client.HttpClient_744i18$;
  function get$lambda($receiver) {
    return Unit;
  }
  function get$lambda_0($receiver) {
    return Unit;
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this$ArenaTournamentDatasourceImplementation, closure$content) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = this$ArenaTournamentDatasourceImplementation.tokenFactory.factory()) != null) {
        header($receiver, http.HttpHeaders.Authorization, 'Bearer: ' + encodeBase64(tmp$ + ':'));
      }
      if (closure$content != null) {
        $receiver.body = closure$content;
      }
      return Unit;
    };
  }
  function get$lambda_1($receiver) {
    return Unit;
  }
  function ArenaTournamentDatasourceImplementation$authenticatedGet$lambda(this$ArenaTournamentDatasourceImplementation) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = this$ArenaTournamentDatasourceImplementation.tokenFactory.factory()) != null) {
        header($receiver, http.HttpHeaders.Authorization, 'Bearer: ' + encodeBase64(tmp$ + ':'));
      }
      return Unit;
    };
  }
  function ArenaTournamentDatasourceImplementation(httpClient, endpoints, tokenFactory) {
    this.httpClient_0 = httpClient;
    this.endpoints_0 = endpoints;
    this.tokenFactory_c1dctw$_0 = tokenFactory;
  }
  Object.defineProperty(ArenaTournamentDatasourceImplementation.prototype, 'tokenFactory', {
    get: function () {
      return this.tokenFactory_c1dctw$_0;
    }
  });
  function Coroutine$createGameMode_nzwrei$($this, gameModeJSON_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$gameModeJSON = gameModeJSON_0;
  }
  Coroutine$createGameMode_nzwrei$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createGameMode_nzwrei$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createGameMode_nzwrei$.prototype.constructor = Coroutine$createGameMode_nzwrei$;
  Coroutine$createGameMode_nzwrei$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.createGameModeUrl();
            var content = Json.Companion.stringify_tf03ej$(CreateGameModeJSON.Companion.serializer(), this.local$gameModeJSON);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this.$this, content)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(ModeJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, ModeJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.createGameMode_nzwrei$ = function (gameModeJSON_0, continuation_0, suspended) {
    var instance = new Coroutine$createGameMode_nzwrei$(this, gameModeJSON_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createGame_jfcnhz$($this, gameJSON_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$gameJSON = gameJSON_0;
  }
  Coroutine$createGame_jfcnhz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createGame_jfcnhz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createGame_jfcnhz$.prototype.constructor = Coroutine$createGame_jfcnhz$;
  Coroutine$createGame_jfcnhz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.createGameUrl();
            var content = Json.Companion.stringify_tf03ej$(CreateGameJSON.Companion.serializer(), this.local$gameJSON);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this.$this, content)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(GameJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, GameJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.createGame_jfcnhz$ = function (gameJSON_0, continuation_0, suspended) {
    var instance = new Coroutine$createGame_jfcnhz$(this, gameJSON_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createUser_qr3sts$($this, userJSON_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$userJSON = userJSON_0;
  }
  Coroutine$createUser_qr3sts$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createUser_qr3sts$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createUser_qr3sts$.prototype.constructor = Coroutine$createUser_qr3sts$;
  Coroutine$createUser_qr3sts$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.createUserUrl();
            var content = Json.Companion.stringify_tf03ej$(CreateUserJSON.Companion.serializer(), this.local$userJSON);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this.$this, content)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(UserJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, UserJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.createUser_qr3sts$ = function (userJSON_0, continuation_0, suspended) {
    var instance = new Coroutine$createUser_qr3sts$(this, userJSON_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createTournament_iuya3y$($this, tournamentJSON_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tournamentJSON = tournamentJSON_0;
  }
  Coroutine$createTournament_iuya3y$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createTournament_iuya3y$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createTournament_iuya3y$.prototype.constructor = Coroutine$createTournament_iuya3y$;
  Coroutine$createTournament_iuya3y$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.createTournamentUrl();
            var content = Json.Companion.stringify_tf03ej$(CreateTournamentJSON.Companion.serializer(), this.local$tournamentJSON);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this.$this, content)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(TournamentJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, TournamentJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.createTournament_iuya3y$ = function (tournamentJSON_0, continuation_0, suspended) {
    var instance = new Coroutine$createTournament_iuya3y$(this, tournamentJSON_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createMatch_rwgmnk$($this, matchJSON_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$matchJSON = matchJSON_0;
  }
  Coroutine$createMatch_rwgmnk$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createMatch_rwgmnk$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createMatch_rwgmnk$.prototype.constructor = Coroutine$createMatch_rwgmnk$;
  Coroutine$createMatch_rwgmnk$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.createMatchUrl();
            var content = Json.Companion.stringify_tf03ej$(CreateMatchJSON.Companion.serializer(), this.local$matchJSON);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this.$this, content)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.createMatch_rwgmnk$ = function (matchJSON_0, continuation_0, suspended) {
    var instance = new Coroutine$createMatch_rwgmnk$(this, matchJSON_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createRegistration_fmuddq$($this, registrationJSON_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$registrationJSON = registrationJSON_0;
  }
  Coroutine$createRegistration_fmuddq$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createRegistration_fmuddq$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createRegistration_fmuddq$.prototype.constructor = Coroutine$createRegistration_fmuddq$;
  Coroutine$createRegistration_fmuddq$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.createRegistrationUrl();
            var content = Json.Companion.stringify_tf03ej$(CreateRegistrationJSON.Companion.serializer(), this.local$registrationJSON);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this.$this, content)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(RegistrationJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, RegistrationJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.createRegistration_fmuddq$ = function (registrationJSON_0, continuation_0, suspended) {
    var instance = new Coroutine$createRegistration_fmuddq$(this, registrationJSON_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getAllGames_za3lpa$($this, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$page = page_0;
  }
  Coroutine$getAllGames_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getAllGames_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getAllGames_za3lpa$.prototype.constructor = Coroutine$getAllGames_za3lpa$;
  Coroutine$getAllGames_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.allGamesUrl_za3lpa$(this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleGamesJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleGamesJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getAllGames_za3lpa$ = function (page_0, continuation_0, suspended) {
    var instance = new Coroutine$getAllGames_za3lpa$(this, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getGameByName_61zpoe$($this, gameName_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$gameName = gameName_0;
  }
  Coroutine$getGameByName_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getGameByName_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getGameByName_61zpoe$.prototype.constructor = Coroutine$getGameByName_61zpoe$;
  Coroutine$getGameByName_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.gameByNameUrl_61zpoe$(this.local$gameName);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(GameJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, GameJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getGameByName_61zpoe$ = function (gameName_0, continuation_0, suspended) {
    var instance = new Coroutine$getGameByName_61zpoe$(this, gameName_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getGameByLink_61zpoe$($this, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$link = link_0;
  }
  Coroutine$getGameByLink_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getGameByLink_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getGameByLink_61zpoe$.prototype.constructor = Coroutine$getGameByLink_61zpoe$;
  Coroutine$getGameByLink_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, this.local$link);
            get$lambda_0($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(GameJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, GameJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getGameByLink_61zpoe$ = function (link_0, continuation_0, suspended) {
    var instance = new Coroutine$getGameByLink_61zpoe$(this, link_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$searchGamesByName_bm4lxs$($this, query_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$query = query_0;
    this.local$page = page_0;
  }
  Coroutine$searchGamesByName_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$searchGamesByName_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$searchGamesByName_bm4lxs$.prototype.constructor = Coroutine$searchGamesByName_bm4lxs$;
  Coroutine$searchGamesByName_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.searchGamesByNameUrl_bm4lxs$(this.local$query, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleGamesJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleGamesJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.searchGamesByName_bm4lxs$ = function (query_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$searchGamesByName_bm4lxs$(this, query_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getGamesContainingName_bm4lxs$($this, gameName_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$gameName = gameName_0;
    this.local$page = page_0;
  }
  Coroutine$getGamesContainingName_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getGamesContainingName_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getGamesContainingName_bm4lxs$.prototype.constructor = Coroutine$getGamesContainingName_bm4lxs$;
  Coroutine$getGamesContainingName_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.gamesContainingNameUrl_bm4lxs$(this.local$gameName, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleGamesJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleGamesJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getGamesContainingName_bm4lxs$ = function (gameName_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getGamesContainingName_bm4lxs$(this, gameName_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getGamesByMode_bm4lxs$($this, mode_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$mode = mode_0;
    this.local$page = page_0;
  }
  Coroutine$getGamesByMode_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getGamesByMode_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getGamesByMode_bm4lxs$.prototype.constructor = Coroutine$getGamesByMode_bm4lxs$;
  Coroutine$getGamesByMode_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.gamesByModeUrl_bm4lxs$(this.local$mode, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleGamesJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleGamesJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getGamesByMode_bm4lxs$ = function (mode_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getGamesByMode_bm4lxs$(this, mode_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getTournamentById_s8cxhz$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$getTournamentById_s8cxhz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getTournamentById_s8cxhz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getTournamentById_s8cxhz$.prototype.constructor = Coroutine$getTournamentById_s8cxhz$;
  Coroutine$getTournamentById_s8cxhz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.tournamentByIdUrl_s8cxhz$(this.local$id);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(TournamentJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, TournamentJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getTournamentById_s8cxhz$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$getTournamentById_s8cxhz$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getTournamentByLink_61zpoe$($this, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$link = link_0;
  }
  Coroutine$getTournamentByLink_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getTournamentByLink_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getTournamentByLink_61zpoe$.prototype.constructor = Coroutine$getTournamentByLink_61zpoe$;
  Coroutine$getTournamentByLink_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, this.local$link);
            get$lambda_0($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(TournamentJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, TournamentJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getTournamentByLink_61zpoe$ = function (link_0, continuation_0, suspended) {
    var instance = new Coroutine$getTournamentByLink_61zpoe$(this, link_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getTournamentsByMode_bm4lxs$($this, mode_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$mode = mode_0;
    this.local$page = page_0;
  }
  Coroutine$getTournamentsByMode_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getTournamentsByMode_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getTournamentsByMode_bm4lxs$.prototype.constructor = Coroutine$getTournamentsByMode_bm4lxs$;
  Coroutine$getTournamentsByMode_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.tournamentsByModeUrl_bm4lxs$(this.local$mode, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleTournamentsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleTournamentsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getTournamentsByMode_bm4lxs$ = function (mode_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getTournamentsByMode_bm4lxs$(this, mode_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getAllTournaments_za3lpa$($this, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$page = page_0;
  }
  Coroutine$getAllTournaments_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getAllTournaments_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getAllTournaments_za3lpa$.prototype.constructor = Coroutine$getAllTournaments_za3lpa$;
  Coroutine$getAllTournaments_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.allTournamentsUrl_za3lpa$(this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleTournamentsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleTournamentsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getAllTournaments_za3lpa$ = function (page_0, continuation_0, suspended) {
    var instance = new Coroutine$getAllTournaments_za3lpa$(this, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getTournamentsByGameName_bm4lxs$($this, gameName_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$gameName = gameName_0;
    this.local$page = page_0;
  }
  Coroutine$getTournamentsByGameName_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getTournamentsByGameName_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getTournamentsByGameName_bm4lxs$.prototype.constructor = Coroutine$getTournamentsByGameName_bm4lxs$;
  Coroutine$getTournamentsByGameName_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.tournamentsByGameName_bm4lxs$(this.local$gameName, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleTournamentsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleTournamentsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getTournamentsByGameName_bm4lxs$ = function (gameName_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getTournamentsByGameName_bm4lxs$(this, gameName_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getTournamentsByUser_bm4lxs$($this, userId_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$userId = userId_0;
    this.local$page = page_0;
  }
  Coroutine$getTournamentsByUser_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getTournamentsByUser_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getTournamentsByUser_bm4lxs$.prototype.constructor = Coroutine$getTournamentsByUser_bm4lxs$;
  Coroutine$getTournamentsByUser_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.tournamentsByAdmin_bm4lxs$(this.local$userId, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleTournamentsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleTournamentsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getTournamentsByUser_bm4lxs$ = function (userId_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getTournamentsByUser_bm4lxs$(this, userId_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$searchTournamentsByName_bm4lxs$($this, name_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
    this.local$page = page_0;
  }
  Coroutine$searchTournamentsByName_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$searchTournamentsByName_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$searchTournamentsByName_bm4lxs$.prototype.constructor = Coroutine$searchTournamentsByName_bm4lxs$;
  Coroutine$searchTournamentsByName_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.searchTournamentsByNameUrl_bm4lxs$(this.local$name, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleTournamentsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleTournamentsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.searchTournamentsByName_bm4lxs$ = function (name_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$searchTournamentsByName_bm4lxs$(this, name_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getShowCaseTournaments_za3lpa$($this, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$page = page_0;
  }
  Coroutine$getShowCaseTournaments_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getShowCaseTournaments_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getShowCaseTournaments_za3lpa$.prototype.constructor = Coroutine$getShowCaseTournaments_za3lpa$;
  Coroutine$getShowCaseTournaments_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.getShowCaseTournaments_za3lpa$(this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleTournamentsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleTournamentsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getShowCaseTournaments_za3lpa$ = function (page_0, continuation_0, suspended) {
    var instance = new Coroutine$getShowCaseTournaments_za3lpa$(this, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getTournamentsContainingTitle_bm4lxs$($this, title_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$title = title_0;
    this.local$page = page_0;
  }
  Coroutine$getTournamentsContainingTitle_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getTournamentsContainingTitle_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getTournamentsContainingTitle_bm4lxs$.prototype.constructor = Coroutine$getTournamentsContainingTitle_bm4lxs$;
  Coroutine$getTournamentsContainingTitle_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.getTournamentsContainingTitle_bm4lxs$(this.local$title, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleTournamentsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleTournamentsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getTournamentsContainingTitle_bm4lxs$ = function (title_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getTournamentsContainingTitle_bm4lxs$(this, title_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchById_s8cxhz$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$getMatchById_s8cxhz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchById_s8cxhz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchById_s8cxhz$.prototype.constructor = Coroutine$getMatchById_s8cxhz$;
  Coroutine$getMatchById_s8cxhz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.matchByIdUrl_s8cxhz$(this.local$id);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchById_s8cxhz$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchById_s8cxhz$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchByLink_61zpoe$($this, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$link = link_0;
  }
  Coroutine$getMatchByLink_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchByLink_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchByLink_61zpoe$.prototype.constructor = Coroutine$getMatchByLink_61zpoe$;
  Coroutine$getMatchByLink_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, this.local$link);
            get$lambda_0($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchByLink_61zpoe$ = function (link_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchByLink_61zpoe$(this, link_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchesByTournamentId_yhmem3$($this, tournamentId_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tournamentId = tournamentId_0;
    this.local$page = page_0;
  }
  Coroutine$getMatchesByTournamentId_yhmem3$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchesByTournamentId_yhmem3$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchesByTournamentId_yhmem3$.prototype.constructor = Coroutine$getMatchesByTournamentId_yhmem3$;
  Coroutine$getMatchesByTournamentId_yhmem3$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.matchesByTournamentIdUrl_yhmem3$(this.local$tournamentId, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleMatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleMatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchesByTournamentId_yhmem3$ = function (tournamentId_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchesByTournamentId_yhmem3$(this, tournamentId_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchesByGameName_bm4lxs$($this, gameName_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$gameName = gameName_0;
    this.local$page = page_0;
  }
  Coroutine$getMatchesByGameName_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchesByGameName_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchesByGameName_bm4lxs$.prototype.constructor = Coroutine$getMatchesByGameName_bm4lxs$;
  Coroutine$getMatchesByGameName_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.matchesByGameNameUrl_bm4lxs$(this.local$gameName, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleMatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleMatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchesByGameName_bm4lxs$ = function (gameName_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchesByGameName_bm4lxs$(this, gameName_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchesAfterDate_tc7k5b$($this, dateTime_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$dateTime = dateTime_0;
    this.local$page = page_0;
  }
  Coroutine$getMatchesAfterDate_tc7k5b$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchesAfterDate_tc7k5b$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchesAfterDate_tc7k5b$.prototype.constructor = Coroutine$getMatchesAfterDate_tc7k5b$;
  Coroutine$getMatchesAfterDate_tc7k5b$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.matchesAfterDateUrl_tc7k5b$(this.local$dateTime, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleMatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleMatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchesAfterDate_tc7k5b$ = function (dateTime_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchesAfterDate_tc7k5b$(this, dateTime_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchesAvailable_za3lpa$($this, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$page = page_0;
  }
  Coroutine$getMatchesAvailable_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchesAvailable_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchesAvailable_za3lpa$.prototype.constructor = Coroutine$getMatchesAvailable_za3lpa$;
  Coroutine$getMatchesAvailable_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.matchesAvailableUrl_za3lpa$(this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleMatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleMatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchesAvailable_za3lpa$ = function (page_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchesAvailable_za3lpa$(this, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchesByUser_bm4lxs$($this, userId_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$userId = userId_0;
    this.local$page = page_0;
  }
  Coroutine$getMatchesByUser_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchesByUser_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchesByUser_bm4lxs$.prototype.constructor = Coroutine$getMatchesByUser_bm4lxs$;
  Coroutine$getMatchesByUser_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.matchesByUserIdUrl_bm4lxs$(this.local$userId, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleMatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleMatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchesByUser_bm4lxs$ = function (userId_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchesByUser_bm4lxs$(this, userId_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getRegistrationById_s8cxhz$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$getRegistrationById_s8cxhz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getRegistrationById_s8cxhz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getRegistrationById_s8cxhz$.prototype.constructor = Coroutine$getRegistrationById_s8cxhz$;
  Coroutine$getRegistrationById_s8cxhz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.registrationByIdUrl_s8cxhz$(this.local$id);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(RegistrationJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, RegistrationJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getRegistrationById_s8cxhz$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$getRegistrationById_s8cxhz$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getRegistrationByLink_61zpoe$($this, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$link = link_0;
  }
  Coroutine$getRegistrationByLink_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getRegistrationByLink_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getRegistrationByLink_61zpoe$.prototype.constructor = Coroutine$getRegistrationByLink_61zpoe$;
  Coroutine$getRegistrationByLink_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, this.local$link);
            get$lambda_0($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(RegistrationJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, RegistrationJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getRegistrationByLink_61zpoe$ = function (link_0, continuation_0, suspended) {
    var instance = new Coroutine$getRegistrationByLink_61zpoe$(this, link_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMatchesNotFull_za3lpa$($this, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$page = page_0;
  }
  Coroutine$getMatchesNotFull_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMatchesNotFull_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMatchesNotFull_za3lpa$.prototype.constructor = Coroutine$getMatchesNotFull_za3lpa$;
  Coroutine$getMatchesNotFull_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.matchesNotFullUrl_za3lpa$(this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleMatchJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleMatchJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getMatchesNotFull_za3lpa$ = function (page_0, continuation_0, suspended) {
    var instance = new Coroutine$getMatchesNotFull_za3lpa$(this, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getRegistrationsByUser_bm4lxs$($this, userId_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$userId = userId_0;
    this.local$page = page_0;
  }
  Coroutine$getRegistrationsByUser_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getRegistrationsByUser_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getRegistrationsByUser_bm4lxs$.prototype.constructor = Coroutine$getRegistrationsByUser_bm4lxs$;
  Coroutine$getRegistrationsByUser_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.registrationsByUserUrl_bm4lxs$(this.local$userId, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleRegistrationsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleRegistrationsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getRegistrationsByUser_bm4lxs$ = function (userId_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getRegistrationsByUser_bm4lxs$(this, userId_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getRegistrationsByMatchId_yhmem3$($this, matchId_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$matchId = matchId_0;
    this.local$page = page_0;
  }
  Coroutine$getRegistrationsByMatchId_yhmem3$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getRegistrationsByMatchId_yhmem3$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getRegistrationsByMatchId_yhmem3$.prototype.constructor = Coroutine$getRegistrationsByMatchId_yhmem3$;
  Coroutine$getRegistrationsByMatchId_yhmem3$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.registrationsByMatchIdUrl_yhmem3$(this.local$matchId, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleRegistrationsJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleRegistrationsJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getRegistrationsByMatchId_yhmem3$ = function (matchId_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getRegistrationsByMatchId_yhmem3$(this, matchId_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getUserById_61zpoe$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$getUserById_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getUserById_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getUserById_61zpoe$.prototype.constructor = Coroutine$getUserById_61zpoe$;
  Coroutine$getUserById_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.userByIdUrl_61zpoe$(this.local$id);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(UserJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, UserJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getUserById_61zpoe$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$getUserById_61zpoe$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getUserByLink_61zpoe$($this, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$link = link_0;
  }
  Coroutine$getUserByLink_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getUserByLink_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getUserByLink_61zpoe$.prototype.constructor = Coroutine$getUserByLink_61zpoe$;
  Coroutine$getUserByLink_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, this.local$link);
            get$lambda_0($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(UserJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, UserJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getUserByLink_61zpoe$ = function (link_0, continuation_0, suspended) {
    var instance = new Coroutine$getUserByLink_61zpoe$(this, link_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getUsersByMatchId_yhmem3$($this, matchId_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$matchId = matchId_0;
    this.local$page = page_0;
  }
  Coroutine$getUsersByMatchId_yhmem3$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getUsersByMatchId_yhmem3$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getUsersByMatchId_yhmem3$.prototype.constructor = Coroutine$getUsersByMatchId_yhmem3$;
  Coroutine$getUsersByMatchId_yhmem3$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.usersByMatchIdUrl_yhmem3$(this.local$matchId, this.local$page);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MultipleUsersJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MultipleUsersJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getUsersByMatchId_yhmem3$ = function (matchId_0, page_0, continuation_0, suspended) {
    var instance = new Coroutine$getUsersByMatchId_yhmem3$(this, matchId_0, page_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getCurrentUser($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getCurrentUser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getCurrentUser.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getCurrentUser.prototype.constructor = Coroutine$getCurrentUser;
  Coroutine$getCurrentUser.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.currentUserUrl();
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedGet$lambda(this.$this)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(UserJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, UserJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getCurrentUser = function (continuation_0, suspended) {
    var instance = new Coroutine$getCurrentUser(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getAccountVerificationStatus($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getAccountVerificationStatus.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getAccountVerificationStatus.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getAccountVerificationStatus.prototype.constructor = Coroutine$getAccountVerificationStatus;
  Coroutine$getAccountVerificationStatus.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.isAccountVerifiedUrl();
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedGet$lambda(this.$this)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(AccountStatusJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, AccountStatusJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getAccountVerificationStatus = function (continuation_0, suspended) {
    var instance = new Coroutine$getAccountVerificationStatus(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getAccountSubscription($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getAccountSubscription.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getAccountSubscription.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getAccountSubscription.prototype.constructor = Coroutine$getAccountSubscription;
  Coroutine$getAccountSubscription.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.httpClient_0;
            var url_0 = this.$this.endpoints_0.isAccountSubscribedUrl();
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, url_0);
            ArenaTournamentDatasourceImplementation$authenticatedGet$lambda(this.$this)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(SubscriptionStatusJSON), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, SubscriptionStatusJSON) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.getAccountSubscription = function (continuation_0, suspended) {
    var instance = new Coroutine$getAccountSubscription(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$authenticatedGet_0($this, T_0_0, isT_0, $receiver_0, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$$receiver = $receiver_0;
    this.local$url = url_0;
  }
  Coroutine$authenticatedGet_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$authenticatedGet_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$authenticatedGet_0.prototype.constructor = Coroutine$authenticatedGet_0;
  Coroutine$authenticatedGet_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, this.local$url);
            ArenaTournamentDatasourceImplementation$authenticatedGet$lambda(this.$this)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call(this.local$$receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(this.local$T_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$_0 = this.result_0) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.authenticatedGet_0 = function (T_0_0, isT_0, $receiver_0, url_0, continuation_0, suspended) {
    var instance = new Coroutine$authenticatedGet_0(this, T_0_0, isT_0, $receiver_0, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$authenticatedPost_0($this, T_0_0, isT_0, $receiver_0, url_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$$receiver = $receiver_0;
    this.local$url = url_0;
    this.local$content = content_0;
  }
  Coroutine$authenticatedPost_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$authenticatedPost_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$authenticatedPost_0.prototype.constructor = Coroutine$authenticatedPost_0;
  Coroutine$authenticatedPost_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, this.local$url);
            ArenaTournamentDatasourceImplementation$authenticatedPost$lambda(this.$this, this.local$content)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call(this.local$$receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(this.local$T_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$_0 = this.result_0) ? tmp$_0 : throwCCE();
            this.result_0;
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
  ArenaTournamentDatasourceImplementation.prototype.authenticatedPost_0 = function (T_0_0, isT_0, $receiver_0, url_0, content_0, continuation_0, suspended) {
    var instance = new Coroutine$authenticatedPost_0(this, T_0_0, isT_0, $receiver_0, url_0, content_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ArenaTournamentDatasourceImplementation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArenaTournamentDatasourceImplementation',
    interfaces: [ArenaTournamentDatasource]
  };
  function EndpointsImplementation(protocol, host, port, dateTimeMapper) {
    this.protocol_omol0q$_0 = protocol;
    this.host_e4w58m$_0 = host;
    this.port_e9ah8t$_0 = port;
    this.dateTimeMapper_0 = dateTimeMapper;
  }
  Object.defineProperty(EndpointsImplementation.prototype, 'protocol', {
    get: function () {
      return this.protocol_omol0q$_0;
    }
  });
  Object.defineProperty(EndpointsImplementation.prototype, 'host', {
    get: function () {
      return this.host_e4w58m$_0;
    }
  });
  Object.defineProperty(EndpointsImplementation.prototype, 'port', {
    get: function () {
      return this.port_e9ah8t$_0;
    }
  });
  EndpointsImplementation.prototype.parametersOf_0 = function (headers) {
    var destination = ArrayList_init(headers.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== headers.length; ++tmp$) {
      var item = headers[tmp$];
      destination.add_11rb$(to(item.first, listOf(toString(item.second))));
    }
    return parametersOf(copyToArray(destination).slice());
  };
  EndpointsImplementation.prototype.buildUrl_0 = function (path, parameters) {
    if (parameters === void 0)
      parameters = this.parametersOf_0([]);
    return new Url(new URLProtocol(this.protocol, this.port), this.host, this.port, path, parameters, '', null, null, false);
  };
  EndpointsImplementation.prototype.createGameModeUrl = function () {
    return this.buildUrl_0('/mode');
  };
  EndpointsImplementation.prototype.createGameUrl = function () {
    return this.buildUrl_0('/game');
  };
  EndpointsImplementation.prototype.createMatchUrl = function () {
    return this.buildUrl_0('/match');
  };
  EndpointsImplementation.prototype.createRegistrationUrl = function () {
    return this.buildUrl_0('/registration');
  };
  EndpointsImplementation.prototype.createTournamentUrl = function () {
    return this.buildUrl_0('/tournament');
  };
  EndpointsImplementation.prototype.createUserUrl = function () {
    return this.buildUrl_0('/createUser');
  };
  EndpointsImplementation.prototype.allGamesUrl_za3lpa$ = function (page) {
    return this.buildUrl_0('/game', this.parametersOf_0([to('page', page)]));
  };
  EndpointsImplementation.prototype.gameByNameUrl_61zpoe$ = function (name) {
    return this.buildUrl_0('/game/' + name);
  };
  EndpointsImplementation.prototype.searchGamesByNameUrl_bm4lxs$ = function (query, page) {
    return this.buildUrl_0('/game/search/byGameName', this.parametersOf_0([to('gameName', query), to('page', page)]));
  };
  EndpointsImplementation.prototype.gamesContainingNameUrl_bm4lxs$ = function (gameName, page) {
    return this.buildUrl_0('/game/search/containingGameName', this.parametersOf_0([to('gameName', gameName), to('page', page)]));
  };
  EndpointsImplementation.prototype.gamesByModeUrl_bm4lxs$ = function (mode, page) {
    return this.buildUrl_0('/game/search/byMode', this.parametersOf_0([to('available_modes_mode_name', mode), to('page', page)]));
  };
  EndpointsImplementation.prototype.allTournamentsUrl_za3lpa$ = function (page) {
    return this.buildUrl_0('/tournament', this.parametersOf_0([to('page', page)]));
  };
  EndpointsImplementation.prototype.tournamentByIdUrl_s8cxhz$ = function (id) {
    return this.buildUrl_0('/tournament/' + id.toString());
  };
  EndpointsImplementation.prototype.tournamentsByGameName_bm4lxs$ = function (gameName, page) {
    return this.buildUrl_0('/tournament/search/byGame', this.parametersOf_0([to('gameName', gameName), to('page', page)]));
  };
  EndpointsImplementation.prototype.tournamentsByModeUrl_bm4lxs$ = function (mode, page) {
    return this.buildUrl_0('/tournament/search/byMode', this.parametersOf_0([to('tournamentMode', mode), to('page', page)]));
  };
  EndpointsImplementation.prototype.tournamentsByAdmin_bm4lxs$ = function (userId, page) {
    return this.buildUrl_0('/tournament/search/byUserId', this.parametersOf_0([to('admin', userId), to('page', page)]));
  };
  EndpointsImplementation.prototype.searchTournamentsByNameUrl_bm4lxs$ = function (query, page) {
    return this.buildUrl_0('/tournament/search/byName', this.parametersOf_0([to('title', query), to('page', page)]));
  };
  EndpointsImplementation.prototype.getShowCaseTournaments_za3lpa$ = function (page) {
    return this.buildUrl_0('/tournament/search/byShowCase', this.parametersOf_0([to('page', page)]));
  };
  EndpointsImplementation.prototype.getTournamentsContainingTitle_bm4lxs$ = function (title, page) {
    return this.buildUrl_0('/tournament/search/containingTitle', this.parametersOf_0([to('title', title), to('page', page)]));
  };
  EndpointsImplementation.prototype.matchByIdUrl_s8cxhz$ = function (id) {
    return this.buildUrl_0('/match/' + id.toString());
  };
  EndpointsImplementation.prototype.matchesByTournamentIdUrl_yhmem3$ = function (tournamentId, page) {
    return this.buildUrl_0('/match/search/byTournamentId', this.parametersOf_0([to('tournamentId', tournamentId), to('page', page)]));
  };
  EndpointsImplementation.prototype.matchesByGameNameUrl_bm4lxs$ = function (gameName, page) {
    return this.buildUrl_0('/match/search/byGameId', this.parametersOf_0([to('gameName', gameName), to('page', page)]));
  };
  EndpointsImplementation.prototype.allMatchesUrl_za3lpa$ = function (page) {
    return this.buildUrl_0('/match', this.parametersOf_0([to('page', page)]));
  };
  EndpointsImplementation.prototype.matchesAfterDateUrl_tc7k5b$ = function (dateTime, page) {
    return this.buildUrl_0('/match/search/byMatchDateTimeIsAfter', this.parametersOf_0([to('matchDateTime', this.dateTimeMapper_0.toRemoteSingle_11rc$(dateTime)), to('page', page)]));
  };
  EndpointsImplementation.prototype.matchesByUserIdUrl_bm4lxs$ = function (userId, page) {
    return this.buildUrl_0('/match/search/byUserId', this.parametersOf_0([to('userId', userId), to('page', page)]));
  };
  EndpointsImplementation.prototype.matchesAvailableUrl_za3lpa$ = function (page) {
    return this.buildUrl_0('/match/search/availableMatches', this.parametersOf_0([to('page', page)]));
  };
  EndpointsImplementation.prototype.matchesNotFullUrl_za3lpa$ = function (page) {
    return this.buildUrl_0('/match/search/notFull', this.parametersOf_0([to('page', page)]));
  };
  EndpointsImplementation.prototype.allRegistrationsUrl_za3lpa$ = function (page) {
    return this.buildUrl_0('/registration', this.parametersOf_0([to('page', page)]));
  };
  EndpointsImplementation.prototype.registrationByIdUrl_s8cxhz$ = function (id) {
    return this.buildUrl_0('/registration/' + id.toString());
  };
  EndpointsImplementation.prototype.registrationsByUserUrl_bm4lxs$ = function (userId, page) {
    return this.buildUrl_0('/registration/search/byUserId', this.parametersOf_0([to('userId', userId), to('page', page)]));
  };
  EndpointsImplementation.prototype.registrationsByMatchIdUrl_yhmem3$ = function (matchId, page) {
    return this.buildUrl_0('/registration/search/byMatchId', this.parametersOf_0([to('matchId', matchId), to('page', page)]));
  };
  EndpointsImplementation.prototype.currentUserUrl = function () {
    return this.buildUrl_0('/currentUser');
  };
  EndpointsImplementation.prototype.userByIdUrl_61zpoe$ = function (userId) {
    return this.buildUrl_0('/user/' + userId);
  };
  EndpointsImplementation.prototype.usersByMatchIdUrl_yhmem3$ = function (matchId, page) {
    return this.buildUrl_0('/user/search/byMatchId', this.parametersOf_0([to('matchId', matchId), to('page', page)]));
  };
  EndpointsImplementation.prototype.isAccountVerifiedUrl = function () {
    return this.buildUrl_0('isAccountVerified');
  };
  EndpointsImplementation.prototype.isAccountSubscribedUrl = function () {
    return this.buildUrl_0('isAccountSubscribed');
  };
  EndpointsImplementation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndpointsImplementation',
    interfaces: [ArenaTournamentDatasource$Endpoints]
  };
  EndpointsImplementation.prototype.component1 = function () {
    return this.protocol;
  };
  EndpointsImplementation.prototype.component2 = function () {
    return this.host;
  };
  EndpointsImplementation.prototype.component3 = function () {
    return this.port;
  };
  EndpointsImplementation.prototype.component4_0 = function () {
    return this.dateTimeMapper_0;
  };
  EndpointsImplementation.prototype.copy_y301kv$ = function (protocol, host, port, dateTimeMapper) {
    return new EndpointsImplementation(protocol === void 0 ? this.protocol : protocol, host === void 0 ? this.host : host, port === void 0 ? this.port : port, dateTimeMapper === void 0 ? this.dateTimeMapper_0 : dateTimeMapper);
  };
  EndpointsImplementation.prototype.toString = function () {
    return 'EndpointsImplementation(protocol=' + Kotlin.toString(this.protocol) + (', host=' + Kotlin.toString(this.host)) + (', port=' + Kotlin.toString(this.port)) + (', dateTimeMapper=' + Kotlin.toString(this.dateTimeMapper_0)) + ')';
  };
  EndpointsImplementation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.protocol) | 0;
    result = result * 31 + Kotlin.hashCode(this.host) | 0;
    result = result * 31 + Kotlin.hashCode(this.port) | 0;
    result = result * 31 + Kotlin.hashCode(this.dateTimeMapper_0) | 0;
    return result;
  };
  EndpointsImplementation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.protocol, other.protocol) && Kotlin.equals(this.host, other.host) && Kotlin.equals(this.port, other.port) && Kotlin.equals(this.dateTimeMapper_0, other.dateTimeMapper_0)))));
  };
  function buildCommonKodein$lambda(closure$serverProtocol, closure$serverUrl, closure$serverPort) {
    return function ($receiver) {
      import_1($receiver, MappersModule_getInstance());
      import_1($receiver, SplittersModule_getInstance());
      import_1($receiver, RepositoriesModule_getInstance());
      import_1($receiver, DatasourcesModule_getInstance());
      import_1($receiver, NetworkModule_getInstance());
      import_1($receiver, UseCasesModule_getInstance());
      var $receiver_0 = $receiver.constant_obdoaf$('serverProtocol');
      var value = closure$serverProtocol;
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(PrimitiveClasses$stringClass);
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      $receiver_0.With_xhfjco$(erased$result, value);
      var $receiver_1 = $receiver.constant_obdoaf$('serverUrl');
      var value_0 = closure$serverUrl;
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(PrimitiveClasses$stringClass);
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      $receiver_1.With_xhfjco$(erased$result_0, value_0);
      var $receiver_2 = $receiver.constant_obdoaf$('serverPort');
      var value_1 = closure$serverPort;
      var erased$result_1;
      try {
        erased$result_1 = new JSTypeToken_init(PrimitiveClasses$intClass);
      }
       catch (ex_1) {
        if (Kotlin.isType(ex_1, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_1;
      }
      $receiver_2.With_xhfjco$(erased$result_1, value_1);
      return Unit;
    };
  }
  function buildCommonKodein(serverProtocol, serverUrl, serverPort) {
    return new Kodein$Module('COMMON_KODEIN', void 0, void 0, buildCommonKodein$lambda(serverProtocol, serverUrl, serverPort));
  }
  function DatasourcesModule() {
    DatasourcesModule_instance = this;
  }
  function DatasourcesModule$provideModule$lambda$lambda($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(HttpClient));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(ArenaTournamentDatasource$Endpoints));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, null);
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(TokenFactory));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    return new ArenaTournamentDatasourceImplementation(tmp$_0, tmp$_2, tmp$_3.Instance_xflu9r$(erased$result_1, null));
  }
  function DatasourcesModule$provideModule$lambda$lambda_0($receiver) {
    var tag = 'serverProtocol';
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, tag);
    var tag_0 = 'serverUrl';
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, tag_0);
    var tag_1 = 'serverPort';
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(PrimitiveClasses$intClass);
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    var tmp$_4 = tmp$_3.Instance_xflu9r$(erased$result_1, tag_1);
    var tmp$_5 = $receiver.dkodein;
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(DateTimeMapper));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    return new EndpointsImplementation(tmp$_0, tmp$_2, tmp$_4, tmp$_5.Instance_xflu9r$(erased$result_2, null));
  }
  function DatasourcesModule$provideModule$lambda($receiver) {
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentDatasource));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
    var tmp$_0 = $receiver.scope;
    var tmp$_0_0 = $receiver.contextType;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(ArenaTournamentDatasourceImplementation));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, DatasourcesModule$provideModule$lambda$lambda));
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(ArenaTournamentDatasource$Endpoints));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    var tmp$_1 = $receiver.Bind_lpxwra$(erased$result_1, null, null);
    var tmp$_2 = $receiver.scope;
    var tmp$_0_1 = $receiver.contextType;
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(EndpointsImplementation));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    tmp$_1.with_byf4r2$(new Singleton_init(tmp$_2, tmp$_0_1, erased$result_2, null, true, DatasourcesModule$provideModule$lambda$lambda_0));
    return Unit;
  }
  DatasourcesModule.prototype.provideModule = function () {
    return DatasourcesModule$provideModule$lambda;
  };
  DatasourcesModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DatasourcesModule',
    interfaces: [KodeinModuleProvider]
  };
  var DatasourcesModule_instance = null;
  function DatasourcesModule_getInstance() {
    if (DatasourcesModule_instance === null) {
      new DatasourcesModule();
    }
    return DatasourcesModule_instance;
  }
  function KodeinModuleProvider() {
  }
  KodeinModuleProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KodeinModuleProvider',
    interfaces: []
  };
  function getModule($receiver) {
    return new Kodein$Module(ensureNotNull(Kotlin.getKClassFromExpression($receiver).simpleName), void 0, void 0, $receiver.provideModule());
  }
  function import_0($receiver, moduleProvider, allowOverride) {
    if (allowOverride === void 0)
      allowOverride = false;
    $receiver.import_mxj0o6$(getModule(moduleProvider), allowOverride);
  }
  function import_1($receiver, moduleProvider, allowOverride) {
    if (allowOverride === void 0)
      allowOverride = false;
    $receiver.import_mxj0o6$(getModule(moduleProvider), allowOverride);
  }
  function MappersModule() {
    MappersModule_instance = this;
  }
  function MappersModule$provideModule$lambda$lambda($receiver) {
    return new AccountStatusMapper();
  }
  function MappersModule$provideModule$lambda$lambda_0($receiver) {
    return new AccountSubscriptionMapper();
  }
  function MappersModule$provideModule$lambda$lambda_1($receiver) {
    return new DateTimeMapper();
  }
  function MappersModule$provideModule$lambda$lambda_2($receiver) {
    return new GameMapper();
  }
  function MappersModule$provideModule$lambda$lambda_3($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(TournamentMapper));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(DateTimeMapper));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new MatchMapper(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function MappersModule$provideModule$lambda$lambda_4($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(MatchMapper));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(UserMapper));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new RegistrationMapper(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function MappersModule$provideModule$lambda$lambda_5($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GameMapper));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(UserMapper));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new TournamentMapper(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function MappersModule$provideModule$lambda$lambda_6($receiver) {
    return new UserMapper();
  }
  function MappersModule$provideModule$lambda$lambda_7($receiver) {
    return new ModeMapper();
  }
  function MappersModule$provideModule$lambda$lambda_8($receiver) {
    var tag = 'serverProtocol';
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, tag);
    var tag_0 = 'serverUrl';
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, tag_0);
    var tag_1 = 'serverPort';
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(PrimitiveClasses$intClass);
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    return new GameLinkMapper(tmp$_0, tmp$_2, tmp$_3.Instance_xflu9r$(erased$result_1, tag_1));
  }
  function MappersModule$provideModule$lambda$lambda_9($receiver) {
    var tag = 'serverProtocol';
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, tag);
    var tag_0 = 'serverUrl';
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, tag_0);
    var tag_1 = 'serverPort';
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(PrimitiveClasses$intClass);
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    return new MatchLinkMapper(tmp$_0, tmp$_2, tmp$_3.Instance_xflu9r$(erased$result_1, tag_1));
  }
  function MappersModule$provideModule$lambda$lambda_10($receiver) {
    var tag = 'serverProtocol';
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, tag);
    var tag_0 = 'serverUrl';
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, tag_0);
    var tag_1 = 'serverPort';
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(PrimitiveClasses$intClass);
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    return new TournamentLinkMapper(tmp$_0, tmp$_2, tmp$_3.Instance_xflu9r$(erased$result_1, tag_1));
  }
  function MappersModule$provideModule$lambda$lambda_11($receiver) {
    var tag = 'serverProtocol';
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, tag);
    var tag_0 = 'serverUrl';
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, tag_0);
    var tag_1 = 'serverPort';
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(PrimitiveClasses$intClass);
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    return new UserLinkMapper(tmp$_0, tmp$_2, tmp$_3.Instance_xflu9r$(erased$result_1, tag_1));
  }
  function MappersModule$provideModule$lambda$lambda_12($receiver) {
    var tag = 'serverProtocol';
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, tag);
    var tag_0 = 'serverUrl';
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(PrimitiveClasses$stringClass);
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, tag_0);
    var tag_1 = 'serverPort';
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(PrimitiveClasses$intClass);
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    return new ModeLinkMapper(tmp$_0, tmp$_2, tmp$_3.Instance_xflu9r$(erased$result_1, tag_1));
  }
  function MappersModule$provideModule$lambda($receiver) {
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(AccountStatusMapper));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
    var tmp$_0 = $receiver.scope;
    var tmp$_0_0 = $receiver.contextType;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(AccountStatusMapper));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, MappersModule$provideModule$lambda$lambda));
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(AccountSubscriptionMapper));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    var tmp$_1 = $receiver.Bind_lpxwra$(erased$result_1, null, null);
    var tmp$_2 = $receiver.scope;
    var tmp$_0_1 = $receiver.contextType;
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(AccountSubscriptionMapper));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    tmp$_1.with_byf4r2$(new Singleton_init(tmp$_2, tmp$_0_1, erased$result_2, null, true, MappersModule$provideModule$lambda$lambda_0));
    var erased$result_3;
    try {
      erased$result_3 = new JSTypeToken_init(getKClass(DateTimeMapper));
    }
     catch (ex_3) {
      if (Kotlin.isType(ex_3, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_3;
    }
    var tmp$_3 = $receiver.Bind_lpxwra$(erased$result_3, null, null);
    var tmp$_4 = $receiver.scope;
    var tmp$_0_2 = $receiver.contextType;
    var erased$result_4;
    try {
      erased$result_4 = new JSTypeToken_init(getKClass(DateTimeMapper));
    }
     catch (ex_4) {
      if (Kotlin.isType(ex_4, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_4;
    }
    tmp$_3.with_byf4r2$(new Singleton_init(tmp$_4, tmp$_0_2, erased$result_4, null, true, MappersModule$provideModule$lambda$lambda_1));
    var erased$result_5;
    try {
      erased$result_5 = new JSTypeToken_init(getKClass(GameMapper));
    }
     catch (ex_5) {
      if (Kotlin.isType(ex_5, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_5;
    }
    var tmp$_5 = $receiver.Bind_lpxwra$(erased$result_5, null, null);
    var tmp$_6 = $receiver.scope;
    var tmp$_0_3 = $receiver.contextType;
    var erased$result_6;
    try {
      erased$result_6 = new JSTypeToken_init(getKClass(GameMapper));
    }
     catch (ex_6) {
      if (Kotlin.isType(ex_6, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_6;
    }
    tmp$_5.with_byf4r2$(new Singleton_init(tmp$_6, tmp$_0_3, erased$result_6, null, true, MappersModule$provideModule$lambda$lambda_2));
    var erased$result_7;
    try {
      erased$result_7 = new JSTypeToken_init(getKClass(MatchMapper));
    }
     catch (ex_7) {
      if (Kotlin.isType(ex_7, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_7;
    }
    var tmp$_7 = $receiver.Bind_lpxwra$(erased$result_7, null, null);
    var tmp$_8 = $receiver.scope;
    var tmp$_0_4 = $receiver.contextType;
    var erased$result_8;
    try {
      erased$result_8 = new JSTypeToken_init(getKClass(MatchMapper));
    }
     catch (ex_8) {
      if (Kotlin.isType(ex_8, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_8;
    }
    tmp$_7.with_byf4r2$(new Singleton_init(tmp$_8, tmp$_0_4, erased$result_8, null, true, MappersModule$provideModule$lambda$lambda_3));
    var erased$result_9;
    try {
      erased$result_9 = new JSTypeToken_init(getKClass(RegistrationMapper));
    }
     catch (ex_9) {
      if (Kotlin.isType(ex_9, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_9;
    }
    var tmp$_9 = $receiver.Bind_lpxwra$(erased$result_9, null, null);
    var tmp$_10 = $receiver.scope;
    var tmp$_0_5 = $receiver.contextType;
    var erased$result_10;
    try {
      erased$result_10 = new JSTypeToken_init(getKClass(RegistrationMapper));
    }
     catch (ex_10) {
      if (Kotlin.isType(ex_10, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_10;
    }
    tmp$_9.with_byf4r2$(new Singleton_init(tmp$_10, tmp$_0_5, erased$result_10, null, true, MappersModule$provideModule$lambda$lambda_4));
    var erased$result_11;
    try {
      erased$result_11 = new JSTypeToken_init(getKClass(TournamentMapper));
    }
     catch (ex_11) {
      if (Kotlin.isType(ex_11, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_11;
    }
    var tmp$_11 = $receiver.Bind_lpxwra$(erased$result_11, null, null);
    var tmp$_12 = $receiver.scope;
    var tmp$_0_6 = $receiver.contextType;
    var erased$result_12;
    try {
      erased$result_12 = new JSTypeToken_init(getKClass(TournamentMapper));
    }
     catch (ex_12) {
      if (Kotlin.isType(ex_12, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_12;
    }
    tmp$_11.with_byf4r2$(new Singleton_init(tmp$_12, tmp$_0_6, erased$result_12, null, true, MappersModule$provideModule$lambda$lambda_5));
    var erased$result_13;
    try {
      erased$result_13 = new JSTypeToken_init(getKClass(UserMapper));
    }
     catch (ex_13) {
      if (Kotlin.isType(ex_13, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_13;
    }
    var tmp$_13 = $receiver.Bind_lpxwra$(erased$result_13, null, null);
    var tmp$_14 = $receiver.scope;
    var tmp$_0_7 = $receiver.contextType;
    var erased$result_14;
    try {
      erased$result_14 = new JSTypeToken_init(getKClass(UserMapper));
    }
     catch (ex_14) {
      if (Kotlin.isType(ex_14, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_14;
    }
    tmp$_13.with_byf4r2$(new Singleton_init(tmp$_14, tmp$_0_7, erased$result_14, null, true, MappersModule$provideModule$lambda$lambda_6));
    var erased$result_15;
    try {
      erased$result_15 = new JSTypeToken_init(getKClass(ModeMapper));
    }
     catch (ex_15) {
      if (Kotlin.isType(ex_15, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_15;
    }
    var tmp$_15 = $receiver.Bind_lpxwra$(erased$result_15, null, null);
    var tmp$_16 = $receiver.scope;
    var tmp$_0_8 = $receiver.contextType;
    var erased$result_16;
    try {
      erased$result_16 = new JSTypeToken_init(getKClass(ModeMapper));
    }
     catch (ex_16) {
      if (Kotlin.isType(ex_16, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_16;
    }
    tmp$_15.with_byf4r2$(new Singleton_init(tmp$_16, tmp$_0_8, erased$result_16, null, true, MappersModule$provideModule$lambda$lambda_7));
    var erased$result_17;
    try {
      erased$result_17 = new JSTypeToken_init(getKClass(GameLinkMapper));
    }
     catch (ex_17) {
      if (Kotlin.isType(ex_17, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_17;
    }
    var tmp$_17 = $receiver.Bind_lpxwra$(erased$result_17, null, null);
    var tmp$_18 = $receiver.scope;
    var tmp$_0_9 = $receiver.contextType;
    var erased$result_18;
    try {
      erased$result_18 = new JSTypeToken_init(getKClass(GameLinkMapper));
    }
     catch (ex_18) {
      if (Kotlin.isType(ex_18, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_18;
    }
    tmp$_17.with_byf4r2$(new Singleton_init(tmp$_18, tmp$_0_9, erased$result_18, null, true, MappersModule$provideModule$lambda$lambda_8));
    var erased$result_19;
    try {
      erased$result_19 = new JSTypeToken_init(getKClass(MatchLinkMapper));
    }
     catch (ex_19) {
      if (Kotlin.isType(ex_19, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_19;
    }
    var tmp$_19 = $receiver.Bind_lpxwra$(erased$result_19, null, null);
    var tmp$_20 = $receiver.scope;
    var tmp$_0_10 = $receiver.contextType;
    var erased$result_20;
    try {
      erased$result_20 = new JSTypeToken_init(getKClass(MatchLinkMapper));
    }
     catch (ex_20) {
      if (Kotlin.isType(ex_20, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_20;
    }
    tmp$_19.with_byf4r2$(new Singleton_init(tmp$_20, tmp$_0_10, erased$result_20, null, true, MappersModule$provideModule$lambda$lambda_9));
    var erased$result_21;
    try {
      erased$result_21 = new JSTypeToken_init(getKClass(TournamentLinkMapper));
    }
     catch (ex_21) {
      if (Kotlin.isType(ex_21, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_21;
    }
    var tmp$_21 = $receiver.Bind_lpxwra$(erased$result_21, null, null);
    var tmp$_22 = $receiver.scope;
    var tmp$_0_11 = $receiver.contextType;
    var erased$result_22;
    try {
      erased$result_22 = new JSTypeToken_init(getKClass(TournamentLinkMapper));
    }
     catch (ex_22) {
      if (Kotlin.isType(ex_22, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_22;
    }
    tmp$_21.with_byf4r2$(new Singleton_init(tmp$_22, tmp$_0_11, erased$result_22, null, true, MappersModule$provideModule$lambda$lambda_10));
    var erased$result_23;
    try {
      erased$result_23 = new JSTypeToken_init(getKClass(UserLinkMapper));
    }
     catch (ex_23) {
      if (Kotlin.isType(ex_23, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_23;
    }
    var tmp$_23 = $receiver.Bind_lpxwra$(erased$result_23, null, null);
    var tmp$_24 = $receiver.scope;
    var tmp$_0_12 = $receiver.contextType;
    var erased$result_24;
    try {
      erased$result_24 = new JSTypeToken_init(getKClass(UserLinkMapper));
    }
     catch (ex_24) {
      if (Kotlin.isType(ex_24, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_24;
    }
    tmp$_23.with_byf4r2$(new Singleton_init(tmp$_24, tmp$_0_12, erased$result_24, null, true, MappersModule$provideModule$lambda$lambda_11));
    var erased$result_25;
    try {
      erased$result_25 = new JSTypeToken_init(getKClass(ModeLinkMapper));
    }
     catch (ex_25) {
      if (Kotlin.isType(ex_25, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_25;
    }
    var tmp$_25 = $receiver.Bind_lpxwra$(erased$result_25, null, null);
    var tmp$_26 = $receiver.scope;
    var tmp$_0_13 = $receiver.contextType;
    var erased$result_26;
    try {
      erased$result_26 = new JSTypeToken_init(getKClass(ModeLinkMapper));
    }
     catch (ex_26) {
      if (Kotlin.isType(ex_26, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_26;
    }
    tmp$_25.with_byf4r2$(new Singleton_init(tmp$_26, tmp$_0_13, erased$result_26, null, true, MappersModule$provideModule$lambda$lambda_12));
    return Unit;
  }
  MappersModule.prototype.provideModule = function () {
    return MappersModule$provideModule$lambda;
  };
  MappersModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MappersModule',
    interfaces: [KodeinModuleProvider]
  };
  var MappersModule_instance = null;
  function MappersModule_getInstance() {
    if (MappersModule_instance === null) {
      new MappersModule();
    }
    return MappersModule_instance;
  }
  function RepositoriesModule() {
    RepositoriesModule_instance = this;
  }
  function RepositoriesModule$provideModule$lambda$lambda($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentDatasource));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GameMapper));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    var tmp$_2 = tmp$_1.Instance_xflu9r$(erased$result_0, null);
    var tmp$_3 = $receiver.dkodein;
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(ModeMapper));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    var tmp$_4 = tmp$_3.Instance_xflu9r$(erased$result_1, null);
    var tmp$_5 = $receiver.dkodein;
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(MatchMapper));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    var tmp$_6 = tmp$_5.Instance_xflu9r$(erased$result_2, null);
    var tmp$_7 = $receiver.dkodein;
    var erased$result_3;
    try {
      erased$result_3 = new JSTypeToken_init(getKClass(TournamentMapper));
    }
     catch (ex_3) {
      if (Kotlin.isType(ex_3, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_3;
    }
    var tmp$_8 = tmp$_7.Instance_xflu9r$(erased$result_3, null);
    var tmp$_9 = $receiver.dkodein;
    var erased$result_4;
    try {
      erased$result_4 = new JSTypeToken_init(getKClass(RegistrationMapper));
    }
     catch (ex_4) {
      if (Kotlin.isType(ex_4, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_4;
    }
    var tmp$_10 = tmp$_9.Instance_xflu9r$(erased$result_4, null);
    var tmp$_11 = $receiver.dkodein;
    var erased$result_5;
    try {
      erased$result_5 = new JSTypeToken_init(getKClass(UserMapper));
    }
     catch (ex_5) {
      if (Kotlin.isType(ex_5, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_5;
    }
    var tmp$_12 = tmp$_11.Instance_xflu9r$(erased$result_5, null);
    var tmp$_13 = $receiver.dkodein;
    var erased$result_6;
    try {
      erased$result_6 = new JSTypeToken_init(getKClass(AccountStatusMapper));
    }
     catch (ex_6) {
      if (Kotlin.isType(ex_6, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_6;
    }
    var tmp$_14 = tmp$_13.Instance_xflu9r$(erased$result_6, null);
    var tmp$_15 = $receiver.dkodein;
    var erased$result_7;
    try {
      erased$result_7 = new JSTypeToken_init(getKClass(AccountSubscriptionMapper));
    }
     catch (ex_7) {
      if (Kotlin.isType(ex_7, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_7;
    }
    var tmp$_16 = tmp$_15.Instance_xflu9r$(erased$result_7, null);
    var tmp$_17 = $receiver.dkodein;
    var erased$result_8;
    try {
      erased$result_8 = new JSTypeToken_init(getKClass(TournamentSplitter));
    }
     catch (ex_8) {
      if (Kotlin.isType(ex_8, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_8;
    }
    var tmp$_18 = tmp$_17.Instance_xflu9r$(erased$result_8, null);
    var tmp$_19 = $receiver.dkodein;
    var erased$result_9;
    try {
      erased$result_9 = new JSTypeToken_init(getKClass(MatchSplitter));
    }
     catch (ex_9) {
      if (Kotlin.isType(ex_9, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_9;
    }
    var tmp$_20 = tmp$_19.Instance_xflu9r$(erased$result_9, null);
    var tmp$_21 = $receiver.dkodein;
    var erased$result_10;
    try {
      erased$result_10 = new JSTypeToken_init(getKClass(RegistrationSplitter));
    }
     catch (ex_10) {
      if (Kotlin.isType(ex_10, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_10;
    }
    var tmp$_22 = tmp$_21.Instance_xflu9r$(erased$result_10, null);
    var tmp$_23 = $receiver.dkodein;
    var erased$result_11;
    try {
      erased$result_11 = new JSTypeToken_init(getKClass(UserLinkMapper));
    }
     catch (ex_11) {
      if (Kotlin.isType(ex_11, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_11;
    }
    var tmp$_24 = tmp$_23.Instance_xflu9r$(erased$result_11, null);
    var tmp$_25 = $receiver.dkodein;
    var erased$result_12;
    try {
      erased$result_12 = new JSTypeToken_init(getKClass(GameLinkMapper));
    }
     catch (ex_12) {
      if (Kotlin.isType(ex_12, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_12;
    }
    var tmp$_26 = tmp$_25.Instance_xflu9r$(erased$result_12, null);
    var tmp$_27 = $receiver.dkodein;
    var erased$result_13;
    try {
      erased$result_13 = new JSTypeToken_init(getKClass(ModeLinkMapper));
    }
     catch (ex_13) {
      if (Kotlin.isType(ex_13, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_13;
    }
    var tmp$_28 = tmp$_27.Instance_xflu9r$(erased$result_13, null);
    var tmp$_29 = $receiver.dkodein;
    var erased$result_14;
    try {
      erased$result_14 = new JSTypeToken_init(getKClass(TournamentLinkMapper));
    }
     catch (ex_14) {
      if (Kotlin.isType(ex_14, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_14;
    }
    var tmp$_30 = tmp$_29.Instance_xflu9r$(erased$result_14, null);
    var tmp$_31 = $receiver.dkodein;
    var erased$result_15;
    try {
      erased$result_15 = new JSTypeToken_init(getKClass(MatchLinkMapper));
    }
     catch (ex_15) {
      if (Kotlin.isType(ex_15, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_15;
    }
    return new ArenaTournamentRepositoryImplementation(tmp$_0, tmp$_2, tmp$_4, tmp$_6, tmp$_8, tmp$_10, tmp$_12, tmp$_14, tmp$_16, tmp$_18, tmp$_20, tmp$_22, tmp$_24, tmp$_26, tmp$_28, tmp$_30, tmp$_31.Instance_xflu9r$(erased$result_15, null));
  }
  function RepositoriesModule$provideModule$lambda($receiver) {
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
    var tmp$_0 = $receiver.scope;
    var tmp$_0_0 = $receiver.contextType;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(ArenaTournamentRepositoryImplementation));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, RepositoriesModule$provideModule$lambda$lambda));
    return Unit;
  }
  RepositoriesModule.prototype.provideModule = function () {
    return RepositoriesModule$provideModule$lambda;
  };
  RepositoriesModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RepositoriesModule',
    interfaces: [KodeinModuleProvider]
  };
  var RepositoriesModule_instance = null;
  function RepositoriesModule_getInstance() {
    if (RepositoriesModule_instance === null) {
      new RepositoriesModule();
    }
    return RepositoriesModule_instance;
  }
  function SplittersModule() {
    SplittersModule_instance = this;
  }
  function SplittersModule$provideModule$lambda$lambda($receiver) {
    return new GameSplitter();
  }
  function SplittersModule$provideModule$lambda$lambda_0($receiver) {
    return new MatchSplitter();
  }
  function SplittersModule$provideModule$lambda$lambda_1($receiver) {
    return new RegistrationSplitter();
  }
  function SplittersModule$provideModule$lambda$lambda_2($receiver) {
    return new TournamentSplitter();
  }
  function SplittersModule$provideModule$lambda($receiver) {
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GameSplitter));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
    var tmp$_0 = $receiver.scope;
    var tmp$_0_0 = $receiver.contextType;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GameSplitter));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, SplittersModule$provideModule$lambda$lambda));
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(MatchSplitter));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    var tmp$_1 = $receiver.Bind_lpxwra$(erased$result_1, null, null);
    var tmp$_2 = $receiver.scope;
    var tmp$_0_1 = $receiver.contextType;
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(MatchSplitter));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    tmp$_1.with_byf4r2$(new Singleton_init(tmp$_2, tmp$_0_1, erased$result_2, null, true, SplittersModule$provideModule$lambda$lambda_0));
    var erased$result_3;
    try {
      erased$result_3 = new JSTypeToken_init(getKClass(RegistrationSplitter));
    }
     catch (ex_3) {
      if (Kotlin.isType(ex_3, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_3;
    }
    var tmp$_3 = $receiver.Bind_lpxwra$(erased$result_3, null, null);
    var tmp$_4 = $receiver.scope;
    var tmp$_0_2 = $receiver.contextType;
    var erased$result_4;
    try {
      erased$result_4 = new JSTypeToken_init(getKClass(RegistrationSplitter));
    }
     catch (ex_4) {
      if (Kotlin.isType(ex_4, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_4;
    }
    tmp$_3.with_byf4r2$(new Singleton_init(tmp$_4, tmp$_0_2, erased$result_4, null, true, SplittersModule$provideModule$lambda$lambda_1));
    var erased$result_5;
    try {
      erased$result_5 = new JSTypeToken_init(getKClass(TournamentSplitter));
    }
     catch (ex_5) {
      if (Kotlin.isType(ex_5, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_5;
    }
    var tmp$_5 = $receiver.Bind_lpxwra$(erased$result_5, null, null);
    var tmp$_6 = $receiver.scope;
    var tmp$_0_3 = $receiver.contextType;
    var erased$result_6;
    try {
      erased$result_6 = new JSTypeToken_init(getKClass(TournamentSplitter));
    }
     catch (ex_6) {
      if (Kotlin.isType(ex_6, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_6;
    }
    tmp$_5.with_byf4r2$(new Singleton_init(tmp$_6, tmp$_0_3, erased$result_6, null, true, SplittersModule$provideModule$lambda$lambda_2));
    return Unit;
  }
  SplittersModule.prototype.provideModule = function () {
    return SplittersModule$provideModule$lambda;
  };
  SplittersModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SplittersModule',
    interfaces: [KodeinModuleProvider]
  };
  var SplittersModule_instance = null;
  function SplittersModule_getInstance() {
    if (SplittersModule_instance === null) {
      new SplittersModule();
    }
    return SplittersModule_instance;
  }
  function UseCasesModule() {
    UseCasesModule_instance = this;
  }
  function UseCasesModule$provideModule$lambda$lambda($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetGamesByModeUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_0($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetGamesContainingNameUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_1($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetTournamentsByGameUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_2($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetTournamentsByModePerPageUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GetMatchesByTournamentUseCase));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new GetTournamentsByModeUseCase(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_3($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetTournamentsByModePerPageUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_4($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetTournamentsContainingTitleUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_5($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetAvailableMatchesPerPageUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GetAllRegistrationsByMatchUseCase));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new GetAllAvailableMatchesUseCase(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_6($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GetUserInfoUseCase));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new GetAllMatchesByUserUseCase(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_7($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GetUserInfoUseCase));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new GetCreatedTournamentsByAdminUseCase(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_8($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetAvailableMatchesPerPageUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_9($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetUserInfoUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_10($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetAccountVerificationStatusUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_11($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new IsSubscribedAccountUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_12($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetShowCaseTournamentsUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_13($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetMatchesByTournamentUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_14($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetAllRegistrationsByMatchUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_15($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new GetRegistrationsByUserUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_16($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetMatchesByTournamentUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$_0 = tmp$.Instance_xflu9r$(erased$result, null);
    var tmp$_1 = $receiver.dkodein;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GetAllRegistrationsByMatchUseCase));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    return new GetRegistrationsByTournamentUseCase(tmp$_0, tmp$_1.Instance_xflu9r$(erased$result_0, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_17($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new CreateUserUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_18($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new CreateGameModeUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_19($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new CreateGameUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_20($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new CreateTournamentUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_21($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new CreateMatchUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda$lambda_22($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(ArenaTournamentRepository));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new CreateRegistrationUseCase(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function UseCasesModule$provideModule$lambda($receiver) {
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetGamesByModeUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
    var tmp$_0 = $receiver.scope;
    var tmp$_0_0 = $receiver.contextType;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(GetGamesByModeUseCase));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, UseCasesModule$provideModule$lambda$lambda));
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(GetGamesContainingNameUseCase));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    var tmp$_1 = $receiver.Bind_lpxwra$(erased$result_1, null, null);
    var tmp$_2 = $receiver.scope;
    var tmp$_0_1 = $receiver.contextType;
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(GetGamesContainingNameUseCase));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    tmp$_1.with_byf4r2$(new Singleton_init(tmp$_2, tmp$_0_1, erased$result_2, null, true, UseCasesModule$provideModule$lambda$lambda_0));
    var erased$result_3;
    try {
      erased$result_3 = new JSTypeToken_init(getKClass(GetTournamentsByGameUseCase));
    }
     catch (ex_3) {
      if (Kotlin.isType(ex_3, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_3;
    }
    var tmp$_3 = $receiver.Bind_lpxwra$(erased$result_3, null, null);
    var tmp$_4 = $receiver.scope;
    var tmp$_0_2 = $receiver.contextType;
    var erased$result_4;
    try {
      erased$result_4 = new JSTypeToken_init(getKClass(GetTournamentsByGameUseCase));
    }
     catch (ex_4) {
      if (Kotlin.isType(ex_4, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_4;
    }
    tmp$_3.with_byf4r2$(new Singleton_init(tmp$_4, tmp$_0_2, erased$result_4, null, true, UseCasesModule$provideModule$lambda$lambda_1));
    var erased$result_5;
    try {
      erased$result_5 = new JSTypeToken_init(getKClass(GetTournamentsByModeUseCase));
    }
     catch (ex_5) {
      if (Kotlin.isType(ex_5, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_5;
    }
    var tmp$_5 = $receiver.Bind_lpxwra$(erased$result_5, null, null);
    var tmp$_6 = $receiver.scope;
    var tmp$_0_3 = $receiver.contextType;
    var erased$result_6;
    try {
      erased$result_6 = new JSTypeToken_init(getKClass(GetTournamentsByModeUseCase));
    }
     catch (ex_6) {
      if (Kotlin.isType(ex_6, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_6;
    }
    tmp$_5.with_byf4r2$(new Singleton_init(tmp$_6, tmp$_0_3, erased$result_6, null, true, UseCasesModule$provideModule$lambda$lambda_2));
    var erased$result_7;
    try {
      erased$result_7 = new JSTypeToken_init(getKClass(GetTournamentsByModePerPageUseCase));
    }
     catch (ex_7) {
      if (Kotlin.isType(ex_7, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_7;
    }
    var tmp$_7 = $receiver.Bind_lpxwra$(erased$result_7, null, null);
    var tmp$_8 = $receiver.scope;
    var tmp$_0_4 = $receiver.contextType;
    var erased$result_8;
    try {
      erased$result_8 = new JSTypeToken_init(getKClass(GetTournamentsByModePerPageUseCase));
    }
     catch (ex_8) {
      if (Kotlin.isType(ex_8, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_8;
    }
    tmp$_7.with_byf4r2$(new Singleton_init(tmp$_8, tmp$_0_4, erased$result_8, null, true, UseCasesModule$provideModule$lambda$lambda_3));
    var erased$result_9;
    try {
      erased$result_9 = new JSTypeToken_init(getKClass(GetTournamentsContainingTitleUseCase));
    }
     catch (ex_9) {
      if (Kotlin.isType(ex_9, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_9;
    }
    var tmp$_9 = $receiver.Bind_lpxwra$(erased$result_9, null, null);
    var tmp$_10 = $receiver.scope;
    var tmp$_0_5 = $receiver.contextType;
    var erased$result_10;
    try {
      erased$result_10 = new JSTypeToken_init(getKClass(GetTournamentsContainingTitleUseCase));
    }
     catch (ex_10) {
      if (Kotlin.isType(ex_10, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_10;
    }
    tmp$_9.with_byf4r2$(new Singleton_init(tmp$_10, tmp$_0_5, erased$result_10, null, true, UseCasesModule$provideModule$lambda$lambda_4));
    var erased$result_11;
    try {
      erased$result_11 = new JSTypeToken_init(getKClass(GetAllAvailableMatchesUseCase));
    }
     catch (ex_11) {
      if (Kotlin.isType(ex_11, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_11;
    }
    var tmp$_11 = $receiver.Bind_lpxwra$(erased$result_11, null, null);
    var tmp$_12 = $receiver.scope;
    var tmp$_0_6 = $receiver.contextType;
    var erased$result_12;
    try {
      erased$result_12 = new JSTypeToken_init(getKClass(GetAllAvailableMatchesUseCase));
    }
     catch (ex_12) {
      if (Kotlin.isType(ex_12, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_12;
    }
    tmp$_11.with_byf4r2$(new Singleton_init(tmp$_12, tmp$_0_6, erased$result_12, null, true, UseCasesModule$provideModule$lambda$lambda_5));
    var erased$result_13;
    try {
      erased$result_13 = new JSTypeToken_init(getKClass(GetAllMatchesByUserUseCase));
    }
     catch (ex_13) {
      if (Kotlin.isType(ex_13, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_13;
    }
    var tmp$_13 = $receiver.Bind_lpxwra$(erased$result_13, null, null);
    var tmp$_14 = $receiver.scope;
    var tmp$_0_7 = $receiver.contextType;
    var erased$result_14;
    try {
      erased$result_14 = new JSTypeToken_init(getKClass(GetAllMatchesByUserUseCase));
    }
     catch (ex_14) {
      if (Kotlin.isType(ex_14, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_14;
    }
    tmp$_13.with_byf4r2$(new Singleton_init(tmp$_14, tmp$_0_7, erased$result_14, null, true, UseCasesModule$provideModule$lambda$lambda_6));
    var erased$result_15;
    try {
      erased$result_15 = new JSTypeToken_init(getKClass(GetCreatedTournamentsByAdminUseCase));
    }
     catch (ex_15) {
      if (Kotlin.isType(ex_15, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_15;
    }
    var tmp$_15 = $receiver.Bind_lpxwra$(erased$result_15, null, null);
    var tmp$_16 = $receiver.scope;
    var tmp$_0_8 = $receiver.contextType;
    var erased$result_16;
    try {
      erased$result_16 = new JSTypeToken_init(getKClass(GetCreatedTournamentsByAdminUseCase));
    }
     catch (ex_16) {
      if (Kotlin.isType(ex_16, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_16;
    }
    tmp$_15.with_byf4r2$(new Singleton_init(tmp$_16, tmp$_0_8, erased$result_16, null, true, UseCasesModule$provideModule$lambda$lambda_7));
    var erased$result_17;
    try {
      erased$result_17 = new JSTypeToken_init(getKClass(GetAvailableMatchesPerPageUseCase));
    }
     catch (ex_17) {
      if (Kotlin.isType(ex_17, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_17;
    }
    var tmp$_17 = $receiver.Bind_lpxwra$(erased$result_17, null, null);
    var tmp$_18 = $receiver.scope;
    var tmp$_0_9 = $receiver.contextType;
    var erased$result_18;
    try {
      erased$result_18 = new JSTypeToken_init(getKClass(GetAvailableMatchesPerPageUseCase));
    }
     catch (ex_18) {
      if (Kotlin.isType(ex_18, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_18;
    }
    tmp$_17.with_byf4r2$(new Singleton_init(tmp$_18, tmp$_0_9, erased$result_18, null, true, UseCasesModule$provideModule$lambda$lambda_8));
    var erased$result_19;
    try {
      erased$result_19 = new JSTypeToken_init(getKClass(GetUserInfoUseCase));
    }
     catch (ex_19) {
      if (Kotlin.isType(ex_19, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_19;
    }
    var tmp$_19 = $receiver.Bind_lpxwra$(erased$result_19, null, null);
    var tmp$_20 = $receiver.scope;
    var tmp$_0_10 = $receiver.contextType;
    var erased$result_20;
    try {
      erased$result_20 = new JSTypeToken_init(getKClass(GetUserInfoUseCase));
    }
     catch (ex_20) {
      if (Kotlin.isType(ex_20, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_20;
    }
    tmp$_19.with_byf4r2$(new Singleton_init(tmp$_20, tmp$_0_10, erased$result_20, null, true, UseCasesModule$provideModule$lambda$lambda_9));
    var erased$result_21;
    try {
      erased$result_21 = new JSTypeToken_init(getKClass(GetAccountVerificationStatusUseCase));
    }
     catch (ex_21) {
      if (Kotlin.isType(ex_21, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_21;
    }
    var tmp$_21 = $receiver.Bind_lpxwra$(erased$result_21, null, null);
    var tmp$_22 = $receiver.scope;
    var tmp$_0_11 = $receiver.contextType;
    var erased$result_22;
    try {
      erased$result_22 = new JSTypeToken_init(getKClass(GetAccountVerificationStatusUseCase));
    }
     catch (ex_22) {
      if (Kotlin.isType(ex_22, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_22;
    }
    tmp$_21.with_byf4r2$(new Singleton_init(tmp$_22, tmp$_0_11, erased$result_22, null, true, UseCasesModule$provideModule$lambda$lambda_10));
    var erased$result_23;
    try {
      erased$result_23 = new JSTypeToken_init(getKClass(IsSubscribedAccountUseCase));
    }
     catch (ex_23) {
      if (Kotlin.isType(ex_23, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_23;
    }
    var tmp$_23 = $receiver.Bind_lpxwra$(erased$result_23, null, null);
    var tmp$_24 = $receiver.scope;
    var tmp$_0_12 = $receiver.contextType;
    var erased$result_24;
    try {
      erased$result_24 = new JSTypeToken_init(getKClass(IsSubscribedAccountUseCase));
    }
     catch (ex_24) {
      if (Kotlin.isType(ex_24, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_24;
    }
    tmp$_23.with_byf4r2$(new Singleton_init(tmp$_24, tmp$_0_12, erased$result_24, null, true, UseCasesModule$provideModule$lambda$lambda_11));
    var erased$result_25;
    try {
      erased$result_25 = new JSTypeToken_init(getKClass(GetShowCaseTournamentsUseCase));
    }
     catch (ex_25) {
      if (Kotlin.isType(ex_25, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_25;
    }
    var tmp$_25 = $receiver.Bind_lpxwra$(erased$result_25, null, null);
    var tmp$_26 = $receiver.scope;
    var tmp$_0_13 = $receiver.contextType;
    var erased$result_26;
    try {
      erased$result_26 = new JSTypeToken_init(getKClass(GetShowCaseTournamentsUseCase));
    }
     catch (ex_26) {
      if (Kotlin.isType(ex_26, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_26;
    }
    tmp$_25.with_byf4r2$(new Singleton_init(tmp$_26, tmp$_0_13, erased$result_26, null, true, UseCasesModule$provideModule$lambda$lambda_12));
    var erased$result_27;
    try {
      erased$result_27 = new JSTypeToken_init(getKClass(GetMatchesByTournamentUseCase));
    }
     catch (ex_27) {
      if (Kotlin.isType(ex_27, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_27;
    }
    var tmp$_27 = $receiver.Bind_lpxwra$(erased$result_27, null, null);
    var tmp$_28 = $receiver.scope;
    var tmp$_0_14 = $receiver.contextType;
    var erased$result_28;
    try {
      erased$result_28 = new JSTypeToken_init(getKClass(GetMatchesByTournamentUseCase));
    }
     catch (ex_28) {
      if (Kotlin.isType(ex_28, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_28;
    }
    tmp$_27.with_byf4r2$(new Singleton_init(tmp$_28, tmp$_0_14, erased$result_28, null, true, UseCasesModule$provideModule$lambda$lambda_13));
    var erased$result_29;
    try {
      erased$result_29 = new JSTypeToken_init(getKClass(GetAllRegistrationsByMatchUseCase));
    }
     catch (ex_29) {
      if (Kotlin.isType(ex_29, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_29;
    }
    var tmp$_29 = $receiver.Bind_lpxwra$(erased$result_29, null, null);
    var tmp$_30 = $receiver.scope;
    var tmp$_0_15 = $receiver.contextType;
    var erased$result_30;
    try {
      erased$result_30 = new JSTypeToken_init(getKClass(GetAllRegistrationsByMatchUseCase));
    }
     catch (ex_30) {
      if (Kotlin.isType(ex_30, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_30;
    }
    tmp$_29.with_byf4r2$(new Singleton_init(tmp$_30, tmp$_0_15, erased$result_30, null, true, UseCasesModule$provideModule$lambda$lambda_14));
    var erased$result_31;
    try {
      erased$result_31 = new JSTypeToken_init(getKClass(GetRegistrationsByUserUseCase));
    }
     catch (ex_31) {
      if (Kotlin.isType(ex_31, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_31;
    }
    var tmp$_31 = $receiver.Bind_lpxwra$(erased$result_31, null, null);
    var tmp$_32 = $receiver.scope;
    var tmp$_0_16 = $receiver.contextType;
    var erased$result_32;
    try {
      erased$result_32 = new JSTypeToken_init(getKClass(GetRegistrationsByUserUseCase));
    }
     catch (ex_32) {
      if (Kotlin.isType(ex_32, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_32;
    }
    tmp$_31.with_byf4r2$(new Singleton_init(tmp$_32, tmp$_0_16, erased$result_32, null, true, UseCasesModule$provideModule$lambda$lambda_15));
    var erased$result_33;
    try {
      erased$result_33 = new JSTypeToken_init(getKClass(GetRegistrationsByTournamentUseCase));
    }
     catch (ex_33) {
      if (Kotlin.isType(ex_33, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_33;
    }
    var tmp$_33 = $receiver.Bind_lpxwra$(erased$result_33, null, null);
    var tmp$_34 = $receiver.scope;
    var tmp$_0_17 = $receiver.contextType;
    var erased$result_34;
    try {
      erased$result_34 = new JSTypeToken_init(getKClass(GetRegistrationsByTournamentUseCase));
    }
     catch (ex_34) {
      if (Kotlin.isType(ex_34, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_34;
    }
    tmp$_33.with_byf4r2$(new Singleton_init(tmp$_34, tmp$_0_17, erased$result_34, null, true, UseCasesModule$provideModule$lambda$lambda_16));
    var erased$result_35;
    try {
      erased$result_35 = new JSTypeToken_init(getKClass(CreateUserUseCase));
    }
     catch (ex_35) {
      if (Kotlin.isType(ex_35, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_35;
    }
    var tmp$_35 = $receiver.Bind_lpxwra$(erased$result_35, null, null);
    var tmp$_36 = $receiver.scope;
    var tmp$_0_18 = $receiver.contextType;
    var erased$result_36;
    try {
      erased$result_36 = new JSTypeToken_init(getKClass(CreateUserUseCase));
    }
     catch (ex_36) {
      if (Kotlin.isType(ex_36, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_36;
    }
    tmp$_35.with_byf4r2$(new Singleton_init(tmp$_36, tmp$_0_18, erased$result_36, null, true, UseCasesModule$provideModule$lambda$lambda_17));
    var erased$result_37;
    try {
      erased$result_37 = new JSTypeToken_init(getKClass(CreateGameModeUseCase));
    }
     catch (ex_37) {
      if (Kotlin.isType(ex_37, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_37;
    }
    var tmp$_37 = $receiver.Bind_lpxwra$(erased$result_37, null, null);
    var tmp$_38 = $receiver.scope;
    var tmp$_0_19 = $receiver.contextType;
    var erased$result_38;
    try {
      erased$result_38 = new JSTypeToken_init(getKClass(CreateGameModeUseCase));
    }
     catch (ex_38) {
      if (Kotlin.isType(ex_38, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_38;
    }
    tmp$_37.with_byf4r2$(new Singleton_init(tmp$_38, tmp$_0_19, erased$result_38, null, true, UseCasesModule$provideModule$lambda$lambda_18));
    var erased$result_39;
    try {
      erased$result_39 = new JSTypeToken_init(getKClass(CreateGameUseCase));
    }
     catch (ex_39) {
      if (Kotlin.isType(ex_39, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_39;
    }
    var tmp$_39 = $receiver.Bind_lpxwra$(erased$result_39, null, null);
    var tmp$_40 = $receiver.scope;
    var tmp$_0_20 = $receiver.contextType;
    var erased$result_40;
    try {
      erased$result_40 = new JSTypeToken_init(getKClass(CreateGameUseCase));
    }
     catch (ex_40) {
      if (Kotlin.isType(ex_40, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_40;
    }
    tmp$_39.with_byf4r2$(new Singleton_init(tmp$_40, tmp$_0_20, erased$result_40, null, true, UseCasesModule$provideModule$lambda$lambda_19));
    var erased$result_41;
    try {
      erased$result_41 = new JSTypeToken_init(getKClass(CreateTournamentUseCase));
    }
     catch (ex_41) {
      if (Kotlin.isType(ex_41, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_41;
    }
    var tmp$_41 = $receiver.Bind_lpxwra$(erased$result_41, null, null);
    var tmp$_42 = $receiver.scope;
    var tmp$_0_21 = $receiver.contextType;
    var erased$result_42;
    try {
      erased$result_42 = new JSTypeToken_init(getKClass(CreateTournamentUseCase));
    }
     catch (ex_42) {
      if (Kotlin.isType(ex_42, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_42;
    }
    tmp$_41.with_byf4r2$(new Singleton_init(tmp$_42, tmp$_0_21, erased$result_42, null, true, UseCasesModule$provideModule$lambda$lambda_20));
    var erased$result_43;
    try {
      erased$result_43 = new JSTypeToken_init(getKClass(CreateMatchUseCase));
    }
     catch (ex_43) {
      if (Kotlin.isType(ex_43, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_43;
    }
    var tmp$_43 = $receiver.Bind_lpxwra$(erased$result_43, null, null);
    var tmp$_44 = $receiver.scope;
    var tmp$_0_22 = $receiver.contextType;
    var erased$result_44;
    try {
      erased$result_44 = new JSTypeToken_init(getKClass(CreateMatchUseCase));
    }
     catch (ex_44) {
      if (Kotlin.isType(ex_44, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_44;
    }
    tmp$_43.with_byf4r2$(new Singleton_init(tmp$_44, tmp$_0_22, erased$result_44, null, true, UseCasesModule$provideModule$lambda$lambda_21));
    var erased$result_45;
    try {
      erased$result_45 = new JSTypeToken_init(getKClass(CreateRegistrationUseCase));
    }
     catch (ex_45) {
      if (Kotlin.isType(ex_45, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_45;
    }
    var tmp$_45 = $receiver.Bind_lpxwra$(erased$result_45, null, null);
    var tmp$_46 = $receiver.scope;
    var tmp$_0_23 = $receiver.contextType;
    var erased$result_46;
    try {
      erased$result_46 = new JSTypeToken_init(getKClass(CreateRegistrationUseCase));
    }
     catch (ex_46) {
      if (Kotlin.isType(ex_46, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_46;
    }
    tmp$_45.with_byf4r2$(new Singleton_init(tmp$_46, tmp$_0_23, erased$result_46, null, true, UseCasesModule$provideModule$lambda$lambda_22));
    return Unit;
  }
  UseCasesModule.prototype.provideModule = function () {
    return UseCasesModule$provideModule$lambda;
  };
  UseCasesModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UseCasesModule',
    interfaces: [KodeinModuleProvider]
  };
  var UseCasesModule_instance = null;
  function UseCasesModule_getInstance() {
    if (UseCasesModule_instance === null) {
      new UseCasesModule();
    }
    return UseCasesModule_instance;
  }
  function JsDependencyContainer(serverProtocol, serverUrl, serverPort, factory) {
    this.kodein_jt5821$_0 = Kodein.Companion.lazy_z3stfd$(void 0, JsDependencyContainer$kodein$lambda(serverProtocol, serverUrl, serverPort, factory));
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(JsCreateGame));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    this.createGame_hue3et$_0 = Instance(this, erased$result, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$createGame_metadata);
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(JsGetGamesByMode));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    this.getGamesByMode_lvwdri$_0 = Instance(this, erased$result_0, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getGamesMode_metadata);
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(JsGetGamesContainingName));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    this.getGamesContainingName_l1h0q7$_0 = Instance(this, erased$result_1, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getGamesContainingName_metadata);
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(JsCreateMatch));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    this.createMatch_c8db48$_0 = Instance(this, erased$result_2, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$createMatch_metadata);
    var erased$result_3;
    try {
      erased$result_3 = new JSTypeToken_init(getKClass(JsGetAllAvailableMatches));
    }
     catch (ex_3) {
      if (Kotlin.isType(ex_3, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_3;
    }
    this.getAllAvailableMatches_ma2xz2$_0 = Instance(this, erased$result_3, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getAllAvailableMatches_metadata);
    var erased$result_4;
    try {
      erased$result_4 = new JSTypeToken_init(getKClass(JsGetAllMatchesByUser));
    }
     catch (ex_4) {
      if (Kotlin.isType(ex_4, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_4;
    }
    this.getAllMatchesByUser_xnsbyv$_0 = Instance(this, erased$result_4, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getAllMatchesByUser_metadata);
    var erased$result_5;
    try {
      erased$result_5 = new JSTypeToken_init(getKClass(JsGetMatchesByTournament));
    }
     catch (ex_5) {
      if (Kotlin.isType(ex_5, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_5;
    }
    this.getAllMatchesByTournament_eivc93$_0 = Instance(this, erased$result_5, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getAllMatchesByTournament_metadata);
    var erased$result_6;
    try {
      erased$result_6 = new JSTypeToken_init(getKClass(JsCreateGameMode));
    }
     catch (ex_6) {
      if (Kotlin.isType(ex_6, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_6;
    }
    this.createGameModeUseCase_964xxh$_0 = Instance(this, erased$result_6, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$createGameMode_metadata);
    var erased$result_7;
    try {
      erased$result_7 = new JSTypeToken_init(getKClass(JsCreateRegistration));
    }
     catch (ex_7) {
      if (Kotlin.isType(ex_7, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_7;
    }
    this.createRegistration_rudhya$_0 = Instance(this, erased$result_7, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$createRegistration_metadata);
    var erased$result_8;
    try {
      erased$result_8 = new JSTypeToken_init(getKClass(JsGetAllRegistrationsByMatch));
    }
     catch (ex_8) {
      if (Kotlin.isType(ex_8, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_8;
    }
    this.getAllRegistrationsByMatch_9mzs6s$_0 = Instance(this, erased$result_8, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getAllRegistrationsByMatch_metadata);
    var erased$result_9;
    try {
      erased$result_9 = new JSTypeToken_init(getKClass(JsGetRegistrationsByTournament));
    }
     catch (ex_9) {
      if (Kotlin.isType(ex_9, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_9;
    }
    this.getAllRegistrationsByTournament_9wuydq$_0 = Instance(this, erased$result_9, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getAllRegistrationsByTournament_metadata);
    var erased$result_10;
    try {
      erased$result_10 = new JSTypeToken_init(getKClass(JsGetAllMatchesByUser));
    }
     catch (ex_10) {
      if (Kotlin.isType(ex_10, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_10;
    }
    this.getAllRegistrationsByUser_8q1oxc$_0 = Instance(this, erased$result_10, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getAllRegistrationsByUser_metadata);
    var erased$result_11;
    try {
      erased$result_11 = new JSTypeToken_init(getKClass(JsCreateTournament));
    }
     catch (ex_11) {
      if (Kotlin.isType(ex_11, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_11;
    }
    this.createTournament_b06eb2$_0 = Instance(this, erased$result_11, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$createTournament_metadata);
    var erased$result_12;
    try {
      erased$result_12 = new JSTypeToken_init(getKClass(JsGetCreatedTournamentsByAdmin));
    }
     catch (ex_12) {
      if (Kotlin.isType(ex_12, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_12;
    }
    this.getCreatedTournamentsByAdmin_san0kt$_0 = Instance(this, erased$result_12, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getCreatedTournamentsByAdmin_metadata);
    var erased$result_13;
    try {
      erased$result_13 = new JSTypeToken_init(getKClass(JsGetShowcaseTournaments));
    }
     catch (ex_13) {
      if (Kotlin.isType(ex_13, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_13;
    }
    this.getShowcaseTournaments_7b27tg$_0 = Instance(this, erased$result_13, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getShowcaseTournaments_metadata);
    var erased$result_14;
    try {
      erased$result_14 = new JSTypeToken_init(getKClass(JsGetTournamentsByGame));
    }
     catch (ex_14) {
      if (Kotlin.isType(ex_14, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_14;
    }
    this.getTournamentsByGame_r4581i$_0 = Instance(this, erased$result_14, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getTournamentsByGame_metadata);
    var erased$result_15;
    try {
      erased$result_15 = new JSTypeToken_init(getKClass(JsGetTournamentsByMode));
    }
     catch (ex_15) {
      if (Kotlin.isType(ex_15, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_15;
    }
    this.getTournamentsByMode_r7oqqt$_0 = Instance(this, erased$result_15, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getTournamentsByMode_metadata);
    var erased$result_16;
    try {
      erased$result_16 = new JSTypeToken_init(getKClass(JsGetTournamentsContainingTitle));
    }
     catch (ex_16) {
      if (Kotlin.isType(ex_16, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_16;
    }
    this.getTournamentsContainingTitle_ozwror$_0 = Instance(this, erased$result_16, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getTournamentsContainingTitle_metadata);
    var erased$result_17;
    try {
      erased$result_17 = new JSTypeToken_init(getKClass(JsCreateUser));
    }
     catch (ex_17) {
      if (Kotlin.isType(ex_17, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_17;
    }
    this.createUser_i2ejv0$_0 = Instance(this, erased$result_17, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$createUser_metadata);
    var erased$result_18;
    try {
      erased$result_18 = new JSTypeToken_init(getKClass(JsGetAccountVerificationStatus));
    }
     catch (ex_18) {
      if (Kotlin.isType(ex_18, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_18;
    }
    this.getAccountVerificationStatusUseCase_6ksjv6$_0 = Instance(this, erased$result_18, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getAccountVerificationStatusUseCase_metadata);
    var erased$result_19;
    try {
      erased$result_19 = new JSTypeToken_init(getKClass(JsGetUserInfo));
    }
     catch (ex_19) {
      if (Kotlin.isType(ex_19, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_19;
    }
    this.getUserInfo_tdtuzy$_0 = Instance(this, erased$result_19, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$getUserInfo_metadata);
    var erased$result_20;
    try {
      erased$result_20 = new JSTypeToken_init(getKClass(JsIsSubscribedAccount));
    }
     catch (ex_20) {
      if (Kotlin.isType(ex_20, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_20;
    }
    this.isSubscribed_dh7emp$_0 = Instance(this, erased$result_20, null).provideDelegate_tpuvb9$(this, JsDependencyContainer$isSubscribed_metadata);
  }
  var JsDependencyContainer$kodein_metadata = new PropertyMetadata('kodein');
  Object.defineProperty(JsDependencyContainer.prototype, 'kodein', {
    get: function () {
      return this.kodein_jt5821$_0.getValue_n5byny$(this, JsDependencyContainer$kodein_metadata);
    }
  });
  var JsDependencyContainer$createGame_metadata = new PropertyMetadata('createGame');
  Object.defineProperty(JsDependencyContainer.prototype, 'createGame', {
    get: function () {
      return this.createGame_hue3et$_0.value;
    }
  });
  var JsDependencyContainer$getGamesMode_metadata = new PropertyMetadata('getGamesMode');
  Object.defineProperty(JsDependencyContainer.prototype, 'getGamesByMode', {
    get: function () {
      return this.getGamesByMode_lvwdri$_0.value;
    }
  });
  var JsDependencyContainer$getGamesContainingName_metadata = new PropertyMetadata('getGamesContainingName');
  Object.defineProperty(JsDependencyContainer.prototype, 'getGamesContainingName', {
    get: function () {
      return this.getGamesContainingName_l1h0q7$_0.value;
    }
  });
  var JsDependencyContainer$createMatch_metadata = new PropertyMetadata('createMatch');
  Object.defineProperty(JsDependencyContainer.prototype, 'createMatch', {
    get: function () {
      return this.createMatch_c8db48$_0.value;
    }
  });
  var JsDependencyContainer$getAllAvailableMatches_metadata = new PropertyMetadata('getAllAvailableMatches');
  Object.defineProperty(JsDependencyContainer.prototype, 'getAllAvailableMatches', {
    get: function () {
      return this.getAllAvailableMatches_ma2xz2$_0.value;
    }
  });
  var JsDependencyContainer$getAllMatchesByUser_metadata = new PropertyMetadata('getAllMatchesByUser');
  Object.defineProperty(JsDependencyContainer.prototype, 'getAllMatchesByUser', {
    get: function () {
      return this.getAllMatchesByUser_xnsbyv$_0.value;
    }
  });
  var JsDependencyContainer$getAllMatchesByTournament_metadata = new PropertyMetadata('getAllMatchesByTournament');
  Object.defineProperty(JsDependencyContainer.prototype, 'getAllMatchesByTournament', {
    get: function () {
      return this.getAllMatchesByTournament_eivc93$_0.value;
    }
  });
  var JsDependencyContainer$createGameMode_metadata = new PropertyMetadata('createGameMode');
  Object.defineProperty(JsDependencyContainer.prototype, 'createGameModeUseCase', {
    get: function () {
      return this.createGameModeUseCase_964xxh$_0.value;
    }
  });
  var JsDependencyContainer$createRegistration_metadata = new PropertyMetadata('createRegistration');
  Object.defineProperty(JsDependencyContainer.prototype, 'createRegistration', {
    get: function () {
      return this.createRegistration_rudhya$_0.value;
    }
  });
  var JsDependencyContainer$getAllRegistrationsByMatch_metadata = new PropertyMetadata('getAllRegistrationsByMatch');
  Object.defineProperty(JsDependencyContainer.prototype, 'getAllRegistrationsByMatch', {
    get: function () {
      return this.getAllRegistrationsByMatch_9mzs6s$_0.value;
    }
  });
  var JsDependencyContainer$getAllRegistrationsByTournament_metadata = new PropertyMetadata('getAllRegistrationsByTournament');
  Object.defineProperty(JsDependencyContainer.prototype, 'getAllRegistrationsByTournament', {
    get: function () {
      return this.getAllRegistrationsByTournament_9wuydq$_0.value;
    }
  });
  var JsDependencyContainer$getAllRegistrationsByUser_metadata = new PropertyMetadata('getAllRegistrationsByUser');
  Object.defineProperty(JsDependencyContainer.prototype, 'getAllRegistrationsByUser', {
    get: function () {
      return this.getAllRegistrationsByUser_8q1oxc$_0.value;
    }
  });
  var JsDependencyContainer$createTournament_metadata = new PropertyMetadata('createTournament');
  Object.defineProperty(JsDependencyContainer.prototype, 'createTournament', {
    get: function () {
      return this.createTournament_b06eb2$_0.value;
    }
  });
  var JsDependencyContainer$getCreatedTournamentsByAdmin_metadata = new PropertyMetadata('getCreatedTournamentsByAdmin');
  Object.defineProperty(JsDependencyContainer.prototype, 'getCreatedTournamentsByAdmin', {
    get: function () {
      return this.getCreatedTournamentsByAdmin_san0kt$_0.value;
    }
  });
  var JsDependencyContainer$getShowcaseTournaments_metadata = new PropertyMetadata('getShowcaseTournaments');
  Object.defineProperty(JsDependencyContainer.prototype, 'getShowcaseTournaments', {
    get: function () {
      return this.getShowcaseTournaments_7b27tg$_0.value;
    }
  });
  var JsDependencyContainer$getTournamentsByGame_metadata = new PropertyMetadata('getTournamentsByGame');
  Object.defineProperty(JsDependencyContainer.prototype, 'getTournamentsByGame', {
    get: function () {
      return this.getTournamentsByGame_r4581i$_0.value;
    }
  });
  var JsDependencyContainer$getTournamentsByMode_metadata = new PropertyMetadata('getTournamentsByMode');
  Object.defineProperty(JsDependencyContainer.prototype, 'getTournamentsByMode', {
    get: function () {
      return this.getTournamentsByMode_r7oqqt$_0.value;
    }
  });
  var JsDependencyContainer$getTournamentsContainingTitle_metadata = new PropertyMetadata('getTournamentsContainingTitle');
  Object.defineProperty(JsDependencyContainer.prototype, 'getTournamentsContainingTitle', {
    get: function () {
      return this.getTournamentsContainingTitle_ozwror$_0.value;
    }
  });
  var JsDependencyContainer$createUser_metadata = new PropertyMetadata('createUser');
  Object.defineProperty(JsDependencyContainer.prototype, 'createUser', {
    get: function () {
      return this.createUser_i2ejv0$_0.value;
    }
  });
  var JsDependencyContainer$getAccountVerificationStatusUseCase_metadata = new PropertyMetadata('getAccountVerificationStatusUseCase');
  Object.defineProperty(JsDependencyContainer.prototype, 'getAccountVerificationStatusUseCase', {
    get: function () {
      return this.getAccountVerificationStatusUseCase_6ksjv6$_0.value;
    }
  });
  var JsDependencyContainer$getUserInfo_metadata = new PropertyMetadata('getUserInfo');
  Object.defineProperty(JsDependencyContainer.prototype, 'getUserInfo', {
    get: function () {
      return this.getUserInfo_tdtuzy$_0.value;
    }
  });
  var JsDependencyContainer$isSubscribed_metadata = new PropertyMetadata('isSubscribed');
  Object.defineProperty(JsDependencyContainer.prototype, 'isSubscribed', {
    get: function () {
      return this.isSubscribed_dh7emp$_0.value;
    }
  });
  function JsDependencyContainer$kodein$lambda$lambda$ObjectLiteral(closure$factory) {
    this.factory_mf627q$_0 = closure$factory;
  }
  Object.defineProperty(JsDependencyContainer$kodein$lambda$lambda$ObjectLiteral.prototype, 'factory', {
    get: function () {
      return this.factory_mf627q$_0;
    }
  });
  JsDependencyContainer$kodein$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TokenFactory]
  };
  function JsDependencyContainer$kodein$lambda$lambda(closure$factory) {
    return function ($receiver) {
      return new JsDependencyContainer$kodein$lambda$lambda$ObjectLiteral(closure$factory);
    };
  }
  function JsDependencyContainer$kodein$lambda(closure$serverProtocol, closure$serverUrl, closure$serverPort, closure$factory) {
    return function ($receiver) {
      $receiver.import_mxj0o6$(buildCommonKodein(closure$serverProtocol, closure$serverUrl, closure$serverPort));
      import_0($receiver, JsUseCasesModule_getInstance());
      var erased$result;
      try {
        erased$result = new JSTypeToken_init(getKClass(TokenFactory));
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex;
      }
      var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
      var creator = JsDependencyContainer$kodein$lambda$lambda(closure$factory);
      var tmp$_0 = $receiver.scope;
      var tmp$_0_0 = $receiver.contextType;
      var erased$result_0;
      try {
        erased$result_0 = new JSTypeToken_init(getKClass(JsDependencyContainer$kodein$lambda$lambda$ObjectLiteral));
      }
       catch (ex_0) {
        if (Kotlin.isType(ex_0, Throwable)) {
          throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
        }
         else
          throw ex_0;
      }
      tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, creator));
      return Unit;
    };
  }
  JsDependencyContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsDependencyContainer',
    interfaces: [KodeinAware]
  };
  function JsUseCasesModule() {
    JsUseCasesModule_instance = this;
  }
  function JsUseCasesModule$provideModule$lambda$lambda($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(CreateGameUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsCreateGame(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_0($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetGamesByModeUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetGamesByMode(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_1($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetGamesContainingNameUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetGamesContainingName(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_2($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(CreateGameModeUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsCreateGameMode(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_3($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(CreateMatchUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsCreateMatch(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_4($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetAllAvailableMatchesUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetAllAvailableMatches(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_5($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetAllMatchesByUserUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetAllMatchesByUser(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_6($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetMatchesByTournamentUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetMatchesByTournament(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_7($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(CreateRegistrationUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsCreateRegistration(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_8($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetAllRegistrationsByMatchUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetAllRegistrationsByMatch(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_9($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetRegistrationsByTournamentUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetRegistrationsByTournament(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_10($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetRegistrationsByUserUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetRegistrationsByUser(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_11($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(CreateTournamentUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsCreateTournament(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_12($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetShowCaseTournamentsUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetShowcaseTournaments(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_13($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetTournamentsByGameUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetTournamentsByGame(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_14($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetTournamentsByModeUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetTournamentsByMode(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_15($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetTournamentsContainingTitleUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetTournamentsContainingTitle(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_16($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetCreatedTournamentsByAdminUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetCreatedTournamentsByAdmin(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_17($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(CreateUserUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsCreateUser(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_18($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetUserInfoUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetUserInfo(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_19($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(CreateUserUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsIsSubscribedAccount(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda$lambda_20($receiver) {
    var tmp$ = $receiver.dkodein;
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(GetAccountVerificationStatusUseCase));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    return new JsGetAccountVerificationStatus(tmp$.Instance_xflu9r$(erased$result, null));
  }
  function JsUseCasesModule$provideModule$lambda($receiver) {
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(JsCreateGame));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
    var tmp$_0 = $receiver.scope;
    var tmp$_0_0 = $receiver.contextType;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(JsCreateGame));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, JsUseCasesModule$provideModule$lambda$lambda));
    var erased$result_1;
    try {
      erased$result_1 = new JSTypeToken_init(getKClass(JsGetGamesByMode));
    }
     catch (ex_1) {
      if (Kotlin.isType(ex_1, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_1;
    }
    var tmp$_1 = $receiver.Bind_lpxwra$(erased$result_1, null, null);
    var tmp$_2 = $receiver.scope;
    var tmp$_0_1 = $receiver.contextType;
    var erased$result_2;
    try {
      erased$result_2 = new JSTypeToken_init(getKClass(JsGetGamesByMode));
    }
     catch (ex_2) {
      if (Kotlin.isType(ex_2, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_2;
    }
    tmp$_1.with_byf4r2$(new Singleton_init(tmp$_2, tmp$_0_1, erased$result_2, null, true, JsUseCasesModule$provideModule$lambda$lambda_0));
    var erased$result_3;
    try {
      erased$result_3 = new JSTypeToken_init(getKClass(JsGetGamesContainingName));
    }
     catch (ex_3) {
      if (Kotlin.isType(ex_3, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_3;
    }
    var tmp$_3 = $receiver.Bind_lpxwra$(erased$result_3, null, null);
    var tmp$_4 = $receiver.scope;
    var tmp$_0_2 = $receiver.contextType;
    var erased$result_4;
    try {
      erased$result_4 = new JSTypeToken_init(getKClass(JsGetGamesContainingName));
    }
     catch (ex_4) {
      if (Kotlin.isType(ex_4, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_4;
    }
    tmp$_3.with_byf4r2$(new Singleton_init(tmp$_4, tmp$_0_2, erased$result_4, null, true, JsUseCasesModule$provideModule$lambda$lambda_1));
    var erased$result_5;
    try {
      erased$result_5 = new JSTypeToken_init(getKClass(JsCreateGameMode));
    }
     catch (ex_5) {
      if (Kotlin.isType(ex_5, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_5;
    }
    var tmp$_5 = $receiver.Bind_lpxwra$(erased$result_5, null, null);
    var tmp$_6 = $receiver.scope;
    var tmp$_0_3 = $receiver.contextType;
    var erased$result_6;
    try {
      erased$result_6 = new JSTypeToken_init(getKClass(JsCreateGameMode));
    }
     catch (ex_6) {
      if (Kotlin.isType(ex_6, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_6;
    }
    tmp$_5.with_byf4r2$(new Singleton_init(tmp$_6, tmp$_0_3, erased$result_6, null, true, JsUseCasesModule$provideModule$lambda$lambda_2));
    var erased$result_7;
    try {
      erased$result_7 = new JSTypeToken_init(getKClass(JsCreateMatch));
    }
     catch (ex_7) {
      if (Kotlin.isType(ex_7, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_7;
    }
    var tmp$_7 = $receiver.Bind_lpxwra$(erased$result_7, null, null);
    var tmp$_8 = $receiver.scope;
    var tmp$_0_4 = $receiver.contextType;
    var erased$result_8;
    try {
      erased$result_8 = new JSTypeToken_init(getKClass(JsCreateMatch));
    }
     catch (ex_8) {
      if (Kotlin.isType(ex_8, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_8;
    }
    tmp$_7.with_byf4r2$(new Singleton_init(tmp$_8, tmp$_0_4, erased$result_8, null, true, JsUseCasesModule$provideModule$lambda$lambda_3));
    var erased$result_9;
    try {
      erased$result_9 = new JSTypeToken_init(getKClass(JsGetAllAvailableMatches));
    }
     catch (ex_9) {
      if (Kotlin.isType(ex_9, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_9;
    }
    var tmp$_9 = $receiver.Bind_lpxwra$(erased$result_9, null, null);
    var tmp$_10 = $receiver.scope;
    var tmp$_0_5 = $receiver.contextType;
    var erased$result_10;
    try {
      erased$result_10 = new JSTypeToken_init(getKClass(JsGetAllAvailableMatches));
    }
     catch (ex_10) {
      if (Kotlin.isType(ex_10, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_10;
    }
    tmp$_9.with_byf4r2$(new Singleton_init(tmp$_10, tmp$_0_5, erased$result_10, null, true, JsUseCasesModule$provideModule$lambda$lambda_4));
    var erased$result_11;
    try {
      erased$result_11 = new JSTypeToken_init(getKClass(JsGetAllMatchesByUser));
    }
     catch (ex_11) {
      if (Kotlin.isType(ex_11, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_11;
    }
    var tmp$_11 = $receiver.Bind_lpxwra$(erased$result_11, null, null);
    var tmp$_12 = $receiver.scope;
    var tmp$_0_6 = $receiver.contextType;
    var erased$result_12;
    try {
      erased$result_12 = new JSTypeToken_init(getKClass(JsGetAllMatchesByUser));
    }
     catch (ex_12) {
      if (Kotlin.isType(ex_12, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_12;
    }
    tmp$_11.with_byf4r2$(new Singleton_init(tmp$_12, tmp$_0_6, erased$result_12, null, true, JsUseCasesModule$provideModule$lambda$lambda_5));
    var erased$result_13;
    try {
      erased$result_13 = new JSTypeToken_init(getKClass(JsGetMatchesByTournament));
    }
     catch (ex_13) {
      if (Kotlin.isType(ex_13, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_13;
    }
    var tmp$_13 = $receiver.Bind_lpxwra$(erased$result_13, null, null);
    var tmp$_14 = $receiver.scope;
    var tmp$_0_7 = $receiver.contextType;
    var erased$result_14;
    try {
      erased$result_14 = new JSTypeToken_init(getKClass(JsGetMatchesByTournament));
    }
     catch (ex_14) {
      if (Kotlin.isType(ex_14, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_14;
    }
    tmp$_13.with_byf4r2$(new Singleton_init(tmp$_14, tmp$_0_7, erased$result_14, null, true, JsUseCasesModule$provideModule$lambda$lambda_6));
    var erased$result_15;
    try {
      erased$result_15 = new JSTypeToken_init(getKClass(JsCreateRegistration));
    }
     catch (ex_15) {
      if (Kotlin.isType(ex_15, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_15;
    }
    var tmp$_15 = $receiver.Bind_lpxwra$(erased$result_15, null, null);
    var tmp$_16 = $receiver.scope;
    var tmp$_0_8 = $receiver.contextType;
    var erased$result_16;
    try {
      erased$result_16 = new JSTypeToken_init(getKClass(JsCreateRegistration));
    }
     catch (ex_16) {
      if (Kotlin.isType(ex_16, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_16;
    }
    tmp$_15.with_byf4r2$(new Singleton_init(tmp$_16, tmp$_0_8, erased$result_16, null, true, JsUseCasesModule$provideModule$lambda$lambda_7));
    var erased$result_17;
    try {
      erased$result_17 = new JSTypeToken_init(getKClass(JsGetAllRegistrationsByMatch));
    }
     catch (ex_17) {
      if (Kotlin.isType(ex_17, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_17;
    }
    var tmp$_17 = $receiver.Bind_lpxwra$(erased$result_17, null, null);
    var tmp$_18 = $receiver.scope;
    var tmp$_0_9 = $receiver.contextType;
    var erased$result_18;
    try {
      erased$result_18 = new JSTypeToken_init(getKClass(JsGetAllRegistrationsByMatch));
    }
     catch (ex_18) {
      if (Kotlin.isType(ex_18, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_18;
    }
    tmp$_17.with_byf4r2$(new Singleton_init(tmp$_18, tmp$_0_9, erased$result_18, null, true, JsUseCasesModule$provideModule$lambda$lambda_8));
    var erased$result_19;
    try {
      erased$result_19 = new JSTypeToken_init(getKClass(JsGetRegistrationsByTournament));
    }
     catch (ex_19) {
      if (Kotlin.isType(ex_19, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_19;
    }
    var tmp$_19 = $receiver.Bind_lpxwra$(erased$result_19, null, null);
    var tmp$_20 = $receiver.scope;
    var tmp$_0_10 = $receiver.contextType;
    var erased$result_20;
    try {
      erased$result_20 = new JSTypeToken_init(getKClass(JsGetRegistrationsByTournament));
    }
     catch (ex_20) {
      if (Kotlin.isType(ex_20, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_20;
    }
    tmp$_19.with_byf4r2$(new Singleton_init(tmp$_20, tmp$_0_10, erased$result_20, null, true, JsUseCasesModule$provideModule$lambda$lambda_9));
    var erased$result_21;
    try {
      erased$result_21 = new JSTypeToken_init(getKClass(JsGetRegistrationsByUser));
    }
     catch (ex_21) {
      if (Kotlin.isType(ex_21, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_21;
    }
    var tmp$_21 = $receiver.Bind_lpxwra$(erased$result_21, null, null);
    var tmp$_22 = $receiver.scope;
    var tmp$_0_11 = $receiver.contextType;
    var erased$result_22;
    try {
      erased$result_22 = new JSTypeToken_init(getKClass(JsGetRegistrationsByUser));
    }
     catch (ex_22) {
      if (Kotlin.isType(ex_22, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_22;
    }
    tmp$_21.with_byf4r2$(new Singleton_init(tmp$_22, tmp$_0_11, erased$result_22, null, true, JsUseCasesModule$provideModule$lambda$lambda_10));
    var erased$result_23;
    try {
      erased$result_23 = new JSTypeToken_init(getKClass(JsCreateTournament));
    }
     catch (ex_23) {
      if (Kotlin.isType(ex_23, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_23;
    }
    var tmp$_23 = $receiver.Bind_lpxwra$(erased$result_23, null, null);
    var tmp$_24 = $receiver.scope;
    var tmp$_0_12 = $receiver.contextType;
    var erased$result_24;
    try {
      erased$result_24 = new JSTypeToken_init(getKClass(JsCreateTournament));
    }
     catch (ex_24) {
      if (Kotlin.isType(ex_24, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_24;
    }
    tmp$_23.with_byf4r2$(new Singleton_init(tmp$_24, tmp$_0_12, erased$result_24, null, true, JsUseCasesModule$provideModule$lambda$lambda_11));
    var erased$result_25;
    try {
      erased$result_25 = new JSTypeToken_init(getKClass(JsGetShowcaseTournaments));
    }
     catch (ex_25) {
      if (Kotlin.isType(ex_25, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_25;
    }
    var tmp$_25 = $receiver.Bind_lpxwra$(erased$result_25, null, null);
    var tmp$_26 = $receiver.scope;
    var tmp$_0_13 = $receiver.contextType;
    var erased$result_26;
    try {
      erased$result_26 = new JSTypeToken_init(getKClass(JsGetShowcaseTournaments));
    }
     catch (ex_26) {
      if (Kotlin.isType(ex_26, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_26;
    }
    tmp$_25.with_byf4r2$(new Singleton_init(tmp$_26, tmp$_0_13, erased$result_26, null, true, JsUseCasesModule$provideModule$lambda$lambda_12));
    var erased$result_27;
    try {
      erased$result_27 = new JSTypeToken_init(getKClass(JsGetTournamentsByGame));
    }
     catch (ex_27) {
      if (Kotlin.isType(ex_27, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_27;
    }
    var tmp$_27 = $receiver.Bind_lpxwra$(erased$result_27, null, null);
    var tmp$_28 = $receiver.scope;
    var tmp$_0_14 = $receiver.contextType;
    var erased$result_28;
    try {
      erased$result_28 = new JSTypeToken_init(getKClass(JsGetTournamentsByGame));
    }
     catch (ex_28) {
      if (Kotlin.isType(ex_28, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_28;
    }
    tmp$_27.with_byf4r2$(new Singleton_init(tmp$_28, tmp$_0_14, erased$result_28, null, true, JsUseCasesModule$provideModule$lambda$lambda_13));
    var erased$result_29;
    try {
      erased$result_29 = new JSTypeToken_init(getKClass(JsGetTournamentsByMode));
    }
     catch (ex_29) {
      if (Kotlin.isType(ex_29, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_29;
    }
    var tmp$_29 = $receiver.Bind_lpxwra$(erased$result_29, null, null);
    var tmp$_30 = $receiver.scope;
    var tmp$_0_15 = $receiver.contextType;
    var erased$result_30;
    try {
      erased$result_30 = new JSTypeToken_init(getKClass(JsGetTournamentsByMode));
    }
     catch (ex_30) {
      if (Kotlin.isType(ex_30, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_30;
    }
    tmp$_29.with_byf4r2$(new Singleton_init(tmp$_30, tmp$_0_15, erased$result_30, null, true, JsUseCasesModule$provideModule$lambda$lambda_14));
    var erased$result_31;
    try {
      erased$result_31 = new JSTypeToken_init(getKClass(JsGetTournamentsContainingTitle));
    }
     catch (ex_31) {
      if (Kotlin.isType(ex_31, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_31;
    }
    var tmp$_31 = $receiver.Bind_lpxwra$(erased$result_31, null, null);
    var tmp$_32 = $receiver.scope;
    var tmp$_0_16 = $receiver.contextType;
    var erased$result_32;
    try {
      erased$result_32 = new JSTypeToken_init(getKClass(JsGetTournamentsContainingTitle));
    }
     catch (ex_32) {
      if (Kotlin.isType(ex_32, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_32;
    }
    tmp$_31.with_byf4r2$(new Singleton_init(tmp$_32, tmp$_0_16, erased$result_32, null, true, JsUseCasesModule$provideModule$lambda$lambda_15));
    var erased$result_33;
    try {
      erased$result_33 = new JSTypeToken_init(getKClass(JsGetCreatedTournamentsByAdmin));
    }
     catch (ex_33) {
      if (Kotlin.isType(ex_33, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_33;
    }
    var tmp$_33 = $receiver.Bind_lpxwra$(erased$result_33, null, null);
    var tmp$_34 = $receiver.scope;
    var tmp$_0_17 = $receiver.contextType;
    var erased$result_34;
    try {
      erased$result_34 = new JSTypeToken_init(getKClass(JsGetCreatedTournamentsByAdmin));
    }
     catch (ex_34) {
      if (Kotlin.isType(ex_34, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_34;
    }
    tmp$_33.with_byf4r2$(new Singleton_init(tmp$_34, tmp$_0_17, erased$result_34, null, true, JsUseCasesModule$provideModule$lambda$lambda_16));
    var erased$result_35;
    try {
      erased$result_35 = new JSTypeToken_init(getKClass(JsCreateUser));
    }
     catch (ex_35) {
      if (Kotlin.isType(ex_35, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_35;
    }
    var tmp$_35 = $receiver.Bind_lpxwra$(erased$result_35, null, null);
    var tmp$_36 = $receiver.scope;
    var tmp$_0_18 = $receiver.contextType;
    var erased$result_36;
    try {
      erased$result_36 = new JSTypeToken_init(getKClass(JsCreateUser));
    }
     catch (ex_36) {
      if (Kotlin.isType(ex_36, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_36;
    }
    tmp$_35.with_byf4r2$(new Singleton_init(tmp$_36, tmp$_0_18, erased$result_36, null, true, JsUseCasesModule$provideModule$lambda$lambda_17));
    var erased$result_37;
    try {
      erased$result_37 = new JSTypeToken_init(getKClass(JsGetUserInfo));
    }
     catch (ex_37) {
      if (Kotlin.isType(ex_37, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_37;
    }
    var tmp$_37 = $receiver.Bind_lpxwra$(erased$result_37, null, null);
    var tmp$_38 = $receiver.scope;
    var tmp$_0_19 = $receiver.contextType;
    var erased$result_38;
    try {
      erased$result_38 = new JSTypeToken_init(getKClass(JsGetUserInfo));
    }
     catch (ex_38) {
      if (Kotlin.isType(ex_38, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_38;
    }
    tmp$_37.with_byf4r2$(new Singleton_init(tmp$_38, tmp$_0_19, erased$result_38, null, true, JsUseCasesModule$provideModule$lambda$lambda_18));
    var erased$result_39;
    try {
      erased$result_39 = new JSTypeToken_init(getKClass(JsIsSubscribedAccount));
    }
     catch (ex_39) {
      if (Kotlin.isType(ex_39, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_39;
    }
    var tmp$_39 = $receiver.Bind_lpxwra$(erased$result_39, null, null);
    var tmp$_40 = $receiver.scope;
    var tmp$_0_20 = $receiver.contextType;
    var erased$result_40;
    try {
      erased$result_40 = new JSTypeToken_init(getKClass(JsIsSubscribedAccount));
    }
     catch (ex_40) {
      if (Kotlin.isType(ex_40, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_40;
    }
    tmp$_39.with_byf4r2$(new Singleton_init(tmp$_40, tmp$_0_20, erased$result_40, null, true, JsUseCasesModule$provideModule$lambda$lambda_19));
    var erased$result_41;
    try {
      erased$result_41 = new JSTypeToken_init(getKClass(JsGetAccountVerificationStatus));
    }
     catch (ex_41) {
      if (Kotlin.isType(ex_41, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_41;
    }
    var tmp$_41 = $receiver.Bind_lpxwra$(erased$result_41, null, null);
    var tmp$_42 = $receiver.scope;
    var tmp$_0_21 = $receiver.contextType;
    var erased$result_42;
    try {
      erased$result_42 = new JSTypeToken_init(getKClass(JsGetAccountVerificationStatus));
    }
     catch (ex_42) {
      if (Kotlin.isType(ex_42, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_42;
    }
    tmp$_41.with_byf4r2$(new Singleton_init(tmp$_42, tmp$_0_21, erased$result_42, null, true, JsUseCasesModule$provideModule$lambda$lambda_20));
    return Unit;
  }
  JsUseCasesModule.prototype.provideModule = function () {
    return JsUseCasesModule$provideModule$lambda;
  };
  JsUseCasesModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsUseCasesModule',
    interfaces: [KodeinModuleProvider]
  };
  var JsUseCasesModule_instance = null;
  function JsUseCasesModule_getInstance() {
    if (JsUseCasesModule_instance === null) {
      new JsUseCasesModule();
    }
    return JsUseCasesModule_instance;
  }
  function NetworkModule() {
    NetworkModule_instance = this;
  }
  function NetworkModule$provideModule$lambda$lambda$lambda$lambda($receiver) {
    $receiver.serializer = new KotlinxSerializer();
    return Unit;
  }
  function NetworkModule$provideModule$lambda$lambda$lambda($receiver) {
    $receiver.install_xlxg29$(JsonFeature.Feature, NetworkModule$provideModule$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function NetworkModule$provideModule$lambda$lambda($receiver) {
    return HttpClient_0(js.Js, NetworkModule$provideModule$lambda$lambda$lambda);
  }
  function NetworkModule$provideModule$lambda($receiver) {
    var erased$result;
    try {
      erased$result = new JSTypeToken_init(getKClass(HttpClient));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex;
    }
    var tmp$ = $receiver.Bind_lpxwra$(erased$result, null, null);
    var tmp$_0 = $receiver.scope;
    var tmp$_0_0 = $receiver.contextType;
    var erased$result_0;
    try {
      erased$result_0 = new JSTypeToken_init(getKClass(HttpClient));
    }
     catch (ex_0) {
      if (Kotlin.isType(ex_0, Throwable)) {
        throw IllegalArgumentException_init('Could not get KClass. Note that Kotlin does NOT support reflection over primitives.');
      }
       else
        throw ex_0;
    }
    tmp$.with_byf4r2$(new Singleton_init(tmp$_0, tmp$_0_0, erased$result_0, null, true, NetworkModule$provideModule$lambda$lambda));
    return Unit;
  }
  NetworkModule.prototype.provideModule = function () {
    return NetworkModule$provideModule$lambda;
  };
  NetworkModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NetworkModule',
    interfaces: [KodeinModuleProvider]
  };
  var NetworkModule_instance = null;
  function NetworkModule_getInstance() {
    if (NetworkModule_instance === null) {
      new NetworkModule();
    }
    return NetworkModule_instance;
  }
  $$importsForInline$$['my-application-mpp-lib'] = _;
  $$importsForInline$$['ktor-ktor-client-core'] = $module$ktor_ktor_client_core;
  var package$com = _.com || (_.com = {});
  var package$example = package$com.example || (package$com.example = {});
  var package$myapplication = package$example.myapplication || (package$example.myapplication = {});
  var package$datasource = package$myapplication.datasource || (package$myapplication.datasource = {});
  package$datasource.ArenaTournamentDatasourceImplementation = ArenaTournamentDatasourceImplementation;
  package$datasource.EndpointsImplementation = EndpointsImplementation;
  $$importsForInline$$['Kodein-DI-kodein-di-erased'] = $module$Kodein_DI_kodein_di_erased;
  var package$modules = package$myapplication.modules || (package$myapplication.modules = {});
  package$modules.buildCommonKodein_rjan26$ = buildCommonKodein;
  Object.defineProperty(package$modules, 'DatasourcesModule', {
    get: DatasourcesModule_getInstance
  });
  package$modules.KodeinModuleProvider = KodeinModuleProvider;
  package$modules.getModule_ecuwnu$ = getModule;
  package$modules.import_sv18pw$ = import_0;
  package$modules.import_e9phed$ = import_1;
  Object.defineProperty(package$modules, 'MappersModule', {
    get: MappersModule_getInstance
  });
  Object.defineProperty(package$modules, 'RepositoriesModule', {
    get: RepositoriesModule_getInstance
  });
  Object.defineProperty(package$modules, 'SplittersModule', {
    get: SplittersModule_getInstance
  });
  Object.defineProperty(package$modules, 'UseCasesModule', {
    get: UseCasesModule_getInstance
  });
  var package$jsbindings = package$example.jsbindings || (package$example.jsbindings = {});
  package$jsbindings.DependencyContainer = JsDependencyContainer;
  Object.defineProperty(package$modules, 'JsUseCasesModule', {
    get: JsUseCasesModule_getInstance
  });
  Object.defineProperty(package$modules, 'NetworkModule', {
    get: NetworkModule_getInstance
  });
  Object.defineProperty(JsDependencyContainer.prototype, 'kodeinContext', Object.getOwnPropertyDescriptor(KodeinAware.prototype, 'kodeinContext'));
  Object.defineProperty(JsDependencyContainer.prototype, 'kodeinTrigger', Object.getOwnPropertyDescriptor(KodeinAware.prototype, 'kodeinTrigger'));
  Kotlin.defineModule('my-application-mpp-lib', _);
  return _;
}));

//# sourceMappingURL=my-application-mpp-lib.js.map
