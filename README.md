# x-nestjs-grpc

## Environment

```bash
$ node -v
v10.13.0

$ yarn -v
1.12.3
```

## Setup

```bash
$ yarn install
```

## Run

```bash
$ yarn start
```

## Connectivity Test

Using [gRPCurl](https://github.com/fullstorydev/grpcurl)

```bash
$ go get github.com/fullstorydev/grpcurl
$ go install github.com/fullstorydev/grpcurl/cmd/grpcurl
```

### `rpc.RPC/GetChampion`

```bash
$ grpcurl -d '{"champion_id": 1}' -plaintext -proto ./rpc/rpc.proto -import-path ./protos 127.0.0.1:5000 rpc.Rpc/GetChampion
{
  "champion": {
    "championId": 1,
    "type": "ASSASSIN",
    "name": "Akali",
    "message": "If you look dangerous, you better be dangerous."
  }
}
```

### `rpc.RPC/ListChampions`

```bash
grpcurl -plaintext -proto ./rpc/rpc.proto -import-path ./protos 127.0.0.1:5000 rpc.Rpc/ListChampions
{
  "champions": [
    {
      "championId": 1,
      "type": "ASSASSIN",
      "name": "Akali",
      "message": "If you look dangerous, you better be dangerous."
    },
    {
      "championId": 2,
      "type": "MAGE",
      "name": "Kennen",
      "message": "The Heart of the Tempest beats eternal...and those beaten remember eternally."
    },
    {
      "championId": 3,
      "type": "FIGHTER",
      "name": "Tryndamere",
      "message": "Rage is my weapon."
    }
  ]
}
```

### `rpc.RPC/GetBattleField`

```bash
$ grpcurl -plaintext -proto ./rpc/rpc.proto -import-path ./protos 127.0.0.1:5000 rpc.Rpc/GetBattleField
{
  "battleField": {
    "battleFieldId": 2,
    "name": "The Twisted Treeline"
  }
}
```
