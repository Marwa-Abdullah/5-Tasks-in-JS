  
//   mediunm
  
  1// is a number pronic


function checkPronic(num) {
    for (let i = 0; i * (i + 1) <= num; i++) {
        if (i * (i + 1) === num){ return "Pronic";}
    }
    return "Not Pronic";
}
// console.log(checkPronic(8)); 
// // console.log(checkPronic(10)); 


// // ---------------------------------------------------------
 2//  carTimer

function carTimer(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    return ( `${hours}`+":"+`${minutes < 10 ? '0' + minutes : minutes}`);
};

// console.log(carTimer(135)); 
// console.log(carTimer(140)); 

// // -----------------------------------------------------

// 3 is prime

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function checkPrimeArray(arr) {
    for (let num of arr) {
        if (!isPrime(num)) return "Not Primes";
    }
    return "Primes";
}
// console.log(checkPrimeArray([2, 3, 5, 7])); 



// -------------------------------------------------------
// 4 longest Consecutive Zeros

function longestConsecutiveZeros(str) {
    let maxZeroes = 0;
    let currentZeroes = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            currentZeroes++;
            if (currentZeroes > maxZeroes) {
                maxZeroes = currentZeroes;
            }
        } else {
            currentZeroes = 0;
        }
    }
    return maxZeroes;
}
// console.log(longestConsecutiveZeros("101010011")); 


// ----------------------------------------------------------------------
// 5 repeat vowels
function repeatVowels(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o'||  char === 'u' ||
            char === 'A' || char === 'E'|| char === 'I' ||   char === 'O'|| char === 'U') {
            result += char + char;
        } else {
            result += char;
        }
    }
    return result;
}
// console.log(repeatVowels("hello Aaron")); 

// -------------------------------------------------------------------
