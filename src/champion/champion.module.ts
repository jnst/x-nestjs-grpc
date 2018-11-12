import {Module} from '@nestjs/common';
import {ChampionService} from './champion.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ChampionService],
  exports: [ChampionService],
})
export class ChampionModule {}
