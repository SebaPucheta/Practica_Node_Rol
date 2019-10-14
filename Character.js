const heroes = () => {
  const scope = this;
  scope.classes = [
    {
      class: 'knight',
      HP: 50,
      Atk: 10,
      Def: 5
    },
    {
      class: 'wizard',
      HP: 20,
      Atk: 5,
      Def: 1
    },
    {
      class: 'archer',
      HP: 25,
      Atk: 7,
      Def: 3
    },
  ];

  scope.CreateHero= (Name, clase) => {
    let player = scope.classes.find((e) => e.class == clase);
    player.Name = Name;
    return player;
  };

  
 return scope;
}


module.exports = heroes();
