/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.battle_field = (function() {

    /**
     * Namespace battle_field.
     * @exports battle_field
     * @namespace
     */
    var battle_field = {};

    battle_field.BattleField = (function() {

        /**
         * Properties of a BattleField.
         * @memberof battle_field
         * @interface IBattleField
         * @property {number|null} [battle_field_id] BattleField battle_field_id
         * @property {string|null} [name] BattleField name
         * @property {string|null} [description] BattleField description
         */

        /**
         * Constructs a new BattleField.
         * @memberof battle_field
         * @classdesc Represents a BattleField.
         * @implements IBattleField
         * @constructor
         * @param {battle_field.IBattleField=} [properties] Properties to set
         */
        function BattleField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleField battle_field_id.
         * @member {number} battle_field_id
         * @memberof battle_field.BattleField
         * @instance
         */
        BattleField.prototype.battle_field_id = 0;

        /**
         * BattleField name.
         * @member {string} name
         * @memberof battle_field.BattleField
         * @instance
         */
        BattleField.prototype.name = "";

        /**
         * BattleField description.
         * @member {string} description
         * @memberof battle_field.BattleField
         * @instance
         */
        BattleField.prototype.description = "";

        /**
         * Creates a new BattleField instance using the specified properties.
         * @function create
         * @memberof battle_field.BattleField
         * @static
         * @param {battle_field.IBattleField=} [properties] Properties to set
         * @returns {battle_field.BattleField} BattleField instance
         */
        BattleField.create = function create(properties) {
            return new BattleField(properties);
        };

        /**
         * Encodes the specified BattleField message. Does not implicitly {@link battle_field.BattleField.verify|verify} messages.
         * @function encode
         * @memberof battle_field.BattleField
         * @static
         * @param {battle_field.IBattleField} message BattleField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battle_field_id != null && message.hasOwnProperty("battle_field_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.battle_field_id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified BattleField message, length delimited. Does not implicitly {@link battle_field.BattleField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle_field.BattleField
         * @static
         * @param {battle_field.IBattleField} message BattleField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleField message from the specified reader or buffer.
         * @function decode
         * @memberof battle_field.BattleField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle_field.BattleField} BattleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_field.BattleField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battle_field_id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle_field.BattleField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle_field.BattleField} BattleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleField message.
         * @function verify
         * @memberof battle_field.BattleField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battle_field_id != null && message.hasOwnProperty("battle_field_id"))
                if (!$util.isInteger(message.battle_field_id))
                    return "battle_field_id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a BattleField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle_field.BattleField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle_field.BattleField} BattleField
         */
        BattleField.fromObject = function fromObject(object) {
            if (object instanceof $root.battle_field.BattleField)
                return object;
            var message = new $root.battle_field.BattleField();
            if (object.battle_field_id != null)
                message.battle_field_id = object.battle_field_id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a BattleField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle_field.BattleField
         * @static
         * @param {battle_field.BattleField} message BattleField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.battle_field_id = 0;
                object.name = "";
                object.description = "";
            }
            if (message.battle_field_id != null && message.hasOwnProperty("battle_field_id"))
                object.battle_field_id = message.battle_field_id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this BattleField to JSON.
         * @function toJSON
         * @memberof battle_field.BattleField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleField;
    })();

    return battle_field;
})();

