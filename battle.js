const tirada = require('./dices');
const combate = () => {
  const scope = this;

  scope.attack = (atacante, defensor,iniciativaATK,iniciativaDEF) => {
    let atancanteATK = tirada.diceRoller() + atacante.Atk;
    let danioTotal = atancanteATK - defensor.Def;
    if (danioTotal < 0)
      danioTotal = 0;
    defensor.HP -= danioTotal;
    return (`La iniciativa de: ${atacante.Name} fue: ${iniciativaATK}
     la iniciativa de:${defensor.Name} fue:${iniciativaDEF} 
     el ataque de:${atacante.Name}
     fue de:${atancanteATK}    
     la vida de:${defensor.Name} es de:${defensor.HP} `);
  }
  return scope;
}

module.exports = combate();
