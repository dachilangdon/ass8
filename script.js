document.write ("Hola Mundo")

// N1
    var myArray = [18, 77, 45, 73, 104];
    for (var i = 0; i < myArray.length; i++) {
    console.log ("Element in index " + i + ": " + myArray[i]);
  }

//N2
    var salary = prompt("Enter your salary (Monthly):");
    salary = parseFloat(salary);
    if (!isNaN(salary)) {
        if (salary > 2200 ) {
            console.log("Bingo");
          } else {
            console.log("Deelaparake Upross");
          }
        } else {
          console.log("Use numbers only.");
        }

    //N3 

    var myArray = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];
    for (var i = 0; i < myArray.length; i++) {
     if (myArray[i] % 2 !== 0) {
              console.log("Odd number at index " + i + ": " + myArray[i]);
            }
          }