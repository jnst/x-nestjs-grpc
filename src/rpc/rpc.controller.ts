import {Controller} from '@nestjs/common';
import {GrpcMethod} from '@nestjs/microservices';
import {rpc} from '../../codegen/rpc';
import {BattleFieldService} from '../battle-field/battle-field.service';
import {ChampionService} from '../champion/champion.service';
import GetBattleFieldResponse = rpc.GetBattleFieldResponse;
import GetChampionRequest = rpc.GetChampionRequest;
import GetChampionResponse = rpc.GetChampionResponse;
import IEmpty = rpc.IEmpty;
import ListChampionsResponse = rpc.ListChampionsResponse;

@Controller()
export class RpcController {
  constructor(private readonly championService: ChampionService, private readonly battleFieldService: BattleFieldService) {}

  @GrpcMethod('Rpc', 'GetChampion')
  async getChampion(req: GetChampionRequest): Promise<GetChampionResponse> {
    const obj = this.championService.getChampion(req.champion_id);
    return GetChampionResponse.create({champion: obj});
  }

  @GrpcMethod('Rpc', 'ListChampions')
  async listChampions(req: IEmpty): Promise<ListChampionsResponse> {
    const champions = this.championService.listChampions();
    return ListChampionsResponse.create({champions});
  }

  @GrpcMethod('Rpc', 'GetBattleField')
  async getBattleField(req: IEmpty): Promise<rpc.GetBattleFieldResponse> {
    const battleField = this.battleFieldService.getBattleField();
    return GetBattleFieldResponse.create({battle_field: battleField});
  }
}
