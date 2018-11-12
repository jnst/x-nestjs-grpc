import {Test, TestingModule} from '@nestjs/testing';
import {ChampionService} from './champion.service';

describe('ChampionService', () => {
  let service: ChampionService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionService],
    }).compile();
    service = module.get<ChampionService>(ChampionService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
