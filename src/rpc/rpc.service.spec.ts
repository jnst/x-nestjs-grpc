import {Test, TestingModule} from '@nestjs/testing';
import {RpcService} from './rpc.service';

describe('RpcService', () => {
  let service: RpcService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RpcService],
    }).compile();
    service = module.get<RpcService>(RpcService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
