const twoSum = (items, target) => {
    // Using the two pointer pattern to iterate array data structure
    // This is a brute force approach and has a time complexity of O(n**2) because of the nested loop 
    let result = []
    
    for(let i = 0; i < items.length; i++) {
        for(let j = i + 1;  j< items.length; j++) {
            if(items[i] + items[j] === target) {
                result.push(i, j)
                return result;
            }
        }
    }
    return [];
};


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([-1, -2, -3, -4, -5], -8))
console.log(twoSum([0, 4, 3, 0], 0))