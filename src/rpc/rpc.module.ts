import {Module} from '@nestjs/common';
import {BattleFieldModule} from '../battle-field/battle-field.module';
import {ChampionModule} from '../champion/champion.module';
import {RpcService} from './rpc.service';
import {RpcController} from './rpc.controller';

@Module({
  imports: [ChampionModule, BattleFieldModule],
  providers: [RpcService],
  controllers: [RpcController],
  exports: [],
})
export class RpcModule {}
