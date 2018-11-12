// package: rpc
// file: rpc/rpc.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as rpc_rpc_pb from "../rpc/rpc_pb";
import * as rpc_battle_field_pb from "../rpc/battle_field_pb";
import * as rpc_champion_pb from "../rpc/champion_pb";

interface IRpcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getChampion: IRpcService_IGetChampion;
    listChampions: IRpcService_IListChampions;
    getBattleField: IRpcService_IGetBattleField;
}

interface IRpcService_IGetChampion extends grpc.MethodDefinition<rpc_rpc_pb.GetChampionRequest, rpc_champion_pb.Champion> {
    path: string; // "/rpc.Rpc/GetChampion"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_rpc_pb.GetChampionRequest>;
    requestDeserialize: grpc.deserialize<rpc_rpc_pb.GetChampionRequest>;
    responseSerialize: grpc.serialize<rpc_champion_pb.Champion>;
    responseDeserialize: grpc.deserialize<rpc_champion_pb.Champion>;
}
interface IRpcService_IListChampions extends grpc.MethodDefinition<rpc_rpc_pb.Empty, rpc_rpc_pb.ListChampionsResponse> {
    path: string; // "/rpc.Rpc/ListChampions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_rpc_pb.Empty>;
    requestDeserialize: grpc.deserialize<rpc_rpc_pb.Empty>;
    responseSerialize: grpc.serialize<rpc_rpc_pb.ListChampionsResponse>;
    responseDeserialize: grpc.deserialize<rpc_rpc_pb.ListChampionsResponse>;
}
interface IRpcService_IGetBattleField extends grpc.MethodDefinition<rpc_rpc_pb.Empty, rpc_battle_field_pb.BattleField> {
    path: string; // "/rpc.Rpc/GetBattleField"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_rpc_pb.Empty>;
    requestDeserialize: grpc.deserialize<rpc_rpc_pb.Empty>;
    responseSerialize: grpc.serialize<rpc_battle_field_pb.BattleField>;
    responseDeserialize: grpc.deserialize<rpc_battle_field_pb.BattleField>;
}

export const RpcService: IRpcService;

export interface IRpcServer {
    getChampion: grpc.handleUnaryCall<rpc_rpc_pb.GetChampionRequest, rpc_champion_pb.Champion>;
    listChampions: grpc.handleUnaryCall<rpc_rpc_pb.Empty, rpc_rpc_pb.ListChampionsResponse>;
    getBattleField: grpc.handleUnaryCall<rpc_rpc_pb.Empty, rpc_battle_field_pb.BattleField>;
}

export interface IRpcClient {
    getChampion(request: rpc_rpc_pb.GetChampionRequest, callback: (error: Error | null, response: rpc_champion_pb.Champion) => void): grpc.ClientUnaryCall;
    getChampion(request: rpc_rpc_pb.GetChampionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_champion_pb.Champion) => void): grpc.ClientUnaryCall;
    getChampion(request: rpc_rpc_pb.GetChampionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_champion_pb.Champion) => void): grpc.ClientUnaryCall;
    listChampions(request: rpc_rpc_pb.Empty, callback: (error: Error | null, response: rpc_rpc_pb.ListChampionsResponse) => void): grpc.ClientUnaryCall;
    listChampions(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.ListChampionsResponse) => void): grpc.ClientUnaryCall;
    listChampions(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.ListChampionsResponse) => void): grpc.ClientUnaryCall;
    getBattleField(request: rpc_rpc_pb.Empty, callback: (error: Error | null, response: rpc_battle_field_pb.BattleField) => void): grpc.ClientUnaryCall;
    getBattleField(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_battle_field_pb.BattleField) => void): grpc.ClientUnaryCall;
    getBattleField(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_battle_field_pb.BattleField) => void): grpc.ClientUnaryCall;
}

export class RpcClient extends grpc.Client implements IRpcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getChampion(request: rpc_rpc_pb.GetChampionRequest, callback: (error: Error | null, response: rpc_champion_pb.Champion) => void): grpc.ClientUnaryCall;
    public getChampion(request: rpc_rpc_pb.GetChampionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_champion_pb.Champion) => void): grpc.ClientUnaryCall;
    public getChampion(request: rpc_rpc_pb.GetChampionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_champion_pb.Champion) => void): grpc.ClientUnaryCall;
    public listChampions(request: rpc_rpc_pb.Empty, callback: (error: Error | null, response: rpc_rpc_pb.ListChampionsResponse) => void): grpc.ClientUnaryCall;
    public listChampions(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.ListChampionsResponse) => void): grpc.ClientUnaryCall;
    public listChampions(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.ListChampionsResponse) => void): grpc.ClientUnaryCall;
    public getBattleField(request: rpc_rpc_pb.Empty, callback: (error: Error | null, response: rpc_battle_field_pb.BattleField) => void): grpc.ClientUnaryCall;
    public getBattleField(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_battle_field_pb.BattleField) => void): grpc.ClientUnaryCall;
    public getBattleField(request: rpc_rpc_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_battle_field_pb.BattleField) => void): grpc.ClientUnaryCall;
}
