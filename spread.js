let parents = [
"Fabian",
"Nicole"
];

let children = [
"Alexander"
];

let family = [
...parents,
...children
]

console.log(parents);
console.log(children);
console.log(family);

const car = {
  name: "porsche",
  seats: 2
}

const mycar = {
  name: "Range Rover",
  seats: 6
};

const dreamcar = [
{
  ...car
},
{
  ...mycar
},
{
  name: "Mercedes",
  seats: 5
}
];

console.log(dreamcar);
