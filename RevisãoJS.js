
//1
const upperName =  (name) => {
    return name.toUpperCase();
  };
  const myFunction =  (p1, p2) => {
    return p1 * p2;
  }
  const toCelsius =  (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
  }

 //2
  function handleMouseMove(event) {

      const [clientX, clientY] = event
        console.log(clientX, clientY)
    
  } 
  
  //3

  var {first} = { first: 'Jane'}

  //4
  var {name: n} =company

  var {shirts : [...colors], socks: [...colors]} = company

  //5
  const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

  const x = {...clothes}

  const y = {...clothes, 'colors':['yellow', 'purple']}

  //6  

  var numbers = [4, 9, 16, 25];
  var n = numbers.map(Math.sqrt)
  
  //7

  
  var numbers = [65, 44, 12, 4];

  var mult = numbers.map((n)=>{
      return n*10
  })

  //8

  var ages = [32, 33, 16, 40,18]

  var maior = ages.filter((age)=> {
    return age >=18
  })

  //9

  data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];


  let cao = data.filter((dog) => {
    return dog.type == 'dog';
  })

  //9.2
  let sum = data.filter((dog) => {
    return dog.type == 'dog';
  })
//9.3
  var idade = data.reduce((soma, pet) => {
    return soma + pet.age;
  }, 0);
 

//Parte B 
  //10
  var getShirtsColorsAmount =  (company) =>{
    colors = company.products.shirts.colors;

    var {colors} = company
    return colors.length;

    
  };

//11

const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};

const twoOthers ={
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
}
const noPants = ({ pants, ... x}) => x

const final = {
  ...noPants(clothes),
  ...twoOthers
}


//12

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrr = [arr2.shift(), arr.shift()]

const agrupa = [...arr,...arr2]




//13
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

var nomeCompleto = persons.map((pessoa)=>{
  return pessoa.firstname + " " + pessoa.lastname
})

    console.log(a)