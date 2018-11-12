import * as $protobuf from "protobufjs";
/** Namespace battle_field. */
export namespace battle_field {

    /** Properties of a BattleField. */
    interface IBattleField {

        /** BattleField battle_field_id */
        battle_field_id?: (number|null);

        /** BattleField name */
        name?: (string|null);

        /** BattleField description */
        description?: (string|null);
    }

    /** Represents a BattleField. */
    class BattleField implements IBattleField {

        /**
         * Constructs a new BattleField.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle_field.IBattleField);

        /** BattleField battle_field_id. */
        public battle_field_id: number;

        /** BattleField name. */
        public name: string;

        /** BattleField description. */
        public description: string;

        /**
         * Creates a new BattleField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleField instance
         */
        public static create(properties?: battle_field.IBattleField): battle_field.BattleField;

        /**
         * Encodes the specified BattleField message. Does not implicitly {@link battle_field.BattleField.verify|verify} messages.
         * @param message BattleField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle_field.IBattleField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleField message, length delimited. Does not implicitly {@link battle_field.BattleField.verify|verify} messages.
         * @param message BattleField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle_field.IBattleField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_field.BattleField;

        /**
         * Decodes a BattleField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_field.BattleField;

        /**
         * Verifies a BattleField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleField
         */
        public static fromObject(object: { [k: string]: any }): battle_field.BattleField;

        /**
         * Creates a plain object from a BattleField message. Also converts values to other types if specified.
         * @param message BattleField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle_field.BattleField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace champion. */
export namespace champion {

    /** Properties of a Champion. */
    interface IChampion {

        /** Champion champion_id */
        champion_id?: (number|null);

        /** Champion type */
        type?: (champion.Champion.ChampionType|null);

        /** Champion name */
        name?: (string|null);

        /** Champion message */
        message?: (string|null);
    }

    /** Represents a Champion. */
    class Champion implements IChampion {

        /**
         * Constructs a new Champion.
         * @param [properties] Properties to set
         */
        constructor(properties?: champion.IChampion);

        /** Champion champion_id. */
        public champion_id: number;

        /** Champion type. */
        public type: champion.Champion.ChampionType;

        /** Champion name. */
        public name: string;

        /** Champion message. */
        public message: string;

        /**
         * Creates a new Champion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Champion instance
         */
        public static create(properties?: champion.IChampion): champion.Champion;

        /**
         * Encodes the specified Champion message. Does not implicitly {@link champion.Champion.verify|verify} messages.
         * @param message Champion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: champion.IChampion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Champion message, length delimited. Does not implicitly {@link champion.Champion.verify|verify} messages.
         * @param message Champion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: champion.IChampion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Champion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Champion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): champion.Champion;

        /**
         * Decodes a Champion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Champion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): champion.Champion;

        /**
         * Verifies a Champion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Champion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Champion
         */
        public static fromObject(object: { [k: string]: any }): champion.Champion;

        /**
         * Creates a plain object from a Champion message. Also converts values to other types if specified.
         * @param message Champion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: champion.Champion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Champion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Champion {

        /** ChampionType enum. */
        enum ChampionType {
            UNKNOWN = 0,
            MARKSMAN = 1,
            MAGE = 2,
            ASSASSIN = 3,
            TANK = 4,
            FIGHTER = 5,
            SUPPORT = 6
        }
    }
}

/** Namespace rpc. */
export namespace rpc {

    /** Represents a Rpc */
    class Rpc extends $protobuf.rpc.Service {

        /**
         * Constructs a new Rpc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Rpc service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Rpc;

        /**
         * Calls GetChampion.
         * @param request GetChampionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetChampionResponse
         */
        public getChampion(request: rpc.IGetChampionRequest, callback: rpc.Rpc.GetChampionCallback): void;

        /**
         * Calls GetChampion.
         * @param request GetChampionRequest message or plain object
         * @returns Promise
         */
        public getChampion(request: rpc.IGetChampionRequest): Promise<rpc.GetChampionResponse>;

        /**
         * Calls ListChampions.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and ListChampionsResponse
         */
        public listChampions(request: rpc.IEmpty, callback: rpc.Rpc.ListChampionsCallback): void;

        /**
         * Calls ListChampions.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public listChampions(request: rpc.IEmpty): Promise<rpc.ListChampionsResponse>;

        /**
         * Calls GetBattleField.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and GetBattleFieldResponse
         */
        public getBattleField(request: rpc.IEmpty, callback: rpc.Rpc.GetBattleFieldCallback): void;

        /**
         * Calls GetBattleField.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getBattleField(request: rpc.IEmpty): Promise<rpc.GetBattleFieldResponse>;
    }

    namespace Rpc {

        /**
         * Callback as used by {@link rpc.Rpc#getChampion}.
         * @param error Error, if any
         * @param [response] GetChampionResponse
         */
        type GetChampionCallback = (error: (Error|null), response?: rpc.GetChampionResponse) => void;

        /**
         * Callback as used by {@link rpc.Rpc#listChampions}.
         * @param error Error, if any
         * @param [response] ListChampionsResponse
         */
        type ListChampionsCallback = (error: (Error|null), response?: rpc.ListChampionsResponse) => void;

        /**
         * Callback as used by {@link rpc.Rpc#getBattleField}.
         * @param error Error, if any
         * @param [response] GetBattleFieldResponse
         */
        type GetBattleFieldCallback = (error: (Error|null), response?: rpc.GetBattleFieldResponse) => void;
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: rpc.IEmpty): rpc.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): rpc.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetChampionRequest. */
    interface IGetChampionRequest {

