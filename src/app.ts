type digit = 0|1|2|3|4|5|6|7|8|9

const increment = (number: Array<digit>): Array<digit> => {
    const result = new Array<digit>();
    let carry = 1;
    
    // School addition process
    for (let i = number.length - 1; i >= 0; i--) {
        const val = number[i] + carry;

        result[i] = (val % 10) as digit;
        carry = Math.trunc(val / 10);
    }

    // increment is one, new digit is one
    if (carry == 1) {
        result.unshift(1);
    }

    return result;
}

/* ********** */
/* SOME TESTS  */
/* ********** */
console.log(increment([1,2,3,4])); // should be [1,2,3,5]
console.log(increment([1,2,3,9])); // should be [1,2,4,0]
console.log(increment([2,9,9]));   // should be [3,0,0]
console.log(increment([9,9]));     // should be [1,0,0]
console.log(increment([9,9,1]));   // should be [9,9,2]
console.log(increment([0,0,9]));   // should be [0,1,0] 
