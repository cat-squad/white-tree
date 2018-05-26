// @flow
export type General = {
  alignment: string,
  class: string,
  deity: string,
  homeland: string,
  level: string,
  name: string,
  race: string,
  size: string,
};

export type Appearance = {
  age: string,
  eyes: string,
  gender: string,
  hair: string,
  height: string,
  misc: string,
  weight: string,
};

export type Points = {
  hp: number | string,
  reach: number | string,
  space: number | string,
  speed: number | string,
  xp: number | string,
};

export type Ability = {
  score: number | string,
  modifier: number | string,
};

export type Abilities = {
  str: Ability,
  dex: Ability,
  con: Ability,
  int: Ability,
  wis: Ability,
  cha: Ability,
};

export type Attack = {
  bab: number | string,
  cmb: number | string,
  conc: number | string,
  init: number | string,
  melee: number | string,
  range: number | string,
};

export type Defense = {
  ac: number | string,
  cmd: number | string,
  fort: number | string,
  ref: number | string,
  touch: number | string,
  will: number | string,
};

export type Weapon = {
  ammunition: string,
  attack: number | string,
  crit: number | string,
  dmg: number | string,
  name: string,
  range: number | string,
  type: string,
};

export type Armor = {
  bonus: number | string,
  checkPenalty: number | string,
  name: string,
  properties: string,
  spellFailure: number | string,
  type: string,
  weight: number | string,
};

export type Item = {
  name: string,
  description: string,
  weight: number | string,
};

export type Equipment = {
  gold: number | string,
  armor: Array<Armor>,
  items: Array<Item>,
  weapons: Array<Weapon>,
};

export type Skill = {
  abilityName: string,
  abilityModifier: number | string,
  classSkill: boolean,
  miscModifier: number | string,
  name: string,
  ranks: number | string,
  totalBonus: number | string,
};

export type Skills = {
  acrobatics: Skill,
  // TODO
};

export type Character = {
  abilities: Abilities,
  appearance: Appearance,
  attack: Attack,
  defense: Defense,
  equipment: Equipment,
  general: General,
  points: Points,
  skills: Skills,
};

export const defaultCharacterShape: Character = {
  general: {
    alignment: '',
    class: '',
    deity: '',
    homeland: '',
    level: '',
    name: '',
    race: '',
    size: '',
  },

  appearance: {
    age: '',
    eyes: '',
    gender: '',
    hair: '',
    height: '',
    misc: '',
    weight: '',
  },

  points: {
    hp: '',
    reach: '',
    space: '',
    speed: '',
    xp: '',
  },

  abilities: {
    str: {
      score: '',
      modifier: '',
    },
    dex: {
      score: '',
      modifier: '',
    },
    con: {
      score: '',
      modifier: '',
    },
    int: {
      score: '',
      modifier: '',
    },
    wis: {
      score: '',
      modifier: '',
    },
    cha: {
      score: '',
      modifier: '',
    },
  },

  attack: {
    bab: '',
    cmb: '',
    conc: '',
    init: '',
    melee: '',
    range: '',
  },

  defense: {
    ac: '',
    cmd: '',
    fort: '',
    ref: '',
    touch: '',
    will: '',
  },

  equipment: {
    gold: '',
    armor: [
      {
        bonus: '',
        checkPenalty: '',
        name: '',
        properties: '',
        spellFailure: '',
        type: '',
        weight: '',
      },
    ],
    items: [
      {
        name: '',
        description: '',
        weight: '',
      },
    ],
    weapons: [
      {
        ammunition: '',
        attack: '',
        crit: '',
        dmg: '',
        name: '',
        range: '',
        type: '',
      },
    ],
  },

  skills: {
    acrobatics: {
      abilityName: '',
      abilityModifier: '',
      classSkill: false,
      miscModifier: '',
      name: '',
      ranks: '',
      totalBonus: '',
    },
    // TODO
  },
};
