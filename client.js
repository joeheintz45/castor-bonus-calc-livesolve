const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let i = 0; i < employees.length; i++) {
  const employeeObj = employees[i];

  const newEmployeeObject = makeNewEmployeeBonusObject(employeeObj);
  console.log(newEmployeeObject);
}

function makeNewEmployeeBonusObject(kittyKat) {
  const bonusObject = {
    name: kittyKat.name,
    bonusPercentage: calcBonusPct(kittyKat),
    totalCompensation: 0,
    totalBonus: 0,
  };
  return bonusObject;
}

function calcBonusPct(employee) {
  let finalBonusPct = 0;
  const employeeReviewRating = employee.reviewRating;
  const employeeNumber = employee.employeeNumber;
  const salary = parseInt(employee.annualSalary);

  // checking ratings
  if (employeeReviewRating <= 2) {
    finalBonusPct = 0;
  } else if (employeeReviewRating === 3) {
    finalBonusPct = 4;
  } else if (employeeReviewRating === 4) {
    finalBonusPct = 6;
  } else if (employeeReviewRating === 5) {
    finalBonusPct = 10;
  }

  // checking employee number
  // finalBonusPct = checksEmployeeSeniority(employeeNumber, finalBonusPct);
  if (employeeNumber.length === 4) {
    finalBonusPct += 5;
    // console.log(finalBonusPct);
  }

  // check salary
  // finalBonusPct = checkEmployeeSalary(salary, finalBonusPct);
  if (salary > 65000) {
    finalBonusPct -= 1;
  }

  // PCT Range
  if (finalBonusPct > 13) {
    finalBonusPct = 13;
  } else if (finalBonusPct < 0) {
    finalBonusPct = 0;
  }

  return finalBonusPct;
}

function checksEmployeeSeniority(kittyKat, currentBonus) {
  // checking employee number
  if (kittyKat.length === 4) {
    return currentBonus + 5;
    // console.log(finalBonusPct);
  }

  return currentBonus;
}

function checkEmployeeSalary(annualSalary, currentBonus) {
  if (annualSalary > 65000) {
    return currentBonus - 1;
  }

  return currentBonus;
}

console.log(employees);
