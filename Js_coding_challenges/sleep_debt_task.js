// purpose of project:
// 1. practice functions
// 2. if statements or switch statements

const getSleepHours = (day) => {
  if(day === 'monday'){
    return 10;
  }else if(day === 'tuesday'){
    return 10
  }else if(day === 'wednesday'){
    return 10
  }else if(day === 'thursday'){
    return 7
  }else if(day === 'friday'){
    return 8
  }else if(day === 'saturday'){
    return 5
  }else if(day === 'sunday'){
    return 10
  }else{
    return 'Error!'
  };
};

 console.log(getSleepHours('monday'))

const getActualSleepHours = () =>{
  let weeklySleep = getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday')

  return weeklySleep;
};

const getIdealSleepHours = () => {
  let idealHours = 7
  return idealHours  * 8
};
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours){
  console.log('You got the perfect amount of sleep')
}else if (actualSleepHours > idealSleepHours){
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours'   + ' more sleep than needed. Do not sleep more than you need so you wont be lazy')
}else if (actualSleepHours < idealSleepHours){
  console.log('You got ' + (idealSleepHours -  actualSleepHours ) + ' hours'  + ' less sleep than needed get some more rest')
}else{
  console.log('Error!')
};
};

calculateSleepDebt()
