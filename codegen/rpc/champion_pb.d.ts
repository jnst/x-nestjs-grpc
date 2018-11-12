// package: champion
// file: rpc/champion.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Champion extends jspb.Message { 
    getChampionId(): number;
    setChampionId(value: number): void;

    getType(): Champion.ChampionType;
    setType(value: Champion.ChampionType): void;

    getName(): string;
    setName(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Champion.AsObject;
    static toObject(includeInstance: boolean, msg: Champion): Champion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Champion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Champion;
    static deserializeBinaryFromReader(message: Champion, reader: jspb.BinaryReader): Champion;
}

export namespace Champion {
    export type AsObject = {
        championId: number,
        type: Champion.ChampionType,
        name: string,
        message: string,
    }

    export enum ChampionType {
    UNKNOWN = 0,
    MARKSMAN = 1,
    MAGE = 2,
    ASSASSIN = 3,
    TANK = 4,
    FIGHTER = 5,
    SUPPORT = 6,
    }

}
