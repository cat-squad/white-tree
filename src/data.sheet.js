// @flow
type General = {
  name: string,
  race: string,
  class: string,
  level: string,
  alignment: string,
  height: string,
  weight: string,
  hair: string,
  eyes: string,
  gender: string,
  age: number,
};

type Ability = {
  score: number,
  modifier: number,
  tempAdjustment: number,
  tempModifier: number,
};

type Abilities = {
  strength: Ability,
  dexterity: Ability,
  constitution: Ability,
  intelligence: Ability,
  wisdom: Ability,
  charisma: Ability,
};

type Health = {
  maxHP: number,
  currentHP: number,
  Wounds: string,
  nonlethalDamange: string,
};

type Initiative = {
  dexModifier: number,
  miscModifier: number,
};

type ArmorClass = {
  base: 10,
  armorBonus: number,
  shieldBonus: number,
  dexModifier: number,
  sizeModifier: number,
  naturalArmor: number,
  deflectionModifier: number,
  miscModifier: number,
};

type Throw = {
  baseSave: number,
  // abilityModifier: number, // this number comes from the abilities
  magicModifier: number,
  sizeModifier: number,
  naturalArmor: number,
  deflectionModifier: number,
  miscModifier: number,
};

type SavingThrows = {
  fortitude: Throw,
  reflex: Throw,
  will: Throw,
};

type Attack = {
  bab: number, // base attack bonus
  cmb: number, // combat maneuver bonus
  cmd: number, // combat maneuver defense
};

type Weapon = {
  name: string,
  type: string,
  range: string,
  ammunition: string,
  damage: string,
  critical: string,
  attackBonus: string,
};

type Weapons = Array<Weapon>;

type Skill = {
  abilityModifier: number,
  ranks: number,
  miscModifier: number,
  bonus: number,
};

type Skills = {
  acrobatics: Skill,
  appraise: Skill,
  bluff: Skill,
  climb: Skill,
  craft: Skill,
  diplomacy: Skill,
  disbaleDevice: Skill,
  disguise: Skill,
  escapeArtist: Skill,
  fly: Skill,
  handleAnimal: Skill,
  heal: Skill,
  intimidate: Skill,
  knowledgeArcana: Skill,
  knowledgeDungeoneering: Skill,
  knowledgeEngineering: Skill,
  knowledgeGeography: Skill,
  knowledgeHistory: Skill,
  knowledgeLocal: Skill,
  knowledgeNature: Skill,
  knowledgeNobility: Skill,
  knowledgePlanes: Skill,
  knowledgeReligion: Skill,
  linguistics: Skill,
  perception: Skill,
  perform: Skill,
  profession: Skill,
  ride: Skill,
  senseMotive: Skill,
  spellcraft: Skill,
  stealth: Skill,
  survival: Skill,
  swim: Skill,
  useMagicDevice: Skill,
};

//  SECOND PAGE OF PATHFINDER CHARACTER SHEET
type Armor = {
  name: string,
  bonus: number,
  type: string,
  checkPenalty: number,
  spellFailure: number,
  weight: number,
  properties: string,
};

type ArmorList = Array<Armor>;

type Item = {
  name: string,
  description: string,
  quantity: number,
  weight: number,
};

type Inventory = {
  items: Array<Item>,
  gold: number,
};

type SpecialAbility = {
  name: string,
  description: string,
};

type Feat = {
  ...SpecialAbility,
};

type Feats = Array<Feat>;

type SpecialAbilities = Array<SpecialAbility>;

type Spell = {
  name: string,
  description: string,
  level: number,
  spellsPerDay: number,
};

type Spells = Array<Spell>;

//  ADDITIONAL USEFUL CONTENT NOT ON THE PATHFINDER CHARACTER SHEET
type Backstory = string;
type Notes = string;

// EXPORT DEFAULT CHARACTER SHAPE
export type CharacterInfo = {
  general: General,
  abilities: Abilities,
  health: Health,
  initiative: Initiative,
  armorClass: ArmorClass,
  savingThrows: SavingThrows,
  attack: Attack,
  weapons: Weapons,
  skills: Skills,
  armorList: ArmorList,
  inventory: Inventory,
  feats: Feats,
  specialAbilities: SpecialAbilities,
  spells: Spells,
  backstory: Backstory,
  notes: Notes,
};

