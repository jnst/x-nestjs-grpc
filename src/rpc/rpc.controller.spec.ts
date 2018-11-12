import {Test, TestingModule} from '@nestjs/testing';
import {RpcController} from './rpc.controller';

describe('Rpc Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RpcController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: RpcController = module.get<RpcController>(RpcController);
    expect(controller).toBeDefined();
  });
});
