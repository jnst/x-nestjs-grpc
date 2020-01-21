import {Test, TestingModule} from '@nestjs/testing';
import {RpcController} from './rpc.controller';
import {ChampionService} from '../champion/champion.service';
import {BattleFieldService} from '../battle-field/battle-field.service';

describe('Rpc Controller', () => {
  let controller: RpcController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RpcController],
      providers: [ChampionService, BattleFieldService],
    }).compile();
    controller = module.get<RpcController>(RpcController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
