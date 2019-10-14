const Enemies = () => {
  const scope = this;
  scope.EnemyList = [
    {
      Name: 'orco',
      HP: 50,
      Atk: 10,
      Def: 5
    },
    {
      Name: 'trasgos',
      HP: 25,
      Atk: 7,
      Def: 3
    },
    {
      Name: 'goblin',
      HP: 20,
      Atk: 5,
      Def: 1
    }
  ];

  scope.CreateEnemies = (Name) => {
    let beast = scope.EnemyList.find((e) => e.Name == Name);
 
    return beast;
  };


  return scope;
}


module.exports = Enemies();
