function oneThroughTwenty(){
  let oneThroughTwentyResultado = [];
  for (i = 1; i <= 20; i++){
    oneThroughTwentyResultado.push(i)
  }
  return oneThroughTwentyResultado
}

console.log(oneThroughTwenty())

function evenThroughTwenty(){
  let evenThroughTwentyResultado = [];
  for (i = 1; i <= 20; i++){
    if(i % 2 == 0){
      evenThroughTwentyResultado.push(i)
    }
  }
  return evenThroughTwentyResultado
}

console.log(evenThroughTwenty())

function oddThroughTwenty(){
  let oddThroughTwentyResultado = [];
  for (i = 1; i <= 20; i++){
    if(i % 2 != 0){
      oddThroughTwentyResultado.push(i)
    }
  }
  return oddThroughTwentyResultado
}

console.log(oddThroughTwenty())

function multiplesOfFive(){
  let multiplesOfFiveResultado = [];
  for (i = 1; i <= 100; i++){
    if(i % 5 == 0){
      multiplesOfFiveResultado.push(i)
    }
  }
  return multiplesOfFiveResultado
}

console.log(multiplesOfFive())

function squareNumbers(){
  let squareNumbersResultado = [];
    for (i = 1; i <= 100; i++){
        if (i ** 2 == i * i){
          let j = i * i
            if (j <= 100){
              squareNumbersResultado.push(j)
            }
        }
    }
  return squareNumbersResultado
}

console.log(squareNumbers())

// Inverso

function countingBackwards(){
  let countingBackwardsResultado = []
  for (i = 20; i >= 1; i--){
  countingBackwardsResultado.push(i)
  }
  return countingBackwardsResultado
}

console.log(countingBackwards())

function evenNumbersBackwards(){
  let evenNumbersBackwardsResultado = []
  for (i = 20; i >= 1; i--){
  if(i % 2 == 0){
    evenNumbersBackwardsResultado.push(i)
  }
}
  return evenNumbersBackwardsResultado
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards(){
  let oddNumbersBackwardsResultado = []
  for (i = 20; i >= 1; i--){
    if (i % 2 != 0){
      oddNumbersBackwardsResultado.push(i)
    }
  }
  return oddNumbersBackwardsResultado
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards(){
  let multiplesOfFiveBackwardsResultado = []
  for (i = 100; i >= 1; i--){
    if (i % 5 == 0){
      multiplesOfFiveBackwardsResultado.push(i)
    }
  }
  return multiplesOfFiveBackwardsResultado
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards(){
  let squareNumbersBackwardsResultado = []
  for (i = 100; i >= 1; i--)
  if (i ** 2 == i * i){
    let j = i * i
    if (j >= 1 && j <= 100){
      squareNumbersBackwardsResultado.push(j)
    }
  }
  return squareNumbersBackwardsResultado
}

console.log(squareNumbersBackwards())
