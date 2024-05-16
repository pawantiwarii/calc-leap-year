


const input = prompt("Enter your year to know the year leap or not.")
 

// if (input % 4 ===0){
//     console.log('this is a leap-year')
// }else(console.log('no'))


// function leapYear(year){
//     // let inp = input % 4 === 0 ? 'Yes this is a leap year.':
//     // input % 100 ===0 ? 'Yes this is a leap year':
//     // input % 400 ===0 ? 'Yes this is leap year': 'No this is not a leap year.'
//     return (input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? 'Yes, this is a leap year.' : 'No, this is not a leap year.';
// }

// let result = leapYear(input)
// console.log(result);




 function leapYear(year){
        let inp = input % 4 === 0 ? 'Yes this is a leap year.':
        input % 100 ===0 ? 'Yes this is a leap year':
        input % 400 ===0 ? 'Yes this is leap year': 'No this is not a leap year.'
        return inp     //input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? 'Yes, this is a leap year.' : 'No, this is not a leap year.';
}
    
    let result = leapYear(input)
    console.log(result);