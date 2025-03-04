// * Membuat Object Constructor
class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} moves to another position!`);
  }
}

// * Membuat method untuk object
function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character.name} attacks with a weapon!`);
    },
  };
}

function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character.name} defends with a shield!`);
    },
  };
}

function canCastSpell(character) {
  return {
    castSpell: () => {
      console.log(`${character.name} casts a spell!`);
    },
  };
}
// * END

function createMonster(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character)); // ? Method statis untuk menyalin semua properti dari satu atau lebih object ke objek target
}

function createGuardian(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canDefend(character)); // ? Method statis untuk menyalin semua properti dari satu atau lebih object ke objek target
}

function createWizard(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canCastSpell(character)); // ? Method statis untuk menyalin semua properti dari satu atau lebih object ke objek target
}

function createWarrior(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character), canDefend(character)); // ? Method statis untuk menyalin semua properti dari satu atau lebih object ke objek target
}

const monster = createMonster("Monster");
monster.canMove();
monster.attack();

const guardian = createGuardian("Guardian");
guardian.canMove();
guardian.defend();

const wizard = createWizard("Wizard");
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior("Warrior");
warrior.canMove();
warrior.attack();
warrior.defend();
