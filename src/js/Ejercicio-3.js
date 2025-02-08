/*

Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/


const calcularSumYProd = (numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const prod = numbers.reduce((acc, curr) => acc * curr, 1);

    console.log(`La suma es ${sum}.`);
    console.log(`El producto ${prod}.`);
}

const numbersArray = [1, 2, 3, 4];
calcularSumYProd(numbersArray);



