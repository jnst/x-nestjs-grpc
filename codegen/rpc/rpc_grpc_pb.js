// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rpc_rpc_pb = require('../rpc/rpc_pb.js');
var rpc_battle_field_pb = require('../rpc/battle_field_pb.js');
var rpc_champion_pb = require('../rpc/champion_pb.js');

function serialize_battle_field_BattleField(arg) {
  if (!(arg instanceof rpc_battle_field_pb.BattleField)) {
    throw new Error('Expected argument of type battle_field.BattleField');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_battle_field_BattleField(buffer_arg) {
  return rpc_battle_field_pb.BattleField.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_champion_Champion(arg) {
  if (!(arg instanceof rpc_champion_pb.Champion)) {
    throw new Error('Expected argument of type champion.Champion');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_champion_Champion(buffer_arg) {
  return rpc_champion_pb.Champion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_Empty(arg) {
  if (!(arg instanceof rpc_rpc_pb.Empty)) {
    throw new Error('Expected argument of type rpc.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_Empty(buffer_arg) {
  return rpc_rpc_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_GetChampionRequest(arg) {
  if (!(arg instanceof rpc_rpc_pb.GetChampionRequest)) {
    throw new Error('Expected argument of type rpc.GetChampionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_GetChampionRequest(buffer_arg) {
  return rpc_rpc_pb.GetChampionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ListChampionsResponse(arg) {
  if (!(arg instanceof rpc_rpc_pb.ListChampionsResponse)) {
    throw new Error('Expected argument of type rpc.ListChampionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_ListChampionsResponse(buffer_arg) {
  return rpc_rpc_pb.ListChampionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RpcService = exports.RpcService = {
  getChampion: {
    path: '/rpc.Rpc/GetChampion',
    requestStream: false,
    responseStream: false,
    requestType: rpc_rpc_pb.GetChampionRequest,
    responseType: rpc_champion_pb.Champion,
    requestSerialize: serialize_rpc_GetChampionRequest,
    requestDeserialize: deserialize_rpc_GetChampionRequest,
    responseSerialize: serialize_champion_Champion,
    responseDeserialize: deserialize_champion_Champion,
  },
  listChampions: {
    path: '/rpc.Rpc/ListChampions',
    requestStream: false,
    responseStream: false,
    requestType: rpc_rpc_pb.Empty,
    responseType: rpc_rpc_pb.ListChampionsResponse,
    requestSerialize: serialize_rpc_Empty,
    requestDeserialize: deserialize_rpc_Empty,
    responseSerialize: serialize_rpc_ListChampionsResponse,
    responseDeserialize: deserialize_rpc_ListChampionsResponse,
  },
  getBattleField: {
    path: '/rpc.Rpc/GetBattleField',
    requestStream: false,
    responseStream: false,
    requestType: rpc_rpc_pb.Empty,
    responseType: rpc_battle_field_pb.BattleField,
    requestSerialize: serialize_rpc_Empty,
    requestDeserialize: deserialize_rpc_Empty,
    responseSerialize: serialize_battle_field_BattleField,
    responseDeserialize: deserialize_battle_field_BattleField,
  },
};

exports.RpcClient = grpc.makeGenericClientConstructor(RpcService);
