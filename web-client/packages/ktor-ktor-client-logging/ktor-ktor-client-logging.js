(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-http', 'kotlinx-io-kotlinx-coroutines-io', 'kotlinx-io', 'kotlinx-coroutines-core', 'ktor-ktor-client-core', 'ktor-ktor-utils'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-http'), require('kotlinx-io-kotlinx-coroutines-io'), require('kotlinx-io'), require('kotlinx-coroutines-core'), require('ktor-ktor-client-core'), require('ktor-ktor-utils'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-logging'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-logging'.");
    }
    if (typeof this['kotlinx-io-kotlinx-coroutines-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging'. Its dependency 'kotlinx-io-kotlinx-coroutines-io' was not found. Please, check whether 'kotlinx-io-kotlinx-coroutines-io' is loaded prior to 'ktor-ktor-client-logging'.");
    }
    if (typeof this['kotlinx-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging'. Its dependency 'kotlinx-io' was not found. Please, check whether 'kotlinx-io' is loaded prior to 'ktor-ktor-client-logging'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-logging'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'ktor-ktor-client-logging'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-logging'.");
    }
    root['ktor-ktor-client-logging'] = factory(typeof this['ktor-ktor-client-logging'] === 'undefined' ? {} : this['ktor-ktor-client-logging'], kotlin, this['ktor-ktor-http'], this['kotlinx-io-kotlinx-coroutines-io'], this['kotlinx-io'], this['kotlinx-coroutines-core'], this['ktor-ktor-client-core'], this['ktor-ktor-utils']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_http, $module$kotlinx_io_kotlinx_coroutines_io, $module$kotlinx_io, $module$kotlinx_coroutines_core, $module$ktor_ktor_client_core, $module$ktor_ktor_utils) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Url = $module$ktor_ktor_http.io.ktor.http.Url_pboq08$;
  var OutgoingContent = $module$ktor_ktor_http.io.ktor.http.content.OutgoingContent;
  var throwCCE = Kotlin.throwCCE;
  var contentType = $module$ktor_ktor_http.io.ktor.http.contentType_v1wgmc$;
  var discard = $module$kotlinx_io_kotlinx_coroutines_io.kotlinx.coroutines.io.discard_ep79e2$;
  var Unit = Kotlin.kotlin.Unit;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var charset = $module$ktor_ktor_http.io.ktor.http.charset_10ldo9$;
  var charsets = $module$kotlinx_io.kotlinx.io.charsets;
  var ByteChannel = $module$kotlinx_io_kotlinx_coroutines_io.kotlinx.coroutines.io.ByteChannel_6taknv$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var close = $module$kotlinx_io_kotlinx_coroutines_io.kotlinx.coroutines.io.close_sypobt$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var OutgoingContent$WriteChannelContent = $module$ktor_ktor_http.io.ktor.http.content.OutgoingContent.WriteChannelContent;
  var OutgoingContent$ReadChannelContent = $module$ktor_ktor_http.io.ktor.http.content.OutgoingContent.ReadChannelContent;
  var String_0 = $module$kotlinx_io.kotlinx.io.core.String_37vbci$;
  var OutgoingContent$ByteArrayContent = $module$ktor_ktor_http.io.ktor.http.content.OutgoingContent.ByteArrayContent;
  var HttpSendPipeline = $module$ktor_ktor_client_core.io.ktor.client.request.HttpSendPipeline;
  var Throwable = Error;
  var HttpResponsePipeline = $module$ktor_ktor_client_core.io.ktor.client.response.HttpResponsePipeline;
  var ResponseObserver = $module$ktor_ktor_client_core.io.ktor.client.features.observer.ResponseObserver;
  var AttributeKey = $module$ktor_ktor_utils.io.ktor.util.AttributeKey;
  var HttpClientFeature = $module$ktor_ktor_client_core.io.ktor.client.features.HttpClientFeature;
  var readRemaining = $module$kotlinx_io_kotlinx_coroutines_io.kotlinx.coroutines.io.readRemaining_ep79e2$;
  var readText = $module$kotlinx_io.kotlinx.io.core.readText_q10u79$;
  var addSuppressedInternal = $module$kotlinx_io.kotlinx.io.core.addSuppressedInternal_oh0dqn$;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  function LogLevel(name, ordinal, info, headers, body) {
    Enum.call(this);
    this.info = info;
    this.headers = headers;
    this.body = body;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LogLevel_initFields() {
    LogLevel_initFields = function() {
};
    LogLevel$ALL_instance = new LogLevel('ALL', 0, true, true, true);
    LogLevel$HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
    LogLevel$BODY_instance = new LogLevel('BODY', 2, true, false, true);
    LogLevel$INFO_instance = new LogLevel('INFO', 3, true, false, false);
    LogLevel$NONE_instance = new LogLevel('NONE', 4, false, false, false);
  }
  var LogLevel$ALL_instance;
  function LogLevel$ALL_getInstance() {
    LogLevel_initFields();
    return LogLevel$ALL_instance;
  }
  var LogLevel$HEADERS_instance;
  function LogLevel$HEADERS_getInstance() {
    LogLevel_initFields();
    return LogLevel$HEADERS_instance;
  }
  var LogLevel$BODY_instance;
  function LogLevel$BODY_getInstance() {
    LogLevel_initFields();
    return LogLevel$BODY_instance;
  }
  var LogLevel$INFO_instance;
  function LogLevel$INFO_getInstance() {
    LogLevel_initFields();
    return LogLevel$INFO_instance;
  }
  var LogLevel$NONE_instance;
  function LogLevel$NONE_getInstance() {
    LogLevel_initFields();
    return LogLevel$NONE_instance;
  }
  LogLevel.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'LogLevel', 
  interfaces: [Enum]};
  function LogLevel$values() {
    return [LogLevel$ALL_getInstance(), LogLevel$HEADERS_getInstance(), LogLevel$BODY_getInstance(), LogLevel$INFO_getInstance(), LogLevel$NONE_getInstance()];
  }
  LogLevel.values = LogLevel$values;
  function LogLevel$valueOf(name) {
    switch (name) {
      case 'ALL':
        return LogLevel$ALL_getInstance();
      case 'HEADERS':
        return LogLevel$HEADERS_getInstance();
      case 'BODY':
        return LogLevel$BODY_getInstance();
      case 'INFO':
        return LogLevel$INFO_getInstance();
      case 'NONE':
        return LogLevel$NONE_getInstance();
      default:
        throwISE('No enum constant io.ktor.client.features.logging.LogLevel.' + name);
    }
  }
  LogLevel.valueOf_61zpoe$ = LogLevel$valueOf;
  function Logger() {
    Logger$Companion_getInstance();
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
  }
  Logger$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  Logger.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Logger', 
  interfaces: []};
  function get_SIMPLE($receiver) {
    return new SimpleLogger();
  }
  function get_EMPTY$ObjectLiteral() {
  }
  get_EMPTY$ObjectLiteral.prototype.log_61zpoe$ = function(message) {
};
  get_EMPTY$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [Logger]};
  function get_EMPTY($receiver) {
    return new get_EMPTY$ObjectLiteral();
  }
  function SimpleLogger() {
  }
  SimpleLogger.prototype.log_61zpoe$ = function(message) {
  println('HttpClient: ' + message);
};
  SimpleLogger.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'SimpleLogger', 
  interfaces: [Logger]};
  function Logging(logger, level) {
    Logging$Companion_getInstance();
    this.logger = logger;
    this.level = level;
  }
  function Logging$Config() {
    this.logger = get_DEFAULT(Logger$Companion_getInstance());
    this.level = LogLevel$HEADERS_getInstance();
  }
  Logging$Config.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Config', 
  interfaces: []};
  function Coroutine$logRequest_0($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$request = request_0;
  }
  Coroutine$logRequest_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$logRequest_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$logRequest_0.prototype.constructor = Coroutine$logRequest_0;
  Coroutine$logRequest_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (this.$this.level.info) {
          this.$this.logger.log_61zpoe$('REQUEST: ' + Url(this.local$request.url));
          this.$this.logger.log_61zpoe$('METHOD: ' + this.local$request.method);
        }
        var content = Kotlin.isType(tmp$ = this.local$request.body, OutgoingContent) ? tmp$ : throwCCE();
        if (this.$this.level.headers) 
          this.$this.logHeaders_0(this.local$request.headers.entries(), content.headers);
        if (this.$this.level.body) {
          this.state_0 = 2;
          this.result_0 = this.$this.logRequestBody_0(content, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        continue;
      case 3:
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
  Logging.prototype.logRequest_0 = function(request_0, continuation_0, suspended) {
  var instance = new Coroutine$logRequest_0(this, request_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$logResponse_0($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$closed = void 0;
    this.local$response = response_0;
  }
  Coroutine$logResponse_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$logResponse_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$logResponse_0.prototype.constructor = Coroutine$logResponse_0;
  Coroutine$logResponse_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$closed = false;
        this.exceptionState_0 = 4;
        if (this.$this.level.info) {
          this.$this.logger.log_61zpoe$('RESPONSE: ' + this.local$response.status);
          this.$this.logger.log_61zpoe$('METHOD: ' + this.local$response.call.request.method);
          this.$this.logger.log_61zpoe$('FROM: ' + this.local$response.call.request.url);
        }
        if (this.$this.level.headers) 
          this.$this.logHeaders_0(this.local$response.headers.entries());
        if (this.$this.level.body) {
          this.state_0 = 2;
          this.result_0 = this.$this.logResponseBody_0(contentType(this.local$response), this.local$response.content, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.state_0 = 1;
          this.result_0 = discard(this.local$response.content, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        this.state_0 = 3;
        continue;
      case 2:
        this.state_0 = 3;
        continue;
      case 3:
        this.local$tmp$ = Unit;
        this.exceptionState_0 = 7;
        this.finallyPath_0 = [6];
        this.state_0 = 5;
        continue;
      case 4:
        this.finallyPath_0 = [7];
        this.exceptionState_0 = 5;
        var first = this.exception_0;
        if (Kotlin.isType(first, Throwable)) {
          try {
            this.local$closed = true;
            this.local$response.close();
          }          catch (second) {
  if (Kotlin.isType(second, Throwable)) {
    addSuppressedInternal(first, second);
  } else 
    throw second;
}
          throw first;
        } else 
          throw first;
      case 5:
        this.exceptionState_0 = 7;
        if (!this.local$closed) {
          this.local$response.close();
        }
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 6:
        return this.local$tmp$;
      case 7:
        throw this.exception_0;
      default:
        this.state_0 = 7;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 7) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  Logging.prototype.logResponse_0 = function(response_0, continuation_0, suspended) {
  var instance = new Coroutine$logResponse_0(this, response_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  Logging.prototype.logRequestException_0 = function(context, cause) {
  if (!this.level.info) 
    return;
  this.logger.log_61zpoe$('REQUEST ' + Url(context.url) + ' failed with exception: ' + cause);
};
  Logging.prototype.logResponseException_0 = function(context, cause) {
  if (!this.level.info) 
    return;
  this.logger.log_61zpoe$('RESPONSE ' + context.request.url + ' failed with exception: ' + cause);
};
  function Logging$logHeaders$lambda$lambda(this$) {
    return function(key, values) {
  this$.log_61zpoe$('-> ' + key + ': ' + joinToString(values, '; '));
  return Unit;
};
  }
  Logging.prototype.logHeaders_0 = function(requestHeaders, contentHeaders) {
  if (contentHeaders === void 0) 
    contentHeaders = null;
  var $receiver = this.logger;
  block$break:
    do {
      $receiver.log_61zpoe$('COMMON HEADERS');
      var tmp$;
      tmp$ = requestHeaders.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var key = element.key;
        var values = element.value;
        $receiver.log_61zpoe$('-> ' + key + ': ' + joinToString(values, '; '));
      }
      if (contentHeaders == null) 
        break block$break;
      $receiver.log_61zpoe$('CONTENT HEADERS');
      contentHeaders.forEach_ubvtmq$(Logging$logHeaders$lambda$lambda($receiver));
    } while (false);
};
  function Coroutine$logResponseBody_0($this, contentType_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$tmp$_0 = void 0;
    this.local$contentType = contentType_0;
    this.local$content = content_0;
  }
  Coroutine$logResponseBody_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$logResponseBody_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$logResponseBody_0.prototype.constructor = Coroutine$logResponseBody_0;
  Coroutine$logResponseBody_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$$receiver = this.$this.logger;
        var tmp$;
        this.local$$receiver.log_61zpoe$('BODY Content-Type: ' + toString(this.local$contentType));
        this.local$$receiver.log_61zpoe$('BODY START');
        this.local$tmp$_0 = (tmp$ = this.local$contentType != null ? charset(this.local$contentType) : null) != null ? tmp$ : charsets.Charsets.UTF_8;
        this.state_0 = 2;
        this.result_0 = readRemaining(this.local$content, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.result_0 = readText(this.result_0, this.local$tmp$_0);
        var message = this.result_0;
        this.local$$receiver.log_61zpoe$(message);
        this.local$$receiver.log_61zpoe$('BODY END');
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
  Logging.prototype.logResponseBody_0 = function(contentType_0, content_0, continuation_0, suspended) {
  var instance = new Coroutine$logResponseBody_0(this, contentType_0, content_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$Logging$logRequestBody$lambda$lambda(closure$content_0, closure$textChannel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$content = closure$content_0;
    this.local$closure$textChannel = closure$textChannel_0;
  }
  Coroutine$Logging$logRequestBody$lambda$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$logRequestBody$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$logRequestBody$lambda$lambda.prototype.constructor = Coroutine$Logging$logRequestBody$lambda$lambda;
  Coroutine$Logging$logRequestBody$lambda$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$closure$content.writeTo_sfhht4$(this.local$closure$textChannel, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return close(this.local$closure$textChannel);
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
  function Logging$logRequestBody$lambda$lambda(closure$content_0, closure$textChannel_0) {
    return function($receiver_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$logRequestBody$lambda$lambda(closure$content_0, closure$textChannel_0, $receiver_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$logRequestBody_0($this, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$tmp$_1 = void 0;
    this.local$charset = void 0;
    this.local$content = content_0;
  }
  Coroutine$logRequestBody_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$logRequestBody_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$logRequestBody_0.prototype.constructor = Coroutine$logRequestBody_0;
  Coroutine$logRequestBody_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$$receiver = this.$this.logger;
        var tmp$, tmp$_0;
        this.local$$receiver.log_61zpoe$('BODY Content-Type: ' + toString(this.local$content.contentType));
        this.local$charset = (tmp$_0 = (tmp$ = this.local$content.contentType) != null ? charset(tmp$) : null) != null ? tmp$_0 : charsets.Charsets.UTF_8;
        if (Kotlin.isType(this.local$content, OutgoingContent$WriteChannelContent)) {
          var textChannel = ByteChannel();
          launch(coroutines.GlobalScope, coroutines.Dispatchers.Unconfined, void 0, Logging$logRequestBody$lambda$lambda(this.local$content, textChannel));
          this.state_0 = 4;
          this.result_0 = readRemaining(textChannel, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          if (Kotlin.isType(this.local$content, OutgoingContent$ReadChannelContent)) {
            this.state_0 = 2;
            this.result_0 = readRemaining(this.local$content.readFrom(), this);
            if (this.result_0 === COROUTINE_SUSPENDED) 
              return COROUTINE_SUSPENDED;
            continue;
          } else {
            if (Kotlin.isType(this.local$content, OutgoingContent$ByteArrayContent)) 
              this.local$tmp$_1 = String_0(this.local$content.bytes(), void 0, void 0, this.local$charset);
            else 
              this.local$tmp$_1 = null;
            this.state_0 = 3;
            continue;
          }
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.result_0 = readText(this.result_0, this.local$charset);
        this.local$tmp$_1 = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        this.state_0 = 5;
        continue;
      case 4:
        this.result_0 = readText(this.result_0, this.local$charset);
        this.local$tmp$_1 = this.result_0;
        this.state_0 = 5;
        continue;
      case 5:
        var text = this.local$tmp$_1;
        this.local$$receiver.log_61zpoe$('BODY START');
        if (text != null) {
          this.local$$receiver.log_61zpoe$(text);
        }
        this.local$$receiver.log_61zpoe$('BODY END');
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
  Logging.prototype.logRequestBody_0 = function(content_0, continuation_0, suspended) {
  var instance = new Coroutine$logRequestBody_0(this, content_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Logging$Companion() {
    Logging$Companion_instance = this;
    this.key_oty3cz$_0 = new AttributeKey('ClientLogging');
  }
  Object.defineProperty(Logging$Companion.prototype, 'key', {
  get: function() {
  return this.key_oty3cz$_0;
}});
  Logging$Companion.prototype.prepare_oh3mgy$$default = function(block) {
  var $receiver = new Logging$Config();
  block($receiver);
  var config = $receiver;
  return new Logging(config.logger, config.level);
};
  function Coroutine$Logging$Companion$install$lambda(closure$feature_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 7;
    this.local$closure$feature = closure$feature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Logging$Companion$install$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$Companion$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$Companion$install$lambda.prototype.constructor = Coroutine$Logging$Companion$install$lambda;
  Coroutine$Logging$Companion$install$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 2;
        this.state_0 = 1;
        this.result_0 = this.local$closure$feature.logRequest_0(this.local$$receiver.context, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.exceptionState_0 = 7;
        this.state_0 = 3;
        continue;
      case 2:
        this.exceptionState_0 = 7;
        var _ = this.exception_0;
        if (!Kotlin.isType(_, Throwable)) 
          throw _;
        this.state_0 = 3;
        continue;
      case 3:
        this.exceptionState_0 = 5;
        this.state_0 = 4;
        this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$$receiver.subject, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        return this.result_0;
      case 5:
        this.exceptionState_0 = 7;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          this.local$closure$feature.logRequestException_0(this.local$$receiver.context, cause);
          throw cause;
        } else 
          throw cause;
      case 6:
        return;
      case 7:
        throw this.exception_0;
      default:
        this.state_0 = 7;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 7) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$Companion$install$lambda(closure$feature_0) {
    return function($receiver_0, it_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$Companion$install$lambda(closure$feature_0, $receiver_0, it_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$Logging$Companion$install$lambda_0(closure$feature_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$closure$feature = closure$feature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Logging$Companion$install$lambda_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$Companion$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$Companion$install$lambda_0.prototype.constructor = Coroutine$Logging$Companion$install$lambda_0;
  Coroutine$Logging$Companion$install$lambda_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 2;
        this.state_0 = 1;
        this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$$receiver.subject, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        return this.result_0;
      case 2:
        this.exceptionState_0 = 4;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          this.local$closure$feature.logResponseException_0(this.local$$receiver.context, cause);
          throw cause;
        } else 
          throw cause;
      case 3:
        return;
      case 4:
        throw this.exception_0;
      default:
        this.state_0 = 4;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 4) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$Companion$install$lambda_0(closure$feature_0) {
    return function($receiver_0, it_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$Companion$install$lambda_0(closure$feature_0, $receiver_0, it_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$Logging$Companion$install$lambda_1(closure$feature_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$feature = closure$feature_0;
    this.local$it = it_0;
  }
  Coroutine$Logging$Companion$install$lambda_1.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$Companion$install$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$Companion$install$lambda_1.prototype.constructor = Coroutine$Logging$Companion$install$lambda_1;
  Coroutine$Logging$Companion$install$lambda_1.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 2;
        this.state_0 = 1;
        this.result_0 = this.local$closure$feature.logResponse_0(this.local$it, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        return this.result_0;
      case 2:
        this.exceptionState_0 = 5;
        var _ = this.exception_0;
        if (Kotlin.isType(_, Throwable)) {
          return Unit;
        } else {
          throw _;
        }
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        return;
      case 5:
        throw this.exception_0;
      default:
        this.state_0 = 5;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 5) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$Companion$install$lambda_1(closure$feature_0) {
    return function(it_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$Companion$install$lambda_1(closure$feature_0, it_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  Logging$Companion.prototype.install_wojrb5$ = function(feature, scope) {
  scope.sendPipeline.intercept_h71y74$(HttpSendPipeline.Phases.Before, Logging$Companion$install$lambda(feature));
  scope.responsePipeline.intercept_h71y74$(HttpResponsePipeline.Phases.Receive, Logging$Companion$install$lambda_0(feature));
  var observer = Logging$Companion$install$lambda_1(feature);
  ResponseObserver.Feature.install_wojrb5$(new ResponseObserver(observer), scope);
};
  Logging$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: [HttpClientFeature]};
  var Logging$Companion_instance = null;
  function Logging$Companion_getInstance() {
    if (Logging$Companion_instance === null) {
      new Logging$Companion();
    }
    return Logging$Companion_instance;
  }
  Logging.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Logging', 
  interfaces: []};
  function Logging$lambda($receiver) {
    return Unit;
  }
  function Logging_0($receiver, block) {
    if (block === void 0) 
      block = Logging$lambda;
    $receiver.install_xlxg29$(Logging$Companion_getInstance(), block);
  }
  function Coroutine$readText($receiver_0, charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$charset = charset_0;
  }
  Coroutine$readText.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readText.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readText.prototype.constructor = Coroutine$readText;
  Coroutine$readText.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = readRemaining(this.local$$receiver, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return readText(this.result_0, this.local$charset);
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
  function readText_0($receiver_0, charset_0, continuation_0, suspended) {
    var instance = new Coroutine$readText($receiver_0, charset_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function get_DEFAULT($receiver) {
    return get_SIMPLE($receiver);
  }
  Object.defineProperty(LogLevel, 'ALL', {
  get: LogLevel$ALL_getInstance});
  Object.defineProperty(LogLevel, 'HEADERS', {
  get: LogLevel$HEADERS_getInstance});
  Object.defineProperty(LogLevel, 'BODY', {
  get: LogLevel$BODY_getInstance});
  Object.defineProperty(LogLevel, 'INFO', {
  get: LogLevel$INFO_getInstance});
  Object.defineProperty(LogLevel, 'NONE', {
  get: LogLevel$NONE_getInstance});
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$features = package$client.features || (package$client.features = {});
  var package$logging = package$features.logging || (package$features.logging = {});
  package$logging.LogLevel = LogLevel;
  Object.defineProperty(Logger, 'Companion', {
  get: Logger$Companion_getInstance});
  package$logging.Logger = Logger;
  package$logging.get_SIMPLE_3z44iy$ = get_SIMPLE;
  package$logging.get_EMPTY_3z44iy$ = get_EMPTY;
  Logging.Config = Logging$Config;
  $$importsForInline$$['kotlinx-io'] = $module$kotlinx_io;
  $$importsForInline$$['ktor-ktor-client-logging'] = _;
  Object.defineProperty(Logging, 'Companion', {
  get: Logging$Companion_getInstance});
  package$logging.Logging = Logging;
  package$logging.Logging_erekmq$ = Logging_0;
  package$logging.get_DEFAULT_3z44iy$ = get_DEFAULT;
  Logging$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  Kotlin.defineModule('ktor-ktor-client-logging', _);
  return _;
}));
