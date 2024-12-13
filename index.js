//1. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(num1, num2) {
    return num1 - num2;
  }
  
  const result = calculateDifference(6, 3);
  console.log(result);



// 2. Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

  function isOdd(number) {
    return number % 2 !== 0;
  }
  

  console.log(isOdd(11));   // Output: true
  console.log(isOdd(8));  // Output: false



  //3. Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

  function findMin(numberes) {
    return Math.min(...numberes);
  }
  
    const numbersArray = [5, 2, 9, 1, 7];
    const smallestNumber = findMin(numbersArray);
    console.log(smallestNumber);



    //4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

    function filterEvenNumbers(numbers) {
        return numbers.filter(number => number % 2 === 0);
      }
      
    
      const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
      const evenNumbers = filterEvenNumbers(numberArray);
      console.log(evenNumbers); 



      //5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.


      function sortArrayDescending(numb) {
        return numb.sort((a, b) => b - a);
      }
      
      const numbArray = [5, 2, 9, 1, 7];
      const sortedArray = sortArrayDescending(numbArray);
      console.log(sortedArray); 


      //6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

      function lowercaseFirstLetter(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
      }
      
      const string1 = "Hello, World!";
      const string2 = "JavaScript is Fun";
      
      const result1 = lowercaseFirstLetter(string1);
      const result2 = lowercaseFirstLetter(string2);
      
      console.log(result1); 
      console.log(result2); 

      //7.  Write a function named findAverage that takes an array of numbers and returns the average of all elements.


      function findAverage(numbers) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        return average;
      }
      
      const numbrArray = [1, 2, 3, 4, 5];
      const averageValue = findAverage(numbrArray);
      console.log(averageValue); 


      //8. Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

      function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      }
      
      const year1 = 2024;
      const year2 = 2020;
      const year3 = 2100;
      
      console.log(isLeapYear(year1)); // Output: false
      console.log(isLeapYear(year2)); // Output: true
      console.log(isLeapYear(year3)); // Output: false