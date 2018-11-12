import {Test, TestingModule} from '@nestjs/testing';
import {BattleFieldService} from './battle-field.service';

describe('BattleFieldService', () => {
  let service: BattleFieldService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BattleFieldService],
    }).compile();
    service = module.get<BattleFieldService>(BattleFieldService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
