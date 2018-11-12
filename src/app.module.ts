import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BattleFieldModule} from './battle-field/battle-field.module';
import {ChampionModule} from './champion/champion.module';
import {RpcModule} from './rpc/rpc.module';

@Module({
  imports: [ChampionModule, BattleFieldModule, RpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
