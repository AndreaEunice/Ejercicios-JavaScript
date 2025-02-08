/*

Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/
const numbersArray = [1, 2, 3, 4]

const sumaYMultipica = (numbers) => {
    const suma = numbers.reduce( (acc, curr) => acc + curr, 0 );
    const multiplica = numbers.reduce( (acc, curr) => acc * curr );

    console.log(`The sum is ${suma}.`);
    console.log(`The product is ${multiplica}.`);

};

sumaYMultipica( numbersArray );