const emptyAbility = {
  score: 0,
  modifier: 0,
  tempAdjustment: 0,
  tempModifier: 0,
};

const emptyThrow = {
  baseSave: 0,
  magicModifier: 0,
  sizeModifier: 0,
  naturalArmor: 0,
  deflectionModifier: 0,
  miscModifier: 0,
};

const emptyWeapon = {
  name: '',
  type: '',
  range: '',
  ammunition: '',
  damage: '',
  critical: '',
  attackBonus: '',
};

const emptySkill = {
  abilityModifier: 0,
  ranks: 0,
  miscModifier: 0,
  bonus: 0,
};

const emptySkills = {
  acrobatics: emptySkill,
  appraise: emptySkill,
  bluff: emptySkill,
  climb: emptySkill,
  craft: emptySkill,
  diplomacy: emptySkill,
  disbaleDevice: emptySkill,
  disguise: emptySkill,
  escapeArtist: emptySkill,
  fly: emptySkill,
  handleAnimal: emptySkill,
  heal: emptySkill,
  intimidate: emptySkill,
  knowledgeArcana: emptySkill,
  knowledgeDungeoneering: emptySkill,
  knowledgeEngineering: emptySkill,
  knowledgeGeography: emptySkill,
  knowledgeHistory: emptySkill,
  knowledgeLocal: emptySkill,
  knowledgeNature: emptySkill,
  knowledgeNobility: emptySkill,
  knowledgePlanes: emptySkill,
  knowledgeReligion: emptySkill,
  linguistics: emptySkill,
  perception: emptySkill,
  perform: emptySkill,
  profession: emptySkill,
  ride: emptySkill,
  senseMotive: emptySkill,
  spellcraft: emptySkill,
  stealth: emptySkill,
  survival: emptySkill,
  swim: emptySkill,
  useMagicDevice: emptySkill,
};

const emptyArmor = {
  name: '',
  bonus: 0,
  type: '',
  checkPenalty: 0,
  spellFailure: 0,
  weight: 0,
  properties: '',
};

const emptyItem = {
  name: '',
  description: '',
  quantity: 0,
  weight: 0,
};

const emptySpecialAbility = {
  name: '',
  description: '',
};

const emptySpell = {
  name: '',
  description: '',
  level: 0,
  spellsPerDay: 0,
};

export const defaultCharacter = {
  general: {
    name: '',
    race: '',
    class: '',
    level: '',
    alignment: '',
    height: '',
    weight: '',
    hair: '',
    eyes: '',
    gender: '',
    age: 25,
  },
  abilities: {
    strength: emptyAbility,
    dexterity: emptyAbility,
    constitution: emptyAbility,
    intelligence: emptyAbility,
    wisdom: emptyAbility,
    charisma: emptyAbility,
  },
  health: {
    maxHP: 0,
    currentHP: 0,
    Wounds: '',
    nonlethalDamange: '',
  },
  initiative: {
    dexModifier: 0,
    miscModifier: 0,
  },
  armorClass: {
    base: 10,
    armorBonus: 0,
    shieldBonus: 0,
    dexModifier: 0,
    sizeModifier: 0,
    naturalArmor: 0,
    deflectionModifier: 0,
    miscModifier: 0,
  },
  savingThrows: {
    fortitude: emptyThrow,
    reflex: emptyThrow,
    will: emptyThrow,
  },
  attack: {
    bab: 0,
    cmb: 0,
    cmd: 0,
  },
  weapons: [emptyWeapon, emptyWeapon, emptyWeapon],
  skills: emptySkills,
  armorList: [emptyArmor, emptyArmor, emptyArmor],
  inventory: {
    items: [emptyItem, emptyItem, emptyItem],
    gold: 10500,
  },
  feats: [emptySpecialAbility],
  specialAbilities: [emptySpecialAbility],
  spells: [emptySpell, emptySpell, emptySpell],
  backstory: '',
  notes: '',
};
