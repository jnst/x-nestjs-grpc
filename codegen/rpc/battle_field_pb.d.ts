// package: battle_field
// file: rpc/battle_field.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class BattleField extends jspb.Message { 
    getBattleFieldId(): number;
    setBattleFieldId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BattleField.AsObject;
    static toObject(includeInstance: boolean, msg: BattleField): BattleField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BattleField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BattleField;
    static deserializeBinaryFromReader(message: BattleField, reader: jspb.BinaryReader): BattleField;
}

export namespace BattleField {
    export type AsObject = {
        battleFieldId: number,
        name: string,
        description: string,
    }
}
