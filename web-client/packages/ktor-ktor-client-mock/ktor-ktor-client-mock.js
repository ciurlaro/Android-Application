(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-client-core', 'kotlinx-coroutines-core', 'ktor-ktor-http', 'ktor-ktor-utils', 'kotlinx-io-kotlinx-coroutines-io', 'kotlinx-io'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-client-core'), require('kotlinx-coroutines-core'), require('ktor-ktor-http'), require('ktor-ktor-utils'), require('kotlinx-io-kotlinx-coroutines-io'), require('kotlinx-io'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-mock'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-mock'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-mock'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'ktor-ktor-client-mock'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-mock'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-mock'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-mock'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-mock'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-mock'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-mock'.");
    }
    if (typeof this['kotlinx-io-kotlinx-coroutines-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-mock'. Its dependency 'kotlinx-io-kotlinx-coroutines-io' was not found. Please, check whether 'kotlinx-io-kotlinx-coroutines-io' is loaded prior to 'ktor-ktor-client-mock'.");
    }
    if (typeof this['kotlinx-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-mock'. Its dependency 'kotlinx-io' was not found. Please, check whether 'kotlinx-io' is loaded prior to 'ktor-ktor-client-mock'.");
    }
    root['ktor-ktor-client-mock'] = factory(typeof this['ktor-ktor-client-mock'] === 'undefined' ? {} : this['ktor-ktor-client-mock'], kotlin, this['ktor-ktor-client-core'], this['kotlinx-coroutines-core'], this['ktor-ktor-http'], this['ktor-ktor-utils'], this['kotlinx-io-kotlinx-coroutines-io'], this['kotlinx-io']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_client_core, $module$kotlinx_coroutines_core, $module$ktor_ktor_http, $module$ktor_ktor_utils, $module$kotlinx_io_kotlinx_coroutines_io, $module$kotlinx_io) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HttpClientEngineFactory = $module$ktor_ktor_client_core.io.ktor.client.engine.HttpClientEngineFactory;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var HttpClientEngine = $module$ktor_ktor_client_core.io.ktor.client.engine.HttpClientEngine;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var HttpClientEngineConfig = $module$ktor_ktor_client_core.io.ktor.client.engine.HttpClientEngineConfig;
  var OutgoingContent$ByteArrayContent = $module$ktor_ktor_http.io.ktor.http.content.OutgoingContent.ByteArrayContent;
  var toByteArray = $module$ktor_ktor_utils.io.ktor.util.toByteArray_ep79e2$;
  var OutgoingContent$ReadChannelContent = $module$ktor_ktor_http.io.ktor.http.content.OutgoingContent.ReadChannelContent;
  var ByteChannel = $module$kotlinx_io_kotlinx_coroutines_io.kotlinx.coroutines.io.ByteChannel_6taknv$;
  var Unit = Kotlin.kotlin.Unit;
  var OutgoingContent$WriteChannelContent = $module$ktor_ktor_http.io.ktor.http.content.OutgoingContent.WriteChannelContent;
  var readRemaining = $module$kotlinx_io_kotlinx_coroutines_io.kotlinx.coroutines.io.readRemaining_ep79e2$;
  var ByteReadPacket = $module$kotlinx_io.kotlinx.io.core.ByteReadPacket;
  var headersOf = $module$ktor_ktor_http.io.ktor.http.headersOf;
  var HttpStatusCode = $module$ktor_ktor_http.io.ktor.http.HttpStatusCode;
  var charsets = $module$kotlinx_io.kotlinx.io.charsets;
  var ByteReadChannel = $module$kotlinx_io_kotlinx_coroutines_io.kotlinx.coroutines.io.ByteReadChannel_mj6st8$;
  var GMTDate = $module$ktor_ktor_utils.io.ktor.util.date.GMTDate_mts6q2$;
  var HttpProtocolVersion = $module$ktor_ktor_http.io.ktor.http.HttpProtocolVersion;
  var HttpResponseData = $module$ktor_ktor_client_core.io.ktor.client.request.HttpResponseData;
  var ByteReadPacket_0 = $module$kotlinx_io.kotlinx.io.core.ByteReadPacket_1qge3v$;
  var encodeToByteArray = $module$kotlinx_io.kotlinx.io.charsets.encodeToByteArray_478lbv$;
  MockEngineConfig.prototype = Object.create(HttpClientEngineConfig.prototype);
  MockEngineConfig.prototype.constructor = MockEngineConfig;
  function MockEngine(config) {
    MockEngine$Companion_getInstance();
    this.config_ccafp3$_0 = config;
    this.invocationCount_0 = 0;
    this._requestsHistory_0 = ArrayList_init();
    this._responseHistory_0 = ArrayList_init();
    this.contextState_0 = Job();
    if (!(this.config.requestHandlers.size > 0)) {
      var message = 'No request handler provided in [MockEngineConfig], please provide at least one.';
      throw IllegalStateException_init(message.toString());
    }
    this.dispatcher_1an8em$_0 = coroutines.Dispatchers.Unconfined;
    this.coroutineContext_sypm72$_0 = this.dispatcher.plus_1fupul$(this.contextState_0);
  }
  Object.defineProperty(MockEngine.prototype, 'config', {
  get: function() {
  return this.config_ccafp3$_0;
}});
  Object.defineProperty(MockEngine.prototype, 'requestHistory', {
  get: function() {
  return this._requestsHistory_0;
}});
  Object.defineProperty(MockEngine.prototype, 'responseHistory', {
  get: function() {
  return this._responseHistory_0;
}});
  Object.defineProperty(MockEngine.prototype, 'dispatcher', {
  get: function() {
  return this.dispatcher_1an8em$_0;
}});
  Object.defineProperty(MockEngine.prototype, 'coroutineContext', {
  get: function() {
  return this.coroutineContext_sypm72$_0;
}});
  function Coroutine$execute_dkgphz$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$execute_dkgphz$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$execute_dkgphz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_dkgphz$.prototype.constructor = Coroutine$execute_dkgphz$;
  Coroutine$execute_dkgphz$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.invocationCount_0 >= this.$this.config.requestHandlers.size) {
          throw IllegalStateException_init(('Unhandled ' + this.local$data.url).toString());
        }
        var handler = this.$this.config.requestHandlers.get_za3lpa$(this.$this.invocationCount_0);
        this.$this.invocationCount_0 = this.$this.invocationCount_0 + 1 | 0;
        if (this.$this.config.reuseHandlers) {
          this.$this.invocationCount_0 = this.$this.invocationCount_0 % this.$this.config.requestHandlers.size;
        }
        this.state_0 = 2;
        this.result_0 = handler(this.local$data, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var response = this.result_0;
        this.$this._requestsHistory_0.add_11rb$(this.local$data);
        this.$this._responseHistory_0.add_11rb$(response);
        return response;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  MockEngine.prototype.execute_dkgphz$ = function(data_0, continuation_0, suspended) {
  var instance = new Coroutine$execute_dkgphz$(this, data_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  MockEngine.prototype.close = function() {
  this.contextState_0.complete();
};
  function MockEngine$Companion() {
    MockEngine$Companion_instance = this;
  }
  MockEngine$Companion.prototype.create_dxyxif$$default = function(block) {
  var $receiver = new MockEngineConfig();
  block($receiver);
  return new MockEngine($receiver);
};
  MockEngine$Companion.prototype.invoke_y7mm6y$ = function(handler) {
  var $receiver = new MockEngineConfig();
  $receiver.requestHandlers.add_11rb$(handler);
  return new MockEngine($receiver);
};
  MockEngine$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: [HttpClientEngineFactory]};
  var MockEngine$Companion_instance = null;
  function MockEngine$Companion_getInstance() {
    if (MockEngine$Companion_instance === null) {
      new MockEngine$Companion();
    }
    return MockEngine$Companion_instance;
  }
  MockEngine.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'MockEngine', 
  interfaces: [HttpClientEngine]};
  function MockEngineConfig() {
    HttpClientEngineConfig.call(this);
    this.requestHandlers = ArrayList_init();
    this.reuseHandlers = true;
  }
  MockEngineConfig.prototype.addHandler_y7mm6y$ = function(handler) {
  this.requestHandlers.add_11rb$(handler);
};
  MockEngineConfig.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'MockEngineConfig', 
  interfaces: [HttpClientEngineConfig]};
  function ByteReadPacket$lambda(it) {
    return Unit;
  }
  function Coroutine$toByteArray($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toByteArray.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$toByteArray.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toByteArray.prototype.constructor = Coroutine$toByteArray;
  Coroutine$toByteArray.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (Kotlin.isType(this.local$$receiver, OutgoingContent$ByteArrayContent)) {
          return this.local$$receiver.bytes();
        } else {
          if (Kotlin.isType(this.local$$receiver, OutgoingContent$ReadChannelContent)) {
            this.state_0 = 5;
            this.result_0 = toByteArray(this.local$$receiver.readFrom(), this);
            if (this.result_0 === COROUTINE_SUSPENDED) 
              return COROUTINE_SUSPENDED;
            continue;
          } else {
            if (Kotlin.isType(this.local$$receiver, OutgoingContent$WriteChannelContent)) {
              this.local$$receiver_0 = ByteChannel();
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.writeTo_sfhht4$(this.local$$receiver_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED) 
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              return new Int8Array(0);
            }
          }
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = toByteArray(this.local$$receiver_0, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      case 4:
        this.state_0 = 6;
        continue;
      case 5:
        return this.result_0;
      case 6:
        this.state_0 = 7;
        continue;
      case 7:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function toByteArray_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toByteArray($receiver_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$toByteReadPacket($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toByteReadPacket.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$toByteReadPacket.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toByteReadPacket.prototype.constructor = Coroutine$toByteReadPacket;
  Coroutine$toByteReadPacket.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (Kotlin.isType(this.local$$receiver, OutgoingContent$ByteArrayContent)) {
          var array = this.local$$receiver.bytes();
          return ByteReadPacket_0(array, 0, array.length, ByteReadPacket$lambda);
        } else {
          if (Kotlin.isType(this.local$$receiver, OutgoingContent$ReadChannelContent)) {
            this.state_0 = 5;
            this.result_0 = readRemaining(this.local$$receiver.readFrom(), this);
            if (this.result_0 === COROUTINE_SUSPENDED) 
              return COROUTINE_SUSPENDED;
            continue;
          } else {
            if (Kotlin.isType(this.local$$receiver, OutgoingContent$WriteChannelContent)) {
              this.local$$receiver_0 = ByteChannel();
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.writeTo_sfhht4$(this.local$$receiver_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED) 
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              return ByteReadPacket.Companion.Empty;
            }
          }
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = readRemaining(this.local$$receiver_0, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      case 4:
        this.state_0 = 6;
        continue;
      case 5:
        return this.result_0;
      case 6:
        this.state_0 = 7;
        continue;
      case 7:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function toByteReadPacket($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toByteReadPacket($receiver_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function respondError(status, content, headers) {
    if (content === void 0) 
      content = status.description;
    if (headers === void 0) 
      headers = headersOf();
    return respond(content, status, headers);
  }
  function respondOk(content) {
    if (content === void 0) 
      content = '';
    return respond(content, HttpStatusCode.Companion.OK);
  }
  function respondBadRequest() {
    return respond('Bad Request', HttpStatusCode.Companion.BadRequest);
  }
  function respond(content, status, headers) {
    if (status === void 0) 
      status = HttpStatusCode.Companion.OK;
    if (headers === void 0) 
      headers = headersOf();
    return respond_1(ByteReadChannel(encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), content, 0, content.length)), status, headers);
  }
  function respond_0(content, status, headers) {
    if (status === void 0) 
      status = HttpStatusCode.Companion.OK;
    if (headers === void 0) 
      headers = headersOf();
    return respond_1(ByteReadChannel(content), status, headers);
  }
  function respond_1(content, status, headers) {
    if (status === void 0) 
      status = HttpStatusCode.Companion.OK;
    if (headers === void 0) 
      headers = headersOf();
    return new HttpResponseData(status, GMTDate(), headers, HttpProtocolVersion.Companion.HTTP_1_1, content, createMockCallContext());
  }
  function createMockCallContext() {
    return coroutines.Dispatchers.Default.plus_1fupul$(Job());
  }
  Object.defineProperty(MockEngine, 'Companion', {
  get: MockEngine$Companion_getInstance});
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$engine = package$client.engine || (package$client.engine = {});
  var package$mock = package$engine.mock || (package$engine.mock = {});
  package$mock.MockEngine = MockEngine;
  package$mock.MockEngineConfig = MockEngineConfig;
  package$mock.toByteArray_eu3mal$ = toByteArray_0;
  $$importsForInline$$['kotlinx-io'] = $module$kotlinx_io;
  package$mock.toByteReadPacket_eu3mal$ = toByteReadPacket;
  package$mock.respondError_lmer9b$ = respondError;
  package$mock.respondOk_61zpoe$ = respondOk;
  package$mock.respondBadRequest = respondBadRequest;
  package$mock.respond_eywny9$ = respond;
  package$mock.respond_hc076j$ = respond_0;
  package$mock.respond_osidkq$ = respond_1;
  MockEngine$Companion.prototype.create_dxyxif$ = HttpClientEngineFactory.prototype.create_dxyxif$;
  MockEngine.prototype.install_k5i6f8$ = HttpClientEngine.prototype.install_k5i6f8$;
  Kotlin.defineModule('ktor-ktor-client-mock', _);
  return _;
}));
