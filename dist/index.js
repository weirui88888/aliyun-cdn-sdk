require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 254:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"@alicloud/credentials@^2","_id":"@alicloud/credentials@2.2.3","_inBundle":false,"_integrity":"sha512-h98BZimKCQ5xKiFCdWa2OMYaenEP6g5Fndm/l0zp8iuYWOShnvEwBPFmHyHmwpb60KwEJp0LILl1WiBTS+5a1w==","_location":"/@alicloud/credentials","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@alicloud/credentials@^2","name":"@alicloud/credentials","escapedName":"@alicloud%2fcredentials","scope":"@alicloud","rawSpec":"^2","saveSpec":null,"fetchSpec":"^2"},"_requiredBy":["/@alicloud/gateway-spi","/@alicloud/openapi-client"],"_resolved":"https://nexus.bybutter.com/repository/npm-group/@alicloud/credentials/-/credentials-2.2.3.tgz","_shasum":"6c479082e3f627311e2537c0552e3e87a8ecd671","_spec":"@alicloud/credentials@^2","_where":"/Users/weirui05/Desktop/2022/aliyun-cdn-api/node_modules/@alicloud/openapi-client","author":{"name":"Alibaba Cloud SDK"},"bugs":{"url":"https://github.com/aliyun/nodejs-credentials/issues"},"bundleDependencies":false,"dependencies":{"@alicloud/tea-typescript":"^1.5.3","httpx":"^2.2.0","ini":"^1.3.5","kitx":"^2.0.0"},"deprecated":false,"description":"alibaba cloud node.js sdk credentials","devDependencies":{"@types/expect.js":"^0.3.29","@types/ini":"^1.3.30","@types/mocha":"^7.0.1","@types/rewire":"^2.5.28","@typescript-eslint/eslint-plugin":"^4.31.2","@typescript-eslint/parser":"^4.31.2","codecov":"^3.1.0","eslint":"^7.32.0","expect.js":"^0.3.1","mm":"^2.4.1","mocha":"^5.2.0","nyc":"^13.1.0","rewire":"^4.0.1","ts-node":"^8.6.2","typescript":"^3.7.5"},"files":["src","dist"],"homepage":"https://github.com/aliyun/nodejs-credentials#readme","keywords":["alibaba cloud","sdk","credentials"],"license":"MIT","main":"dist/client.js","name":"@alicloud/credentials","repository":{"type":"git","url":"git+https://github.com/aliyun/nodejs-credentials.git"},"scripts":{"build":"tsc","ci":"npm run cov && codecov","clean":"rm -rf coverage","cov":"nyc -e .ts -r=html -r=text -r=lcov npm run test","lint":"eslint --fix ./src --ext .ts","prepublishOnly":"tsc","test":"mocha -b -r ts-node/register test/**/*.test.ts --timeout 15000","test-integration":"mocha -b -r ts-node/register -R spec test/*.integration.ts"},"version":"2.2.3"}');

/***/ }),

/***/ 1565:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const $OpenApi = __importStar(__nccwpck_require__(6642));
const cdn20180510_1 = __importStar(__nccwpck_require__(3121)), $Cdn = cdn20180510_1;
const tea_util_1 = __importStar(__nccwpck_require__(1979)), $Util = tea_util_1;
const core = __importStar(__nccwpck_require__(2186));
const chalk_1 = __importDefault(__nccwpck_require__(7777));
const log = console.log;
const logger = (message, origin) => {
    log(chalk_1.default.white.bgRed.bold(`------${message} log start ------`));
    log(origin);
    log(chalk_1.default.white.bgRed.bold(`------${message} log end ------`));
};
class Client {
    static createCdnClient(accessKeyId, accessKeySecret) {
        const config = new $OpenApi.Config({
            accessKeyId,
            accessKeySecret
        });
        config.endpoint = 'cdn.aliyuncs.com';
        return new cdn20180510_1.default(config);
    }
    static Sdk(accessKeyId, accessKeySecret, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            logger('view parameters', `you use this action with parameters:${parameters}`);
            const client = Client.createCdnClient(accessKeyId, accessKeySecret);
            let _a = JSON.parse(parameters), { action, runtimeOptions } = _a, requestOptions = __rest(_a, ["action", "runtimeOptions"]);
            for (let [optionsKey, optionValue] of Object.entries(requestOptions)) {
                if (typeof optionValue === 'object') {
                    requestOptions[optionsKey] = tea_util_1.default.toJSONString(requestOptions.functions);
                }
            }
            const runtime = !!runtimeOptions
                ? new $Util.RuntimeOptions(runtimeOptions)
                : new $Util.RuntimeOptions({});
            let RequestActionName = `${action}Request`;
            let ActionName = action.replace(action[0], action[0].toLowerCase());
            let CdnSdkApiName = `${ActionName}WithOptions`;
            logger('view sdk api name', `you use this action will call sdk api name:${CdnSdkApiName} by your input`);
            logger('view cdn open api name', `your open api name is ${action}, you can find more message and support in https://help.aliyun.com/document_detail/106661.html`);
            try {
                const options = new $Cdn[RequestActionName](requestOptions);
                const response = yield client[CdnSdkApiName](options, runtime);
                logger('view your sdk api response', response);
                return response;
            }
            catch (error) {
                // @ts-ignore
                tea_util_1.default.assertAsString(error.message);
                // @ts-ignore
                core.setFailed(error.message);
            }
        });
    }
}
exports.default = Client;


/***/ }),

/***/ 3109:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const client_1 = __importDefault(__nccwpck_require__(1565));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accessKeyId = core.getInput('accessKeyId');
            const accessKeySecret = core.getInput('accessKeySecret');
            const parameters = core.getInput('parameters');
            const response = yield client_1.default.Sdk(accessKeyId, accessKeySecret, parameters);
            core.setOutput('responseBody', response.body);
        }
        catch (error) {
            if (error instanceof Error)
                core.setFailed(error.message);
        }
    });
}
run();


/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
const oidc_utils_1 = __nccwpck_require__(8041);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(2981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 8041:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(6255);
const auth_1 = __nccwpck_require__(5526);
const core_1 = __nccwpck_require__(2186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 2981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(5622));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 1327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(2087);
const fs_1 = __nccwpck_require__(5747);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 5526:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 6255:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(8605));
const https = __importStar(__nccwpck_require__(7211));
const pm = __importStar(__nccwpck_require__(9835));
const tunnel = __importStar(__nccwpck_require__(4294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 3121:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// This file is auto-generated, don't edit it
/**
 *
 */
const tea_util_1 = __importStar(__nccwpck_require__(1979)), $Util = tea_util_1;
const openapi_client_1 = __importStar(__nccwpck_require__(6642)), $OpenApi = openapi_client_1;
const openapi_util_1 = __importDefault(__nccwpck_require__(8190));
const endpoint_util_1 = __importDefault(__nccwpck_require__(2306));
const $tea = __importStar(__nccwpck_require__(4165));
class AddCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnType: 'CdnType',
            checkUrl: 'CheckUrl',
            domainName: 'DomainName',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            resourceGroupId: 'ResourceGroupId',
            scope: 'Scope',
            securityToken: 'SecurityToken',
            sources: 'Sources',
            topLevelDomain: 'TopLevelDomain',
        };
    }
    static types() {
        return {
            cdnType: 'string',
            checkUrl: 'string',
            domainName: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            resourceGroupId: 'string',
            scope: 'string',
            securityToken: 'string',
            sources: 'string',
            topLevelDomain: 'string',
        };
    }
}
exports.AddCdnDomainRequest = AddCdnDomainRequest;
class AddCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.AddCdnDomainResponseBody = AddCdnDomainResponseBody;
class AddCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: AddCdnDomainResponseBody,
        };
    }
}
exports.AddCdnDomainResponse = AddCdnDomainResponse;
class AddFCTriggerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            eventMetaName: 'EventMetaName',
            eventMetaVersion: 'EventMetaVersion',
            functionARN: 'FunctionARN',
            notes: 'Notes',
            ownerId: 'OwnerId',
            roleARN: 'RoleARN',
            sourceARN: 'SourceARN',
            triggerARN: 'TriggerARN',
        };
    }
    static types() {
        return {
            eventMetaName: 'string',
            eventMetaVersion: 'string',
            functionARN: 'string',
            notes: 'string',
            ownerId: 'number',
            roleARN: 'string',
            sourceARN: 'string',
            triggerARN: 'string',
        };
    }
}
exports.AddFCTriggerRequest = AddFCTriggerRequest;
class AddFCTriggerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.AddFCTriggerResponseBody = AddFCTriggerResponseBody;
class AddFCTriggerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: AddFCTriggerResponseBody,
        };
    }
}
exports.AddFCTriggerResponse = AddFCTriggerResponse;
class BatchAddCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnType: 'CdnType',
            checkUrl: 'CheckUrl',
            domainName: 'DomainName',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            resourceGroupId: 'ResourceGroupId',
            scope: 'Scope',
            securityToken: 'SecurityToken',
            sources: 'Sources',
            topLevelDomain: 'TopLevelDomain',
        };
    }
    static types() {
        return {
            cdnType: 'string',
            checkUrl: 'string',
            domainName: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            resourceGroupId: 'string',
            scope: 'string',
            securityToken: 'string',
            sources: 'string',
            topLevelDomain: 'string',
        };
    }
}
exports.BatchAddCdnDomainRequest = BatchAddCdnDomainRequest;
class BatchAddCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.BatchAddCdnDomainResponseBody = BatchAddCdnDomainResponseBody;
class BatchAddCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: BatchAddCdnDomainResponseBody,
        };
    }
}
exports.BatchAddCdnDomainResponse = BatchAddCdnDomainResponse;
class BatchDeleteCdnDomainConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainNames: 'DomainNames',
            functionNames: 'FunctionNames',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainNames: 'string',
            functionNames: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.BatchDeleteCdnDomainConfigRequest = BatchDeleteCdnDomainConfigRequest;
class BatchDeleteCdnDomainConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.BatchDeleteCdnDomainConfigResponseBody = BatchDeleteCdnDomainConfigResponseBody;
class BatchDeleteCdnDomainConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: BatchDeleteCdnDomainConfigResponseBody,
        };
    }
}
exports.BatchDeleteCdnDomainConfigResponse = BatchDeleteCdnDomainConfigResponse;
class BatchSetCdnDomainConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainNames: 'DomainNames',
            functions: 'Functions',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainNames: 'string',
            functions: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.BatchSetCdnDomainConfigRequest = BatchSetCdnDomainConfigRequest;
class BatchSetCdnDomainConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainConfigList: 'DomainConfigList',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            domainConfigList: BatchSetCdnDomainConfigResponseBodyDomainConfigList,
            requestId: 'string',
        };
    }
}
exports.BatchSetCdnDomainConfigResponseBody = BatchSetCdnDomainConfigResponseBody;
class BatchSetCdnDomainConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: BatchSetCdnDomainConfigResponseBody,
        };
    }
}
exports.BatchSetCdnDomainConfigResponse = BatchSetCdnDomainConfigResponse;
class BatchSetCdnDomainServerCertificateRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certName: 'CertName',
            certType: 'CertType',
            domainName: 'DomainName',
            forceSet: 'ForceSet',
            ownerId: 'OwnerId',
            region: 'Region',
            SSLPri: 'SSLPri',
            SSLProtocol: 'SSLProtocol',
            SSLPub: 'SSLPub',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            certName: 'string',
            certType: 'string',
            domainName: 'string',
            forceSet: 'string',
            ownerId: 'number',
            region: 'string',
            SSLPri: 'string',
            SSLProtocol: 'string',
            SSLPub: 'string',
            securityToken: 'string',
        };
    }
}
exports.BatchSetCdnDomainServerCertificateRequest = BatchSetCdnDomainServerCertificateRequest;
class BatchSetCdnDomainServerCertificateResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.BatchSetCdnDomainServerCertificateResponseBody = BatchSetCdnDomainServerCertificateResponseBody;
class BatchSetCdnDomainServerCertificateResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: BatchSetCdnDomainServerCertificateResponseBody,
        };
    }
}
exports.BatchSetCdnDomainServerCertificateResponse = BatchSetCdnDomainServerCertificateResponse;
class BatchStartCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainNames: 'DomainNames',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainNames: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.BatchStartCdnDomainRequest = BatchStartCdnDomainRequest;
class BatchStartCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.BatchStartCdnDomainResponseBody = BatchStartCdnDomainResponseBody;
class BatchStartCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: BatchStartCdnDomainResponseBody,
        };
    }
}
exports.BatchStartCdnDomainResponse = BatchStartCdnDomainResponse;
class BatchStopCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainNames: 'DomainNames',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainNames: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.BatchStopCdnDomainRequest = BatchStopCdnDomainRequest;
class BatchStopCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.BatchStopCdnDomainResponseBody = BatchStopCdnDomainResponseBody;
class BatchStopCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: BatchStopCdnDomainResponseBody,
        };
    }
}
exports.BatchStopCdnDomainResponse = BatchStopCdnDomainResponse;
class BatchUpdateCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            resourceGroupId: 'ResourceGroupId',
            securityToken: 'SecurityToken',
            sources: 'Sources',
            topLevelDomain: 'TopLevelDomain',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            resourceGroupId: 'string',
            securityToken: 'string',
            sources: 'string',
            topLevelDomain: 'string',
        };
    }
}
exports.BatchUpdateCdnDomainRequest = BatchUpdateCdnDomainRequest;
class BatchUpdateCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.BatchUpdateCdnDomainResponseBody = BatchUpdateCdnDomainResponseBody;
class BatchUpdateCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: BatchUpdateCdnDomainResponseBody,
        };
    }
}
exports.BatchUpdateCdnDomainResponse = BatchUpdateCdnDomainResponse;
class CreateCdnCertificateSigningRequestRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            city: 'City',
            commonName: 'CommonName',
            country: 'Country',
            email: 'Email',
            organization: 'Organization',
            organizationUnit: 'OrganizationUnit',
            ownerId: 'OwnerId',
            SANs: 'SANs',
            state: 'State',
        };
    }
    static types() {
        return {
            city: 'string',
            commonName: 'string',
            country: 'string',
            email: 'string',
            organization: 'string',
            organizationUnit: 'string',
            ownerId: 'number',
            SANs: 'string',
            state: 'string',
        };
    }
}
exports.CreateCdnCertificateSigningRequestRequest = CreateCdnCertificateSigningRequestRequest;
class CreateCdnCertificateSigningRequestResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            commonName: 'CommonName',
            csr: 'Csr',
            pubMd5: 'PubMd5',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            commonName: 'string',
            csr: 'string',
            pubMd5: 'string',
            requestId: 'string',
        };
    }
}
exports.CreateCdnCertificateSigningRequestResponseBody = CreateCdnCertificateSigningRequestResponseBody;
class CreateCdnCertificateSigningRequestResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: CreateCdnCertificateSigningRequestResponseBody,
        };
    }
}
exports.CreateCdnCertificateSigningRequestResponse = CreateCdnCertificateSigningRequestResponse;
class CreateCdnDeliverTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            deliver: 'Deliver',
            domainName: 'DomainName',
            name: 'Name',
            ownerId: 'OwnerId',
            reports: 'Reports',
            schedule: 'Schedule',
        };
    }
    static types() {
        return {
            deliver: 'string',
            domainName: 'string',
            name: 'string',
            ownerId: 'number',
            reports: 'string',
            schedule: 'string',
        };
    }
}
exports.CreateCdnDeliverTaskRequest = CreateCdnDeliverTaskRequest;
class CreateCdnDeliverTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            deliverId: 'DeliverId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            deliverId: 'string',
            requestId: 'string',
        };
    }
}
exports.CreateCdnDeliverTaskResponseBody = CreateCdnDeliverTaskResponseBody;
class CreateCdnDeliverTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: CreateCdnDeliverTaskResponseBody,
        };
    }
}
exports.CreateCdnDeliverTaskResponse = CreateCdnDeliverTaskResponse;
class CreateCdnSubTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            reportIds: 'ReportIds',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            reportIds: 'string',
        };
    }
}
exports.CreateCdnSubTaskRequest = CreateCdnSubTaskRequest;
class CreateCdnSubTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.CreateCdnSubTaskResponseBody = CreateCdnSubTaskResponseBody;
class CreateCdnSubTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: CreateCdnSubTaskResponseBody,
        };
    }
}
exports.CreateCdnSubTaskResponse = CreateCdnSubTaskResponse;
class CreateIllegalUrlExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            taskName: 'TaskName',
            timePoint: 'TimePoint',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            taskName: 'string',
            timePoint: 'string',
        };
    }
}
exports.CreateIllegalUrlExportTaskRequest = CreateIllegalUrlExportTaskRequest;
class CreateIllegalUrlExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            requestId: 'string',
            taskId: 'string',
        };
    }
}
exports.CreateIllegalUrlExportTaskResponseBody = CreateIllegalUrlExportTaskResponseBody;
class CreateIllegalUrlExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: CreateIllegalUrlExportTaskResponseBody,
        };
    }
}
exports.CreateIllegalUrlExportTaskResponse = CreateIllegalUrlExportTaskResponse;
class CreateRealTimeLogDeliveryRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
            logstore: 'Logstore',
            ownerId: 'OwnerId',
            project: 'Project',
            region: 'Region',
        };
    }
    static types() {
        return {
            domain: 'string',
            logstore: 'string',
            ownerId: 'number',
            project: 'string',
            region: 'string',
        };
    }
}
exports.CreateRealTimeLogDeliveryRequest = CreateRealTimeLogDeliveryRequest;
class CreateRealTimeLogDeliveryResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.CreateRealTimeLogDeliveryResponseBody = CreateRealTimeLogDeliveryResponseBody;
class CreateRealTimeLogDeliveryResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: CreateRealTimeLogDeliveryResponseBody,
        };
    }
}
exports.CreateRealTimeLogDeliveryResponse = CreateRealTimeLogDeliveryResponse;
class CreateUsageDetailDataExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainNames: 'DomainNames',
            endTime: 'EndTime',
            group: 'Group',
            language: 'Language',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
            taskName: 'TaskName',
            type: 'Type',
        };
    }
    static types() {
        return {
            domainNames: 'string',
            endTime: 'string',
            group: 'string',
            language: 'string',
            ownerId: 'number',
            startTime: 'string',
            taskName: 'string',
            type: 'string',
        };
    }
}
exports.CreateUsageDetailDataExportTaskRequest = CreateUsageDetailDataExportTaskRequest;
class CreateUsageDetailDataExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            taskId: 'string',
        };
    }
}
exports.CreateUsageDetailDataExportTaskResponseBody = CreateUsageDetailDataExportTaskResponseBody;
class CreateUsageDetailDataExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: CreateUsageDetailDataExportTaskResponseBody,
        };
    }
}
exports.CreateUsageDetailDataExportTaskResponse = CreateUsageDetailDataExportTaskResponse;
class CreateUserUsageDataExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            language: 'Language',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
            taskName: 'TaskName',
        };
    }
    static types() {
        return {
            endTime: 'string',
            language: 'string',
            ownerId: 'number',
            startTime: 'string',
            taskName: 'string',
        };
    }
}
exports.CreateUserUsageDataExportTaskRequest = CreateUserUsageDataExportTaskRequest;
class CreateUserUsageDataExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            taskId: 'string',
        };
    }
}
exports.CreateUserUsageDataExportTaskResponseBody = CreateUserUsageDataExportTaskResponseBody;
class CreateUserUsageDataExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: CreateUserUsageDataExportTaskResponseBody,
        };
    }
}
exports.CreateUserUsageDataExportTaskResponse = CreateUserUsageDataExportTaskResponse;
class DeleteCdnDeliverTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            deliverId: 'DeliverId',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            deliverId: 'number',
            ownerId: 'number',
        };
    }
}
exports.DeleteCdnDeliverTaskRequest = DeleteCdnDeliverTaskRequest;
class DeleteCdnDeliverTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteCdnDeliverTaskResponseBody = DeleteCdnDeliverTaskResponseBody;
class DeleteCdnDeliverTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteCdnDeliverTaskResponseBody,
        };
    }
}
exports.DeleteCdnDeliverTaskResponse = DeleteCdnDeliverTaskResponse;
class DeleteCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DeleteCdnDomainRequest = DeleteCdnDomainRequest;
class DeleteCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteCdnDomainResponseBody = DeleteCdnDomainResponseBody;
class DeleteCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteCdnDomainResponseBody,
        };
    }
}
exports.DeleteCdnDomainResponse = DeleteCdnDomainResponse;
class DeleteCdnSubTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
        };
    }
}
exports.DeleteCdnSubTaskRequest = DeleteCdnSubTaskRequest;
class DeleteCdnSubTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteCdnSubTaskResponseBody = DeleteCdnSubTaskResponseBody;
class DeleteCdnSubTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteCdnSubTaskResponseBody,
        };
    }
}
exports.DeleteCdnSubTaskResponse = DeleteCdnSubTaskResponse;
class DeleteFCTriggerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            triggerARN: 'TriggerARN',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            triggerARN: 'string',
        };
    }
}
exports.DeleteFCTriggerRequest = DeleteFCTriggerRequest;
class DeleteFCTriggerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteFCTriggerResponseBody = DeleteFCTriggerResponseBody;
class DeleteFCTriggerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteFCTriggerResponseBody,
        };
    }
}
exports.DeleteFCTriggerResponse = DeleteFCTriggerResponse;
class DeleteRealtimeLogDeliveryRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
            logstore: 'Logstore',
            ownerId: 'OwnerId',
            project: 'Project',
            region: 'Region',
        };
    }
    static types() {
        return {
            domain: 'string',
            logstore: 'string',
            ownerId: 'number',
            project: 'string',
            region: 'string',
        };
    }
}
exports.DeleteRealtimeLogDeliveryRequest = DeleteRealtimeLogDeliveryRequest;
class DeleteRealtimeLogDeliveryResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteRealtimeLogDeliveryResponseBody = DeleteRealtimeLogDeliveryResponseBody;
class DeleteRealtimeLogDeliveryResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteRealtimeLogDeliveryResponseBody,
        };
    }
}
exports.DeleteRealtimeLogDeliveryResponse = DeleteRealtimeLogDeliveryResponse;
class DeleteSpecificConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            configId: 'string',
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DeleteSpecificConfigRequest = DeleteSpecificConfigRequest;
class DeleteSpecificConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteSpecificConfigResponseBody = DeleteSpecificConfigResponseBody;
class DeleteSpecificConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteSpecificConfigResponseBody,
        };
    }
}
exports.DeleteSpecificConfigResponse = DeleteSpecificConfigResponse;
class DeleteSpecificStagingConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            configId: 'string',
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DeleteSpecificStagingConfigRequest = DeleteSpecificStagingConfigRequest;
class DeleteSpecificStagingConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteSpecificStagingConfigResponseBody = DeleteSpecificStagingConfigResponseBody;
class DeleteSpecificStagingConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteSpecificStagingConfigResponseBody,
        };
    }
}
exports.DeleteSpecificStagingConfigResponse = DeleteSpecificStagingConfigResponse;
class DeleteUsageDetailDataExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            taskId: 'string',
        };
    }
}
exports.DeleteUsageDetailDataExportTaskRequest = DeleteUsageDetailDataExportTaskRequest;
class DeleteUsageDetailDataExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteUsageDetailDataExportTaskResponseBody = DeleteUsageDetailDataExportTaskResponseBody;
class DeleteUsageDetailDataExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteUsageDetailDataExportTaskResponseBody,
        };
    }
}
exports.DeleteUsageDetailDataExportTaskResponse = DeleteUsageDetailDataExportTaskResponse;
class DeleteUserUsageDataExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            taskId: 'string',
        };
    }
}
exports.DeleteUserUsageDataExportTaskRequest = DeleteUserUsageDataExportTaskRequest;
class DeleteUserUsageDataExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DeleteUserUsageDataExportTaskResponseBody = DeleteUserUsageDataExportTaskResponseBody;
class DeleteUserUsageDataExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DeleteUserUsageDataExportTaskResponseBody,
        };
    }
}
exports.DeleteUserUsageDataExportTaskResponse = DeleteUserUsageDataExportTaskResponse;
class DescribeActiveVersionOfConfigGroupRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configGroupId: 'ConfigGroupId',
            env: 'Env',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            configGroupId: 'string',
            env: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeActiveVersionOfConfigGroupRequest = DescribeActiveVersionOfConfigGroupRequest;
class DescribeActiveVersionOfConfigGroupResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            baseVersionId: 'BaseVersionId',
            configGroupId: 'ConfigGroupId',
            createTime: 'CreateTime',
            description: 'Description',
            operator: 'Operator',
            requestId: 'RequestId',
            seqId: 'SeqId',
            status: 'Status',
            updateTime: 'UpdateTime',
            versionId: 'VersionId',
        };
    }
    static types() {
        return {
            baseVersionId: 'string',
            configGroupId: 'string',
            createTime: 'string',
            description: 'string',
            operator: 'string',
            requestId: 'string',
            seqId: 'number',
            status: 'string',
            updateTime: 'string',
            versionId: 'string',
        };
    }
}
exports.DescribeActiveVersionOfConfigGroupResponseBody = DescribeActiveVersionOfConfigGroupResponseBody;
class DescribeActiveVersionOfConfigGroupResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeActiveVersionOfConfigGroupResponseBody,
        };
    }
}
exports.DescribeActiveVersionOfConfigGroupResponse = DescribeActiveVersionOfConfigGroupResponse;
class DescribeBlockedRegionsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            language: 'Language',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            language: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeBlockedRegionsRequest = DescribeBlockedRegionsRequest;
class DescribeBlockedRegionsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            infoList: 'InfoList',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            infoList: DescribeBlockedRegionsResponseBodyInfoList,
            requestId: 'string',
        };
    }
}
exports.DescribeBlockedRegionsResponseBody = DescribeBlockedRegionsResponseBody;
class DescribeBlockedRegionsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeBlockedRegionsResponseBody,
        };
    }
}
exports.DescribeBlockedRegionsResponse = DescribeBlockedRegionsResponse;
class DescribeCdnCertificateDetailRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certName: 'CertName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            certName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnCertificateDetailRequest = DescribeCdnCertificateDetailRequest;
class DescribeCdnCertificateDetailResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cert: 'Cert',
            certId: 'CertId',
            certName: 'CertName',
            key: 'Key',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            cert: 'string',
            certId: 'number',
            certName: 'string',
            key: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeCdnCertificateDetailResponseBody = DescribeCdnCertificateDetailResponseBody;
class DescribeCdnCertificateDetailResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnCertificateDetailResponseBody,
        };
    }
}
exports.DescribeCdnCertificateDetailResponse = DescribeCdnCertificateDetailResponse;
class DescribeCdnCertificateListRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnCertificateListRequest = DescribeCdnCertificateListRequest;
class DescribeCdnCertificateListResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certificateListModel: 'CertificateListModel',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            certificateListModel: DescribeCdnCertificateListResponseBodyCertificateListModel,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnCertificateListResponseBody = DescribeCdnCertificateListResponseBody;
class DescribeCdnCertificateListResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnCertificateListResponseBody,
        };
    }
}
exports.DescribeCdnCertificateListResponse = DescribeCdnCertificateListResponse;
class DescribeCdnDeletedDomainsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
        };
    }
}
exports.DescribeCdnDeletedDomainsRequest = DescribeCdnDeletedDomainsRequest;
class DescribeCdnDeletedDomainsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domains: 'Domains',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            domains: DescribeCdnDeletedDomainsResponseBodyDomains,
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
}
exports.DescribeCdnDeletedDomainsResponseBody = DescribeCdnDeletedDomainsResponseBody;
class DescribeCdnDeletedDomainsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnDeletedDomainsResponseBody,
        };
    }
}
exports.DescribeCdnDeletedDomainsResponse = DescribeCdnDeletedDomainsResponse;
class DescribeCdnDeliverListRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            deliverId: 'DeliverId',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            deliverId: 'number',
            ownerId: 'number',
        };
    }
}
exports.DescribeCdnDeliverListRequest = DescribeCdnDeliverListRequest;
class DescribeCdnDeliverListResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeCdnDeliverListResponseBody = DescribeCdnDeliverListResponseBody;
class DescribeCdnDeliverListResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnDeliverListResponseBody,
        };
    }
}
exports.DescribeCdnDeliverListResponse = DescribeCdnDeliverListResponse;
class DescribeCdnDomainByCertificateRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            SSLPub: 'SSLPub',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            SSLPub: 'string',
        };
    }
}
exports.DescribeCdnDomainByCertificateRequest = DescribeCdnDomainByCertificateRequest;
class DescribeCdnDomainByCertificateResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfos: 'CertInfos',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            certInfos: DescribeCdnDomainByCertificateResponseBodyCertInfos,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnDomainByCertificateResponseBody = DescribeCdnDomainByCertificateResponseBody;
class DescribeCdnDomainByCertificateResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnDomainByCertificateResponseBody,
        };
    }
}
exports.DescribeCdnDomainByCertificateResponse = DescribeCdnDomainByCertificateResponse;
class DescribeCdnDomainConfigsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            domainName: 'DomainName',
            functionNames: 'FunctionNames',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            configId: 'string',
            domainName: 'string',
            functionNames: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnDomainConfigsRequest = DescribeCdnDomainConfigsRequest;
class DescribeCdnDomainConfigsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainConfigs: 'DomainConfigs',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            domainConfigs: DescribeCdnDomainConfigsResponseBodyDomainConfigs,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnDomainConfigsResponseBody = DescribeCdnDomainConfigsResponseBody;
class DescribeCdnDomainConfigsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnDomainConfigsResponseBody,
        };
    }
}
exports.DescribeCdnDomainConfigsResponse = DescribeCdnDomainConfigsResponse;
class DescribeCdnDomainDetailRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnDomainDetailRequest = DescribeCdnDomainDetailRequest;
class DescribeCdnDomainDetailResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            getDomainDetailModel: 'GetDomainDetailModel',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            getDomainDetailModel: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnDomainDetailResponseBody = DescribeCdnDomainDetailResponseBody;
class DescribeCdnDomainDetailResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnDomainDetailResponseBody,
        };
    }
}
exports.DescribeCdnDomainDetailResponse = DescribeCdnDomainDetailResponse;
class DescribeCdnDomainLogsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnDomainLogsRequest = DescribeCdnDomainLogsRequest;
class DescribeCdnDomainLogsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainLogDetails: 'DomainLogDetails',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            domainLogDetails: DescribeCdnDomainLogsResponseBodyDomainLogDetails,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnDomainLogsResponseBody = DescribeCdnDomainLogsResponseBody;
class DescribeCdnDomainLogsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnDomainLogsResponseBody,
        };
    }
}
exports.DescribeCdnDomainLogsResponse = DescribeCdnDomainLogsResponse;
class DescribeCdnDomainStagingConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            functionNames: 'FunctionNames',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            functionNames: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeCdnDomainStagingConfigRequest = DescribeCdnDomainStagingConfigRequest;
class DescribeCdnDomainStagingConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainConfigs: 'DomainConfigs',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            domainConfigs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigs },
            requestId: 'string',
        };
    }
}
exports.DescribeCdnDomainStagingConfigResponseBody = DescribeCdnDomainStagingConfigResponseBody;
class DescribeCdnDomainStagingConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnDomainStagingConfigResponseBody,
        };
    }
}
exports.DescribeCdnDomainStagingConfigResponse = DescribeCdnDomainStagingConfigResponse;
class DescribeCdnHttpsDomainListRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            keyword: 'Keyword',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
        };
    }
    static types() {
        return {
            keyword: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
        };
    }
}
exports.DescribeCdnHttpsDomainListRequest = DescribeCdnHttpsDomainListRequest;
class DescribeCdnHttpsDomainListResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfos: 'CertInfos',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            certInfos: DescribeCdnHttpsDomainListResponseBodyCertInfos,
            requestId: 'string',
            totalCount: 'number',
        };
    }
}
exports.DescribeCdnHttpsDomainListResponseBody = DescribeCdnHttpsDomainListResponseBody;
class DescribeCdnHttpsDomainListResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnHttpsDomainListResponseBody,
        };
    }
}
exports.DescribeCdnHttpsDomainListResponse = DescribeCdnHttpsDomainListResponse;
class DescribeCdnOrderCommodityCodeRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            commodityCode: 'CommodityCode',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            commodityCode: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnOrderCommodityCodeRequest = DescribeCdnOrderCommodityCodeRequest;
class DescribeCdnOrderCommodityCodeResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            orderCommodityCode: 'OrderCommodityCode',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            orderCommodityCode: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeCdnOrderCommodityCodeResponseBody = DescribeCdnOrderCommodityCodeResponseBody;
class DescribeCdnOrderCommodityCodeResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnOrderCommodityCodeResponseBody,
        };
    }
}
exports.DescribeCdnOrderCommodityCodeResponse = DescribeCdnOrderCommodityCodeResponse;
class DescribeCdnRegionAndIspRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnRegionAndIspRequest = DescribeCdnRegionAndIspRequest;
class DescribeCdnRegionAndIspResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            isps: 'Isps',
            regions: 'Regions',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            isps: DescribeCdnRegionAndIspResponseBodyIsps,
            regions: DescribeCdnRegionAndIspResponseBodyRegions,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnRegionAndIspResponseBody = DescribeCdnRegionAndIspResponseBody;
class DescribeCdnRegionAndIspResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnRegionAndIspResponseBody,
        };
    }
}
exports.DescribeCdnRegionAndIspResponse = DescribeCdnRegionAndIspResponse;
class DescribeCdnReportRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            area: 'Area',
            domainName: 'DomainName',
            endTime: 'EndTime',
            httpCode: 'HttpCode',
            isOverseas: 'IsOverseas',
            ownerId: 'OwnerId',
            reportId: 'ReportId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            area: 'string',
            domainName: 'string',
            endTime: 'string',
            httpCode: 'string',
            isOverseas: 'string',
            ownerId: 'number',
            reportId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnReportRequest = DescribeCdnReportRequest;
class DescribeCdnReportResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeCdnReportResponseBody = DescribeCdnReportResponseBody;
class DescribeCdnReportResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnReportResponseBody,
        };
    }
}
exports.DescribeCdnReportResponse = DescribeCdnReportResponse;
class DescribeCdnReportListRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            reportId: 'ReportId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            reportId: 'number',
        };
    }
}
exports.DescribeCdnReportListRequest = DescribeCdnReportListRequest;
class DescribeCdnReportListResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeCdnReportListResponseBody = DescribeCdnReportListResponseBody;
class DescribeCdnReportListResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnReportListResponseBody,
        };
    }
}
exports.DescribeCdnReportListResponse = DescribeCdnReportListResponse;
class DescribeCdnSMCertificateDetailRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certIdentifier: 'CertIdentifier',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            certIdentifier: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnSMCertificateDetailRequest = DescribeCdnSMCertificateDetailRequest;
class DescribeCdnSMCertificateDetailResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certExpireTime: 'CertExpireTime',
            certIdentifier: 'CertIdentifier',
            certName: 'CertName',
            certOrg: 'CertOrg',
            commonName: 'CommonName',
            encryptCertificate: 'EncryptCertificate',
            requestId: 'RequestId',
            sans: 'Sans',
            signCertificate: 'SignCertificate',
        };
    }
    static types() {
        return {
            certExpireTime: 'string',
            certIdentifier: 'string',
            certName: 'string',
            certOrg: 'string',
            commonName: 'string',
            encryptCertificate: 'string',
            requestId: 'string',
            sans: 'string',
            signCertificate: 'string',
        };
    }
}
exports.DescribeCdnSMCertificateDetailResponseBody = DescribeCdnSMCertificateDetailResponseBody;
class DescribeCdnSMCertificateDetailResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnSMCertificateDetailResponseBody,
        };
    }
}
exports.DescribeCdnSMCertificateDetailResponse = DescribeCdnSMCertificateDetailResponse;
class DescribeCdnSMCertificateListRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnSMCertificateListRequest = DescribeCdnSMCertificateListRequest;
class DescribeCdnSMCertificateListResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certificateListModel: 'CertificateListModel',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            certificateListModel: DescribeCdnSMCertificateListResponseBodyCertificateListModel,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnSMCertificateListResponseBody = DescribeCdnSMCertificateListResponseBody;
class DescribeCdnSMCertificateListResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnSMCertificateListResponseBody,
        };
    }
}
exports.DescribeCdnSMCertificateListResponse = DescribeCdnSMCertificateListResponse;
class DescribeCdnServiceRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnServiceRequest = DescribeCdnServiceRequest;
class DescribeCdnServiceResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            changingAffectTime: 'ChangingAffectTime',
            changingChargeType: 'ChangingChargeType',
            instanceId: 'InstanceId',
            internetChargeType: 'InternetChargeType',
            openingTime: 'OpeningTime',
            operationLocks: 'OperationLocks',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            changingAffectTime: 'string',
            changingChargeType: 'string',
            instanceId: 'string',
            internetChargeType: 'string',
            openingTime: 'string',
            operationLocks: DescribeCdnServiceResponseBodyOperationLocks,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnServiceResponseBody = DescribeCdnServiceResponseBody;
class DescribeCdnServiceResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnServiceResponseBody,
        };
    }
}
exports.DescribeCdnServiceResponse = DescribeCdnServiceResponse;
class DescribeCdnSubListRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
        };
    }
}
exports.DescribeCdnSubListRequest = DescribeCdnSubListRequest;
class DescribeCdnSubListResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeCdnSubListResponseBody = DescribeCdnSubListResponseBody;
class DescribeCdnSubListResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnSubListResponseBody,
        };
    }
}
exports.DescribeCdnSubListResponse = DescribeCdnSubListResponse;
class DescribeCdnUserBillHistoryRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnUserBillHistoryRequest = DescribeCdnUserBillHistoryRequest;
class DescribeCdnUserBillHistoryResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billHistoryData: 'BillHistoryData',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            billHistoryData: DescribeCdnUserBillHistoryResponseBodyBillHistoryData,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnUserBillHistoryResponseBody = DescribeCdnUserBillHistoryResponseBody;
class DescribeCdnUserBillHistoryResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnUserBillHistoryResponseBody,
        };
    }
}
exports.DescribeCdnUserBillHistoryResponse = DescribeCdnUserBillHistoryResponse;
class DescribeCdnUserBillPredictionRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            area: 'Area',
            dimension: 'Dimension',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            area: 'string',
            dimension: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnUserBillPredictionRequest = DescribeCdnUserBillPredictionRequest;
class DescribeCdnUserBillPredictionResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billPredictionData: 'BillPredictionData',
            billType: 'BillType',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            billPredictionData: DescribeCdnUserBillPredictionResponseBodyBillPredictionData,
            billType: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnUserBillPredictionResponseBody = DescribeCdnUserBillPredictionResponseBody;
class DescribeCdnUserBillPredictionResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnUserBillPredictionResponseBody,
        };
    }
}
exports.DescribeCdnUserBillPredictionResponse = DescribeCdnUserBillPredictionResponse;
class DescribeCdnUserBillTypeRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnUserBillTypeRequest = DescribeCdnUserBillTypeRequest;
class DescribeCdnUserBillTypeResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billTypeData: 'BillTypeData',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            billTypeData: DescribeCdnUserBillTypeResponseBodyBillTypeData,
            requestId: 'string',
        };
    }
}
exports.DescribeCdnUserBillTypeResponseBody = DescribeCdnUserBillTypeResponseBody;
class DescribeCdnUserBillTypeResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnUserBillTypeResponseBody,
        };
    }
}
exports.DescribeCdnUserBillTypeResponse = DescribeCdnUserBillTypeResponse;
class DescribeCdnUserConfigsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            functionName: 'FunctionName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            functionName: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeCdnUserConfigsRequest = DescribeCdnUserConfigsRequest;
class DescribeCdnUserConfigsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configs: 'Configs',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            configs: { 'type': 'array', 'itemType': DescribeCdnUserConfigsResponseBodyConfigs },
            requestId: 'string',
        };
    }
}
exports.DescribeCdnUserConfigsResponseBody = DescribeCdnUserConfigsResponseBody;
class DescribeCdnUserConfigsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnUserConfigsResponseBody,
        };
    }
}
exports.DescribeCdnUserConfigsResponse = DescribeCdnUserConfigsResponse;
class DescribeCdnUserDomainsByFuncRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            funcId: 'FuncId',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            resourceGroupId: 'ResourceGroupId',
        };
    }
    static types() {
        return {
            funcId: 'number',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            resourceGroupId: 'string',
        };
    }
}
exports.DescribeCdnUserDomainsByFuncRequest = DescribeCdnUserDomainsByFuncRequest;
class DescribeCdnUserDomainsByFuncResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domains: 'Domains',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            domains: DescribeCdnUserDomainsByFuncResponseBodyDomains,
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
}
exports.DescribeCdnUserDomainsByFuncResponseBody = DescribeCdnUserDomainsByFuncResponseBody;
class DescribeCdnUserDomainsByFuncResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnUserDomainsByFuncResponseBody,
        };
    }
}
exports.DescribeCdnUserDomainsByFuncResponse = DescribeCdnUserDomainsByFuncResponse;
class DescribeCdnUserQuotaRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeCdnUserQuotaRequest = DescribeCdnUserQuotaRequest;
class DescribeCdnUserQuotaResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            blockQuota: 'BlockQuota',
            blockRemain: 'BlockRemain',
            domainQuota: 'DomainQuota',
            preloadQuota: 'PreloadQuota',
            preloadRemain: 'PreloadRemain',
            refreshDirQuota: 'RefreshDirQuota',
            refreshDirRemain: 'RefreshDirRemain',
            refreshUrlQuota: 'RefreshUrlQuota',
            refreshUrlRemain: 'RefreshUrlRemain',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            blockQuota: 'number',
            blockRemain: 'number',
            domainQuota: 'number',
            preloadQuota: 'number',
            preloadRemain: 'number',
            refreshDirQuota: 'number',
            refreshDirRemain: 'number',
            refreshUrlQuota: 'number',
            refreshUrlRemain: 'number',
            requestId: 'string',
        };
    }
}
exports.DescribeCdnUserQuotaResponseBody = DescribeCdnUserQuotaResponseBody;
class DescribeCdnUserQuotaResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnUserQuotaResponseBody,
        };
    }
}
exports.DescribeCdnUserQuotaResponse = DescribeCdnUserQuotaResponse;
class DescribeCdnUserResourcePackageRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
            status: 'Status',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            securityToken: 'string',
            status: 'string',
        };
    }
}
exports.DescribeCdnUserResourcePackageRequest = DescribeCdnUserResourcePackageRequest;
class DescribeCdnUserResourcePackageResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            resourcePackageInfos: 'ResourcePackageInfos',
        };
    }
    static types() {
        return {
            requestId: 'string',
            resourcePackageInfos: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos,
        };
    }
}
exports.DescribeCdnUserResourcePackageResponseBody = DescribeCdnUserResourcePackageResponseBody;
class DescribeCdnUserResourcePackageResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnUserResourcePackageResponseBody,
        };
    }
}
exports.DescribeCdnUserResourcePackageResponse = DescribeCdnUserResourcePackageResponse;
class DescribeCdnWafDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            regionId: 'string',
            resourceGroupId: 'string',
        };
    }
}
exports.DescribeCdnWafDomainRequest = DescribeCdnWafDomainRequest;
class DescribeCdnWafDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            outPutDomains: 'OutPutDomains',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            outPutDomains: { 'type': 'array', 'itemType': DescribeCdnWafDomainResponseBodyOutPutDomains },
            requestId: 'string',
            totalCount: 'number',
        };
    }
}
exports.DescribeCdnWafDomainResponseBody = DescribeCdnWafDomainResponseBody;
class DescribeCdnWafDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCdnWafDomainResponseBody,
        };
    }
}
exports.DescribeCdnWafDomainResponse = DescribeCdnWafDomainResponse;
class DescribeCertificateInfoByIDRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certId: 'CertId',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            certId: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeCertificateInfoByIDRequest = DescribeCertificateInfoByIDRequest;
class DescribeCertificateInfoByIDResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfos: 'CertInfos',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            certInfos: DescribeCertificateInfoByIDResponseBodyCertInfos,
            requestId: 'string',
        };
    }
}
exports.DescribeCertificateInfoByIDResponseBody = DescribeCertificateInfoByIDResponseBody;
class DescribeCertificateInfoByIDResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCertificateInfoByIDResponseBody,
        };
    }
}
exports.DescribeCertificateInfoByIDResponse = DescribeCertificateInfoByIDResponse;
class DescribeConfigGroupDetailRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configGroupId: 'ConfigGroupId',
            configGroupName: 'ConfigGroupName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            configGroupId: 'string',
            configGroupName: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeConfigGroupDetailRequest = DescribeConfigGroupDetailRequest;
class DescribeConfigGroupDetailResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bizName: 'BizName',
            configGroupId: 'ConfigGroupId',
            configGroupName: 'ConfigGroupName',
            createTime: 'CreateTime',
            description: 'Description',
            requestId: 'RequestId',
            updateTime: 'UpdateTime',
        };
    }
    static types() {
        return {
            bizName: 'string',
            configGroupId: 'string',
            configGroupName: 'string',
            createTime: 'string',
            description: 'string',
            requestId: 'string',
            updateTime: 'string',
        };
    }
}
exports.DescribeConfigGroupDetailResponseBody = DescribeConfigGroupDetailResponseBody;
class DescribeConfigGroupDetailResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeConfigGroupDetailResponseBody,
        };
    }
}
exports.DescribeConfigGroupDetailResponse = DescribeConfigGroupDetailResponse;
class DescribeConfigOfVersionRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            functionId: 'FunctionId',
            functionName: 'FunctionName',
            groupId: 'GroupId',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
            versionId: 'VersionId',
        };
    }
    static types() {
        return {
            functionId: 'number',
            functionName: 'string',
            groupId: 'number',
            ownerId: 'number',
            securityToken: 'string',
            versionId: 'string',
        };
    }
}
exports.DescribeConfigOfVersionRequest = DescribeConfigOfVersionRequest;
class DescribeConfigOfVersionResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            versionConfigs: 'VersionConfigs',
        };
    }
    static types() {
        return {
            requestId: 'string',
            versionConfigs: DescribeConfigOfVersionResponseBodyVersionConfigs,
        };
    }
}
exports.DescribeConfigOfVersionResponseBody = DescribeConfigOfVersionResponseBody;
class DescribeConfigOfVersionResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeConfigOfVersionResponseBody,
        };
    }
}
exports.DescribeConfigOfVersionResponse = DescribeConfigOfVersionResponse;
class DescribeCustomLogConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            configId: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeCustomLogConfigRequest = DescribeCustomLogConfigRequest;
class DescribeCustomLogConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            remark: 'Remark',
            requestId: 'RequestId',
            sample: 'Sample',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            remark: 'string',
            requestId: 'string',
            sample: 'string',
            tag: 'string',
        };
    }
}
exports.DescribeCustomLogConfigResponseBody = DescribeCustomLogConfigResponseBody;
class DescribeCustomLogConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeCustomLogConfigResponseBody,
        };
    }
}
exports.DescribeCustomLogConfigResponse = DescribeCustomLogConfigResponse;
class DescribeDomainAverageResponseTimeRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            domainType: 'DomainType',
            endTime: 'EndTime',
            interval: 'Interval',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
            timeMerge: 'TimeMerge',
        };
    }
    static types() {
        return {
            domainName: 'string',
            domainType: 'string',
            endTime: 'string',
            interval: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
            timeMerge: 'string',
        };
    }
}
exports.DescribeDomainAverageResponseTimeRequest = DescribeDomainAverageResponseTimeRequest;
class DescribeDomainAverageResponseTimeResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            avgRTPerInterval: 'AvgRTPerInterval',
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            avgRTPerInterval: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval,
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainAverageResponseTimeResponseBody = DescribeDomainAverageResponseTimeResponseBody;
class DescribeDomainAverageResponseTimeResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainAverageResponseTimeResponseBody,
        };
    }
}
exports.DescribeDomainAverageResponseTimeResponse = DescribeDomainAverageResponseTimeResponse;
class DescribeDomainBpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainBpsDataRequest = DescribeDomainBpsDataRequest;
class DescribeDomainBpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bpsDataPerInterval: 'BpsDataPerInterval',
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            bpsDataPerInterval: DescribeDomainBpsDataResponseBodyBpsDataPerInterval,
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainBpsDataResponseBody = DescribeDomainBpsDataResponseBody;
class DescribeDomainBpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainBpsDataResponseBody,
        };
    }
}
exports.DescribeDomainBpsDataResponse = DescribeDomainBpsDataResponse;
class DescribeDomainBpsDataByLayerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ispNameEn: 'IspNameEn',
            layer: 'Layer',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ispNameEn: 'string',
            layer: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainBpsDataByLayerRequest = DescribeDomainBpsDataByLayerRequest;
class DescribeDomainBpsDataByLayerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bpsDataInterval: 'BpsDataInterval',
            dataInterval: 'DataInterval',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            bpsDataInterval: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval,
            dataInterval: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeDomainBpsDataByLayerResponseBody = DescribeDomainBpsDataByLayerResponseBody;
class DescribeDomainBpsDataByLayerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainBpsDataByLayerResponseBody,
        };
    }
}
exports.DescribeDomainBpsDataByLayerResponse = DescribeDomainBpsDataByLayerResponse;
class DescribeDomainBpsDataByTimeStampRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ispNames: 'IspNames',
            locationNames: 'LocationNames',
            ownerId: 'OwnerId',
            timePoint: 'TimePoint',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ispNames: 'string',
            locationNames: 'string',
            ownerId: 'number',
            timePoint: 'string',
        };
    }
}
exports.DescribeDomainBpsDataByTimeStampRequest = DescribeDomainBpsDataByTimeStampRequest;
class DescribeDomainBpsDataByTimeStampResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bpsDataList: 'BpsDataList',
            domainName: 'DomainName',
            requestId: 'RequestId',
            timeStamp: 'TimeStamp',
        };
    }
    static types() {
        return {
            bpsDataList: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList,
            domainName: 'string',
            requestId: 'string',
            timeStamp: 'string',
        };
    }
}
exports.DescribeDomainBpsDataByTimeStampResponseBody = DescribeDomainBpsDataByTimeStampResponseBody;
class DescribeDomainBpsDataByTimeStampResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainBpsDataByTimeStampResponseBody,
        };
    }
}
exports.DescribeDomainBpsDataByTimeStampResponse = DescribeDomainBpsDataByTimeStampResponse;
class DescribeDomainCcActivityLogRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            ruleName: 'RuleName',
            startTime: 'StartTime',
            triggerObject: 'TriggerObject',
            value: 'Value',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            ruleName: 'string',
            startTime: 'string',
            triggerObject: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainCcActivityLogRequest = DescribeDomainCcActivityLogRequest;
class DescribeDomainCcActivityLogResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            activityLog: 'ActivityLog',
            pageIndex: 'PageIndex',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            total: 'Total',
        };
    }
    static types() {
        return {
            activityLog: { 'type': 'array', 'itemType': DescribeDomainCcActivityLogResponseBodyActivityLog },
            pageIndex: 'number',
            pageSize: 'number',
            requestId: 'string',
            total: 'number',
        };
    }
}
exports.DescribeDomainCcActivityLogResponseBody = DescribeDomainCcActivityLogResponseBody;
class DescribeDomainCcActivityLogResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainCcActivityLogResponseBody,
        };
    }
}
exports.DescribeDomainCcActivityLogResponse = DescribeDomainCcActivityLogResponse;
class DescribeDomainCertificateInfoRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeDomainCertificateInfoRequest = DescribeDomainCertificateInfoRequest;
class DescribeDomainCertificateInfoResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfos: 'CertInfos',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            certInfos: DescribeDomainCertificateInfoResponseBodyCertInfos,
            requestId: 'string',
        };
    }
}
exports.DescribeDomainCertificateInfoResponseBody = DescribeDomainCertificateInfoResponseBody;
class DescribeDomainCertificateInfoResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainCertificateInfoResponseBody,
        };
    }
}
exports.DescribeDomainCertificateInfoResponse = DescribeDomainCertificateInfoResponse;
class DescribeDomainCustomLogConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeDomainCustomLogConfigRequest = DescribeDomainCustomLogConfigRequest;
class DescribeDomainCustomLogConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            remark: 'Remark',
            requestId: 'RequestId',
            sample: 'Sample',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            configId: 'string',
            remark: 'string',
            requestId: 'string',
            sample: 'string',
            tag: 'string',
        };
    }
}
exports.DescribeDomainCustomLogConfigResponseBody = DescribeDomainCustomLogConfigResponseBody;
class DescribeDomainCustomLogConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainCustomLogConfigResponseBody,
        };
    }
}
exports.DescribeDomainCustomLogConfigResponse = DescribeDomainCustomLogConfigResponse;
class DescribeDomainDetailDataByLayerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            field: 'Field',
            ispNameEn: 'IspNameEn',
            layer: 'Layer',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            field: 'string',
            ispNameEn: 'string',
            layer: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainDetailDataByLayerRequest = DescribeDomainDetailDataByLayerRequest;
class DescribeDomainDetailDataByLayerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeDomainDetailDataByLayerResponseBodyData,
            requestId: 'string',
        };
    }
}
exports.DescribeDomainDetailDataByLayerResponseBody = DescribeDomainDetailDataByLayerResponseBody;
class DescribeDomainDetailDataByLayerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainDetailDataByLayerResponseBody,
        };
    }
}
exports.DescribeDomainDetailDataByLayerResponse = DescribeDomainDetailDataByLayerResponse;
class DescribeDomainFileSizeProportionDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            securityToken: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainFileSizeProportionDataRequest = DescribeDomainFileSizeProportionDataRequest;
class DescribeDomainFileSizeProportionDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            fileSizeProportionDataInterval: 'FileSizeProportionDataInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            fileSizeProportionDataInterval: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainFileSizeProportionDataResponseBody = DescribeDomainFileSizeProportionDataResponseBody;
class DescribeDomainFileSizeProportionDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainFileSizeProportionDataResponseBody,
        };
    }
}
exports.DescribeDomainFileSizeProportionDataResponse = DescribeDomainFileSizeProportionDataResponse;
class DescribeDomainHitRateDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainHitRateDataRequest = DescribeDomainHitRateDataRequest;
class DescribeDomainHitRateDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            hitRateInterval: 'HitRateInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            hitRateInterval: DescribeDomainHitRateDataResponseBodyHitRateInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainHitRateDataResponseBody = DescribeDomainHitRateDataResponseBody;
class DescribeDomainHitRateDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainHitRateDataResponseBody,
        };
    }
}
exports.DescribeDomainHitRateDataResponse = DescribeDomainHitRateDataResponse;
class DescribeDomainHttpCodeDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainHttpCodeDataRequest = DescribeDomainHttpCodeDataRequest;
class DescribeDomainHttpCodeDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            httpCodeData: 'HttpCodeData',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            httpCodeData: DescribeDomainHttpCodeDataResponseBodyHttpCodeData,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainHttpCodeDataResponseBody = DescribeDomainHttpCodeDataResponseBody;
class DescribeDomainHttpCodeDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainHttpCodeDataResponseBody,
        };
    }
}
exports.DescribeDomainHttpCodeDataResponse = DescribeDomainHttpCodeDataResponse;
class DescribeDomainHttpCodeDataByLayerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ispNameEn: 'IspNameEn',
            layer: 'Layer',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ispNameEn: 'string',
            layer: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainHttpCodeDataByLayerRequest = DescribeDomainHttpCodeDataByLayerRequest;
class DescribeDomainHttpCodeDataByLayerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            httpCodeDataInterval: 'HttpCodeDataInterval',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            httpCodeDataInterval: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval,
            requestId: 'string',
        };
    }
}
exports.DescribeDomainHttpCodeDataByLayerResponseBody = DescribeDomainHttpCodeDataByLayerResponseBody;
class DescribeDomainHttpCodeDataByLayerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainHttpCodeDataByLayerResponseBody,
        };
    }
}
exports.DescribeDomainHttpCodeDataByLayerResponse = DescribeDomainHttpCodeDataByLayerResponse;
class DescribeDomainISPDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainISPDataRequest = DescribeDomainISPDataRequest;
class DescribeDomainISPDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            value: 'Value',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            value: DescribeDomainISPDataResponseBodyValue,
        };
    }
}
exports.DescribeDomainISPDataResponseBody = DescribeDomainISPDataResponseBody;
class DescribeDomainISPDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainISPDataResponseBody,
        };
    }
}
exports.DescribeDomainISPDataResponse = DescribeDomainISPDataResponse;
class DescribeDomainMax95BpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cycle: 'Cycle',
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
            timePoint: 'TimePoint',
        };
    }
    static types() {
        return {
            cycle: 'string',
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
            timePoint: 'string',
        };
    }
}
exports.DescribeDomainMax95BpsDataRequest = DescribeDomainMax95BpsDataRequest;
class DescribeDomainMax95BpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            domesticMax95Bps: 'DomesticMax95Bps',
            endTime: 'EndTime',
            max95Bps: 'Max95Bps',
            overseasMax95Bps: 'OverseasMax95Bps',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            domesticMax95Bps: 'string',
            endTime: 'string',
            max95Bps: 'string',
            overseasMax95Bps: 'string',
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainMax95BpsDataResponseBody = DescribeDomainMax95BpsDataResponseBody;
class DescribeDomainMax95BpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainMax95BpsDataResponseBody,
        };
    }
}
exports.DescribeDomainMax95BpsDataResponse = DescribeDomainMax95BpsDataResponse;
class DescribeDomainMultiUsageDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainMultiUsageDataRequest = DescribeDomainMultiUsageDataRequest;
class DescribeDomainMultiUsageDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            requestId: 'RequestId',
            requestPerInterval: 'RequestPerInterval',
            startTime: 'StartTime',
            trafficPerInterval: 'TrafficPerInterval',
        };
    }
    static types() {
        return {
            endTime: 'string',
            requestId: 'string',
            requestPerInterval: DescribeDomainMultiUsageDataResponseBodyRequestPerInterval,
            startTime: 'string',
            trafficPerInterval: DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval,
        };
    }
}
exports.DescribeDomainMultiUsageDataResponseBody = DescribeDomainMultiUsageDataResponseBody;
class DescribeDomainMultiUsageDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainMultiUsageDataResponseBody,
        };
    }
}
exports.DescribeDomainMultiUsageDataResponse = DescribeDomainMultiUsageDataResponse;
class DescribeDomainNamesOfVersionRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            pageIndex: 'PageIndex',
            pageSize: 'PageSize',
            versionId: 'VersionId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            pageIndex: 'number',
            pageSize: 'string',
            versionId: 'string',
        };
    }
}
exports.DescribeDomainNamesOfVersionRequest = DescribeDomainNamesOfVersionRequest;
class DescribeDomainNamesOfVersionResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            contents: 'Contents',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            contents: { 'type': 'array', 'itemType': DescribeDomainNamesOfVersionResponseBodyContents },
            requestId: 'string',
            totalCount: 'number',
        };
    }
}
exports.DescribeDomainNamesOfVersionResponseBody = DescribeDomainNamesOfVersionResponseBody;
class DescribeDomainNamesOfVersionResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainNamesOfVersionResponseBody,
        };
    }
}
exports.DescribeDomainNamesOfVersionResponse = DescribeDomainNamesOfVersionResponse;
class DescribeDomainPathDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            path: 'Path',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            path: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainPathDataRequest = DescribeDomainPathDataRequest;
class DescribeDomainPathDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            pathDataPerInterval: 'PathDataPerInterval',
            startTime: 'StartTime',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            pageNumber: 'number',
            pageSize: 'number',
            pathDataPerInterval: DescribeDomainPathDataResponseBodyPathDataPerInterval,
            startTime: 'string',
            totalCount: 'number',
        };
    }
}
exports.DescribeDomainPathDataResponseBody = DescribeDomainPathDataResponseBody;
class DescribeDomainPathDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainPathDataResponseBody,
        };
    }
}
exports.DescribeDomainPathDataResponse = DescribeDomainPathDataResponse;
class DescribeDomainPvDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainPvDataRequest = DescribeDomainPvDataRequest;
class DescribeDomainPvDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            pvDataInterval: 'PvDataInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            pvDataInterval: DescribeDomainPvDataResponseBodyPvDataInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainPvDataResponseBody = DescribeDomainPvDataResponseBody;
class DescribeDomainPvDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainPvDataResponseBody,
        };
    }
}
exports.DescribeDomainPvDataResponse = DescribeDomainPvDataResponse;
class DescribeDomainQpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainQpsDataRequest = DescribeDomainQpsDataRequest;
class DescribeDomainQpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            qpsDataInterval: 'QpsDataInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            qpsDataInterval: DescribeDomainQpsDataResponseBodyQpsDataInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainQpsDataResponseBody = DescribeDomainQpsDataResponseBody;
class DescribeDomainQpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainQpsDataResponseBody,
        };
    }
}
exports.DescribeDomainQpsDataResponse = DescribeDomainQpsDataResponse;
class DescribeDomainQpsDataByLayerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ispNameEn: 'IspNameEn',
            layer: 'Layer',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ispNameEn: 'string',
            layer: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainQpsDataByLayerRequest = DescribeDomainQpsDataByLayerRequest;
class DescribeDomainQpsDataByLayerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            layer: 'Layer',
            qpsDataInterval: 'QpsDataInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            layer: 'string',
            qpsDataInterval: DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainQpsDataByLayerResponseBody = DescribeDomainQpsDataByLayerResponseBody;
class DescribeDomainQpsDataByLayerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainQpsDataByLayerResponseBody,
        };
    }
}
exports.DescribeDomainQpsDataByLayerResponse = DescribeDomainQpsDataByLayerResponse;
class DescribeDomainRealTimeBpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeBpsDataRequest = DescribeDomainRealTimeBpsDataRequest;
class DescribeDomainRealTimeBpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeDomainRealTimeBpsDataResponseBodyData,
            requestId: 'string',
        };
    }
}
exports.DescribeDomainRealTimeBpsDataResponseBody = DescribeDomainRealTimeBpsDataResponseBody;
class DescribeDomainRealTimeBpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeBpsDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeBpsDataResponse = DescribeDomainRealTimeBpsDataResponse;
class DescribeDomainRealTimeByteHitRateDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeByteHitRateDataRequest = DescribeDomainRealTimeByteHitRateDataRequest;
class DescribeDomainRealTimeByteHitRateDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeDomainRealTimeByteHitRateDataResponseBodyData,
            requestId: 'string',
        };
    }
}
exports.DescribeDomainRealTimeByteHitRateDataResponseBody = DescribeDomainRealTimeByteHitRateDataResponseBody;
class DescribeDomainRealTimeByteHitRateDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeByteHitRateDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeByteHitRateDataResponse = DescribeDomainRealTimeByteHitRateDataResponse;
class DescribeDomainRealTimeDetailDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            field: 'Field',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            merge: 'Merge',
            mergeLocIsp: 'MergeLocIsp',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            field: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            merge: 'string',
            mergeLocIsp: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeDetailDataRequest = DescribeDomainRealTimeDetailDataRequest;
class DescribeDomainRealTimeDetailDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeDomainRealTimeDetailDataResponseBody = DescribeDomainRealTimeDetailDataResponseBody;
class DescribeDomainRealTimeDetailDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeDetailDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeDetailDataResponse = DescribeDomainRealTimeDetailDataResponse;
class DescribeDomainRealTimeHttpCodeDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeHttpCodeDataRequest = DescribeDomainRealTimeHttpCodeDataRequest;
class DescribeDomainRealTimeHttpCodeDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            realTimeHttpCodeData: 'RealTimeHttpCodeData',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            realTimeHttpCodeData: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeHttpCodeDataResponseBody = DescribeDomainRealTimeHttpCodeDataResponseBody;
class DescribeDomainRealTimeHttpCodeDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeHttpCodeDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeHttpCodeDataResponse = DescribeDomainRealTimeHttpCodeDataResponse;
class DescribeDomainRealTimeQpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeQpsDataRequest = DescribeDomainRealTimeQpsDataRequest;
class DescribeDomainRealTimeQpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeDomainRealTimeQpsDataResponseBodyData,
            requestId: 'string',
        };
    }
}
exports.DescribeDomainRealTimeQpsDataResponseBody = DescribeDomainRealTimeQpsDataResponseBody;
class DescribeDomainRealTimeQpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeQpsDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeQpsDataResponse = DescribeDomainRealTimeQpsDataResponse;
class DescribeDomainRealTimeReqHitRateDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeReqHitRateDataRequest = DescribeDomainRealTimeReqHitRateDataRequest;
class DescribeDomainRealTimeReqHitRateDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeDomainRealTimeReqHitRateDataResponseBodyData,
            requestId: 'string',
        };
    }
}
exports.DescribeDomainRealTimeReqHitRateDataResponseBody = DescribeDomainRealTimeReqHitRateDataResponseBody;
class DescribeDomainRealTimeReqHitRateDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeReqHitRateDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeReqHitRateDataResponse = DescribeDomainRealTimeReqHitRateDataResponse;
class DescribeDomainRealTimeSrcBpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcBpsDataRequest = DescribeDomainRealTimeSrcBpsDataRequest;
class DescribeDomainRealTimeSrcBpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            realTimeSrcBpsDataPerInterval: 'RealTimeSrcBpsDataPerInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            realTimeSrcBpsDataPerInterval: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcBpsDataResponseBody = DescribeDomainRealTimeSrcBpsDataResponseBody;
class DescribeDomainRealTimeSrcBpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeSrcBpsDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeSrcBpsDataResponse = DescribeDomainRealTimeSrcBpsDataResponse;
class DescribeDomainRealTimeSrcHttpCodeDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcHttpCodeDataRequest = DescribeDomainRealTimeSrcHttpCodeDataRequest;
class DescribeDomainRealTimeSrcHttpCodeDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            realTimeSrcHttpCodeData: 'RealTimeSrcHttpCodeData',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            realTimeSrcHttpCodeData: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcHttpCodeDataResponseBody = DescribeDomainRealTimeSrcHttpCodeDataResponseBody;
class DescribeDomainRealTimeSrcHttpCodeDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeSrcHttpCodeDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeSrcHttpCodeDataResponse = DescribeDomainRealTimeSrcHttpCodeDataResponse;
class DescribeDomainRealTimeSrcTrafficDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcTrafficDataRequest = DescribeDomainRealTimeSrcTrafficDataRequest;
class DescribeDomainRealTimeSrcTrafficDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            realTimeSrcTrafficDataPerInterval: 'RealTimeSrcTrafficDataPerInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            realTimeSrcTrafficDataPerInterval: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcTrafficDataResponseBody = DescribeDomainRealTimeSrcTrafficDataResponseBody;
class DescribeDomainRealTimeSrcTrafficDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeSrcTrafficDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeSrcTrafficDataResponse = DescribeDomainRealTimeSrcTrafficDataResponse;
class DescribeDomainRealTimeTrafficDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeTrafficDataRequest = DescribeDomainRealTimeTrafficDataRequest;
class DescribeDomainRealTimeTrafficDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            realTimeTrafficDataPerInterval: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRealTimeTrafficDataResponseBody = DescribeDomainRealTimeTrafficDataResponseBody;
class DescribeDomainRealTimeTrafficDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealTimeTrafficDataResponseBody,
        };
    }
}
exports.DescribeDomainRealTimeTrafficDataResponse = DescribeDomainRealTimeTrafficDataResponse;
class DescribeDomainRealtimeLogDeliveryRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domain: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeDomainRealtimeLogDeliveryRequest = DescribeDomainRealtimeLogDeliveryRequest;
class DescribeDomainRealtimeLogDeliveryResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            logstore: 'Logstore',
            project: 'Project',
            region: 'Region',
            requestId: 'RequestId',
            status: 'Status',
        };
    }
    static types() {
        return {
            logstore: 'string',
            project: 'string',
            region: 'string',
            requestId: 'string',
            status: 'string',
        };
    }
}
exports.DescribeDomainRealtimeLogDeliveryResponseBody = DescribeDomainRealtimeLogDeliveryResponseBody;
class DescribeDomainRealtimeLogDeliveryResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRealtimeLogDeliveryResponseBody,
        };
    }
}
exports.DescribeDomainRealtimeLogDeliveryResponse = DescribeDomainRealtimeLogDeliveryResponse;
class DescribeDomainRegionDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainRegionDataRequest = DescribeDomainRegionDataRequest;
class DescribeDomainRegionDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            value: 'Value',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            value: DescribeDomainRegionDataResponseBodyValue,
        };
    }
}
exports.DescribeDomainRegionDataResponseBody = DescribeDomainRegionDataResponseBody;
class DescribeDomainRegionDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainRegionDataResponseBody,
        };
    }
}
exports.DescribeDomainRegionDataResponse = DescribeDomainRegionDataResponse;
class DescribeDomainReqHitRateDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainReqHitRateDataRequest = DescribeDomainReqHitRateDataRequest;
class DescribeDomainReqHitRateDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            reqHitRateInterval: 'ReqHitRateInterval',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            reqHitRateInterval: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainReqHitRateDataResponseBody = DescribeDomainReqHitRateDataResponseBody;
class DescribeDomainReqHitRateDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainReqHitRateDataResponseBody,
        };
    }
}
exports.DescribeDomainReqHitRateDataResponse = DescribeDomainReqHitRateDataResponse;
class DescribeDomainSrcBpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcBpsDataRequest = DescribeDomainSrcBpsDataRequest;
class DescribeDomainSrcBpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            srcBpsDataPerInterval: 'SrcBpsDataPerInterval',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            srcBpsDataPerInterval: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval,
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcBpsDataResponseBody = DescribeDomainSrcBpsDataResponseBody;
class DescribeDomainSrcBpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainSrcBpsDataResponseBody,
        };
    }
}
exports.DescribeDomainSrcBpsDataResponse = DescribeDomainSrcBpsDataResponse;
class DescribeDomainSrcHttpCodeDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcHttpCodeDataRequest = DescribeDomainSrcHttpCodeDataRequest;
class DescribeDomainSrcHttpCodeDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            httpCodeData: 'HttpCodeData',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            httpCodeData: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData,
            requestId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcHttpCodeDataResponseBody = DescribeDomainSrcHttpCodeDataResponseBody;
class DescribeDomainSrcHttpCodeDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainSrcHttpCodeDataResponseBody,
        };
    }
}
exports.DescribeDomainSrcHttpCodeDataResponse = DescribeDomainSrcHttpCodeDataResponse;
class DescribeDomainSrcQpsDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcQpsDataRequest = DescribeDomainSrcQpsDataRequest;
class DescribeDomainSrcQpsDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            srcQpsDataPerInterval: 'SrcQpsDataPerInterval',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            srcQpsDataPerInterval: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval,
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcQpsDataResponseBody = DescribeDomainSrcQpsDataResponseBody;
class DescribeDomainSrcQpsDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainSrcQpsDataResponseBody,
        };
    }
}
exports.DescribeDomainSrcQpsDataResponse = DescribeDomainSrcQpsDataResponse;
class DescribeDomainSrcTopUrlVisitRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            sortBy: 'SortBy',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            sortBy: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitRequest = DescribeDomainSrcTopUrlVisitRequest;
class DescribeDomainSrcTopUrlVisitResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            allUrlList: 'AllUrlList',
            domainName: 'DomainName',
            requestId: 'RequestId',
            startTime: 'StartTime',
            url200List: 'Url200List',
            url300List: 'Url300List',
            url400List: 'Url400List',
            url500List: 'Url500List',
        };
    }
    static types() {
        return {
            allUrlList: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList,
            domainName: 'string',
            requestId: 'string',
            startTime: 'string',
            url200List: DescribeDomainSrcTopUrlVisitResponseBodyUrl200List,
            url300List: DescribeDomainSrcTopUrlVisitResponseBodyUrl300List,
            url400List: DescribeDomainSrcTopUrlVisitResponseBodyUrl400List,
            url500List: DescribeDomainSrcTopUrlVisitResponseBodyUrl500List,
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBody = DescribeDomainSrcTopUrlVisitResponseBody;
class DescribeDomainSrcTopUrlVisitResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainSrcTopUrlVisitResponseBody,
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponse = DescribeDomainSrcTopUrlVisitResponse;
class DescribeDomainSrcTrafficDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcTrafficDataRequest = DescribeDomainSrcTrafficDataRequest;
class DescribeDomainSrcTrafficDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            srcTrafficDataPerInterval: 'SrcTrafficDataPerInterval',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            srcTrafficDataPerInterval: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval,
            startTime: 'string',
        };
    }
}
exports.DescribeDomainSrcTrafficDataResponseBody = DescribeDomainSrcTrafficDataResponseBody;
class DescribeDomainSrcTrafficDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainSrcTrafficDataResponseBody,
        };
    }
}
exports.DescribeDomainSrcTrafficDataResponse = DescribeDomainSrcTrafficDataResponse;
class DescribeDomainTopClientIpVisitRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            limit: 'Limit',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            sortBy: 'SortBy',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            limit: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            sortBy: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainTopClientIpVisitRequest = DescribeDomainTopClientIpVisitRequest;
class DescribeDomainTopClientIpVisitResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            clientIpList: 'ClientIpList',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            clientIpList: { 'type': 'array', 'itemType': DescribeDomainTopClientIpVisitResponseBodyClientIpList },
            requestId: 'string',
        };
    }
}
exports.DescribeDomainTopClientIpVisitResponseBody = DescribeDomainTopClientIpVisitResponseBody;
class DescribeDomainTopClientIpVisitResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainTopClientIpVisitResponseBody,
        };
    }
}
exports.DescribeDomainTopClientIpVisitResponse = DescribeDomainTopClientIpVisitResponse;
class DescribeDomainTopReferVisitRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            percent: 'Percent',
            sortBy: 'SortBy',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            percent: 'string',
            sortBy: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainTopReferVisitRequest = DescribeDomainTopReferVisitRequest;
class DescribeDomainTopReferVisitResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            requestId: 'RequestId',
            startTime: 'StartTime',
            topReferList: 'TopReferList',
        };
    }
    static types() {
        return {
            domainName: 'string',
            requestId: 'string',
            startTime: 'string',
            topReferList: DescribeDomainTopReferVisitResponseBodyTopReferList,
        };
    }
}
exports.DescribeDomainTopReferVisitResponseBody = DescribeDomainTopReferVisitResponseBody;
class DescribeDomainTopReferVisitResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainTopReferVisitResponseBody,
        };
    }
}
exports.DescribeDomainTopReferVisitResponse = DescribeDomainTopReferVisitResponse;
class DescribeDomainTopUrlVisitRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            sortBy: 'SortBy',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            sortBy: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainTopUrlVisitRequest = DescribeDomainTopUrlVisitRequest;
class DescribeDomainTopUrlVisitResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            allUrlList: 'AllUrlList',
            domainName: 'DomainName',
            requestId: 'RequestId',
            startTime: 'StartTime',
            url200List: 'Url200List',
            url300List: 'Url300List',
            url400List: 'Url400List',
            url500List: 'Url500List',
        };
    }
    static types() {
        return {
            allUrlList: DescribeDomainTopUrlVisitResponseBodyAllUrlList,
            domainName: 'string',
            requestId: 'string',
            startTime: 'string',
            url200List: DescribeDomainTopUrlVisitResponseBodyUrl200List,
            url300List: DescribeDomainTopUrlVisitResponseBodyUrl300List,
            url400List: DescribeDomainTopUrlVisitResponseBodyUrl400List,
            url500List: DescribeDomainTopUrlVisitResponseBodyUrl500List,
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBody = DescribeDomainTopUrlVisitResponseBody;
class DescribeDomainTopUrlVisitResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainTopUrlVisitResponseBody,
        };
    }
}
exports.DescribeDomainTopUrlVisitResponse = DescribeDomainTopUrlVisitResponse;
class DescribeDomainTrafficDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            interval: 'Interval',
            ispNameEn: 'IspNameEn',
            locationNameEn: 'LocationNameEn',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            interval: 'string',
            ispNameEn: 'string',
            locationNameEn: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainTrafficDataRequest = DescribeDomainTrafficDataRequest;
class DescribeDomainTrafficDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            trafficDataPerInterval: 'TrafficDataPerInterval',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            trafficDataPerInterval: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval,
        };
    }
}
exports.DescribeDomainTrafficDataResponseBody = DescribeDomainTrafficDataResponseBody;
class DescribeDomainTrafficDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainTrafficDataResponseBody,
        };
    }
}
exports.DescribeDomainTrafficDataResponse = DescribeDomainTrafficDataResponse;
class DescribeDomainUsageDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            area: 'Area',
            dataProtocol: 'DataProtocol',
            domainName: 'DomainName',
            endTime: 'EndTime',
            field: 'Field',
            interval: 'Interval',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
            type: 'Type',
        };
    }
    static types() {
        return {
            area: 'string',
            dataProtocol: 'string',
            domainName: 'string',
            endTime: 'string',
            field: 'string',
            interval: 'string',
            ownerId: 'number',
            startTime: 'string',
            type: 'string',
        };
    }
}
exports.DescribeDomainUsageDataRequest = DescribeDomainUsageDataRequest;
class DescribeDomainUsageDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            area: 'Area',
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            type: 'Type',
            usageDataPerInterval: 'UsageDataPerInterval',
        };
    }
    static types() {
        return {
            area: 'string',
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            type: 'string',
            usageDataPerInterval: DescribeDomainUsageDataResponseBodyUsageDataPerInterval,
        };
    }
}
exports.DescribeDomainUsageDataResponseBody = DescribeDomainUsageDataResponseBody;
class DescribeDomainUsageDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainUsageDataResponseBody,
        };
    }
}
exports.DescribeDomainUsageDataResponse = DescribeDomainUsageDataResponse;
class DescribeDomainUvDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainUvDataRequest = DescribeDomainUvDataRequest;
class DescribeDomainUvDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            uvDataInterval: 'UvDataInterval',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            uvDataInterval: DescribeDomainUvDataResponseBodyUvDataInterval,
        };
    }
}
exports.DescribeDomainUvDataResponseBody = DescribeDomainUvDataResponseBody;
class DescribeDomainUvDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainUvDataResponseBody,
        };
    }
}
exports.DescribeDomainUvDataResponse = DescribeDomainUvDataResponse;
class DescribeDomainsBySourceRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
            sources: 'Sources',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            securityToken: 'string',
            sources: 'string',
        };
    }
}
exports.DescribeDomainsBySourceRequest = DescribeDomainsBySourceRequest;
class DescribeDomainsBySourceResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainsList: 'DomainsList',
            requestId: 'RequestId',
            sources: 'Sources',
        };
    }
    static types() {
        return {
            domainsList: DescribeDomainsBySourceResponseBodyDomainsList,
            requestId: 'string',
            sources: 'string',
        };
    }
}
exports.DescribeDomainsBySourceResponseBody = DescribeDomainsBySourceResponseBody;
class DescribeDomainsBySourceResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainsBySourceResponseBody,
        };
    }
}
exports.DescribeDomainsBySourceResponse = DescribeDomainsBySourceResponse;
class DescribeDomainsUsageByDayRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeDomainsUsageByDayRequest = DescribeDomainsUsageByDayRequest;
class DescribeDomainsUsageByDayResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataInterval: 'DataInterval',
            domainName: 'DomainName',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            usageByDays: 'UsageByDays',
            usageTotal: 'UsageTotal',
        };
    }
    static types() {
        return {
            dataInterval: 'string',
            domainName: 'string',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            usageByDays: DescribeDomainsUsageByDayResponseBodyUsageByDays,
            usageTotal: DescribeDomainsUsageByDayResponseBodyUsageTotal,
        };
    }
}
exports.DescribeDomainsUsageByDayResponseBody = DescribeDomainsUsageByDayResponseBody;
class DescribeDomainsUsageByDayResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeDomainsUsageByDayResponseBody,
        };
    }
}
exports.DescribeDomainsUsageByDayResponse = DescribeDomainsUsageByDayResponse;
class DescribeEsExceptionDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            ruleId: 'RuleId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            ownerId: 'number',
            ruleId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeEsExceptionDataRequest = DescribeEsExceptionDataRequest;
class DescribeEsExceptionDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            contents: 'Contents',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            contents: { 'type': 'array', 'itemType': DescribeEsExceptionDataResponseBodyContents },
            requestId: 'string',
        };
    }
}
exports.DescribeEsExceptionDataResponseBody = DescribeEsExceptionDataResponseBody;
class DescribeEsExceptionDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeEsExceptionDataResponseBody,
        };
    }
}
exports.DescribeEsExceptionDataResponse = DescribeEsExceptionDataResponse;
class DescribeEsExecuteDataRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            ruleId: 'RuleId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            ownerId: 'number',
            ruleId: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeEsExecuteDataRequest = DescribeEsExecuteDataRequest;
class DescribeEsExecuteDataResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            contents: 'Contents',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            contents: { 'type': 'array', 'itemType': DescribeEsExecuteDataResponseBodyContents },
            requestId: 'string',
        };
    }
}
exports.DescribeEsExecuteDataResponseBody = DescribeEsExecuteDataResponseBody;
class DescribeEsExecuteDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeEsExecuteDataResponseBody,
        };
    }
}
exports.DescribeEsExecuteDataResponse = DescribeEsExecuteDataResponse;
class DescribeFCTriggerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            triggerARN: 'TriggerARN',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            triggerARN: 'string',
        };
    }
}
exports.DescribeFCTriggerRequest = DescribeFCTriggerRequest;
class DescribeFCTriggerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            FCTrigger: 'FCTrigger',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            FCTrigger: DescribeFCTriggerResponseBodyFCTrigger,
            requestId: 'string',
        };
    }
}
exports.DescribeFCTriggerResponseBody = DescribeFCTriggerResponseBody;
class DescribeFCTriggerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeFCTriggerResponseBody,
        };
    }
}
exports.DescribeFCTriggerResponse = DescribeFCTriggerResponse;
class DescribeIllegalUrlExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            taskId: 'string',
        };
    }
}
exports.DescribeIllegalUrlExportTaskRequest = DescribeIllegalUrlExportTaskRequest;
class DescribeIllegalUrlExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            downloadUrl: 'DownloadUrl',
            requestId: 'RequestId',
            status: 'Status',
        };
    }
    static types() {
        return {
            downloadUrl: 'string',
            requestId: 'string',
            status: 'string',
        };
    }
}
exports.DescribeIllegalUrlExportTaskResponseBody = DescribeIllegalUrlExportTaskResponseBody;
class DescribeIllegalUrlExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeIllegalUrlExportTaskResponseBody,
        };
    }
}
exports.DescribeIllegalUrlExportTaskResponse = DescribeIllegalUrlExportTaskResponse;
class DescribeIpInfoRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            IP: 'IP',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            IP: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeIpInfoRequest = DescribeIpInfoRequest;
class DescribeIpInfoResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnIp: 'CdnIp',
            ISP: 'ISP',
            ispEname: 'IspEname',
            region: 'Region',
            regionEname: 'RegionEname',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            cdnIp: 'string',
            ISP: 'string',
            ispEname: 'string',
            region: 'string',
            regionEname: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeIpInfoResponseBody = DescribeIpInfoResponseBody;
class DescribeIpInfoResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeIpInfoResponseBody,
        };
    }
}
exports.DescribeIpInfoResponse = DescribeIpInfoResponse;
class DescribeIpStatusRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ips: 'Ips',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ips: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeIpStatusRequest = DescribeIpStatusRequest;
class DescribeIpStatusResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ipStatus: 'IpStatus',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            ipStatus: { 'type': 'array', 'itemType': DescribeIpStatusResponseBodyIpStatus },
            requestId: 'string',
        };
    }
}
exports.DescribeIpStatusResponseBody = DescribeIpStatusResponseBody;
class DescribeIpStatusResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeIpStatusResponseBody,
        };
    }
}
exports.DescribeIpStatusResponse = DescribeIpStatusResponse;
class DescribeL2VipsByDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeL2VipsByDomainRequest = DescribeL2VipsByDomainRequest;
class DescribeL2VipsByDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            requestId: 'RequestId',
            vips: 'Vips',
        };
    }
    static types() {
        return {
            domainName: 'string',
            requestId: 'string',
            vips: DescribeL2VipsByDomainResponseBodyVips,
        };
    }
}
exports.DescribeL2VipsByDomainResponseBody = DescribeL2VipsByDomainResponseBody;
class DescribeL2VipsByDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeL2VipsByDomainResponseBody,
        };
    }
}
exports.DescribeL2VipsByDomainResponse = DescribeL2VipsByDomainResponse;
class DescribeRangeDataByLocateAndIspServiceRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainNames: 'DomainNames',
            endTime: 'EndTime',
            ispNames: 'IspNames',
            locationNames: 'LocationNames',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainNames: 'string',
            endTime: 'string',
            ispNames: 'string',
            locationNames: 'string',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeRangeDataByLocateAndIspServiceRequest = DescribeRangeDataByLocateAndIspServiceRequest;
class DescribeRangeDataByLocateAndIspServiceResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            jsonResult: 'JsonResult',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            jsonResult: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeRangeDataByLocateAndIspServiceResponseBody = DescribeRangeDataByLocateAndIspServiceResponseBody;
class DescribeRangeDataByLocateAndIspServiceResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeRangeDataByLocateAndIspServiceResponseBody,
        };
    }
}
exports.DescribeRangeDataByLocateAndIspServiceResponse = DescribeRangeDataByLocateAndIspServiceResponse;
class DescribeRealtimeDeliveryAccRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            interval: 'Interval',
            logStore: 'LogStore',
            ownerId: 'OwnerId',
            project: 'Project',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            interval: 'string',
            logStore: 'string',
            ownerId: 'number',
            project: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeRealtimeDeliveryAccRequest = DescribeRealtimeDeliveryAccRequest;
class DescribeRealtimeDeliveryAccResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            reatTimeDeliveryAccData: 'ReatTimeDeliveryAccData',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            reatTimeDeliveryAccData: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData,
            requestId: 'string',
        };
    }
}
exports.DescribeRealtimeDeliveryAccResponseBody = DescribeRealtimeDeliveryAccResponseBody;
class DescribeRealtimeDeliveryAccResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeRealtimeDeliveryAccResponseBody,
        };
    }
}
exports.DescribeRealtimeDeliveryAccResponse = DescribeRealtimeDeliveryAccResponse;
class DescribeRefreshQuotaRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeRefreshQuotaRequest = DescribeRefreshQuotaRequest;
class DescribeRefreshQuotaResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            blockQuota: 'BlockQuota',
            blockRemain: 'BlockRemain',
            dirQuota: 'DirQuota',
            dirRemain: 'DirRemain',
            preloadEdgeQuota: 'PreloadEdgeQuota',
            preloadEdgeRemain: 'PreloadEdgeRemain',
            preloadQuota: 'PreloadQuota',
            preloadRemain: 'PreloadRemain',
            regexQuota: 'RegexQuota',
            regexRemain: 'RegexRemain',
            requestId: 'RequestId',
            urlQuota: 'UrlQuota',
            urlRemain: 'UrlRemain',
        };
    }
    static types() {
        return {
            blockQuota: 'string',
            blockRemain: 'string',
            dirQuota: 'string',
            dirRemain: 'string',
            preloadEdgeQuota: 'string',
            preloadEdgeRemain: 'string',
            preloadQuota: 'string',
            preloadRemain: 'string',
            regexQuota: 'string',
            regexRemain: 'string',
            requestId: 'string',
            urlQuota: 'string',
            urlRemain: 'string',
        };
    }
}
exports.DescribeRefreshQuotaResponseBody = DescribeRefreshQuotaResponseBody;
class DescribeRefreshQuotaResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeRefreshQuotaResponseBody,
        };
    }
}
exports.DescribeRefreshQuotaResponse = DescribeRefreshQuotaResponse;
class DescribeRefreshTaskByIdRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            taskId: 'string',
        };
    }
}
exports.DescribeRefreshTaskByIdRequest = DescribeRefreshTaskByIdRequest;
class DescribeRefreshTaskByIdResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            tasks: 'Tasks',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            requestId: 'string',
            tasks: { 'type': 'array', 'itemType': DescribeRefreshTaskByIdResponseBodyTasks },
            totalCount: 'number',
        };
    }
}
exports.DescribeRefreshTaskByIdResponseBody = DescribeRefreshTaskByIdResponseBody;
class DescribeRefreshTaskByIdResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeRefreshTaskByIdResponseBody,
        };
    }
}
exports.DescribeRefreshTaskByIdResponse = DescribeRefreshTaskByIdResponse;
class DescribeRefreshTasksRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            objectPath: 'ObjectPath',
            objectType: 'ObjectType',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            resourceGroupId: 'ResourceGroupId',
            securityToken: 'SecurityToken',
            startTime: 'StartTime',
            status: 'Status',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            objectPath: 'string',
            objectType: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            resourceGroupId: 'string',
            securityToken: 'string',
            startTime: 'string',
            status: 'string',
            taskId: 'string',
        };
    }
}
exports.DescribeRefreshTasksRequest = DescribeRefreshTasksRequest;
class DescribeRefreshTasksResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            tasks: 'Tasks',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            tasks: DescribeRefreshTasksResponseBodyTasks,
            totalCount: 'number',
        };
    }
}
exports.DescribeRefreshTasksResponseBody = DescribeRefreshTasksResponseBody;
class DescribeRefreshTasksResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeRefreshTasksResponseBody,
        };
    }
}
exports.DescribeRefreshTasksResponse = DescribeRefreshTasksResponse;
class DescribeStagingIpRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
        };
    }
}
exports.DescribeStagingIpRequest = DescribeStagingIpRequest;
class DescribeStagingIpResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            IPV4s: 'IPV4s',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            IPV4s: DescribeStagingIpResponseBodyIPV4s,
            requestId: 'string',
        };
    }
}
exports.DescribeStagingIpResponseBody = DescribeStagingIpResponseBody;
class DescribeStagingIpResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeStagingIpResponseBody,
        };
    }
}
exports.DescribeStagingIpResponse = DescribeStagingIpResponse;
class DescribeTagResourcesRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            resourceId: { 'type': 'array', 'itemType': 'string' },
            resourceType: 'string',
            tag: { 'type': 'array', 'itemType': DescribeTagResourcesRequestTag },
        };
    }
}
exports.DescribeTagResourcesRequest = DescribeTagResourcesRequest;
class DescribeTagResourcesResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            tagResources: 'TagResources',
        };
    }
    static types() {
        return {
            requestId: 'string',
            tagResources: { 'type': 'array', 'itemType': DescribeTagResourcesResponseBodyTagResources },
        };
    }
}
exports.DescribeTagResourcesResponseBody = DescribeTagResourcesResponseBody;
class DescribeTagResourcesResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeTagResourcesResponseBody,
        };
    }
}
exports.DescribeTagResourcesResponse = DescribeTagResourcesResponse;
class DescribeTopDomainsByFlowRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            limit: 'Limit',
            ownerId: 'OwnerId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            limit: 'number',
            ownerId: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeTopDomainsByFlowRequest = DescribeTopDomainsByFlowRequest;
class DescribeTopDomainsByFlowResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainCount: 'DomainCount',
            domainOnlineCount: 'DomainOnlineCount',
            endTime: 'EndTime',
            requestId: 'RequestId',
            startTime: 'StartTime',
            topDomains: 'TopDomains',
        };
    }
    static types() {
        return {
            domainCount: 'number',
            domainOnlineCount: 'number',
            endTime: 'string',
            requestId: 'string',
            startTime: 'string',
            topDomains: DescribeTopDomainsByFlowResponseBodyTopDomains,
        };
    }
}
exports.DescribeTopDomainsByFlowResponseBody = DescribeTopDomainsByFlowResponseBody;
class DescribeTopDomainsByFlowResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeTopDomainsByFlowResponseBody,
        };
    }
}
exports.DescribeTopDomainsByFlowResponse = DescribeTopDomainsByFlowResponse;
class DescribeUserCertificateExpireCountRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
        };
    }
}
exports.DescribeUserCertificateExpireCountRequest = DescribeUserCertificateExpireCountRequest;
class DescribeUserCertificateExpireCountResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            expireWithin30DaysCount: 'ExpireWithin30DaysCount',
            expiredCount: 'ExpiredCount',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            expireWithin30DaysCount: 'number',
            expiredCount: 'number',
            requestId: 'string',
        };
    }
}
exports.DescribeUserCertificateExpireCountResponseBody = DescribeUserCertificateExpireCountResponseBody;
class DescribeUserCertificateExpireCountResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeUserCertificateExpireCountResponseBody,
        };
    }
}
exports.DescribeUserCertificateExpireCountResponse = DescribeUserCertificateExpireCountResponse;
class DescribeUserConfigsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            config: 'Config',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            config: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.DescribeUserConfigsRequest = DescribeUserConfigsRequest;
class DescribeUserConfigsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configs: 'Configs',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            configs: DescribeUserConfigsResponseBodyConfigs,
            requestId: 'string',
        };
    }
}
exports.DescribeUserConfigsResponseBody = DescribeUserConfigsResponseBody;
class DescribeUserConfigsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeUserConfigsResponseBody,
        };
    }
}
exports.DescribeUserConfigsResponse = DescribeUserConfigsResponse;
class DescribeUserDomainsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnType: 'CdnType',
            changeEndTime: 'ChangeEndTime',
            changeStartTime: 'ChangeStartTime',
            checkDomainShow: 'CheckDomainShow',
            coverage: 'Coverage',
            domainName: 'DomainName',
            domainSearchType: 'DomainSearchType',
            domainStatus: 'DomainStatus',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            resourceGroupId: 'ResourceGroupId',
            securityToken: 'SecurityToken',
            source: 'Source',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            cdnType: 'string',
            changeEndTime: 'string',
            changeStartTime: 'string',
            checkDomainShow: 'boolean',
            coverage: 'string',
            domainName: 'string',
            domainSearchType: 'string',
            domainStatus: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            resourceGroupId: 'string',
            securityToken: 'string',
            source: 'string',
            tag: { 'type': 'array', 'itemType': DescribeUserDomainsRequestTag },
        };
    }
}
exports.DescribeUserDomainsRequest = DescribeUserDomainsRequest;
class DescribeUserDomainsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domains: 'Domains',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            domains: DescribeUserDomainsResponseBodyDomains,
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
}
exports.DescribeUserDomainsResponseBody = DescribeUserDomainsResponseBody;
class DescribeUserDomainsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeUserDomainsResponseBody,
        };
    }
}
exports.DescribeUserDomainsResponse = DescribeUserDomainsResponse;
class DescribeUserTagsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
        };
    }
}
exports.DescribeUserTagsRequest = DescribeUserTagsRequest;
class DescribeUserTagsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            tags: 'Tags',
        };
    }
    static types() {
        return {
            requestId: 'string',
            tags: { 'type': 'array', 'itemType': DescribeUserTagsResponseBodyTags },
        };
    }
}
exports.DescribeUserTagsResponseBody = DescribeUserTagsResponseBody;
class DescribeUserTagsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeUserTagsResponseBody,
        };
    }
}
exports.DescribeUserTagsResponse = DescribeUserTagsResponse;
class DescribeUserUsageDataExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            pageNumber: 'string',
            pageSize: 'string',
        };
    }
}
exports.DescribeUserUsageDataExportTaskRequest = DescribeUserUsageDataExportTaskRequest;
class DescribeUserUsageDataExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            usageDataPerPage: 'UsageDataPerPage',
        };
    }
    static types() {
        return {
            requestId: 'string',
            usageDataPerPage: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage,
        };
    }
}
exports.DescribeUserUsageDataExportTaskResponseBody = DescribeUserUsageDataExportTaskResponseBody;
class DescribeUserUsageDataExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeUserUsageDataExportTaskResponseBody,
        };
    }
}
exports.DescribeUserUsageDataExportTaskResponse = DescribeUserUsageDataExportTaskResponse;
class DescribeUserUsageDetailDataExportTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            pageNumber: 'string',
            pageSize: 'string',
        };
    }
}
exports.DescribeUserUsageDetailDataExportTaskRequest = DescribeUserUsageDetailDataExportTaskRequest;
class DescribeUserUsageDetailDataExportTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
            usageDataPerPage: 'UsageDataPerPage',
        };
    }
    static types() {
        return {
            requestId: 'string',
            usageDataPerPage: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage,
        };
    }
}
exports.DescribeUserUsageDetailDataExportTaskResponseBody = DescribeUserUsageDetailDataExportTaskResponseBody;
class DescribeUserUsageDetailDataExportTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeUserUsageDetailDataExportTaskResponseBody,
        };
    }
}
exports.DescribeUserUsageDetailDataExportTaskResponse = DescribeUserUsageDetailDataExportTaskResponse;
class DescribeUserVipsByDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            available: 'Available',
            domainName: 'DomainName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            available: 'string',
            domainName: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeUserVipsByDomainRequest = DescribeUserVipsByDomainRequest;
class DescribeUserVipsByDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            requestId: 'RequestId',
            vips: 'Vips',
        };
    }
    static types() {
        return {
            domainName: 'string',
            requestId: 'string',
            vips: DescribeUserVipsByDomainResponseBodyVips,
        };
    }
}
exports.DescribeUserVipsByDomainResponseBody = DescribeUserVipsByDomainResponseBody;
class DescribeUserVipsByDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeUserVipsByDomainResponseBody,
        };
    }
}
exports.DescribeUserVipsByDomainResponse = DescribeUserVipsByDomainResponse;
class DescribeVerifyContentRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
        };
    }
}
exports.DescribeVerifyContentRequest = DescribeVerifyContentRequest;
class DescribeVerifyContentResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: 'string',
            requestId: 'string',
        };
    }
}
exports.DescribeVerifyContentResponseBody = DescribeVerifyContentResponseBody;
class DescribeVerifyContentResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DescribeVerifyContentResponseBody,
        };
    }
}
exports.DescribeVerifyContentResponse = DescribeVerifyContentResponse;
class DisableRealtimeLogDeliveryRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domain: 'string',
            ownerId: 'number',
        };
    }
}
exports.DisableRealtimeLogDeliveryRequest = DisableRealtimeLogDeliveryRequest;
class DisableRealtimeLogDeliveryResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.DisableRealtimeLogDeliveryResponseBody = DisableRealtimeLogDeliveryResponseBody;
class DisableRealtimeLogDeliveryResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: DisableRealtimeLogDeliveryResponseBody,
        };
    }
}
exports.DisableRealtimeLogDeliveryResponse = DisableRealtimeLogDeliveryResponse;
class EnableRealtimeLogDeliveryRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domain: 'string',
            ownerId: 'number',
        };
    }
}
exports.EnableRealtimeLogDeliveryRequest = EnableRealtimeLogDeliveryRequest;
class EnableRealtimeLogDeliveryResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.EnableRealtimeLogDeliveryResponseBody = EnableRealtimeLogDeliveryResponseBody;
class EnableRealtimeLogDeliveryResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: EnableRealtimeLogDeliveryResponseBody,
        };
    }
}
exports.EnableRealtimeLogDeliveryResponse = EnableRealtimeLogDeliveryResponse;
class ListDomainsByLogConfigIdRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            configId: 'string',
            ownerId: 'number',
        };
    }
}
exports.ListDomainsByLogConfigIdRequest = ListDomainsByLogConfigIdRequest;
class ListDomainsByLogConfigIdResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domains: 'Domains',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            domains: ListDomainsByLogConfigIdResponseBodyDomains,
            requestId: 'string',
        };
    }
}
exports.ListDomainsByLogConfigIdResponseBody = ListDomainsByLogConfigIdResponseBody;
class ListDomainsByLogConfigIdResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ListDomainsByLogConfigIdResponseBody,
        };
    }
}
exports.ListDomainsByLogConfigIdResponse = ListDomainsByLogConfigIdResponse;
class ListFCTriggerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            eventMetaName: 'EventMetaName',
            eventMetaVersion: 'EventMetaVersion',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            eventMetaName: 'string',
            eventMetaVersion: 'string',
            ownerId: 'number',
        };
    }
}
exports.ListFCTriggerRequest = ListFCTriggerRequest;
class ListFCTriggerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            FCTriggers: 'FCTriggers',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            FCTriggers: { 'type': 'array', 'itemType': ListFCTriggerResponseBodyFCTriggers },
            requestId: 'string',
        };
    }
}
exports.ListFCTriggerResponseBody = ListFCTriggerResponseBody;
class ListFCTriggerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ListFCTriggerResponseBody,
        };
    }
}
exports.ListFCTriggerResponse = ListFCTriggerResponse;
class ListRealtimeLogDeliveryDomainsRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            logstore: 'Logstore',
            ownerId: 'OwnerId',
            project: 'Project',
            region: 'Region',
        };
    }
    static types() {
        return {
            logstore: 'string',
            ownerId: 'number',
            project: 'string',
            region: 'string',
        };
    }
}
exports.ListRealtimeLogDeliveryDomainsRequest = ListRealtimeLogDeliveryDomainsRequest;
class ListRealtimeLogDeliveryDomainsResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: ListRealtimeLogDeliveryDomainsResponseBodyContent,
            requestId: 'string',
        };
    }
}
exports.ListRealtimeLogDeliveryDomainsResponseBody = ListRealtimeLogDeliveryDomainsResponseBody;
class ListRealtimeLogDeliveryDomainsResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ListRealtimeLogDeliveryDomainsResponseBody,
        };
    }
}
exports.ListRealtimeLogDeliveryDomainsResponse = ListRealtimeLogDeliveryDomainsResponse;
class ListRealtimeLogDeliveryInfosRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
        };
    }
}
exports.ListRealtimeLogDeliveryInfosRequest = ListRealtimeLogDeliveryInfosRequest;
class ListRealtimeLogDeliveryInfosResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: ListRealtimeLogDeliveryInfosResponseBodyContent,
            requestId: 'string',
        };
    }
}
exports.ListRealtimeLogDeliveryInfosResponseBody = ListRealtimeLogDeliveryInfosResponseBody;
class ListRealtimeLogDeliveryInfosResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ListRealtimeLogDeliveryInfosResponseBody,
        };
    }
}
exports.ListRealtimeLogDeliveryInfosResponse = ListRealtimeLogDeliveryInfosResponse;
class ListUserCustomLogConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            ownerId: 'number',
        };
    }
}
exports.ListUserCustomLogConfigRequest = ListUserCustomLogConfigRequest;
class ListUserCustomLogConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configIds: 'ConfigIds',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            configIds: ListUserCustomLogConfigResponseBodyConfigIds,
            requestId: 'string',
        };
    }
}
exports.ListUserCustomLogConfigResponseBody = ListUserCustomLogConfigResponseBody;
class ListUserCustomLogConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ListUserCustomLogConfigResponseBody,
        };
    }
}
exports.ListUserCustomLogConfigResponse = ListUserCustomLogConfigResponse;
class ModifyCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            resourceGroupId: 'ResourceGroupId',
            securityToken: 'SecurityToken',
            sources: 'Sources',
            topLevelDomain: 'TopLevelDomain',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            resourceGroupId: 'string',
            securityToken: 'string',
            sources: 'string',
            topLevelDomain: 'string',
        };
    }
}
exports.ModifyCdnDomainRequest = ModifyCdnDomainRequest;
class ModifyCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.ModifyCdnDomainResponseBody = ModifyCdnDomainResponseBody;
class ModifyCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ModifyCdnDomainResponseBody,
        };
    }
}
exports.ModifyCdnDomainResponse = ModifyCdnDomainResponse;
class ModifyCdnDomainSchdmByPropertyRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            property: 'Property',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            property: 'string',
        };
    }
}
exports.ModifyCdnDomainSchdmByPropertyRequest = ModifyCdnDomainSchdmByPropertyRequest;
class ModifyCdnDomainSchdmByPropertyResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.ModifyCdnDomainSchdmByPropertyResponseBody = ModifyCdnDomainSchdmByPropertyResponseBody;
class ModifyCdnDomainSchdmByPropertyResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ModifyCdnDomainSchdmByPropertyResponseBody,
        };
    }
}
exports.ModifyCdnDomainSchdmByPropertyResponse = ModifyCdnDomainSchdmByPropertyResponse;
class ModifyRealtimeLogDeliveryRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
            logstore: 'Logstore',
            ownerId: 'OwnerId',
            project: 'Project',
            region: 'Region',
        };
    }
    static types() {
        return {
            domain: 'string',
            logstore: 'string',
            ownerId: 'number',
            project: 'string',
            region: 'string',
        };
    }
}
exports.ModifyRealtimeLogDeliveryRequest = ModifyRealtimeLogDeliveryRequest;
class ModifyRealtimeLogDeliveryResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.ModifyRealtimeLogDeliveryResponseBody = ModifyRealtimeLogDeliveryResponseBody;
class ModifyRealtimeLogDeliveryResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ModifyRealtimeLogDeliveryResponseBody,
        };
    }
}
exports.ModifyRealtimeLogDeliveryResponse = ModifyRealtimeLogDeliveryResponse;
class ModifyUserCustomLogConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            ownerId: 'OwnerId',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            configId: 'string',
            ownerId: 'number',
            tag: 'string',
        };
    }
}
exports.ModifyUserCustomLogConfigRequest = ModifyUserCustomLogConfigRequest;
class ModifyUserCustomLogConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.ModifyUserCustomLogConfigResponseBody = ModifyUserCustomLogConfigResponseBody;
class ModifyUserCustomLogConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ModifyUserCustomLogConfigResponseBody,
        };
    }
}
exports.ModifyUserCustomLogConfigResponse = ModifyUserCustomLogConfigResponse;
class OpenCdnServiceRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            internetChargeType: 'InternetChargeType',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            internetChargeType: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.OpenCdnServiceRequest = OpenCdnServiceRequest;
class OpenCdnServiceResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.OpenCdnServiceResponseBody = OpenCdnServiceResponseBody;
class OpenCdnServiceResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: OpenCdnServiceResponseBody,
        };
    }
}
exports.OpenCdnServiceResponse = OpenCdnServiceResponse;
class PublishStagingConfigToProductionRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
        };
    }
}
exports.PublishStagingConfigToProductionRequest = PublishStagingConfigToProductionRequest;
class PublishStagingConfigToProductionResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.PublishStagingConfigToProductionResponseBody = PublishStagingConfigToProductionResponseBody;
class PublishStagingConfigToProductionResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: PublishStagingConfigToProductionResponseBody,
        };
    }
}
exports.PublishStagingConfigToProductionResponse = PublishStagingConfigToProductionResponse;
class PushObjectCacheRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            area: 'Area',
            l2Preload: 'L2Preload',
            objectPath: 'ObjectPath',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            area: 'string',
            l2Preload: 'boolean',
            objectPath: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.PushObjectCacheRequest = PushObjectCacheRequest;
class PushObjectCacheResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            pushTaskId: 'PushTaskId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            pushTaskId: 'string',
            requestId: 'string',
        };
    }
}
exports.PushObjectCacheResponseBody = PushObjectCacheResponseBody;
class PushObjectCacheResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: PushObjectCacheResponseBody,
        };
    }
}
exports.PushObjectCacheResponse = PushObjectCacheResponse;
class RefreshObjectCachesRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            objectPath: 'ObjectPath',
            objectType: 'ObjectType',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            objectPath: 'string',
            objectType: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.RefreshObjectCachesRequest = RefreshObjectCachesRequest;
class RefreshObjectCachesResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            refreshTaskId: 'RefreshTaskId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            refreshTaskId: 'string',
            requestId: 'string',
        };
    }
}
exports.RefreshObjectCachesResponseBody = RefreshObjectCachesResponseBody;
class RefreshObjectCachesResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: RefreshObjectCachesResponseBody,
        };
    }
}
exports.RefreshObjectCachesResponse = RefreshObjectCachesResponse;
class RollbackStagingConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
        };
    }
}
exports.RollbackStagingConfigRequest = RollbackStagingConfigRequest;
class RollbackStagingConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.RollbackStagingConfigResponseBody = RollbackStagingConfigResponseBody;
class RollbackStagingConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: RollbackStagingConfigResponseBody,
        };
    }
}
exports.RollbackStagingConfigResponse = RollbackStagingConfigResponse;
class SetCdnDomainCSRCertificateRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            serverCertificate: 'ServerCertificate',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            serverCertificate: 'string',
        };
    }
}
exports.SetCdnDomainCSRCertificateRequest = SetCdnDomainCSRCertificateRequest;
class SetCdnDomainCSRCertificateResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetCdnDomainCSRCertificateResponseBody = SetCdnDomainCSRCertificateResponseBody;
class SetCdnDomainCSRCertificateResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetCdnDomainCSRCertificateResponseBody,
        };
    }
}
exports.SetCdnDomainCSRCertificateResponse = SetCdnDomainCSRCertificateResponse;
class SetCdnDomainSMCertificateRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certIdentifier: 'CertIdentifier',
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            SSLProtocol: 'SSLProtocol',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            certIdentifier: 'string',
            domainName: 'string',
            ownerId: 'number',
            SSLProtocol: 'string',
            securityToken: 'string',
        };
    }
}
exports.SetCdnDomainSMCertificateRequest = SetCdnDomainSMCertificateRequest;
class SetCdnDomainSMCertificateResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetCdnDomainSMCertificateResponseBody = SetCdnDomainSMCertificateResponseBody;
class SetCdnDomainSMCertificateResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetCdnDomainSMCertificateResponseBody,
        };
    }
}
exports.SetCdnDomainSMCertificateResponse = SetCdnDomainSMCertificateResponse;
class SetCdnDomainStagingConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            functions: 'Functions',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            functions: 'string',
            ownerId: 'number',
        };
    }
}
exports.SetCdnDomainStagingConfigRequest = SetCdnDomainStagingConfigRequest;
class SetCdnDomainStagingConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetCdnDomainStagingConfigResponseBody = SetCdnDomainStagingConfigResponseBody;
class SetCdnDomainStagingConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetCdnDomainStagingConfigResponseBody,
        };
    }
}
exports.SetCdnDomainStagingConfigResponse = SetCdnDomainStagingConfigResponse;
class SetConfigOfVersionRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            functionArgs: 'FunctionArgs',
            functionId: 'FunctionId',
            functionMatches: 'FunctionMatches',
            functionName: 'FunctionName',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
            versionId: 'VersionId',
        };
    }
    static types() {
        return {
            configId: 'string',
            functionArgs: 'string',
            functionId: 'number',
            functionMatches: 'string',
            functionName: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            securityToken: 'string',
            versionId: 'string',
        };
    }
}
exports.SetConfigOfVersionRequest = SetConfigOfVersionRequest;
class SetConfigOfVersionResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetConfigOfVersionResponseBody = SetConfigOfVersionResponseBody;
class SetConfigOfVersionResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetConfigOfVersionResponseBody,
        };
    }
}
exports.SetConfigOfVersionResponse = SetConfigOfVersionResponse;
class SetDomainGreenManagerConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            enable: 'Enable',
            ownerId: 'OwnerId',
        };
    }
    static types() {
        return {
            domainName: 'string',
            enable: 'string',
            ownerId: 'number',
        };
    }
}
exports.SetDomainGreenManagerConfigRequest = SetDomainGreenManagerConfigRequest;
class SetDomainGreenManagerConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetDomainGreenManagerConfigResponseBody = SetDomainGreenManagerConfigResponseBody;
class SetDomainGreenManagerConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetDomainGreenManagerConfigResponseBody,
        };
    }
}
exports.SetDomainGreenManagerConfigResponse = SetDomainGreenManagerConfigResponse;
class SetDomainServerCertificateRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certName: 'CertName',
            certType: 'CertType',
            domainName: 'DomainName',
            forceSet: 'ForceSet',
            ownerId: 'OwnerId',
            privateKey: 'PrivateKey',
            securityToken: 'SecurityToken',
            serverCertificate: 'ServerCertificate',
            serverCertificateStatus: 'ServerCertificateStatus',
        };
    }
    static types() {
        return {
            certName: 'string',
            certType: 'string',
            domainName: 'string',
            forceSet: 'string',
            ownerId: 'number',
            privateKey: 'string',
            securityToken: 'string',
            serverCertificate: 'string',
            serverCertificateStatus: 'string',
        };
    }
}
exports.SetDomainServerCertificateRequest = SetDomainServerCertificateRequest;
class SetDomainServerCertificateResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetDomainServerCertificateResponseBody = SetDomainServerCertificateResponseBody;
class SetDomainServerCertificateResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetDomainServerCertificateResponseBody,
        };
    }
}
exports.SetDomainServerCertificateResponse = SetDomainServerCertificateResponse;
class SetErrorPageConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            customPageUrl: 'CustomPageUrl',
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            pageType: 'PageType',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            customPageUrl: 'string',
            domainName: 'string',
            ownerId: 'number',
            pageType: 'string',
            securityToken: 'string',
        };
    }
}
exports.SetErrorPageConfigRequest = SetErrorPageConfigRequest;
class SetErrorPageConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetErrorPageConfigResponseBody = SetErrorPageConfigResponseBody;
class SetErrorPageConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetErrorPageConfigResponseBody,
        };
    }
}
exports.SetErrorPageConfigResponse = SetErrorPageConfigResponse;
class SetHttpErrorPageConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            domainName: 'DomainName',
            errorCode: 'ErrorCode',
            ownerId: 'OwnerId',
            pageUrl: 'PageUrl',
        };
    }
    static types() {
        return {
            configId: 'number',
            domainName: 'string',
            errorCode: 'string',
            ownerId: 'number',
            pageUrl: 'string',
        };
    }
}
exports.SetHttpErrorPageConfigRequest = SetHttpErrorPageConfigRequest;
class SetHttpErrorPageConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetHttpErrorPageConfigResponseBody = SetHttpErrorPageConfigResponseBody;
class SetHttpErrorPageConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetHttpErrorPageConfigResponseBody,
        };
    }
}
exports.SetHttpErrorPageConfigResponse = SetHttpErrorPageConfigResponse;
class SetReqHeaderConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            domainName: 'DomainName',
            key: 'Key',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
            value: 'Value',
        };
    }
    static types() {
        return {
            configId: 'number',
            domainName: 'string',
            key: 'string',
            ownerId: 'number',
            securityToken: 'string',
            value: 'string',
        };
    }
}
exports.SetReqHeaderConfigRequest = SetReqHeaderConfigRequest;
class SetReqHeaderConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetReqHeaderConfigResponseBody = SetReqHeaderConfigResponseBody;
class SetReqHeaderConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetReqHeaderConfigResponseBody,
        };
    }
}
exports.SetReqHeaderConfigResponse = SetReqHeaderConfigResponse;
class SetUserGreenManagerConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            quota: 'Quota',
            ratio: 'Ratio',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            quota: 'string',
            ratio: 'string',
            securityToken: 'string',
        };
    }
}
exports.SetUserGreenManagerConfigRequest = SetUserGreenManagerConfigRequest;
class SetUserGreenManagerConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetUserGreenManagerConfigResponseBody = SetUserGreenManagerConfigResponseBody;
class SetUserGreenManagerConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetUserGreenManagerConfigResponseBody,
        };
    }
}
exports.SetUserGreenManagerConfigResponse = SetUserGreenManagerConfigResponse;
class SetWaitingRoomConfigRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            allowPct: 'AllowPct',
            domainName: 'DomainName',
            gapTime: 'GapTime',
            maxTimeWait: 'MaxTimeWait',
            ownerId: 'OwnerId',
            waitUri: 'WaitUri',
            waitUrl: 'WaitUrl',
        };
    }
    static types() {
        return {
            allowPct: 'number',
            domainName: 'string',
            gapTime: 'number',
            maxTimeWait: 'number',
            ownerId: 'number',
            waitUri: 'string',
            waitUrl: 'string',
        };
    }
}
exports.SetWaitingRoomConfigRequest = SetWaitingRoomConfigRequest;
class SetWaitingRoomConfigResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.SetWaitingRoomConfigResponseBody = SetWaitingRoomConfigResponseBody;
class SetWaitingRoomConfigResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: SetWaitingRoomConfigResponseBody,
        };
    }
}
exports.SetWaitingRoomConfigResponse = SetWaitingRoomConfigResponse;
class StartCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.StartCdnDomainRequest = StartCdnDomainRequest;
class StartCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.StartCdnDomainResponseBody = StartCdnDomainResponseBody;
class StartCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: StartCdnDomainResponseBody,
        };
    }
}
exports.StartCdnDomainResponse = StartCdnDomainResponse;
class StopCdnDomainRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            securityToken: 'SecurityToken',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            securityToken: 'string',
        };
    }
}
exports.StopCdnDomainRequest = StopCdnDomainRequest;
class StopCdnDomainResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.StopCdnDomainResponseBody = StopCdnDomainResponseBody;
class StopCdnDomainResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: StopCdnDomainResponseBody,
        };
    }
}
exports.StopCdnDomainResponse = StopCdnDomainResponse;
class TagResourcesRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ownerId: 'OwnerId',
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            ownerId: 'number',
            resourceId: { 'type': 'array', 'itemType': 'string' },
            resourceType: 'string',
            tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
        };
    }
}
exports.TagResourcesRequest = TagResourcesRequest;
class TagResourcesResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.TagResourcesResponseBody = TagResourcesResponseBody;
class TagResourcesResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: TagResourcesResponseBody,
        };
    }
}
exports.TagResourcesResponse = TagResourcesResponse;
class UntagResourcesRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            all: 'All',
            ownerId: 'OwnerId',
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            tagKey: 'TagKey',
        };
    }
    static types() {
        return {
            all: 'boolean',
            ownerId: 'number',
            resourceId: { 'type': 'array', 'itemType': 'string' },
            resourceType: 'string',
            tagKey: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.UntagResourcesRequest = UntagResourcesRequest;
class UntagResourcesResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.UntagResourcesResponseBody = UntagResourcesResponseBody;
class UntagResourcesResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: UntagResourcesResponseBody,
        };
    }
}
exports.UntagResourcesResponse = UntagResourcesResponse;
class UpdateCdnDeliverTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            deliver: 'Deliver',
            deliverId: 'DeliverId',
            domainName: 'DomainName',
            name: 'Name',
            ownerId: 'OwnerId',
            reports: 'Reports',
            schedule: 'Schedule',
        };
    }
    static types() {
        return {
            deliver: 'string',
            deliverId: 'number',
            domainName: 'string',
            name: 'string',
            ownerId: 'number',
            reports: 'string',
            schedule: 'string',
        };
    }
}
exports.UpdateCdnDeliverTaskRequest = UpdateCdnDeliverTaskRequest;
class UpdateCdnDeliverTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.UpdateCdnDeliverTaskResponseBody = UpdateCdnDeliverTaskResponseBody;
class UpdateCdnDeliverTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: UpdateCdnDeliverTaskResponseBody,
        };
    }
}
exports.UpdateCdnDeliverTaskResponse = UpdateCdnDeliverTaskResponse;
class UpdateCdnSubTaskRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            endTime: 'EndTime',
            ownerId: 'OwnerId',
            reportIds: 'ReportIds',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            domainName: 'string',
            endTime: 'string',
            ownerId: 'number',
            reportIds: 'string',
            startTime: 'string',
        };
    }
}
exports.UpdateCdnSubTaskRequest = UpdateCdnSubTaskRequest;
class UpdateCdnSubTaskResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.UpdateCdnSubTaskResponseBody = UpdateCdnSubTaskResponseBody;
class UpdateCdnSubTaskResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: UpdateCdnSubTaskResponseBody,
        };
    }
}
exports.UpdateCdnSubTaskResponse = UpdateCdnSubTaskResponse;
class UpdateFCTriggerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            functionARN: 'FunctionARN',
            notes: 'Notes',
            ownerId: 'OwnerId',
            roleARN: 'RoleARN',
            sourceARN: 'SourceARN',
            triggerARN: 'TriggerARN',
        };
    }
    static types() {
        return {
            functionARN: 'string',
            notes: 'string',
            ownerId: 'number',
            roleARN: 'string',
            sourceARN: 'string',
            triggerARN: 'string',
        };
    }
}
exports.UpdateFCTriggerRequest = UpdateFCTriggerRequest;
class UpdateFCTriggerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            requestId: 'string',
        };
    }
}
exports.UpdateFCTriggerResponseBody = UpdateFCTriggerResponseBody;
class UpdateFCTriggerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: UpdateFCTriggerResponseBody,
        };
    }
}
exports.UpdateFCTriggerResponse = UpdateFCTriggerResponse;
class VerifyDomainOwnerRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            ownerId: 'OwnerId',
            verifyType: 'VerifyType',
        };
    }
    static types() {
        return {
            domainName: 'string',
            ownerId: 'number',
            verifyType: 'string',
        };
    }
}
exports.VerifyDomainOwnerRequest = VerifyDomainOwnerRequest;
class VerifyDomainOwnerResponseBody extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            content: 'string',
            requestId: 'string',
        };
    }
}
exports.VerifyDomainOwnerResponseBody = VerifyDomainOwnerResponseBody;
class VerifyDomainOwnerResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: VerifyDomainOwnerResponseBody,
        };
    }
}
exports.VerifyDomainOwnerResponse = VerifyDomainOwnerResponse;
class BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            domainName: 'DomainName',
            functionName: 'FunctionName',
        };
    }
    static types() {
        return {
            configId: 'number',
            domainName: 'string',
            functionName: 'string',
        };
    }
}
exports.BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel = BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel;
class BatchSetCdnDomainConfigResponseBodyDomainConfigList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainConfigModel: 'DomainConfigModel',
        };
    }
    static types() {
        return {
            domainConfigModel: { 'type': 'array', 'itemType': BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel },
        };
    }
}
exports.BatchSetCdnDomainConfigResponseBodyDomainConfigList = BatchSetCdnDomainConfigResponseBodyDomainConfigList;
class DescribeBlockedRegionsResponseBodyInfoListInfoItem extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            continent: 'Continent',
            countriesAndRegions: 'CountriesAndRegions',
            countriesAndRegionsName: 'CountriesAndRegionsName',
        };
    }
    static types() {
        return {
            continent: 'string',
            countriesAndRegions: 'string',
            countriesAndRegionsName: 'string',
        };
    }
}
exports.DescribeBlockedRegionsResponseBodyInfoListInfoItem = DescribeBlockedRegionsResponseBodyInfoListInfoItem;
class DescribeBlockedRegionsResponseBodyInfoList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            infoItem: 'InfoItem',
        };
    }
    static types() {
        return {
            infoItem: { 'type': 'array', 'itemType': DescribeBlockedRegionsResponseBodyInfoListInfoItem },
        };
    }
}
exports.DescribeBlockedRegionsResponseBodyInfoList = DescribeBlockedRegionsResponseBodyInfoList;
class DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certId: 'CertId',
            certName: 'CertName',
            common: 'Common',
            fingerprint: 'Fingerprint',
            issuer: 'Issuer',
            lastTime: 'LastTime',
        };
    }
    static types() {
        return {
            certId: 'number',
            certName: 'string',
            common: 'string',
            fingerprint: 'string',
            issuer: 'string',
            lastTime: 'number',
        };
    }
}
exports.DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert = DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert;
class DescribeCdnCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cert: 'Cert',
        };
    }
    static types() {
        return {
            cert: { 'type': 'array', 'itemType': DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert },
        };
    }
}
exports.DescribeCdnCertificateListResponseBodyCertificateListModelCertList = DescribeCdnCertificateListResponseBodyCertificateListModelCertList;
class DescribeCdnCertificateListResponseBodyCertificateListModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certList: 'CertList',
            count: 'Count',
        };
    }
    static types() {
        return {
            certList: DescribeCdnCertificateListResponseBodyCertificateListModelCertList,
            count: 'number',
        };
    }
}
exports.DescribeCdnCertificateListResponseBodyCertificateListModel = DescribeCdnCertificateListResponseBodyCertificateListModel;
class DescribeCdnDeletedDomainsResponseBodyDomainsPageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            gmtModified: 'GmtModified',
        };
    }
    static types() {
        return {
            domainName: 'string',
            gmtModified: 'string',
        };
    }
}
exports.DescribeCdnDeletedDomainsResponseBodyDomainsPageData = DescribeCdnDeletedDomainsResponseBodyDomainsPageData;
class DescribeCdnDeletedDomainsResponseBodyDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            pageData: 'PageData',
        };
    }
    static types() {
        return {
            pageData: { 'type': 'array', 'itemType': DescribeCdnDeletedDomainsResponseBodyDomainsPageData },
        };
    }
}
exports.DescribeCdnDeletedDomainsResponseBodyDomains = DescribeCdnDeletedDomainsResponseBodyDomains;
class DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certCaIsLegacy: 'CertCaIsLegacy',
            certExpireTime: 'CertExpireTime',
            certExpired: 'CertExpired',
            certStartTime: 'CertStartTime',
            certSubjectCommonName: 'CertSubjectCommonName',
            certType: 'CertType',
            domainList: 'DomainList',
            domainNames: 'DomainNames',
            issuer: 'Issuer',
        };
    }
    static types() {
        return {
            certCaIsLegacy: 'string',
            certExpireTime: 'string',
            certExpired: 'string',
            certStartTime: 'string',
            certSubjectCommonName: 'string',
            certType: 'string',
            domainList: 'string',
            domainNames: 'string',
            issuer: 'string',
        };
    }
}
exports.DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo = DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo;
class DescribeCdnDomainByCertificateResponseBodyCertInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfo: 'CertInfo',
        };
    }
    static types() {
        return {
            certInfo: { 'type': 'array', 'itemType': DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo },
        };
    }
}
exports.DescribeCdnDomainByCertificateResponseBodyCertInfos = DescribeCdnDomainByCertificateResponseBodyCertInfos;
class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            argName: 'ArgName',
            argValue: 'ArgValue',
        };
    }
    static types() {
        return {
            argName: 'string',
            argValue: 'string',
        };
    }
}
exports.DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg = DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg;
class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            functionArg: 'FunctionArg',
        };
    }
    static types() {
        return {
            functionArg: { 'type': 'array', 'itemType': DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
        };
    }
}
exports.DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs = DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            functionArgs: 'FunctionArgs',
            functionName: 'FunctionName',
            status: 'Status',
        };
    }
    static types() {
        return {
            configId: 'string',
            functionArgs: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
            functionName: 'string',
            status: 'string',
        };
    }
}
exports.DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig = DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig;
class DescribeCdnDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainConfig: 'DomainConfig',
        };
    }
    static types() {
        return {
            domainConfig: { 'type': 'array', 'itemType': DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig },
        };
    }
}
exports.DescribeCdnDomainConfigsResponseBodyDomainConfigs = DescribeCdnDomainConfigsResponseBodyDomainConfigs;
class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            enabled: 'Enabled',
            port: 'Port',
            priority: 'Priority',
            type: 'Type',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            content: 'string',
            enabled: 'string',
            port: 'number',
            priority: 'string',
            type: 'string',
            weight: 'string',
        };
    }
}
exports.DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel = DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel;
class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            sourceModel: 'SourceModel',
        };
    }
    static types() {
        return {
            sourceModel: { 'type': 'array', 'itemType': DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel },
        };
    }
}
exports.DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels = DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels;
class DescribeCdnDomainDetailResponseBodyGetDomainDetailModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnType: 'CdnType',
            cname: 'Cname',
            description: 'Description',
            domainName: 'DomainName',
            domainStatus: 'DomainStatus',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            httpsCname: 'HttpsCname',
            resourceGroupId: 'ResourceGroupId',
            scope: 'Scope',
            serverCertificateStatus: 'ServerCertificateStatus',
            sourceModels: 'SourceModels',
        };
    }
    static types() {
        return {
            cdnType: 'string',
            cname: 'string',
            description: 'string',
            domainName: 'string',
            domainStatus: 'string',
            gmtCreated: 'string',
            gmtModified: 'string',
            httpsCname: 'string',
            resourceGroupId: 'string',
            scope: 'string',
            serverCertificateStatus: 'string',
            sourceModels: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels,
        };
    }
}
exports.DescribeCdnDomainDetailResponseBodyGetDomainDetailModel = DescribeCdnDomainDetailResponseBodyGetDomainDetailModel;
class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            logName: 'LogName',
            logPath: 'LogPath',
            logSize: 'LogSize',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            logName: 'string',
            logPath: 'string',
            logSize: 'number',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail = DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail;
class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            logInfoDetail: 'LogInfoDetail',
        };
    }
    static types() {
        return {
            logInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
        };
    }
}
exports.DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos = DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            pageIndex: 'PageIndex',
            pageSize: 'PageSize',
            total: 'Total',
        };
    }
    static types() {
        return {
            pageIndex: 'number',
            pageSize: 'number',
            total: 'number',
        };
    }
}
exports.DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos = DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            logCount: 'LogCount',
            logInfos: 'LogInfos',
            pageInfos: 'PageInfos',
        };
    }
    static types() {
        return {
            domainName: 'string',
            logCount: 'number',
            logInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
            pageInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
        };
    }
}
exports.DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail = DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail;
class DescribeCdnDomainLogsResponseBodyDomainLogDetails extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainLogDetail: 'DomainLogDetail',
        };
    }
    static types() {
        return {
            domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail },
        };
    }
}
exports.DescribeCdnDomainLogsResponseBodyDomainLogDetails = DescribeCdnDomainLogsResponseBodyDomainLogDetails;
class DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            argName: 'ArgName',
            argValue: 'ArgValue',
        };
    }
    static types() {
        return {
            argName: 'string',
            argValue: 'string',
        };
    }
}
exports.DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs = DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs;
class DescribeCdnDomainStagingConfigResponseBodyDomainConfigs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            functionArgs: 'FunctionArgs',
            functionName: 'FunctionName',
            status: 'Status',
        };
    }
    static types() {
        return {
            configId: 'string',
            functionArgs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
            functionName: 'string',
            status: 'string',
        };
    }
}
exports.DescribeCdnDomainStagingConfigResponseBodyDomainConfigs = DescribeCdnDomainStagingConfigResponseBodyDomainConfigs;
class DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certCommonName: 'CertCommonName',
            certExpireTime: 'CertExpireTime',
            certName: 'CertName',
            certStartTime: 'CertStartTime',
            certStatus: 'CertStatus',
            certType: 'CertType',
            certUpdateTime: 'CertUpdateTime',
            domainName: 'DomainName',
        };
    }
    static types() {
        return {
            certCommonName: 'string',
            certExpireTime: 'string',
            certName: 'string',
            certStartTime: 'string',
            certStatus: 'string',
            certType: 'string',
            certUpdateTime: 'string',
            domainName: 'string',
        };
    }
}
exports.DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo = DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo;
class DescribeCdnHttpsDomainListResponseBodyCertInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfo: 'CertInfo',
        };
    }
    static types() {
        return {
            certInfo: { 'type': 'array', 'itemType': DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo },
        };
    }
}
exports.DescribeCdnHttpsDomainListResponseBodyCertInfos = DescribeCdnHttpsDomainListResponseBodyCertInfos;
class DescribeCdnRegionAndIspResponseBodyIspsIsp extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            nameEn: 'NameEn',
            nameZh: 'NameZh',
        };
    }
    static types() {
        return {
            nameEn: 'string',
            nameZh: 'string',
        };
    }
}
exports.DescribeCdnRegionAndIspResponseBodyIspsIsp = DescribeCdnRegionAndIspResponseBodyIspsIsp;
class DescribeCdnRegionAndIspResponseBodyIsps extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            isp: 'Isp',
        };
    }
    static types() {
        return {
            isp: { 'type': 'array', 'itemType': DescribeCdnRegionAndIspResponseBodyIspsIsp },
        };
    }
}
exports.DescribeCdnRegionAndIspResponseBodyIsps = DescribeCdnRegionAndIspResponseBodyIsps;
class DescribeCdnRegionAndIspResponseBodyRegionsRegion extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            nameEn: 'NameEn',
            nameZh: 'NameZh',
        };
    }
    static types() {
        return {
            nameEn: 'string',
            nameZh: 'string',
        };
    }
}
exports.DescribeCdnRegionAndIspResponseBodyRegionsRegion = DescribeCdnRegionAndIspResponseBodyRegionsRegion;
class DescribeCdnRegionAndIspResponseBodyRegions extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            region: 'Region',
        };
    }
    static types() {
        return {
            region: { 'type': 'array', 'itemType': DescribeCdnRegionAndIspResponseBodyRegionsRegion },
        };
    }
}
exports.DescribeCdnRegionAndIspResponseBodyRegions = DescribeCdnRegionAndIspResponseBodyRegions;
class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certIdentifier: 'CertIdentifier',
            certName: 'CertName',
            common: 'Common',
            issuer: 'Issuer',
        };
    }
    static types() {
        return {
            certIdentifier: 'string',
            certName: 'string',
            common: 'string',
            issuer: 'string',
        };
    }
}
exports.DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert = DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert;
class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cert: 'Cert',
        };
    }
    static types() {
        return {
            cert: { 'type': 'array', 'itemType': DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert },
        };
    }
}
exports.DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList = DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList;
class DescribeCdnSMCertificateListResponseBodyCertificateListModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certList: 'CertList',
            count: 'Count',
        };
    }
    static types() {
        return {
            certList: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList,
            count: 'number',
        };
    }
}
exports.DescribeCdnSMCertificateListResponseBodyCertificateListModel = DescribeCdnSMCertificateListResponseBodyCertificateListModel;
class DescribeCdnServiceResponseBodyOperationLocksLockReason extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            lockReason: 'LockReason',
        };
    }
    static types() {
        return {
            lockReason: 'string',
        };
    }
}
exports.DescribeCdnServiceResponseBodyOperationLocksLockReason = DescribeCdnServiceResponseBodyOperationLocksLockReason;
class DescribeCdnServiceResponseBodyOperationLocks extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            lockReason: 'LockReason',
        };
    }
    static types() {
        return {
            lockReason: { 'type': 'array', 'itemType': DescribeCdnServiceResponseBodyOperationLocksLockReason },
        };
    }
}
exports.DescribeCdnServiceResponseBodyOperationLocks = DescribeCdnServiceResponseBodyOperationLocks;
class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bandwidth: 'Bandwidth',
            cdnRegion: 'CdnRegion',
            chargeType: 'ChargeType',
            count: 'Count',
            flow: 'Flow',
        };
    }
    static types() {
        return {
            bandwidth: 'number',
            cdnRegion: 'string',
            chargeType: 'string',
            count: 'number',
            flow: 'number',
        };
    }
}
exports.DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem = DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem;
class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billingDataItem: 'BillingDataItem',
        };
    }
    static types() {
        return {
            billingDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem },
        };
    }
}
exports.DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData = DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData;
class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billTime: 'BillTime',
            billType: 'BillType',
            billingData: 'BillingData',
            dimension: 'Dimension',
        };
    }
    static types() {
        return {
            billTime: 'string',
            billType: 'string',
            billingData: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData,
            dimension: 'string',
        };
    }
}
exports.DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem = DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem;
class DescribeCdnUserBillHistoryResponseBodyBillHistoryData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billHistoryDataItem: 'BillHistoryDataItem',
        };
    }
    static types() {
        return {
            billHistoryDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem },
        };
    }
}
exports.DescribeCdnUserBillHistoryResponseBodyBillHistoryData = DescribeCdnUserBillHistoryResponseBodyBillHistoryData;
class DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            area: 'Area',
            timeStp: 'TimeStp',
            value: 'Value',
        };
    }
    static types() {
        return {
            area: 'string',
            timeStp: 'string',
            value: 'number',
        };
    }
}
exports.DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem = DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem;
class DescribeCdnUserBillPredictionResponseBodyBillPredictionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billPredictionDataItem: 'BillPredictionDataItem',
        };
    }
    static types() {
        return {
            billPredictionDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem },
        };
    }
}
exports.DescribeCdnUserBillPredictionResponseBodyBillPredictionData = DescribeCdnUserBillPredictionResponseBodyBillPredictionData;
class DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billType: 'BillType',
            billingCycle: 'BillingCycle',
            dimension: 'Dimension',
            endTime: 'EndTime',
            product: 'Product',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            billType: 'string',
            billingCycle: 'string',
            dimension: 'string',
            endTime: 'string',
            product: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem = DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem;
class DescribeCdnUserBillTypeResponseBodyBillTypeData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            billTypeDataItem: 'BillTypeDataItem',
        };
    }
    static types() {
        return {
            billTypeDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
        };
    }
}
exports.DescribeCdnUserBillTypeResponseBodyBillTypeData = DescribeCdnUserBillTypeResponseBodyBillTypeData;
class DescribeCdnUserConfigsResponseBodyConfigs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            argName: 'ArgName',
            argValue: 'ArgValue',
            functionName: 'FunctionName',
        };
    }
    static types() {
        return {
            argName: 'string',
            argValue: 'string',
            functionName: 'string',
        };
    }
}
exports.DescribeCdnUserConfigsResponseBodyConfigs = DescribeCdnUserConfigsResponseBodyConfigs;
class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            port: 'Port',
            priority: 'Priority',
            type: 'Type',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            content: 'string',
            port: 'number',
            priority: 'string',
            type: 'string',
            weight: 'string',
        };
    }
}
exports.DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource = DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource;
class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            source: 'Source',
        };
    }
    static types() {
        return {
            source: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource },
        };
    }
}
exports.DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources = DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources;
class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnType: 'CdnType',
            cname: 'Cname',
            description: 'Description',
            domainName: 'DomainName',
            domainStatus: 'DomainStatus',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            resourceGroupId: 'ResourceGroupId',
            sources: 'Sources',
            sslProtocol: 'SslProtocol',
        };
    }
    static types() {
        return {
            cdnType: 'string',
            cname: 'string',
            description: 'string',
            domainName: 'string',
            domainStatus: 'string',
            gmtCreated: 'string',
            gmtModified: 'string',
            resourceGroupId: 'string',
            sources: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources,
            sslProtocol: 'string',
        };
    }
}
exports.DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData = DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData;
class DescribeCdnUserDomainsByFuncResponseBodyDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            pageData: 'PageData',
        };
    }
    static types() {
        return {
            pageData: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData },
        };
    }
}
exports.DescribeCdnUserDomainsByFuncResponseBodyDomains = DescribeCdnUserDomainsByFuncResponseBodyDomains;
class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            commodityCode: 'CommodityCode',
            currCapacity: 'CurrCapacity',
            displayName: 'DisplayName',
            endTime: 'EndTime',
            initCapacity: 'InitCapacity',
            instanceId: 'InstanceId',
            startTime: 'StartTime',
            status: 'Status',
            templateName: 'TemplateName',
        };
    }
    static types() {
        return {
            commodityCode: 'string',
            currCapacity: 'string',
            displayName: 'string',
            endTime: 'string',
            initCapacity: 'string',
            instanceId: 'string',
            startTime: 'string',
            status: 'string',
            templateName: 'string',
        };
    }
}
exports.DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo = DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo;
class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            resourcePackageInfo: 'ResourcePackageInfo',
        };
    }
    static types() {
        return {
            resourcePackageInfo: { 'type': 'array', 'itemType': DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
        };
    }
}
exports.DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos = DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos;
class DescribeCdnWafDomainResponseBodyOutPutDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            aclStatus: 'AclStatus',
            ccStatus: 'CcStatus',
            domain: 'Domain',
            status: 'Status',
            wafStatus: 'WafStatus',
        };
    }
    static types() {
        return {
            aclStatus: 'string',
            ccStatus: 'string',
            domain: 'string',
            status: 'string',
            wafStatus: 'string',
        };
    }
}
exports.DescribeCdnWafDomainResponseBodyOutPutDomains = DescribeCdnWafDomainResponseBodyOutPutDomains;
class DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certExpireTime: 'CertExpireTime',
            certId: 'CertId',
            certName: 'CertName',
            certType: 'CertType',
            createTime: 'CreateTime',
            domainList: 'DomainList',
            httpsCrt: 'HttpsCrt',
        };
    }
    static types() {
        return {
            certExpireTime: 'string',
            certId: 'string',
            certName: 'string',
            certType: 'string',
            createTime: 'string',
            domainList: 'string',
            httpsCrt: 'string',
        };
    }
}
exports.DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo = DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo;
class DescribeCertificateInfoByIDResponseBodyCertInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfo: 'CertInfo',
        };
    }
    static types() {
        return {
            certInfo: { 'type': 'array', 'itemType': DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo },
        };
    }
}
exports.DescribeCertificateInfoByIDResponseBodyCertInfos = DescribeCertificateInfoByIDResponseBodyCertInfos;
class DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            argName: 'ArgName',
            argValue: 'ArgValue',
        };
    }
    static types() {
        return {
            argName: 'string',
            argValue: 'string',
        };
    }
}
exports.DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg = DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg;
class DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            functionArg: 'FunctionArg',
        };
    }
    static types() {
        return {
            functionArg: { 'type': 'array', 'itemType': DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg },
        };
    }
}
exports.DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs = DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs;
class DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfig extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
            functionArgs: 'FunctionArgs',
            functionName: 'FunctionName',
            status: 'Status',
        };
    }
    static types() {
        return {
            configId: 'string',
            functionArgs: DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs,
            functionName: 'string',
            status: 'string',
        };
    }
}
exports.DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfig = DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfig;
class DescribeConfigOfVersionResponseBodyVersionConfigs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            versionConfig: 'VersionConfig',
        };
    }
    static types() {
        return {
            versionConfig: { 'type': 'array', 'itemType': DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfig },
        };
    }
}
exports.DescribeConfigOfVersionResponseBodyVersionConfigs = DescribeConfigOfVersionResponseBodyVersionConfigs;
class DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule = DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule;
class DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval = DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval;
class DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domesticValue: 'DomesticValue',
            httpsDomesticValue: 'HttpsDomesticValue',
            httpsOverseasValue: 'HttpsOverseasValue',
            httpsValue: 'HttpsValue',
            overseasValue: 'OverseasValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            domesticValue: 'string',
            httpsDomesticValue: 'string',
            httpsOverseasValue: 'string',
            httpsValue: 'string',
            overseasValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule = DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule;
class DescribeDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainBpsDataResponseBodyBpsDataPerInterval = DescribeDomainBpsDataResponseBodyBpsDataPerInterval;
class DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            trafficValue: 'TrafficValue',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            trafficValue: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule = DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule;
class DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule },
        };
    }
}
exports.DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval = DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval;
class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bps: 'Bps',
            ispName: 'IspName',
            locationName: 'LocationName',
            timeStamp: 'TimeStamp',
        };
    }
    static types() {
        return {
            bps: 'number',
            ispName: 'string',
            locationName: 'string',
            timeStamp: 'string',
        };
    }
}
exports.DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel = DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel;
class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bpsDataModel: 'BpsDataModel',
        };
    }
    static types() {
        return {
            bpsDataModel: { 'type': 'array', 'itemType': DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel },
        };
    }
}
exports.DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList = DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList;
class DescribeDomainCcActivityLogResponseBodyActivityLog extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            action: 'Action',
            domainName: 'DomainName',
            ruleName: 'RuleName',
            timeStamp: 'TimeStamp',
            triggerObject: 'TriggerObject',
            ttl: 'Ttl',
            value: 'Value',
        };
    }
    static types() {
        return {
            action: 'string',
            domainName: 'string',
            ruleName: 'string',
            timeStamp: 'string',
            triggerObject: 'string',
            ttl: 'number',
            value: 'string',
        };
    }
}
exports.DescribeDomainCcActivityLogResponseBodyActivityLog = DescribeDomainCcActivityLogResponseBodyActivityLog;
class DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certDomainName: 'CertDomainName',
            certExpireTime: 'CertExpireTime',
            certLife: 'CertLife',
            certName: 'CertName',
            certOrg: 'CertOrg',
            certStartTime: 'CertStartTime',
            certType: 'CertType',
            certUpdateTime: 'CertUpdateTime',
            domainCnameStatus: 'DomainCnameStatus',
            domainName: 'DomainName',
            serverCertificate: 'ServerCertificate',
            serverCertificateStatus: 'ServerCertificateStatus',
            status: 'Status',
        };
    }
    static types() {
        return {
            certDomainName: 'string',
            certExpireTime: 'string',
            certLife: 'string',
            certName: 'string',
            certOrg: 'string',
            certStartTime: 'string',
            certType: 'string',
            certUpdateTime: 'string',
            domainCnameStatus: 'string',
            domainName: 'string',
            serverCertificate: 'string',
            serverCertificateStatus: 'string',
            status: 'string',
        };
    }
}
exports.DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo = DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo;
class DescribeDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            certInfo: 'CertInfo',
        };
    }
    static types() {
        return {
            certInfo: { 'type': 'array', 'itemType': DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo },
        };
    }
}
exports.DescribeDomainCertificateInfoResponseBodyCertInfos = DescribeDomainCertificateInfoResponseBodyCertInfos;
class DescribeDomainDetailDataByLayerResponseBodyDataDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            acc: 'Acc',
            bps: 'Bps',
            domainName: 'DomainName',
            httpCode: 'HttpCode',
            ipv6Acc: 'Ipv6Acc',
            ipv6Bps: 'Ipv6Bps',
            ipv6Qps: 'Ipv6Qps',
            ipv6Traf: 'Ipv6Traf',
            qps: 'Qps',
            timeStamp: 'TimeStamp',
            traf: 'Traf',
        };
    }
    static types() {
        return {
            acc: 'number',
            bps: 'number',
            domainName: 'string',
            httpCode: 'string',
            ipv6Acc: 'number',
            ipv6Bps: 'number',
            ipv6Qps: 'number',
            ipv6Traf: 'number',
            qps: 'number',
            timeStamp: 'string',
            traf: 'number',
        };
    }
}
exports.DescribeDomainDetailDataByLayerResponseBodyDataDataModule = DescribeDomainDetailDataByLayerResponseBodyDataDataModule;
class DescribeDomainDetailDataByLayerResponseBodyData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainDetailDataByLayerResponseBodyDataDataModule },
        };
    }
}
exports.DescribeDomainDetailDataByLayerResponseBodyData = DescribeDomainDetailDataByLayerResponseBodyData;
class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            fileSize: 'FileSize',
            proportion: 'Proportion',
        };
    }
    static types() {
        return {
            fileSize: 'string',
            proportion: 'string',
        };
    }
}
exports.DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData = DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData;
class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            fileSizeProportionData: 'FileSizeProportionData',
        };
    }
    static types() {
        return {
            fileSizeProportionData: { 'type': 'array', 'itemType': DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData },
        };
    }
}
exports.DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue = DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue;
class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue,
        };
    }
}
exports.DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData = DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData;
class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData },
        };
    }
}
exports.DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval = DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval;
class DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            httpsValue: 'HttpsValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            httpsValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule = DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule;
class DescribeDomainHitRateDataResponseBodyHitRateInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule },
        };
    }
}
exports.DescribeDomainHitRateDataResponseBodyHitRateInterval = DescribeDomainHitRateDataResponseBodyHitRateInterval;
class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            code: 'Code',
            count: 'Count',
            proportion: 'Proportion',
        };
    }
    static types() {
        return {
            code: 'string',
            count: 'string',
            proportion: 'string',
        };
    }
}
exports.DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData = DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData;
class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            codeProportionData: 'CodeProportionData',
        };
    }
    static types() {
        return {
            codeProportionData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
        };
    }
}
exports.DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue = DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
        };
    }
}
exports.DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData = DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData;
class DescribeDomainHttpCodeDataResponseBodyHttpCodeData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData },
        };
    }
}
exports.DescribeDomainHttpCodeDataResponseBodyHttpCodeData = DescribeDomainHttpCodeDataResponseBodyHttpCodeData;
class DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            totalValue: 'TotalValue',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            totalValue: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule = DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule;
class DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule },
        };
    }
}
exports.DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval = DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval;
class DescribeDomainISPDataResponseBodyValueISPProportionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            avgObjectSize: 'AvgObjectSize',
            avgResponseRate: 'AvgResponseRate',
            avgResponseTime: 'AvgResponseTime',
            bps: 'Bps',
            bytesProportion: 'BytesProportion',
            ISP: 'ISP',
            ispEname: 'IspEname',
            proportion: 'Proportion',
            qps: 'Qps',
            reqErrRate: 'ReqErrRate',
            totalBytes: 'TotalBytes',
            totalQuery: 'TotalQuery',
        };
    }
    static types() {
        return {
            avgObjectSize: 'string',
            avgResponseRate: 'string',
            avgResponseTime: 'string',
            bps: 'string',
            bytesProportion: 'string',
            ISP: 'string',
            ispEname: 'string',
            proportion: 'string',
            qps: 'string',
            reqErrRate: 'string',
            totalBytes: 'string',
            totalQuery: 'string',
        };
    }
}
exports.DescribeDomainISPDataResponseBodyValueISPProportionData = DescribeDomainISPDataResponseBodyValueISPProportionData;
class DescribeDomainISPDataResponseBodyValue extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ISPProportionData: 'ISPProportionData',
        };
    }
    static types() {
        return {
            ISPProportionData: { 'type': 'array', 'itemType': DescribeDomainISPDataResponseBodyValueISPProportionData },
        };
    }
}
exports.DescribeDomainISPDataResponseBodyValue = DescribeDomainISPDataResponseBodyValue;
class DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
            request: 'Request',
            timeStamp: 'TimeStamp',
            type: 'Type',
        };
    }
    static types() {
        return {
            domain: 'string',
            request: 'number',
            timeStamp: 'string',
            type: 'string',
        };
    }
}
exports.DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule = DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule;
class DescribeDomainMultiUsageDataResponseBodyRequestPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            requestDataModule: 'RequestDataModule',
        };
    }
    static types() {
        return {
            requestDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule },
        };
    }
}
exports.DescribeDomainMultiUsageDataResponseBodyRequestPerInterval = DescribeDomainMultiUsageDataResponseBodyRequestPerInterval;
class DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            area: 'Area',
            bps: 'Bps',
            domain: 'Domain',
            timeStamp: 'TimeStamp',
            type: 'Type',
        };
    }
    static types() {
        return {
            area: 'string',
            bps: 'number',
            domain: 'string',
            timeStamp: 'string',
            type: 'string',
        };
    }
}
exports.DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule = DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule;
class DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            trafficDataModule: 'TrafficDataModule',
        };
    }
    static types() {
        return {
            trafficDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule },
        };
    }
}
exports.DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval = DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval;
class DescribeDomainNamesOfVersionResponseBodyContents extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainId: 'DomainId',
            domainName: 'DomainName',
        };
    }
    static types() {
        return {
            domainId: 'string',
            domainName: 'string',
        };
    }
}
exports.DescribeDomainNamesOfVersionResponseBodyContents = DescribeDomainNamesOfVersionResponseBodyContents;
class DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            acc: 'Acc',
            path: 'Path',
            time: 'Time',
            traffic: 'Traffic',
        };
    }
    static types() {
        return {
            acc: 'number',
            path: 'string',
            time: 'string',
            traffic: 'number',
        };
    }
}
exports.DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData = DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData;
class DescribeDomainPathDataResponseBodyPathDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData },
        };
    }
}
exports.DescribeDomainPathDataResponseBodyPathDataPerInterval = DescribeDomainPathDataResponseBodyPathDataPerInterval;
class DescribeDomainPvDataResponseBodyPvDataIntervalUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainPvDataResponseBodyPvDataIntervalUsageData = DescribeDomainPvDataResponseBodyPvDataIntervalUsageData;
class DescribeDomainPvDataResponseBodyPvDataInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainPvDataResponseBodyPvDataIntervalUsageData },
        };
    }
}
exports.DescribeDomainPvDataResponseBodyPvDataInterval = DescribeDomainPvDataResponseBodyPvDataInterval;
class DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            accDomesticValue: 'AccDomesticValue',
            accOverseasValue: 'AccOverseasValue',
            accValue: 'AccValue',
            domesticValue: 'DomesticValue',
            httpsAccDomesticValue: 'HttpsAccDomesticValue',
            httpsAccOverseasValue: 'HttpsAccOverseasValue',
            httpsAccValue: 'HttpsAccValue',
            httpsDomesticValue: 'HttpsDomesticValue',
            httpsOverseasValue: 'HttpsOverseasValue',
            httpsValue: 'HttpsValue',
            overseasValue: 'OverseasValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            accDomesticValue: 'string',
            accOverseasValue: 'string',
            accValue: 'string',
            domesticValue: 'string',
            httpsAccDomesticValue: 'string',
            httpsAccOverseasValue: 'string',
            httpsAccValue: 'string',
            httpsDomesticValue: 'string',
            httpsOverseasValue: 'string',
            httpsValue: 'string',
            overseasValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule = DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule;
class DescribeDomainQpsDataResponseBodyQpsDataInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule },
        };
    }
}
exports.DescribeDomainQpsDataResponseBodyQpsDataInterval = DescribeDomainQpsDataResponseBodyQpsDataInterval;
class DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            accDomesticValue: 'AccDomesticValue',
            accOverseasValue: 'AccOverseasValue',
            accValue: 'AccValue',
            domesticValue: 'DomesticValue',
            overseasValue: 'OverseasValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            accDomesticValue: 'string',
            accOverseasValue: 'string',
            accValue: 'string',
            domesticValue: 'string',
            overseasValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule = DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule;
class DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule },
        };
    }
}
exports.DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval = DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval;
class DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bps: 'Bps',
            timeStamp: 'TimeStamp',
        };
    }
    static types() {
        return {
            bps: 'number',
            timeStamp: 'string',
        };
    }
}
exports.DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel = DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel;
class DescribeDomainRealTimeBpsDataResponseBodyData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bpsModel: 'BpsModel',
        };
    }
    static types() {
        return {
            bpsModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel },
        };
    }
}
exports.DescribeDomainRealTimeBpsDataResponseBodyData = DescribeDomainRealTimeBpsDataResponseBodyData;
class DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            byteHitRate: 'ByteHitRate',
            timeStamp: 'TimeStamp',
        };
    }
    static types() {
        return {
            byteHitRate: 'number',
            timeStamp: 'string',
        };
    }
}
exports.DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel = DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel;
class DescribeDomainRealTimeByteHitRateDataResponseBodyData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            byteHitRateDataModel: 'ByteHitRateDataModel',
        };
    }
    static types() {
        return {
            byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
        };
    }
}
exports.DescribeDomainRealTimeByteHitRateDataResponseBodyData = DescribeDomainRealTimeByteHitRateDataResponseBodyData;
class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            code: 'Code',
            count: 'Count',
            proportion: 'Proportion',
        };
    }
    static types() {
        return {
            code: 'string',
            count: 'string',
            proportion: 'string',
        };
    }
}
exports.DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData = DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData;
class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            realTimeCodeProportionData: 'RealTimeCodeProportionData',
        };
    }
    static types() {
        return {
            realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
        };
    }
}
exports.DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue = DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
        };
    }
}
exports.DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData = DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData;
class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData },
        };
    }
}
exports.DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData = DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
class DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            qps: 'Qps',
            timeStamp: 'TimeStamp',
        };
    }
    static types() {
        return {
            qps: 'number',
            timeStamp: 'string',
        };
    }
}
exports.DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel = DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel;
class DescribeDomainRealTimeQpsDataResponseBodyData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            qpsModel: 'QpsModel',
        };
    }
    static types() {
        return {
            qpsModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel },
        };
    }
}
exports.DescribeDomainRealTimeQpsDataResponseBodyData = DescribeDomainRealTimeQpsDataResponseBodyData;
class DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            reqHitRate: 'ReqHitRate',
            timeStamp: 'TimeStamp',
        };
    }
    static types() {
        return {
            reqHitRate: 'number',
            timeStamp: 'string',
        };
    }
}
exports.DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel = DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel;
class DescribeDomainRealTimeReqHitRateDataResponseBodyData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            reqHitRateDataModel: 'ReqHitRateDataModel',
        };
    }
    static types() {
        return {
            reqHitRateDataModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel },
        };
    }
}
exports.DescribeDomainRealTimeReqHitRateDataResponseBodyData = DescribeDomainRealTimeReqHitRateDataResponseBodyData;
class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule = DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule;
class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval = DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval;
class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            code: 'Code',
            count: 'Count',
            proportion: 'Proportion',
        };
    }
    static types() {
        return {
            code: 'string',
            count: 'string',
            proportion: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData = DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData;
class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            realTimeSrcCodeProportionData: 'RealTimeSrcCodeProportionData',
        };
    }
    static types() {
        return {
            realTimeSrcCodeProportionData: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData },
        };
    }
}
exports.DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue = DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue;
class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue,
        };
    }
}
exports.DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData = DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData;
class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData },
        };
    }
}
exports.DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData = DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData;
class DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule = DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule;
class DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval = DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval;
class DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule = DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule;
class DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval = DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
class DescribeDomainRegionDataResponseBodyValueRegionProportionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            avgObjectSize: 'AvgObjectSize',
            avgResponseRate: 'AvgResponseRate',
            avgResponseTime: 'AvgResponseTime',
            bps: 'Bps',
            bytesProportion: 'BytesProportion',
            proportion: 'Proportion',
            qps: 'Qps',
            region: 'Region',
            regionEname: 'RegionEname',
            reqErrRate: 'ReqErrRate',
            totalBytes: 'TotalBytes',
            totalQuery: 'TotalQuery',
        };
    }
    static types() {
        return {
            avgObjectSize: 'string',
            avgResponseRate: 'string',
            avgResponseTime: 'string',
            bps: 'string',
            bytesProportion: 'string',
            proportion: 'string',
            qps: 'string',
            region: 'string',
            regionEname: 'string',
            reqErrRate: 'string',
            totalBytes: 'string',
            totalQuery: 'string',
        };
    }
}
exports.DescribeDomainRegionDataResponseBodyValueRegionProportionData = DescribeDomainRegionDataResponseBodyValueRegionProportionData;
class DescribeDomainRegionDataResponseBodyValue extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            regionProportionData: 'RegionProportionData',
        };
    }
    static types() {
        return {
            regionProportionData: { 'type': 'array', 'itemType': DescribeDomainRegionDataResponseBodyValueRegionProportionData },
        };
    }
}
exports.DescribeDomainRegionDataResponseBodyValue = DescribeDomainRegionDataResponseBodyValue;
class DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            httpsValue: 'HttpsValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            httpsValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule = DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule;
class DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule },
        };
    }
}
exports.DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval = DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval;
class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            httpsValue: 'HttpsValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            httpsValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule = DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule;
class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval = DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval;
class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            code: 'Code',
            count: 'Count',
            proportion: 'Proportion',
        };
    }
    static types() {
        return {
            code: 'string',
            count: 'string',
            proportion: 'string',
        };
    }
}
exports.DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData = DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData;
class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            codeProportionData: 'CodeProportionData',
        };
    }
    static types() {
        return {
            codeProportionData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
        };
    }
}
exports.DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue = DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
        };
    }
}
exports.DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData = DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData;
class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData },
        };
    }
}
exports.DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData = DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData;
class DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule = DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule;
class DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval = DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval;
class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList = DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList;
class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList },
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList = DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList = DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl200List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList },
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl200List = DescribeDomainSrcTopUrlVisitResponseBodyUrl200List;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList = DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl300List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList },
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl300List = DescribeDomainSrcTopUrlVisitResponseBodyUrl300List;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList = DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl400List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList },
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl400List = DescribeDomainSrcTopUrlVisitResponseBodyUrl400List;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList = DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList;
class DescribeDomainSrcTopUrlVisitResponseBodyUrl500List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList },
        };
    }
}
exports.DescribeDomainSrcTopUrlVisitResponseBodyUrl500List = DescribeDomainSrcTopUrlVisitResponseBodyUrl500List;
class DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            httpsValue: 'HttpsValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            httpsValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule = DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule;
class DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval = DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval;
class DescribeDomainTopClientIpVisitResponseBodyClientIpList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            acc: 'Acc',
            clientIp: 'ClientIp',
            rank: 'Rank',
            traffic: 'Traffic',
        };
    }
    static types() {
        return {
            acc: 'number',
            clientIp: 'string',
            rank: 'number',
            traffic: 'number',
        };
    }
}
exports.DescribeDomainTopClientIpVisitResponseBodyClientIpList = DescribeDomainTopClientIpVisitResponseBodyClientIpList;
class DescribeDomainTopReferVisitResponseBodyTopReferListReferList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            referDetail: 'ReferDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            referDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainTopReferVisitResponseBodyTopReferListReferList = DescribeDomainTopReferVisitResponseBodyTopReferListReferList;
class DescribeDomainTopReferVisitResponseBodyTopReferList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            referList: 'ReferList',
        };
    }
    static types() {
        return {
            referList: { 'type': 'array', 'itemType': DescribeDomainTopReferVisitResponseBodyTopReferListReferList },
        };
    }
}
exports.DescribeDomainTopReferVisitResponseBodyTopReferList = DescribeDomainTopReferVisitResponseBodyTopReferList;
class DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList = DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList;
class DescribeDomainTopUrlVisitResponseBodyAllUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList },
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyAllUrlList = DescribeDomainTopUrlVisitResponseBodyAllUrlList;
class DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList = DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList;
class DescribeDomainTopUrlVisitResponseBodyUrl200List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList },
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl200List = DescribeDomainTopUrlVisitResponseBodyUrl200List;
class DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList = DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList;
class DescribeDomainTopUrlVisitResponseBodyUrl300List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList },
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl300List = DescribeDomainTopUrlVisitResponseBodyUrl300List;
class DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList = DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList;
class DescribeDomainTopUrlVisitResponseBodyUrl400List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList },
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl400List = DescribeDomainTopUrlVisitResponseBodyUrl400List;
class DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            flow: 'Flow',
            flowProportion: 'FlowProportion',
            urlDetail: 'UrlDetail',
            visitData: 'VisitData',
            visitProportion: 'VisitProportion',
        };
    }
    static types() {
        return {
            flow: 'string',
            flowProportion: 'number',
            urlDetail: 'string',
            visitData: 'string',
            visitProportion: 'number',
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList = DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList;
class DescribeDomainTopUrlVisitResponseBodyUrl500List extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlList: 'UrlList',
        };
    }
    static types() {
        return {
            urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList },
        };
    }
}
exports.DescribeDomainTopUrlVisitResponseBodyUrl500List = DescribeDomainTopUrlVisitResponseBodyUrl500List;
class DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domesticValue: 'DomesticValue',
            httpsDomesticValue: 'HttpsDomesticValue',
            httpsOverseasValue: 'HttpsOverseasValue',
            httpsValue: 'HttpsValue',
            overseasValue: 'OverseasValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            domesticValue: 'string',
            httpsDomesticValue: 'string',
            httpsOverseasValue: 'string',
            httpsValue: 'string',
            overseasValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule = DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule;
class DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval = DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval;
class DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            peakTime: 'PeakTime',
            specialValue: 'SpecialValue',
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            peakTime: 'string',
            specialValue: 'string',
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule = DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule;
class DescribeDomainUsageDataResponseBodyUsageDataPerInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataModule: 'DataModule',
        };
    }
    static types() {
        return {
            dataModule: { 'type': 'array', 'itemType': DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule },
        };
    }
}
exports.DescribeDomainUsageDataResponseBodyUsageDataPerInterval = DescribeDomainUsageDataResponseBodyUsageDataPerInterval;
class DescribeDomainUvDataResponseBodyUvDataIntervalUsageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            timeStamp: 'TimeStamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timeStamp: 'string',
            value: 'string',
        };
    }
}
exports.DescribeDomainUvDataResponseBodyUvDataIntervalUsageData = DescribeDomainUvDataResponseBodyUvDataIntervalUsageData;
class DescribeDomainUvDataResponseBodyUvDataInterval extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageData: 'UsageData',
        };
    }
    static types() {
        return {
            usageData: { 'type': 'array', 'itemType': DescribeDomainUvDataResponseBodyUvDataIntervalUsageData },
        };
    }
}
exports.DescribeDomainUvDataResponseBodyUvDataInterval = DescribeDomainUvDataResponseBodyUvDataInterval;
class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnType: 'CdnType',
            createTime: 'CreateTime',
            domainCname: 'DomainCname',
            domainName: 'DomainName',
            status: 'Status',
            updateTime: 'UpdateTime',
        };
    }
    static types() {
        return {
            cdnType: 'string',
            createTime: 'string',
            domainCname: 'string',
            domainName: 'string',
            status: 'string',
            updateTime: 'string',
        };
    }
}
exports.DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo = DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo;
class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainInfo: 'domainInfo',
        };
    }
    static types() {
        return {
            domainInfo: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo },
        };
    }
}
exports.DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos = DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos;
class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainNames: 'domainNames',
        };
    }
    static types() {
        return {
            domainNames: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains = DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains;
class DescribeDomainsBySourceResponseBodyDomainsListDomainsData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainInfos: 'DomainInfos',
            domains: 'Domains',
            source: 'Source',
        };
    }
    static types() {
        return {
            domainInfos: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos,
            domains: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains,
            source: 'string',
        };
    }
}
exports.DescribeDomainsBySourceResponseBodyDomainsListDomainsData = DescribeDomainsBySourceResponseBodyDomainsListDomainsData;
class DescribeDomainsBySourceResponseBodyDomainsList extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainsData: 'DomainsData',
        };
    }
    static types() {
        return {
            domainsData: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsData },
        };
    }
}
exports.DescribeDomainsBySourceResponseBodyDomainsList = DescribeDomainsBySourceResponseBodyDomainsList;
class DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bytesHitRate: 'BytesHitRate',
            maxBps: 'MaxBps',
            maxBpsTime: 'MaxBpsTime',
            maxSrcBps: 'MaxSrcBps',
            maxSrcBpsTime: 'MaxSrcBpsTime',
            qps: 'Qps',
            requestHitRate: 'RequestHitRate',
            timeStamp: 'TimeStamp',
            totalAccess: 'TotalAccess',
            totalTraffic: 'TotalTraffic',
        };
    }
    static types() {
        return {
            bytesHitRate: 'string',
            maxBps: 'string',
            maxBpsTime: 'string',
            maxSrcBps: 'string',
            maxSrcBpsTime: 'string',
            qps: 'string',
            requestHitRate: 'string',
            timeStamp: 'string',
            totalAccess: 'string',
            totalTraffic: 'string',
        };
    }
}
exports.DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay = DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay;
class DescribeDomainsUsageByDayResponseBodyUsageByDays extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            usageByDay: 'UsageByDay',
        };
    }
    static types() {
        return {
            usageByDay: { 'type': 'array', 'itemType': DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay },
        };
    }
}
exports.DescribeDomainsUsageByDayResponseBodyUsageByDays = DescribeDomainsUsageByDayResponseBodyUsageByDays;
class DescribeDomainsUsageByDayResponseBodyUsageTotal extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bytesHitRate: 'BytesHitRate',
            maxBps: 'MaxBps',
            maxBpsTime: 'MaxBpsTime',
            maxSrcBps: 'MaxSrcBps',
            maxSrcBpsTime: 'MaxSrcBpsTime',
            requestHitRate: 'RequestHitRate',
            totalAccess: 'TotalAccess',
            totalTraffic: 'TotalTraffic',
        };
    }
    static types() {
        return {
            bytesHitRate: 'string',
            maxBps: 'string',
            maxBpsTime: 'string',
            maxSrcBps: 'string',
            maxSrcBpsTime: 'string',
            requestHitRate: 'string',
            totalAccess: 'string',
            totalTraffic: 'string',
        };
    }
}
exports.DescribeDomainsUsageByDayResponseBodyUsageTotal = DescribeDomainsUsageByDayResponseBodyUsageTotal;
class DescribeEsExceptionDataResponseBodyContents extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            columns: 'Columns',
            name: 'Name',
            points: 'Points',
        };
    }
    static types() {
        return {
            columns: { 'type': 'array', 'itemType': 'string' },
            name: 'string',
            points: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.DescribeEsExceptionDataResponseBodyContents = DescribeEsExceptionDataResponseBodyContents;
class DescribeEsExecuteDataResponseBodyContents extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            columns: 'Columns',
            name: 'Name',
            points: 'Points',
        };
    }
    static types() {
        return {
            columns: { 'type': 'array', 'itemType': 'string' },
            name: 'string',
            points: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.DescribeEsExecuteDataResponseBodyContents = DescribeEsExecuteDataResponseBodyContents;
class DescribeFCTriggerResponseBodyFCTrigger extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            eventMetaName: 'EventMetaName',
            eventMetaVersion: 'EventMetaVersion',
            notes: 'Notes',
            roleARN: 'RoleARN',
            sourceArn: 'SourceArn',
            triggerARN: 'TriggerARN',
        };
    }
    static types() {
        return {
            eventMetaName: 'string',
            eventMetaVersion: 'string',
            notes: 'string',
            roleARN: 'string',
            sourceArn: 'string',
            triggerARN: 'string',
        };
    }
}
exports.DescribeFCTriggerResponseBodyFCTrigger = DescribeFCTriggerResponseBodyFCTrigger;
class DescribeIpStatusResponseBodyIpStatus extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ip: 'ip',
            status: 'status',
        };
    }
    static types() {
        return {
            ip: 'string',
            status: 'string',
        };
    }
}
exports.DescribeIpStatusResponseBodyIpStatus = DescribeIpStatusResponseBodyIpStatus;
class DescribeL2VipsByDomainResponseBodyVips extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            vip: 'Vip',
        };
    }
    static types() {
        return {
            vip: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.DescribeL2VipsByDomainResponseBodyVips = DescribeL2VipsByDomainResponseBodyVips;
class DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            failedNum: 'FailedNum',
            successNum: 'SuccessNum',
            timeStamp: 'TimeStamp',
        };
    }
    static types() {
        return {
            failedNum: 'number',
            successNum: 'number',
            timeStamp: 'string',
        };
    }
}
exports.DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData = DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData;
class DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            accData: 'AccData',
        };
    }
    static types() {
        return {
            accData: { 'type': 'array', 'itemType': DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData },
        };
    }
}
exports.DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData = DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData;
class DescribeRefreshTaskByIdResponseBodyTasks extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            creationTime: 'CreationTime',
            description: 'Description',
            objectPath: 'ObjectPath',
            objectType: 'ObjectType',
            process: 'Process',
            status: 'Status',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            creationTime: 'string',
            description: 'string',
            objectPath: 'string',
            objectType: 'string',
            process: 'string',
            status: 'string',
            taskId: 'string',
        };
    }
}
exports.DescribeRefreshTaskByIdResponseBodyTasks = DescribeRefreshTaskByIdResponseBodyTasks;
class DescribeRefreshTasksResponseBodyTasksCDNTask extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            creationTime: 'CreationTime',
            description: 'Description',
            objectPath: 'ObjectPath',
            objectType: 'ObjectType',
            process: 'Process',
            status: 'Status',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            creationTime: 'string',
            description: 'string',
            objectPath: 'string',
            objectType: 'string',
            process: 'string',
            status: 'string',
            taskId: 'string',
        };
    }
}
exports.DescribeRefreshTasksResponseBodyTasksCDNTask = DescribeRefreshTasksResponseBodyTasksCDNTask;
class DescribeRefreshTasksResponseBodyTasks extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            CDNTask: 'CDNTask',
        };
    }
    static types() {
        return {
            CDNTask: { 'type': 'array', 'itemType': DescribeRefreshTasksResponseBodyTasksCDNTask },
        };
    }
}
exports.DescribeRefreshTasksResponseBodyTasks = DescribeRefreshTasksResponseBodyTasks;
class DescribeStagingIpResponseBodyIPV4s extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            IPV4: 'IPV4',
        };
    }
    static types() {
        return {
            IPV4: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.DescribeStagingIpResponseBodyIPV4s = DescribeStagingIpResponseBodyIPV4s;
class DescribeTagResourcesRequestTag extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
}
exports.DescribeTagResourcesRequestTag = DescribeTagResourcesRequestTag;
class DescribeTagResourcesResponseBodyTagResourcesTag extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
}
exports.DescribeTagResourcesResponseBodyTagResourcesTag = DescribeTagResourcesResponseBodyTagResourcesTag;
class DescribeTagResourcesResponseBodyTagResources extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            resourceId: 'ResourceId',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            resourceId: 'string',
            tag: { 'type': 'array', 'itemType': DescribeTagResourcesResponseBodyTagResourcesTag },
        };
    }
}
exports.DescribeTagResourcesResponseBodyTagResources = DescribeTagResourcesResponseBodyTagResources;
class DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            maxBps: 'MaxBps',
            maxBpsTime: 'MaxBpsTime',
            rank: 'Rank',
            totalAccess: 'TotalAccess',
            totalTraffic: 'TotalTraffic',
            trafficPercent: 'TrafficPercent',
        };
    }
    static types() {
        return {
            domainName: 'string',
            maxBps: 'number',
            maxBpsTime: 'string',
            rank: 'number',
            totalAccess: 'number',
            totalTraffic: 'string',
            trafficPercent: 'string',
        };
    }
}
exports.DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain = DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain;
class DescribeTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            topDomain: 'TopDomain',
        };
    }
    static types() {
        return {
            topDomain: { 'type': 'array', 'itemType': DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain },
        };
    }
}
exports.DescribeTopDomainsByFlowResponseBodyTopDomains = DescribeTopDomainsByFlowResponseBodyTopDomains;
class DescribeUserConfigsResponseBodyConfigsOssLogConfig extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            bucket: 'Bucket',
            enable: 'Enable',
            prefix: 'Prefix',
        };
    }
    static types() {
        return {
            bucket: 'string',
            enable: 'string',
            prefix: 'string',
        };
    }
}
exports.DescribeUserConfigsResponseBodyConfigsOssLogConfig = DescribeUserConfigsResponseBodyConfigsOssLogConfig;
class DescribeUserConfigsResponseBodyConfigsWafConfig extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            enable: 'Enable',
        };
    }
    static types() {
        return {
            enable: 'string',
        };
    }
}
exports.DescribeUserConfigsResponseBodyConfigsWafConfig = DescribeUserConfigsResponseBodyConfigsWafConfig;
class DescribeUserConfigsResponseBodyConfigs extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            ossLogConfig: 'OssLogConfig',
            wafConfig: 'WafConfig',
        };
    }
    static types() {
        return {
            ossLogConfig: DescribeUserConfigsResponseBodyConfigsOssLogConfig,
            wafConfig: DescribeUserConfigsResponseBodyConfigsWafConfig,
        };
    }
}
exports.DescribeUserConfigsResponseBodyConfigs = DescribeUserConfigsResponseBodyConfigs;
class DescribeUserDomainsRequestTag extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
}
exports.DescribeUserDomainsRequestTag = DescribeUserDomainsRequestTag;
class DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            content: 'Content',
            port: 'Port',
            priority: 'Priority',
            type: 'Type',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            content: 'string',
            port: 'number',
            priority: 'string',
            type: 'string',
            weight: 'string',
        };
    }
}
exports.DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource = DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource;
class DescribeUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            source: 'Source',
        };
    }
    static types() {
        return {
            source: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource },
        };
    }
}
exports.DescribeUserDomainsResponseBodyDomainsPageDataSources = DescribeUserDomainsResponseBodyDomainsPageDataSources;
class DescribeUserDomainsResponseBodyDomainsPageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            cdnType: 'CdnType',
            cname: 'Cname',
            coverage: 'Coverage',
            description: 'Description',
            domainName: 'DomainName',
            domainStatus: 'DomainStatus',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            resourceGroupId: 'ResourceGroupId',
            sandbox: 'Sandbox',
            sources: 'Sources',
            sslProtocol: 'SslProtocol',
        };
    }
    static types() {
        return {
            cdnType: 'string',
            cname: 'string',
            coverage: 'string',
            description: 'string',
            domainName: 'string',
            domainStatus: 'string',
            gmtCreated: 'string',
            gmtModified: 'string',
            resourceGroupId: 'string',
            sandbox: 'string',
            sources: DescribeUserDomainsResponseBodyDomainsPageDataSources,
            sslProtocol: 'string',
        };
    }
}
exports.DescribeUserDomainsResponseBodyDomainsPageData = DescribeUserDomainsResponseBodyDomainsPageData;
class DescribeUserDomainsResponseBodyDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            pageData: 'PageData',
        };
    }
    static types() {
        return {
            pageData: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageData },
        };
    }
}
exports.DescribeUserDomainsResponseBodyDomains = DescribeUserDomainsResponseBodyDomains;
class DescribeUserTagsResponseBodyTags extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.DescribeUserTagsResponseBodyTags = DescribeUserTagsResponseBodyTags;
class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig = DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            createTime: 'CreateTime',
            downloadUrl: 'DownloadUrl',
            status: 'Status',
            taskConfig: 'TaskConfig',
            taskId: 'TaskId',
            taskName: 'TaskName',
            updateTime: 'UpdateTime',
        };
    }
    static types() {
        return {
            createTime: 'string',
            downloadUrl: 'string',
            status: 'string',
            taskConfig: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
            taskId: 'string',
            taskName: 'string',
            updateTime: 'string',
        };
    }
}
exports.DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem = DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem;
class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataItem: 'DataItem',
        };
    }
    static types() {
        return {
            dataItem: { 'type': 'array', 'itemType': DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem },
        };
    }
}
exports.DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData = DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData;
class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            data: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData,
            pageNumber: 'number',
            pageSize: 'number',
            totalCount: 'number',
        };
    }
}
exports.DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage = DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage;
class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            endTime: 'EndTime',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            startTime: 'string',
        };
    }
}
exports.DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig = DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            createTime: 'CreateTime',
            downloadUrl: 'DownloadUrl',
            status: 'Status',
            taskConfig: 'TaskConfig',
            taskId: 'TaskId',
            taskName: 'TaskName',
            updateTime: 'UpdateTime',
        };
    }
    static types() {
        return {
            createTime: 'string',
            downloadUrl: 'string',
            status: 'string',
            taskConfig: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
            taskId: 'string',
            taskName: 'string',
            updateTime: 'string',
        };
    }
}
exports.DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem = DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem;
class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            dataItem: 'DataItem',
        };
    }
    static types() {
        return {
            dataItem: { 'type': 'array', 'itemType': DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem },
        };
    }
}
exports.DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData = DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData;
class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            data: 'Data',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            data: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData,
            pageNumber: 'number',
            pageSize: 'number',
            totalCount: 'number',
        };
    }
}
exports.DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage = DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage;
class DescribeUserVipsByDomainResponseBodyVips extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            vip: 'Vip',
        };
    }
    static types() {
        return {
            vip: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.DescribeUserVipsByDomainResponseBodyVips = DescribeUserVipsByDomainResponseBodyVips;
class ListDomainsByLogConfigIdResponseBodyDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domain: 'Domain',
        };
    }
    static types() {
        return {
            domain: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.ListDomainsByLogConfigIdResponseBodyDomains = ListDomainsByLogConfigIdResponseBodyDomains;
class ListFCTriggerResponseBodyFCTriggers extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            eventMetaName: 'EventMetaName',
            eventMetaVersion: 'EventMetaVersion',
            notes: 'Notes',
            roleARN: 'RoleARN',
            sourceArn: 'SourceArn',
            triggerARN: 'TriggerARN',
        };
    }
    static types() {
        return {
            eventMetaName: 'string',
            eventMetaVersion: 'string',
            notes: 'string',
            roleARN: 'string',
            sourceArn: 'string',
            triggerARN: 'string',
        };
    }
}
exports.ListFCTriggerResponseBodyFCTriggers = ListFCTriggerResponseBodyFCTriggers;
class ListRealtimeLogDeliveryDomainsResponseBodyContentDomains extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domainName: 'DomainName',
            status: 'Status',
        };
    }
    static types() {
        return {
            domainName: 'string',
            status: 'string',
        };
    }
}
exports.ListRealtimeLogDeliveryDomainsResponseBodyContentDomains = ListRealtimeLogDeliveryDomainsResponseBodyContentDomains;
class ListRealtimeLogDeliveryDomainsResponseBodyContent extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            domains: 'Domains',
        };
    }
    static types() {
        return {
            domains: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryDomainsResponseBodyContentDomains },
        };
    }
}
exports.ListRealtimeLogDeliveryDomainsResponseBodyContent = ListRealtimeLogDeliveryDomainsResponseBodyContent;
class ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            logstore: 'Logstore',
            project: 'Project',
            region: 'Region',
        };
    }
    static types() {
        return {
            logstore: 'string',
            project: 'string',
            region: 'string',
        };
    }
}
exports.ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos = ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos;
class ListRealtimeLogDeliveryInfosResponseBodyContent extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            realtimeLogDeliveryInfos: 'RealtimeLogDeliveryInfos',
        };
    }
    static types() {
        return {
            realtimeLogDeliveryInfos: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos },
        };
    }
}
exports.ListRealtimeLogDeliveryInfosResponseBodyContent = ListRealtimeLogDeliveryInfosResponseBodyContent;
class ListUserCustomLogConfigResponseBodyConfigIds extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            configId: 'ConfigId',
        };
    }
    static types() {
        return {
            configId: { 'type': 'array', 'itemType': 'string' },
        };
    }
}
exports.ListUserCustomLogConfigResponseBodyConfigIds = ListUserCustomLogConfigResponseBodyConfigIds;
class TagResourcesRequestTag extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
}
exports.TagResourcesRequestTag = TagResourcesRequestTag;
class Client extends openapi_client_1.default {
    constructor(config) {
        super(config);
        this._endpointRule = "central";
        this._endpointMap = {
            'ap-northeast-1': "cdn.ap-southeast-1.aliyuncs.com",
            'ap-south-1': "cdn.ap-southeast-1.aliyuncs.com",
            'ap-southeast-1': "cdn.ap-southeast-1.aliyuncs.com",
            'ap-southeast-2': "cdn.ap-southeast-1.aliyuncs.com",
            'ap-southeast-3': "cdn.ap-southeast-1.aliyuncs.com",
            'ap-southeast-5': "cdn.ap-southeast-1.aliyuncs.com",
            'eu-central-1': "cdn.ap-southeast-1.aliyuncs.com",
            'eu-west-1': "cdn.ap-southeast-1.aliyuncs.com",
            'me-east-1': "cdn.ap-southeast-1.aliyuncs.com",
            'us-east-1': "cdn.ap-southeast-1.aliyuncs.com",
            'us-west-1': "cdn.ap-southeast-1.aliyuncs.com",
        };
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("cdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
    }
    getEndpoint(productId, regionId, endpointRule, network, suffix, endpointMap, endpoint) {
        if (!tea_util_1.default.empty(endpoint)) {
            return endpoint;
        }
        if (!tea_util_1.default.isUnset(endpointMap) && !tea_util_1.default.empty(endpointMap[regionId])) {
            return endpointMap[regionId];
        }
        return endpoint_util_1.default.getEndpointRules(productId, regionId, endpointRule, network, suffix);
    }
    async addCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.cdnType)) {
            query["CdnType"] = request.cdnType;
        }
        if (!tea_util_1.default.isUnset(request.checkUrl)) {
            query["CheckUrl"] = request.checkUrl;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerAccount)) {
            query["OwnerAccount"] = request.ownerAccount;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!tea_util_1.default.isUnset(request.scope)) {
            query["Scope"] = request.scope;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.sources)) {
            query["Sources"] = request.sources;
        }
        if (!tea_util_1.default.isUnset(request.topLevelDomain)) {
            query["TopLevelDomain"] = request.topLevelDomain;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "AddCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new AddCdnDomainResponse({}));
    }
    async addCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.addCdnDomainWithOptions(request, runtime);
    }
    async addFCTriggerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.triggerARN)) {
            query["TriggerARN"] = request.triggerARN;
        }
        let body = {};
        if (!tea_util_1.default.isUnset(request.eventMetaName)) {
            body["EventMetaName"] = request.eventMetaName;
        }
        if (!tea_util_1.default.isUnset(request.eventMetaVersion)) {
            body["EventMetaVersion"] = request.eventMetaVersion;
        }
        if (!tea_util_1.default.isUnset(request.functionARN)) {
            body["FunctionARN"] = request.functionARN;
        }
        if (!tea_util_1.default.isUnset(request.notes)) {
            body["Notes"] = request.notes;
        }
        if (!tea_util_1.default.isUnset(request.roleARN)) {
            body["RoleARN"] = request.roleARN;
        }
        if (!tea_util_1.default.isUnset(request.sourceARN)) {
            body["SourceARN"] = request.sourceARN;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
            body: openapi_util_1.default.parseToMap(body),
        });
        let params = new $OpenApi.Params({
            action: "AddFCTrigger",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new AddFCTriggerResponse({}));
    }
    async addFCTrigger(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.addFCTriggerWithOptions(request, runtime);
    }
    async batchAddCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.cdnType)) {
            query["CdnType"] = request.cdnType;
        }
        if (!tea_util_1.default.isUnset(request.checkUrl)) {
            query["CheckUrl"] = request.checkUrl;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerAccount)) {
            query["OwnerAccount"] = request.ownerAccount;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!tea_util_1.default.isUnset(request.scope)) {
            query["Scope"] = request.scope;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.sources)) {
            query["Sources"] = request.sources;
        }
        if (!tea_util_1.default.isUnset(request.topLevelDomain)) {
            query["TopLevelDomain"] = request.topLevelDomain;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "BatchAddCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new BatchAddCdnDomainResponse({}));
    }
    async batchAddCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.batchAddCdnDomainWithOptions(request, runtime);
    }
    async batchDeleteCdnDomainConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainNames)) {
            query["DomainNames"] = request.domainNames;
        }
        if (!tea_util_1.default.isUnset(request.functionNames)) {
            query["FunctionNames"] = request.functionNames;
        }
        if (!tea_util_1.default.isUnset(request.ownerAccount)) {
            query["OwnerAccount"] = request.ownerAccount;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "BatchDeleteCdnDomainConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new BatchDeleteCdnDomainConfigResponse({}));
    }
    async batchDeleteCdnDomainConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.batchDeleteCdnDomainConfigWithOptions(request, runtime);
    }
    async batchSetCdnDomainConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainNames)) {
            query["DomainNames"] = request.domainNames;
        }
        if (!tea_util_1.default.isUnset(request.functions)) {
            query["Functions"] = request.functions;
        }
        if (!tea_util_1.default.isUnset(request.ownerAccount)) {
            query["OwnerAccount"] = request.ownerAccount;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "BatchSetCdnDomainConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new BatchSetCdnDomainConfigResponse({}));
    }
    async batchSetCdnDomainConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.batchSetCdnDomainConfigWithOptions(request, runtime);
    }
    async batchSetCdnDomainServerCertificateWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.certName)) {
            query["CertName"] = request.certName;
        }
        if (!tea_util_1.default.isUnset(request.certType)) {
            query["CertType"] = request.certType;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.forceSet)) {
            query["ForceSet"] = request.forceSet;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.region)) {
            query["Region"] = request.region;
        }
        if (!tea_util_1.default.isUnset(request.SSLPri)) {
            query["SSLPri"] = request.SSLPri;
        }
        if (!tea_util_1.default.isUnset(request.SSLProtocol)) {
            query["SSLProtocol"] = request.SSLProtocol;
        }
        if (!tea_util_1.default.isUnset(request.SSLPub)) {
            query["SSLPub"] = request.SSLPub;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "BatchSetCdnDomainServerCertificate",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new BatchSetCdnDomainServerCertificateResponse({}));
    }
    async batchSetCdnDomainServerCertificate(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.batchSetCdnDomainServerCertificateWithOptions(request, runtime);
    }
    async batchStartCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainNames)) {
            query["DomainNames"] = request.domainNames;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "BatchStartCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new BatchStartCdnDomainResponse({}));
    }
    async batchStartCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.batchStartCdnDomainWithOptions(request, runtime);
    }
    async batchStopCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainNames)) {
            query["DomainNames"] = request.domainNames;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "BatchStopCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new BatchStopCdnDomainResponse({}));
    }
    async batchStopCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.batchStopCdnDomainWithOptions(request, runtime);
    }
    async batchUpdateCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.sources)) {
            query["Sources"] = request.sources;
        }
        if (!tea_util_1.default.isUnset(request.topLevelDomain)) {
            query["TopLevelDomain"] = request.topLevelDomain;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "BatchUpdateCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new BatchUpdateCdnDomainResponse({}));
    }
    async batchUpdateCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.batchUpdateCdnDomainWithOptions(request, runtime);
    }
    async createCdnCertificateSigningRequestWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.city)) {
            query["City"] = request.city;
        }
        if (!tea_util_1.default.isUnset(request.commonName)) {
            query["CommonName"] = request.commonName;
        }
        if (!tea_util_1.default.isUnset(request.country)) {
            query["Country"] = request.country;
        }
        if (!tea_util_1.default.isUnset(request.email)) {
            query["Email"] = request.email;
        }
        if (!tea_util_1.default.isUnset(request.organization)) {
            query["Organization"] = request.organization;
        }
        if (!tea_util_1.default.isUnset(request.organizationUnit)) {
            query["OrganizationUnit"] = request.organizationUnit;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.SANs)) {
            query["SANs"] = request.SANs;
        }
        if (!tea_util_1.default.isUnset(request.state)) {
            query["State"] = request.state;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "CreateCdnCertificateSigningRequest",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new CreateCdnCertificateSigningRequestResponse({}));
    }
    async createCdnCertificateSigningRequest(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.createCdnCertificateSigningRequestWithOptions(request, runtime);
    }
    async createCdnDeliverTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let body = {};
        if (!tea_util_1.default.isUnset(request.deliver)) {
            body["Deliver"] = request.deliver;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            body["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.name)) {
            body["Name"] = request.name;
        }
        if (!tea_util_1.default.isUnset(request.reports)) {
            body["Reports"] = request.reports;
        }
        if (!tea_util_1.default.isUnset(request.schedule)) {
            body["Schedule"] = request.schedule;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
            body: openapi_util_1.default.parseToMap(body),
        });
        let params = new $OpenApi.Params({
            action: "CreateCdnDeliverTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new CreateCdnDeliverTaskResponse({}));
    }
    async createCdnDeliverTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.createCdnDeliverTaskWithOptions(request, runtime);
    }
    async createCdnSubTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let body = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            body["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.reportIds)) {
            body["ReportIds"] = request.reportIds;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
            body: openapi_util_1.default.parseToMap(body),
        });
        let params = new $OpenApi.Params({
            action: "CreateCdnSubTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new CreateCdnSubTaskResponse({}));
    }
    async createCdnSubTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.createCdnSubTaskWithOptions(request, runtime);
    }
    async createIllegalUrlExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.taskName)) {
            query["TaskName"] = request.taskName;
        }
        if (!tea_util_1.default.isUnset(request.timePoint)) {
            query["TimePoint"] = request.timePoint;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "CreateIllegalUrlExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new CreateIllegalUrlExportTaskResponse({}));
    }
    async createIllegalUrlExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.createIllegalUrlExportTaskWithOptions(request, runtime);
    }
    async createRealTimeLogDeliveryWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "CreateRealTimeLogDelivery",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new CreateRealTimeLogDeliveryResponse({}));
    }
    async createRealTimeLogDelivery(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.createRealTimeLogDeliveryWithOptions(request, runtime);
    }
    async createUsageDetailDataExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainNames)) {
            query["DomainNames"] = request.domainNames;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.group)) {
            query["Group"] = request.group;
        }
        if (!tea_util_1.default.isUnset(request.language)) {
            query["Language"] = request.language;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!tea_util_1.default.isUnset(request.taskName)) {
            query["TaskName"] = request.taskName;
        }
        if (!tea_util_1.default.isUnset(request.type)) {
            query["Type"] = request.type;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "CreateUsageDetailDataExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new CreateUsageDetailDataExportTaskResponse({}));
    }
    async createUsageDetailDataExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.createUsageDetailDataExportTaskWithOptions(request, runtime);
    }
    async createUserUsageDataExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.language)) {
            query["Language"] = request.language;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!tea_util_1.default.isUnset(request.taskName)) {
            query["TaskName"] = request.taskName;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "CreateUserUsageDataExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new CreateUserUsageDataExportTaskResponse({}));
    }
    async createUserUsageDataExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.createUserUsageDataExportTaskWithOptions(request, runtime);
    }
    async deleteCdnDeliverTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.deliverId)) {
            query["DeliverId"] = request.deliverId;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteCdnDeliverTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteCdnDeliverTaskResponse({}));
    }
    async deleteCdnDeliverTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteCdnDeliverTaskWithOptions(request, runtime);
    }
    async deleteCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerAccount)) {
            query["OwnerAccount"] = request.ownerAccount;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteCdnDomainResponse({}));
    }
    async deleteCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteCdnDomainWithOptions(request, runtime);
    }
    async deleteCdnSubTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteCdnSubTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteCdnSubTaskResponse({}));
    }
    async deleteCdnSubTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteCdnSubTaskWithOptions(request, runtime);
    }
    async deleteFCTriggerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.triggerARN)) {
            query["TriggerARN"] = request.triggerARN;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteFCTrigger",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteFCTriggerResponse({}));
    }
    async deleteFCTrigger(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteFCTriggerWithOptions(request, runtime);
    }
    async deleteRealtimeLogDeliveryWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteRealtimeLogDelivery",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteRealtimeLogDeliveryResponse({}));
    }
    async deleteRealtimeLogDelivery(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteRealtimeLogDeliveryWithOptions(request, runtime);
    }
    async deleteSpecificConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configId)) {
            query["ConfigId"] = request.configId;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteSpecificConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteSpecificConfigResponse({}));
    }
    async deleteSpecificConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteSpecificConfigWithOptions(request, runtime);
    }
    async deleteSpecificStagingConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configId)) {
            query["ConfigId"] = request.configId;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteSpecificStagingConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteSpecificStagingConfigResponse({}));
    }
    async deleteSpecificStagingConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteSpecificStagingConfigWithOptions(request, runtime);
    }
    async deleteUsageDetailDataExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteUsageDetailDataExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteUsageDetailDataExportTaskResponse({}));
    }
    async deleteUsageDetailDataExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteUsageDetailDataExportTaskWithOptions(request, runtime);
    }
    async deleteUserUsageDataExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DeleteUserUsageDataExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DeleteUserUsageDataExportTaskResponse({}));
    }
    async deleteUserUsageDataExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.deleteUserUsageDataExportTaskWithOptions(request, runtime);
    }
    async describeActiveVersionOfConfigGroupWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configGroupId)) {
            query["ConfigGroupId"] = request.configGroupId;
        }
        if (!tea_util_1.default.isUnset(request.env)) {
            query["Env"] = request.env;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeActiveVersionOfConfigGroup",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeActiveVersionOfConfigGroupResponse({}));
    }
    async describeActiveVersionOfConfigGroup(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeActiveVersionOfConfigGroupWithOptions(request, runtime);
    }
    async describeBlockedRegionsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeBlockedRegions",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeBlockedRegionsResponse({}));
    }
    async describeBlockedRegions(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeBlockedRegionsWithOptions(request, runtime);
    }
    async describeCdnCertificateDetailWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.certName)) {
            query["CertName"] = request.certName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnCertificateDetail",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnCertificateDetailResponse({}));
    }
    async describeCdnCertificateDetail(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnCertificateDetailWithOptions(request, runtime);
    }
    async describeCdnCertificateListWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnCertificateList",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnCertificateListResponse({}));
    }
    async describeCdnCertificateList(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnCertificateListWithOptions(request, runtime);
    }
    async describeCdnDeletedDomainsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnDeletedDomains",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnDeletedDomainsResponse({}));
    }
    async describeCdnDeletedDomains(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnDeletedDomainsWithOptions(request, runtime);
    }
    async describeCdnDeliverListWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.deliverId)) {
            query["DeliverId"] = request.deliverId;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnDeliverList",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnDeliverListResponse({}));
    }
    async describeCdnDeliverList(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnDeliverListWithOptions(request, runtime);
    }
    async describeCdnDomainByCertificateWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.SSLPub)) {
            query["SSLPub"] = request.SSLPub;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnDomainByCertificate",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnDomainByCertificateResponse({}));
    }
    async describeCdnDomainByCertificate(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnDomainByCertificateWithOptions(request, runtime);
    }
    async describeCdnDomainConfigsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configId)) {
            query["ConfigId"] = request.configId;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.functionNames)) {
            query["FunctionNames"] = request.functionNames;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnDomainConfigs",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnDomainConfigsResponse({}));
    }
    async describeCdnDomainConfigs(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnDomainConfigsWithOptions(request, runtime);
    }
    async describeCdnDomainDetailWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnDomainDetail",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnDomainDetailResponse({}));
    }
    async describeCdnDomainDetail(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnDomainDetailWithOptions(request, runtime);
    }
    async describeCdnDomainLogsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnDomainLogs",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnDomainLogsResponse({}));
    }
    async describeCdnDomainLogs(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnDomainLogsWithOptions(request, runtime);
    }
    async describeCdnDomainStagingConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.functionNames)) {
            query["FunctionNames"] = request.functionNames;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnDomainStagingConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnDomainStagingConfigResponse({}));
    }
    async describeCdnDomainStagingConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnDomainStagingConfigWithOptions(request, runtime);
    }
    async describeCdnHttpsDomainListWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnHttpsDomainList",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnHttpsDomainListResponse({}));
    }
    async describeCdnHttpsDomainList(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnHttpsDomainListWithOptions(request, runtime);
    }
    async describeCdnOrderCommodityCodeWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.commodityCode)) {
            query["CommodityCode"] = request.commodityCode;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnOrderCommodityCode",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnOrderCommodityCodeResponse({}));
    }
    async describeCdnOrderCommodityCode(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnOrderCommodityCodeWithOptions(request, runtime);
    }
    async describeCdnRegionAndIspWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnRegionAndIsp",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnRegionAndIspResponse({}));
    }
    async describeCdnRegionAndIsp(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnRegionAndIspWithOptions(request, runtime);
    }
    async describeCdnReportWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.area)) {
            query["Area"] = request.area;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.httpCode)) {
            query["HttpCode"] = request.httpCode;
        }
        if (!tea_util_1.default.isUnset(request.isOverseas)) {
            query["IsOverseas"] = request.isOverseas;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.reportId)) {
            query["ReportId"] = request.reportId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnReport",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnReportResponse({}));
    }
    async describeCdnReport(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnReportWithOptions(request, runtime);
    }
    async describeCdnReportListWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.reportId)) {
            query["ReportId"] = request.reportId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnReportList",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnReportListResponse({}));
    }
    async describeCdnReportList(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnReportListWithOptions(request, runtime);
    }
    async describeCdnSMCertificateDetailWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.certIdentifier)) {
            query["CertIdentifier"] = request.certIdentifier;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnSMCertificateDetail",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnSMCertificateDetailResponse({}));
    }
    async describeCdnSMCertificateDetail(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnSMCertificateDetailWithOptions(request, runtime);
    }
    async describeCdnSMCertificateListWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnSMCertificateList",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnSMCertificateListResponse({}));
    }
    async describeCdnSMCertificateList(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnSMCertificateListWithOptions(request, runtime);
    }
    async describeCdnServiceWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnService",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnServiceResponse({}));
    }
    async describeCdnService(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnServiceWithOptions(request, runtime);
    }
    async describeCdnSubListWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnSubList",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnSubListResponse({}));
    }
    async describeCdnSubList(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnSubListWithOptions(request, runtime);
    }
    async describeCdnUserBillHistoryWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnUserBillHistory",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnUserBillHistoryResponse({}));
    }
    async describeCdnUserBillHistory(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnUserBillHistoryWithOptions(request, runtime);
    }
    async describeCdnUserBillPredictionWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.area)) {
            query["Area"] = request.area;
        }
        if (!tea_util_1.default.isUnset(request.dimension)) {
            query["Dimension"] = request.dimension;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnUserBillPrediction",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnUserBillPredictionResponse({}));
    }
    async describeCdnUserBillPrediction(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnUserBillPredictionWithOptions(request, runtime);
    }
    async describeCdnUserBillTypeWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnUserBillType",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnUserBillTypeResponse({}));
    }
    async describeCdnUserBillType(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnUserBillTypeWithOptions(request, runtime);
    }
    async describeCdnUserConfigsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.functionName)) {
            query["FunctionName"] = request.functionName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnUserConfigs",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnUserConfigsResponse({}));
    }
    async describeCdnUserConfigs(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnUserConfigsWithOptions(request, runtime);
    }
    async describeCdnUserDomainsByFuncWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.funcId)) {
            query["FuncId"] = request.funcId;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnUserDomainsByFunc",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnUserDomainsByFuncResponse({}));
    }
    async describeCdnUserDomainsByFunc(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnUserDomainsByFuncWithOptions(request, runtime);
    }
    async describeCdnUserQuotaWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnUserQuota",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnUserQuotaResponse({}));
    }
    async describeCdnUserQuota(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnUserQuotaWithOptions(request, runtime);
    }
    async describeCdnUserResourcePackageWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.status)) {
            query["Status"] = request.status;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnUserResourcePackage",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnUserResourcePackageResponse({}));
    }
    async describeCdnUserResourcePackage(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnUserResourcePackageWithOptions(request, runtime);
    }
    async describeCdnWafDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCdnWafDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCdnWafDomainResponse({}));
    }
    async describeCdnWafDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCdnWafDomainWithOptions(request, runtime);
    }
    async describeCertificateInfoByIDWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCertificateInfoByID",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCertificateInfoByIDResponse({}));
    }
    async describeCertificateInfoByID(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCertificateInfoByIDWithOptions(request, runtime);
    }
    async describeConfigGroupDetailWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configGroupId)) {
            query["ConfigGroupId"] = request.configGroupId;
        }
        if (!tea_util_1.default.isUnset(request.configGroupName)) {
            query["ConfigGroupName"] = request.configGroupName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeConfigGroupDetail",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeConfigGroupDetailResponse({}));
    }
    async describeConfigGroupDetail(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeConfigGroupDetailWithOptions(request, runtime);
    }
    async describeConfigOfVersionWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.functionId)) {
            query["FunctionId"] = request.functionId;
        }
        if (!tea_util_1.default.isUnset(request.functionName)) {
            query["FunctionName"] = request.functionName;
        }
        if (!tea_util_1.default.isUnset(request.groupId)) {
            query["GroupId"] = request.groupId;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.versionId)) {
            query["VersionId"] = request.versionId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeConfigOfVersion",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeConfigOfVersionResponse({}));
    }
    async describeConfigOfVersion(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeConfigOfVersionWithOptions(request, runtime);
    }
    async describeCustomLogConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeCustomLogConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeCustomLogConfigResponse({}));
    }
    async describeCustomLogConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeCustomLogConfigWithOptions(request, runtime);
    }
    async describeDomainAverageResponseTimeWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.domainType)) {
            query["DomainType"] = request.domainType;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!tea_util_1.default.isUnset(request.timeMerge)) {
            query["TimeMerge"] = request.timeMerge;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainAverageResponseTime",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainAverageResponseTimeResponse({}));
    }
    async describeDomainAverageResponseTime(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainAverageResponseTimeWithOptions(request, runtime);
    }
    async describeDomainBpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainBpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainBpsDataResponse({}));
    }
    async describeDomainBpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainBpsDataWithOptions(request, runtime);
    }
    async describeDomainBpsDataByLayerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.layer)) {
            query["Layer"] = request.layer;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainBpsDataByLayer",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainBpsDataByLayerResponse({}));
    }
    async describeDomainBpsDataByLayer(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainBpsDataByLayerWithOptions(request, runtime);
    }
    async describeDomainBpsDataByTimeStampWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ispNames)) {
            query["IspNames"] = request.ispNames;
        }
        if (!tea_util_1.default.isUnset(request.locationNames)) {
            query["LocationNames"] = request.locationNames;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.timePoint)) {
            query["TimePoint"] = request.timePoint;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainBpsDataByTimeStamp",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainBpsDataByTimeStampResponse({}));
    }
    async describeDomainBpsDataByTimeStamp(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainBpsDataByTimeStampWithOptions(request, runtime);
    }
    async describeDomainCcActivityLogWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!tea_util_1.default.isUnset(request.ruleName)) {
            query["RuleName"] = request.ruleName;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!tea_util_1.default.isUnset(request.triggerObject)) {
            query["TriggerObject"] = request.triggerObject;
        }
        if (!tea_util_1.default.isUnset(request.value)) {
            query["Value"] = request.value;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainCcActivityLog",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainCcActivityLogResponse({}));
    }
    async describeDomainCcActivityLog(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainCcActivityLogWithOptions(request, runtime);
    }
    async describeDomainCertificateInfoWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainCertificateInfo",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainCertificateInfoResponse({}));
    }
    async describeDomainCertificateInfo(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainCertificateInfoWithOptions(request, runtime);
    }
    async describeDomainCustomLogConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainCustomLogConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainCustomLogConfigResponse({}));
    }
    async describeDomainCustomLogConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainCustomLogConfigWithOptions(request, runtime);
    }
    async describeDomainDetailDataByLayerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainDetailDataByLayer",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainDetailDataByLayerResponse({}));
    }
    async describeDomainDetailDataByLayer(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainDetailDataByLayerWithOptions(request, runtime);
    }
    async describeDomainFileSizeProportionDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainFileSizeProportionData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainFileSizeProportionDataResponse({}));
    }
    async describeDomainFileSizeProportionData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainFileSizeProportionDataWithOptions(request, runtime);
    }
    async describeDomainHitRateDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainHitRateData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainHitRateDataResponse({}));
    }
    async describeDomainHitRateData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainHitRateDataWithOptions(request, runtime);
    }
    async describeDomainHttpCodeDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainHttpCodeData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainHttpCodeDataResponse({}));
    }
    async describeDomainHttpCodeData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainHttpCodeDataWithOptions(request, runtime);
    }
    async describeDomainHttpCodeDataByLayerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.layer)) {
            query["Layer"] = request.layer;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainHttpCodeDataByLayer",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainHttpCodeDataByLayerResponse({}));
    }
    async describeDomainHttpCodeDataByLayer(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainHttpCodeDataByLayerWithOptions(request, runtime);
    }
    async describeDomainISPDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainISPData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainISPDataResponse({}));
    }
    async describeDomainISPData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainISPDataWithOptions(request, runtime);
    }
    async describeDomainMax95BpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.cycle)) {
            query["Cycle"] = request.cycle;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!tea_util_1.default.isUnset(request.timePoint)) {
            query["TimePoint"] = request.timePoint;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainMax95BpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainMax95BpsDataResponse({}));
    }
    async describeDomainMax95BpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainMax95BpsDataWithOptions(request, runtime);
    }
    async describeDomainMultiUsageDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainMultiUsageData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainMultiUsageDataResponse({}));
    }
    async describeDomainMultiUsageData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainMultiUsageDataWithOptions(request, runtime);
    }
    async describeDomainNamesOfVersionWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageIndex)) {
            query["PageIndex"] = request.pageIndex;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!tea_util_1.default.isUnset(request.versionId)) {
            query["VersionId"] = request.versionId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainNamesOfVersion",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainNamesOfVersionResponse({}));
    }
    async describeDomainNamesOfVersion(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainNamesOfVersionWithOptions(request, runtime);
    }
    async describeDomainPathDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainPathData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainPathDataResponse({}));
    }
    async describeDomainPathData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainPathDataWithOptions(request, runtime);
    }
    async describeDomainPvDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainPvData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainPvDataResponse({}));
    }
    async describeDomainPvData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainPvDataWithOptions(request, runtime);
    }
    async describeDomainQpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainQpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainQpsDataResponse({}));
    }
    async describeDomainQpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainQpsDataWithOptions(request, runtime);
    }
    async describeDomainQpsDataByLayerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.layer)) {
            query["Layer"] = request.layer;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainQpsDataByLayer",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainQpsDataByLayerResponse({}));
    }
    async describeDomainQpsDataByLayer(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainQpsDataByLayerWithOptions(request, runtime);
    }
    async describeDomainRealTimeBpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeBpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeBpsDataResponse({}));
    }
    async describeDomainRealTimeBpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeBpsDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeByteHitRateDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeByteHitRateData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeByteHitRateDataResponse({}));
    }
    async describeDomainRealTimeByteHitRateData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeByteHitRateDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeDetailDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeDetailData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeDetailDataResponse({}));
    }
    async describeDomainRealTimeDetailData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeDetailDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeHttpCodeDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeHttpCodeData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeHttpCodeDataResponse({}));
    }
    async describeDomainRealTimeHttpCodeData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeHttpCodeDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeQpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeQpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeQpsDataResponse({}));
    }
    async describeDomainRealTimeQpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeQpsDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeReqHitRateDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeReqHitRateData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeReqHitRateDataResponse({}));
    }
    async describeDomainRealTimeReqHitRateData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeReqHitRateDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeSrcBpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeSrcBpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeSrcBpsDataResponse({}));
    }
    async describeDomainRealTimeSrcBpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeSrcBpsDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeSrcHttpCodeData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeSrcHttpCodeDataResponse({}));
    }
    async describeDomainRealTimeSrcHttpCodeData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeSrcTrafficDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeSrcTrafficData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeSrcTrafficDataResponse({}));
    }
    async describeDomainRealTimeSrcTrafficData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
    }
    async describeDomainRealTimeTrafficDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealTimeTrafficData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealTimeTrafficDataResponse({}));
    }
    async describeDomainRealTimeTrafficData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealTimeTrafficDataWithOptions(request, runtime);
    }
    async describeDomainRealtimeLogDeliveryWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRealtimeLogDelivery",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRealtimeLogDeliveryResponse({}));
    }
    async describeDomainRealtimeLogDelivery(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRealtimeLogDeliveryWithOptions(request, runtime);
    }
    async describeDomainRegionDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainRegionData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainRegionDataResponse({}));
    }
    async describeDomainRegionData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainRegionDataWithOptions(request, runtime);
    }
    async describeDomainReqHitRateDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainReqHitRateData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainReqHitRateDataResponse({}));
    }
    async describeDomainReqHitRateData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainReqHitRateDataWithOptions(request, runtime);
    }
    async describeDomainSrcBpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainSrcBpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainSrcBpsDataResponse({}));
    }
    async describeDomainSrcBpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainSrcBpsDataWithOptions(request, runtime);
    }
    async describeDomainSrcHttpCodeDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainSrcHttpCodeData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainSrcHttpCodeDataResponse({}));
    }
    async describeDomainSrcHttpCodeData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainSrcHttpCodeDataWithOptions(request, runtime);
    }
    async describeDomainSrcQpsDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainSrcQpsData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainSrcQpsDataResponse({}));
    }
    async describeDomainSrcQpsData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainSrcQpsDataWithOptions(request, runtime);
    }
    async describeDomainSrcTopUrlVisitWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.sortBy)) {
            query["SortBy"] = request.sortBy;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainSrcTopUrlVisit",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainSrcTopUrlVisitResponse({}));
    }
    async describeDomainSrcTopUrlVisit(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainSrcTopUrlVisitWithOptions(request, runtime);
    }
    async describeDomainSrcTrafficDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainSrcTrafficData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainSrcTrafficDataResponse({}));
    }
    async describeDomainSrcTrafficData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainSrcTrafficDataWithOptions(request, runtime);
    }
    async describeDomainTopClientIpVisitWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.limit)) {
            query["Limit"] = request.limit;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.sortBy)) {
            query["SortBy"] = request.sortBy;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainTopClientIpVisit",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainTopClientIpVisitResponse({}));
    }
    async describeDomainTopClientIpVisit(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainTopClientIpVisitWithOptions(request, runtime);
    }
    async describeDomainTopReferVisitWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.percent)) {
            query["Percent"] = request.percent;
        }
        if (!tea_util_1.default.isUnset(request.sortBy)) {
            query["SortBy"] = request.sortBy;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainTopReferVisit",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainTopReferVisitResponse({}));
    }
    async describeDomainTopReferVisit(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainTopReferVisitWithOptions(request, runtime);
    }
    async describeDomainTopUrlVisitWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.sortBy)) {
            query["SortBy"] = request.sortBy;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainTopUrlVisit",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainTopUrlVisitResponse({}));
    }
    async describeDomainTopUrlVisit(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainTopUrlVisitWithOptions(request, runtime);
    }
    async describeDomainTrafficDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ispNameEn)) {
            query["IspNameEn"] = request.ispNameEn;
        }
        if (!tea_util_1.default.isUnset(request.locationNameEn)) {
            query["LocationNameEn"] = request.locationNameEn;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainTrafficData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainTrafficDataResponse({}));
    }
    async describeDomainTrafficData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainTrafficDataWithOptions(request, runtime);
    }
    async describeDomainUsageDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.area)) {
            query["Area"] = request.area;
        }
        if (!tea_util_1.default.isUnset(request.dataProtocol)) {
            query["DataProtocol"] = request.dataProtocol;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.field)) {
            query["Field"] = request.field;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!tea_util_1.default.isUnset(request.type)) {
            query["Type"] = request.type;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainUsageData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainUsageDataResponse({}));
    }
    async describeDomainUsageData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainUsageDataWithOptions(request, runtime);
    }
    async describeDomainUvDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainUvData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainUvDataResponse({}));
    }
    async describeDomainUvData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainUvDataWithOptions(request, runtime);
    }
    async describeDomainsBySourceWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.sources)) {
            query["Sources"] = request.sources;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainsBySource",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainsBySourceResponse({}));
    }
    async describeDomainsBySource(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainsBySourceWithOptions(request, runtime);
    }
    async describeDomainsUsageByDayWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeDomainsUsageByDay",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeDomainsUsageByDayResponse({}));
    }
    async describeDomainsUsageByDay(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeDomainsUsageByDayWithOptions(request, runtime);
    }
    async describeEsExceptionDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.ruleId)) {
            query["RuleId"] = request.ruleId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeEsExceptionData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeEsExceptionDataResponse({}));
    }
    async describeEsExceptionData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeEsExceptionDataWithOptions(request, runtime);
    }
    async describeEsExecuteDataWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.ruleId)) {
            query["RuleId"] = request.ruleId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeEsExecuteData",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeEsExecuteDataResponse({}));
    }
    async describeEsExecuteData(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeEsExecuteDataWithOptions(request, runtime);
    }
    async describeFCTriggerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeFCTrigger",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeFCTriggerResponse({}));
    }
    async describeFCTrigger(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeFCTriggerWithOptions(request, runtime);
    }
    async describeIllegalUrlExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeIllegalUrlExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeIllegalUrlExportTaskResponse({}));
    }
    async describeIllegalUrlExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeIllegalUrlExportTaskWithOptions(request, runtime);
    }
    async describeIpInfoWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.IP)) {
            query["IP"] = request.IP;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeIpInfo",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeIpInfoResponse({}));
    }
    async describeIpInfo(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeIpInfoWithOptions(request, runtime);
    }
    async describeIpStatusWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeIpStatus",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeIpStatusResponse({}));
    }
    async describeIpStatus(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeIpStatusWithOptions(request, runtime);
    }
    async describeL2VipsByDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeL2VipsByDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeL2VipsByDomainResponse({}));
    }
    async describeL2VipsByDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeL2VipsByDomainWithOptions(request, runtime);
    }
    async describeRangeDataByLocateAndIspServiceWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainNames)) {
            query["DomainNames"] = request.domainNames;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.ispNames)) {
            query["IspNames"] = request.ispNames;
        }
        if (!tea_util_1.default.isUnset(request.locationNames)) {
            query["LocationNames"] = request.locationNames;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeRangeDataByLocateAndIspService",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeRangeDataByLocateAndIspServiceResponse({}));
    }
    async describeRangeDataByLocateAndIspService(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeRangeDataByLocateAndIspServiceWithOptions(request, runtime);
    }
    async describeRealtimeDeliveryAccWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!tea_util_1.default.isUnset(request.logStore)) {
            query["LogStore"] = request.logStore;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.project)) {
            query["Project"] = request.project;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeRealtimeDeliveryAcc",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeRealtimeDeliveryAccResponse({}));
    }
    async describeRealtimeDeliveryAcc(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeRealtimeDeliveryAccWithOptions(request, runtime);
    }
    async describeRefreshQuotaWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeRefreshQuota",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeRefreshQuotaResponse({}));
    }
    async describeRefreshQuota(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeRefreshQuotaWithOptions(request, runtime);
    }
    async describeRefreshTaskByIdWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeRefreshTaskById",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeRefreshTaskByIdResponse({}));
    }
    async describeRefreshTaskById(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeRefreshTaskByIdWithOptions(request, runtime);
    }
    async describeRefreshTasksWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.objectPath)) {
            query["ObjectPath"] = request.objectPath;
        }
        if (!tea_util_1.default.isUnset(request.objectType)) {
            query["ObjectType"] = request.objectType;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!tea_util_1.default.isUnset(request.status)) {
            query["Status"] = request.status;
        }
        if (!tea_util_1.default.isUnset(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeRefreshTasks",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeRefreshTasksResponse({}));
    }
    async describeRefreshTasks(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeRefreshTasksWithOptions(request, runtime);
    }
    async describeStagingIpWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeStagingIp",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeStagingIpResponse({}));
    }
    async describeStagingIp(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeStagingIpWithOptions(request, runtime);
    }
    async describeTagResourcesWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.resourceId)) {
            query["ResourceId"] = request.resourceId;
        }
        if (!tea_util_1.default.isUnset(request.resourceType)) {
            query["ResourceType"] = request.resourceType;
        }
        if (!tea_util_1.default.isUnset(request.tag)) {
            query["Tag"] = request.tag;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeTagResources",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeTagResourcesResponse({}));
    }
    async describeTagResources(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeTagResourcesWithOptions(request, runtime);
    }
    async describeTopDomainsByFlowWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.limit)) {
            query["Limit"] = request.limit;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeTopDomainsByFlow",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeTopDomainsByFlowResponse({}));
    }
    async describeTopDomainsByFlow(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeTopDomainsByFlowWithOptions(request, runtime);
    }
    async describeUserCertificateExpireCountWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeUserCertificateExpireCount",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeUserCertificateExpireCountResponse({}));
    }
    async describeUserCertificateExpireCount(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeUserCertificateExpireCountWithOptions(request, runtime);
    }
    async describeUserConfigsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.config)) {
            query["Config"] = request.config;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeUserConfigs",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeUserConfigsResponse({}));
    }
    async describeUserConfigs(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeUserConfigsWithOptions(request, runtime);
    }
    async describeUserDomainsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.cdnType)) {
            query["CdnType"] = request.cdnType;
        }
        if (!tea_util_1.default.isUnset(request.changeEndTime)) {
            query["ChangeEndTime"] = request.changeEndTime;
        }
        if (!tea_util_1.default.isUnset(request.changeStartTime)) {
            query["ChangeStartTime"] = request.changeStartTime;
        }
        if (!tea_util_1.default.isUnset(request.checkDomainShow)) {
            query["CheckDomainShow"] = request.checkDomainShow;
        }
        if (!tea_util_1.default.isUnset(request.coverage)) {
            query["Coverage"] = request.coverage;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.domainSearchType)) {
            query["DomainSearchType"] = request.domainSearchType;
        }
        if (!tea_util_1.default.isUnset(request.domainStatus)) {
            query["DomainStatus"] = request.domainStatus;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.source)) {
            query["Source"] = request.source;
        }
        if (!tea_util_1.default.isUnset(request.tag)) {
            query["Tag"] = request.tag;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeUserDomains",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeUserDomainsResponse({}));
    }
    async describeUserDomains(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeUserDomainsWithOptions(request, runtime);
    }
    async describeUserTagsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeUserTags",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeUserTagsResponse({}));
    }
    async describeUserTags(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeUserTagsWithOptions(request, runtime);
    }
    async describeUserUsageDataExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeUserUsageDataExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeUserUsageDataExportTaskResponse({}));
    }
    async describeUserUsageDataExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeUserUsageDataExportTaskWithOptions(request, runtime);
    }
    async describeUserUsageDetailDataExportTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!tea_util_1.default.isUnset(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeUserUsageDetailDataExportTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeUserUsageDetailDataExportTaskResponse({}));
    }
    async describeUserUsageDetailDataExportTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeUserUsageDetailDataExportTaskWithOptions(request, runtime);
    }
    async describeUserVipsByDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeUserVipsByDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeUserVipsByDomainResponse({}));
    }
    async describeUserVipsByDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeUserVipsByDomainWithOptions(request, runtime);
    }
    async describeVerifyContentWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DescribeVerifyContent",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DescribeVerifyContentResponse({}));
    }
    async describeVerifyContent(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.describeVerifyContentWithOptions(request, runtime);
    }
    async disableRealtimeLogDeliveryWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "DisableRealtimeLogDelivery",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new DisableRealtimeLogDeliveryResponse({}));
    }
    async disableRealtimeLogDelivery(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.disableRealtimeLogDeliveryWithOptions(request, runtime);
    }
    async enableRealtimeLogDeliveryWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "EnableRealtimeLogDelivery",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new EnableRealtimeLogDeliveryResponse({}));
    }
    async enableRealtimeLogDelivery(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.enableRealtimeLogDeliveryWithOptions(request, runtime);
    }
    async listDomainsByLogConfigIdWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ListDomainsByLogConfigId",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ListDomainsByLogConfigIdResponse({}));
    }
    async listDomainsByLogConfigId(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.listDomainsByLogConfigIdWithOptions(request, runtime);
    }
    async listFCTriggerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ListFCTrigger",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ListFCTriggerResponse({}));
    }
    async listFCTrigger(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.listFCTriggerWithOptions(request, runtime);
    }
    async listRealtimeLogDeliveryDomainsWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ListRealtimeLogDeliveryDomains",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ListRealtimeLogDeliveryDomainsResponse({}));
    }
    async listRealtimeLogDeliveryDomains(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.listRealtimeLogDeliveryDomainsWithOptions(request, runtime);
    }
    async listRealtimeLogDeliveryInfosWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ListRealtimeLogDeliveryInfos",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ListRealtimeLogDeliveryInfosResponse({}));
    }
    async listRealtimeLogDeliveryInfos(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.listRealtimeLogDeliveryInfosWithOptions(request, runtime);
    }
    async listUserCustomLogConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ListUserCustomLogConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ListUserCustomLogConfigResponse({}));
    }
    async listUserCustomLogConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.listUserCustomLogConfigWithOptions(request, runtime);
    }
    async modifyCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.resourceGroupId)) {
            query["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.sources)) {
            query["Sources"] = request.sources;
        }
        if (!tea_util_1.default.isUnset(request.topLevelDomain)) {
            query["TopLevelDomain"] = request.topLevelDomain;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ModifyCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ModifyCdnDomainResponse({}));
    }
    async modifyCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.modifyCdnDomainWithOptions(request, runtime);
    }
    async modifyCdnDomainSchdmByPropertyWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.property)) {
            query["Property"] = request.property;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ModifyCdnDomainSchdmByProperty",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ModifyCdnDomainSchdmByPropertyResponse({}));
    }
    async modifyCdnDomainSchdmByProperty(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.modifyCdnDomainSchdmByPropertyWithOptions(request, runtime);
    }
    async modifyRealtimeLogDeliveryWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ModifyRealtimeLogDelivery",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ModifyRealtimeLogDeliveryResponse({}));
    }
    async modifyRealtimeLogDelivery(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.modifyRealtimeLogDeliveryWithOptions(request, runtime);
    }
    async modifyUserCustomLogConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = openapi_util_1.default.query(tea_util_1.default.toMap(request));
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "ModifyUserCustomLogConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "GET",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new ModifyUserCustomLogConfigResponse({}));
    }
    async modifyUserCustomLogConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.modifyUserCustomLogConfigWithOptions(request, runtime);
    }
    async openCdnServiceWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.internetChargeType)) {
            query["InternetChargeType"] = request.internetChargeType;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "OpenCdnService",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new OpenCdnServiceResponse({}));
    }
    async openCdnService(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.openCdnServiceWithOptions(request, runtime);
    }
    async publishStagingConfigToProductionWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "PublishStagingConfigToProduction",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new PublishStagingConfigToProductionResponse({}));
    }
    async publishStagingConfigToProduction(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.publishStagingConfigToProductionWithOptions(request, runtime);
    }
    async pushObjectCacheWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.area)) {
            query["Area"] = request.area;
        }
        if (!tea_util_1.default.isUnset(request.l2Preload)) {
            query["L2Preload"] = request.l2Preload;
        }
        if (!tea_util_1.default.isUnset(request.objectPath)) {
            query["ObjectPath"] = request.objectPath;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "PushObjectCache",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new PushObjectCacheResponse({}));
    }
    async pushObjectCache(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.pushObjectCacheWithOptions(request, runtime);
    }
    async refreshObjectCachesWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.objectPath)) {
            query["ObjectPath"] = request.objectPath;
        }
        if (!tea_util_1.default.isUnset(request.objectType)) {
            query["ObjectType"] = request.objectType;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "RefreshObjectCaches",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new RefreshObjectCachesResponse({}));
    }
    async refreshObjectCaches(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.refreshObjectCachesWithOptions(request, runtime);
    }
    async rollbackStagingConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "RollbackStagingConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new RollbackStagingConfigResponse({}));
    }
    async rollbackStagingConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.rollbackStagingConfigWithOptions(request, runtime);
    }
    async setCdnDomainCSRCertificateWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.serverCertificate)) {
            query["ServerCertificate"] = request.serverCertificate;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetCdnDomainCSRCertificate",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetCdnDomainCSRCertificateResponse({}));
    }
    async setCdnDomainCSRCertificate(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setCdnDomainCSRCertificateWithOptions(request, runtime);
    }
    async setCdnDomainSMCertificateWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.certIdentifier)) {
            query["CertIdentifier"] = request.certIdentifier;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.SSLProtocol)) {
            query["SSLProtocol"] = request.SSLProtocol;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetCdnDomainSMCertificate",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetCdnDomainSMCertificateResponse({}));
    }
    async setCdnDomainSMCertificate(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setCdnDomainSMCertificateWithOptions(request, runtime);
    }
    async setCdnDomainStagingConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.functions)) {
            query["Functions"] = request.functions;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetCdnDomainStagingConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetCdnDomainStagingConfigResponse({}));
    }
    async setCdnDomainStagingConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setCdnDomainStagingConfigWithOptions(request, runtime);
    }
    async setConfigOfVersionWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configId)) {
            query["ConfigId"] = request.configId;
        }
        if (!tea_util_1.default.isUnset(request.functionArgs)) {
            query["FunctionArgs"] = request.functionArgs;
        }
        if (!tea_util_1.default.isUnset(request.functionId)) {
            query["FunctionId"] = request.functionId;
        }
        if (!tea_util_1.default.isUnset(request.functionMatches)) {
            query["FunctionMatches"] = request.functionMatches;
        }
        if (!tea_util_1.default.isUnset(request.functionName)) {
            query["FunctionName"] = request.functionName;
        }
        if (!tea_util_1.default.isUnset(request.ownerAccount)) {
            query["OwnerAccount"] = request.ownerAccount;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.versionId)) {
            query["VersionId"] = request.versionId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetConfigOfVersion",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetConfigOfVersionResponse({}));
    }
    async setConfigOfVersion(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setConfigOfVersionWithOptions(request, runtime);
    }
    async setDomainGreenManagerConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.enable)) {
            query["Enable"] = request.enable;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetDomainGreenManagerConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetDomainGreenManagerConfigResponse({}));
    }
    async setDomainGreenManagerConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setDomainGreenManagerConfigWithOptions(request, runtime);
    }
    async setDomainServerCertificateWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.certName)) {
            query["CertName"] = request.certName;
        }
        if (!tea_util_1.default.isUnset(request.certType)) {
            query["CertType"] = request.certType;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.forceSet)) {
            query["ForceSet"] = request.forceSet;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.privateKey)) {
            query["PrivateKey"] = request.privateKey;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.serverCertificate)) {
            query["ServerCertificate"] = request.serverCertificate;
        }
        if (!tea_util_1.default.isUnset(request.serverCertificateStatus)) {
            query["ServerCertificateStatus"] = request.serverCertificateStatus;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetDomainServerCertificate",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetDomainServerCertificateResponse({}));
    }
    async setDomainServerCertificate(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setDomainServerCertificateWithOptions(request, runtime);
    }
    async setErrorPageConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.customPageUrl)) {
            query["CustomPageUrl"] = request.customPageUrl;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageType)) {
            query["PageType"] = request.pageType;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetErrorPageConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetErrorPageConfigResponse({}));
    }
    async setErrorPageConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setErrorPageConfigWithOptions(request, runtime);
    }
    async setHttpErrorPageConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configId)) {
            query["ConfigId"] = request.configId;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.errorCode)) {
            query["ErrorCode"] = request.errorCode;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.pageUrl)) {
            query["PageUrl"] = request.pageUrl;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetHttpErrorPageConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetHttpErrorPageConfigResponse({}));
    }
    async setHttpErrorPageConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setHttpErrorPageConfigWithOptions(request, runtime);
    }
    async setReqHeaderConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.configId)) {
            query["ConfigId"] = request.configId;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.key)) {
            query["Key"] = request.key;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        if (!tea_util_1.default.isUnset(request.value)) {
            query["Value"] = request.value;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetReqHeaderConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetReqHeaderConfigResponse({}));
    }
    async setReqHeaderConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setReqHeaderConfigWithOptions(request, runtime);
    }
    async setUserGreenManagerConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.quota)) {
            query["Quota"] = request.quota;
        }
        if (!tea_util_1.default.isUnset(request.ratio)) {
            query["Ratio"] = request.ratio;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetUserGreenManagerConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetUserGreenManagerConfigResponse({}));
    }
    async setUserGreenManagerConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setUserGreenManagerConfigWithOptions(request, runtime);
    }
    async setWaitingRoomConfigWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.allowPct)) {
            query["AllowPct"] = request.allowPct;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.gapTime)) {
            query["GapTime"] = request.gapTime;
        }
        if (!tea_util_1.default.isUnset(request.maxTimeWait)) {
            query["MaxTimeWait"] = request.maxTimeWait;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.waitUri)) {
            query["WaitUri"] = request.waitUri;
        }
        if (!tea_util_1.default.isUnset(request.waitUrl)) {
            query["WaitUrl"] = request.waitUrl;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "SetWaitingRoomConfig",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new SetWaitingRoomConfigResponse({}));
    }
    async setWaitingRoomConfig(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.setWaitingRoomConfigWithOptions(request, runtime);
    }
    async startCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "StartCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new StartCdnDomainResponse({}));
    }
    async startCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.startCdnDomainWithOptions(request, runtime);
    }
    async stopCdnDomainWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.securityToken)) {
            query["SecurityToken"] = request.securityToken;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "StopCdnDomain",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new StopCdnDomainResponse({}));
    }
    async stopCdnDomain(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.stopCdnDomainWithOptions(request, runtime);
    }
    async tagResourcesWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.resourceId)) {
            query["ResourceId"] = request.resourceId;
        }
        if (!tea_util_1.default.isUnset(request.resourceType)) {
            query["ResourceType"] = request.resourceType;
        }
        if (!tea_util_1.default.isUnset(request.tag)) {
            query["Tag"] = request.tag;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "TagResources",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    }
    async tagResources(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.tagResourcesWithOptions(request, runtime);
    }
    async untagResourcesWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.all)) {
            query["All"] = request.all;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.resourceId)) {
            query["ResourceId"] = request.resourceId;
        }
        if (!tea_util_1.default.isUnset(request.resourceType)) {
            query["ResourceType"] = request.resourceType;
        }
        if (!tea_util_1.default.isUnset(request.tagKey)) {
            query["TagKey"] = request.tagKey;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "UntagResources",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    }
    async untagResources(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.untagResourcesWithOptions(request, runtime);
    }
    async updateCdnDeliverTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let body = {};
        if (!tea_util_1.default.isUnset(request.deliver)) {
            body["Deliver"] = request.deliver;
        }
        if (!tea_util_1.default.isUnset(request.deliverId)) {
            body["DeliverId"] = request.deliverId;
        }
        if (!tea_util_1.default.isUnset(request.domainName)) {
            body["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.name)) {
            body["Name"] = request.name;
        }
        if (!tea_util_1.default.isUnset(request.reports)) {
            body["Reports"] = request.reports;
        }
        if (!tea_util_1.default.isUnset(request.schedule)) {
            body["Schedule"] = request.schedule;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
            body: openapi_util_1.default.parseToMap(body),
        });
        let params = new $OpenApi.Params({
            action: "UpdateCdnDeliverTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new UpdateCdnDeliverTaskResponse({}));
    }
    async updateCdnDeliverTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.updateCdnDeliverTaskWithOptions(request, runtime);
    }
    async updateCdnSubTaskWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        let body = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            body["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.endTime)) {
            body["EndTime"] = request.endTime;
        }
        if (!tea_util_1.default.isUnset(request.reportIds)) {
            body["ReportIds"] = request.reportIds;
        }
        if (!tea_util_1.default.isUnset(request.startTime)) {
            body["StartTime"] = request.startTime;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
            body: openapi_util_1.default.parseToMap(body),
        });
        let params = new $OpenApi.Params({
            action: "UpdateCdnSubTask",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new UpdateCdnSubTaskResponse({}));
    }
    async updateCdnSubTask(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.updateCdnSubTaskWithOptions(request, runtime);
    }
    async updateFCTriggerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.triggerARN)) {
            query["TriggerARN"] = request.triggerARN;
        }
        let body = {};
        if (!tea_util_1.default.isUnset(request.functionARN)) {
            body["FunctionARN"] = request.functionARN;
        }
        if (!tea_util_1.default.isUnset(request.notes)) {
            body["Notes"] = request.notes;
        }
        if (!tea_util_1.default.isUnset(request.roleARN)) {
            body["RoleARN"] = request.roleARN;
        }
        if (!tea_util_1.default.isUnset(request.sourceARN)) {
            body["SourceARN"] = request.sourceARN;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
            body: openapi_util_1.default.parseToMap(body),
        });
        let params = new $OpenApi.Params({
            action: "UpdateFCTrigger",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new UpdateFCTriggerResponse({}));
    }
    async updateFCTrigger(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.updateFCTriggerWithOptions(request, runtime);
    }
    async verifyDomainOwnerWithOptions(request, runtime) {
        tea_util_1.default.validateModel(request);
        let query = {};
        if (!tea_util_1.default.isUnset(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!tea_util_1.default.isUnset(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!tea_util_1.default.isUnset(request.verifyType)) {
            query["VerifyType"] = request.verifyType;
        }
        let req = new $OpenApi.OpenApiRequest({
            query: openapi_util_1.default.query(query),
        });
        let params = new $OpenApi.Params({
            action: "VerifyDomainOwner",
            version: "2018-05-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $tea.cast(await this.callApi(params, req, runtime), new VerifyDomainOwnerResponse({}));
    }
    async verifyDomainOwner(request) {
        let runtime = new $Util.RuntimeOptions({});
        return await this.verifyDomainOwnerWithOptions(request, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 9690:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const default_credential_1 = __importDefault(__nccwpck_require__(6495));
const config_1 = __importDefault(__nccwpck_require__(1140));
class AccessKeyCredential extends default_credential_1.default {
    constructor(accessKeyId, accessKeySecret) {
        if (!accessKeyId) {
            throw new Error('Missing required accessKeyId option in config for access_key');
        }
        if (!accessKeySecret) {
            throw new Error('Missing required accessKeySecret option in config for access_key');
        }
        const conf = new config_1.default({
            type: 'access_key',
            accessKeyId,
            accessKeySecret
        });
        super(conf);
    }
}
exports.default = AccessKeyCredential;
//# sourceMappingURL=access_key_credential.js.map

/***/ }),

/***/ 7311:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const default_credential_1 = __importDefault(__nccwpck_require__(6495));
const config_1 = __importDefault(__nccwpck_require__(1140));
class BearerTokenCredential extends default_credential_1.default {
    constructor(bearerToken) {
        if (!bearerToken) {
            throw new Error('Missing required bearerToken option in config for bearer');
        }
        const conf = new config_1.default({
            type: 'bearer'
        });
        super(conf);
        this.bearerToken = bearerToken;
    }
}
exports.default = BearerTokenCredential;
//# sourceMappingURL=bearer_token_credential.js.map

/***/ }),

/***/ 595:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Config = void 0;
const access_key_credential_1 = __importDefault(__nccwpck_require__(9690));
const sts_token_credential_1 = __importDefault(__nccwpck_require__(8370));
const ecs_ram_role_credential_1 = __importDefault(__nccwpck_require__(4993));
const ram_role_arn_credential_1 = __importDefault(__nccwpck_require__(8470));
const oidc_role_arn_credential_1 = __importDefault(__nccwpck_require__(5236));
const rsa_key_pair_credential_1 = __importDefault(__nccwpck_require__(9904));
const bearer_token_credential_1 = __importDefault(__nccwpck_require__(7311));
const DefaultProvider = __importStar(__nccwpck_require__(3887));
const config_1 = __importDefault(__nccwpck_require__(1140));
exports.Config = config_1.default;
const uri_credential_1 = __importDefault(__nccwpck_require__(7012));
class Credential {
    constructor(config = null, runtime = {}) {
        this.load(config, runtime);
    }
    getAccessKeyId() {
        return this.credential.getAccessKeyId();
    }
    getAccessKeySecret() {
        return this.credential.getAccessKeySecret();
    }
    getSecurityToken() {
        return this.credential.getSecurityToken();
    }
    getBearerToken() {
        return this.credential.getBearerToken();
    }
    getType() {
        return this.credential.getType();
    }
    load(config, runtime) {
        if (!config) {
            this.credential = DefaultProvider.getCredentials();
            return;
        }
        if (!config.type) {
            throw new Error('Missing required type option');
        }
        switch (config.type) {
            case 'access_key':
                this.credential = new access_key_credential_1.default(config.accessKeyId, config.accessKeySecret);
                break;
            case 'sts':
                this.credential = new sts_token_credential_1.default(config.accessKeyId, config.accessKeySecret, config.securityToken);
                break;
            case 'ecs_ram_role':
                this.credential = new ecs_ram_role_credential_1.default(config.roleName);
                break;
            case 'ram_role_arn':
                this.credential = new ram_role_arn_credential_1.default(config, runtime);
                break;
            case 'oidc_role_arn':
                this.credential = new oidc_role_arn_credential_1.default(config, runtime);
                break;
            case 'rsa_key_pair':
                this.credential = new rsa_key_pair_credential_1.default(config.publicKeyId, config.privateKeyFile);
                break;
            case 'bearer':
                this.credential = new bearer_token_credential_1.default(config.bearerToken);
                break;
            case 'credentials_uri':
                this.credential = new uri_credential_1.default(config.credentialsURI);
                break;
            default:
                throw new Error('Invalid type option, support: access_key, sts, ecs_ram_role, ram_role_arn, rsa_key_pair, credentials_uri');
        }
    }
}
exports.default = Credential;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 1140:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const $tea = __importStar(__nccwpck_require__(4165));
class Config extends $tea.Model {
    constructor(config) {
        super(config);
    }
    static names() {
        return {
            accessKeyId: 'accessKeyId',
            accessKeySecret: 'accessKeySecret',
            securityToken: 'securityToken',
            bearerToken: 'bearerToken',
            durationSeconds: 'durationSeconds',
            roleArn: 'roleArn',
            policy: 'policy',
            roleSessionExpiration: 'roleSessionExpiration',
            roleSessionName: 'roleSessionName',
            publicKeyId: 'publicKeyId',
            privateKeyFile: 'privateKeyFile',
            roleName: 'roleName',
            credentialsURI: 'credentialsURI',
            oidcProviderArn: 'oidcProviderArn',
            oidcTokenFilePath: 'oidcTokenFilePath',
            type: 'type',
        };
    }
    static types() {
        return {
            accessKeyId: 'string',
            accessKeySecret: 'string',
            securityToken: 'string',
            bearerToken: 'string',
            durationSeconds: 'number',
            roleArn: 'string',
            policy: 'string',
            roleSessionExpiration: 'number',
            roleSessionName: 'string',
            publicKeyId: 'string',
            privateKeyFile: 'string',
            roleName: 'string',
            credentialsURI: 'string',
            oidcProviderArn: 'string',
            oidcTokenFilePath: 'string',
            type: 'string',
        };
    }
}
exports.default = Config;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class DefaultCredential {
    constructor(config) {
        this.accessKeyId = config.accessKeyId || '';
        this.accessKeySecret = config.accessKeySecret || '';
        this.securityToken = config.securityToken || '';
        this.bearerToken = config.bearerToken || '';
        this.type = config.type || '';
    }
    async getAccessKeyId() {
        return this.accessKeyId;
    }
    async getAccessKeySecret() {
        return this.accessKeySecret;
    }
    async getSecurityToken() {
        return this.securityToken;
    }
    getBearerToken() {
        return this.bearerToken;
    }
    getType() {
        return this.type;
    }
}
exports.default = DefaultCredential;
//# sourceMappingURL=default_credential.js.map

/***/ }),

/***/ 4993:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const session_credential_1 = __importDefault(__nccwpck_require__(6056));
const httpx_1 = __importDefault(__nccwpck_require__(9074));
const config_1 = __importDefault(__nccwpck_require__(1140));
const SECURITY_CRED_URL = 'http://100.100.100.200/latest/meta-data/ram/security-credentials/';
class EcsRamRoleCredential extends session_credential_1.default {
    constructor(roleName = '', runtime = {}) {
        const conf = new config_1.default({
            type: 'ecs_ram_role',
        });
        super(conf);
        this.roleName = roleName;
        this.runtime = runtime;
        this.sessionCredential = null;
    }
    async getBody(url) {
        const response = await httpx_1.default.request(url, {});
        return (await httpx_1.default.read(response, 'utf8'));
    }
    async updateCredential() {
        const roleName = await this.getRoleName();
        const url = SECURITY_CRED_URL + roleName;
        const body = await this.getBody(url);
        const json = JSON.parse(body);
        this.sessionCredential = {
            AccessKeyId: json.AccessKeyId,
            AccessKeySecret: json.AccessKeySecret,
            Expiration: json.Expiration,
            SecurityToken: json.SecurityToken,
        };
    }
    async getRoleName() {
        if (this.roleName && this.roleName.length) {
            return this.roleName;
        }
        return await this.getBody(SECURITY_CRED_URL);
    }
}
exports.default = EcsRamRoleCredential;
//# sourceMappingURL=ecs_ram_role_credential.js.map

/***/ }),

/***/ 5236:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const session_credential_1 = __importDefault(__nccwpck_require__(6056));
const http_1 = __nccwpck_require__(2291);
const config_1 = __importDefault(__nccwpck_require__(1140));
const fs_1 = __importDefault(__nccwpck_require__(5747));
class OidcRoleArnCredential extends session_credential_1.default {
    constructor(config, runtime = {}) {
        if (!config.roleArn) {
            throw new Error('Missing required roleArn option in config for oidc_role_arn');
        }
        if (!config.oidcProviderArn) {
            throw new Error('Missing required oidcProviderArn option in config for oidc_role_arn');
        }
        if (!config.oidcTokenFilePath) {
            config.oidcTokenFilePath = process.env['ALIBABA_CLOUD_OIDC_TOKEN_FILE'];
            if (!config.oidcTokenFilePath) {
                throw new Error('oidcTokenFilePath is not exists and env ALIBABA_CLOUD_OIDC_TOKEN_FILE is null.');
            }
        }
        const conf = new config_1.default({
            type: 'oidc_role_arn',
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret
        });
        super(conf);
        this.oidcTokenFilePath = config.oidcTokenFilePath;
        this.roleArn = config.roleArn;
        this.policy = config.policy;
        this.oidcProviderArn = config.oidcProviderArn;
        this.durationSeconds = config.roleSessionExpiration || 3600;
        this.roleSessionName = config.roleSessionName || 'role_session_name';
        runtime.method = 'POST';
        this.runtime = runtime;
        this.host = 'https://sts.aliyuncs.com';
    }
    getOdicToken(oidcTokenFilePath) {
        if (!fs_1.default.existsSync(oidcTokenFilePath)) {
            throw new Error(`oidcTokenFilePath ${oidcTokenFilePath}  is not exists.`);
        }
        let oidcToken = null;
        try {
            oidcToken = fs_1.default.readFileSync(oidcTokenFilePath, 'utf-8');
        }
        catch (err) {
            throw new Error(`oidcTokenFilePath ${oidcTokenFilePath} cannot be read.`);
        }
        return oidcToken;
    }
    async updateCredential() {
        const oidcToken = this.getOdicToken(this.oidcTokenFilePath);
        const params = {
            Action: 'AssumeRoleWithOIDC',
            RoleArn: this.roleArn,
            OIDCProviderArn: this.oidcProviderArn,
            OIDCToken: oidcToken,
            DurationSeconds: this.durationSeconds,
            RoleSessionName: this.roleSessionName
        };
        if (this.policy) {
            params.policy = this.policy;
        }
        const json = await http_1.request(this.host, params, this.runtime, this.accessKeySecret);
        this.sessionCredential = json.Credentials;
    }
}
exports.default = OidcRoleArnCredential;
//# sourceMappingURL=oidc_role_arn_credential.js.map

/***/ }),

/***/ 787:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const uri_credential_1 = __importDefault(__nccwpck_require__(7012));
exports.default = {
    getCredential() {
        const credentialsURI = process.env.ALIBABA_CLOUD_CREDENTIALS_URI;
        if (credentialsURI) {
            return new uri_credential_1.default(credentialsURI);
        }
        return null;
    }
};
//# sourceMappingURL=credentials_uri_provider.js.map

/***/ }),

/***/ 4316:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const access_key_credential_1 = __importDefault(__nccwpck_require__(9690));
exports.default = {
    getCredential() {
        const accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID;
        const accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET;
        if (accessKeyId === undefined || accessKeySecret === undefined) {
            return null;
        }
        if (accessKeyId === null || accessKeyId === '') {
            throw new Error('Environment variable ALIBABA_CLOUD_ACCESS_KEY_ID cannot be empty');
        }
        if (accessKeySecret === null || accessKeySecret === '') {
            throw new Error('Environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET cannot be empty');
        }
        return new access_key_credential_1.default(accessKeyId, accessKeySecret);
    }
};
//# sourceMappingURL=environment_variable_credentials_provider.js.map

/***/ }),

/***/ 1897:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ecs_ram_role_credential_1 = __importDefault(__nccwpck_require__(4993));
exports.default = {
    getCredential() {
        const roleName = process.env.ALIBABA_CLOUD_ECS_METADATA;
        if (roleName && roleName.length) {
            return new ecs_ram_role_credential_1.default(roleName);
        }
        return null;
    }
};
//# sourceMappingURL=instance_ram_role_credentials_provider.js.map

/***/ }),

/***/ 746:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const access_key_credential_1 = __importDefault(__nccwpck_require__(9690));
const sts_token_credential_1 = __importDefault(__nccwpck_require__(8370));
const ecs_ram_role_credential_1 = __importDefault(__nccwpck_require__(4993));
const ram_role_arn_credential_1 = __importDefault(__nccwpck_require__(8470));
const rsa_key_pair_credential_1 = __importDefault(__nccwpck_require__(9904));
const bearer_token_credential_1 = __importDefault(__nccwpck_require__(7311));
const utils = __importStar(__nccwpck_require__(381));
const fs_1 = __importDefault(__nccwpck_require__(5747));
const config_1 = __importDefault(__nccwpck_require__(1140));
const DEFAULT_PATH = process.env.HOME + '/.alibabacloud/credentials';
exports.default = {
    getCredential(credentialName = 'default') {
        let fileContent = null;
        const credentialFile = process.env.ALIBABA_CLOUD_CREDENTIALS_FILE;
        if (credentialFile === undefined) {
            if (fs_1.default.existsSync(DEFAULT_PATH)) {
                const content = utils.parseFile(DEFAULT_PATH, true);
                if (content) {
                    fileContent = content;
                }
            }
        }
        else {
            if (credentialFile === null || credentialFile === '') {
                throw new Error('Environment variable credentialFile cannot be empty');
            }
            if (!fs_1.default.existsSync(credentialFile)) {
                throw new Error(`credentialFile ${credentialFile} cannot be empty`);
            }
            fileContent = utils.parseFile(credentialFile);
        }
        if (!fileContent) {
            return null;
        }
        const config = fileContent[credentialName] || {};
        if (!config.type) {
            throw new Error('Missing required type option in credentialFile');
        }
        switch (config.type) {
            case 'access_key':
                return new access_key_credential_1.default(config.access_key_id, config.access_key_secret);
            case 'sts':
                return new sts_token_credential_1.default(config.access_key_id, config.access_key_secret, config.security_token);
            case 'ecs_ram_role':
                return new ecs_ram_role_credential_1.default(config.role_name);
            case 'ram_role_arn': {
                const conf = new config_1.default({
                    roleArn: config.role_arn,
                    accessKeyId: config.access_key_id,
                    accessKeySecret: config.access_key_secret
                });
                return new ram_role_arn_credential_1.default(conf);
            }
            case 'rsa_key_pair':
                return new rsa_key_pair_credential_1.default(config.public_key_id, config.private_key_file);
            case 'bearer':
                return new bearer_token_credential_1.default(config.bearer_token);
            default:
                throw new Error('Invalid type option, support: access_key, sts, ecs_ram_role, ram_role_arn, rsa_key_pair');
        }
    }
};
//# sourceMappingURL=profile_credentials_provider.js.map

/***/ }),

/***/ 3887:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCredentials = void 0;
const environment_variable_credentials_provider_1 = __importDefault(__nccwpck_require__(4316));
const profile_credentials_provider_1 = __importDefault(__nccwpck_require__(746));
const instance_ram_role_credentials_provider_1 = __importDefault(__nccwpck_require__(1897));
const credentials_uri_provider_1 = __importDefault(__nccwpck_require__(787));
const defaultProviders = [
    environment_variable_credentials_provider_1.default,
    profile_credentials_provider_1.default,
    instance_ram_role_credentials_provider_1.default,
    credentials_uri_provider_1.default
];
function getCredentials(providers = null) {
    const providerChain = providers || defaultProviders;
    for (const provider of providerChain) {
        const credential = provider.getCredential();
        if (credential) {
            return credential;
        }
    }
    return null;
}
exports.getCredentials = getCredentials;
//# sourceMappingURL=provider_chain.js.map

/***/ }),

/***/ 8470:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const session_credential_1 = __importDefault(__nccwpck_require__(6056));
const http_1 = __nccwpck_require__(2291);
const config_1 = __importDefault(__nccwpck_require__(1140));
class RamRoleArnCredential extends session_credential_1.default {
    constructor(config, runtime = {}) {
        if (!config.accessKeyId) {
            throw new Error('Missing required accessKeyId option in config for ram_role_arn');
        }
        if (!config.accessKeySecret) {
            throw new Error('Missing required accessKeySecret option in config for ram_role_arn');
        }
        if (!config.roleArn) {
            throw new Error('Missing required roleArn option in config for ram_role_arn');
        }
        const conf = new config_1.default({
            type: 'ram_role_arn',
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
        });
        super(conf);
        this.roleArn = config.roleArn;
        this.policy = config.policy;
        this.durationSeconds = config.roleSessionExpiration || 3600;
        this.roleSessionName = config.roleSessionName || 'role_session_name';
        this.runtime = runtime;
        this.host = 'https://sts.aliyuncs.com';
    }
    async updateCredential() {
        const params = {
            accessKeyId: this.accessKeyId,
            roleArn: this.roleArn,
            action: 'AssumeRole',
            durationSeconds: this.durationSeconds,
            roleSessionName: this.roleSessionName
        };
        if (this.policy) {
            params.policy = this.policy;
        }
        const json = await http_1.request(this.host, params, this.runtime, this.accessKeySecret);
        this.sessionCredential = json.Credentials;
    }
}
exports.default = RamRoleArnCredential;
//# sourceMappingURL=ram_role_arn_credential.js.map

/***/ }),

/***/ 9904:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __importDefault(__nccwpck_require__(5747));
const session_credential_1 = __importDefault(__nccwpck_require__(6056));
const utils = __importStar(__nccwpck_require__(381));
const http_1 = __nccwpck_require__(2291);
const config_1 = __importDefault(__nccwpck_require__(1140));
const SECURITY_CRED_URL = 'http://100.100.100.200/latest/meta-data/ram/security-credentials/';
class RsaKeyPairCredential extends session_credential_1.default {
    constructor(publicKeyId, privateKeyFile) {
        if (!publicKeyId) {
            throw new Error('Missing required publicKeyId option in config for rsa_key_pair');
        }
        if (!privateKeyFile) {
            throw new Error('Missing required privateKeyFile option in config for rsa_key_pair');
        }
        if (!fs_1.default.existsSync(privateKeyFile)) {
            throw new Error(`privateKeyFile ${privateKeyFile} cannot be empty`);
        }
        const conf = new config_1.default({
            type: 'rsa_key_pair'
        });
        super(conf);
        this.privateKey = utils.parseFile(privateKeyFile);
        this.publicKeyId = publicKeyId;
    }
    async updateCredential() {
        const url = SECURITY_CRED_URL + this.roleName;
        const json = await http_1.request(url, {
            accessKeyId: this.publicKeyId,
            action: 'GenerateSessionAccessKey',
            durationSeconds: 3600,
            signatureMethod: 'SHA256withRSA',
            signatureType: 'PRIVATEKEY',
        }, {}, this.privateKey);
        this.sessionCredential = json.Credentials;
    }
}
exports.default = RsaKeyPairCredential;
//# sourceMappingURL=rsa_key_pair_credential.js.map

/***/ }),

/***/ 6056:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const default_credential_1 = __importDefault(__nccwpck_require__(6495));
const utils = __importStar(__nccwpck_require__(381));
const config_1 = __importDefault(__nccwpck_require__(1140));
class SessionCredential extends default_credential_1.default {
    constructor(config) {
        const conf = new config_1.default({
            type: config.type,
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
        });
        super(conf);
        this.sessionCredential = null;
        this.durationSeconds = config.durationSeconds || 3600;
    }
    async updateCredential() {
        throw new Error('need implemented in sub-class');
    }
    async ensureCredential() {
        const needUpdate = this.needUpdateCredential();
        if (needUpdate) {
            await this.updateCredential();
        }
    }
    async getAccessKeyId() {
        await this.ensureCredential();
        return this.sessionCredential.AccessKeyId;
    }
    async getAccessKeySecret() {
        await this.ensureCredential();
        return this.sessionCredential.AccessKeySecret;
    }
    async getSecurityToken() {
        await this.ensureCredential();
        return this.sessionCredential.SecurityToken;
    }
    needUpdateCredential() {
        if (!this.sessionCredential || !this.sessionCredential.Expiration || !this.sessionCredential.AccessKeyId || !this.sessionCredential.AccessKeySecret || !this.sessionCredential.SecurityToken) {
            return true;
        }
        const expireTime = utils.timestamp(new Date(), this.durationSeconds * 0.05 * 1000);
        if (this.sessionCredential.Expiration < expireTime) {
            return true;
        }
        return false;
    }
}
exports.default = SessionCredential;
//# sourceMappingURL=session_credential.js.map

/***/ }),

/***/ 8370:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const default_credential_1 = __importDefault(__nccwpck_require__(6495));
const config_1 = __importDefault(__nccwpck_require__(1140));
class StsTokenCredential extends default_credential_1.default {
    constructor(accessKeyId, accessKeySecret, securityToken) {
        if (!accessKeyId) {
            throw new Error('Missing required accessKeyId option in config for sts');
        }
        if (!accessKeySecret) {
            throw new Error('Missing required accessKeySecret option in config for sts');
        }
        if (!securityToken) {
            throw new Error('Missing required securityToken option in config for sts');
        }
        const conf = new config_1.default({
            type: 'sts',
            accessKeyId,
            accessKeySecret,
            securityToken
        });
        super(conf);
    }
}
exports.default = StsTokenCredential;
//# sourceMappingURL=sts_token_credential.js.map

/***/ }),

/***/ 7012:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const httpx_1 = __importDefault(__nccwpck_require__(9074));
const config_1 = __importDefault(__nccwpck_require__(1140));
const session_credential_1 = __importDefault(__nccwpck_require__(6056));
class URICredential extends session_credential_1.default {
    constructor(uri) {
        if (!uri) {
            throw new Error('Missing required credentialsURI option in config for credentials_uri');
        }
        const conf = new config_1.default({
            type: 'credentials_uri',
            credentialsURI: uri
        });
        super(conf);
        this.credentialsURI = uri;
    }
    async updateCredential() {
        const url = this.credentialsURI;
        const response = await httpx_1.default.request(url, {});
        if (response.statusCode !== 200) {
            throw new Error(`Get credentials from ${url} failed, status code is ${response.statusCode}`);
        }
        const body = (await httpx_1.default.read(response, 'utf8'));
        let json;
        try {
            json = JSON.parse(body);
        }
        catch (ex) {
            throw new Error(`Get credentials from ${url} failed, unmarshal response failed, JSON is: ${body}`);
        }
        if (json.Code !== 'Success') {
            throw new Error(`Get credentials from ${url} failed, Code is ${json.Code}`);
        }
        this.sessionCredential = {
            AccessKeyId: json.AccessKeyId,
            AccessKeySecret: json.AccessKeySecret,
            Expiration: json.Expiration,
            SecurityToken: json.SecurityToken,
        };
    }
}
exports.default = URICredential;
//# sourceMappingURL=uri_credential.js.map

/***/ }),

/***/ 7778:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_CLIENT = exports.DEFAULT_UA = void 0;
const os = __importStar(__nccwpck_require__(2087));
const package_json_1 = __importDefault(__nccwpck_require__(254));
exports.DEFAULT_UA = `AlibabaCloud (${os.platform()}; ${os.arch()}) ` + `Node.js/${process.version} Core/${package_json_1.default.version}`;
exports.DEFAULT_CLIENT = `Node.js(${process.version}), ${package_json_1.default.name}: ${package_json_1.default.version}`;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 2291:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = void 0;
const httpx_1 = __importDefault(__nccwpck_require__(9074));
const kitx = __importStar(__nccwpck_require__(8683));
const helper = __importStar(__nccwpck_require__(7778));
const utils = __importStar(__nccwpck_require__(381));
const STATUS_CODE = new Set([200, '200', 'OK', 'Success']);
function firstLetterUpper(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
function formatParams(params) {
    const keys = Object.keys(params);
    const newParams = {};
    for (const key of keys) {
        newParams[firstLetterUpper(key)] = params[key];
    }
    return newParams;
}
function encode(str) {
    const result = encodeURIComponent(str);
    return result.replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}
function replaceRepeatList(target, key, repeat) {
    for (let i = 0; i < repeat.length; i++) {
        const item = repeat[i];
        if (item && typeof item === 'object') {
            const keys = Object.keys(item);
            for (const itemKey of keys) {
                target[`${key}.${i + 1}.${itemKey}`] = item[itemKey];
            }
        }
        else {
            target[`${key}.${i + 1}`] = item;
        }
    }
}
function flatParams(params) {
    const target = {};
    const keys = Object.keys(params);
    for (const key of keys) {
        const value = params[key];
        if (Array.isArray(value)) {
            replaceRepeatList(target, key, value);
        }
        else {
            target[key] = value;
        }
    }
    return target;
}
function normalize(params) {
    const list = [];
    const flated = flatParams(params);
    const keys = Object.keys(flated).sort();
    for (const key of keys) {
        const value = flated[key];
        list.push([encode(key), encode(value)]); // push []
    }
    return list;
}
function canonicalize(normalized) {
    const fields = [];
    for (const [key, value] of normalized) {
        fields.push(key + '=' + value);
    }
    return fields.join('&');
}
function _buildParams() {
    const defaultParams = {
        Format: 'JSON',
        SignatureMethod: 'HMAC-SHA1',
        SignatureNonce: kitx.makeNonce(),
        SignatureVersion: '1.0',
        Timestamp: utils.timestamp(),
        Version: '2015-04-01',
        RegionId: 'cn-hangzhou'
    };
    return defaultParams;
}
async function request(host, params = {}, opts = {}, accessKeySecret) {
    // 1. compose params and opts
    let options = Object.assign({ headers: {
            'x-sdk-client': helper.DEFAULT_CLIENT,
            'user-agent': helper.DEFAULT_UA
        } }, opts);
    // format params until formatParams is false
    if (options.formatParams !== false) {
        params = formatParams(params);
    }
    params = Object.assign(Object.assign({}, _buildParams()), params);
    // 2. calculate signature
    const method = (opts.method || 'GET').toUpperCase();
    const normalized = normalize(params);
    const canonicalized = canonicalize(normalized);
    // 2.1 get string to sign
    const stringToSign = `${method}&${encode('/')}&${encode(canonicalized)}`;
    // 2.2 get signature
    const key = accessKeySecret + '&';
    const signature = kitx.sha1(stringToSign, key, 'base64');
    // add signature
    normalized.push(['Signature', encode(signature)]);
    // 3. generate final url
    const url = opts.method === 'POST' ? `${host}/` : `${host}/?${canonicalize(normalized)}`;
    // 4. send request
    if (opts.method === 'POST') {
        opts.headers = opts.headers || {};
        opts.headers['content-type'] = 'application/x-www-form-urlencoded';
        opts.data = canonicalize(normalized);
    }
    const response = await httpx_1.default.request(url, opts);
    const buffer = await httpx_1.default.read(response, 'utf8');
    const json = JSON.parse(buffer);
    if (json.Code && !STATUS_CODE.has(json.Code)) {
        const err = new Error(`${json.Message}`);
        err.name = json.Code + 'Error';
        err.data = json;
        err.code = json.Code;
        err.url = url;
        throw err;
    }
    return json;
}
exports.request = request;
//# sourceMappingURL=http.js.map

/***/ }),

/***/ 381:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseFile = exports.timestamp = void 0;
const ini = __importStar(__nccwpck_require__(8885));
const kitx = __importStar(__nccwpck_require__(8683));
const fs_1 = __importDefault(__nccwpck_require__(5747));
function timestamp(dateStr, timeChange) {
    let date = new Date(dateStr);
    if (!dateStr || isNaN(date.getTime())) {
        date = new Date();
    }
    if (timeChange) {
        date.setTime(date.getTime() + timeChange);
    }
    const YYYY = date.getUTCFullYear();
    const MM = kitx.pad2(date.getUTCMonth() + 1);
    const DD = kitx.pad2(date.getUTCDate());
    const HH = kitx.pad2(date.getUTCHours());
    const mm = kitx.pad2(date.getUTCMinutes());
    const ss = kitx.pad2(date.getUTCSeconds());
    // 删除掉毫秒部分
    return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}Z`;
}
exports.timestamp = timestamp;
function parseFile(file, ignoreErr = false) {
    // check read permission
    try {
        fs_1.default.accessSync(file, fs_1.default.constants.R_OK);
    }
    catch (e) {
        if (ignoreErr) {
            return null;
        }
        throw new Error('Has no read permission to credentials file');
    }
    return ini.parse(fs_1.default.readFileSync(file, 'utf-8'));
}
exports.parseFile = parseFile;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 2306:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.getEndpointRules = function (product, regionId, endpointType, network, suffix) {
        var result;
        if (network && network.length && network != "public") {
            network = "-" + network;
        }
        else {
            network = "";
        }
        suffix = suffix || "";
        if (suffix.length) {
            suffix = "-" + suffix;
        }
        if (endpointType == "regional") {
            if (!regionId || !regionId.length) {
                throw new Error("RegionId is empty, please set a valid RegionId");
            }
            result = "" + product + suffix + network + "." + regionId + ".aliyuncs.com";
        }
        else {
            result = "" + product + suffix + network + ".aliyuncs.com";
        }
        return result;
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 2652:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterceptorContextResponse = exports.InterceptorContextConfiguration = exports.InterceptorContextRequest = exports.AttributeMap = exports.InterceptorContext = void 0;
// This file is auto-generated, don't edit it
const credentials_1 = __importDefault(__nccwpck_require__(595));
const $tea = __importStar(__nccwpck_require__(4165));
class InterceptorContext extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            request: 'request',
            configuration: 'configuration',
            response: 'response',
        };
    }
    static types() {
        return {
            request: InterceptorContextRequest,
            configuration: InterceptorContextConfiguration,
            response: InterceptorContextResponse,
        };
    }
}
exports.InterceptorContext = InterceptorContext;
class AttributeMap extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            attributes: 'attributes',
            key: 'key',
        };
    }
    static types() {
        return {
            attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            key: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    }
}
exports.AttributeMap = AttributeMap;
class InterceptorContextRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            query: 'query',
            body: 'body',
            stream: 'stream',
            hostMap: 'hostMap',
            pathname: 'pathname',
            productId: 'productId',
            action: 'action',
            version: 'version',
            protocol: 'protocol',
            method: 'method',
            authType: 'authType',
            bodyType: 'bodyType',
            reqBodyType: 'reqBodyType',
            style: 'style',
            credential: 'credential',
            signatureVersion: 'signatureVersion',
            signatureAlgorithm: 'signatureAlgorithm',
            userAgent: 'userAgent',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: 'any',
            stream: 'Readable',
            hostMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            pathname: 'string',
            productId: 'string',
            action: 'string',
            version: 'string',
            protocol: 'string',
            method: 'string',
            authType: 'string',
            bodyType: 'string',
            reqBodyType: 'string',
            style: 'string',
            credential: credentials_1.default,
            signatureVersion: 'string',
            signatureAlgorithm: 'string',
            userAgent: 'string',
        };
    }
}
exports.InterceptorContextRequest = InterceptorContextRequest;
class InterceptorContextConfiguration extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            regionId: 'regionId',
            endpoint: 'endpoint',
            endpointRule: 'endpointRule',
            endpointMap: 'endpointMap',
            endpointType: 'endpointType',
            network: 'network',
            suffix: 'suffix',
        };
    }
    static types() {
        return {
            regionId: 'string',
            endpoint: 'string',
            endpointRule: 'string',
            endpointMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            endpointType: 'string',
            network: 'string',
            suffix: 'string',
        };
    }
}
exports.InterceptorContextConfiguration = InterceptorContextConfiguration;
class InterceptorContextResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            statusCode: 'statusCode',
            headers: 'headers',
            body: 'body',
            deserializedBody: 'deserializedBody',
        };
    }
    static types() {
        return {
            statusCode: 'number',
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: 'Readable',
            deserializedBody: 'any',
        };
    }
}
exports.InterceptorContextResponse = InterceptorContextResponse;
class Client {
    constructor() {
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 6642:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Params = exports.OpenApiRequest = exports.Config = void 0;
// This file is auto-generated, don't edit it
/**
 * This is for OpenApi SDK
 */
const tea_util_1 = __importDefault(__nccwpck_require__(1979));
const credentials_1 = __importStar(__nccwpck_require__(595)), $Credential = credentials_1;
const openapi_util_1 = __importDefault(__nccwpck_require__(8190));
const $SPI = __importStar(__nccwpck_require__(2652));
const $tea = __importStar(__nccwpck_require__(4165));
/**
 * Model for initing client
 */
class Config extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            accessKeyId: 'accessKeyId',
            accessKeySecret: 'accessKeySecret',
            securityToken: 'securityToken',
            protocol: 'protocol',
            method: 'method',
            regionId: 'regionId',
            readTimeout: 'readTimeout',
            connectTimeout: 'connectTimeout',
            httpProxy: 'httpProxy',
            httpsProxy: 'httpsProxy',
            credential: 'credential',
            endpoint: 'endpoint',
            noProxy: 'noProxy',
            maxIdleConns: 'maxIdleConns',
            network: 'network',
            userAgent: 'userAgent',
            suffix: 'suffix',
            socks5Proxy: 'socks5Proxy',
            socks5NetWork: 'socks5NetWork',
            endpointType: 'endpointType',
            openPlatformEndpoint: 'openPlatformEndpoint',
            type: 'type',
            signatureVersion: 'signatureVersion',
            signatureAlgorithm: 'signatureAlgorithm',
        };
    }
    static types() {
        return {
            accessKeyId: 'string',
            accessKeySecret: 'string',
            securityToken: 'string',
            protocol: 'string',
            method: 'string',
            regionId: 'string',
            readTimeout: 'number',
            connectTimeout: 'number',
            httpProxy: 'string',
            httpsProxy: 'string',
            credential: credentials_1.default,
            endpoint: 'string',
            noProxy: 'string',
            maxIdleConns: 'number',
            network: 'string',
            userAgent: 'string',
            suffix: 'string',
            socks5Proxy: 'string',
            socks5NetWork: 'string',
            endpointType: 'string',
            openPlatformEndpoint: 'string',
            type: 'string',
            signatureVersion: 'string',
            signatureAlgorithm: 'string',
        };
    }
}
exports.Config = Config;
class OpenApiRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            headers: 'headers',
            query: 'query',
            body: 'body',
            stream: 'stream',
            hostMap: 'hostMap',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: 'any',
            stream: 'Readable',
            hostMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    }
}
exports.OpenApiRequest = OpenApiRequest;
class Params extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            action: 'action',
            version: 'version',
            protocol: 'protocol',
            pathname: 'pathname',
            method: 'method',
            authType: 'authType',
            bodyType: 'bodyType',
            reqBodyType: 'reqBodyType',
            style: 'style',
        };
    }
    static types() {
        return {
            action: 'string',
            version: 'string',
            protocol: 'string',
            pathname: 'string',
            method: 'string',
            authType: 'string',
            bodyType: 'string',
            reqBodyType: 'string',
            style: 'string',
        };
    }
}
exports.Params = Params;
class Client {
    /**
     * Init client with Config
     * @param config config contains the necessary information to create a client
     */
    constructor(config) {
        if (tea_util_1.default.isUnset($tea.toMap(config))) {
            throw $tea.newError({
                code: "ParameterMissing",
                message: "'config' can not be unset",
            });
        }
        if (!tea_util_1.default.empty(config.accessKeyId) && !tea_util_1.default.empty(config.accessKeySecret)) {
            if (!tea_util_1.default.empty(config.securityToken)) {
                config.type = "sts";
            }
            else {
                config.type = "access_key";
            }
            let credentialConfig = new $Credential.Config({
                accessKeyId: config.accessKeyId,
                type: config.type,
                accessKeySecret: config.accessKeySecret,
                securityToken: config.securityToken,
            });
            this._credential = new credentials_1.default(credentialConfig);
        }
        else if (!tea_util_1.default.isUnset(config.credential)) {
            this._credential = config.credential;
        }
        this._endpoint = config.endpoint;
        this._endpointType = config.endpointType;
        this._network = config.network;
        this._suffix = config.suffix;
        this._protocol = config.protocol;
        this._method = config.method;
        this._regionId = config.regionId;
        this._userAgent = config.userAgent;
        this._readTimeout = config.readTimeout;
        this._connectTimeout = config.connectTimeout;
        this._httpProxy = config.httpProxy;
        this._httpsProxy = config.httpsProxy;
        this._noProxy = config.noProxy;
        this._socks5Proxy = config.socks5Proxy;
        this._socks5NetWork = config.socks5NetWork;
        this._maxIdleConns = config.maxIdleConns;
        this._signatureVersion = config.signatureVersion;
        this._signatureAlgorithm = config.signatureAlgorithm;
    }
    /**
     * Encapsulate the request and invoke the network
     * @param action api name
     * @param version product version
     * @param protocol http or https
     * @param method e.g. GET
     * @param authType authorization type e.g. AK
     * @param bodyType response body type e.g. String
     * @param request object of OpenApiRequest
     * @param runtime which controls some details of call api, such as retry times
     * @return the response
     */
    async doRPCRequest(action, version, protocol, method, authType, bodyType, request, runtime) {
        let _runtime = {
            timeouted: "retry",
            readTimeout: tea_util_1.default.defaultNumber(runtime.readTimeout, this._readTimeout),
            connectTimeout: tea_util_1.default.defaultNumber(runtime.connectTimeout, this._connectTimeout),
            httpProxy: tea_util_1.default.defaultString(runtime.httpProxy, this._httpProxy),
            httpsProxy: tea_util_1.default.defaultString(runtime.httpsProxy, this._httpsProxy),
            noProxy: tea_util_1.default.defaultString(runtime.noProxy, this._noProxy),
            socks5Proxy: tea_util_1.default.defaultString(runtime.socks5Proxy, this._socks5Proxy),
            socks5NetWork: tea_util_1.default.defaultString(runtime.socks5NetWork, this._socks5NetWork),
            maxIdleConns: tea_util_1.default.defaultNumber(runtime.maxIdleConns, this._maxIdleConns),
            retry: {
                retryable: runtime.autoretry,
                maxAttempts: tea_util_1.default.defaultNumber(runtime.maxAttempts, 3),
            },
            backoff: {
                policy: tea_util_1.default.defaultString(runtime.backoffPolicy, "no"),
                period: tea_util_1.default.defaultNumber(runtime.backoffPeriod, 1),
            },
            ignoreSSL: runtime.ignoreSSL,
        };
        let _lastRequest = null;
        let _now = Date.now();
        let _retryTimes = 0;
        while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
            if (_retryTimes > 0) {
                let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
                if (_backoffTime > 0) {
                    await $tea.sleep(_backoffTime);
                }
            }
            _retryTimes = _retryTimes + 1;
            try {
                let request_ = new $tea.Request();
                request_.protocol = tea_util_1.default.defaultString(this._protocol, protocol);
                request_.method = method;
                request_.pathname = "/";
                request_.query = Object.assign({ Action: action, Format: "json", Version: version, Timestamp: openapi_util_1.default.getTimestamp(), SignatureNonce: tea_util_1.default.getNonce() }, request.query);
                let headers = this.getRpcHeaders();
                if (tea_util_1.default.isUnset(headers)) {
                    // endpoint is setted in product client
                    request_.headers = {
                        host: this._endpoint,
                        'x-acs-version': version,
                        'x-acs-action': action,
                        'user-agent': this.getUserAgent(),
                    };
                }
                else {
                    request_.headers = Object.assign({ host: this._endpoint, 'x-acs-version': version, 'x-acs-action': action, 'user-agent': this.getUserAgent() }, headers);
                }
                if (!tea_util_1.default.isUnset(request.body)) {
                    let m = tea_util_1.default.assertAsMap(request.body);
                    let tmp = tea_util_1.default.anyifyMapValue(openapi_util_1.default.query(m));
                    request_.body = new $tea.BytesReadable(tea_util_1.default.toFormString(tmp));
                    request_.headers["content-type"] = "application/x-www-form-urlencoded";
                }
                if (!tea_util_1.default.equalString(authType, "Anonymous")) {
                    let accessKeyId = await this.getAccessKeyId();
                    let accessKeySecret = await this.getAccessKeySecret();
                    let securityToken = await this.getSecurityToken();
                    if (!tea_util_1.default.empty(securityToken)) {
                        request_.query["SecurityToken"] = securityToken;
                    }
                    request_.query["SignatureMethod"] = "HMAC-SHA1";
                    request_.query["SignatureVersion"] = "1.0";
                    request_.query["AccessKeyId"] = accessKeyId;
                    let t = null;
                    if (!tea_util_1.default.isUnset(request.body)) {
                        t = tea_util_1.default.assertAsMap(request.body);
                    }
                    let signedParam = Object.assign(Object.assign({}, request_.query), openapi_util_1.default.query(t));
                    request_.query["Signature"] = openapi_util_1.default.getRPCSignature(signedParam, request_.method, accessKeySecret);
                }
                _lastRequest = request_;
                let response_ = await $tea.doAction(request_, _runtime);
                if (tea_util_1.default.is4xx(response_.statusCode) || tea_util_1.default.is5xx(response_.statusCode)) {
                    let _res = await tea_util_1.default.readAsJSON(response_.body);
                    let err = tea_util_1.default.assertAsMap(_res);
                    let requestId = Client.defaultAny(err["RequestId"], err["requestId"]);
                    throw $tea.newError({
                        code: `${Client.defaultAny(err["Code"], err["code"])}`,
                        message: `code: ${response_.statusCode}, ${Client.defaultAny(err["Message"], err["message"])} request id: ${requestId}`,
                        data: err,
                    });
                }
                if (tea_util_1.default.equalString(bodyType, "binary")) {
                    let resp = {
                        body: response_.body,
                        headers: response_.headers,
                    };
                    return resp;
                }
                else if (tea_util_1.default.equalString(bodyType, "byte")) {
                    let byt = await tea_util_1.default.readAsBytes(response_.body);
                    return {
                        body: byt,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "string")) {
                    let str = await tea_util_1.default.readAsString(response_.body);
                    return {
                        body: str,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "json")) {
                    let obj = await tea_util_1.default.readAsJSON(response_.body);
                    let res = tea_util_1.default.assertAsMap(obj);
                    return {
                        body: res,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "array")) {
                    let arr = await tea_util_1.default.readAsJSON(response_.body);
                    return {
                        body: arr,
                        headers: response_.headers,
                    };
                }
                else {
                    return {
                        headers: response_.headers,
                    };
                }
            }
            catch (ex) {
                if ($tea.isRetryable(ex)) {
                    continue;
                }
                throw ex;
            }
        }
        throw $tea.newUnretryableError(_lastRequest);
    }
    /**
     * Encapsulate the request and invoke the network
     * @param action api name
     * @param version product version
     * @param protocol http or https
     * @param method e.g. GET
     * @param authType authorization type e.g. AK
     * @param pathname pathname of every api
     * @param bodyType response body type e.g. String
     * @param request object of OpenApiRequest
     * @param runtime which controls some details of call api, such as retry times
     * @return the response
     */
    async doROARequest(action, version, protocol, method, authType, pathname, bodyType, request, runtime) {
        let _runtime = {
            timeouted: "retry",
            readTimeout: tea_util_1.default.defaultNumber(runtime.readTimeout, this._readTimeout),
            connectTimeout: tea_util_1.default.defaultNumber(runtime.connectTimeout, this._connectTimeout),
            httpProxy: tea_util_1.default.defaultString(runtime.httpProxy, this._httpProxy),
            httpsProxy: tea_util_1.default.defaultString(runtime.httpsProxy, this._httpsProxy),
            noProxy: tea_util_1.default.defaultString(runtime.noProxy, this._noProxy),
            socks5Proxy: tea_util_1.default.defaultString(runtime.socks5Proxy, this._socks5Proxy),
            socks5NetWork: tea_util_1.default.defaultString(runtime.socks5NetWork, this._socks5NetWork),
            maxIdleConns: tea_util_1.default.defaultNumber(runtime.maxIdleConns, this._maxIdleConns),
            retry: {
                retryable: runtime.autoretry,
                maxAttempts: tea_util_1.default.defaultNumber(runtime.maxAttempts, 3),
            },
            backoff: {
                policy: tea_util_1.default.defaultString(runtime.backoffPolicy, "no"),
                period: tea_util_1.default.defaultNumber(runtime.backoffPeriod, 1),
            },
            ignoreSSL: runtime.ignoreSSL,
        };
        let _lastRequest = null;
        let _now = Date.now();
        let _retryTimes = 0;
        while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
            if (_retryTimes > 0) {
                let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
                if (_backoffTime > 0) {
                    await $tea.sleep(_backoffTime);
                }
            }
            _retryTimes = _retryTimes + 1;
            try {
                let request_ = new $tea.Request();
                request_.protocol = tea_util_1.default.defaultString(this._protocol, protocol);
                request_.method = method;
                request_.pathname = pathname;
                request_.headers = Object.assign({ date: tea_util_1.default.getDateUTCString(), host: this._endpoint, accept: "application/json", 'x-acs-signature-nonce': tea_util_1.default.getNonce(), 'x-acs-signature-method': "HMAC-SHA1", 'x-acs-signature-version': "1.0", 'x-acs-version': version, 'x-acs-action': action, 'user-agent': tea_util_1.default.getUserAgent(this._userAgent) }, request.headers);
                if (!tea_util_1.default.isUnset(request.body)) {
                    request_.body = new $tea.BytesReadable(tea_util_1.default.toJSONString(request.body));
                    request_.headers["content-type"] = "application/json; charset=utf-8";
                }
                if (!tea_util_1.default.isUnset(request.query)) {
                    request_.query = request.query;
                }
                if (!tea_util_1.default.equalString(authType, "Anonymous")) {
                    let accessKeyId = await this.getAccessKeyId();
                    let accessKeySecret = await this.getAccessKeySecret();
                    let securityToken = await this.getSecurityToken();
                    if (!tea_util_1.default.empty(securityToken)) {
                        request_.headers["x-acs-accesskey-id"] = accessKeyId;
                        request_.headers["x-acs-security-token"] = securityToken;
                    }
                    let stringToSign = openapi_util_1.default.getStringToSign(request_);
                    request_.headers["authorization"] = `acs ${accessKeyId}:${openapi_util_1.default.getROASignature(stringToSign, accessKeySecret)}`;
                }
                _lastRequest = request_;
                let response_ = await $tea.doAction(request_, _runtime);
                if (tea_util_1.default.equalNumber(response_.statusCode, 204)) {
                    return {
                        headers: response_.headers,
                    };
                }
                if (tea_util_1.default.is4xx(response_.statusCode) || tea_util_1.default.is5xx(response_.statusCode)) {
                    let _res = await tea_util_1.default.readAsJSON(response_.body);
                    let err = tea_util_1.default.assertAsMap(_res);
                    let requestId = Client.defaultAny(err["RequestId"], err["requestId"]);
                    requestId = Client.defaultAny(requestId, err["requestid"]);
                    throw $tea.newError({
                        code: `${Client.defaultAny(err["Code"], err["code"])}`,
                        message: `code: ${response_.statusCode}, ${Client.defaultAny(err["Message"], err["message"])} request id: ${requestId}`,
                        data: err,
                    });
                }
                if (tea_util_1.default.equalString(bodyType, "binary")) {
                    let resp = {
                        body: response_.body,
                        headers: response_.headers,
                    };
                    return resp;
                }
                else if (tea_util_1.default.equalString(bodyType, "byte")) {
                    let byt = await tea_util_1.default.readAsBytes(response_.body);
                    return {
                        body: byt,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "string")) {
                    let str = await tea_util_1.default.readAsString(response_.body);
                    return {
                        body: str,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "json")) {
                    let obj = await tea_util_1.default.readAsJSON(response_.body);
                    let res = tea_util_1.default.assertAsMap(obj);
                    return {
                        body: res,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "array")) {
                    let arr = await tea_util_1.default.readAsJSON(response_.body);
                    return {
                        body: arr,
                        headers: response_.headers,
                    };
                }
                else {
                    return {
                        headers: response_.headers,
                    };
                }
            }
            catch (ex) {
                if ($tea.isRetryable(ex)) {
                    continue;
                }
                throw ex;
            }
        }
        throw $tea.newUnretryableError(_lastRequest);
    }
    /**
     * Encapsulate the request and invoke the network with form body
     * @param action api name
     * @param version product version
     * @param protocol http or https
     * @param method e.g. GET
     * @param authType authorization type e.g. AK
     * @param pathname pathname of every api
     * @param bodyType response body type e.g. String
     * @param request object of OpenApiRequest
     * @param runtime which controls some details of call api, such as retry times
     * @return the response
     */
    async doROARequestWithForm(action, version, protocol, method, authType, pathname, bodyType, request, runtime) {
        let _runtime = {
            timeouted: "retry",
            readTimeout: tea_util_1.default.defaultNumber(runtime.readTimeout, this._readTimeout),
            connectTimeout: tea_util_1.default.defaultNumber(runtime.connectTimeout, this._connectTimeout),
            httpProxy: tea_util_1.default.defaultString(runtime.httpProxy, this._httpProxy),
            httpsProxy: tea_util_1.default.defaultString(runtime.httpsProxy, this._httpsProxy),
            noProxy: tea_util_1.default.defaultString(runtime.noProxy, this._noProxy),
            socks5Proxy: tea_util_1.default.defaultString(runtime.socks5Proxy, this._socks5Proxy),
            socks5NetWork: tea_util_1.default.defaultString(runtime.socks5NetWork, this._socks5NetWork),
            maxIdleConns: tea_util_1.default.defaultNumber(runtime.maxIdleConns, this._maxIdleConns),
            retry: {
                retryable: runtime.autoretry,
                maxAttempts: tea_util_1.default.defaultNumber(runtime.maxAttempts, 3),
            },
            backoff: {
                policy: tea_util_1.default.defaultString(runtime.backoffPolicy, "no"),
                period: tea_util_1.default.defaultNumber(runtime.backoffPeriod, 1),
            },
            ignoreSSL: runtime.ignoreSSL,
        };
        let _lastRequest = null;
        let _now = Date.now();
        let _retryTimes = 0;
        while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
            if (_retryTimes > 0) {
                let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
                if (_backoffTime > 0) {
                    await $tea.sleep(_backoffTime);
                }
            }
            _retryTimes = _retryTimes + 1;
            try {
                let request_ = new $tea.Request();
                request_.protocol = tea_util_1.default.defaultString(this._protocol, protocol);
                request_.method = method;
                request_.pathname = pathname;
                request_.headers = Object.assign({ date: tea_util_1.default.getDateUTCString(), host: this._endpoint, accept: "application/json", 'x-acs-signature-nonce': tea_util_1.default.getNonce(), 'x-acs-signature-method': "HMAC-SHA1", 'x-acs-signature-version': "1.0", 'x-acs-version': version, 'x-acs-action': action, 'user-agent': tea_util_1.default.getUserAgent(this._userAgent) }, request.headers);
                if (!tea_util_1.default.isUnset(request.body)) {
                    let m = tea_util_1.default.assertAsMap(request.body);
                    request_.body = new $tea.BytesReadable(openapi_util_1.default.toForm(m));
                    request_.headers["content-type"] = "application/x-www-form-urlencoded";
                }
                if (!tea_util_1.default.isUnset(request.query)) {
                    request_.query = request.query;
                }
                if (!tea_util_1.default.equalString(authType, "Anonymous")) {
                    let accessKeyId = await this.getAccessKeyId();
                    let accessKeySecret = await this.getAccessKeySecret();
                    let securityToken = await this.getSecurityToken();
                    if (!tea_util_1.default.empty(securityToken)) {
                        request_.headers["x-acs-accesskey-id"] = accessKeyId;
                        request_.headers["x-acs-security-token"] = securityToken;
                    }
                    let stringToSign = openapi_util_1.default.getStringToSign(request_);
                    request_.headers["authorization"] = `acs ${accessKeyId}:${openapi_util_1.default.getROASignature(stringToSign, accessKeySecret)}`;
                }
                _lastRequest = request_;
                let response_ = await $tea.doAction(request_, _runtime);
                if (tea_util_1.default.equalNumber(response_.statusCode, 204)) {
                    return {
                        headers: response_.headers,
                    };
                }
                if (tea_util_1.default.is4xx(response_.statusCode) || tea_util_1.default.is5xx(response_.statusCode)) {
                    let _res = await tea_util_1.default.readAsJSON(response_.body);
                    let err = tea_util_1.default.assertAsMap(_res);
                    throw $tea.newError({
                        code: `${Client.defaultAny(err["Code"], err["code"])}`,
                        message: `code: ${response_.statusCode}, ${Client.defaultAny(err["Message"], err["message"])} request id: ${Client.defaultAny(err["RequestId"], err["requestId"])}`,
                        data: err,
                    });
                }
                if (tea_util_1.default.equalString(bodyType, "binary")) {
                    let resp = {
                        body: response_.body,
                        headers: response_.headers,
                    };
                    return resp;
                }
                else if (tea_util_1.default.equalString(bodyType, "byte")) {
                    let byt = await tea_util_1.default.readAsBytes(response_.body);
                    return {
                        body: byt,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "string")) {
                    let str = await tea_util_1.default.readAsString(response_.body);
                    return {
                        body: str,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "json")) {
                    let obj = await tea_util_1.default.readAsJSON(response_.body);
                    let res = tea_util_1.default.assertAsMap(obj);
                    return {
                        body: res,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(bodyType, "array")) {
                    let arr = await tea_util_1.default.readAsJSON(response_.body);
                    return {
                        body: arr,
                        headers: response_.headers,
                    };
                }
                else {
                    return {
                        headers: response_.headers,
                    };
                }
            }
            catch (ex) {
                if ($tea.isRetryable(ex)) {
                    continue;
                }
                throw ex;
            }
        }
        throw $tea.newUnretryableError(_lastRequest);
    }
    /**
     * Encapsulate the request and invoke the network
     * @param action api name
     * @param version product version
     * @param protocol http or https
     * @param method e.g. GET
     * @param authType authorization type e.g. AK
     * @param bodyType response body type e.g. String
     * @param request object of OpenApiRequest
     * @param runtime which controls some details of call api, such as retry times
     * @return the response
     */
    async doRequest(params, request, runtime) {
        let _runtime = {
            timeouted: "retry",
            readTimeout: tea_util_1.default.defaultNumber(runtime.readTimeout, this._readTimeout),
            connectTimeout: tea_util_1.default.defaultNumber(runtime.connectTimeout, this._connectTimeout),
            httpProxy: tea_util_1.default.defaultString(runtime.httpProxy, this._httpProxy),
            httpsProxy: tea_util_1.default.defaultString(runtime.httpsProxy, this._httpsProxy),
            noProxy: tea_util_1.default.defaultString(runtime.noProxy, this._noProxy),
            socks5Proxy: tea_util_1.default.defaultString(runtime.socks5Proxy, this._socks5Proxy),
            socks5NetWork: tea_util_1.default.defaultString(runtime.socks5NetWork, this._socks5NetWork),
            maxIdleConns: tea_util_1.default.defaultNumber(runtime.maxIdleConns, this._maxIdleConns),
            retry: {
                retryable: runtime.autoretry,
                maxAttempts: tea_util_1.default.defaultNumber(runtime.maxAttempts, 3),
            },
            backoff: {
                policy: tea_util_1.default.defaultString(runtime.backoffPolicy, "no"),
                period: tea_util_1.default.defaultNumber(runtime.backoffPeriod, 1),
            },
            ignoreSSL: runtime.ignoreSSL,
        };
        let _lastRequest = null;
        let _now = Date.now();
        let _retryTimes = 0;
        while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
            if (_retryTimes > 0) {
                let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
                if (_backoffTime > 0) {
                    await $tea.sleep(_backoffTime);
                }
            }
            _retryTimes = _retryTimes + 1;
            try {
                let request_ = new $tea.Request();
                request_.protocol = tea_util_1.default.defaultString(this._protocol, params.protocol);
                request_.method = params.method;
                request_.pathname = params.pathname;
                request_.query = request.query;
                // endpoint is setted in product client
                request_.headers = Object.assign({ host: this._endpoint, 'x-acs-version': params.version, 'x-acs-action': params.action, 'user-agent': this.getUserAgent(), 'x-acs-date': openapi_util_1.default.getTimestamp(), 'x-acs-signature-nonce': tea_util_1.default.getNonce(), accept: "application/json" }, request.headers);
                if (tea_util_1.default.equalString(params.style, "RPC")) {
                    let headers = this.getRpcHeaders();
                    if (!tea_util_1.default.isUnset(headers)) {
                        request_.headers = Object.assign(Object.assign({}, request_.headers), headers);
                    }
                }
                let signatureAlgorithm = tea_util_1.default.defaultString(this._signatureAlgorithm, "ACS3-HMAC-SHA256");
                let hashedRequestPayload = openapi_util_1.default.hexEncode(openapi_util_1.default.hash(tea_util_1.default.toBytes(""), signatureAlgorithm));
                if (!tea_util_1.default.isUnset(request.stream)) {
                    let tmp = await tea_util_1.default.readAsBytes(request.stream);
                    hashedRequestPayload = openapi_util_1.default.hexEncode(openapi_util_1.default.hash(tmp, signatureAlgorithm));
                    request_.body = new $tea.BytesReadable(tmp);
                    request_.headers["content-type"] = "application/octet-stream";
                }
                else {
                    if (!tea_util_1.default.isUnset(request.body)) {
                        if (tea_util_1.default.equalString(params.reqBodyType, "json")) {
                            let jsonObj = tea_util_1.default.toJSONString(request.body);
                            hashedRequestPayload = openapi_util_1.default.hexEncode(openapi_util_1.default.hash(tea_util_1.default.toBytes(jsonObj), signatureAlgorithm));
                            request_.body = new $tea.BytesReadable(jsonObj);
                            request_.headers["content-type"] = "application/json; charset=utf-8";
                        }
                        else {
                            let m = tea_util_1.default.assertAsMap(request.body);
                            let formObj = openapi_util_1.default.toForm(m);
                            hashedRequestPayload = openapi_util_1.default.hexEncode(openapi_util_1.default.hash(tea_util_1.default.toBytes(formObj), signatureAlgorithm));
                            request_.body = new $tea.BytesReadable(formObj);
                            request_.headers["content-type"] = "application/x-www-form-urlencoded";
                        }
                    }
                }
                request_.headers["x-acs-content-sha256"] = hashedRequestPayload;
                if (!tea_util_1.default.equalString(params.authType, "Anonymous")) {
                    let accessKeyId = await this.getAccessKeyId();
                    let accessKeySecret = await this.getAccessKeySecret();
                    let securityToken = await this.getSecurityToken();
                    if (!tea_util_1.default.empty(securityToken)) {
                        request_.headers["x-acs-accesskey-id"] = accessKeyId;
                        request_.headers["x-acs-security-token"] = securityToken;
                    }
                    request_.headers["Authorization"] = openapi_util_1.default.getAuthorization(request_, signatureAlgorithm, hashedRequestPayload, accessKeyId, accessKeySecret);
                }
                _lastRequest = request_;
                let response_ = await $tea.doAction(request_, _runtime);
                if (tea_util_1.default.is4xx(response_.statusCode) || tea_util_1.default.is5xx(response_.statusCode)) {
                    let _res = await tea_util_1.default.readAsJSON(response_.body);
                    let err = tea_util_1.default.assertAsMap(_res);
                    throw $tea.newError({
                        code: `${Client.defaultAny(err["Code"], err["code"])}`,
                        message: `code: ${response_.statusCode}, ${Client.defaultAny(err["Message"], err["message"])} request id: ${Client.defaultAny(err["RequestId"], err["requestId"])}`,
                        data: err,
                    });
                }
                if (tea_util_1.default.equalString(params.bodyType, "binary")) {
                    let resp = {
                        body: response_.body,
                        headers: response_.headers,
                    };
                    return resp;
                }
                else if (tea_util_1.default.equalString(params.bodyType, "byte")) {
                    let byt = await tea_util_1.default.readAsBytes(response_.body);
                    return {
                        body: byt,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(params.bodyType, "string")) {
                    let str = await tea_util_1.default.readAsString(response_.body);
                    return {
                        body: str,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(params.bodyType, "json")) {
                    let obj = await tea_util_1.default.readAsJSON(response_.body);
                    let res = tea_util_1.default.assertAsMap(obj);
                    return {
                        body: res,
                        headers: response_.headers,
                    };
                }
                else if (tea_util_1.default.equalString(params.bodyType, "array")) {
                    let arr = await tea_util_1.default.readAsJSON(response_.body);
                    return {
                        body: arr,
                        headers: response_.headers,
                    };
                }
                else {
                    return {
                        headers: response_.headers,
                    };
                }
            }
            catch (ex) {
                if ($tea.isRetryable(ex)) {
                    continue;
                }
                throw ex;
            }
        }
        throw $tea.newUnretryableError(_lastRequest);
    }
    /**
     * Encapsulate the request and invoke the network
     * @param action api name
     * @param version product version
     * @param protocol http or https
     * @param method e.g. GET
     * @param authType authorization type e.g. AK
     * @param bodyType response body type e.g. String
     * @param request object of OpenApiRequest
     * @param runtime which controls some details of call api, such as retry times
     * @return the response
     */
    async execute(params, request, runtime) {
        let _runtime = {
            timeouted: "retry",
            readTimeout: tea_util_1.default.defaultNumber(runtime.readTimeout, this._readTimeout),
            connectTimeout: tea_util_1.default.defaultNumber(runtime.connectTimeout, this._connectTimeout),
            httpProxy: tea_util_1.default.defaultString(runtime.httpProxy, this._httpProxy),
            httpsProxy: tea_util_1.default.defaultString(runtime.httpsProxy, this._httpsProxy),
            noProxy: tea_util_1.default.defaultString(runtime.noProxy, this._noProxy),
            socks5Proxy: tea_util_1.default.defaultString(runtime.socks5Proxy, this._socks5Proxy),
            socks5NetWork: tea_util_1.default.defaultString(runtime.socks5NetWork, this._socks5NetWork),
            maxIdleConns: tea_util_1.default.defaultNumber(runtime.maxIdleConns, this._maxIdleConns),
            retry: {
                retryable: runtime.autoretry,
                maxAttempts: tea_util_1.default.defaultNumber(runtime.maxAttempts, 3),
            },
            backoff: {
                policy: tea_util_1.default.defaultString(runtime.backoffPolicy, "no"),
                period: tea_util_1.default.defaultNumber(runtime.backoffPeriod, 1),
            },
            ignoreSSL: runtime.ignoreSSL,
        };
        let _lastRequest = null;
        let _now = Date.now();
        let _retryTimes = 0;
        while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
            if (_retryTimes > 0) {
                let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
                if (_backoffTime > 0) {
                    await $tea.sleep(_backoffTime);
                }
            }
            _retryTimes = _retryTimes + 1;
            try {
                let request_ = new $tea.Request();
                // spi = new Gateway();//Gateway implements SPI，这一步在产品 SDK 中实例化
                let headers = this.getRpcHeaders();
                let requestContext = new $SPI.InterceptorContextRequest({
                    headers: Object.assign(Object.assign({}, request.headers), headers),
                    query: request.query,
                    body: request.body,
                    stream: request.stream,
                    hostMap: request.hostMap,
                    pathname: params.pathname,
                    productId: this._productId,
                    action: params.action,
                    version: params.version,
                    protocol: tea_util_1.default.defaultString(this._protocol, params.protocol),
                    method: tea_util_1.default.defaultString(this._method, params.method),
                    authType: params.authType,
                    bodyType: params.bodyType,
                    reqBodyType: params.reqBodyType,
                    style: params.style,
                    credential: this._credential,
                    signatureVersion: this._signatureVersion,
                    signatureAlgorithm: this._signatureAlgorithm,
                    userAgent: this.getUserAgent(),
                });
                let configurationContext = new $SPI.InterceptorContextConfiguration({
                    regionId: this._regionId,
                    endpoint: this._endpoint,
                    endpointRule: this._endpointRule,
                    endpointMap: this._endpointMap,
                    endpointType: this._endpointType,
                    network: this._network,
                    suffix: this._suffix,
                });
                let interceptorContext = new $SPI.InterceptorContext({
                    request: requestContext,
                    configuration: configurationContext,
                });
                let attributeMap = new $SPI.AttributeMap({});
                // 1. spi.modifyConfiguration(context: SPI.InterceptorContext, attributeMap: SPI.AttributeMap);
                await this._spi.modifyConfiguration(interceptorContext, attributeMap);
                // 2. spi.modifyRequest(context: SPI.InterceptorContext, attributeMap: SPI.AttributeMap);
                await this._spi.modifyRequest(interceptorContext, attributeMap);
                request_.protocol = interceptorContext.request.protocol;
                request_.method = interceptorContext.request.method;
                request_.pathname = interceptorContext.request.pathname;
                request_.query = interceptorContext.request.query;
                request_.body = interceptorContext.request.stream;
                request_.headers = interceptorContext.request.headers;
                _lastRequest = request_;
                let response_ = await $tea.doAction(request_, _runtime);
                let responseContext = new $SPI.InterceptorContextResponse({
                    statusCode: response_.statusCode,
                    headers: response_.headers,
                    body: response_.body,
                });
                interceptorContext.response = responseContext;
                // 3. spi.modifyResponse(context: SPI.InterceptorContext, attributeMap: SPI.AttributeMap);
                await this._spi.modifyResponse(interceptorContext, attributeMap);
                return {
                    headers: interceptorContext.response.headers,
                    body: interceptorContext.response.deserializedBody,
                };
            }
            catch (ex) {
                if ($tea.isRetryable(ex)) {
                    continue;
                }
                throw ex;
            }
        }
        throw $tea.newUnretryableError(_lastRequest);
    }
    async callApi(params, request, runtime) {
        if (tea_util_1.default.isUnset($tea.toMap(params))) {
            throw $tea.newError({
                code: "ParameterMissing",
                message: "'params' can not be unset",
            });
        }
        if (tea_util_1.default.isUnset(this._signatureAlgorithm) || !tea_util_1.default.equalString(this._signatureAlgorithm, "v2")) {
            return await this.doRequest(params, request, runtime);
        }
        else if (tea_util_1.default.equalString(params.style, "ROA") && tea_util_1.default.equalString(params.reqBodyType, "json")) {
            return await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, request, runtime);
        }
        else if (tea_util_1.default.equalString(params.style, "ROA")) {
            return await this.doROARequestWithForm(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, request, runtime);
        }
        else {
            return await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, request, runtime);
        }
    }
    /**
     * Get user agent
     * @return user agent
     */
    getUserAgent() {
        let userAgent = tea_util_1.default.getUserAgent(this._userAgent);
        return userAgent;
    }
    /**
     * Get accesskey id by using credential
     * @return accesskey id
     */
    async getAccessKeyId() {
        if (tea_util_1.default.isUnset(this._credential)) {
            return "";
        }
        let accessKeyId = await this._credential.getAccessKeyId();
        return accessKeyId;
    }
    /**
     * Get accesskey secret by using credential
     * @return accesskey secret
     */
    async getAccessKeySecret() {
        if (tea_util_1.default.isUnset(this._credential)) {
            return "";
        }
        let secret = await this._credential.getAccessKeySecret();
        return secret;
    }
    /**
     * Get security token by using credential
     * @return security token
     */
    async getSecurityToken() {
        if (tea_util_1.default.isUnset(this._credential)) {
            return "";
        }
        let token = await this._credential.getSecurityToken();
        return token;
    }
    /**
     * If inputValue is not null, return it or return defaultValue
     * @param inputValue  users input value
     * @param defaultValue default value
     * @return the final result
     */
    static defaultAny(inputValue, defaultValue) {
        if (tea_util_1.default.isUnset(inputValue)) {
            return defaultValue;
        }
        return inputValue;
    }
    /**
     * If the endpointRule and config.endpoint are empty, throw error
     * @param config config contains the necessary information to create a client
     */
    checkConfig(config) {
        if (tea_util_1.default.empty(this._endpointRule) && tea_util_1.default.empty(config.endpoint)) {
            throw $tea.newError({
                code: "ParameterMissing",
                message: "'config.endpoint' can not be empty",
            });
        }
    }
    /**
     * set RPC header for debug
     * @param headers headers for debug, this header can be used only once.
     */
    setRpcHeaders(headers) {
        this._headers = headers;
    }
    /**
     * get RPC header for debug
     */
    getRpcHeaders() {
        let headers = this._headers;
        this._headers = null;
        return headers;
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 8190:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// This file is auto-generated, don't edit it
/**
 * This is for OpenApi Util
 */
const $tea = __importStar(__nccwpck_require__(4165));
const tea_util_1 = __importDefault(__nccwpck_require__(1979));
const kitx_1 = __importDefault(__nccwpck_require__(8683));
const querystring_1 = __importDefault(__nccwpck_require__(1191));
const crypto_1 = __importDefault(__nccwpck_require__(6417));
const PEM_BEGIN = "-----BEGIN PRIVATE KEY-----\n";
const PEM_END = "\n-----END PRIVATE KEY-----";
function replaceRepeatList(target, repeat, prefix) {
    if (prefix) {
        prefix = prefix + '.';
    }
    for (var i = 0; i < repeat.length; i++) {
        var item = repeat[i];
        let key = prefix + (i + 1);
        if (typeof item === 'undefined' || item == null) {
            continue;
        }
        if (Array.isArray(item)) {
            replaceRepeatList(target, item, key);
        }
        else if (item instanceof Object) {
            flatMap(target, item, key);
        }
        else {
            target[key] = item.toString();
        }
    }
}
function flatMap(target, params, prefix = '') {
    if (prefix) {
        prefix = prefix + '.';
    }
    params = toMap(params);
    let keys = Object.keys(params);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = params[key];
        key = prefix + key;
        if (typeof value === 'undefined' || value == null) {
            continue;
        }
        if (Array.isArray(value)) {
            replaceRepeatList(target, value, key);
        }
        else if (value instanceof Object) {
            flatMap(target, value, key);
        }
        else {
            target[key] = value.toString();
        }
    }
    return target;
}
function filter(value) {
    return value.replace(/[\t\n\r\f]/g, ' ');
}
function getCanonicalizedHeaders(headers) {
    const prefix = 'x-acs-';
    const keys = Object.keys(headers);
    const canonicalizedKeys = [];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key.startsWith(prefix)) {
            canonicalizedKeys.push(key);
        }
    }
    canonicalizedKeys.sort();
    var result = '';
    for (let i = 0; i < canonicalizedKeys.length; i++) {
        const key = canonicalizedKeys[i];
        result += `${key}:${filter(headers[key]).trim()}\n`;
    }
    return result;
}
function getCanonicalizedResource(uriPattern, query) {
    const keys = !query ? [] : Object.keys(query).sort();
    if (keys.length === 0) {
        return uriPattern;
    }
    var result = [];
    for (var i = 0; i < keys.length; i++) {
        const key = keys[i];
        result.push(`${key}=${query[key]}`);
    }
    return `${uriPattern}?${result.join('&')}`;
}
function getAuthorizationQueryString(query) {
    let canonicalQueryArray = [];
    const keys = !query ? [] : Object.keys(query).sort();
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        let param = key + '=';
        if (typeof query[key] !== 'undefined' && query[key] !== null) {
            param = param + encode(query[key]);
        }
        canonicalQueryArray.push(param);
    }
    return canonicalQueryArray.join('&');
}
function getAuthorizationHeaders(header) {
    let canonicalheaders = "";
    let tmp = {};
    const keys = !header ? [] : Object.keys(header);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const lowerKey = keys[i].toLowerCase();
        if (lowerKey.startsWith("x-acs-") || lowerKey === "host" || lowerKey === "content-type") {
            if (tmp[lowerKey]) {
                tmp[lowerKey].push((header[key] || "").trim());
            }
            else {
                tmp[lowerKey] = [(header[key] || "").trim()];
            }
        }
    }
    var hsKeys = Object.keys(tmp).sort();
    for (let i = 0; i < hsKeys.length; i++) {
        const hsKey = hsKeys[i];
        let listSort = tmp[hsKey].sort();
        canonicalheaders += `${hsKey}:${listSort.join(",")}\n`;
    }
    return { canonicalheaders, hsKeys };
}
function encode(str) {
    var result = encodeURIComponent(str);
    return result.replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}
function normalize(params) {
    var list = [];
    var flated = {};
    flatMap(flated, params);
    var keys = Object.keys(flated).sort();
    for (let i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = flated[key];
        list.push([encode(key), encode(value)]);
    }
    return list;
}
function canonicalize(normalized) {
    var fields = [];
    for (var i = 0; i < normalized.length; i++) {
        var [key, value] = normalized[i];
        fields.push(key + '=' + value);
    }
    return fields.join('&');
}
function isModelClass(t) {
    if (!t) {
        return false;
    }
    return typeof t.types === 'function' && typeof t.names === 'function';
}
function isObjectOrArray(t) {
    return Array.isArray(t) || (t instanceof Object && typeof t !== 'function');
}
function toMap(input) {
    if (!isObjectOrArray(input)) {
        return null;
    }
    else if (input instanceof $tea.Model) {
        return $tea.toMap(input);
    }
    else if (input && input.toMap && typeof input.toMap === 'function') {
        // 解决跨版本 Model 不互认的问题
        return input.toMap();
    }
    else if (Array.isArray(input)) {
        const result = [];
        input.forEach((value) => {
            if (isObjectOrArray(value)) {
                result.push(toMap(value));
            }
            else {
                result.push(value);
            }
        });
        return result;
    }
    else if (input instanceof Object) {
        const result = {};
        Object.entries(input).forEach(([key, value]) => {
            if (isObjectOrArray(value)) {
                result[key] = toMap(value);
            }
            else {
                result[key] = value;
            }
        });
        return result;
    }
}
class Client {
    /**
     * Convert all params of body other than type of readable into content
     * @param input source Model
     * @param output target Model
     * @return void
     */
    static convert(input, output) {
        if (!output) {
            return;
        }
        let inputModel = Object.assign({}, input);
        let constructor = output.constructor;
        let types = constructor.types();
        // let constructor = <any>output.constructor;
        for (let key of Object.keys(constructor.names())) {
            if (inputModel[key]) {
                if (isModelClass(types[key])) {
                    output[key] = new types[key](output[key]);
                    Client.convert(inputModel[key], output[key]);
                    continue;
                }
                output[key] = inputModel[key];
            }
        }
    }
    /**
     * Get the string to be signed according to request
     * @param request  which contains signed messages
     * @return the signed string
     */
    static getStringToSign(request) {
        const method = request.method;
        const accept = request.headers['accept'];
        const contentMD5 = request.headers['content-md5'] || '';
        const contentType = request.headers['content-type'] || '';
        const date = request.headers['date'] || '';
        const header = `${method}\n${accept}\n${contentMD5}\n${contentType}\n${date}\n`;
        const canonicalizedHeaders = getCanonicalizedHeaders(request.headers);
        const canonicalizedResource = getCanonicalizedResource(request.pathname, request.query);
        return `${header}${canonicalizedHeaders}${canonicalizedResource}`;
    }
    /**
     * Get signature according to stringToSign, secret
     * @param stringToSign  the signed string
     * @param secret accesskey secret
     * @return the signature
     */
    static getROASignature(stringToSign, secret) {
        const utf8Buff = Buffer.from(stringToSign, 'utf8');
        return kitx_1.default.sha1(utf8Buff, secret, 'base64');
    }
    /**
     * Parse filter into a form string
     * @param filter object
     * @return the string
     */
    static toForm(filter) {
        if (!filter) {
            return '';
        }
        let target = {};
        flatMap(target, filter);
        return tea_util_1.default.toFormString(target);
    }
    /**
     * Get timestamp
     * @return the timestamp string
     */
    static getTimestamp() {
        let date = new Date();
        let YYYY = date.getUTCFullYear();
        let MM = kitx_1.default.pad2(date.getUTCMonth() + 1);
        let DD = kitx_1.default.pad2(date.getUTCDate());
        let HH = kitx_1.default.pad2(date.getUTCHours());
        let mm = kitx_1.default.pad2(date.getUTCMinutes());
        let ss = kitx_1.default.pad2(date.getUTCSeconds());
        return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}Z`;
    }
    /**
     * Parse filter into a object which's type is map[string]string
     * @param filter query param
     * @return the object
     */
    static query(filter) {
        if (!filter) {
            return {};
        }
        let ret = {};
        flatMap(ret, filter);
        return ret;
    }
    /**
     * Get signature according to signedParams, method and secret
     * @param signedParams params which need to be signed
     * @param method http method e.g. GET
     * @param secret AccessKeySecret
     * @return the signature
     */
    static getRPCSignature(signedParams, method, secret) {
        var normalized = normalize(signedParams);
        var canonicalized = canonicalize(normalized);
        var stringToSign = `${method}&${encode('/')}&${encode(canonicalized)}`;
        const key = secret + '&';
        return kitx_1.default.sha1(stringToSign, key, 'base64');
    }
    /**
     * Parse array into a string with specified style
     * @param array the array
     * @param prefix the prefix string
     * @style specified style e.g. repeatList
     * @return the string
     */
    static arrayToStringWithSpecifiedStyle(array, prefix, style) {
        if (!array) {
            return '';
        }
        if (style === 'repeatList') {
            let target = {};
            replaceRepeatList(target, array, prefix);
            return querystring_1.default.stringify(target, '&&');
        }
        else if (style === 'json') {
            return JSON.stringify(array);
        }
        else if (style === 'simple') {
            return array.join(',');
        }
        else if (style === 'spaceDelimited') {
            return array.join(' ');
        }
        else if (style === 'pipeDelimited') {
            return array.join('|');
        }
        else {
            return '';
        }
    }
    /**
     * Transform input as map.
     */
    static parseToMap(input) {
        return toMap(input);
    }
    static getEndpoint(endpoint, serverUse, endpointType) {
        if (endpointType == "internal") {
            let strs = endpoint.split(".");
            strs[0] += "-internal";
            endpoint = strs.join(".");
        }
        if (serverUse && endpointType == "accelerate") {
            return "oss-accelerate.aliyuncs.com";
        }
        return endpoint;
    }
    /**
    * Encode raw with base16
    * @param raw encoding data
    * @return encoded string
    */
    static hexEncode(raw) {
        return raw.toString("hex");
    }
    /**
     * Hash the raw data with signatureAlgorithm
     * @param raw hashing data
     * @param signatureAlgorithm the autograph method
     * @return hashed bytes
    */
    static hash(raw, signatureAlgorithm) {
        if (signatureAlgorithm === "ACS3-HMAC-SHA256" || signatureAlgorithm === "ACS3-RSA-SHA256") {
            const obj = crypto_1.default.createHash('sha256');
            obj.update(raw);
            return obj.digest();
        }
        else if (signatureAlgorithm == "ACS3-HMAC-SM3") {
            const obj = crypto_1.default.createHash('sm3');
            obj.update(raw);
            return obj.digest();
        }
    }
    static signatureMethod(secret, source, signatureAlgorithm) {
        if (signatureAlgorithm === "ACS3-HMAC-SHA256") {
            const obj = crypto_1.default.createHmac('sha256', secret);
            obj.update(source);
            return obj.digest();
        }
        else if (signatureAlgorithm === "ACS3-HMAC-SM3") {
            const obj = crypto_1.default.createHmac('sm3', secret);
            obj.update(source);
            return obj.digest();
        }
        else if (signatureAlgorithm === "ACS3-RSA-SHA256") {
            if (!secret.startsWith(PEM_BEGIN)) {
                secret = PEM_BEGIN + secret;
            }
            if (!secret.endsWith(PEM_END)) {
                secret = secret + PEM_END;
            }
            var signerObject = crypto_1.default.createSign("RSA-SHA256");
            signerObject.update(source);
            var signature = signerObject.sign({ key: secret, padding: crypto_1.default.constants.RSA_PKCS1_PADDING });
            return signature;
        }
    }
    /**
     * Get the authorization
     * @param request request params
     * @param signatureAlgorithm the autograph method
     * @param payload the hashed request
     * @param acesskey the acesskey string
     * @param accessKeySecret the accessKeySecret string
     * @return authorization string
     */
    static getAuthorization(request, signatureAlgorithm, payload, acesskey, accessKeySecret) {
        const canonicalURI = (request.pathname || "").replace("+", "%20").replace("*", "%2A").replace("%7E", "~");
        const method = request.method;
        const canonicalQueryString = getAuthorizationQueryString(request.query);
        const tuple = getAuthorizationHeaders(request.headers);
        const canonicalheaders = tuple["canonicalheaders"];
        const signedHeaders = tuple["hsKeys"];
        const canonicalRequest = method + "\n" + canonicalURI + "\n" + canonicalQueryString + "\n" + canonicalheaders + "\n" +
            signedHeaders.join(";") + "\n" + payload;
        let raw = Buffer.from(canonicalRequest);
        const stringToSign = signatureAlgorithm + "\n" + Client.hexEncode(Client.hash(raw, signatureAlgorithm));
        const signature = Client.hexEncode(Client.signatureMethod(accessKeySecret, stringToSign, signatureAlgorithm));
        const auth = `${signatureAlgorithm} Credential=${acesskey},SignedHeaders=${signedHeaders.join(';')},Signature=${signature}`;
        return auth;
    }
    static getEncodePath(path) {
        if (typeof path === 'undefined' || path === null) {
            return '';
        }
        let strs = path.split('/');
        for (let i = 0; i < strs.length; i++) {
            strs[i] = encode(strs[i]);
        }
        return strs.join('/');
    }
    static getEncodeParam(param) {
        if (typeof param === 'undefined' || param === null) {
            return '';
        }
        return encode(param);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 4165:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var querystring = __importStar(__nccwpck_require__(1191));
var stream_1 = __nccwpck_require__(2413);
var httpx = __importStar(__nccwpck_require__(9074));
var url_1 = __nccwpck_require__(8835);
var BytesReadable = /** @class */ (function (_super) {
    __extends(BytesReadable, _super);
    function BytesReadable(value) {
        var _this = _super.call(this) || this;
        if (typeof value === 'string') {
            _this.value = Buffer.from(value);
        }
        else if (Buffer.isBuffer(value)) {
            _this.value = value;
        }
        return _this;
    }
    BytesReadable.prototype._read = function () {
        this.push(this.value);
        this.push(null);
    };
    return BytesReadable;
}(stream_1.Readable));
exports.BytesReadable = BytesReadable;
var Request = /** @class */ (function () {
    function Request() {
        this.headers = {};
        this.query = {};
    }
    return Request;
}());
exports.Request = Request;
var Response = /** @class */ (function () {
    function Response(httpResponse) {
        this.statusCode = httpResponse.statusCode;
        this.statusMessage = httpResponse.statusMessage;
        this.headers = this.convertHeaders(httpResponse.headers);
        this.body = httpResponse;
    }
    Response.prototype.convertHeaders = function (headers) {
        var results = {};
        var keys = Object.keys(headers);
        for (var index = 0; index < keys.length; index++) {
            var key = keys[index];
            results[key] = headers[key];
        }
        return results;
    };
    Response.prototype.readBytes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpx.read(this.body, '')];
                    case 1:
                        buff = _a.sent();
                        return [2 /*return*/, buff];
                }
            });
        });
    };
    return Response;
}());
exports.Response = Response;
function buildURL(request) {
    var url = request.protocol + "://" + request.headers['host'];
    if (request.port) {
        url += ":" + request.port;
    }
    url += "" + request.pathname;
    var urlInfo = url_1.parse(url);
    if (request.query && Object.keys(request.query).length > 0) {
        if (urlInfo.query) {
            url += "&" + querystring.stringify(request.query);
        }
        else {
            url += "?" + querystring.stringify(request.query);
        }
    }
    return url;
}
function isModelClass(t) {
    if (!t) {
        return false;
    }
    return typeof t.types === 'function' && typeof t.names === 'function';
}
function doAction(request, runtime) {
    if (runtime === void 0) { runtime = null; }
    return __awaiter(this, void 0, void 0, function () {
        var url, method, options, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = buildURL(request);
                    method = (request.method || 'GET').toUpperCase();
                    options = {
                        method: method,
                        headers: request.headers
                    };
                    if (method !== 'GET' && method !== 'HEAD') {
                        options.data = request.body;
                    }
                    if (runtime) {
                        if (typeof runtime.timeout !== 'undefined') {
                            options.timeout = Number(runtime.timeout);
                        }
                        if (typeof runtime.readTimeout !== 'undefined') {
                            options.readTimeout = Number(runtime.readTimeout);
                        }
                        if (typeof runtime.connectTimeout !== 'undefined') {
                            options.connectTimeout = Number(runtime.connectTimeout);
                        }
                        if (typeof runtime.ignoreSSL !== 'undefined') {
                            options.rejectUnauthorized = !runtime.ignoreSSL;
                        }
                        if (typeof runtime.key !== 'undefined') {
                            options.key = String(runtime.key);
                        }
                        if (typeof runtime.cert !== 'undefined') {
                            options.cert = String(runtime.cert);
                        }
                        if (typeof runtime.ca !== 'undefined') {
                            options.ca = String(runtime.ca);
                        }
                    }
                    return [4 /*yield*/, httpx.request(url, options)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, new Response(response)];
            }
        });
    });
}
exports.doAction = doAction;
function newError(data) {
    var message = data.code + ": " + data.message;
    return new Error(message);
}
exports.newError = newError;
function getValue(type, value) {
    if (typeof type === 'string') {
        // basic type
        return value;
    }
    if (type.type === 'array') {
        if (!Array.isArray(value)) {
            throw new Error("expect: array, actual: " + typeof value);
        }
        return value.map(function (item) {
            return getValue(type.itemType, item);
        });
    }
    if (typeof type === 'function') {
        if (isModelClass(type)) {
            return new type(value);
        }
        return value;
    }
    return value;
}
function toMap(value) {
    if (value === void 0) { value = undefined; }
    if (typeof value === 'undefined' || value == null) {
        return null;
    }
    if (value instanceof Model) {
        return value.toMap();
    }
    // 如果是另一个版本的 tea-typescript 创建的 model，instanceof 会判断不通过
    // 这里做一下处理
    if (typeof value.toMap === 'function') {
        return value.toMap();
    }
    if (Array.isArray(value)) {
        return value.map(function (item) {
            return toMap(item);
        });
    }
    return value;
}
exports.toMap = toMap;
var Model = /** @class */ (function () {
    function Model(map) {
        var _this = this;
        if (map == null) {
            return;
        }
        var clz = this.constructor;
        var names = clz.names();
        var types = clz.types();
        Object.keys(names).forEach((function (name) {
            var value = map[name];
            if (value === undefined || value === null) {
                return;
            }
            var type = types[name];
            _this[name] = getValue(type, value);
        }));
    }
    Model.prototype.toMap = function () {
        var _this = this;
        var map = {};
        var clz = this.constructor;
        var names = clz.names();
        Object.keys(names).forEach((function (name) {
            var originName = names[name];
            var value = _this[name];
            if (typeof value === 'undefined' || value == null) {
                return;
            }
            map[originName] = toMap(value);
        }));
        return map;
    };
    return Model;
}());
exports.Model = Model;
function cast(obj, t) {
    if (!obj) {
        throw new Error('can not cast to Map');
    }
    if (typeof obj !== 'object') {
        throw new Error('can not cast to Map');
    }
    var map = obj;
    var clz = t.constructor;
    var names = clz.names();
    var types = clz.types();
    Object.keys(names).forEach(function (key) {
        var originName = names[key];
        var value = map[originName];
        var type = types[key];
        if (typeof value === 'undefined' || value == null) {
            return;
        }
        if (typeof type === 'string') {
            if (type === 'Readable' ||
                type === 'map' ||
                type === 'Buffer' ||
                type === 'any' ||
                typeof value === type) {
                t[key] = value;
                return;
            }
            if (type === 'string' &&
                (typeof value === 'number' ||
                    typeof value === 'boolean')) {
                t[key] = value.toString();
                return;
            }
            if (type === 'boolean') {
                if (value === 1 || value === 0) {
                    t[key] = !!value;
                    return;
                }
                if (value === 'true' || value === 'false') {
                    t[key] = value === 'true';
                    return;
                }
            }
            if (type === 'number' && typeof value === 'string') {
                if (value.match(/^\d*$/)) {
                    t[key] = parseInt(value);
                    return;
                }
                if (value.match(/^[\.\d]*$/)) {
                    t[key] = parseFloat(value);
                    return;
                }
            }
            throw new Error("type of " + key + " is mismatch, expect " + type + ", but " + typeof value);
        }
        else if (type.type === 'map') {
            if (!(value instanceof Object)) {
                throw new Error("type of " + key + " is mismatch, expect object, but " + typeof value);
            }
            t[key] = value;
        }
        else if (type.type === 'array') {
            if (!Array.isArray(value)) {
                throw new Error("type of " + key + " is mismatch, expect array, but " + typeof value);
            }
            if (typeof type.itemType === 'function') {
                t[key] = value.map(function (d) {
                    if (isModelClass(type.itemType)) {
                        return cast(d, new type.itemType({}));
                    }
                    return d;
                });
            }
            else {
                t[key] = value;
            }
        }
        else if (typeof type === 'function') {
            if (!(value instanceof Object)) {
                throw new Error("type of " + key + " is mismatch, expect object, but " + typeof value);
            }
            if (isModelClass(type)) {
                t[key] = cast(value, new type({}));
                return;
            }
            t[key] = value;
        }
        else {
        }
    });
    return t;
}
exports.cast = cast;
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
function allowRetry(retry, retryTimes, startTime) {
    // 还未重试
    if (retryTimes === 0) {
        return true;
    }
    if (retry.retryable !== true) {
        return false;
    }
    if (retry.policy === 'never') {
        return false;
    }
    if (retry.policy === 'always') {
        return true;
    }
    if (retry.policy === 'simple') {
        return (retryTimes < retry['maxAttempts']);
    }
    if (retry.policy === 'timeout') {
        return Date.now() - startTime < retry.timeout;
    }
    // 默认不重试
    return false;
}
exports.allowRetry = allowRetry;
function getBackoffTime(backoff, retryTimes) {
    if (retryTimes === 0) {
        // 首次调用，不使用退避策略
        return 0;
    }
    if (backoff.policy === 'no') {
        // 不退避
        return 0;
    }
    if (backoff.policy === 'fixed') {
        // 固定退避
        return backoff.period;
    }
    if (backoff.policy === 'random') {
        // 随机退避
        var min = backoff['minPeriod'];
        var max = backoff['maxPeriod'];
        return min + (max - min) * Math.random();
    }
    if (backoff.policy === 'exponential') {
        // 指数退避
        var init = backoff.initial;
        var multiplier = backoff.multiplier;
        var time = init * Math.pow(1 + multiplier, retryTimes - 1);
        var max = backoff.max;
        return Math.min(time, max);
    }
    if (backoff.policy === 'exponential_random') {
        // 指数随机退避
        var init = backoff.initial;
        var multiplier = backoff.multiplier;
        var time = init * Math.pow(1 + multiplier, retryTimes - 1);
        var max = backoff.max;
        return Math.min(time * (0.5 + Math.random()), max);
    }
    return 0;
}
exports.getBackoffTime = getBackoffTime;
var UnretryableError = /** @class */ (function (_super) {
    __extends(UnretryableError, _super);
    function UnretryableError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'UnretryableError';
        return _this;
    }
    return UnretryableError;
}(Error));
function newUnretryableError(request) {
    var e = new UnretryableError('');
    e.data = {
        lastRequest: request
    };
    return e;
}
exports.newUnretryableError = newUnretryableError;
var RetryError = /** @class */ (function (_super) {
    __extends(RetryError, _super);
    function RetryError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'RetryError';
        return _this;
    }
    return RetryError;
}(Error));
function retryError(request, response) {
    var e = new RetryError('');
    e.data = {
        request: request,
        response: response
    };
    return e;
}
exports.retryError = retryError;
function isRetryable(err) {
    if (typeof err === 'undefined' || err === null) {
        return false;
    }
    return err.name === 'RetryError';
}
exports.isRetryable = isRetryable;
//# sourceMappingURL=tea.js.map

/***/ }),

/***/ 1979:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RuntimeOptions = void 0;
const $tea = __importStar(__nccwpck_require__(4165));
const kitx = __importStar(__nccwpck_require__(8683));
const querystring_1 = __importDefault(__nccwpck_require__(1191));
const os_1 = __nccwpck_require__(2087);
const DEFAULT_USER_AGENT = `AlibabaCloud (${os_1.platform()}; ${os_1.arch()}) Node.js/${process.version} Core/1.0.1 TeaDSL/1`;
class RuntimeOptions extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            autoretry: 'autoretry',
            ignoreSSL: 'ignoreSSL',
            maxAttempts: 'max_attempts',
            backoffPolicy: 'backoff_policy',
            backoffPeriod: 'backoff_period',
            readTimeout: 'readTimeout',
            connectTimeout: 'connectTimeout',
            httpProxy: 'httpProxy',
            httpsProxy: 'httpsProxy',
            noProxy: 'noProxy',
            maxIdleConns: 'maxIdleConns',
        };
    }
    static types() {
        return {
            autoretry: 'boolean',
            ignoreSSL: 'boolean',
            maxAttempts: 'number',
            backoffPolicy: 'string',
            backoffPeriod: 'number',
            readTimeout: 'number',
            connectTimeout: 'number',
            httpProxy: 'string',
            httpsProxy: 'string',
            noProxy: 'string',
            maxIdleConns: 'number',
        };
    }
}
exports.RuntimeOptions = RuntimeOptions;
function read(readable) {
    return new Promise((resolve, reject) => {
        let onData, onError, onEnd;
        var cleanup = function () {
            // cleanup
            readable.removeListener('error', onError);
            readable.removeListener('data', onData);
            readable.removeListener('end', onEnd);
        };
        var bufs = [];
        var size = 0;
        onData = function (buf) {
            bufs.push(buf);
            size += buf.length;
        };
        onError = function (err) {
            cleanup();
            reject(err);
        };
        onEnd = function () {
            cleanup();
            resolve(Buffer.concat(bufs, size));
        };
        readable.on('error', onError);
        readable.on('data', onData);
        readable.on('end', onEnd);
    });
}
class Client {
    static toString(buff) {
        return buff.toString();
    }
    static parseJSON(text) {
        return JSON.parse(text);
    }
    static async readAsBytes(stream) {
        return await read(stream);
    }
    static async readAsString(stream) {
        let buff = await Client.readAsBytes(stream);
        return Client.toString(buff);
    }
    static async readAsJSON(stream) {
        return Client.parseJSON(await Client.readAsString(stream));
    }
    static getNonce() {
        return kitx.makeNonce();
    }
    static getDateUTCString() {
        const now = new Date();
        return now.toUTCString();
    }
    static defaultString(real, defaultValue) {
        return real || defaultValue;
    }
    static defaultNumber(real, defaultValue) {
        return real || defaultValue;
    }
    static toFormString(val) {
        return querystring_1.default.stringify(val);
    }
    static toJSONString(val) {
        if (typeof val === 'string') {
            return val;
        }
        return JSON.stringify(val);
    }
    static toBytes(val) {
        return Buffer.from(val);
    }
    static empty(val) {
        return !val;
    }
    static equalString(val1, val2) {
        return val1 === val2;
    }
    static equalNumber(val1, val2) {
        return val1 === val2;
    }
    static isUnset(value) {
        if (typeof value === 'undefined') {
            return true;
        }
        if (value === null) {
            return true;
        }
        return false;
    }
    static stringifyMapValue(m) {
        if (!m) {
            return m;
        }
        const result = {};
        for (const [key, value] of Object.entries(m)) {
            if (typeof value === 'undefined' || value === null) {
                continue;
            }
            result[key] = String(value);
        }
        return result;
    }
    static anyifyMapValue(m) {
        return m;
    }
    static assertAsBoolean(value) {
        if (typeof value === 'boolean') {
            return value;
        }
        throw new Error(`The value is not a boolean`);
    }
    static assertAsString(value) {
        if (typeof value === 'string') {
            return value;
        }
        throw new Error(`The value is not a string`);
    }
    static assertAsNumber(value) {
        if (typeof value === 'number') {
            return value;
        }
        throw new Error(`The value is not a number`);
    }
    static assertAsMap(value) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            return value;
        }
        throw new Error(`The value is not a object`);
    }
    static assertAsArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
        throw new Error(`The value is not array`);
    }
    static assertAsBytes(value) {
        if (Buffer.isBuffer(value)) {
            return value;
        }
        throw new Error(`The value is not bytes`);
    }
    static getUserAgent(userAgent) {
        if (!userAgent || !userAgent.length) {
            return DEFAULT_USER_AGENT;
        }
        return DEFAULT_USER_AGENT + " " + userAgent;
    }
    static is2xx(code) {
        return code >= 200 && code < 300;
    }
    static is3xx(code) {
        return code >= 300 && code < 400;
    }
    static is4xx(code) {
        return code >= 400 && code < 500;
    }
    static is5xx(code) {
        return code >= 500 && code < 600;
    }
    static validateModel(m) {
    }
    static toMap(inputModel) {
        return $tea.toMap(inputModel);
    }
    static async sleep(millisecond) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, millisecond);
        });
    }
    static toArray(input) {
        if (!(input instanceof Array)) {
            return null;
        }
        let ret = [];
        input.forEach((model) => {
            if (!model) {
                return;
            }
            ret.push($tea.toMap(model));
        });
        return ret;
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 7777:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "Chalk": () => (/* binding */ Chalk),
  "chalkStderr": () => (/* binding */ chalkStderr),
  "default": () => (/* binding */ source),
  "supportsColor": () => (/* binding */ stdoutColor),
  "supportsColorStderr": () => (/* binding */ stderrColor)
});

// EXTERNAL MODULE: ./node_modules/@vercel/ncc/dist/ncc/@@notfound.js?#ansi-styles
var _notfound_ansi_styles = __nccwpck_require__(16);
// EXTERNAL MODULE: ./node_modules/@vercel/ncc/dist/ncc/@@notfound.js?#supports-color
var _notfound_supports_color = __nccwpck_require__(5210);
;// CONCATENATED MODULE: ./node_modules/chalk/source/utilities.js
// TODO: When targeting Node.js 16, use `String.prototype.replaceAll`.
function stringReplaceAll(string, substring, replacer) {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.slice(endIndex);
	return returnValue;
}

function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.slice(endIndex);
	return returnValue;
}

;// CONCATENATED MODULE: ./node_modules/chalk/source/index.js




const {stdout: stdoutColor, stderr: stderrColor} = _notfound_supports_color;

const GENERATOR = Symbol('GENERATOR');
const STYLER = Symbol('STYLER');
const IS_EMPTY = Symbol('IS_EMPTY');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m',
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class Chalk {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = (...strings) => strings.join(' ');
	applyOptions(chalk, options);

	Object.setPrototypeOf(chalk, createChalk.prototype);

	return chalk;
};

function createChalk(options) {
	return chalkFactory(options);
}

Object.setPrototypeOf(createChalk.prototype, Function.prototype);

for (const [styleName, style] of Object.entries(_notfound_ansi_styles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		},
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this[STYLER], true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	},
};

const getModelAnsi = (model, level, type, ...arguments_) => {
	if (model === 'rgb') {
		if (level === 'ansi16m') {
			return _notfound_ansi_styles[type].ansi16m(...arguments_);
		}

		if (level === 'ansi256') {
			return _notfound_ansi_styles[type].ansi256(_notfound_ansi_styles.rgbToAnsi256(...arguments_));
		}

		return _notfound_ansi_styles[type].ansi(_notfound_ansi_styles.rgbToAnsi(...arguments_));
	}

	if (model === 'hex') {
		return getModelAnsi('rgb', level, type, ..._notfound_ansi_styles.hexToRgb(...arguments_));
	}

	return _notfound_ansi_styles[type][model](...arguments_);
};

const usedModels = ['rgb', 'hex', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(getModelAnsi(model, levelMapping[level], 'color', ...arguments_), _notfound_ansi_styles.color.close, this[STYLER]);
				return createBuilder(this, styler, this[IS_EMPTY]);
			};
		},
	};

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(getModelAnsi(model, levelMapping[level], 'bgColor', ...arguments_), _notfound_ansi_styles.bgColor.close, this[STYLER]);
				return createBuilder(this, styler, this[IS_EMPTY]);
			};
		},
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this[GENERATOR].level;
		},
		set(level) {
			this[GENERATOR].level = level;
		},
	},
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent,
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	// Single argument is hot path, implicit coercion is faster than anything
	// eslint-disable-next-line no-implicit-coercion
	const builder = (...arguments_) => applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder[GENERATOR] = self;
	builder[STYLER] = _styler;
	builder[IS_EMPTY] = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self[IS_EMPTY] ? '' : string;
	}

	let styler = self[STYLER];

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.includes('\u001B')) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

Object.defineProperties(createChalk.prototype, styles);

const chalk = createChalk();
const chalkStderr = createChalk({level: stderrColor ? stderrColor.level : 0});



/* harmony default export */ const source = (chalk);


/***/ }),

/***/ 8222:
/***/ ((module, exports, __nccwpck_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __nccwpck_require__(6243)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 6243:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __nccwpck_require__(900);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 8237:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __nccwpck_require__(8222);
} else {
	module.exports = __nccwpck_require__(5332);
}


/***/ }),

/***/ 5332:
/***/ ((module, exports, __nccwpck_require__) => {

/**
 * Module dependencies.
 */

const tty = __nccwpck_require__(3867);
const util = __nccwpck_require__(1669);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __nccwpck_require__(9318);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __nccwpck_require__(6243)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 1621:
/***/ ((module) => {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 9074:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const zlib = __nccwpck_require__(8761);
const http = __nccwpck_require__(8605);
const https = __nccwpck_require__(7211);
const parse = __nccwpck_require__(8835).parse;
const format = __nccwpck_require__(8835).format;

const debugBody = __nccwpck_require__(8237)('httpx:body');
const debugHeader = __nccwpck_require__(8237)('httpx:header');

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

const TIMEOUT = 3000; // 3s

const READ_TIMER = Symbol('TIMER::READ_TIMER');
const READ_TIME_OUT = Symbol('TIMER::READ_TIME_OUT');
const READ_TIMER_START_AT = Symbol('TIMER::READ_TIMER_START_AT');

var append = function (err, name, message) {
  err.name = name + err.name;
  err.message = `${message}. ${err.message}`;
  return err;
};

const isNumber = function (num) {
  return num !== null && !isNaN(num);
};

exports.request = function (url, opts) {
  // request(url)
  opts || (opts = {});

  const parsed = typeof url === 'string' ? parse(url) : url;

  let readTimeout, connectTimeout;
  if (isNumber(opts.readTimeout) || isNumber(opts.connectTimeout)) {
    readTimeout = isNumber(opts.readTimeout) ? Number(opts.readTimeout) : TIMEOUT;
    connectTimeout = isNumber(opts.connectTimeout) ? Number(opts.connectTimeout) : TIMEOUT;
  } else if (isNumber(opts.timeout)) {
    readTimeout = connectTimeout = Number(opts.timeout);
  } else {
    readTimeout = connectTimeout = TIMEOUT;
  }

  const isHttps = parsed.protocol === 'https:';
  const method = (opts.method || 'GET').toUpperCase();
  const defaultAgent = isHttps ? httpsAgent : httpAgent;
  const agent = opts.agent || defaultAgent;

  var options = {
    host: parsed.hostname || 'localhost',
    path: parsed.path || '/',
    method: method,
    port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
    agent: agent,
    headers: opts.headers || {},
    // ssl config
    key: opts.key || '',
    cert: opts.cert || '',
    ca: opts.ca || '',
    // connect timerout
    timeout: connectTimeout
  };

  if (isHttps && typeof opts.rejectUnauthorized !== 'undefined') {
    options.rejectUnauthorized = opts.rejectUnauthorized;
  }

  if (opts.compression) {
    options.headers['accept-encoding'] = 'gzip,deflate';
  }

  const httplib = isHttps ? https : http;

  if (typeof opts.beforeRequest === 'function') {
    options = opts.beforeRequest(options);
  }

  return new Promise((resolve, reject) => {
    const request = httplib.request(options);
    const body = opts.data;

    var fulfilled = (response) => {
      if (debugHeader.enabled) {
        const requestHeaders = response.req._header;
        requestHeaders.split('\r\n').forEach((line) => {
          debugHeader('> %s', line);
        });

        debugHeader('< HTTP/%s %s %s', response.httpVersion, response.statusCode, response.statusMessage);
        Object.keys(response.headers).forEach((key) => {
          debugHeader('< %s: %s', key, response.headers[key]);
        });
      }
      resolve(response);
    };

    var rejected = (err) => {
      err.message += `${method} ${format(parsed)} failed.`;
      // clear response timer when error
      if (request.socket && request.socket[READ_TIMER]) {
        clearTimeout(request.socket[READ_TIMER]);
      }
      reject(err);
    };

    var abort = (err) => {
      request.abort();
      rejected(err);
    };

    const startResponseTimer = function (socket) {
      const timer = setTimeout(() => {
        if (socket[READ_TIMER]) {
          clearTimeout(socket[READ_TIMER]);
          socket[READ_TIMER] = null;
        }
        var err = new Error();
        var message = `ReadTimeout(${readTimeout})`;
        abort(append(err, 'RequestTimeout', message));
      }, readTimeout);
      // start read-timer
      socket[READ_TIME_OUT] = readTimeout;
      socket[READ_TIMER] = timer;
      socket[READ_TIMER_START_AT] = Date.now();
    };

    // string
    if (!body || 'string' === typeof body || body instanceof Buffer) {
      if (debugBody.enabled) {
        if (!body) {
          debugBody('<no request body>');
        } else if ('string' === typeof body) {
          debugBody(body);
        } else {
          debugBody(`Buffer <ignored>, Buffer length: ${body.length}`);
        }
      }
      request.end(body);
    } else if ('function' === typeof body.pipe) { // stream
      body.pipe(request);
      if (debugBody.enabled) {
        debugBody('<request body is a stream>');
      }
      body.once('error', (err) => {
        abort(append(err, 'HttpX', 'Stream occor error'));
      });
    }

    request.on('response', fulfilled);
    request.on('error', rejected);
    request.once('socket', function (socket) {
      // reuse socket
      if (socket.readyState === 'opening') {
        socket.once('connect', function () {
          startResponseTimer(socket);
        });
      } else {
        startResponseTimer(socket);
      }
    });
  });
};

exports.read = function (response, encoding) {
  var readable = response;
  switch (response.headers['content-encoding']) {
  // or, just use zlib.createUnzip() to handle both cases
  case 'gzip':
    readable = response.pipe(zlib.createGunzip());
    break;
  case 'deflate':
    readable = response.pipe(zlib.createInflate());
    break;
  default:
    break;
  }

  return new Promise((resolve, reject) => {
    // node.js 14 use response.client
    const socket = response.socket || response.client;

    const makeReadTimeoutError = () => {
      const req = response.req;
      var err = new Error();
      err.name = 'RequestTimeoutError';
      err.message = `ReadTimeout: ${socket[READ_TIME_OUT]}. ${req.method} ${req.path} failed.`;
      return err;
    };
    // check read-timer
    let readTimer;
    const oldReadTimer = socket[READ_TIMER];
    if (!oldReadTimer) {
      reject(makeReadTimeoutError());
      return;
    }
    const remainTime = socket[READ_TIME_OUT] - (Date.now() - socket[READ_TIMER_START_AT]);
    clearTimeout(oldReadTimer);
    if (remainTime <= 0) {
      reject(makeReadTimeoutError());
      return;
    }
    readTimer = setTimeout(function () {
      reject(makeReadTimeoutError());
    }, remainTime);

    // start reading data
    var onError, onData, onEnd;
    var cleanup = function () {
      // cleanup
      readable.removeListener('error', onError);
      readable.removeListener('data', onData);
      readable.removeListener('end', onEnd);
      // clear read timer
      if (readTimer) {
        clearTimeout(readTimer);
      }
    };

    const bufs = [];
    var size = 0;

    onData = function (buf) {
      bufs.push(buf);
      size += buf.length;
    };

    onError = function (err) {
      cleanup();
      reject(err);
    };

    onEnd = function () {
      cleanup();
      var buff = Buffer.concat(bufs, size);

      debugBody('');
      if (encoding) {
        const result = buff.toString(encoding);
        debugBody(result);
        return resolve(result);
      }

      if (debugBody.enabled) {
        debugBody(buff.toString());
      }
      resolve(buff);
    };

    readable.on('error', onError);
    readable.on('data', onData);
    readable.on('end', onEnd);
  });
};


/***/ }),

/***/ 8885:
/***/ ((__unused_webpack_module, exports) => {

exports.parse = exports.decode = decode

exports.stringify = exports.encode = encode

exports.safe = safe
exports.unsafe = unsafe

var eol = typeof process !== 'undefined' &&
  process.platform === 'win32' ? '\r\n' : '\n'

function encode (obj, opt) {
  var children = []
  var out = ''

  if (typeof opt === 'string') {
    opt = {
      section: opt,
      whitespace: false,
    }
  } else {
    opt = opt || {}
    opt.whitespace = opt.whitespace === true
  }

  var separator = opt.whitespace ? ' = ' : '='

  Object.keys(obj).forEach(function (k, _, __) {
    var val = obj[k]
    if (val && Array.isArray(val)) {
      val.forEach(function (item) {
        out += safe(k + '[]') + separator + safe(item) + '\n'
      })
    } else if (val && typeof val === 'object')
      children.push(k)
    else
      out += safe(k) + separator + safe(val) + eol
  })

  if (opt.section && out.length)
    out = '[' + safe(opt.section) + ']' + eol + out

  children.forEach(function (k, _, __) {
    var nk = dotSplit(k).join('\\.')
    var section = (opt.section ? opt.section + '.' : '') + nk
    var child = encode(obj[k], {
      section: section,
      whitespace: opt.whitespace,
    })
    if (out.length && child.length)
      out += eol

    out += child
  })

  return out
}

function dotSplit (str) {
  return str.replace(/\1/g, '\u0002LITERAL\\1LITERAL\u0002')
    .replace(/\\\./g, '\u0001')
    .split(/\./).map(function (part) {
      return part.replace(/\1/g, '\\.')
        .replace(/\2LITERAL\\1LITERAL\2/g, '\u0001')
    })
}

function decode (str) {
  var out = {}
  var p = out
  var section = null
  //          section     |key      = value
  var re = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i
  var lines = str.split(/[\r\n]+/g)

  lines.forEach(function (line, _, __) {
    if (!line || line.match(/^\s*[;#]/))
      return
    var match = line.match(re)
    if (!match)
      return
    if (match[1] !== undefined) {
      section = unsafe(match[1])
      if (section === '__proto__') {
        // not allowed
        // keep parsing the section, but don't attach it.
        p = {}
        return
      }
      p = out[section] = out[section] || {}
      return
    }
    var key = unsafe(match[2])
    if (key === '__proto__')
      return
    var value = match[3] ? unsafe(match[4]) : true
    switch (value) {
      case 'true':
      case 'false':
      case 'null': value = JSON.parse(value)
    }

    // Convert keys with '[]' suffix to an array
    if (key.length > 2 && key.slice(-2) === '[]') {
      key = key.substring(0, key.length - 2)
      if (key === '__proto__')
        return
      if (!p[key])
        p[key] = []
      else if (!Array.isArray(p[key]))
        p[key] = [p[key]]
    }

    // safeguard against resetting a previously defined
    // array by accidentally forgetting the brackets
    if (Array.isArray(p[key]))
      p[key].push(value)
    else
      p[key] = value
  })

  // {a:{y:1},"a.b":{x:2}} --> {a:{y:1,b:{x:2}}}
  // use a filter to return the keys that have to be deleted.
  Object.keys(out).filter(function (k, _, __) {
    if (!out[k] ||
      typeof out[k] !== 'object' ||
      Array.isArray(out[k]))
      return false

    // see if the parent section is also an object.
    // if so, add it to that, and mark this one for deletion
    var parts = dotSplit(k)
    var p = out
    var l = parts.pop()
    var nl = l.replace(/\\\./g, '.')
    parts.forEach(function (part, _, __) {
      if (part === '__proto__')
        return
      if (!p[part] || typeof p[part] !== 'object')
        p[part] = {}
      p = p[part]
    })
    if (p === out && nl === l)
      return false

    p[nl] = out[k]
    return true
  }).forEach(function (del, _, __) {
    delete out[del]
  })

  return out
}

function isQuoted (val) {
  return (val.charAt(0) === '"' && val.slice(-1) === '"') ||
    (val.charAt(0) === "'" && val.slice(-1) === "'")
}

function safe (val) {
  return (typeof val !== 'string' ||
    val.match(/[=\r\n]/) ||
    val.match(/^\[/) ||
    (val.length > 1 &&
     isQuoted(val)) ||
    val !== val.trim())
    ? JSON.stringify(val)
    : val.replace(/;/g, '\\;').replace(/#/g, '\\#')
}

function unsafe (val, doUnesc) {
  val = (val || '').trim()
  if (isQuoted(val)) {
    // remove the single quotes before calling JSON.parse
    if (val.charAt(0) === "'")
      val = val.substr(1, val.length - 2)

    try {
      val = JSON.parse(val)
    } catch (_) {}
  } else {
    // walk the val to find the first not-escaped ; character
    var esc = false
    var unesc = ''
    for (var i = 0, l = val.length; i < l; i++) {
      var c = val.charAt(i)
      if (esc) {
        if ('\\;#'.indexOf(c) !== -1)
          unesc += c
        else
          unesc += '\\' + c

        esc = false
      } else if (';#'.indexOf(c) !== -1)
        break
      else if (c === '\\')
        esc = true
      else
        unesc += c
    }
    if (esc)
      unesc += '\\'

    return unesc.trim()
  }
  return val
}


/***/ }),

/***/ 8683:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const fs = __nccwpck_require__(5747);
const os = __nccwpck_require__(2087);
const crypto = __nccwpck_require__(6417);

/**
 * Load *.json file synchronous. Don't use require('*.json')
 * to load *.json files, it will cached in process.
 * @param {String} filename absolute file path
 * @return {Object} a parsed object
 */
exports.loadJSONSync = function (filename) {
  // strip BOM
  var content = fs.readFileSync(filename, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  try {
    return JSON.parse(content);
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};

/**
 * Encoding a string to Buffer safely
 * @param {String} str string.
 * @param {String} encoding. optional.
 * @return {Buffer} encoded buffer
 */
exports.encode = function (str, encoding) {
  if (typeof str !== 'string') {
    str = '' + str;
  }

  return Buffer.from(str, encoding);
};

/**
 * Generate a haser with specfied algorithm
 * @param {String} algorithm can be md5, etc.
 * @return {Function} a haser with specfied algorithm
 */
exports.makeHasher = function (algorithm) {
  return function (data, encoding) {
    var shasum = crypto.createHash(algorithm);
    shasum.update(data);
    return shasum.digest(encoding);
  };
};

exports.createHash = exports.makeHasher;

/**
 * Get md5 hash digests of data
 * @param {String|Buffer} data data.
 * @param {String} encoding optional. can be 'hex', 'binary', 'base64'.
 * @return {String|Buffer} if no encoding is provided, a buffer is returned.
 */
exports.md5 = exports.makeHasher('md5');

/**
 * Get sha1 hash digests of data
 * @param {String|Buffer} data data.
 * @param {String} key the key.
 * @param {String} encoding optionnal. can be 'hex', 'binary', 'base64'.
 * @return {String|Buffer} if no encoding is provided, a buffer is returned.
 */
exports.createHmac = function (algorithm) {
  return function (data, key, encoding) {
    return crypto.createHmac(algorithm, key).update(data).digest(encoding);
  };
};

/**
 * Get sha1 hash digests of data
 * @param {String|Buffer} data data.
 * @param {String} key the key.
 * @param {String} encoding optionnal. can be 'hex', 'binary', 'base64'.
 * @return {String|Buffer} if no encoding is provided, a buffer is returned.
 */
exports.sha1 = exports.createHmac('sha1');

/**
 * Get a random value in a range
 * @param {Number} min range start.
 * @param {Number} max range end.
 */
exports.random = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};

/**
 * Generate a nonce string
 * @return {String} a nonce string.
 */
exports.makeNonce = (function () {
  var counter = 0;
  var last;
  const machine = os.hostname();
  const pid = process.pid;

  return function () {
    var val = Math.floor(Math.random() * 1000000000000);
    if (val === last) {
      counter++;
    } else {
      counter = 0;
    }

    last = val;

    var uid = `${machine}${pid}${val}${counter}`;
    return exports.md5(uid, 'hex');
  };
}());

/**
 * Pad a number as \d\d format
 * @param {Number} num a number that less than 100.
 * @return {String} if number less than 10, pad with 0,
 *  otherwise, returns string of number.
 */
exports.pad2 = function (num) {
  if (num < 10) {
    return '0' + num;
  }
  return '' + num;
};

/**
 * Pad a number as \d\d\d format
 * @param {Number} num a number that less than 1000.
 * @return {String} if number less than 100, pad with 0,
 *  otherwise, returns string of number.
 */
exports.pad3 = function (num) {
  if (num < 10) {
    return '00' + num;
  } else if (num < 100) {
    return '0' + num;
  }
  return '' + num;
};

/**
 * Return the YYYYMMDD format of a date.
 * @param {Date} date a Date object.
 * @return {String} the YYYYMMDD format.
 */
exports.getYYYYMMDD = function (date) {
  var YYYY = date.getFullYear();
  var MM = exports.pad2(date.getMonth() + 1);
  var DD = exports.pad2(date.getDate());
  return '' + YYYY + MM + DD;
};

/**
 * sleep a while.
 * @param {Number} in milliseconds
 * @return {Promise} a Promise
 */
exports.sleep = function (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * Get the IPv4 address
 * @return {String} the IPv4 address, or empty string
 */
exports.getIPv4 = function () {
  var interfaces = os.networkInterfaces();
  var keys = Object.keys(interfaces);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var addresses = interfaces[key];
    for (var j = 0; j < addresses.length; j++) {
      var item = addresses[j];
      if (!item.internal && item.family === 'IPv4') {
        return item.address;
      }
    }
  }

  // without non-internal address
  return '';
};

/**
 * Get the Mac address
 * @return {String} the Mac address
 */
exports.getMac = function () {
  var interfaces = os.networkInterfaces();
  var keys = Object.keys(interfaces);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var addresses = interfaces[key];
    for (var j = 0; j < addresses.length; j++) {
      var item = addresses[j];
      if (!item.internal && item.family === 'IPv4') {
        return item.mac;
      }
    }
  }

  // without non-internal address
  return '00:00:00:00:00:00';
};

/**
 * Read all bytes from a readable
 * @return {Readable} the readable stream
 * @return {Promise} a Promise with all bytes
 */
exports.readAll = function (readable) {
  return new Promise((resolve, reject) => {
    var onError, onData, onEnd;
    var cleanup = function (err) {
      // cleanup
      readable.removeListener('error', onError);
      readable.removeListener('data', onData);
      readable.removeListener('end', onEnd);
    };

    var bufs = [];
    var size = 0;

    onData = function (buf) {
      bufs.push(buf);
      size += buf.length;
    };

    onError = function (err) {
      cleanup();
      reject(err);
    };

    onEnd = function () {
      cleanup();
      resolve(Buffer.concat(bufs, size));
    };

    readable.on('error', onError);
    readable.on('data', onData);
    readable.on('end', onEnd);
  });
};


/***/ }),

/***/ 900:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 9318:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(2087);
const hasFlag = __nccwpck_require__(1621);

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1631);
var tls = __nccwpck_require__(4016);
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var events = __nccwpck_require__(8614);
var assert = __nccwpck_require__(2357);
var util = __nccwpck_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 16:
/***/ ((module) => {

module.exports = eval("require")("");


/***/ }),

/***/ 5210:
/***/ ((module) => {

module.exports = eval("require")("");


/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 6417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 1191:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 3867:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(3109);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map