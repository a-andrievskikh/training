let bird = {
  name: 'Donald',
  numLegs: 2,
};

let boat = {
  name: 'Warrior',
  type: 'race-boat',
};

// Only change code below this line
const glideMixin = function (obj) {
  obj.glide = function () {
    console.log('I am glide!');
  };
};
glideMixin(bird);
glideMixin(boat);