$root.champion = (function() {

    /**
     * Namespace champion.
     * @exports champion
     * @namespace
     */
    var champion = {};

    champion.Champion = (function() {

        /**
         * Properties of a Champion.
         * @memberof champion
         * @interface IChampion
         * @property {number|null} [champion_id] Champion champion_id
         * @property {champion.Champion.ChampionType|null} [type] Champion type
         * @property {string|null} [name] Champion name
         * @property {string|null} [message] Champion message
         */

        /**
         * Constructs a new Champion.
         * @memberof champion
         * @classdesc Represents a Champion.
         * @implements IChampion
         * @constructor
         * @param {champion.IChampion=} [properties] Properties to set
         */
        function Champion(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Champion champion_id.
         * @member {number} champion_id
         * @memberof champion.Champion
         * @instance
         */
        Champion.prototype.champion_id = 0;

        /**
         * Champion type.
         * @member {champion.Champion.ChampionType} type
         * @memberof champion.Champion
         * @instance
         */
        Champion.prototype.type = 0;

        /**
         * Champion name.
         * @member {string} name
         * @memberof champion.Champion
         * @instance
         */
        Champion.prototype.name = "";

        /**
         * Champion message.
         * @member {string} message
         * @memberof champion.Champion
         * @instance
         */
        Champion.prototype.message = "";

        /**
         * Creates a new Champion instance using the specified properties.
         * @function create
         * @memberof champion.Champion
         * @static
         * @param {champion.IChampion=} [properties] Properties to set
         * @returns {champion.Champion} Champion instance
         */
        Champion.create = function create(properties) {
            return new Champion(properties);
        };

        /**
         * Encodes the specified Champion message. Does not implicitly {@link champion.Champion.verify|verify} messages.
         * @function encode
         * @memberof champion.Champion
         * @static
         * @param {champion.IChampion} message Champion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Champion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.champion_id != null && message.hasOwnProperty("champion_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.champion_id);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified Champion message, length delimited. Does not implicitly {@link champion.Champion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof champion.Champion
         * @static
         * @param {champion.IChampion} message Champion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Champion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Champion message from the specified reader or buffer.
         * @function decode
         * @memberof champion.Champion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {champion.Champion} Champion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Champion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.champion.Champion();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.champion_id = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Champion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof champion.Champion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {champion.Champion} Champion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Champion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Champion message.
         * @function verify
         * @memberof champion.Champion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Champion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.champion_id != null && message.hasOwnProperty("champion_id"))
                if (!$util.isInteger(message.champion_id))
                    return "champion_id: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a Champion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof champion.Champion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {champion.Champion} Champion
         */
        Champion.fromObject = function fromObject(object) {
            if (object instanceof $root.champion.Champion)
                return object;
            var message = new $root.champion.Champion();
            if (object.champion_id != null)
                message.champion_id = object.champion_id | 0;
            switch (object.type) {
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "MARKSMAN":
            case 1:
                message.type = 1;
                break;
            case "MAGE":
            case 2:
                message.type = 2;
                break;
            case "ASSASSIN":
            case 3:
                message.type = 3;
                break;
            case "TANK":
            case 4:
                message.type = 4;
                break;
            case "FIGHTER":
            case 5:
                message.type = 5;
                break;
            case "SUPPORT":
            case 6:
                message.type = 6;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Champion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof champion.Champion
         * @static
         * @param {champion.Champion} message Champion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Champion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.champion_id = 0;
                object.type = options.enums === String ? "UNKNOWN" : 0;
                object.name = "";
                object.message = "";
            }
            if (message.champion_id != null && message.hasOwnProperty("champion_id"))
                object.champion_id = message.champion_id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.champion.Champion.ChampionType[message.type] : message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this Champion to JSON.
         * @function toJSON
         * @memberof champion.Champion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Champion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ChampionType enum.
         * @name champion.Champion.ChampionType
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} MARKSMAN=1 MARKSMAN value
         * @property {number} MAGE=2 MAGE value
         * @property {number} ASSASSIN=3 ASSASSIN value
         * @property {number} TANK=4 TANK value
         * @property {number} FIGHTER=5 FIGHTER value
         * @property {number} SUPPORT=6 SUPPORT value
         */
        Champion.ChampionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "MARKSMAN"] = 1;
            values[valuesById[2] = "MAGE"] = 2;
            values[valuesById[3] = "ASSASSIN"] = 3;
            values[valuesById[4] = "TANK"] = 4;
            values[valuesById[5] = "FIGHTER"] = 5;
            values[valuesById[6] = "SUPPORT"] = 6;
            return values;
        })();

        return Champion;
    })();

    return champion;
})();

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    rpc.Rpc = (function() {

        /**
         * Constructs a new Rpc service.
         * @memberof rpc
         * @classdesc Represents a Rpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Rpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Rpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Rpc;

        /**
         * Creates new Rpc service using the specified rpc implementation.
         * @function create
         * @memberof rpc.Rpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Rpc} RPC service. Useful where requests and/or responses are streamed.
         */
        Rpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.Rpc#getChampion}.
         * @memberof rpc.Rpc
         * @typedef GetChampionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetChampionResponse} [response] GetChampionResponse
         */

        /**
         * Calls GetChampion.
         * @function getChampion
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IGetChampionRequest} request GetChampionRequest message or plain object
         * @param {rpc.Rpc.GetChampionCallback} callback Node-style callback called with the error, if any, and GetChampionResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.getChampion = function getChampion(request, callback) {
            return this.rpcCall(getChampion, $root.rpc.GetChampionRequest, $root.rpc.GetChampionResponse, request, callback);
        }, "name", { value: "GetChampion" });

        /**
         * Calls GetChampion.
         * @function getChampion
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IGetChampionRequest} request GetChampionRequest message or plain object
         * @returns {Promise<rpc.GetChampionResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.Rpc#listChampions}.
         * @memberof rpc.Rpc
         * @typedef ListChampionsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.ListChampionsResponse} [response] ListChampionsResponse
         */

        /**
         * Calls ListChampions.
         * @function listChampions
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @param {rpc.Rpc.ListChampionsCallback} callback Node-style callback called with the error, if any, and ListChampionsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.listChampions = function listChampions(request, callback) {
            return this.rpcCall(listChampions, $root.rpc.Empty, $root.rpc.ListChampionsResponse, request, callback);
        }, "name", { value: "ListChampions" });

        /**
         * Calls ListChampions.
         * @function listChampions
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @returns {Promise<rpc.ListChampionsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.Rpc#getBattleField}.
         * @memberof rpc.Rpc
         * @typedef GetBattleFieldCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetBattleFieldResponse} [response] GetBattleFieldResponse
         */

        /**
         * Calls GetBattleField.
         * @function getBattleField
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @param {rpc.Rpc.GetBattleFieldCallback} callback Node-style callback called with the error, if any, and GetBattleFieldResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.getBattleField = function getBattleField(request, callback) {
            return this.rpcCall(getBattleField, $root.rpc.Empty, $root.rpc.GetBattleFieldResponse, request, callback);
        }, "name", { value: "GetBattleField" });

        /**
         * Calls GetBattleField.
         * @function getBattleField
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @returns {Promise<rpc.GetBattleFieldResponse>} Promise
         * @variation 2
         */

        return Rpc;
    })();

    rpc.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof rpc
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof rpc
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {rpc.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty=} [properties] Properties to set
         * @returns {rpc.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @function encode
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof rpc.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.Empty)
                return object;
            return new $root.rpc.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.Empty
         * @static
         * @param {rpc.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof rpc.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    rpc.GetChampionRequest = (function() {

        /**
         * Properties of a GetChampionRequest.
         * @memberof rpc
         * @interface IGetChampionRequest
         * @property {number|null} [champion_id] GetChampionRequest champion_id
         */

        /**
         * Constructs a new GetChampionRequest.
         * @memberof rpc
         * @classdesc Represents a GetChampionRequest.
         * @implements IGetChampionRequest
         * @constructor
         * @param {rpc.IGetChampionRequest=} [properties] Properties to set
         */
        function GetChampionRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetChampionRequest champion_id.
         * @member {number} champion_id
         * @memberof rpc.GetChampionRequest
         * @instance
         */
        GetChampionRequest.prototype.champion_id = 0;

        /**
         * Creates a new GetChampionRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {rpc.IGetChampionRequest=} [properties] Properties to set
         * @returns {rpc.GetChampionRequest} GetChampionRequest instance
         */
        GetChampionRequest.create = function create(properties) {
            return new GetChampionRequest(properties);
        };

        /**
         * Encodes the specified GetChampionRequest message. Does not implicitly {@link rpc.GetChampionRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {rpc.IGetChampionRequest} message GetChampionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChampionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.champion_id != null && message.hasOwnProperty("champion_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.champion_id);
            return writer;
        };

        /**
         * Encodes the specified GetChampionRequest message, length delimited. Does not implicitly {@link rpc.GetChampionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {rpc.IGetChampionRequest} message GetChampionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChampionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetChampionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetChampionRequest} GetChampionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChampionRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetChampionRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.champion_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetChampionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetChampionRequest} GetChampionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChampionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetChampionRequest message.
         * @function verify
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetChampionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.champion_id != null && message.hasOwnProperty("champion_id"))
                if (!$util.isInteger(message.champion_id))
                    return "champion_id: integer expected";
            return null;
        };

        /**
         * Creates a GetChampionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetChampionRequest} GetChampionRequest
         */
        GetChampionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetChampionRequest)
                return object;
            var message = new $root.rpc.GetChampionRequest();
            if (object.champion_id != null)
                message.champion_id = object.champion_id | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetChampionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetChampionRequest
         * @static
         * @param {rpc.GetChampionRequest} message GetChampionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetChampionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.champion_id = 0;
            if (message.champion_id != null && message.hasOwnProperty("champion_id"))
                object.champion_id = message.champion_id;
            return object;
        };

        /**
         * Converts this GetChampionRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetChampionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetChampionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetChampionRequest;
    })();

    rpc.GetChampionResponse = (function() {

        /**
         * Properties of a GetChampionResponse.
         * @memberof rpc
         * @interface IGetChampionResponse
         * @property {champion.IChampion|null} [champion] GetChampionResponse champion
         */

        /**
         * Constructs a new GetChampionResponse.
         * @memberof rpc
         * @classdesc Represents a GetChampionResponse.
         * @implements IGetChampionResponse
         * @constructor
         * @param {rpc.IGetChampionResponse=} [properties] Properties to set
         */
        function GetChampionResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetChampionResponse champion.
         * @member {champion.IChampion|null|undefined} champion
         * @memberof rpc.GetChampionResponse
         * @instance
         */
        GetChampionResponse.prototype.champion = null;

        /**
         * Creates a new GetChampionResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {rpc.IGetChampionResponse=} [properties] Properties to set
         * @returns {rpc.GetChampionResponse} GetChampionResponse instance
         */
        GetChampionResponse.create = function create(properties) {
            return new GetChampionResponse(properties);
        };

        /**
         * Encodes the specified GetChampionResponse message. Does not implicitly {@link rpc.GetChampionResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {rpc.IGetChampionResponse} message GetChampionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChampionResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.champion != null && message.hasOwnProperty("champion"))
                $root.champion.Champion.encode(message.champion, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetChampionResponse message, length delimited. Does not implicitly {@link rpc.GetChampionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {rpc.IGetChampionResponse} message GetChampionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChampionResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetChampionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetChampionResponse} GetChampionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChampionResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetChampionResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.champion = $root.champion.Champion.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetChampionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetChampionResponse} GetChampionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChampionResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetChampionResponse message.
         * @function verify
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetChampionResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.champion != null && message.hasOwnProperty("champion")) {
                var error = $root.champion.Champion.verify(message.champion);
                if (error)
                    return "champion." + error;
            }
            return null;
        };

        /**
         * Creates a GetChampionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetChampionResponse} GetChampionResponse
         */
        GetChampionResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetChampionResponse)
                return object;
            var message = new $root.rpc.GetChampionResponse();
            if (object.champion != null) {
                if (typeof object.champion !== "object")
                    throw TypeError(".rpc.GetChampionResponse.champion: object expected");
                message.champion = $root.champion.Champion.fromObject(object.champion);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetChampionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetChampionResponse
         * @static
         * @param {rpc.GetChampionResponse} message GetChampionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetChampionResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.champion = null;
            if (message.champion != null && message.hasOwnProperty("champion"))
                object.champion = $root.champion.Champion.toObject(message.champion, options);
            return object;
        };

        /**
         * Converts this GetChampionResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetChampionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetChampionResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetChampionResponse;
    })();

    rpc.ListChampionsResponse = (function() {

        /**
         * Properties of a ListChampionsResponse.
         * @memberof rpc
         * @interface IListChampionsResponse
         * @property {Array.<champion.IChampion>|null} [champions] ListChampionsResponse champions
         */

        /**
         * Constructs a new ListChampionsResponse.
         * @memberof rpc
         * @classdesc Represents a ListChampionsResponse.
         * @implements IListChampionsResponse
         * @constructor
         * @param {rpc.IListChampionsResponse=} [properties] Properties to set
         */
        function ListChampionsResponse(properties) {
            this.champions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListChampionsResponse champions.
         * @member {Array.<champion.IChampion>} champions
         * @memberof rpc.ListChampionsResponse
         * @instance
         */
        ListChampionsResponse.prototype.champions = $util.emptyArray;

        /**
         * Creates a new ListChampionsResponse instance using the specified properties.
         * @function create
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {rpc.IListChampionsResponse=} [properties] Properties to set
         * @returns {rpc.ListChampionsResponse} ListChampionsResponse instance
         */
        ListChampionsResponse.create = function create(properties) {
            return new ListChampionsResponse(properties);
        };

        /**
         * Encodes the specified ListChampionsResponse message. Does not implicitly {@link rpc.ListChampionsResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {rpc.IListChampionsResponse} message ListChampionsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChampionsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.champions != null && message.champions.length)
                for (var i = 0; i < message.champions.length; ++i)
                    $root.champion.Champion.encode(message.champions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListChampionsResponse message, length delimited. Does not implicitly {@link rpc.ListChampionsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {rpc.IListChampionsResponse} message ListChampionsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChampionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListChampionsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.ListChampionsResponse} ListChampionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChampionsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.ListChampionsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.champions && message.champions.length))
                        message.champions = [];
                    message.champions.push($root.champion.Champion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListChampionsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.ListChampionsResponse} ListChampionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChampionsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListChampionsResponse message.
         * @function verify
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListChampionsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.champions != null && message.hasOwnProperty("champions")) {
                if (!Array.isArray(message.champions))
                    return "champions: array expected";
                for (var i = 0; i < message.champions.length; ++i) {
                    var error = $root.champion.Champion.verify(message.champions[i]);
                    if (error)
                        return "champions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListChampionsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.ListChampionsResponse} ListChampionsResponse
         */
        ListChampionsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.ListChampionsResponse)
                return object;
            var message = new $root.rpc.ListChampionsResponse();
            if (object.champions) {
                if (!Array.isArray(object.champions))
                    throw TypeError(".rpc.ListChampionsResponse.champions: array expected");
                message.champions = [];
                for (var i = 0; i < object.champions.length; ++i) {
                    if (typeof object.champions[i] !== "object")
                        throw TypeError(".rpc.ListChampionsResponse.champions: object expected");
                    message.champions[i] = $root.champion.Champion.fromObject(object.champions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListChampionsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.ListChampionsResponse
         * @static
         * @param {rpc.ListChampionsResponse} message ListChampionsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListChampionsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.champions = [];
            if (message.champions && message.champions.length) {
                object.champions = [];
                for (var j = 0; j < message.champions.length; ++j)
                    object.champions[j] = $root.champion.Champion.toObject(message.champions[j], options);
            }
            return object;
        };

        /**
         * Converts this ListChampionsResponse to JSON.
         * @function toJSON
         * @memberof rpc.ListChampionsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListChampionsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListChampionsResponse;
    })();

    rpc.GetBattleFieldResponse = (function() {

        /**
         * Properties of a GetBattleFieldResponse.
         * @memberof rpc
         * @interface IGetBattleFieldResponse
         * @property {battle_field.IBattleField|null} [battle_field] GetBattleFieldResponse battle_field
         */

        /**
         * Constructs a new GetBattleFieldResponse.
         * @memberof rpc
         * @classdesc Represents a GetBattleFieldResponse.
         * @implements IGetBattleFieldResponse
         * @constructor
         * @param {rpc.IGetBattleFieldResponse=} [properties] Properties to set
         */
        function GetBattleFieldResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBattleFieldResponse battle_field.
         * @member {battle_field.IBattleField|null|undefined} battle_field
         * @memberof rpc.GetBattleFieldResponse
         * @instance
         */
        GetBattleFieldResponse.prototype.battle_field = null;

        /**
         * Creates a new GetBattleFieldResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {rpc.IGetBattleFieldResponse=} [properties] Properties to set
         * @returns {rpc.GetBattleFieldResponse} GetBattleFieldResponse instance
         */
        GetBattleFieldResponse.create = function create(properties) {
            return new GetBattleFieldResponse(properties);
        };

        /**
         * Encodes the specified GetBattleFieldResponse message. Does not implicitly {@link rpc.GetBattleFieldResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {rpc.IGetBattleFieldResponse} message GetBattleFieldResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBattleFieldResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battle_field != null && message.hasOwnProperty("battle_field"))
                $root.battle_field.BattleField.encode(message.battle_field, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetBattleFieldResponse message, length delimited. Does not implicitly {@link rpc.GetBattleFieldResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {rpc.IGetBattleFieldResponse} message GetBattleFieldResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBattleFieldResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBattleFieldResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetBattleFieldResponse} GetBattleFieldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBattleFieldResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetBattleFieldResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battle_field = $root.battle_field.BattleField.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBattleFieldResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetBattleFieldResponse} GetBattleFieldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBattleFieldResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBattleFieldResponse message.
         * @function verify
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBattleFieldResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battle_field != null && message.hasOwnProperty("battle_field")) {
                var error = $root.battle_field.BattleField.verify(message.battle_field);
                if (error)
                    return "battle_field." + error;
            }
            return null;
        };

        /**
         * Creates a GetBattleFieldResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetBattleFieldResponse} GetBattleFieldResponse
         */
        GetBattleFieldResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetBattleFieldResponse)
                return object;
            var message = new $root.rpc.GetBattleFieldResponse();
            if (object.battle_field != null) {
                if (typeof object.battle_field !== "object")
                    throw TypeError(".rpc.GetBattleFieldResponse.battle_field: object expected");
                message.battle_field = $root.battle_field.BattleField.fromObject(object.battle_field);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetBattleFieldResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetBattleFieldResponse
         * @static
         * @param {rpc.GetBattleFieldResponse} message GetBattleFieldResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBattleFieldResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.battle_field = null;
            if (message.battle_field != null && message.hasOwnProperty("battle_field"))
                object.battle_field = $root.battle_field.BattleField.toObject(message.battle_field, options);
            return object;
        };

        /**
         * Converts this GetBattleFieldResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetBattleFieldResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBattleFieldResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetBattleFieldResponse;
    })();

    return rpc;
})();

module.exports = $root;
