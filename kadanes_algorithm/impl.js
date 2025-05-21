// https://en.wikipedia.org/wiki/Maximum_subarray_problem
// https://chatgpt.com/share/682d47d3-edec-800a-8ed8-1104f8e7242c

//Given an array (which may include negative numbers), find the contiguous subarray with the largest possible sum.
//At each element, ask: “Am I better off starting fresh at this number, or continuing the previous subarray?”
function kadane(array) {
    let max_sum = Number.NEGATIVE_INFINITY;
    let current_sum = 0;

    array.forEach(element => {
        current_sum = element + current_sum;
        if (current_sum > max_sum) {
            max_sum = current_sum;
        }
        if (current_sum < 0) {
            current_sum = 0
        }
    });

    return max_sum
}


const array_test = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(kadane(array_test))

//How do we know for sure that this produces the sum of the most heavy possible subarray? 

//How to return subarray too?
// You’d keep:
// start: where the current subarray starts
// temp_start: where a new subarray might start (when you reset current_sum)
// end: where the best subarray ends (updated when you update max_sum)