let char = new Knight('Hulk');
let monster = new LittlleMonster();


const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster'),
)

stage.start();