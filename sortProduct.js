/*
Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.
For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:
Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23 -> Output-Pos 4
2 => 2 * 2 = 4 -> Output-Pos 1
3 => 3 * 3 = 9 -> Output-Pos 2
4 => 4 * 4 = 16 -> Output-Pos 3
5 => 5 * 5 = 25 -> Output-Pos 5
Output: 2, 3, 4, 23, 5
*/

function sortByProduct (values) {
    let products = []; // empty array 
    for (let i = 0; i < values.length; i++) {
        temp = {
            "value": values[i],
            "product": values[i] * (i + 1) // index starting at 1 instead of 0
        }; // creates an object for key-value pairs to refer to later

        products.push(temp); // pushing each object to the products array
    }

    products.sort((a, b) => {
        return a.product - b.product; // sorting by product
    });

    return products.map(a => a.value); // products array is no longer returning an object, but the value's value
}

console.log(sortByProduct([23, 2, 3, 4, 5])); // should print 2, 3, 4, 23, 5
