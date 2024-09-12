/*
Assignment operators (операторы присваивания)
Эти операторы одновременно выполняют операцию и присваивают результат обратно переменной.
Вместо x = x + y можно использовать x += y.
Вместо x = x - y можно использовать x -= y.
Вместо x = x / y можно использовать x /= y.
Вместо x = x % y можно использовать x %= y.
*/
function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
x -= y;
return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));

// Использование инкремента и декремента
function increaseBalanceByOne(x) {
  x++;
  return x;
};

function decreaseBalanceByOne(x) {
  x--;
  return x;
};
console.log(increaseBalanceByOne(3000));
console.log(decreaseBalanceByOne(3000)); 