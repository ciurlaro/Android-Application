f(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'klock-root-klock', 'my-application-domain', 'ktor-ktor-http', 'kotlinx-serialization-kotlinx-serialization-runtime', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('klock-root-klock'), require('my-application-domain'), require('ktor-ktor-http'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'my-application-data'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'my-application-data'.");
    }
    if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'my-application-data'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'my-application-data'.");
    }
    if (typeof this['my-application-domain'] === 'undefined') {
      throw new Error("Error loading module 'my-application-data'. Its dependency 'my-application-domain' was not found. Please, check whether 'my-application-domain' is loaded prior to 'my-application-data'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'my-application-data'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'my-application-data'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'my-application-data'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'my-application-data'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'my-application-data'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'my-application-data'.");
    }
    root['my-application-data'] = factory(typeof this['my-application-data'] === 'undefined' ? {} : this['my-application-data'], kotlin, this['klock-root-klock'], this['my-application-domain'], this['ktor-ktor-http'], this['kotlinx-serialization-kotlinx-serialization-runtime'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$klock_root_klock, $module$my_application_domain, $module$ktor_ktor_http, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var DateFormat = $module$klock_root_klock.com.soywiz.klock.DateFormat;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var parse = $module$klock_root_klock.com.soywiz.klock.parse_mabgv2$;
  var GameEntity = $module$my_application_domain.com.example.myapplication.entities.GameEntity;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Triple = Kotlin.kotlin.Triple;
  var MatchEntity = $module$my_application_domain.com.example.myapplication.entities.MatchEntity;
  var ModeEntity = $module$my_application_domain.com.example.myapplication.entities.ModeEntity;
  var Quadruple = $module$my_application_domain.com.example.myapplication.utils.Quadruple;
  var RegistrationEntity = $module$my_application_domain.com.example.myapplication.entities.RegistrationEntity;
  var TournamentEntity = $module$my_application_domain.com.example.myapplication.entities.TournamentEntity;
  var UserEntity = $module$my_application_domain.com.example.myapplication.entities.UserEntity;
  var URLProtocol = $module$ktor_ktor_http.io.ktor.http.URLProtocol;
  var parametersOf = $module$ktor_ktor_http.io.ktor.http.parametersOf;
  var Url = $module$ktor_ktor_http.io.ktor.http.Url;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.NullableSerializer;
  var equals = Kotlin.equals;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Unit = Kotlin.kotlin.Unit;
  var flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.flow_sxz0o1$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var flatMapConcat = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.flatMapConcat_oq6m0l$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Quintuple = $module$my_application_domain.com.example.myapplication.utils.Quintuple;
  var asFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.asFlow_7wnvza$;
  var wrapFunction = Kotlin.wrapFunction;
  var ArenaTournamentRepository = $module$my_application_domain.com.example.myapplication.repositories.ArenaTournamentRepository;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  function ArenaTournamentDatasource() {
    ArenaTournamentDatasource$Companion_getInstance();
  }
  function ArenaTournamentDatasource$Companion() {
    ArenaTournamentDatasource$Companion_instance = this;
    this.DEFAULT_DATE_TIME_PATTERN = DateFormat.Companion.invoke_61zpoe$("yyyy-MM-dd'T'HH:mm:ss");
  }
  ArenaTournamentDatasource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ArenaTournamentDatasource$Companion_instance = null;
  function ArenaTournamentDatasource$Companion_getInstance() {
    if (ArenaTournamentDatasource$Companion_instance === null) {
      new ArenaTournamentDatasource$Companion();
    }
    return ArenaTournamentDatasource$Companion_instance;
  }
  function ArenaTournamentDatasource$Endpoints() {
  }
  ArenaTournamentDatasource$Endpoints.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Endpoints',
    interfaces: []
  };
  ArenaTournamentDatasource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ArenaTournamentDatasource',
    interfaces: []
  };
  function FirebaseDatasource() {
  }
  FirebaseDatasource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FirebaseDatasource',
    interfaces: []
  };
  function AccountStatusMapper() {
  }
  AccountStatusMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return remote.verified;
  };
  AccountStatusMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AccountStatusMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function AccountSubscriptionMapper() {
  }
  AccountSubscriptionMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return remote.subscriber;
  };
  AccountSubscriptionMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AccountSubscriptionMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function DateTimeMapper() {
  }
  DateTimeMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return parse(ArenaTournamentDatasource$Companion_getInstance().DEFAULT_DATE_TIME_PATTERN, remote);
  };
  DateTimeMapper.prototype.toRemoteSingle_11rc$ = function (entity) {
    return ArenaTournamentDatasource$Companion_getInstance().DEFAULT_DATE_TIME_PATTERN.format_j01w8f$(entity);
  };
  DateTimeMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeMapper',
    interfaces: [SingleToRemoteMapper, SingleFromRemoteMapper]
  };
  function GameMapper() {
  }
  GameMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return new GameEntity(remote.gameName, remote.availableModes, remote.image, remote.icon);
  };
  GameMapper.prototype.fromRemoteMultiple_11rb$ = function (remote) {
    var $receiver = remote._embedded.gameEntities;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.fromRemoteSingle_11rb$(item));
    }
    return destination;
  };
  GameMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameMapper',
    interfaces: [MultipleFromRemoteMapper]
  };
  function SingleFromRemoteMapper() {
  }
  SingleFromRemoteMapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SingleFromRemoteMapper',
    interfaces: []
  };
  function MultipleFromRemoteMapper() {
  }
  MultipleFromRemoteMapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleFromRemoteMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function SingleToRemoteMapper() {
  }
  SingleToRemoteMapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SingleToRemoteMapper',
    interfaces: []
  };
  function MultipleToRemoteMapper() {
  }
  MultipleToRemoteMapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleToRemoteMapper',
    interfaces: [SingleToRemoteMapper]
  };
  function MatchMapper(tournamentMapper, dtMapper) {
    this.tournamentMapper_0 = tournamentMapper;
    this.dtMapper_0 = dtMapper;
  }
  MatchMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return new MatchEntity(remote.first.id, this.dtMapper_0.fromRemoteSingle_11rb$(remote.first.matchDateTime), remote.first.playersCount, remote.first.registrationPossible, this.tournamentMapper_0.fromRemoteSingle_11rb$(new Triple(remote.second, remote.third, remote.fourth)));
  };
  MatchMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function ModeMapper() {
  }
  ModeMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return new ModeEntity(remote.modeName);
  };
  ModeMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModeMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function RegistrationMapper(matchMapper, userMapper) {
    this.matchMapper_0 = matchMapper;
    this.userMapper_0 = userMapper;
  }
  RegistrationMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return new RegistrationEntity(this.userMapper_0.fromRemoteSingle_11rb$(remote.fifth), this.matchMapper_0.fromRemoteSingle_11rb$(new Quadruple(remote.second, remote.third, remote.fourth, remote.fifth)), remote.first.outcome);
  };
  RegistrationMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegistrationMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function TournamentMapper(gameMapper, userMapper) {
    this.gameMapper_0 = gameMapper;
    this.userMapper_0 = userMapper;
  }
  TournamentMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return new TournamentEntity(remote.first.id, remote.first.playersNumber, remote.first.tournamentDescription, remote.first.tournamentMode, remote.first.title, this.userMapper_0.fromRemoteSingle_11rb$(remote.third), this.gameMapper_0.fromRemoteSingle_11rb$(remote.second));
  };
  TournamentMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TournamentMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function UserMapper() {
  }
  UserMapper.prototype.fromRemoteSingle_11rb$ = function (remote) {
    return new UserEntity(remote.id, remote.email, remote.nickname, remote.image, remote.verified, remote.subscriber);
  };
  UserMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserMapper',
    interfaces: [SingleFromRemoteMapper]
  };
  function GameLinkMapper(protocol, host, port) {
    this.protocol_0 = protocol;
    this.host_0 = host;
    this.port_0 = port;
  }
  GameLinkMapper.prototype.toRemoteSingle_11rc$ = function (entity) {
    return new Url(new URLProtocol(this.protocol_0, this.port_0), this.host_0, this.port_0, '/game/' + entity, parametersOf(), '', null, null, false);
  };
  GameLinkMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameLinkMapper',
    interfaces: [SingleToRemoteMapper]
  };
  function MatchLinkMapper(protocol, host, port) {
    this.protocol_0 = protocol;
    this.host_0 = host;
    this.port_0 = port;
  }
  MatchLinkMapper.prototype.toRemoteSingle_11rc$ = function (entity) {
    return new Url(new URLProtocol(this.protocol_0, this.port_0), this.host_0, this.port_0, '/match/' + entity.toString(), parametersOf(), '', null, null, false);
  };
  MatchLinkMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchLinkMapper',
    interfaces: [SingleToRemoteMapper]
  };
  function ModeLinkMapper(protocol, host, port) {
    this.protocol_0 = protocol;
    this.host_0 = host;
    this.port_0 = port;
  }
  ModeLinkMapper.prototype.toRemoteSingle_11rc$ = function (entity) {
    return new Url(new URLProtocol(this.protocol_0, this.port_0), this.host_0, this.port_0, '/mode/' + entity, parametersOf(), '', null, null, false);
  };
  ModeLinkMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModeLinkMapper',
    interfaces: [SingleToRemoteMapper]
  };
  function TournamentLinkMapper(protocol, host, port) {
    this.protocol_0 = protocol;
    this.host_0 = host;
    this.port_0 = port;
  }
  TournamentLinkMapper.prototype.toRemoteSingle_11rc$ = function (entity) {
    return new Url(new URLProtocol(this.protocol_0, this.port_0), this.host_0, this.port_0, '/tournament/' + entity.toString(), parametersOf(), '', null, null, false);
  };
  TournamentLinkMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TournamentLinkMapper',
    interfaces: [SingleToRemoteMapper]
  };
  function UserLinkMapper(protocol, host, port) {
    this.protocol_0 = protocol;
    this.host_0 = host;
    this.port_0 = port;
  }
  UserLinkMapper.prototype.toRemoteSingle_11rc$ = function (entity) {
    return new Url(new URLProtocol(this.protocol_0, this.port_0), this.host_0, this.port_0, '/user/' + entity, parametersOf(), '', null, null, false);
  };
  UserLinkMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserLinkMapper',
    interfaces: [SingleToRemoteMapper]
  };
  function AccountStatusJSON(verified) {
    AccountStatusJSON$Companion_getInstance();
    this.verified = verified;
  }
  function AccountStatusJSON$Companion() {
    AccountStatusJSON$Companion_instance = this;
  }
  AccountStatusJSON$Companion.prototype.serializer = function () {
    return AccountStatusJSON$$serializer_getInstance();
  };
  AccountStatusJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AccountStatusJSON$Companion_instance = null;
  function AccountStatusJSON$Companion_getInstance() {
    if (AccountStatusJSON$Companion_instance === null) {
      new AccountStatusJSON$Companion();
    }
    return AccountStatusJSON$Companion_instance;
  }
  function AccountStatusJSON$$serializer() {
    this.descriptor_j6pnvh$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.AccountStatusJSON', this);
    this.descriptor.addElement_ivxn3r$('verified', false);
    AccountStatusJSON$$serializer_instance = this;
  }
  Object.defineProperty(AccountStatusJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_j6pnvh$_0;
    }
  });
  AccountStatusJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 0, obj.verified);
    output.endStructure_qatsm0$(this.descriptor);
  };
  AccountStatusJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return AccountStatusJSON_init(bitMask0, local0, null);
  };
  AccountStatusJSON$$serializer.prototype.childSerializers = function () {
    return [internal.BooleanSerializer];
  };
  AccountStatusJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var AccountStatusJSON$$serializer_instance = null;
  function AccountStatusJSON$$serializer_getInstance() {
    if (AccountStatusJSON$$serializer_instance === null) {
      new AccountStatusJSON$$serializer();
    }
    return AccountStatusJSON$$serializer_instance;
  }
  function AccountStatusJSON_init(seen1, verified, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(AccountStatusJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('verified');
    else
      $this.verified = verified;
    return $this;
  }
  AccountStatusJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AccountStatusJSON',
    interfaces: []
  };
  AccountStatusJSON.prototype.component1 = function () {
    return this.verified;
  };
  AccountStatusJSON.prototype.copy_6taknv$ = function (verified) {
    return new AccountStatusJSON(verified === void 0 ? this.verified : verified);
  };
  AccountStatusJSON.prototype.toString = function () {
    return 'AccountStatusJSON(verified=' + Kotlin.toString(this.verified) + ')';
  };
  AccountStatusJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.verified) | 0;
    return result;
  };
  AccountStatusJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.verified, other.verified))));
  };
  function SubscriptionStatusJSON(subscriber) {
    SubscriptionStatusJSON$Companion_getInstance();
    this.subscriber = subscriber;
  }
  function SubscriptionStatusJSON$Companion() {
    SubscriptionStatusJSON$Companion_instance = this;
  }
  SubscriptionStatusJSON$Companion.prototype.serializer = function () {
    return SubscriptionStatusJSON$$serializer_getInstance();
  };
  SubscriptionStatusJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SubscriptionStatusJSON$Companion_instance = null;
  function SubscriptionStatusJSON$Companion_getInstance() {
    if (SubscriptionStatusJSON$Companion_instance === null) {
      new SubscriptionStatusJSON$Companion();
    }
    return SubscriptionStatusJSON$Companion_instance;
  }
  function SubscriptionStatusJSON$$serializer() {
    this.descriptor_y3ybet$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.SubscriptionStatusJSON', this);
    this.descriptor.addElement_ivxn3r$('subscriber', false);
    SubscriptionStatusJSON$$serializer_instance = this;
  }
  Object.defineProperty(SubscriptionStatusJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_y3ybet$_0;
    }
  });
  SubscriptionStatusJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 0, obj.subscriber);
    output.endStructure_qatsm0$(this.descriptor);
  };
  SubscriptionStatusJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return SubscriptionStatusJSON_init(bitMask0, local0, null);
  };
  SubscriptionStatusJSON$$serializer.prototype.childSerializers = function () {
    return [internal.BooleanSerializer];
  };
  SubscriptionStatusJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SubscriptionStatusJSON$$serializer_instance = null;
  function SubscriptionStatusJSON$$serializer_getInstance() {
    if (SubscriptionStatusJSON$$serializer_instance === null) {
      new SubscriptionStatusJSON$$serializer();
    }
    return SubscriptionStatusJSON$$serializer_instance;
  }
  function SubscriptionStatusJSON_init(seen1, subscriber, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SubscriptionStatusJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('subscriber');
    else
      $this.subscriber = subscriber;
    return $this;
  }
  SubscriptionStatusJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubscriptionStatusJSON',
    interfaces: []
  };
  SubscriptionStatusJSON.prototype.component1 = function () {
    return this.subscriber;
  };
  SubscriptionStatusJSON.prototype.copy_6taknv$ = function (subscriber) {
    return new SubscriptionStatusJSON(subscriber === void 0 ? this.subscriber : subscriber);
  };
  SubscriptionStatusJSON.prototype.toString = function () {
    return 'SubscriptionStatusJSON(subscriber=' + Kotlin.toString(this.subscriber) + ')';
  };
  SubscriptionStatusJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.subscriber) | 0;
    return result;
  };
  SubscriptionStatusJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.subscriber, other.subscriber))));
  };
  function MultipleGamesJSON(_embedded, _links, page) {
    MultipleGamesJSON$Companion_getInstance();
    this._embedded = _embedded;
    this._links = _links;
    this.page = page;
  }
  function MultipleGamesJSON$Companion() {
    MultipleGamesJSON$Companion_instance = this;
  }
  MultipleGamesJSON$Companion.prototype.serializer = function () {
    return MultipleGamesJSON$$serializer_getInstance();
  };
  MultipleGamesJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultipleGamesJSON$Companion_instance = null;
  function MultipleGamesJSON$Companion_getInstance() {
    if (MultipleGamesJSON$Companion_instance === null) {
      new MultipleGamesJSON$Companion();
    }
    return MultipleGamesJSON$Companion_instance;
  }
  function MultipleGamesJSON$$serializer() {
    this.descriptor_hq330r$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MultipleGamesJSON', this);
    this.descriptor.addElement_ivxn3r$('_embedded', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    this.descriptor.addElement_ivxn3r$('page', false);
    MultipleGamesJSON$$serializer_instance = this;
  }
  Object.defineProperty(MultipleGamesJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_hq330r$_0;
    }
  });
  MultipleGamesJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, GameEmbeddedJSON$$serializer_getInstance(), obj._embedded);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), obj._links);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, PageJSON$$serializer_getInstance(), obj.page);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultipleGamesJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, GameEmbeddedJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, GameEmbeddedJSON$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PageJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PageJSON$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultipleGamesJSON_init(bitMask0, local0, local1, local2, null);
  };
  MultipleGamesJSON$$serializer.prototype.childSerializers = function () {
    return [GameEmbeddedJSON$$serializer_getInstance(), LinksJSON$$serializer_getInstance(), PageJSON$$serializer_getInstance()];
  };
  MultipleGamesJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultipleGamesJSON$$serializer_instance = null;
  function MultipleGamesJSON$$serializer_getInstance() {
    if (MultipleGamesJSON$$serializer_instance === null) {
      new MultipleGamesJSON$$serializer();
    }
    return MultipleGamesJSON$$serializer_instance;
  }
  function MultipleGamesJSON_init(seen1, _embedded, _links, page, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultipleGamesJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('_embedded');
    else
      $this._embedded = _embedded;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('page');
    else
      $this.page = page;
    return $this;
  }
  MultipleGamesJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleGamesJSON',
    interfaces: []
  };
  MultipleGamesJSON.prototype.component1 = function () {
    return this._embedded;
  };
  MultipleGamesJSON.prototype.component2 = function () {
    return this._links;
  };
  MultipleGamesJSON.prototype.component3 = function () {
    return this.page;
  };
  MultipleGamesJSON.prototype.copy_lkugb$ = function (_embedded, _links, page) {
    return new MultipleGamesJSON(_embedded === void 0 ? this._embedded : _embedded, _links === void 0 ? this._links : _links, page === void 0 ? this.page : page);
  };
  MultipleGamesJSON.prototype.toString = function () {
    return 'MultipleGamesJSON(_embedded=' + Kotlin.toString(this._embedded) + (', _links=' + Kotlin.toString(this._links)) + (', page=' + Kotlin.toString(this.page)) + ')';
  };
  MultipleGamesJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._embedded) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  MultipleGamesJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._embedded, other._embedded) && Kotlin.equals(this._links, other._links) && Kotlin.equals(this.page, other.page)))));
  };
  function GameEmbeddedJSON(gameEntities) {
    GameEmbeddedJSON$Companion_getInstance();
    this.gameEntities = gameEntities;
  }
  function GameEmbeddedJSON$Companion() {
    GameEmbeddedJSON$Companion_instance = this;
  }
  GameEmbeddedJSON$Companion.prototype.serializer = function () {
    return GameEmbeddedJSON$$serializer_getInstance();
  };
  GameEmbeddedJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameEmbeddedJSON$Companion_instance = null;
  function GameEmbeddedJSON$Companion_getInstance() {
    if (GameEmbeddedJSON$Companion_instance === null) {
      new GameEmbeddedJSON$Companion();
    }
    return GameEmbeddedJSON$Companion_instance;
  }
  function GameEmbeddedJSON$$serializer() {
    this.descriptor_qym6cy$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.GameEmbeddedJSON', this);
    this.descriptor.addElement_ivxn3r$('gameEntities', false);
    GameEmbeddedJSON$$serializer_instance = this;
  }
  Object.defineProperty(GameEmbeddedJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_qym6cy$_0;
    }
  });
  GameEmbeddedJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(GameJSON$$serializer_getInstance()), obj.gameEntities);
    output.endStructure_qatsm0$(this.descriptor);
  };
  GameEmbeddedJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(GameJSON$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(GameJSON$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return GameEmbeddedJSON_init(bitMask0, local0, null);
  };
  GameEmbeddedJSON$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(GameJSON$$serializer_getInstance())];
  };
  GameEmbeddedJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GameEmbeddedJSON$$serializer_instance = null;
  function GameEmbeddedJSON$$serializer_getInstance() {
    if (GameEmbeddedJSON$$serializer_instance === null) {
      new GameEmbeddedJSON$$serializer();
    }
    return GameEmbeddedJSON$$serializer_instance;
  }
  function GameEmbeddedJSON_init(seen1, gameEntities, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GameEmbeddedJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('gameEntities');
    else
      $this.gameEntities = gameEntities;
    return $this;
  }
  GameEmbeddedJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameEmbeddedJSON',
    interfaces: []
  };
  GameEmbeddedJSON.prototype.component1 = function () {
    return this.gameEntities;
  };
  GameEmbeddedJSON.prototype.copy_8xrrua$ = function (gameEntities) {
    return new GameEmbeddedJSON(gameEntities === void 0 ? this.gameEntities : gameEntities);
  };
  GameEmbeddedJSON.prototype.toString = function () {
    return 'GameEmbeddedJSON(gameEntities=' + Kotlin.toString(this.gameEntities) + ')';
  };
  GameEmbeddedJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameEntities) | 0;
    return result;
  };
  GameEmbeddedJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.gameEntities, other.gameEntities))));
  };
  function GameJSON(gameName, availableModes, image, icon, _links) {
    GameJSON$Companion_getInstance();
    this.gameName = gameName;
    this.availableModes = availableModes;
    this.image = image;
    this.icon = icon;
    this._links = _links;
  }
  function GameJSON$Companion() {
    GameJSON$Companion_instance = this;
  }
  GameJSON$Companion.prototype.serializer = function () {
    return GameJSON$$serializer_getInstance();
  };
  GameJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameJSON$Companion_instance = null;
  function GameJSON$Companion_getInstance() {
    if (GameJSON$Companion_instance === null) {
      new GameJSON$Companion();
    }
    return GameJSON$Companion_instance;
  }
  function GameJSON$$serializer() {
    this.descriptor_rlmmm0$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.GameJSON', this);
    this.descriptor.addElement_ivxn3r$('gameName', false);
    this.descriptor.addElement_ivxn3r$('availableModes', false);
    this.descriptor.addElement_ivxn3r$('image', false);
    this.descriptor.addElement_ivxn3r$('icon', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    GameJSON$$serializer_instance = this;
  }
  Object.defineProperty(GameJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_rlmmm0$_0;
    }
  });
  GameJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.gameName);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), obj.availableModes);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.image);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.icon);
    output.encodeSerializableElement_blecud$(this.descriptor, 4, LinksJSON$$serializer_getInstance(), obj._links);
    output.endStructure_qatsm0$(this.descriptor);
  };
  GameJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, LinksJSON$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return GameJSON_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  GameJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ArrayListSerializer(internal.StringSerializer), internal.StringSerializer, internal.StringSerializer, LinksJSON$$serializer_getInstance()];
  };
  GameJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GameJSON$$serializer_instance = null;
  function GameJSON$$serializer_getInstance() {
    if (GameJSON$$serializer_instance === null) {
      new GameJSON$$serializer();
    }
    return GameJSON$$serializer_instance;
  }
  function GameJSON_init(seen1, gameName, availableModes, image, icon, _links, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GameJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('gameName');
    else
      $this.gameName = gameName;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('availableModes');
    else
      $this.availableModes = availableModes;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('image');
    else
      $this.image = image;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('icon');
    else
      $this.icon = icon;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    return $this;
  }
  GameJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameJSON',
    interfaces: []
  };
  GameJSON.prototype.component1 = function () {
    return this.gameName;
  };
  GameJSON.prototype.component2 = function () {
    return this.availableModes;
  };
  GameJSON.prototype.component3 = function () {
    return this.image;
  };
  GameJSON.prototype.component4 = function () {
    return this.icon;
  };
  GameJSON.prototype.component5 = function () {
    return this._links;
  };
  GameJSON.prototype.copy_6tkeit$ = function (gameName, availableModes, image, icon, _links) {
    return new GameJSON(gameName === void 0 ? this.gameName : gameName, availableModes === void 0 ? this.availableModes : availableModes, image === void 0 ? this.image : image, icon === void 0 ? this.icon : icon, _links === void 0 ? this._links : _links);
  };
  GameJSON.prototype.toString = function () {
    return 'GameJSON(gameName=' + Kotlin.toString(this.gameName) + (', availableModes=' + Kotlin.toString(this.availableModes)) + (', image=' + Kotlin.toString(this.image)) + (', icon=' + Kotlin.toString(this.icon)) + (', _links=' + Kotlin.toString(this._links)) + ')';
  };
  GameJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameName) | 0;
    result = result * 31 + Kotlin.hashCode(this.availableModes) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    return result;
  };
  GameJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameName, other.gameName) && Kotlin.equals(this.availableModes, other.availableModes) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.icon, other.icon) && Kotlin.equals(this._links, other._links)))));
  };
  function HrefJSON(href, templated) {
    HrefJSON$Companion_getInstance();
    if (templated === void 0)
      templated = null;
    this.href = href;
    this.templated = templated;
  }
  function HrefJSON$Companion() {
    HrefJSON$Companion_instance = this;
  }
  HrefJSON$Companion.prototype.serializer = function () {
    return HrefJSON$$serializer_getInstance();
  };
  HrefJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HrefJSON$Companion_instance = null;
  function HrefJSON$Companion_getInstance() {
    if (HrefJSON$Companion_instance === null) {
      new HrefJSON$Companion();
    }
    return HrefJSON$Companion_instance;
  }
  function HrefJSON$$serializer() {
    this.descriptor_na6c73$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.HrefJSON', this);
    this.descriptor.addElement_ivxn3r$('href', false);
    this.descriptor.addElement_ivxn3r$('templated', true);
    HrefJSON$$serializer_instance = this;
  }
  Object.defineProperty(HrefJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_na6c73$_0;
    }
  });
  HrefJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.href);
    if (!equals(obj.templated, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.BooleanSerializer, obj.templated);
    output.endStructure_qatsm0$(this.descriptor);
  };
  HrefJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.BooleanSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.BooleanSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return HrefJSON_init(bitMask0, local0, local1, null);
  };
  HrefJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new NullableSerializer(internal.BooleanSerializer)];
  };
  HrefJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var HrefJSON$$serializer_instance = null;
  function HrefJSON$$serializer_getInstance() {
    if (HrefJSON$$serializer_instance === null) {
      new HrefJSON$$serializer();
    }
    return HrefJSON$$serializer_instance;
  }
  function HrefJSON_init(seen1, href, templated, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(HrefJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('href');
    else
      $this.href = href;
    if ((seen1 & 2) === 0)
      $this.templated = null;
    else
      $this.templated = templated;
    return $this;
  }
  HrefJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HrefJSON',
    interfaces: []
  };
  HrefJSON.prototype.component1 = function () {
    return this.href;
  };
  HrefJSON.prototype.component2 = function () {
    return this.templated;
  };
  HrefJSON.prototype.copy_h92gdm$ = function (href, templated) {
    return new HrefJSON(href === void 0 ? this.href : href, templated === void 0 ? this.templated : templated);
  };
  HrefJSON.prototype.toString = function () {
    return 'HrefJSON(href=' + Kotlin.toString(this.href) + (', templated=' + Kotlin.toString(this.templated)) + ')';
  };
  HrefJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.href) | 0;
    result = result * 31 + Kotlin.hashCode(this.templated) | 0;
    return result;
  };
  HrefJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.href, other.href) && Kotlin.equals(this.templated, other.templated)))));
  };
  function LinksJSON(self_0, tournamentEntity, gameEntity, modeEntity, matchEntity, registrationEntity, userEntity, profile, search, tournament, game, mode, match, registration, user, admin) {
    LinksJSON$Companion_getInstance();
    if (tournamentEntity === void 0)
      tournamentEntity = null;
    if (gameEntity === void 0)
      gameEntity = null;
    if (modeEntity === void 0)
      modeEntity = null;
    if (matchEntity === void 0)
      matchEntity = null;
    if (registrationEntity === void 0)
      registrationEntity = null;
    if (userEntity === void 0)
      userEntity = null;
    if (profile === void 0)
      profile = null;
    if (search === void 0)
      search = null;
    if (tournament === void 0)
      tournament = null;
    if (game === void 0)
      game = null;
    if (mode === void 0)
      mode = null;
    if (match === void 0)
      match = null;
    if (registration === void 0)
      registration = null;
    if (user === void 0)
      user = null;
    if (admin === void 0)
      admin = null;
    this.self = self_0;
    this.tournamentEntity = tournamentEntity;
    this.gameEntity = gameEntity;
    this.modeEntity = modeEntity;
    this.matchEntity = matchEntity;
    this.registrationEntity = registrationEntity;
    this.userEntity = userEntity;
    this.profile = profile;
    this.search = search;
    this.tournament = tournament;
    this.game = game;
    this.mode = mode;
    this.match = match;
    this.registration = registration;
    this.user = user;
    this.admin = admin;
  }
  function LinksJSON$Companion() {
    LinksJSON$Companion_instance = this;
  }
  LinksJSON$Companion.prototype.serializer = function () {
    return LinksJSON$$serializer_getInstance();
  };
  LinksJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinksJSON$Companion_instance = null;
  function LinksJSON$Companion_getInstance() {
    if (LinksJSON$Companion_instance === null) {
      new LinksJSON$Companion();
    }
    return LinksJSON$Companion_instance;
  }
  function LinksJSON$$serializer() {
    this.descriptor_fikctf$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.LinksJSON', this);
    this.descriptor.addElement_ivxn3r$('self', false);
    this.descriptor.addElement_ivxn3r$('tournamentEntity', true);
    this.descriptor.addElement_ivxn3r$('gameEntity', true);
    this.descriptor.addElement_ivxn3r$('modeEntity', true);
    this.descriptor.addElement_ivxn3r$('matchEntity', true);
    this.descriptor.addElement_ivxn3r$('registrationEntity', true);
    this.descriptor.addElement_ivxn3r$('userEntity', true);
    this.descriptor.addElement_ivxn3r$('profile', true);
    this.descriptor.addElement_ivxn3r$('search', true);
    this.descriptor.addElement_ivxn3r$('tournament', true);
    this.descriptor.addElement_ivxn3r$('game', true);
    this.descriptor.addElement_ivxn3r$('mode', true);
    this.descriptor.addElement_ivxn3r$('match', true);
    this.descriptor.addElement_ivxn3r$('registration', true);
    this.descriptor.addElement_ivxn3r$('user', true);
    this.descriptor.addElement_ivxn3r$('admin', true);
    LinksJSON$$serializer_instance = this;
  }
  Object.defineProperty(LinksJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_fikctf$_0;
    }
  });
  LinksJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, HrefJSON$$serializer_getInstance(), obj.self);
    if (!equals(obj.tournamentEntity, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, HrefJSON$$serializer_getInstance(), obj.tournamentEntity);
    if (!equals(obj.gameEntity, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, HrefJSON$$serializer_getInstance(), obj.gameEntity);
    if (!equals(obj.modeEntity, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, HrefJSON$$serializer_getInstance(), obj.modeEntity);
    if (!equals(obj.matchEntity, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 4, HrefJSON$$serializer_getInstance(), obj.matchEntity);
    if (!equals(obj.registrationEntity, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 5, HrefJSON$$serializer_getInstance(), obj.registrationEntity);
    if (!equals(obj.userEntity, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 6))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 6, HrefJSON$$serializer_getInstance(), obj.userEntity);
    if (!equals(obj.profile, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 7))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 7, HrefJSON$$serializer_getInstance(), obj.profile);
    if (!equals(obj.search, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 8))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 8, HrefJSON$$serializer_getInstance(), obj.search);
    if (!equals(obj.tournament, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 9))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 9, HrefJSON$$serializer_getInstance(), obj.tournament);
    if (!equals(obj.game, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 10))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 10, HrefJSON$$serializer_getInstance(), obj.game);
    if (!equals(obj.mode, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 11))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 11, HrefJSON$$serializer_getInstance(), obj.mode);
    if (!equals(obj.match, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 12))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 12, HrefJSON$$serializer_getInstance(), obj.match);
    if (!equals(obj.registration, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 13))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 13, HrefJSON$$serializer_getInstance(), obj.registration);
    if (!equals(obj.user, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 14))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 14, HrefJSON$$serializer_getInstance(), obj.user);
    if (!equals(obj.admin, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 15))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 15, HrefJSON$$serializer_getInstance(), obj.admin);
    output.endStructure_qatsm0$(this.descriptor);
  };
  LinksJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10
    , local11
    , local12
    , local13
    , local14
    , local15;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, HrefJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, HrefJSON$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, HrefJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, HrefJSON$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, HrefJSON$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 4, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 4, HrefJSON$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 5, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 5, HrefJSON$$serializer_getInstance(), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          local6 = (bitMask0 & 64) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 6, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 6, HrefJSON$$serializer_getInstance(), local6);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          local7 = (bitMask0 & 128) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 7, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 7, HrefJSON$$serializer_getInstance(), local7);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case 8:
          local8 = (bitMask0 & 256) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 8, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 8, HrefJSON$$serializer_getInstance(), local8);
          bitMask0 |= 256;
          if (!readAll)
            break;
        case 9:
          local9 = (bitMask0 & 512) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 9, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 9, HrefJSON$$serializer_getInstance(), local9);
          bitMask0 |= 512;
          if (!readAll)
            break;
        case 10:
          local10 = (bitMask0 & 1024) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 10, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 10, HrefJSON$$serializer_getInstance(), local10);
          bitMask0 |= 1024;
          if (!readAll)
            break;
        case 11:
          local11 = (bitMask0 & 2048) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 11, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 11, HrefJSON$$serializer_getInstance(), local11);
          bitMask0 |= 2048;
          if (!readAll)
            break;
        case 12:
          local12 = (bitMask0 & 4096) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 12, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 12, HrefJSON$$serializer_getInstance(), local12);
          bitMask0 |= 4096;
          if (!readAll)
            break;
        case 13:
          local13 = (bitMask0 & 8192) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 13, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 13, HrefJSON$$serializer_getInstance(), local13);
          bitMask0 |= 8192;
          if (!readAll)
            break;
        case 14:
          local14 = (bitMask0 & 16384) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 14, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 14, HrefJSON$$serializer_getInstance(), local14);
          bitMask0 |= 16384;
          if (!readAll)
            break;
        case 15:
          local15 = (bitMask0 & 32768) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 15, HrefJSON$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 15, HrefJSON$$serializer_getInstance(), local15);
          bitMask0 |= 32768;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return LinksJSON_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, local13, local14, local15, null);
  };
  LinksJSON$$serializer.prototype.childSerializers = function () {
    return [HrefJSON$$serializer_getInstance(), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance()), new NullableSerializer(HrefJSON$$serializer_getInstance())];
  };
  LinksJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var LinksJSON$$serializer_instance = null;
  function LinksJSON$$serializer_getInstance() {
    if (LinksJSON$$serializer_instance === null) {
      new LinksJSON$$serializer();
    }
    return LinksJSON$$serializer_instance;
  }
  function LinksJSON_init(seen1, self_0, tournamentEntity, gameEntity, modeEntity, matchEntity, registrationEntity, userEntity, profile, search, tournament, game, mode, match, registration, user, admin, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(LinksJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('self');
    else
      $this.self = self_0;
    if ((seen1 & 2) === 0)
      $this.tournamentEntity = null;
    else
      $this.tournamentEntity = tournamentEntity;
    if ((seen1 & 4) === 0)
      $this.gameEntity = null;
    else
      $this.gameEntity = gameEntity;
    if ((seen1 & 8) === 0)
      $this.modeEntity = null;
    else
      $this.modeEntity = modeEntity;
    if ((seen1 & 16) === 0)
      $this.matchEntity = null;
    else
      $this.matchEntity = matchEntity;
    if ((seen1 & 32) === 0)
      $this.registrationEntity = null;
    else
      $this.registrationEntity = registrationEntity;
    if ((seen1 & 64) === 0)
      $this.userEntity = null;
    else
      $this.userEntity = userEntity;
    if ((seen1 & 128) === 0)
      $this.profile = null;
    else
      $this.profile = profile;
    if ((seen1 & 256) === 0)
      $this.search = null;
    else
      $this.search = search;
    if ((seen1 & 512) === 0)
      $this.tournament = null;
    else
      $this.tournament = tournament;
    if ((seen1 & 1024) === 0)
      $this.game = null;
    else
      $this.game = game;
    if ((seen1 & 2048) === 0)
      $this.mode = null;
    else
      $this.mode = mode;
    if ((seen1 & 4096) === 0)
      $this.match = null;
    else
      $this.match = match;
    if ((seen1 & 8192) === 0)
      $this.registration = null;
    else
      $this.registration = registration;
    if ((seen1 & 16384) === 0)
      $this.user = null;
    else
      $this.user = user;
    if ((seen1 & 32768) === 0)
      $this.admin = null;
    else
      $this.admin = admin;
    return $this;
  }
  LinksJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinksJSON',
    interfaces: []
  };
  LinksJSON.prototype.component1 = function () {
    return this.self;
  };
  LinksJSON.prototype.component2 = function () {
    return this.tournamentEntity;
  };
  LinksJSON.prototype.component3 = function () {
    return this.gameEntity;
  };
  LinksJSON.prototype.component4 = function () {
    return this.modeEntity;
  };
  LinksJSON.prototype.component5 = function () {
    return this.matchEntity;
  };
  LinksJSON.prototype.component6 = function () {
    return this.registrationEntity;
  };
  LinksJSON.prototype.component7 = function () {
    return this.userEntity;
  };
  LinksJSON.prototype.component8 = function () {
    return this.profile;
  };
  LinksJSON.prototype.component9 = function () {
    return this.search;
  };
  LinksJSON.prototype.component10 = function () {
    return this.tournament;
  };
  LinksJSON.prototype.component11 = function () {
    return this.game;
  };
  LinksJSON.prototype.component12 = function () {
    return this.mode;
  };
  LinksJSON.prototype.component13 = function () {
    return this.match;
  };
  LinksJSON.prototype.component14 = function () {
    return this.registration;
  };
  LinksJSON.prototype.component15 = function () {
    return this.user;
  };
  LinksJSON.prototype.component16 = function () {
    return this.admin;
  };
  LinksJSON.prototype.copy_1st6b1$ = function (self_0, tournamentEntity, gameEntity, modeEntity, matchEntity, registrationEntity, userEntity, profile, search, tournament, game, mode, match, registration, user, admin) {
    return new LinksJSON(self_0 === void 0 ? this.self : self_0, tournamentEntity === void 0 ? this.tournamentEntity : tournamentEntity, gameEntity === void 0 ? this.gameEntity : gameEntity, modeEntity === void 0 ? this.modeEntity : modeEntity, matchEntity === void 0 ? this.matchEntity : matchEntity, registrationEntity === void 0 ? this.registrationEntity : registrationEntity, userEntity === void 0 ? this.userEntity : userEntity, profile === void 0 ? this.profile : profile, search === void 0 ? this.search : search, tournament === void 0 ? this.tournament : tournament, game === void 0 ? this.game : game, mode === void 0 ? this.mode : mode, match === void 0 ? this.match : match, registration === void 0 ? this.registration : registration, user === void 0 ? this.user : user, admin === void 0 ? this.admin : admin);
  };
  LinksJSON.prototype.toString = function () {
    return 'LinksJSON(self=' + Kotlin.toString(this.self) + (', tournamentEntity=' + Kotlin.toString(this.tournamentEntity)) + (', gameEntity=' + Kotlin.toString(this.gameEntity)) + (', modeEntity=' + Kotlin.toString(this.modeEntity)) + (', matchEntity=' + Kotlin.toString(this.matchEntity)) + (', registrationEntity=' + Kotlin.toString(this.registrationEntity)) + (', userEntity=' + Kotlin.toString(this.userEntity)) + (', profile=' + Kotlin.toString(this.profile)) + (', search=' + Kotlin.toString(this.search)) + (', tournament=' + Kotlin.toString(this.tournament)) + (', game=' + Kotlin.toString(this.game)) + (', mode=' + Kotlin.toString(this.mode)) + (', match=' + Kotlin.toString(this.match)) + (', registration=' + Kotlin.toString(this.registration)) + (', user=' + Kotlin.toString(this.user)) + (', admin=' + Kotlin.toString(this.admin)) + ')';
  };
  LinksJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.self) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentEntity) | 0;
    result = result * 31 + Kotlin.hashCode(this.gameEntity) | 0;
    result = result * 31 + Kotlin.hashCode(this.modeEntity) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchEntity) | 0;
    result = result * 31 + Kotlin.hashCode(this.registrationEntity) | 0;
    result = result * 31 + Kotlin.hashCode(this.userEntity) | 0;
    result = result * 31 + Kotlin.hashCode(this.profile) | 0;
    result = result * 31 + Kotlin.hashCode(this.search) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournament) | 0;
    result = result * 31 + Kotlin.hashCode(this.game) | 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    result = result * 31 + Kotlin.hashCode(this.match) | 0;
    result = result * 31 + Kotlin.hashCode(this.registration) | 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.admin) | 0;
    return result;
  };
  LinksJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.self, other.self) && Kotlin.equals(this.tournamentEntity, other.tournamentEntity) && Kotlin.equals(this.gameEntity, other.gameEntity) && Kotlin.equals(this.modeEntity, other.modeEntity) && Kotlin.equals(this.matchEntity, other.matchEntity) && Kotlin.equals(this.registrationEntity, other.registrationEntity) && Kotlin.equals(this.userEntity, other.userEntity) && Kotlin.equals(this.profile, other.profile) && Kotlin.equals(this.search, other.search) && Kotlin.equals(this.tournament, other.tournament) && Kotlin.equals(this.game, other.game) && Kotlin.equals(this.mode, other.mode) && Kotlin.equals(this.match, other.match) && Kotlin.equals(this.registration, other.registration) && Kotlin.equals(this.user, other.user) && Kotlin.equals(this.admin, other.admin)))));
  };
  function MultipleMatchJSON(_embedded, _links, page) {
    MultipleMatchJSON$Companion_getInstance();
    this._embedded = _embedded;
    this._links = _links;
    this.page = page;
  }
  function MultipleMatchJSON$Companion() {
    MultipleMatchJSON$Companion_instance = this;
  }
  MultipleMatchJSON$Companion.prototype.serializer = function () {
    return MultipleMatchJSON$$serializer_getInstance();
  };
  MultipleMatchJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultipleMatchJSON$Companion_instance = null;
  function MultipleMatchJSON$Companion_getInstance() {
    if (MultipleMatchJSON$Companion_instance === null) {
      new MultipleMatchJSON$Companion();
    }
    return MultipleMatchJSON$Companion_instance;
  }
  function MultipleMatchJSON$$serializer() {
    this.descriptor_yw65fd$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MultipleMatchJSON', this);
    this.descriptor.addElement_ivxn3r$('_embedded', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    this.descriptor.addElement_ivxn3r$('page', false);
    MultipleMatchJSON$$serializer_instance = this;
  }
  Object.defineProperty(MultipleMatchJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_yw65fd$_0;
    }
  });
  MultipleMatchJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, MatchEmbeddedJSON$$serializer_getInstance(), obj._embedded);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), obj._links);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, PageJSON$$serializer_getInstance(), obj.page);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultipleMatchJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, MatchEmbeddedJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, MatchEmbeddedJSON$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PageJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PageJSON$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultipleMatchJSON_init(bitMask0, local0, local1, local2, null);
  };
  MultipleMatchJSON$$serializer.prototype.childSerializers = function () {
    return [MatchEmbeddedJSON$$serializer_getInstance(), LinksJSON$$serializer_getInstance(), PageJSON$$serializer_getInstance()];
  };
  MultipleMatchJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultipleMatchJSON$$serializer_instance = null;
  function MultipleMatchJSON$$serializer_getInstance() {
    if (MultipleMatchJSON$$serializer_instance === null) {
      new MultipleMatchJSON$$serializer();
    }
    return MultipleMatchJSON$$serializer_instance;
  }
  function MultipleMatchJSON_init(seen1, _embedded, _links, page, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultipleMatchJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('_embedded');
    else
      $this._embedded = _embedded;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('page');
    else
      $this.page = page;
    return $this;
  }
  MultipleMatchJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleMatchJSON',
    interfaces: []
  };
  MultipleMatchJSON.prototype.component1 = function () {
    return this._embedded;
  };
  MultipleMatchJSON.prototype.component2 = function () {
    return this._links;
  };
  MultipleMatchJSON.prototype.component3 = function () {
    return this.page;
  };
  MultipleMatchJSON.prototype.copy_62bo6i$ = function (_embedded, _links, page) {
    return new MultipleMatchJSON(_embedded === void 0 ? this._embedded : _embedded, _links === void 0 ? this._links : _links, page === void 0 ? this.page : page);
  };
  MultipleMatchJSON.prototype.toString = function () {
    return 'MultipleMatchJSON(_embedded=' + Kotlin.toString(this._embedded) + (', _links=' + Kotlin.toString(this._links)) + (', page=' + Kotlin.toString(this.page)) + ')';
  };
  MultipleMatchJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._embedded) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  MultipleMatchJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._embedded, other._embedded) && Kotlin.equals(this._links, other._links) && Kotlin.equals(this.page, other.page)))));
  };
  function MatchEmbeddedJSON(matchEntities) {
    MatchEmbeddedJSON$Companion_getInstance();
    this.matchEntities = matchEntities;
  }
  function MatchEmbeddedJSON$Companion() {
    MatchEmbeddedJSON$Companion_instance = this;
  }
  MatchEmbeddedJSON$Companion.prototype.serializer = function () {
    return MatchEmbeddedJSON$$serializer_getInstance();
  };
  MatchEmbeddedJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MatchEmbeddedJSON$Companion_instance = null;
  function MatchEmbeddedJSON$Companion_getInstance() {
    if (MatchEmbeddedJSON$Companion_instance === null) {
      new MatchEmbeddedJSON$Companion();
    }
    return MatchEmbeddedJSON$Companion_instance;
  }
  function MatchEmbeddedJSON$$serializer() {
    this.descriptor_2cyrir$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MatchEmbeddedJSON', this);
    this.descriptor.addElement_ivxn3r$('matchEntities', false);
    MatchEmbeddedJSON$$serializer_instance = this;
  }
  Object.defineProperty(MatchEmbeddedJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_2cyrir$_0;
    }
  });
  MatchEmbeddedJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(MatchJSON$$serializer_getInstance()), obj.matchEntities);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MatchEmbeddedJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(MatchJSON$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(MatchJSON$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MatchEmbeddedJSON_init(bitMask0, local0, null);
  };
  MatchEmbeddedJSON$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(MatchJSON$$serializer_getInstance())];
  };
  MatchEmbeddedJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MatchEmbeddedJSON$$serializer_instance = null;
  function MatchEmbeddedJSON$$serializer_getInstance() {
    if (MatchEmbeddedJSON$$serializer_instance === null) {
      new MatchEmbeddedJSON$$serializer();
    }
    return MatchEmbeddedJSON$$serializer_instance;
  }
  function MatchEmbeddedJSON_init(seen1, matchEntities, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MatchEmbeddedJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('matchEntities');
    else
      $this.matchEntities = matchEntities;
    return $this;
  }
  MatchEmbeddedJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchEmbeddedJSON',
    interfaces: []
  };
  MatchEmbeddedJSON.prototype.component1 = function () {
    return this.matchEntities;
  };
  MatchEmbeddedJSON.prototype.copy_vyd6pz$ = function (matchEntities) {
    return new MatchEmbeddedJSON(matchEntities === void 0 ? this.matchEntities : matchEntities);
  };
  MatchEmbeddedJSON.prototype.toString = function () {
    return 'MatchEmbeddedJSON(matchEntities=' + Kotlin.toString(this.matchEntities) + ')';
  };
  MatchEmbeddedJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matchEntities) | 0;
    return result;
  };
  MatchEmbeddedJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.matchEntities, other.matchEntities))));
  };
  function MatchJSON(id, matchDateTime, playersCount, registrationPossible, _links) {
    MatchJSON$Companion_getInstance();
    this.id = id;
    this.matchDateTime = matchDateTime;
    this.playersCount = playersCount;
    this.registrationPossible = registrationPossible;
    this._links = _links;
  }
  function MatchJSON$Companion() {
    MatchJSON$Companion_instance = this;
  }
  MatchJSON$Companion.prototype.serializer = function () {
    return MatchJSON$$serializer_getInstance();
  };
  MatchJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MatchJSON$Companion_instance = null;
  function MatchJSON$Companion_getInstance() {
    if (MatchJSON$Companion_instance === null) {
      new MatchJSON$Companion();
    }
    return MatchJSON$Companion_instance;
  }
  function MatchJSON$$serializer() {
    this.descriptor_kiqqqf$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MatchJSON', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('matchDateTime', false);
    this.descriptor.addElement_ivxn3r$('playersCount', false);
    this.descriptor.addElement_ivxn3r$('registrationPossible', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    MatchJSON$$serializer_instance = this;
  }
  Object.defineProperty(MatchJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_kiqqqf$_0;
    }
  });
  MatchJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.matchDateTime);
    output.encodeIntElement_4wpqag$(this.descriptor, 2, obj.playersCount);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 3, obj.registrationPossible);
    output.encodeSerializableElement_blecud$(this.descriptor, 4, LinksJSON$$serializer_getInstance(), obj._links);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MatchJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeIntElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, LinksJSON$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MatchJSON_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  MatchJSON$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, internal.IntSerializer, internal.BooleanSerializer, LinksJSON$$serializer_getInstance()];
  };
  MatchJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MatchJSON$$serializer_instance = null;
  function MatchJSON$$serializer_getInstance() {
    if (MatchJSON$$serializer_instance === null) {
      new MatchJSON$$serializer();
    }
    return MatchJSON$$serializer_instance;
  }
  function MatchJSON_init(seen1, id, matchDateTime, playersCount, registrationPossible, _links, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MatchJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('matchDateTime');
    else
      $this.matchDateTime = matchDateTime;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('playersCount');
    else
      $this.playersCount = playersCount;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('registrationPossible');
    else
      $this.registrationPossible = registrationPossible;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    return $this;
  }
  MatchJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchJSON',
    interfaces: []
  };
  MatchJSON.prototype.component1 = function () {
    return this.id;
  };
  MatchJSON.prototype.component2 = function () {
    return this.matchDateTime;
  };
  MatchJSON.prototype.component3 = function () {
    return this.playersCount;
  };
  MatchJSON.prototype.component4 = function () {
    return this.registrationPossible;
  };
  MatchJSON.prototype.component5 = function () {
    return this._links;
  };
  MatchJSON.prototype.copy_zi2ysw$ = function (id, matchDateTime, playersCount, registrationPossible, _links) {
    return new MatchJSON(id === void 0 ? this.id : id, matchDateTime === void 0 ? this.matchDateTime : matchDateTime, playersCount === void 0 ? this.playersCount : playersCount, registrationPossible === void 0 ? this.registrationPossible : registrationPossible, _links === void 0 ? this._links : _links);
  };
  MatchJSON.prototype.toString = function () {
    return 'MatchJSON(id=' + Kotlin.toString(this.id) + (', matchDateTime=' + Kotlin.toString(this.matchDateTime)) + (', playersCount=' + Kotlin.toString(this.playersCount)) + (', registrationPossible=' + Kotlin.toString(this.registrationPossible)) + (', _links=' + Kotlin.toString(this._links)) + ')';
  };
  MatchJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchDateTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.playersCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.registrationPossible) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    return result;
  };
  MatchJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.matchDateTime, other.matchDateTime) && Kotlin.equals(this.playersCount, other.playersCount) && Kotlin.equals(this.registrationPossible, other.registrationPossible) && Kotlin.equals(this._links, other._links)))));
  };
  function MultipleModesJSON(_embedded, _links) {
    MultipleModesJSON$Companion_getInstance();
    this._embedded = _embedded;
    this._links = _links;
  }
  function MultipleModesJSON$Companion() {
    MultipleModesJSON$Companion_instance = this;
  }
  MultipleModesJSON$Companion.prototype.serializer = function () {
    return MultipleModesJSON$$serializer_getInstance();
  };
  MultipleModesJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultipleModesJSON$Companion_instance = null;
  function MultipleModesJSON$Companion_getInstance() {
    if (MultipleModesJSON$Companion_instance === null) {
      new MultipleModesJSON$Companion();
    }
    return MultipleModesJSON$Companion_instance;
  }
  function MultipleModesJSON$$serializer() {
    this.descriptor_tb43xg$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MultipleModesJSON', this);
    this.descriptor.addElement_ivxn3r$('_embedded', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    MultipleModesJSON$$serializer_instance = this;
  }
  Object.defineProperty(MultipleModesJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_tb43xg$_0;
    }
  });
  MultipleModesJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, ModeEmbeddedJSON$$serializer_getInstance(), obj._embedded);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), obj._links);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultipleModesJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, ModeEmbeddedJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, ModeEmbeddedJSON$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultipleModesJSON_init(bitMask0, local0, local1, null);
  };
  MultipleModesJSON$$serializer.prototype.childSerializers = function () {
    return [ModeEmbeddedJSON$$serializer_getInstance(), LinksJSON$$serializer_getInstance()];
  };
  MultipleModesJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultipleModesJSON$$serializer_instance = null;
  function MultipleModesJSON$$serializer_getInstance() {
    if (MultipleModesJSON$$serializer_instance === null) {
      new MultipleModesJSON$$serializer();
    }
    return MultipleModesJSON$$serializer_instance;
  }
  function MultipleModesJSON_init(seen1, _embedded, _links, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultipleModesJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('_embedded');
    else
      $this._embedded = _embedded;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    return $this;
  }
  MultipleModesJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleModesJSON',
    interfaces: []
  };
  MultipleModesJSON.prototype.component1 = function () {
    return this._embedded;
  };
  MultipleModesJSON.prototype.component2 = function () {
    return this._links;
  };
  MultipleModesJSON.prototype.copy_pd6f2y$ = function (_embedded, _links) {
    return new MultipleModesJSON(_embedded === void 0 ? this._embedded : _embedded, _links === void 0 ? this._links : _links);
  };
  MultipleModesJSON.prototype.toString = function () {
    return 'MultipleModesJSON(_embedded=' + Kotlin.toString(this._embedded) + (', _links=' + Kotlin.toString(this._links)) + ')';
  };
  MultipleModesJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._embedded) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    return result;
  };
  MultipleModesJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._embedded, other._embedded) && Kotlin.equals(this._links, other._links)))));
  };
  function ModeEmbeddedJSON(modeEntities) {
    ModeEmbeddedJSON$Companion_getInstance();
    this.modeEntities = modeEntities;
  }
  function ModeEmbeddedJSON$Companion() {
    ModeEmbeddedJSON$Companion_instance = this;
  }
  ModeEmbeddedJSON$Companion.prototype.serializer = function () {
    return ModeEmbeddedJSON$$serializer_getInstance();
  };
  ModeEmbeddedJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ModeEmbeddedJSON$Companion_instance = null;
  function ModeEmbeddedJSON$Companion_getInstance() {
    if (ModeEmbeddedJSON$Companion_instance === null) {
      new ModeEmbeddedJSON$Companion();
    }
    return ModeEmbeddedJSON$Companion_instance;
  }
  function ModeEmbeddedJSON$$serializer() {
    this.descriptor_jrh99$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.ModeEmbeddedJSON', this);
    this.descriptor.addElement_ivxn3r$('modeEntities', false);
    ModeEmbeddedJSON$$serializer_instance = this;
  }
  Object.defineProperty(ModeEmbeddedJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_jrh99$_0;
    }
  });
  ModeEmbeddedJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(ModeJSON$$serializer_getInstance()), obj.modeEntities);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ModeEmbeddedJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(ModeJSON$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(ModeJSON$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ModeEmbeddedJSON_init(bitMask0, local0, null);
  };
  ModeEmbeddedJSON$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(ModeJSON$$serializer_getInstance())];
  };
  ModeEmbeddedJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var ModeEmbeddedJSON$$serializer_instance = null;
  function ModeEmbeddedJSON$$serializer_getInstance() {
    if (ModeEmbeddedJSON$$serializer_instance === null) {
      new ModeEmbeddedJSON$$serializer();
    }
    return ModeEmbeddedJSON$$serializer_instance;
  }
  function ModeEmbeddedJSON_init(seen1, modeEntities, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ModeEmbeddedJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('modeEntities');
    else
      $this.modeEntities = modeEntities;
    return $this;
  }
  ModeEmbeddedJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModeEmbeddedJSON',
    interfaces: []
  };
  ModeEmbeddedJSON.prototype.component1 = function () {
    return this.modeEntities;
  };
  ModeEmbeddedJSON.prototype.copy_c3m4al$ = function (modeEntities) {
    return new ModeEmbeddedJSON(modeEntities === void 0 ? this.modeEntities : modeEntities);
  };
  ModeEmbeddedJSON.prototype.toString = function () {
    return 'ModeEmbeddedJSON(modeEntities=' + Kotlin.toString(this.modeEntities) + ')';
  };
  ModeEmbeddedJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.modeEntities) | 0;
    return result;
  };
  ModeEmbeddedJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.modeEntities, other.modeEntities))));
  };
  function ModeJSON(modeName, _links) {
    ModeJSON$Companion_getInstance();
    this.modeName = modeName;
    this._links = _links;
  }
  function ModeJSON$Companion() {
    ModeJSON$Companion_instance = this;
  }
  ModeJSON$Companion.prototype.serializer = function () {
    return ModeJSON$$serializer_getInstance();
  };
  ModeJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ModeJSON$Companion_instance = null;
  function ModeJSON$Companion_getInstance() {
    if (ModeJSON$Companion_instance === null) {
      new ModeJSON$Companion();
    }
    return ModeJSON$Companion_instance;
  }
  function ModeJSON$$serializer() {
    this.descriptor_5gmdon$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.ModeJSON', this);
    this.descriptor.addElement_ivxn3r$('modeName', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    ModeJSON$$serializer_instance = this;
  }
  Object.defineProperty(ModeJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_5gmdon$_0;
    }
  });
  ModeJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.modeName);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), obj._links);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ModeJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ModeJSON_init(bitMask0, local0, local1, null);
  };
  ModeJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, LinksJSON$$serializer_getInstance()];
  };
  ModeJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var ModeJSON$$serializer_instance = null;
  function ModeJSON$$serializer_getInstance() {
    if (ModeJSON$$serializer_instance === null) {
      new ModeJSON$$serializer();
    }
    return ModeJSON$$serializer_instance;
  }
  function ModeJSON_init(seen1, modeName, _links, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ModeJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('modeName');
    else
      $this.modeName = modeName;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    return $this;
  }
  ModeJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModeJSON',
    interfaces: []
  };
  ModeJSON.prototype.component1 = function () {
    return this.modeName;
  };
  ModeJSON.prototype.component2 = function () {
    return this._links;
  };
  ModeJSON.prototype.copy_a0uj7q$ = function (modeName, _links) {
    return new ModeJSON(modeName === void 0 ? this.modeName : modeName, _links === void 0 ? this._links : _links);
  };
  ModeJSON.prototype.toString = function () {
    return 'ModeJSON(modeName=' + Kotlin.toString(this.modeName) + (', _links=' + Kotlin.toString(this._links)) + ')';
  };
  ModeJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.modeName) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    return result;
  };
  ModeJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.modeName, other.modeName) && Kotlin.equals(this._links, other._links)))));
  };
  function PageJSON(size, totalElements, totalPages, number) {
    PageJSON$Companion_getInstance();
    this.size = size;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
    this.number = number;
  }
  function PageJSON$Companion() {
    PageJSON$Companion_instance = this;
  }
  PageJSON$Companion.prototype.serializer = function () {
    return PageJSON$$serializer_getInstance();
  };
  PageJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PageJSON$Companion_instance = null;
  function PageJSON$Companion_getInstance() {
    if (PageJSON$Companion_instance === null) {
      new PageJSON$Companion();
    }
    return PageJSON$Companion_instance;
  }
  function PageJSON$$serializer() {
    this.descriptor_r8mvc5$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.PageJSON', this);
    this.descriptor.addElement_ivxn3r$('size', false);
    this.descriptor.addElement_ivxn3r$('totalElements', false);
    this.descriptor.addElement_ivxn3r$('totalPages', false);
    this.descriptor.addElement_ivxn3r$('number', false);
    PageJSON$$serializer_instance = this;
  }
  Object.defineProperty(PageJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_r8mvc5$_0;
    }
  });
  PageJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.size);
    output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.totalElements);
    output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.totalPages);
    output.encodeLongElement_a3zgoj$(this.descriptor, 3, obj.number);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PageJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeLongElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PageJSON_init(bitMask0, local0, local1, local2, local3, null);
  };
  PageJSON$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.LongSerializer, internal.LongSerializer, internal.LongSerializer];
  };
  PageJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PageJSON$$serializer_instance = null;
  function PageJSON$$serializer_getInstance() {
    if (PageJSON$$serializer_instance === null) {
      new PageJSON$$serializer();
    }
    return PageJSON$$serializer_instance;
  }
  function PageJSON_init(seen1, size, totalElements, totalPages, number, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PageJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('size');
    else
      $this.size = size;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('totalElements');
    else
      $this.totalElements = totalElements;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('totalPages');
    else
      $this.totalPages = totalPages;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('number');
    else
      $this.number = number;
    return $this;
  }
  PageJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageJSON',
    interfaces: []
  };
  PageJSON.prototype.component1 = function () {
    return this.size;
  };
  PageJSON.prototype.component2 = function () {
    return this.totalElements;
  };
  PageJSON.prototype.component3 = function () {
    return this.totalPages;
  };
  PageJSON.prototype.component4 = function () {
    return this.number;
  };
  PageJSON.prototype.copy_tmkdev$ = function (size, totalElements, totalPages, number) {
    return new PageJSON(size === void 0 ? this.size : size, totalElements === void 0 ? this.totalElements : totalElements, totalPages === void 0 ? this.totalPages : totalPages, number === void 0 ? this.number : number);
  };
  PageJSON.prototype.toString = function () {
    return 'PageJSON(size=' + Kotlin.toString(this.size) + (', totalElements=' + Kotlin.toString(this.totalElements)) + (', totalPages=' + Kotlin.toString(this.totalPages)) + (', number=' + Kotlin.toString(this.number)) + ')';
  };
  PageJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalElements) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalPages) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    return result;
  };
  PageJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.totalElements, other.totalElements) && Kotlin.equals(this.totalPages, other.totalPages) && Kotlin.equals(this.number, other.number)))));
  };
  function MultipleRegistrationsJSON(_embedded, _links, page) {
    MultipleRegistrationsJSON$Companion_getInstance();
    this._embedded = _embedded;
    this._links = _links;
    this.page = page;
  }
  function MultipleRegistrationsJSON$Companion() {
    MultipleRegistrationsJSON$Companion_instance = this;
  }
  MultipleRegistrationsJSON$Companion.prototype.serializer = function () {
    return MultipleRegistrationsJSON$$serializer_getInstance();
  };
  MultipleRegistrationsJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultipleRegistrationsJSON$Companion_instance = null;
  function MultipleRegistrationsJSON$Companion_getInstance() {
    if (MultipleRegistrationsJSON$Companion_instance === null) {
      new MultipleRegistrationsJSON$Companion();
    }
    return MultipleRegistrationsJSON$Companion_instance;
  }
  function MultipleRegistrationsJSON$$serializer() {
    this.descriptor_as9bbi$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MultipleRegistrationsJSON', this);
    this.descriptor.addElement_ivxn3r$('_embedded', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    this.descriptor.addElement_ivxn3r$('page', false);
    MultipleRegistrationsJSON$$serializer_instance = this;
  }
  Object.defineProperty(MultipleRegistrationsJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_as9bbi$_0;
    }
  });
  MultipleRegistrationsJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, MultipleEmbeddedJSON$$serializer_getInstance(), obj._embedded);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), obj._links);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, PageJSON$$serializer_getInstance(), obj.page);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultipleRegistrationsJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, MultipleEmbeddedJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, MultipleEmbeddedJSON$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PageJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PageJSON$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultipleRegistrationsJSON_init(bitMask0, local0, local1, local2, null);
  };
  MultipleRegistrationsJSON$$serializer.prototype.childSerializers = function () {
    return [MultipleEmbeddedJSON$$serializer_getInstance(), LinksJSON$$serializer_getInstance(), PageJSON$$serializer_getInstance()];
  };
  MultipleRegistrationsJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultipleRegistrationsJSON$$serializer_instance = null;
  function MultipleRegistrationsJSON$$serializer_getInstance() {
    if (MultipleRegistrationsJSON$$serializer_instance === null) {
      new MultipleRegistrationsJSON$$serializer();
    }
    return MultipleRegistrationsJSON$$serializer_instance;
  }
  function MultipleRegistrationsJSON_init(seen1, _embedded, _links, page, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultipleRegistrationsJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('_embedded');
    else
      $this._embedded = _embedded;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('page');
    else
      $this.page = page;
    return $this;
  }
  MultipleRegistrationsJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleRegistrationsJSON',
    interfaces: []
  };
  MultipleRegistrationsJSON.prototype.component1 = function () {
    return this._embedded;
  };
  MultipleRegistrationsJSON.prototype.component2 = function () {
    return this._links;
  };
  MultipleRegistrationsJSON.prototype.component3 = function () {
    return this.page;
  };
  MultipleRegistrationsJSON.prototype.copy_h3ifrh$ = function (_embedded, _links, page) {
    return new MultipleRegistrationsJSON(_embedded === void 0 ? this._embedded : _embedded, _links === void 0 ? this._links : _links, page === void 0 ? this.page : page);
  };
  MultipleRegistrationsJSON.prototype.toString = function () {
    return 'MultipleRegistrationsJSON(_embedded=' + Kotlin.toString(this._embedded) + (', _links=' + Kotlin.toString(this._links)) + (', page=' + Kotlin.toString(this.page)) + ')';
  };
  MultipleRegistrationsJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._embedded) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  MultipleRegistrationsJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._embedded, other._embedded) && Kotlin.equals(this._links, other._links) && Kotlin.equals(this.page, other.page)))));
  };
  function MultipleEmbeddedJSON(registrationEntities) {
    MultipleEmbeddedJSON$Companion_getInstance();
    this.registrationEntities = registrationEntities;
  }
  function MultipleEmbeddedJSON$Companion() {
    MultipleEmbeddedJSON$Companion_instance = this;
  }
  MultipleEmbeddedJSON$Companion.prototype.serializer = function () {
    return MultipleEmbeddedJSON$$serializer_getInstance();
  };
  MultipleEmbeddedJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultipleEmbeddedJSON$Companion_instance = null;
  function MultipleEmbeddedJSON$Companion_getInstance() {
    if (MultipleEmbeddedJSON$Companion_instance === null) {
      new MultipleEmbeddedJSON$Companion();
    }
    return MultipleEmbeddedJSON$Companion_instance;
  }
  function MultipleEmbeddedJSON$$serializer() {
    this.descriptor_fc3bn4$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MultipleEmbeddedJSON', this);
    this.descriptor.addElement_ivxn3r$('registrationEntities', false);
    MultipleEmbeddedJSON$$serializer_instance = this;
  }
  Object.defineProperty(MultipleEmbeddedJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_fc3bn4$_0;
    }
  });
  MultipleEmbeddedJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(RegistrationJSON$$serializer_getInstance()), obj.registrationEntities);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultipleEmbeddedJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(RegistrationJSON$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(RegistrationJSON$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultipleEmbeddedJSON_init(bitMask0, local0, null);
  };
  MultipleEmbeddedJSON$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(RegistrationJSON$$serializer_getInstance())];
  };
  MultipleEmbeddedJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultipleEmbeddedJSON$$serializer_instance = null;
  function MultipleEmbeddedJSON$$serializer_getInstance() {
    if (MultipleEmbeddedJSON$$serializer_instance === null) {
      new MultipleEmbeddedJSON$$serializer();
    }
    return MultipleEmbeddedJSON$$serializer_instance;
  }
  function MultipleEmbeddedJSON_init(seen1, registrationEntities, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultipleEmbeddedJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('registrationEntities');
    else
      $this.registrationEntities = registrationEntities;
    return $this;
  }
  MultipleEmbeddedJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleEmbeddedJSON',
    interfaces: []
  };
  MultipleEmbeddedJSON.prototype.component1 = function () {
    return this.registrationEntities;
  };
  MultipleEmbeddedJSON.prototype.copy_om6909$ = function (registrationEntities) {
    return new MultipleEmbeddedJSON(registrationEntities === void 0 ? this.registrationEntities : registrationEntities);
  };
  MultipleEmbeddedJSON.prototype.toString = function () {
    return 'MultipleEmbeddedJSON(registrationEntities=' + Kotlin.toString(this.registrationEntities) + ')';
  };
  MultipleEmbeddedJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.registrationEntities) | 0;
    return result;
  };
  MultipleEmbeddedJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.registrationEntities, other.registrationEntities))));
  };
  function RegistrationJSON(id, outcome, _links) {
    RegistrationJSON$Companion_getInstance();
    if (outcome === void 0)
      outcome = null;
    this.id = id;
    this.outcome = outcome;
    this._links = _links;
  }
  function RegistrationJSON$Companion() {
    RegistrationJSON$Companion_instance = this;
  }
  RegistrationJSON$Companion.prototype.serializer = function () {
    return RegistrationJSON$$serializer_getInstance();
  };
  RegistrationJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RegistrationJSON$Companion_instance = null;
  function RegistrationJSON$Companion_getInstance() {
    if (RegistrationJSON$Companion_instance === null) {
      new RegistrationJSON$Companion();
    }
    return RegistrationJSON$Companion_instance;
  }
  function RegistrationJSON$$serializer() {
    this.descriptor_sppmbz$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.RegistrationJSON', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('outcome', true);
    this.descriptor.addElement_ivxn3r$('_links', false);
    RegistrationJSON$$serializer_instance = this;
  }
  Object.defineProperty(RegistrationJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_sppmbz$_0;
    }
  });
  RegistrationJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.outcome, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.outcome);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, LinksJSON$$serializer_getInstance(), obj._links);
    output.endStructure_qatsm0$(this.descriptor);
  };
  RegistrationJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, LinksJSON$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return RegistrationJSON_init(bitMask0, local0, local1, local2, null);
  };
  RegistrationJSON$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, new NullableSerializer(internal.StringSerializer), LinksJSON$$serializer_getInstance()];
  };
  RegistrationJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var RegistrationJSON$$serializer_instance = null;
  function RegistrationJSON$$serializer_getInstance() {
    if (RegistrationJSON$$serializer_instance === null) {
      new RegistrationJSON$$serializer();
    }
    return RegistrationJSON$$serializer_instance;
  }
  function RegistrationJSON_init(seen1, id, outcome, _links, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(RegistrationJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      $this.outcome = null;
    else
      $this.outcome = outcome;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    return $this;
  }
  RegistrationJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegistrationJSON',
    interfaces: []
  };
  RegistrationJSON.prototype.component1 = function () {
    return this.id;
  };
  RegistrationJSON.prototype.component2 = function () {
    return this.outcome;
  };
  RegistrationJSON.prototype.component3 = function () {
    return this._links;
  };
  RegistrationJSON.prototype.copy_3qo40w$ = function (id, outcome, _links) {
    return new RegistrationJSON(id === void 0 ? this.id : id, outcome === void 0 ? this.outcome : outcome, _links === void 0 ? this._links : _links);
  };
  RegistrationJSON.prototype.toString = function () {
    return 'RegistrationJSON(id=' + Kotlin.toString(this.id) + (', outcome=' + Kotlin.toString(this.outcome)) + (', _links=' + Kotlin.toString(this._links)) + ')';
  };
  RegistrationJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.outcome) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    return result;
  };
  RegistrationJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.outcome, other.outcome) && Kotlin.equals(this._links, other._links)))));
  };
  function MultipleTournamentsJSON(_embedded, _links, page) {
    MultipleTournamentsJSON$Companion_getInstance();
    this._embedded = _embedded;
    this._links = _links;
    this.page = page;
  }
  function MultipleTournamentsJSON$Companion() {
    MultipleTournamentsJSON$Companion_instance = this;
  }
  MultipleTournamentsJSON$Companion.prototype.serializer = function () {
    return MultipleTournamentsJSON$$serializer_getInstance();
  };
  MultipleTournamentsJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultipleTournamentsJSON$Companion_instance = null;
  function MultipleTournamentsJSON$Companion_getInstance() {
    if (MultipleTournamentsJSON$Companion_instance === null) {
      new MultipleTournamentsJSON$Companion();
    }
    return MultipleTournamentsJSON$Companion_instance;
  }
  function MultipleTournamentsJSON$$serializer() {
    this.descriptor_ir54bi$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MultipleTournamentsJSON', this);
    this.descriptor.addElement_ivxn3r$('_embedded', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    this.descriptor.addElement_ivxn3r$('page', false);
    MultipleTournamentsJSON$$serializer_instance = this;
  }
  Object.defineProperty(MultipleTournamentsJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ir54bi$_0;
    }
  });
  MultipleTournamentsJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, TournamentEmbeddedJSON$$serializer_getInstance(), obj._embedded);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), obj._links);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, PageJSON$$serializer_getInstance(), obj.page);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultipleTournamentsJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, TournamentEmbeddedJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, TournamentEmbeddedJSON$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PageJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PageJSON$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultipleTournamentsJSON_init(bitMask0, local0, local1, local2, null);
  };
  MultipleTournamentsJSON$$serializer.prototype.childSerializers = function () {
    return [TournamentEmbeddedJSON$$serializer_getInstance(), LinksJSON$$serializer_getInstance(), PageJSON$$serializer_getInstance()];
  };
  MultipleTournamentsJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultipleTournamentsJSON$$serializer_instance = null;
  function MultipleTournamentsJSON$$serializer_getInstance() {
    if (MultipleTournamentsJSON$$serializer_instance === null) {
      new MultipleTournamentsJSON$$serializer();
    }
    return MultipleTournamentsJSON$$serializer_instance;
  }
  function MultipleTournamentsJSON_init(seen1, _embedded, _links, page, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultipleTournamentsJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('_embedded');
    else
      $this._embedded = _embedded;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('page');
    else
      $this.page = page;
    return $this;
  }
  MultipleTournamentsJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleTournamentsJSON',
    interfaces: []
  };
  MultipleTournamentsJSON.prototype.component1 = function () {
    return this._embedded;
  };
  MultipleTournamentsJSON.prototype.component2 = function () {
    return this._links;
  };
  MultipleTournamentsJSON.prototype.component3 = function () {
    return this.page;
  };
  MultipleTournamentsJSON.prototype.copy_tl2q3w$ = function (_embedded, _links, page) {
    return new MultipleTournamentsJSON(_embedded === void 0 ? this._embedded : _embedded, _links === void 0 ? this._links : _links, page === void 0 ? this.page : page);
  };
  MultipleTournamentsJSON.prototype.toString = function () {
    return 'MultipleTournamentsJSON(_embedded=' + Kotlin.toString(this._embedded) + (', _links=' + Kotlin.toString(this._links)) + (', page=' + Kotlin.toString(this.page)) + ')';
  };
  MultipleTournamentsJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._embedded) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  MultipleTournamentsJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._embedded, other._embedded) && Kotlin.equals(this._links, other._links) && Kotlin.equals(this.page, other.page)))));
  };
  function TournamentEmbeddedJSON(tournamentEntities) {
    TournamentEmbeddedJSON$Companion_getInstance();
    this.tournamentEntities = tournamentEntities;
  }
  function TournamentEmbeddedJSON$Companion() {
    TournamentEmbeddedJSON$Companion_instance = this;
  }
  TournamentEmbeddedJSON$Companion.prototype.serializer = function () {
    return TournamentEmbeddedJSON$$serializer_getInstance();
  };
  TournamentEmbeddedJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TournamentEmbeddedJSON$Companion_instance = null;
  function TournamentEmbeddedJSON$Companion_getInstance() {
    if (TournamentEmbeddedJSON$Companion_instance === null) {
      new TournamentEmbeddedJSON$Companion();
    }
    return TournamentEmbeddedJSON$Companion_instance;
  }
  function TournamentEmbeddedJSON$$serializer() {
    this.descriptor_1f40wn$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.TournamentEmbeddedJSON', this);
    this.descriptor.addElement_ivxn3r$('tournamentEntities', false);
    TournamentEmbeddedJSON$$serializer_instance = this;
  }
  Object.defineProperty(TournamentEmbeddedJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_1f40wn$_0;
    }
  });
  TournamentEmbeddedJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(TournamentJSON$$serializer_getInstance()), obj.tournamentEntities);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TournamentEmbeddedJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(TournamentJSON$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(TournamentJSON$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TournamentEmbeddedJSON_init(bitMask0, local0, null);
  };
  TournamentEmbeddedJSON$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(TournamentJSON$$serializer_getInstance())];
  };
  TournamentEmbeddedJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var TournamentEmbeddedJSON$$serializer_instance = null;
  function TournamentEmbeddedJSON$$serializer_getInstance() {
    if (TournamentEmbeddedJSON$$serializer_instance === null) {
      new TournamentEmbeddedJSON$$serializer();
    }
    return TournamentEmbeddedJSON$$serializer_instance;
  }
  function TournamentEmbeddedJSON_init(seen1, tournamentEntities, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(TournamentEmbeddedJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('tournamentEntities');
    else
      $this.tournamentEntities = tournamentEntities;
    return $this;
  }
  TournamentEmbeddedJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TournamentEmbeddedJSON',
    interfaces: []
  };
  TournamentEmbeddedJSON.prototype.component1 = function () {
    return this.tournamentEntities;
  };
  TournamentEmbeddedJSON.prototype.copy_ftzao9$ = function (tournamentEntities) {
    return new TournamentEmbeddedJSON(tournamentEntities === void 0 ? this.tournamentEntities : tournamentEntities);
  };
  TournamentEmbeddedJSON.prototype.toString = function () {
    return 'TournamentEmbeddedJSON(tournamentEntities=' + Kotlin.toString(this.tournamentEntities) + ')';
  };
  TournamentEmbeddedJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentEntities) | 0;
    return result;
  };
  TournamentEmbeddedJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.tournamentEntities, other.tournamentEntities))));
  };
  function TournamentJSON(id, playersNumber, tournamentDescription, tournamentMode, title, _links) {
    TournamentJSON$Companion_getInstance();
    this.id = id;
    this.playersNumber = playersNumber;
    this.tournamentDescription = tournamentDescription;
    this.tournamentMode = tournamentMode;
    this.title = title;
    this._links = _links;
  }
  function TournamentJSON$Companion() {
    TournamentJSON$Companion_instance = this;
  }
  TournamentJSON$Companion.prototype.serializer = function () {
    return TournamentJSON$$serializer_getInstance();
  };
  TournamentJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TournamentJSON$Companion_instance = null;
  function TournamentJSON$Companion_getInstance() {
    if (TournamentJSON$Companion_instance === null) {
      new TournamentJSON$Companion();
    }
    return TournamentJSON$Companion_instance;
  }
  function TournamentJSON$$serializer() {
    this.descriptor_pc80qn$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.TournamentJSON', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('playersNumber', false);
    this.descriptor.addElement_ivxn3r$('tournamentDescription', false);
    this.descriptor.addElement_ivxn3r$('tournamentMode', false);
    this.descriptor.addElement_ivxn3r$('title', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    TournamentJSON$$serializer_instance = this;
  }
  Object.defineProperty(TournamentJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_pc80qn$_0;
    }
  });
  TournamentJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.playersNumber);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.tournamentDescription);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.tournamentMode);
    output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.title);
    output.encodeSerializableElement_blecud$(this.descriptor, 5, LinksJSON$$serializer_getInstance(), obj._links);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TournamentJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 5, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 5, LinksJSON$$serializer_getInstance(), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TournamentJSON_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  TournamentJSON$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, LinksJSON$$serializer_getInstance()];
  };
  TournamentJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var TournamentJSON$$serializer_instance = null;
  function TournamentJSON$$serializer_getInstance() {
    if (TournamentJSON$$serializer_instance === null) {
      new TournamentJSON$$serializer();
    }
    return TournamentJSON$$serializer_instance;
  }
  function TournamentJSON_init(seen1, id, playersNumber, tournamentDescription, tournamentMode, title, _links, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(TournamentJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('playersNumber');
    else
      $this.playersNumber = playersNumber;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('tournamentDescription');
    else
      $this.tournamentDescription = tournamentDescription;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('tournamentMode');
    else
      $this.tournamentMode = tournamentMode;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('title');
    else
      $this.title = title;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    return $this;
  }
  TournamentJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TournamentJSON',
    interfaces: []
  };
  TournamentJSON.prototype.component1 = function () {
    return this.id;
  };
  TournamentJSON.prototype.component2 = function () {
    return this.playersNumber;
  };
  TournamentJSON.prototype.component3 = function () {
    return this.tournamentDescription;
  };
  TournamentJSON.prototype.component4 = function () {
    return this.tournamentMode;
  };
  TournamentJSON.prototype.component5 = function () {
    return this.title;
  };
  TournamentJSON.prototype.component6 = function () {
    return this._links;
  };
  TournamentJSON.prototype.copy_vpjh3$ = function (id, playersNumber, tournamentDescription, tournamentMode, title, _links) {
    return new TournamentJSON(id === void 0 ? this.id : id, playersNumber === void 0 ? this.playersNumber : playersNumber, tournamentDescription === void 0 ? this.tournamentDescription : tournamentDescription, tournamentMode === void 0 ? this.tournamentMode : tournamentMode, title === void 0 ? this.title : title, _links === void 0 ? this._links : _links);
  };
  TournamentJSON.prototype.toString = function () {
    return 'TournamentJSON(id=' + Kotlin.toString(this.id) + (', playersNumber=' + Kotlin.toString(this.playersNumber)) + (', tournamentDescription=' + Kotlin.toString(this.tournamentDescription)) + (', tournamentMode=' + Kotlin.toString(this.tournamentMode)) + (', title=' + Kotlin.toString(this.title)) + (', _links=' + Kotlin.toString(this._links)) + ')';
  };
  TournamentJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.playersNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentDescription) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    return result;
  };
  TournamentJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.playersNumber, other.playersNumber) && Kotlin.equals(this.tournamentDescription, other.tournamentDescription) && Kotlin.equals(this.tournamentMode, other.tournamentMode) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this._links, other._links)))));
  };
  function UserFIREBASE(id, email, nickname, image, isAccountVerified) {
    UserFIREBASE$Companion_getInstance();
    if (image === void 0)
      image = null;
    this.id = id;
    this.email = email;
    this.nickname = nickname;
    this.image = image;
    this.isAccountVerified = isAccountVerified;
  }
  function UserFIREBASE$Companion() {
    UserFIREBASE$Companion_instance = this;
  }
  UserFIREBASE$Companion.prototype.serializer = function () {
    return UserFIREBASE$$serializer_getInstance();
  };
  UserFIREBASE$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserFIREBASE$Companion_instance = null;
  function UserFIREBASE$Companion_getInstance() {
    if (UserFIREBASE$Companion_instance === null) {
      new UserFIREBASE$Companion();
    }
    return UserFIREBASE$Companion_instance;
  }
  function UserFIREBASE$$serializer() {
    this.descriptor_4rc03k$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.UserFIREBASE', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('email', false);
    this.descriptor.addElement_ivxn3r$('nickname', false);
    this.descriptor.addElement_ivxn3r$('image', true);
    this.descriptor.addElement_ivxn3r$('isAccountVerified', false);
    UserFIREBASE$$serializer_instance = this;
  }
  Object.defineProperty(UserFIREBASE$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_4rc03k$_0;
    }
  });
  UserFIREBASE$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.email);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.nickname);
    if (!equals(obj.image, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, internal.StringSerializer, obj.image);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 4, obj.isAccountVerified);
    output.endStructure_qatsm0$(this.descriptor);
  };
  UserFIREBASE$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, internal.StringSerializer, local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return UserFIREBASE_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  UserFIREBASE$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, new NullableSerializer(internal.StringSerializer), internal.BooleanSerializer];
  };
  UserFIREBASE$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var UserFIREBASE$$serializer_instance = null;
  function UserFIREBASE$$serializer_getInstance() {
    if (UserFIREBASE$$serializer_instance === null) {
      new UserFIREBASE$$serializer();
    }
    return UserFIREBASE$$serializer_instance;
  }
  function UserFIREBASE_init(seen1, id, email, nickname, image, isAccountVerified, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(UserFIREBASE.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('email');
    else
      $this.email = email;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('nickname');
    else
      $this.nickname = nickname;
    if ((seen1 & 8) === 0)
      $this.image = null;
    else
      $this.image = image;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('isAccountVerified');
    else
      $this.isAccountVerified = isAccountVerified;
    return $this;
  }
  UserFIREBASE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserFIREBASE',
    interfaces: []
  };
  UserFIREBASE.prototype.component1 = function () {
    return this.id;
  };
  UserFIREBASE.prototype.component2 = function () {
    return this.email;
  };
  UserFIREBASE.prototype.component3 = function () {
    return this.nickname;
  };
  UserFIREBASE.prototype.component4 = function () {
    return this.image;
  };
  UserFIREBASE.prototype.component5 = function () {
    return this.isAccountVerified;
  };
  UserFIREBASE.prototype.copy_feqbc4$ = function (id, email, nickname, image, isAccountVerified) {
    return new UserFIREBASE(id === void 0 ? this.id : id, email === void 0 ? this.email : email, nickname === void 0 ? this.nickname : nickname, image === void 0 ? this.image : image, isAccountVerified === void 0 ? this.isAccountVerified : isAccountVerified);
  };
  UserFIREBASE.prototype.toString = function () {
    return 'UserFIREBASE(id=' + Kotlin.toString(this.id) + (', email=' + Kotlin.toString(this.email)) + (', nickname=' + Kotlin.toString(this.nickname)) + (', image=' + Kotlin.toString(this.image)) + (', isAccountVerified=' + Kotlin.toString(this.isAccountVerified)) + ')';
  };
  UserFIREBASE.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.nickname) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.isAccountVerified) | 0;
    return result;
  };
  UserFIREBASE.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.nickname, other.nickname) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.isAccountVerified, other.isAccountVerified)))));
  };
  function MultipleUsersJSON(_embedded, _links, page) {
    MultipleUsersJSON$Companion_getInstance();
    this._embedded = _embedded;
    this._links = _links;
    this.page = page;
  }
  function MultipleUsersJSON$Companion() {
    MultipleUsersJSON$Companion_instance = this;
  }
  MultipleUsersJSON$Companion.prototype.serializer = function () {
    return MultipleUsersJSON$$serializer_getInstance();
  };
  MultipleUsersJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultipleUsersJSON$Companion_instance = null;
  function MultipleUsersJSON$Companion_getInstance() {
    if (MultipleUsersJSON$Companion_instance === null) {
      new MultipleUsersJSON$Companion();
    }
    return MultipleUsersJSON$Companion_instance;
  }
  function MultipleUsersJSON$$serializer() {
    this.descriptor_t6rw3o$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.MultipleUsersJSON', this);
    this.descriptor.addElement_ivxn3r$('_embedded', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    this.descriptor.addElement_ivxn3r$('page', false);
    MultipleUsersJSON$$serializer_instance = this;
  }
  Object.defineProperty(MultipleUsersJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_t6rw3o$_0;
    }
  });
  MultipleUsersJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, UserEmbeddedJSON$$serializer_getInstance(), obj._embedded);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), obj._links);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, PageJSON$$serializer_getInstance(), obj.page);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultipleUsersJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, UserEmbeddedJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, UserEmbeddedJSON$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LinksJSON$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PageJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PageJSON$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultipleUsersJSON_init(bitMask0, local0, local1, local2, null);
  };
  MultipleUsersJSON$$serializer.prototype.childSerializers = function () {
    return [UserEmbeddedJSON$$serializer_getInstance(), LinksJSON$$serializer_getInstance(), PageJSON$$serializer_getInstance()];
  };
  MultipleUsersJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultipleUsersJSON$$serializer_instance = null;
  function MultipleUsersJSON$$serializer_getInstance() {
    if (MultipleUsersJSON$$serializer_instance === null) {
      new MultipleUsersJSON$$serializer();
    }
    return MultipleUsersJSON$$serializer_instance;
  }
  function MultipleUsersJSON_init(seen1, _embedded, _links, page, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultipleUsersJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('_embedded');
    else
      $this._embedded = _embedded;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('page');
    else
      $this.page = page;
    return $this;
  }
  MultipleUsersJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleUsersJSON',
    interfaces: []
  };
  MultipleUsersJSON.prototype.component1 = function () {
    return this._embedded;
  };
  MultipleUsersJSON.prototype.component2 = function () {
    return this._links;
  };
  MultipleUsersJSON.prototype.component3 = function () {
    return this.page;
  };
  MultipleUsersJSON.prototype.copy_r0euq6$ = function (_embedded, _links, page) {
    return new MultipleUsersJSON(_embedded === void 0 ? this._embedded : _embedded, _links === void 0 ? this._links : _links, page === void 0 ? this.page : page);
  };
  MultipleUsersJSON.prototype.toString = function () {
    return 'MultipleUsersJSON(_embedded=' + Kotlin.toString(this._embedded) + (', _links=' + Kotlin.toString(this._links)) + (', page=' + Kotlin.toString(this.page)) + ')';
  };
  MultipleUsersJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._embedded) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  MultipleUsersJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._embedded, other._embedded) && Kotlin.equals(this._links, other._links) && Kotlin.equals(this.page, other.page)))));
  };
  function UserEmbeddedJSON(userEntities) {
    UserEmbeddedJSON$Companion_getInstance();
    this.userEntities = userEntities;
  }
  function UserEmbeddedJSON$Companion() {
    UserEmbeddedJSON$Companion_instance = this;
  }
  UserEmbeddedJSON$Companion.prototype.serializer = function () {
    return UserEmbeddedJSON$$serializer_getInstance();
  };
  UserEmbeddedJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserEmbeddedJSON$Companion_instance = null;
  function UserEmbeddedJSON$Companion_getInstance() {
    if (UserEmbeddedJSON$Companion_instance === null) {
      new UserEmbeddedJSON$Companion();
    }
    return UserEmbeddedJSON$Companion_instance;
  }
  function UserEmbeddedJSON$$serializer() {
    this.descriptor_glhxxn$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.UserEmbeddedJSON', this);
    this.descriptor.addElement_ivxn3r$('userEntities', false);
    UserEmbeddedJSON$$serializer_instance = this;
  }
  Object.defineProperty(UserEmbeddedJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_glhxxn$_0;
    }
  });
  UserEmbeddedJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(UserJSON$$serializer_getInstance()), obj.userEntities);
    output.endStructure_qatsm0$(this.descriptor);
  };
  UserEmbeddedJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(UserJSON$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(UserJSON$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return UserEmbeddedJSON_init(bitMask0, local0, null);
  };
  UserEmbeddedJSON$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(UserJSON$$serializer_getInstance())];
  };
  UserEmbeddedJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var UserEmbeddedJSON$$serializer_instance = null;
  function UserEmbeddedJSON$$serializer_getInstance() {
    if (UserEmbeddedJSON$$serializer_instance === null) {
      new UserEmbeddedJSON$$serializer();
    }
    return UserEmbeddedJSON$$serializer_instance;
  }
  function UserEmbeddedJSON_init(seen1, userEntities, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(UserEmbeddedJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('userEntities');
    else
      $this.userEntities = userEntities;
    return $this;
  }
  UserEmbeddedJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserEmbeddedJSON',
    interfaces: []
  };
  UserEmbeddedJSON.prototype.component1 = function () {
    return this.userEntities;
  };
  UserEmbeddedJSON.prototype.copy_jvoqgb$ = function (userEntities) {
    return new UserEmbeddedJSON(userEntities === void 0 ? this.userEntities : userEntities);
  };
  UserEmbeddedJSON.prototype.toString = function () {
    return 'UserEmbeddedJSON(userEntities=' + Kotlin.toString(this.userEntities) + ')';
  };
  UserEmbeddedJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.userEntities) | 0;
    return result;
  };
  UserEmbeddedJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.userEntities, other.userEntities))));
  };
  function UserJSON(id, email, nickname, image, verified, subscriber, _links) {
    UserJSON$Companion_getInstance();
    this.id = id;
    this.email = email;
    this.nickname = nickname;
    this.image = image;
    this.verified = verified;
    this.subscriber = subscriber;
    this._links = _links;
  }
  function UserJSON$Companion() {
    UserJSON$Companion_instance = this;
  }
  UserJSON$Companion.prototype.serializer = function () {
    return UserJSON$$serializer_getInstance();
  };
  UserJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserJSON$Companion_instance = null;
  function UserJSON$Companion_getInstance() {
    if (UserJSON$Companion_instance === null) {
      new UserJSON$Companion();
    }
    return UserJSON$Companion_instance;
  }
  function UserJSON$$serializer() {
    this.descriptor_ryxvof$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.UserJSON', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('email', false);
    this.descriptor.addElement_ivxn3r$('nickname', false);
    this.descriptor.addElement_ivxn3r$('image', false);
    this.descriptor.addElement_ivxn3r$('verified', false);
    this.descriptor.addElement_ivxn3r$('subscriber', false);
    this.descriptor.addElement_ivxn3r$('_links', false);
    UserJSON$$serializer_instance = this;
  }
  Object.defineProperty(UserJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ryxvof$_0;
    }
  });
  UserJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.email);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.nickname);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.image);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 4, obj.verified);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 5, obj.subscriber);
    output.encodeSerializableElement_blecud$(this.descriptor, 6, LinksJSON$$serializer_getInstance(), obj._links);
    output.endStructure_qatsm0$(this.descriptor);
  };
  UserJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          local6 = (bitMask0 & 64) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 6, LinksJSON$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 6, LinksJSON$$serializer_getInstance(), local6);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return UserJSON_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, null);
  };
  UserJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer, internal.BooleanSerializer, LinksJSON$$serializer_getInstance()];
  };
  UserJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var UserJSON$$serializer_instance = null;
  function UserJSON$$serializer_getInstance() {
    if (UserJSON$$serializer_instance === null) {
      new UserJSON$$serializer();
    }
    return UserJSON$$serializer_instance;
  }
  function UserJSON_init(seen1, id, email, nickname, image, verified, subscriber, _links, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(UserJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('email');
    else
      $this.email = email;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('nickname');
    else
      $this.nickname = nickname;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('image');
    else
      $this.image = image;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('verified');
    else
      $this.verified = verified;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('subscriber');
    else
      $this.subscriber = subscriber;
    if ((seen1 & 64) === 0)
      throw new MissingFieldException('_links');
    else
      $this._links = _links;
    return $this;
  }
  UserJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserJSON',
    interfaces: []
  };
  UserJSON.prototype.component1 = function () {
    return this.id;
  };
  UserJSON.prototype.component2 = function () {
    return this.email;
  };
  UserJSON.prototype.component3 = function () {
    return this.nickname;
  };
  UserJSON.prototype.component4 = function () {
    return this.image;
  };
  UserJSON.prototype.component5 = function () {
    return this.verified;
  };
  UserJSON.prototype.component6 = function () {
    return this.subscriber;
  };
  UserJSON.prototype.component7 = function () {
    return this._links;
  };
  UserJSON.prototype.copy_zal06o$ = function (id, email, nickname, image, verified, subscriber, _links) {
    return new UserJSON(id === void 0 ? this.id : id, email === void 0 ? this.email : email, nickname === void 0 ? this.nickname : nickname, image === void 0 ? this.image : image, verified === void 0 ? this.verified : verified, subscriber === void 0 ? this.subscriber : subscriber, _links === void 0 ? this._links : _links);
  };
  UserJSON.prototype.toString = function () {
    return 'UserJSON(id=' + Kotlin.toString(this.id) + (', email=' + Kotlin.toString(this.email)) + (', nickname=' + Kotlin.toString(this.nickname)) + (', image=' + Kotlin.toString(this.image)) + (', verified=' + Kotlin.toString(this.verified)) + (', subscriber=' + Kotlin.toString(this.subscriber)) + (', _links=' + Kotlin.toString(this._links)) + ')';
  };
  UserJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.nickname) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.verified) | 0;
    result = result * 31 + Kotlin.hashCode(this.subscriber) | 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    return result;
  };
  UserJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.nickname, other.nickname) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.verified, other.verified) && Kotlin.equals(this.subscriber, other.subscriber) && Kotlin.equals(this._links, other._links)))));
  };
  function CreateGameJSON(gameName, availableModes, image, icon) {
    CreateGameJSON$Companion_getInstance();
    this.gameName = gameName;
    this.availableModes = availableModes;
    this.image = image;
    this.icon = icon;
  }
  function CreateGameJSON$Companion() {
    CreateGameJSON$Companion_instance = this;
  }
  CreateGameJSON$Companion.prototype.serializer = function () {
    return CreateGameJSON$$serializer_getInstance();
  };
  CreateGameJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CreateGameJSON$Companion_instance = null;
  function CreateGameJSON$Companion_getInstance() {
    if (CreateGameJSON$Companion_instance === null) {
      new CreateGameJSON$Companion();
    }
    return CreateGameJSON$Companion_instance;
  }
  function CreateGameJSON$$serializer() {
    this.descriptor_550r5w$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.createresponses.CreateGameJSON', this);
    this.descriptor.addElement_ivxn3r$('gameName', false);
    this.descriptor.addElement_ivxn3r$('availableModes', false);
    this.descriptor.addElement_ivxn3r$('image', false);
    this.descriptor.addElement_ivxn3r$('icon', false);
    CreateGameJSON$$serializer_instance = this;
  }
  Object.defineProperty(CreateGameJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_550r5w$_0;
    }
  });
  CreateGameJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.gameName);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), obj.availableModes);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.image);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.icon);
    output.endStructure_qatsm0$(this.descriptor);
  };
  CreateGameJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return CreateGameJSON_init(bitMask0, local0, local1, local2, local3, null);
  };
  CreateGameJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ArrayListSerializer(internal.StringSerializer), internal.StringSerializer, internal.StringSerializer];
  };
  CreateGameJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CreateGameJSON$$serializer_instance = null;
  function CreateGameJSON$$serializer_getInstance() {
    if (CreateGameJSON$$serializer_instance === null) {
      new CreateGameJSON$$serializer();
    }
    return CreateGameJSON$$serializer_instance;
  }
  function CreateGameJSON_init(seen1, gameName, availableModes, image, icon, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CreateGameJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('gameName');
    else
      $this.gameName = gameName;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('availableModes');
    else
      $this.availableModes = availableModes;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('image');
    else
      $this.image = image;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('icon');
    else
      $this.icon = icon;
    return $this;
  }
  CreateGameJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateGameJSON',
    interfaces: []
  };
  CreateGameJSON.prototype.component1 = function () {
    return this.gameName;
  };
  CreateGameJSON.prototype.component2 = function () {
    return this.availableModes;
  };
  CreateGameJSON.prototype.component3 = function () {
    return this.image;
  };
  CreateGameJSON.prototype.component4 = function () {
    return this.icon;
  };
  CreateGameJSON.prototype.copy_jvrvdj$ = function (gameName, availableModes, image, icon) {
    return new CreateGameJSON(gameName === void 0 ? this.gameName : gameName, availableModes === void 0 ? this.availableModes : availableModes, image === void 0 ? this.image : image, icon === void 0 ? this.icon : icon);
  };
  CreateGameJSON.prototype.toString = function () {
    return 'CreateGameJSON(gameName=' + Kotlin.toString(this.gameName) + (', availableModes=' + Kotlin.toString(this.availableModes)) + (', image=' + Kotlin.toString(this.image)) + (', icon=' + Kotlin.toString(this.icon)) + ')';
  };
  CreateGameJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameName) | 0;
    result = result * 31 + Kotlin.hashCode(this.availableModes) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    return result;
  };
  CreateGameJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameName, other.gameName) && Kotlin.equals(this.availableModes, other.availableModes) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.icon, other.icon)))));
  };
  function CreateGameModeJSON(modeName) {
    CreateGameModeJSON$Companion_getInstance();
    this.modeName = modeName;
  }
  function CreateGameModeJSON$Companion() {
    CreateGameModeJSON$Companion_instance = this;
  }
  CreateGameModeJSON$Companion.prototype.serializer = function () {
    return CreateGameModeJSON$$serializer_getInstance();
  };
  CreateGameModeJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CreateGameModeJSON$Companion_instance = null;
  function CreateGameModeJSON$Companion_getInstance() {
    if (CreateGameModeJSON$Companion_instance === null) {
      new CreateGameModeJSON$Companion();
    }
    return CreateGameModeJSON$Companion_instance;
  }
  function CreateGameModeJSON$$serializer() {
    this.descriptor_2lk2ip$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.createresponses.CreateGameModeJSON', this);
    this.descriptor.addElement_ivxn3r$('modeName', false);
    CreateGameModeJSON$$serializer_instance = this;
  }
  Object.defineProperty(CreateGameModeJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_2lk2ip$_0;
    }
  });
  CreateGameModeJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.modeName);
    output.endStructure_qatsm0$(this.descriptor);
  };
  CreateGameModeJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return CreateGameModeJSON_init(bitMask0, local0, null);
  };
  CreateGameModeJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  CreateGameModeJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CreateGameModeJSON$$serializer_instance = null;
  function CreateGameModeJSON$$serializer_getInstance() {
    if (CreateGameModeJSON$$serializer_instance === null) {
      new CreateGameModeJSON$$serializer();
    }
    return CreateGameModeJSON$$serializer_instance;
  }
  function CreateGameModeJSON_init(seen1, modeName, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CreateGameModeJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('modeName');
    else
      $this.modeName = modeName;
    return $this;
  }
  CreateGameModeJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateGameModeJSON',
    interfaces: []
  };
  CreateGameModeJSON.prototype.component1 = function () {
    return this.modeName;
  };
  CreateGameModeJSON.prototype.copy_61zpoe$ = function (modeName) {
    return new CreateGameModeJSON(modeName === void 0 ? this.modeName : modeName);
  };
  CreateGameModeJSON.prototype.toString = function () {
    return 'CreateGameModeJSON(modeName=' + Kotlin.toString(this.modeName) + ')';
  };
  CreateGameModeJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.modeName) | 0;
    return result;
  };
  CreateGameModeJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.modeName, other.modeName))));
  };
  function CreateMatchJSON(matchDateTime, playersCount, isRegistrationPossible, tournament) {
    CreateMatchJSON$Companion_getInstance();
    this.matchDateTime = matchDateTime;
    this.playersCount = playersCount;
    this.isRegistrationPossible = isRegistrationPossible;
    this.tournament = tournament;
  }
  function CreateMatchJSON$Companion() {
    CreateMatchJSON$Companion_instance = this;
  }
  CreateMatchJSON$Companion.prototype.serializer = function () {
    return CreateMatchJSON$$serializer_getInstance();
  };
  CreateMatchJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CreateMatchJSON$Companion_instance = null;
  function CreateMatchJSON$Companion_getInstance() {
    if (CreateMatchJSON$Companion_instance === null) {
      new CreateMatchJSON$Companion();
    }
    return CreateMatchJSON$Companion_instance;
  }
  function CreateMatchJSON$$serializer() {
    this.descriptor_yj17m3$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.createresponses.CreateMatchJSON', this);
    this.descriptor.addElement_ivxn3r$('matchDateTime', false);
    this.descriptor.addElement_ivxn3r$('playersCount', false);
    this.descriptor.addElement_ivxn3r$('isRegistrationPossible', false);
    this.descriptor.addElement_ivxn3r$('tournament', false);
    CreateMatchJSON$$serializer_instance = this;
  }
  Object.defineProperty(CreateMatchJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_yj17m3$_0;
    }
  });
  CreateMatchJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.matchDateTime);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.playersCount);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 2, obj.isRegistrationPossible);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.tournament);
    output.endStructure_qatsm0$(this.descriptor);
  };
  CreateMatchJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return CreateMatchJSON_init(bitMask0, local0, local1, local2, local3, null);
  };
  CreateMatchJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer, internal.BooleanSerializer, internal.StringSerializer];
  };
  CreateMatchJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CreateMatchJSON$$serializer_instance = null;
  function CreateMatchJSON$$serializer_getInstance() {
    if (CreateMatchJSON$$serializer_instance === null) {
      new CreateMatchJSON$$serializer();
    }
    return CreateMatchJSON$$serializer_instance;
  }
  function CreateMatchJSON_init(seen1, matchDateTime, playersCount, isRegistrationPossible, tournament, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CreateMatchJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('matchDateTime');
    else
      $this.matchDateTime = matchDateTime;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('playersCount');
    else
      $this.playersCount = playersCount;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('isRegistrationPossible');
    else
      $this.isRegistrationPossible = isRegistrationPossible;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('tournament');
    else
      $this.tournament = tournament;
    return $this;
  }
  CreateMatchJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateMatchJSON',
    interfaces: []
  };
  CreateMatchJSON.prototype.component1 = function () {
    return this.matchDateTime;
  };
  CreateMatchJSON.prototype.component2 = function () {
    return this.playersCount;
  };
  CreateMatchJSON.prototype.component3 = function () {
    return this.isRegistrationPossible;
  };
  CreateMatchJSON.prototype.component4 = function () {
    return this.tournament;
  };
  CreateMatchJSON.prototype.copy_welerb$ = function (matchDateTime, playersCount, isRegistrationPossible, tournament) {
    return new CreateMatchJSON(matchDateTime === void 0 ? this.matchDateTime : matchDateTime, playersCount === void 0 ? this.playersCount : playersCount, isRegistrationPossible === void 0 ? this.isRegistrationPossible : isRegistrationPossible, tournament === void 0 ? this.tournament : tournament);
  };
  CreateMatchJSON.prototype.toString = function () {
    return 'CreateMatchJSON(matchDateTime=' + Kotlin.toString(this.matchDateTime) + (', playersCount=' + Kotlin.toString(this.playersCount)) + (', isRegistrationPossible=' + Kotlin.toString(this.isRegistrationPossible)) + (', tournament=' + Kotlin.toString(this.tournament)) + ')';
  };
  CreateMatchJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matchDateTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.playersCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRegistrationPossible) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournament) | 0;
    return result;
  };
  CreateMatchJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.matchDateTime, other.matchDateTime) && Kotlin.equals(this.playersCount, other.playersCount) && Kotlin.equals(this.isRegistrationPossible, other.isRegistrationPossible) && Kotlin.equals(this.tournament, other.tournament)))));
  };
  function CreateRegistrationJSON(user, match, outcome) {
    CreateRegistrationJSON$Companion_getInstance();
    if (outcome === void 0)
      outcome = null;
    this.user = user;
    this.match = match;
    this.outcome = outcome;
  }
  function CreateRegistrationJSON$Companion() {
    CreateRegistrationJSON$Companion_instance = this;
  }
  CreateRegistrationJSON$Companion.prototype.serializer = function () {
    return CreateRegistrationJSON$$serializer_getInstance();
  };
  CreateRegistrationJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CreateRegistrationJSON$Companion_instance = null;
  function CreateRegistrationJSON$Companion_getInstance() {
    if (CreateRegistrationJSON$Companion_instance === null) {
      new CreateRegistrationJSON$Companion();
    }
    return CreateRegistrationJSON$Companion_instance;
  }
  function CreateRegistrationJSON$$serializer() {
    this.descriptor_szrr1$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.createresponses.CreateRegistrationJSON', this);
    this.descriptor.addElement_ivxn3r$('user', false);
    this.descriptor.addElement_ivxn3r$('match', false);
    this.descriptor.addElement_ivxn3r$('outcome', true);
    CreateRegistrationJSON$$serializer_instance = this;
  }
  Object.defineProperty(CreateRegistrationJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_szrr1$_0;
    }
  });
  CreateRegistrationJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.user);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.match);
    if (!equals(obj.outcome, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, internal.StringSerializer, obj.outcome);
    output.endStructure_qatsm0$(this.descriptor);
  };
  CreateRegistrationJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, internal.StringSerializer, local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return CreateRegistrationJSON_init(bitMask0, local0, local1, local2, null);
  };
  CreateRegistrationJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, new NullableSerializer(internal.StringSerializer)];
  };
  CreateRegistrationJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CreateRegistrationJSON$$serializer_instance = null;
  function CreateRegistrationJSON$$serializer_getInstance() {
    if (CreateRegistrationJSON$$serializer_instance === null) {
      new CreateRegistrationJSON$$serializer();
    }
    return CreateRegistrationJSON$$serializer_instance;
  }
  function CreateRegistrationJSON_init(seen1, user, match, outcome, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CreateRegistrationJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('user');
    else
      $this.user = user;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('match');
    else
      $this.match = match;
    if ((seen1 & 4) === 0)
      $this.outcome = null;
    else
      $this.outcome = outcome;
    return $this;
  }
  CreateRegistrationJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateRegistrationJSON',
    interfaces: []
  };
  CreateRegistrationJSON.prototype.component1 = function () {
    return this.user;
  };
  CreateRegistrationJSON.prototype.component2 = function () {
    return this.match;
  };
  CreateRegistrationJSON.prototype.component3 = function () {
    return this.outcome;
  };
  CreateRegistrationJSON.prototype.copy_buzeal$ = function (user, match, outcome) {
    return new CreateRegistrationJSON(user === void 0 ? this.user : user, match === void 0 ? this.match : match, outcome === void 0 ? this.outcome : outcome);
  };
  CreateRegistrationJSON.prototype.toString = function () {
    return 'CreateRegistrationJSON(user=' + Kotlin.toString(this.user) + (', match=' + Kotlin.toString(this.match)) + (', outcome=' + Kotlin.toString(this.outcome)) + ')';
  };
  CreateRegistrationJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.match) | 0;
    result = result * 31 + Kotlin.hashCode(this.outcome) | 0;
    return result;
  };
  CreateRegistrationJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.match, other.match) && Kotlin.equals(this.outcome, other.outcome)))));
  };
  function CreateTournamentJSON(playersNumber, title, tournamentDescription, tournamentMode, admin, game) {
    CreateTournamentJSON$Companion_getInstance();
    this.playersNumber = playersNumber;
    this.title = title;
    this.tournamentDescription = tournamentDescription;
    this.tournamentMode = tournamentMode;
    this.admin = admin;
    this.game = game;
  }
  function CreateTournamentJSON$Companion() {
    CreateTournamentJSON$Companion_instance = this;
  }
  CreateTournamentJSON$Companion.prototype.serializer = function () {
    return CreateTournamentJSON$$serializer_getInstance();
  };
  CreateTournamentJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CreateTournamentJSON$Companion_instance = null;
  function CreateTournamentJSON$Companion_getInstance() {
    if (CreateTournamentJSON$Companion_instance === null) {
      new CreateTournamentJSON$Companion();
    }
    return CreateTournamentJSON$Companion_instance;
  }
  function CreateTournamentJSON$$serializer() {
    this.descriptor_bhj48j$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.createresponses.CreateTournamentJSON', this);
    this.descriptor.addElement_ivxn3r$('playersNumber', false);
    this.descriptor.addElement_ivxn3r$('title', false);
    this.descriptor.addElement_ivxn3r$('tournamentDescription', false);
    this.descriptor.addElement_ivxn3r$('tournamentMode', false);
    this.descriptor.addElement_ivxn3r$('admin', false);
    this.descriptor.addElement_ivxn3r$('game', false);
    CreateTournamentJSON$$serializer_instance = this;
  }
  Object.defineProperty(CreateTournamentJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_bhj48j$_0;
    }
  });
  CreateTournamentJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.playersNumber);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.title);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.tournamentDescription);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.tournamentMode);
    output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.admin);
    output.encodeStringElement_bgm7zs$(this.descriptor, 5, obj.game);
    output.endStructure_qatsm0$(this.descriptor);
  };
  CreateTournamentJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeStringElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return CreateTournamentJSON_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  CreateTournamentJSON$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  CreateTournamentJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CreateTournamentJSON$$serializer_instance = null;
  function CreateTournamentJSON$$serializer_getInstance() {
    if (CreateTournamentJSON$$serializer_instance === null) {
      new CreateTournamentJSON$$serializer();
    }
    return CreateTournamentJSON$$serializer_instance;
  }
  function CreateTournamentJSON_init(seen1, playersNumber, title, tournamentDescription, tournamentMode, admin, game, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CreateTournamentJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('playersNumber');
    else
      $this.playersNumber = playersNumber;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('title');
    else
      $this.title = title;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('tournamentDescription');
    else
      $this.tournamentDescription = tournamentDescription;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('tournamentMode');
    else
      $this.tournamentMode = tournamentMode;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('admin');
    else
      $this.admin = admin;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('game');
    else
      $this.game = game;
    return $this;
  }
  CreateTournamentJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateTournamentJSON',
    interfaces: []
  };
  CreateTournamentJSON.prototype.component1 = function () {
    return this.playersNumber;
  };
  CreateTournamentJSON.prototype.component2 = function () {
    return this.title;
  };
  CreateTournamentJSON.prototype.component3 = function () {
    return this.tournamentDescription;
  };
  CreateTournamentJSON.prototype.component4 = function () {
    return this.tournamentMode;
  };
  CreateTournamentJSON.prototype.component5 = function () {
    return this.admin;
  };
  CreateTournamentJSON.prototype.component6 = function () {
    return this.game;
  };
  CreateTournamentJSON.prototype.copy_sdpebo$ = function (playersNumber, title, tournamentDescription, tournamentMode, admin, game) {
    return new CreateTournamentJSON(playersNumber === void 0 ? this.playersNumber : playersNumber, title === void 0 ? this.title : title, tournamentDescription === void 0 ? this.tournamentDescription : tournamentDescription, tournamentMode === void 0 ? this.tournamentMode : tournamentMode, admin === void 0 ? this.admin : admin, game === void 0 ? this.game : game);
  };
  CreateTournamentJSON.prototype.toString = function () {
    return 'CreateTournamentJSON(playersNumber=' + Kotlin.toString(this.playersNumber) + (', title=' + Kotlin.toString(this.title)) + (', tournamentDescription=' + Kotlin.toString(this.tournamentDescription)) + (', tournamentMode=' + Kotlin.toString(this.tournamentMode)) + (', admin=' + Kotlin.toString(this.admin)) + (', game=' + Kotlin.toString(this.game)) + ')';
  };
  CreateTournamentJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.playersNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentDescription) | 0;
    result = result * 31 + Kotlin.hashCode(this.tournamentMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.admin) | 0;
    result = result * 31 + Kotlin.hashCode(this.game) | 0;
    return result;
  };
  CreateTournamentJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.playersNumber, other.playersNumber) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.tournamentDescription, other.tournamentDescription) && Kotlin.equals(this.tournamentMode, other.tournamentMode) && Kotlin.equals(this.admin, other.admin) && Kotlin.equals(this.game, other.game)))));
  };
  function CreateUserJSON(email, password, nickname, image) {
    CreateUserJSON$Companion_getInstance();
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.image = image;
  }
  function CreateUserJSON$Companion() {
    CreateUserJSON$Companion_instance = this;
  }
  CreateUserJSON$Companion.prototype.serializer = function () {
    return CreateUserJSON$$serializer_getInstance();
  };
  CreateUserJSON$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CreateUserJSON$Companion_instance = null;
  function CreateUserJSON$Companion_getInstance() {
    if (CreateUserJSON$Companion_instance === null) {
      new CreateUserJSON$Companion();
    }
    return CreateUserJSON$Companion_instance;
  }
  function CreateUserJSON$$serializer() {
    this.descriptor_5ic08b$_0 = new SerialClassDescImpl('com.example.myapplication.rawresponses.createresponses.CreateUserJSON', this);
    this.descriptor.addElement_ivxn3r$('email', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('nickname', false);
    this.descriptor.addElement_ivxn3r$('image', false);
    CreateUserJSON$$serializer_instance = this;
  }
  Object.defineProperty(CreateUserJSON$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_5ic08b$_0;
    }
  });
  CreateUserJSON$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.email);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.password);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.nickname);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.image);
    output.endStructure_qatsm0$(this.descriptor);
  };
  CreateUserJSON$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return CreateUserJSON_init(bitMask0, local0, local1, local2, local3, null);
  };
  CreateUserJSON$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  CreateUserJSON$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CreateUserJSON$$serializer_instance = null;
  function CreateUserJSON$$serializer_getInstance() {
    if (CreateUserJSON$$serializer_instance === null) {
      new CreateUserJSON$$serializer();
    }
    return CreateUserJSON$$serializer_instance;
  }
  function CreateUserJSON_init(seen1, email, password, nickname, image, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CreateUserJSON.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('email');
    else
      $this.email = email;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('password');
    else
      $this.password = password;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('nickname');
    else
      $this.nickname = nickname;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('image');
    else
      $this.image = image;
    return $this;
  }
  CreateUserJSON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateUserJSON',
    interfaces: []
  };
  CreateUserJSON.prototype.component1 = function () {
    return this.email;
  };
  CreateUserJSON.prototype.component2 = function () {
    return this.password;
  };
  CreateUserJSON.prototype.component3 = function () {
    return this.nickname;
  };
  CreateUserJSON.prototype.component4 = function () {
    return this.image;
  };
  CreateUserJSON.prototype.copy_w74nik$ = function (email, password, nickname, image) {
    return new CreateUserJSON(email === void 0 ? this.email : email, password === void 0 ? this.password : password, nickname === void 0 ? this.nickname : nickname, image === void 0 ? this.image : image);
  };
  CreateUserJSON.prototype.toString = function () {
    return 'CreateUserJSON(email=' + Kotlin.toString(this.email) + (', password=' + Kotlin.toString(this.password)) + (', nickname=' + Kotlin.toString(this.nickname)) + (', image=' + Kotlin.toString(this.image)) + ')';
  };
  CreateUserJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.nickname) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    return result;
  };
  CreateUserJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.email, other.email) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.nickname, other.nickname) && Kotlin.equals(this.image, other.image)))));
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
  function Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(closure$transform_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$closure$it = closure$it_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$$receiver, this.local$closure$it, this);
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
  function ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(closure$transform_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(closure$transform_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda(closure$transform_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = coroutineScope(ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(this.local$closure$transform, this.local$it), this);
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
  function ArenaTournamentRepositoryImplementation$scopedMap$lambda(closure$transform_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda(closure$transform_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ArenaTournamentRepositoryImplementation(atDS, gameMapper, modeMapper, matchMapper, tournamentMapper, registrationMapper, userMapper, accountStatusMapper, subscriptionMapper, tournamentSplitter, matchSplitter, registrationSplitter, userLinkMapper, gameLinkMapper, modeLinkMapper, tournamentLinkMapper, matchLinkMapper) {
    this.atDS_0 = atDS;
    this.gameMapper_0 = gameMapper;
    this.modeMapper_0 = modeMapper;
    this.matchMapper_0 = matchMapper;
    this.tournamentMapper_0 = tournamentMapper;
    this.registrationMapper_0 = registrationMapper;
    this.userMapper_0 = userMapper;
    this.accountStatusMapper_0 = accountStatusMapper;
    this.subscriptionMapper_0 = subscriptionMapper;
    this.tournamentSplitter_0 = tournamentSplitter;
    this.matchSplitter_0 = matchSplitter;
    this.registrationSplitter_0 = registrationSplitter;
    this.userLinkMapper_0 = userLinkMapper;
    this.gameLinkMapper_0 = gameLinkMapper;
    this.modeLinkMapper_0 = modeLinkMapper;
    this.tournamentLinkMapper_0 = tournamentLinkMapper;
    this.matchLinkMapper_0 = matchLinkMapper;
  }
  ArenaTournamentRepositoryImplementation.prototype.updateCurrentUserEmail_61zpoe$ = function (email, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.updateCurrentUserPassword = function (continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.updateCurrentUserNickname = function (continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.updateCurrentUserProfileImage = function (continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.loginWithEmailAndPassword_puj7f4$ = function (email, password, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.loginWithFacebookToken_61zpoe$ = function (token, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.loginWithGoogleToken_61zpoe$ = function (token, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.createAccountWithEmailAndPassword_puj7f4$ = function (email, password, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.getCurrentUserAuthMethods = function (continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.linkGoogleAuthProvider_61zpoe$ = function (token, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.linkFacebookAuthProvider_61zpoe$ = function (token, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.linkPasswordAuthProvider_61zpoe$ = function (password, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.reauthenticateWithPassword_61zpoe$ = function (password, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.reauthenticateWithGoogleToken_61zpoe$ = function (token, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ArenaTournamentRepositoryImplementation.prototype.reauthenticateWithFacebook_61zpoe$ = function (token, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  function Coroutine$createGame_jvrvdj$($this, name_0, availableModes_0, image_0, icon_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
    this.local$availableModes = availableModes_0;
    this.local$image = image_0;
    this.local$icon = icon_0;
  }
  Coroutine$createGame_jvrvdj$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createGame_jvrvdj$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createGame_jvrvdj$.prototype.constructor = Coroutine$createGame_jvrvdj$;
  Coroutine$createGame_jvrvdj$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.$this.atDS_0;
            var destination = ArrayList_init(collectionSizeOrDefault(this.local$availableModes, 10));
            var tmp$_0;
            tmp$_0 = this.local$availableModes.iterator();
            while (tmp$_0.hasNext()) {
              var item = tmp$_0.next();
              destination.add_11rb$(this.$this.modeLinkMapper_0.toRemoteSingle_11rc$(item).toString());
            }

            this.state_0 = 2;
            this.result_0 = tmp$.createGame_jfcnhz$(new CreateGameJSON(this.local$name, destination, this.local$image, this.local$icon), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.gameMapper_0.fromRemoteSingle_11rb$(this.result_0);
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
  ArenaTournamentRepositoryImplementation.prototype.createGame_jvrvdj$ = function (name_0, availableModes_0, image_0, icon_0, continuation_0, suspended) {
    var instance = new Coroutine$createGame_jvrvdj$(this, name_0, availableModes_0, image_0, icon_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createGameMode_61zpoe$($this, modeName_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$modeName = modeName_0;
  }
  Coroutine$createGameMode_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createGameMode_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createGameMode_61zpoe$.prototype.constructor = Coroutine$createGameMode_61zpoe$;
  Coroutine$createGameMode_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.createGameMode_nzwrei$(new CreateGameModeJSON(this.local$modeName), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.modeMapper_0.fromRemoteSingle_11rb$(this.result_0);
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
  ArenaTournamentRepositoryImplementation.prototype.createGameMode_61zpoe$ = function (modeName_0, continuation_0, suspended) {
    var instance = new Coroutine$createGameMode_61zpoe$(this, modeName_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createTournament_1813a1$($this, playersNumber_0, title_0, tournamentDescription_0, tournamentMode_0, admin_0, game_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$playersNumber = playersNumber_0;
    this.local$title = title_0;
    this.local$tournamentDescription = tournamentDescription_0;
    this.local$tournamentMode = tournamentMode_0;
    this.local$admin = admin_0;
    this.local$game = game_0;
  }
  Coroutine$createTournament_1813a1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createTournament_1813a1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createTournament_1813a1$.prototype.constructor = Coroutine$createTournament_1813a1$;
  Coroutine$createTournament_1813a1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.createTournament_iuya3y$(new CreateTournamentJSON(this.local$playersNumber, this.local$title, this.local$tournamentDescription, this.local$tournamentMode, this.$this.userLinkMapper_0.toRemoteSingle_11rc$(this.local$admin.id).toString(), this.$this.gameLinkMapper_0.toRemoteSingle_11rc$(this.local$game.name).toString()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new TournamentEntity(this.result_0.id, this.local$playersNumber, this.local$title, this.local$tournamentDescription, this.local$tournamentMode, this.local$admin, this.local$game);
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
  ArenaTournamentRepositoryImplementation.prototype.createTournament_1813a1$ = function (playersNumber_0, title_0, tournamentDescription_0, tournamentMode_0, admin_0, game_0, continuation_0, suspended) {
    var instance = new Coroutine$createTournament_1813a1$(this, playersNumber_0, title_0, tournamentDescription_0, tournamentMode_0, admin_0, game_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createMatch_5crsrq$($this, matchDateTime_0, playersCount_0, isRegistrationPossible_0, tournament_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$matchDateTime = matchDateTime_0;
    this.local$playersCount = playersCount_0;
    this.local$isRegistrationPossible = isRegistrationPossible_0;
    this.local$tournament = tournament_0;
  }
  Coroutine$createMatch_5crsrq$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createMatch_5crsrq$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createMatch_5crsrq$.prototype.constructor = Coroutine$createMatch_5crsrq$;
  Coroutine$createMatch_5crsrq$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.createMatch_rwgmnk$(new CreateMatchJSON(this.local$matchDateTime.format_cgtbg3$(DateFormat.Companion.invoke_61zpoe$("yyyy-MM-dd'T'HH:mm:ss")), this.local$playersCount, this.local$isRegistrationPossible, this.$this.tournamentLinkMapper_0.toRemoteSingle_11rc$(this.local$tournament.id).toString()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new MatchEntity(this.result_0.id, this.local$matchDateTime, this.local$playersCount, this.local$isRegistrationPossible, this.local$tournament);
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
  ArenaTournamentRepositoryImplementation.prototype.createMatch_5crsrq$ = function (matchDateTime_0, playersCount_0, isRegistrationPossible_0, tournament_0, continuation_0, suspended) {
    var instance = new Coroutine$createMatch_5crsrq$(this, matchDateTime_0, playersCount_0, isRegistrationPossible_0, tournament_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createRegistration_a17aol$$default($this, user_0, match_0, outcome_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$user = user_0;
    this.local$match = match_0;
    this.local$outcome = outcome_0;
  }
  Coroutine$createRegistration_a17aol$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createRegistration_a17aol$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createRegistration_a17aol$$default.prototype.constructor = Coroutine$createRegistration_a17aol$$default;
  Coroutine$createRegistration_a17aol$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.createRegistration_fmuddq$(new CreateRegistrationJSON(this.$this.userLinkMapper_0.toRemoteSingle_11rc$(this.local$user.id).toString(), this.$this.matchLinkMapper_0.toRemoteSingle_11rc$(this.local$match.id).toString(), this.local$outcome), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new RegistrationEntity(this.local$user, this.local$match, this.local$outcome);
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
  ArenaTournamentRepositoryImplementation.prototype.createRegistration_a17aol$$default = function (user_0, match_0, outcome_0, continuation_0, suspended) {
    var instance = new Coroutine$createRegistration_a17aol$$default(this, user_0, match_0, outcome_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getGameByName_61zpoe$($this, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
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
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.getGameByName_61zpoe$(this.local$name, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.gameMapper_0.fromRemoteSingle_11rb$(this.result_0);
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
  ArenaTournamentRepositoryImplementation.prototype.getGameByName_61zpoe$ = function (name_0, continuation_0, suspended) {
    var instance = new Coroutine$getGameByName_61zpoe$(this, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$searchGameByName$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$name_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$name = closure$name_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$searchGameByName$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$searchGameByName$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$searchGameByName$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$searchGameByName$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$searchGameByName$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.searchGamesByName_bm4lxs$(this.local$closure$name, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$searchGameByName$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$name_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$searchGameByName$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$name_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ArenaTournamentRepositoryImplementation$searchGameByName$lambda_0(this$ArenaTournamentRepositoryImplementation) {
    return function (it) {
      return this$ArenaTournamentRepositoryImplementation.gameMapper_0.fromRemoteMultiple_11rb$(it);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.searchGameByName_bm4lxs$ = function (name, page) {
    return flatMapIterableConcat(flow(ArenaTournamentRepositoryImplementation$searchGameByName$lambda(this, name, page)), ArenaTournamentRepositoryImplementation$searchGameByName$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$name_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$name = closure$name_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGamesContainingName_bm4lxs$(this.local$closure$name, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$name_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$name_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda_0(this$ArenaTournamentRepositoryImplementation) {
    return function (it) {
      return this$ArenaTournamentRepositoryImplementation.gameMapper_0.fromRemoteMultiple_11rb$(it);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getGamesContainingName_bm4lxs$ = function (name, page) {
    return flatMapIterableConcat(flow(ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda(this, name, page)), ArenaTournamentRepositoryImplementation$getGamesContainingName$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getGamesByMode$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$mode_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$mode = closure$mode_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesByMode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesByMode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesByMode$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getGamesByMode$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getGamesByMode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGamesByMode_bm4lxs$(this.local$closure$mode, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getGamesByMode$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$mode_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getGamesByMode$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$mode_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ArenaTournamentRepositoryImplementation$getGamesByMode$lambda_0(this$ArenaTournamentRepositoryImplementation) {
    return function (it) {
      return this$ArenaTournamentRepositoryImplementation.gameMapper_0.fromRemoteMultiple_11rb$(it);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getGamesByMode_bm4lxs$ = function (mode, page) {
    return flatMapIterableConcat(flow(ArenaTournamentRepositoryImplementation$getGamesByMode$lambda(this, mode, page)), ArenaTournamentRepositoryImplementation$getGamesByMode$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByLink_61zpoe$(ensureNotNull(this.local$closure$it._links.game).href, this);
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
  function ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getUserByLink_61zpoe$(ensureNotNull(this.local$closure$it._links.userEntity).href, this);
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
  function ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$id = closure$id_0;
    this.local$it = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentById_s8cxhz$(this.local$closure$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var this$ArenaTournamentRepositoryImplementation = this.local$this$ArenaTournamentRepositoryImplementation;
            this.local$it = new Triple($receiver, async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation, $receiver)), async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$getTournamentById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation, $receiver)));
            this.local$tmp$ = this.local$it.first;
            this.state_0 = 3;
            this.result_0 = this.local$it.second.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$it.third.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_0 = new Triple(this.local$tmp$, this.local$tmp$_0, this.result_0);
            return this.local$this$ArenaTournamentRepositoryImplementation.tournamentMapper_0.fromRemoteSingle_11rb$($receiver_0);
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
  function ArenaTournamentRepositoryImplementation$getTournamentById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getTournamentById_s8cxhz$ = function (id, continuation) {
    return coroutineScope(ArenaTournamentRepositoryImplementation$getTournamentById$lambda(this, id), continuation);
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$mode_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$mode = closure$mode_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentsByMode_bm4lxs$(this.local$closure$mode, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$mode_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$mode_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformTournaments_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getTournamentsByMode_bm4lxs$ = function (mode, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda(this, mode, page)), ArenaTournamentRepositoryImplementation$getTournamentsByMode$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$gameName_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$gameName = closure$gameName_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByName_61zpoe$(this.local$closure$gameName, this);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$gameName_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$gameName_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentsByGameName_bm4lxs$(this.local$closure$it.gameName, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformTournaments_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$page = closure$page_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it, this.local$closure$page)), ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda$lambda_0(this.local$this$ArenaTournamentRepositoryImplementation));
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getTournamentsByGame_bm4lxs$ = function (gameName, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda(this, gameName)), ArenaTournamentRepositoryImplementation$getTournamentsByGame$lambda_0(this, page));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$userId = closure$userId_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentsByUser_bm4lxs$(this.local$closure$userId, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformTournaments_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getTournamentsByUser_bm4lxs$ = function (userId, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda(this, userId, page)), ArenaTournamentRepositoryImplementation$getTournamentsByUser$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getShowCaseTournaments_za3lpa$(this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformTournaments_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getShowCaseTournaments_za3lpa$ = function (page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda(this, page)), ArenaTournamentRepositoryImplementation$getShowCaseTournaments$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$title_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$title = closure$title_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentsContainingTitle_bm4lxs$(this.local$closure$title, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$title_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$title_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformTournaments_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getTournamentsContainingTitle_bm4lxs$ = function (title, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda(this, title, page)), ArenaTournamentRepositoryImplementation$getTournamentsContainingTitle$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByLink_61zpoe$(ensureNotNull(this.local$closure$it.second._links.gameEntity).href, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getUserByLink_61zpoe$(ensureNotNull(this.local$closure$it.second._links.userEntity).href, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$id = closure$id_0;
    this.local$$receiver = void 0;
    this.local$it = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchById_s8cxhz$(this.local$closure$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentByLink_61zpoe$(ensureNotNull(this.local$$receiver._links.tournamentEntity).href, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver = to(this.local$$receiver, this.result_0);
            var this$ArenaTournamentRepositoryImplementation = this.local$this$ArenaTournamentRepositoryImplementation;
            this.local$it = new Quadruple($receiver.first, $receiver.second, async(this.local$$receiver_0, void 0, void 0, ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation, $receiver)), async(this.local$$receiver_0, void 0, void 0, ArenaTournamentRepositoryImplementation$getMatchById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation, $receiver)));
            this.local$tmp$ = this.local$it.first;
            this.local$tmp$_0 = this.local$it.second;
            this.state_0 = 4;
            this.result_0 = this.local$it.third.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.local$it.fourth.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var $receiver_0 = new Quadruple(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.result_0);
            return this.local$this$ArenaTournamentRepositoryImplementation.matchMapper_0.fromRemoteSingle_11rb$($receiver_0);
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
  function ArenaTournamentRepositoryImplementation$getMatchById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getMatchById_s8cxhz$ = function (id, continuation) {
    return coroutineScope(ArenaTournamentRepositoryImplementation$getMatchById$lambda(this, id), continuation);
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$tournamentId_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$tournamentId = closure$tournamentId_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchesByTournamentId_yhmem3$(this.local$closure$tournamentId, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$tournamentId_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$tournamentId_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformMatches_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getMatchesByTournament_yhmem3$ = function (tournamentId, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda(this, tournamentId, page)), ArenaTournamentRepositoryImplementation$getMatchesByTournament$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$gameName_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$gameName = closure$gameName_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByName_61zpoe$(this.local$closure$gameName, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$gameName_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$gameName_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchesByGameName_bm4lxs$(this.local$closure$it.gameName, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformMatches_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$page = closure$page_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it, this.local$closure$page)), ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda$lambda_0(this.local$this$ArenaTournamentRepositoryImplementation));
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
  function ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getMatchesByGame_bm4lxs$ = function (gameName, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda(this, gameName)), ArenaTournamentRepositoryImplementation$getMatchesByGame$lambda_0(this, page));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$dateTime_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$dateTime = closure$dateTime_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchesAfterDate_tc7k5b$(this.local$closure$dateTime, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$dateTime_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$dateTime_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformMatches_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getMatchesAfterDate_tc7k5b$ = function (dateTime, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda(this, dateTime, page)), ArenaTournamentRepositoryImplementation$getMatchesAfterDate$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchesAvailable_za3lpa$(this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformMatches_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getMatchesAvailable_za3lpa$ = function (page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda(this, page)), ArenaTournamentRepositoryImplementation$getMatchesAvailable$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$userId = closure$userId_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchesByUser_bm4lxs$(this.local$closure$userId, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformMatches_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getMatchesByUser_bm4lxs$ = function (userId, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda(this, userId, page)), ArenaTournamentRepositoryImplementation$getMatchesByUser$lambda_0(this));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByLink_61zpoe$(ensureNotNull(this.local$closure$it.third._links.gameEntity).href, this);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getUserById_61zpoe$(ensureNotNull(this.local$closure$it.first._links.userEntity).href, this);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$id = closure$id_0;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$it = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getRegistrationById_s8cxhz$(this.local$closure$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchByLink_61zpoe$(ensureNotNull(this.local$$receiver._links.matchEntity).href, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver = to(this.local$$receiver, this.result_0);
            var this$ArenaTournamentRepositoryImplementation = this.local$this$ArenaTournamentRepositoryImplementation;
            this.local$tmp$ = $receiver.first;
            this.local$tmp$_0 = $receiver.second;
            this.state_0 = 4;
            this.result_0 = this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentByLink_61zpoe$(ensureNotNull($receiver.second._links.tournamentEntity).href, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_0 = new Triple(this.local$tmp$, this.local$tmp$_0, this.result_0);
            var this$ArenaTournamentRepositoryImplementation_0 = this.local$this$ArenaTournamentRepositoryImplementation;
            this.local$it = new Quintuple($receiver_0.first, $receiver_0.second, $receiver_0.third, async(this.local$$receiver_0, void 0, void 0, ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, $receiver_0)), async(this.local$$receiver_0, void 0, void 0, ArenaTournamentRepositoryImplementation$getRegistrationById$lambda$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, $receiver_0)));
            this.local$tmp$_1 = this.local$it.first;
            this.local$tmp$_2 = this.local$it.second;
            this.local$tmp$_3 = this.local$it.third;
            this.state_0 = 5;
            this.result_0 = this.local$it.fourth.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_4 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$it.fifth.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var $receiver_1 = new Quintuple(this.local$tmp$_1, this.local$tmp$_2, this.local$tmp$_3, this.local$tmp$_4, this.result_0);
            return this.local$this$ArenaTournamentRepositoryImplementation.registrationMapper_0.fromRemoteSingle_11rb$($receiver_1);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationById$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$id_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getRegistrationById_s8cxhz$ = function (id, continuation) {
    return coroutineScope(ArenaTournamentRepositoryImplementation$getRegistrationById$lambda(this, id), continuation);
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$matchId_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$matchId = closure$matchId_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchById_s8cxhz$(this.local$closure$matchId, this);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$matchId_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$matchId_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getRegistrationsByMatchId_yhmem3$(this.local$closure$it.id, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformRegistrations_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$page = closure$page_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it, this.local$closure$page)), ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda$lambda_0(this.local$this$ArenaTournamentRepositoryImplementation));
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
  function ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$page_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getRegistrationsByMatch_yhmem3$ = function (matchId, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda(this, matchId)), ArenaTournamentRepositoryImplementation$getRegistrationsByMatch$lambda_0(this, page));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$userId = closure$userId_0;
    this.local$closure$page = closure$page_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getRegistrationsByUser_bm4lxs$(this.local$closure$userId, this.local$closure$page, this);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$userId_0, closure$page_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.transformRegistrations_0(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.getRegistrationsByUser_bm4lxs$ = function (userId, page) {
    return flatMapConcat(flow(ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda(this, userId, page)), ArenaTournamentRepositoryImplementation$getRegistrationsByUser$lambda_0(this));
  };
  function Coroutine$getUserById_61zpoe$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
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
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.getCurrentUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.userMapper_0.fromRemoteSingle_11rb$(this.result_0);
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
  ArenaTournamentRepositoryImplementation.prototype.getUserById_61zpoe$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$getUserById_61zpoe$(this, id_0, continuation_0);
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
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.getCurrentUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.userMapper_0.fromRemoteSingle_11rb$(this.result_0);
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
  ArenaTournamentRepositoryImplementation.prototype.getCurrentUser = function (continuation_0, suspended) {
    var instance = new Coroutine$getCurrentUser(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$isAccountVerified($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$isAccountVerified.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$isAccountVerified.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$isAccountVerified.prototype.constructor = Coroutine$isAccountVerified;
  Coroutine$isAccountVerified.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.getAccountVerificationStatus(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.accountStatusMapper_0.fromRemoteSingle_11rb$(this.result_0);
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
  ArenaTournamentRepositoryImplementation.prototype.isAccountVerified = function (continuation_0, suspended) {
    var instance = new Coroutine$isAccountVerified(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$isAccountSubscribed($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$isAccountSubscribed.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$isAccountSubscribed.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$isAccountSubscribed.prototype.constructor = Coroutine$isAccountSubscribed;
  Coroutine$isAccountSubscribed.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.atDS_0.getAccountSubscription(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.subscriptionMapper_0.fromRemoteSingle_11rb$(this.result_0);
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
  ArenaTournamentRepositoryImplementation.prototype.isAccountSubscribed = function (continuation_0, suspended) {
    var instance = new Coroutine$isAccountSubscribed(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByLink_61zpoe$(ensureNotNull(this.local$closure$it._links.game).href, this);
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
  function ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getUserByLink_61zpoe$(ensureNotNull(this.local$closure$it._links.admin).href, this);
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
  function ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda(this$ArenaTournamentRepositoryImplementation_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$$receiver = $receiver_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Triple(this.local$it, async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it)), async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$transformTournaments$lambda$lambda_0(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it)));
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
  function ArenaTournamentRepositoryImplementation$transformTournaments$lambda(this$ArenaTournamentRepositoryImplementation_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda(this$ArenaTournamentRepositoryImplementation_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$it.first;
            this.state_0 = 2;
            this.result_0 = this.local$it.second.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$it.third.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return new Triple(this.local$tmp$, this.local$tmp$_0, this.result_0);
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
  function ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1;
  Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.tournamentMapper_0.fromRemoteSingle_11rb$(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.transformTournaments_0 = function ($receiver) {
    var $receiver_0 = asFlow(this.tournamentSplitter_0.invoke_11rb$($receiver));
    var $receiver_1 = new unsafeFlow$ObjectLiteral_0(unsafeTransform$lambda_0(map$lambda_0(ArenaTournamentRepositoryImplementation$scopedMap$lambda(ArenaTournamentRepositoryImplementation$transformTournaments$lambda(this))), $receiver_0));
    var $receiver_2 = new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformTournaments$lambda_0), $receiver_1));
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformTournaments$lambda_1(this)), $receiver_2));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentByLink_61zpoe$(ensureNotNull(this.local$it._links.tournament).href, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return to(this.local$it, this.result_0);
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
  function ArenaTournamentRepositoryImplementation$transformMatches$lambda(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByLink_61zpoe$(ensureNotNull(this.local$closure$it.second._links.game).href, this);
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
  function ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getUserByLink_61zpoe$(ensureNotNull(this.local$closure$it.second._links.admin).href, this);
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
  function ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_0(this$ArenaTournamentRepositoryImplementation_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$$receiver = $receiver_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Quadruple(this.local$it.first, this.local$it.second, async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it)), async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$transformMatches$lambda$lambda_0(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it)));
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
  function ArenaTournamentRepositoryImplementation$transformMatches$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_0(this$ArenaTournamentRepositoryImplementation_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_1(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_1.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_1;
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$it.first;
            this.local$tmp$_0 = this.local$it.second;
            this.state_0 = 2;
            this.result_0 = this.local$it.third.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$it.fourth.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return new Quadruple(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.result_0);
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
  function ArenaTournamentRepositoryImplementation$transformMatches$lambda_1(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_1(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_2(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_2.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_2;
  Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.matchMapper_0.fromRemoteSingle_11rb$(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$transformMatches$lambda_2(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformMatches$lambda_2(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.transformMatches_0 = function ($receiver) {
    var $receiver_0 = asFlow(this.matchSplitter_0.invoke_11rb$($receiver));
    var $receiver_1 = new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformMatches$lambda(this)), $receiver_0));
    var $receiver_2 = new unsafeFlow$ObjectLiteral_0(unsafeTransform$lambda_0(map$lambda_0(ArenaTournamentRepositoryImplementation$scopedMap$lambda(ArenaTournamentRepositoryImplementation$transformMatches$lambda_0(this))), $receiver_1));
    var $receiver_3 = new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformMatches$lambda_1), $receiver_2));
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformMatches$lambda_2(this)), $receiver_3));
  };
  function Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getMatchByLink_61zpoe$(ensureNotNull(this.local$it._links.match).href, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return to(this.local$it, this.result_0);
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
  function ArenaTournamentRepositoryImplementation$transformRegistrations$lambda(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$it.first;
            this.local$tmp$_0 = this.local$it.second;
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getTournamentByLink_61zpoe$(ensureNotNull(this.local$it.second._links.tournament).href, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new Triple(this.local$tmp$, this.local$tmp$_0, this.result_0);
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
  function ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda;
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getGameByLink_61zpoe$(ensureNotNull(this.local$closure$it.third._links.game).href, this);
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
  function ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0;
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ArenaTournamentRepositoryImplementation.atDS_0.getUserByLink_61zpoe$(ensureNotNull(this.local$closure$it.first._links.user).href, this);
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
  function ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0(this$ArenaTournamentRepositoryImplementation_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1(this$ArenaTournamentRepositoryImplementation_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$$receiver = $receiver_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1;
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Quintuple(this.local$it.first, this.local$it.second, this.local$it.third, async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it)), async(this.local$$receiver, void 0, void 0, ArenaTournamentRepositoryImplementation$transformRegistrations$lambda$lambda_0(this.local$this$ArenaTournamentRepositoryImplementation, this.local$it)));
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
  function ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1(this$ArenaTournamentRepositoryImplementation_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1(this$ArenaTournamentRepositoryImplementation_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2;
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$it.first;
            this.local$tmp$_0 = this.local$it.second;
            this.local$tmp$_1 = this.local$it.third;
            this.state_0 = 2;
            this.result_0 = this.local$it.fourth.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$it.fifth.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return new Quintuple(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.local$tmp$_2, this.result_0);
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
  function ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ArenaTournamentRepositoryImplementation = this$ArenaTournamentRepositoryImplementation_0;
    this.local$it = it_0;
  }
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3;
  Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ArenaTournamentRepositoryImplementation.registrationMapper_0.fromRemoteSingle_11rb$(this.local$it);
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
  function ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3(this$ArenaTournamentRepositoryImplementation_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3(this$ArenaTournamentRepositoryImplementation_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ArenaTournamentRepositoryImplementation.prototype.transformRegistrations_0 = function ($receiver) {
    var $receiver_0 = asFlow(this.registrationSplitter_0.invoke_11rb$($receiver));
    var $receiver_1 = new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformRegistrations$lambda(this)), $receiver_0));
    var $receiver_2 = new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_0(this)), $receiver_1));
    var $receiver_3 = new unsafeFlow$ObjectLiteral_0(unsafeTransform$lambda_0(map$lambda_0(ArenaTournamentRepositoryImplementation$scopedMap$lambda(ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_1(this))), $receiver_2));
    var $receiver_4 = new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_2), $receiver_3));
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$transformRegistrations$lambda_3(this)), $receiver_4));
  };
  ArenaTournamentRepositoryImplementation.prototype.scopedMap_0 = wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var COROUTINE_SUSPENDED_0 = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl_0 = Kotlin.kotlin.coroutines.CoroutineImpl;
    var wrapFunction = Kotlin.wrapFunction;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Flow = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.Flow;
    function unsafeFlow$ObjectLiteral(closure$block) {
      this.closure$block = closure$block;
    }
    function Coroutine$collect_42ocv1$($this, collector_0, continuation_0) {
      CoroutineImpl_0.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.$this = $this;
      this.local$collector = collector_0;
    }
    Coroutine$collect_42ocv1$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl_0]};
    Coroutine$collect_42ocv1$.prototype = Object.create(CoroutineImpl_0.prototype);
    Coroutine$collect_42ocv1$.prototype.constructor = Coroutine$collect_42ocv1$;
    Coroutine$collect_42ocv1$.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.$this.closure$block(this.local$collector, this);
              if (this.result_0 === COROUTINE_SUSPENDED_0)
                return COROUTINE_SUSPENDED_0;
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
      CoroutineImpl_0.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$ = this$_0;
      this.local$value = value_0;
    }
    Coroutine$unsafeTransform$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl_0]};
    Coroutine$unsafeTransform$lambda$lambda.prototype = Object.create(CoroutineImpl_0.prototype);
    Coroutine$unsafeTransform$lambda$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda;
    Coroutine$unsafeTransform$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
              if (this.result_0 === COROUTINE_SUSPENDED_0)
                return COROUTINE_SUSPENDED_0;
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
      var FlowCollector = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.FlowCollector;
      function collect$ObjectLiteral(closure$action) {
        this.closure$action = closure$action;
      }
      collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
        return this.closure$action(value, continuation);
      };
      collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
      function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
        CoroutineImpl_0.call(this, continuation_0);
        this.$controller = controller;
        this.exceptionState_0 = 1;
        this.local$closure$transform = closure$transform_0;
        this.local$this$unsafeTransform = this$unsafeTransform_0;
        this.local$$receiver = $receiver_0;
      }
      Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl_0]};
      Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl_0.prototype);
      Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
      Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
        do
          try {
            switch (this.state_0) {
              case 0:
                this.state_0 = 2;
                this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda(this.local$closure$transform, this.local$$receiver)), this);
                if (this.result_0 === COROUTINE_SUSPENDED_0)
                  return COROUTINE_SUSPENDED_0;
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
      CoroutineImpl_0.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$$receiver = $receiver_0;
      this.local$value = value_0;
    }
    Coroutine$map$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl_0]};
    Coroutine$map$lambda.prototype = Object.create(CoroutineImpl_0.prototype);
    Coroutine$map$lambda.prototype.constructor = Coroutine$map$lambda;
    Coroutine$map$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$transform(this.local$value, this);
              if (this.result_0 === COROUTINE_SUSPENDED_0)
                return COROUTINE_SUSPENDED_0;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              this.state_0 = 3;
              this.result_0 = this.local$$receiver.emit_11rb$(this.result_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED_0)
                return COROUTINE_SUSPENDED_0;
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
    function Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(closure$transform_0, closure$it_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$closure$it = closure$it_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda;
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$transform(this.local$$receiver, this.local$closure$it, this);
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
    function ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(closure$transform_0, closure$it_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(closure$transform_0, closure$it_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda(closure$transform_0, it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$it = it_0;
    }
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.prototype.constructor = Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda;
    Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = coroutineScope(ArenaTournamentRepositoryImplementation$scopedMap$lambda$lambda(this.local$closure$transform, this.local$it), this);
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
    function ArenaTournamentRepositoryImplementation$scopedMap$lambda(closure$transform_0) {
      return function (it_0, continuation_0, suspended) {
        var instance = new Coroutine$ArenaTournamentRepositoryImplementation$scopedMap$lambda(closure$transform_0, it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function ($receiver, transform) {
      return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(ArenaTournamentRepositoryImplementation$scopedMap$lambda(transform)), $receiver));
    };
  });
  ArenaTournamentRepositoryImplementation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArenaTournamentRepositoryImplementation',
    interfaces: [ArenaTournamentRepository]
  };
  function Coroutine$flatMapIterableConcat$lambda(closure$function_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$function = closure$function_0;
    this.local$it = it_0;
  }
  Coroutine$flatMapIterableConcat$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flatMapIterableConcat$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flatMapIterableConcat$lambda.prototype.constructor = Coroutine$flatMapIterableConcat$lambda;
  Coroutine$flatMapIterableConcat$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return asFlow(this.local$closure$function(this.local$it));
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
  function flatMapIterableConcat$lambda(closure$function_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$flatMapIterableConcat$lambda(closure$function_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function flatMapIterableConcat($receiver, function_0) {
    return flatMapConcat($receiver, flatMapIterableConcat$lambda(function_0));
  }
  function GameSplitter() {
  }
  GameSplitter.prototype.split_11rb$ = function (input) {
    return input._embedded.gameEntities;
  };
  GameSplitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameSplitter',
    interfaces: [Splitter]
  };
  function MatchSplitter() {
  }
  MatchSplitter.prototype.split_11rb$ = function (input) {
    return input._embedded.matchEntities;
  };
  MatchSplitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchSplitter',
    interfaces: [Splitter]
  };
  function RegistrationSplitter() {
  }
  RegistrationSplitter.prototype.split_11rb$ = function (input) {
    return input._embedded.registrationEntities;
  };
  RegistrationSplitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegistrationSplitter',
    interfaces: [Splitter]
  };
  function Splitter() {
  }
  Splitter.prototype.invoke_11rb$ = function (input) {
    return this.split_11rb$(input);
  };
  Splitter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Splitter',
    interfaces: []
  };
  function TournamentSplitter() {
  }
  TournamentSplitter.prototype.split_11rb$ = function (input) {
    return input._embedded.tournamentEntities;
  };
  TournamentSplitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TournamentSplitter',
    interfaces: [Splitter]
  };
  Object.defineProperty(ArenaTournamentDatasource, 'Companion', {
    get: ArenaTournamentDatasource$Companion_getInstance
  });
  ArenaTournamentDatasource.Endpoints = ArenaTournamentDatasource$Endpoints;
  var package$com = _.com || (_.com = {});
  var package$example = package$com.example || (package$com.example = {});
  var package$myapplication = package$example.myapplication || (package$example.myapplication = {});
  var package$datasource = package$myapplication.datasource || (package$myapplication.datasource = {});
  package$datasource.ArenaTournamentDatasource = ArenaTournamentDatasource;
  package$datasource.FirebaseDatasource = FirebaseDatasource;
  var package$mappers = package$myapplication.mappers || (package$myapplication.mappers = {});
  package$mappers.AccountStatusMapper = AccountStatusMapper;
  package$mappers.AccountSubscriptionMapper = AccountSubscriptionMapper;
  package$mappers.DateTimeMapper = DateTimeMapper;
  package$mappers.GameMapper = GameMapper;
  package$mappers.SingleFromRemoteMapper = SingleFromRemoteMapper;
  package$mappers.MultipleFromRemoteMapper = MultipleFromRemoteMapper;
  package$mappers.SingleToRemoteMapper = SingleToRemoteMapper;
  package$mappers.MultipleToRemoteMapper = MultipleToRemoteMapper;
  package$mappers.MatchMapper = MatchMapper;
  package$mappers.ModeMapper = ModeMapper;
  package$mappers.RegistrationMapper = RegistrationMapper;
  package$mappers.TournamentMapper = TournamentMapper;
  package$mappers.UserMapper = UserMapper;
  var package$entitieslinkmapper = package$mappers.entitieslinkmapper || (package$mappers.entitieslinkmapper = {});
  package$entitieslinkmapper.GameLinkMapper = GameLinkMapper;
  package$entitieslinkmapper.MatchLinkMapper = MatchLinkMapper;
  package$entitieslinkmapper.ModeLinkMapper = ModeLinkMapper;
  package$entitieslinkmapper.TournamentLinkMapper = TournamentLinkMapper;
  package$entitieslinkmapper.UserLinkMapper = UserLinkMapper;
  Object.defineProperty(AccountStatusJSON, 'Companion', {
    get: AccountStatusJSON$Companion_getInstance
  });
  Object.defineProperty(AccountStatusJSON, '$serializer', {
    get: AccountStatusJSON$$serializer_getInstance
  });
  var package$rawresponses = package$myapplication.rawresponses || (package$myapplication.rawresponses = {});
  package$rawresponses.AccountStatusJSON_init_zfq7sv$ = AccountStatusJSON_init;
  package$rawresponses.AccountStatusJSON = AccountStatusJSON;
  Object.defineProperty(SubscriptionStatusJSON, 'Companion', {
    get: SubscriptionStatusJSON$Companion_getInstance
  });
  Object.defineProperty(SubscriptionStatusJSON, '$serializer', {
    get: SubscriptionStatusJSON$$serializer_getInstance
  });
  package$rawresponses.SubscriptionStatusJSON_init_zfq7sv$ = SubscriptionStatusJSON_init;
  package$rawresponses.SubscriptionStatusJSON = SubscriptionStatusJSON;
  Object.defineProperty(MultipleGamesJSON, 'Companion', {
    get: MultipleGamesJSON$Companion_getInstance
  });
  Object.defineProperty(MultipleGamesJSON, '$serializer', {
    get: MultipleGamesJSON$$serializer_getInstance
  });
  package$rawresponses.MultipleGamesJSON_init_dqacj6$ = MultipleGamesJSON_init;
  package$rawresponses.MultipleGamesJSON = MultipleGamesJSON;
  Object.defineProperty(GameEmbeddedJSON, 'Companion', {
    get: GameEmbeddedJSON$Companion_getInstance
  });
  Object.defineProperty(GameEmbeddedJSON, '$serializer', {
    get: GameEmbeddedJSON$$serializer_getInstance
  });
  package$rawresponses.GameEmbeddedJSON_init_6a6rdh$ = GameEmbeddedJSON_init;
  package$rawresponses.GameEmbeddedJSON = GameEmbeddedJSON;
  Object.defineProperty(GameJSON, 'Companion', {
    get: GameJSON$Companion_getInstance
  });
  Object.defineProperty(GameJSON, '$serializer', {
    get: GameJSON$$serializer_getInstance
  });
  package$rawresponses.GameJSON_init_viu4bi$ = GameJSON_init;
  package$rawresponses.GameJSON = GameJSON;
  Object.defineProperty(HrefJSON, 'Companion', {
    get: HrefJSON$Companion_getInstance
  });
  Object.defineProperty(HrefJSON, '$serializer', {
    get: HrefJSON$$serializer_getInstance
  });
  package$rawresponses.HrefJSON_init_rt9kzn$ = HrefJSON_init;
  package$rawresponses.HrefJSON = HrefJSON;
  Object.defineProperty(LinksJSON, 'Companion', {
    get: LinksJSON$Companion_getInstance
  });
  Object.defineProperty(LinksJSON, '$serializer', {
    get: LinksJSON$$serializer_getInstance
  });
  package$rawresponses.LinksJSON_init_phc3y4$ = LinksJSON_init;
  package$rawresponses.LinksJSON = LinksJSON;
  Object.defineProperty(MultipleMatchJSON, 'Companion', {
    get: MultipleMatchJSON$Companion_getInstance
  });
  Object.defineProperty(MultipleMatchJSON, '$serializer', {
    get: MultipleMatchJSON$$serializer_getInstance
  });
  package$rawresponses.MultipleMatchJSON_init_qgio1v$ = MultipleMatchJSON_init;
  package$rawresponses.MultipleMatchJSON = MultipleMatchJSON;
  Object.defineProperty(MatchEmbeddedJSON, 'Companion', {
    get: MatchEmbeddedJSON$Companion_getInstance
  });
  Object.defineProperty(MatchEmbeddedJSON, '$serializer', {
    get: MatchEmbeddedJSON$$serializer_getInstance
  });
  package$rawresponses.MatchEmbeddedJSON_init_mmz17c$ = MatchEmbeddedJSON_init;
  package$rawresponses.MatchEmbeddedJSON = MatchEmbeddedJSON;
  Object.defineProperty(MatchJSON, 'Companion', {
    get: MatchJSON$Companion_getInstance
  });
  Object.defineProperty(MatchJSON, '$serializer', {
    get: MatchJSON$$serializer_getInstance
  });
  package$rawresponses.MatchJSON_init_38aim4$ = MatchJSON_init;
  package$rawresponses.MatchJSON = MatchJSON;
  Object.defineProperty(MultipleModesJSON, 'Companion', {
    get: MultipleModesJSON$Companion_getInstance
  });
  Object.defineProperty(MultipleModesJSON, '$serializer', {
    get: MultipleModesJSON$$serializer_getInstance
  });
  package$rawresponses.MultipleModesJSON_init_u5ma9s$ = MultipleModesJSON_init;
  package$rawresponses.MultipleModesJSON = MultipleModesJSON;
  Object.defineProperty(ModeEmbeddedJSON, 'Companion', {
    get: ModeEmbeddedJSON$Companion_getInstance
  });
  Object.defineProperty(ModeEmbeddedJSON, '$serializer', {
    get: ModeEmbeddedJSON$$serializer_getInstance
  });
  package$rawresponses.ModeEmbeddedJSON_init_b99bnq$ = ModeEmbeddedJSON_init;
  package$rawresponses.ModeEmbeddedJSON = ModeEmbeddedJSON;
  Object.defineProperty(ModeJSON, 'Companion', {
    get: ModeJSON$Companion_getInstance
  });
  Object.defineProperty(ModeJSON, '$serializer', {
    get: ModeJSON$$serializer_getInstance
  });
  package$rawresponses.ModeJSON_init_ngno80$ = ModeJSON_init;
  package$rawresponses.ModeJSON = ModeJSON;
  Object.defineProperty(PageJSON, 'Companion', {
    get: PageJSON$Companion_getInstance
  });
  Object.defineProperty(PageJSON, '$serializer', {
    get: PageJSON$$serializer_getInstance
  });
  package$rawresponses.PageJSON_init_avtit9$ = PageJSON_init;
  package$rawresponses.PageJSON = PageJSON;
  Object.defineProperty(MultipleRegistrationsJSON, 'Companion', {
    get: MultipleRegistrationsJSON$Companion_getInstance
  });
  Object.defineProperty(MultipleRegistrationsJSON, '$serializer', {
    get: MultipleRegistrationsJSON$$serializer_getInstance
  });
  package$rawresponses.MultipleRegistrationsJSON_init_575gwk$ = MultipleRegistrationsJSON_init;
  package$rawresponses.MultipleRegistrationsJSON = MultipleRegistrationsJSON;
  Object.defineProperty(MultipleEmbeddedJSON, 'Companion', {
    get: MultipleEmbeddedJSON$Companion_getInstance
  });
  Object.defineProperty(MultipleEmbeddedJSON, '$serializer', {
    get: MultipleEmbeddedJSON$$serializer_getInstance
  });
  package$rawresponses.MultipleEmbeddedJSON_init_q3mu90$ = MultipleEmbeddedJSON_init;
  package$rawresponses.MultipleEmbeddedJSON = MultipleEmbeddedJSON;
  Object.defineProperty(RegistrationJSON, 'Companion', {
    get: RegistrationJSON$Companion_getInstance
  });
  Object.defineProperty(RegistrationJSON, '$serializer', {
    get: RegistrationJSON$$serializer_getInstance
  });
  package$rawresponses.RegistrationJSON_init_vjnv0d$ = RegistrationJSON_init;
  package$rawresponses.RegistrationJSON = RegistrationJSON;
  Object.defineProperty(MultipleTournamentsJSON, 'Companion', {
    get: MultipleTournamentsJSON$Companion_getInstance
  });
  Object.defineProperty(MultipleTournamentsJSON, '$serializer', {
    get: MultipleTournamentsJSON$$serializer_getInstance
  });
  package$rawresponses.MultipleTournamentsJSON_init_f44hob$ = MultipleTournamentsJSON_init;
  package$rawresponses.MultipleTournamentsJSON = MultipleTournamentsJSON;
  Object.defineProperty(TournamentEmbeddedJSON, 'Companion', {
    get: TournamentEmbeddedJSON$Companion_getInstance
  });
  Object.defineProperty(TournamentEmbeddedJSON, '$serializer', {
    get: TournamentEmbeddedJSON$$serializer_getInstance
  });
  package$rawresponses.TournamentEmbeddedJSON_init_rmew6s$ = TournamentEmbeddedJSON_init;
  package$rawresponses.TournamentEmbeddedJSON = TournamentEmbeddedJSON;
  Object.defineProperty(TournamentJSON, 'Companion', {
    get: TournamentJSON$Companion_getInstance
  });
  Object.defineProperty(TournamentJSON, '$serializer', {
    get: TournamentJSON$$serializer_getInstance
  });
  package$rawresponses.TournamentJSON_init_r1ya5$ = TournamentJSON_init;
  package$rawresponses.TournamentJSON = TournamentJSON;
  Object.defineProperty(UserFIREBASE, 'Companion', {
    get: UserFIREBASE$Companion_getInstance
  });
  Object.defineProperty(UserFIREBASE, '$serializer', {
    get: UserFIREBASE$$serializer_getInstance
  });
  package$rawresponses.UserFIREBASE_init_1auudb$ = UserFIREBASE_init;
  package$rawresponses.UserFIREBASE = UserFIREBASE;
  Object.defineProperty(MultipleUsersJSON, 'Companion', {
    get: MultipleUsersJSON$Companion_getInstance
  });
  Object.defineProperty(MultipleUsersJSON, '$serializer', {
    get: MultipleUsersJSON$$serializer_getInstance
  });
  package$rawresponses.MultipleUsersJSON_init_43fb53$ = MultipleUsersJSON_init;
  package$rawresponses.MultipleUsersJSON = MultipleUsersJSON;
  Object.defineProperty(UserEmbeddedJSON, 'Companion', {
    get: UserEmbeddedJSON$Companion_getInstance
  });
  Object.defineProperty(UserEmbeddedJSON, '$serializer', {
    get: UserEmbeddedJSON$$serializer_getInstance
  });
  package$rawresponses.UserEmbeddedJSON_init_2r9aqa$ = UserEmbeddedJSON_init;
  package$rawresponses.UserEmbeddedJSON = UserEmbeddedJSON;
  Object.defineProperty(UserJSON, 'Companion', {
    get: UserJSON$Companion_getInstance
  });
  Object.defineProperty(UserJSON, '$serializer', {
    get: UserJSON$$serializer_getInstance
  });
  package$rawresponses.UserJSON_init_i7s1w7$ = UserJSON_init;
  package$rawresponses.UserJSON = UserJSON;
  Object.defineProperty(CreateGameJSON, 'Companion', {
    get: CreateGameJSON$Companion_getInstance
  });
  Object.defineProperty(CreateGameJSON, '$serializer', {
    get: CreateGameJSON$$serializer_getInstance
  });
  var package$createresponses = package$rawresponses.createresponses || (package$rawresponses.createresponses = {});
  package$createresponses.CreateGameJSON_init_lvx5pj$ = CreateGameJSON_init;
  package$createresponses.CreateGameJSON = CreateGameJSON;
  Object.defineProperty(CreateGameModeJSON, 'Companion', {
    get: CreateGameModeJSON$Companion_getInstance
  });
  Object.defineProperty(CreateGameModeJSON, '$serializer', {
    get: CreateGameModeJSON$$serializer_getInstance
  });
  package$createresponses.CreateGameModeJSON_init_lmlwo5$ = CreateGameModeJSON_init;
  package$createresponses.CreateGameModeJSON = CreateGameModeJSON;
  Object.defineProperty(CreateMatchJSON, 'Companion', {
    get: CreateMatchJSON$Companion_getInstance
  });
  Object.defineProperty(CreateMatchJSON, '$serializer', {
    get: CreateMatchJSON$$serializer_getInstance
  });
  package$createresponses.CreateMatchJSON_init_1tc0g3$ = CreateMatchJSON_init;
  package$createresponses.CreateMatchJSON = CreateMatchJSON;
  Object.defineProperty(CreateRegistrationJSON, 'Companion', {
    get: CreateRegistrationJSON$Companion_getInstance
  });
  Object.defineProperty(CreateRegistrationJSON, '$serializer', {
    get: CreateRegistrationJSON$$serializer_getInstance
  });
  package$createresponses.CreateRegistrationJSON_init_abzm4l$ = CreateRegistrationJSON_init;
  package$createresponses.CreateRegistrationJSON = CreateRegistrationJSON;
  Object.defineProperty(CreateTournamentJSON, 'Companion', {
    get: CreateTournamentJSON$Companion_getInstance
  });
  Object.defineProperty(CreateTournamentJSON, '$serializer', {
    get: CreateTournamentJSON$$serializer_getInstance
  });
  package$createresponses.CreateTournamentJSON_init_p17i3p$ = CreateTournamentJSON_init;
  package$createresponses.CreateTournamentJSON = CreateTournamentJSON;
  Object.defineProperty(CreateUserJSON, 'Companion', {
    get: CreateUserJSON$Companion_getInstance
  });
  Object.defineProperty(CreateUserJSON, '$serializer', {
    get: CreateUserJSON$$serializer_getInstance
  });
  package$createresponses.CreateUserJSON_init_hbbcfw$ = CreateUserJSON_init;
  package$createresponses.CreateUserJSON = CreateUserJSON;
  $$importsForInline$$['my-application-data'] = _;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  var package$repositories = package$myapplication.repositories || (package$myapplication.repositories = {});
  package$repositories.ArenaTournamentRepositoryImplementation = ArenaTournamentRepositoryImplementation;
  var package$splitters = package$myapplication.splitters || (package$myapplication.splitters = {});
  package$splitters.GameSplitter = GameSplitter;
  package$splitters.MatchSplitter = MatchSplitter;
  package$splitters.RegistrationSplitter = RegistrationSplitter;
  package$splitters.Splitter = Splitter;
  package$splitters.TournamentSplitter = TournamentSplitter;
  AccountStatusJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  SubscriptionStatusJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultipleGamesJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  GameEmbeddedJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  GameJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  HrefJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LinksJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultipleMatchJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MatchEmbeddedJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MatchJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultipleModesJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ModeEmbeddedJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ModeJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  PageJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultipleRegistrationsJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultipleEmbeddedJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  RegistrationJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultipleTournamentsJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  TournamentEmbeddedJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  TournamentJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  UserFIREBASE$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultipleUsersJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  UserEmbeddedJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  UserJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  CreateGameJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  CreateGameModeJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  CreateMatchJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  CreateRegistrationJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  CreateTournamentJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  CreateUserJSON$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ArenaTournamentRepositoryImplementation.prototype.createRegistration_a17aol$ = ArenaTournamentRepository.prototype.createRegistration_a17aol$;
  GameSplitter.prototype.invoke_11rb$ = Splitter.prototype.invoke_11rb$;
  MatchSplitter.prototype.invoke_11rb$ = Splitter.prototype.invoke_11rb$;
  RegistrationSplitter.prototype.invoke_11rb$ = Splitter.prototype.invoke_11rb$;
  TournamentSplitter.prototype.invoke_11rb$ = Splitter.prototype.invoke_11rb$;
  Kotlin.defineModule('my-application-data', _);
  return _;
}));

//# sourceMappingURL=my-application-data.js.map
