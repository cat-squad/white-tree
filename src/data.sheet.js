// @Flow

//  FIRST PAGE OF PATHFINDER CHARACTER SHEET
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

type Abiltiy = {
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
  will: Throe,
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

type Weapons = {
  list: Array<Weapon>,
};

type Skill = {
  abilityModifier: number,
  ranks: number,
  miscModifier: number,
  skill: string,
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

type ArmorList = {
  list: Array<Armor>,
};

type Item = {
  name: string,
  description: string,
  quantity: number,
  weight: number,
};

type Inventory = {
  list: Array<Item>,
  gold: number,
};

type SpecialAbility = {
  name: string,
  description: stirng,
};

type Feat = {
  ...SpecialAbility,
};

type Feats = {
  list: Array<Feat>,
};

type SpecialAbilities = {
  list: Array<SpecialAbility>,
};

type Spell = {
  ...SpecialAbility,
  level: number,
  spellsPerDay: number,
};

//  ADDITIONAL USEFUL CONTENT NOT ON THE PATHFINDER CHARACTER SHEET
type Backstory = {
  backStory: string,
};

type Notes = {
  notes: string,
};
