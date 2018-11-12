// package: rpc
// file: rpc/rpc.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as rpc_battle_field_pb from "../rpc/battle_field_pb";
import * as rpc_champion_pb from "../rpc/champion_pb";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class GetChampionRequest extends jspb.Message { 
    getChampionId(): number;
    setChampionId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChampionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetChampionRequest): GetChampionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChampionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChampionRequest;
    static deserializeBinaryFromReader(message: GetChampionRequest, reader: jspb.BinaryReader): GetChampionRequest;
}

export namespace GetChampionRequest {
    export type AsObject = {
        championId: number,
    }
}

export class GetChampionResponse extends jspb.Message { 

    hasChampion(): boolean;
    clearChampion(): void;
    getChampion(): rpc_champion_pb.Champion | undefined;
    setChampion(value?: rpc_champion_pb.Champion): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChampionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetChampionResponse): GetChampionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChampionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChampionResponse;
    static deserializeBinaryFromReader(message: GetChampionResponse, reader: jspb.BinaryReader): GetChampionResponse;
}

export namespace GetChampionResponse {
    export type AsObject = {
        champion?: rpc_champion_pb.Champion.AsObject,
    }
}

export class ListChampionsResponse extends jspb.Message { 
    clearChampionsList(): void;
    getChampionsList(): Array<rpc_champion_pb.Champion>;
    setChampionsList(value: Array<rpc_champion_pb.Champion>): void;
    addChampions(value?: rpc_champion_pb.Champion, index?: number): rpc_champion_pb.Champion;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListChampionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListChampionsResponse): ListChampionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListChampionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListChampionsResponse;
    static deserializeBinaryFromReader(message: ListChampionsResponse, reader: jspb.BinaryReader): ListChampionsResponse;
}

export namespace ListChampionsResponse {
    export type AsObject = {
        championsList: Array<rpc_champion_pb.Champion.AsObject>,
    }
}
