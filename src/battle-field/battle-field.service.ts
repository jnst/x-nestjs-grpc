import {Injectable} from '@nestjs/common';
import {battle_field} from '../../codegen/rpc';
import IBattleField = battle_field.IBattleField;

const BATTLE_FIELDS: IBattleField[] = [
  {battle_field_id: 1, name: "Summoner's Lift", description: ''},
  {battle_field_id: 2, name: 'The Twisted Treeline', description: ''},
  {battle_field_id: 3, name: 'Howling Abyss', description: ''},
];

@Injectable()
export class BattleFieldService {
  getBattleField(): IBattleField {
    const index = Math.floor(Math.random() * Math.floor(BATTLE_FIELDS.length));
    return BATTLE_FIELDS[index];
  }
}
