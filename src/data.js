// @flow
type General = {
  name: string,
  class: string,
  race: string,
  align: string,
  deity: string,
  size: string,
  space: string,
  reach: string,
};

type Physical = {
  gender: string,
  height: string,
  weight: string,
  age: string,
  hair: string,
  eyes: string,
  skin: string,
  misc: string,
};

type Points = {
  hp: number,
  gp: number,
  level: number,
  xp: number,
  notes: string,
};

type Abilities = {
  str: number,
  dex: number,
  con: number,
  int: number,
  wis: number,
  cha: number,
};

type Attack = {
  melee: number,
  range: number,
  bab: number,
  cmb: number,
  conc: number,
  init: number,
};

type Defense = {
  ac: number,
  touch: number,
  cmd: number,
  fort: number,
  ref: number,
  will: number,
};

type Equipment = {
  'weapon 1': string,
  'weapon 2': string,
  'armor 1': string,
  'armor 2': string,
  'misc 1': string,
  'misc 2': string,
};

type Character = {
  general: General,
  physical: Physical,
  points: Points,
  abilities: Abilities,
  attack: Attack,
  defense: Defense,
  equipment: Equipment,
};

const defaultCharacterShape: Character = {
  general: {
    name: '',
    class: '',
    race: '',
    align: '',
    deity: '',
    size: '',
    space: '',
    reach: '',
  },
  physical: {
    gender: '',
    height: '',
    weight: '',
    age: '',
    hair: '',
    eyes: '',
    skin: '',
    misc: '',
  },
  points: {
    hp: '',
    gp: '',
    level: '',
    xp: '',
    notes: '',
  },
  abilities: {
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: '',
  },
  attack: {
    melee: '',
    range: '',
    bab: '',
    cmb: '',
    conc: '',
    init: '',
  },
  defense: {
    ac: '',
    touch: '',
    cmd: '',
    fort: '',
    ref: '',
    will: '',
  },
  equipment: {
    'weapon 1': '',
    'weapon 2': '',
    'armor 1': '',
    'armor 2': '',
    'misc 1': '',
    'misc 2': '',
  },
};

module.exports = {
  defaultCharacterShape,
  heimdall: {
    general: {
      name: 'Heimdall',
      class: 'Paladin',
      race: 'Human',
      align: 'Lawful Good',
      deity: 'Sarenrae',
      size: 'Medium',
      space: '5ft (1x1)',
      reach: '5ft (1)',
    },
    physical: {
      gender: 'Male',
      height: '6ft 10in',
      weight: '260lbs',
      age: '27',
      hair: 'Brown',
      eyes: 'Brown',
      skin: 'Black',
      misc: '',
    },
    points: {
      hp: '',
      gp: '',
      level: '',
      xp: '',
      notes: '',
    },
    abilities: {
      str: '',
      dex: '',
      con: '',
      int: '',
      wis: '',
      cha: '',
    },
    attack: {
      melee: '',
      range: '',
      bab: '',
      cmb: '',
      conc: '',
      init: '',
    },
    defense: {
      ac: '',
      touch: '',
      cmd: '',
      fort: '',
      ref: '',
      will: '',
    },
    equipment: {
      'weapon 1': '',
      'weapon 2': '',
      'armor 1': '',
      'armor 2': '',
      'misc 1': '',
      'misc 2': '',
    },
  },
};