        /** GetChampionRequest champion_id */
        champion_id?: (number|null);
    }

    /** Represents a GetChampionRequest. */
    class GetChampionRequest implements IGetChampionRequest {

        /**
         * Constructs a new GetChampionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IGetChampionRequest);

        /** GetChampionRequest champion_id. */
        public champion_id: number;

        /**
         * Creates a new GetChampionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChampionRequest instance
         */
        public static create(properties?: rpc.IGetChampionRequest): rpc.GetChampionRequest;

        /**
         * Encodes the specified GetChampionRequest message. Does not implicitly {@link rpc.GetChampionRequest.verify|verify} messages.
         * @param message GetChampionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IGetChampionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetChampionRequest message, length delimited. Does not implicitly {@link rpc.GetChampionRequest.verify|verify} messages.
         * @param message GetChampionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IGetChampionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChampionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChampionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.GetChampionRequest;

        /**
         * Decodes a GetChampionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChampionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.GetChampionRequest;

        /**
         * Verifies a GetChampionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetChampionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChampionRequest
         */
        public static fromObject(object: { [k: string]: any }): rpc.GetChampionRequest;

        /**
         * Creates a plain object from a GetChampionRequest message. Also converts values to other types if specified.
         * @param message GetChampionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.GetChampionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetChampionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetChampionResponse. */
    interface IGetChampionResponse {

        /** GetChampionResponse champion */
        champion?: (champion.IChampion|null);
    }

    /** Represents a GetChampionResponse. */
    class GetChampionResponse implements IGetChampionResponse {

        /**
         * Constructs a new GetChampionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IGetChampionResponse);

        /** GetChampionResponse champion. */
        public champion?: (champion.IChampion|null);

        /**
         * Creates a new GetChampionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChampionResponse instance
         */
        public static create(properties?: rpc.IGetChampionResponse): rpc.GetChampionResponse;

        /**
         * Encodes the specified GetChampionResponse message. Does not implicitly {@link rpc.GetChampionResponse.verify|verify} messages.
         * @param message GetChampionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IGetChampionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetChampionResponse message, length delimited. Does not implicitly {@link rpc.GetChampionResponse.verify|verify} messages.
         * @param message GetChampionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IGetChampionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChampionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChampionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.GetChampionResponse;

        /**
         * Decodes a GetChampionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChampionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.GetChampionResponse;

        /**
         * Verifies a GetChampionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetChampionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChampionResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.GetChampionResponse;

        /**
         * Creates a plain object from a GetChampionResponse message. Also converts values to other types if specified.
         * @param message GetChampionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.GetChampionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetChampionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListChampionsResponse. */
    interface IListChampionsResponse {

        /** ListChampionsResponse champions */
        champions?: (champion.IChampion[]|null);
    }

    /** Represents a ListChampionsResponse. */
    class ListChampionsResponse implements IListChampionsResponse {

        /**
         * Constructs a new ListChampionsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IListChampionsResponse);

        /** ListChampionsResponse champions. */
        public champions: champion.IChampion[];

        /**
         * Creates a new ListChampionsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListChampionsResponse instance
         */
        public static create(properties?: rpc.IListChampionsResponse): rpc.ListChampionsResponse;

        /**
         * Encodes the specified ListChampionsResponse message. Does not implicitly {@link rpc.ListChampionsResponse.verify|verify} messages.
         * @param message ListChampionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IListChampionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListChampionsResponse message, length delimited. Does not implicitly {@link rpc.ListChampionsResponse.verify|verify} messages.
         * @param message ListChampionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IListChampionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListChampionsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListChampionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.ListChampionsResponse;

        /**
         * Decodes a ListChampionsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListChampionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.ListChampionsResponse;

        /**
         * Verifies a ListChampionsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListChampionsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListChampionsResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.ListChampionsResponse;

        /**
         * Creates a plain object from a ListChampionsResponse message. Also converts values to other types if specified.
         * @param message ListChampionsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.ListChampionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListChampionsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetBattleFieldResponse. */
    interface IGetBattleFieldResponse {

        /** GetBattleFieldResponse battle_field */
        battle_field?: (battle_field.IBattleField|null);
    }

    /** Represents a GetBattleFieldResponse. */
    class GetBattleFieldResponse implements IGetBattleFieldResponse {

        /**
         * Constructs a new GetBattleFieldResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IGetBattleFieldResponse);

        /** GetBattleFieldResponse battle_field. */
        public battle_field?: (battle_field.IBattleField|null);

        /**
         * Creates a new GetBattleFieldResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetBattleFieldResponse instance
         */
        public static create(properties?: rpc.IGetBattleFieldResponse): rpc.GetBattleFieldResponse;

        /**
         * Encodes the specified GetBattleFieldResponse message. Does not implicitly {@link rpc.GetBattleFieldResponse.verify|verify} messages.
         * @param message GetBattleFieldResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IGetBattleFieldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetBattleFieldResponse message, length delimited. Does not implicitly {@link rpc.GetBattleFieldResponse.verify|verify} messages.
         * @param message GetBattleFieldResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IGetBattleFieldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetBattleFieldResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetBattleFieldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.GetBattleFieldResponse;

        /**
         * Decodes a GetBattleFieldResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetBattleFieldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.GetBattleFieldResponse;

        /**
         * Verifies a GetBattleFieldResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetBattleFieldResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetBattleFieldResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.GetBattleFieldResponse;

        /**
         * Creates a plain object from a GetBattleFieldResponse message. Also converts values to other types if specified.
         * @param message GetBattleFieldResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.GetBattleFieldResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetBattleFieldResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
