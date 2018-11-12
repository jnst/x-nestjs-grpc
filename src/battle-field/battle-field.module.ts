import {Module} from '@nestjs/common';
import {BattleFieldService} from './battle-field.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BattleFieldService],
  exports: [BattleFieldService],
})
export class BattleFieldModule {}
