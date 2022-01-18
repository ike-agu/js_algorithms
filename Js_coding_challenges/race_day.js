
//                    PSEUDO CODE day_race
//  Race numbers are assigned randomly
// Create a variable that indicates whether a runner registered early or not.
// Set it equal to a Boolean value.
// Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 to their raceNumber if this is true.
// check age and registration time to determine race time.
// For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am.
// Include their raceNumber.
// if they dont register early, Late adults run at 11:00 am”
// Youth registrants run at 12:30 pm (regardless of registration)
// otherwise if you are 18, go to the front desk.

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let ageRunner = 18;

if(ageRunner > 18 && registeredEarly === false){
   raceNumber += 1000
}

if(ageRunner > 18 && registeredEarly === false){
  console.log(`number ${raceNumber},Your race time will be at 9:30 am` )
}else if(ageRunner > 18 && !registeredEarly === false) {
  console.log(`number ${raceNumber},Your race time will be at 11:00 am`)
}else if(ageRunner < 18 ) {
  console.log(`number ${raceNumber},Your race time will be at 12:30 pm`)
}else{
  console.log('Please see the resgisteration desk because you are not or younger than 18.')
};
