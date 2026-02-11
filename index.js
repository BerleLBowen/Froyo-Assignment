const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(",");

function countFlavors(flavors) {
  const flavorCounts = {};


  for (let i = 0; i < flavors.length; i++) {
    const currentFlavor = flavors[i].trim(); 

    if (flavorCounts[currentFlavor]) {
      flavorCounts[currentFlavor]++;
    } else {
      flavorCounts[currentFlavor] = 1;
    }
  }

  return flavorCounts;
}

const finalOrder = countFlavors(stringArray);
console.table(finalOrder);