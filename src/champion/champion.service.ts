import {Injectable} from '@nestjs/common';
import {champion} from '../../codegen/rpc';
import IChampion = champion.IChampion;
import ChampionType = champion.Champion.ChampionType;

const CHAMPIONS: IChampion[] = [
  {champion_id: 1, name: 'Akali', type: ChampionType.ASSASSIN, message: 'If you look dangerous, you better be dangerous.'},
  {champion_id: 2, name: 'Kennen', type: ChampionType.MAGE, message: 'The Heart of the Tempest beats eternal...and those beaten remember eternally.'},
  {champion_id: 3, name: 'Tryndamere', type: ChampionType.FIGHTER, message: 'Rage is my weapon.'},
];

@Injectable()
export class ChampionService {
  getChampion(championId: number): IChampion {
    return CHAMPIONS.find(c => c.champion_id === championId);
  }

  listChampions(): IChampion[] {
    return CHAMPIONS;
  }
}
