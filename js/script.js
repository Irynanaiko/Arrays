// TASK 01

const productList = [
    {
      name: "banana",
      number: 5,
      bought: true,
    },
    {
      name: "apple",
      number: 10,
      bought: false,
    },
    {
      name: "mango",
      number: 2,
      bought: true,
    },
    {
      name: "lemon",
      number: 1,
      bought: false,
    },
  ];
  
  let whatBought = productList.sort((a, b) => {
    if (a.bought > b.bought) {
      return 1;
    }
    if (a.bought < b.bought) {
      return -1;
    }
    return 0;
  });
  
  console.log(whatBought);
  
  const newProdut = {
    name: "peach",
    number: 3,
    bought: false,
  };
  productList.push(newProdut);
  
  console.log(productList);
  
  let objIndex = productList.findIndex((obj) => obj.bought == false);
  productList[objIndex].bought = true;
  
  console.log(productList[objIndex]);
  
  // TASK 02
  
  const newProductsList = [
    {
      name: "apples",
      number: 6,
      price: 60,
    },
    {
      name: "lemon",
      number: 2,
      price: 30,
    },
    {
      name: "bananas",
      number: 5,
      price: 45,
    },
  ];
  
  for (let value of newProductsList) {
    console.log(value);
  }
  
  const showPrice = newProductsList.reduce((a, b) => a + b.price, 0);
  
  console.log(showPrice);
  
  const expensiveProduct = newProductsList.sort((a, b) => b.price - a.price, 0);
  console.log(expensiveProduct);
  
  // TASK 03

  let cssStyles = [
    {
      name: 'color', value: 'red'
    },{
      name: 'font-size', value: '24'
    },{
      name: 'text-alight', value: 'center'
    }
  ];

  const text = `I learn Java Script`;

  let styleText = (cssStyles, text) => {
    document.write('<p style = " ');
    for (let i in cssStyles) {
      document.write(cssStyles[i].name + ":" + cssStyles[i].value + ";");
    }
    document.write('">' + text + "</p>");
  };
  styleText(cssStyles, text);
  
  