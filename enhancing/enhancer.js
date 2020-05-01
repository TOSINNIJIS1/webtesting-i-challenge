module.exports = {
  add,
  succeed,
  fail,
  repair,
  // get,
};

function add(a,b) {
  return a+b
}

function succeed(item) {
  const {enhancement} = item;
  const increment = enhancement + 1;

  if (item.enhancement < 20) {
    return {
      ...item, enhancement: increment
    };
  } else 
  if (item.enhancement === 20) {
    return {
      ...item, enhancement: item.enhancement
    };
  } else {
    return 'durability not changed'
  }
}

function fail(item) {
  const {durability} = item;
  const decrement = durability - 5;
  if(item.enhancement < 15) {
    return {
      ...item, durability: decrement
    };
  } else if(item.enhancement >= 0 && item.enhancement <=17) {
    if (item.enhancement <= 15) {
      const decrement = durability - 10;
      return {
        ...item, durability: decrement
      }  
    } else {
      const durability = item.durability - 10
      const decrement = item.enhancement - 1 
      return {
        ...item, durability: durability, enhancement: decrement
      }
    }
  }
}



function repair(item) {
  if(item.enhancement >= 0 && item.enhancement <= 20 && item.durability >= 0 && item.durability <= 100) {
    return {...item, durability: 100};
  } 
}

// function get(item) {
//   return { ...item };
// }
