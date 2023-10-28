var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length-1)
    return nums
};

// left and right inclusive
function mergeSort(nums, left, right) {
    if (left >= right)
        return;
    var mid = parseInt((left + right) / 2)
    mergeSort(nums, left, mid);
    mergeSort(nums, mid+1, right);
    merge(nums, left, mid, right);
}

function merge(nums, left, mid, right) {
    var leftArray = new Array(mid-left+1);
    var rightArray = new Array(right-mid);
    
    // fill into left and right arrays
    for (var i = 0; i < leftArray.length; i++) {
        leftArray[i] = nums[left+i]
    }
    for (var i = 0; i < rightArray.length; i++) {
        rightArray[i] = nums[mid+1+i]
    }
    
    // merge
    var i = 0;
    var j = 0;
    var k = left;
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] > rightArray[j]) {
            nums[k] = leftArray[i];
            i++;
        }
        else {
            nums[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while (i < leftArray.length) {
        nums[k] = leftArray[i];
        i++;
        k++;
    }
    while (j < rightArray.length) {
        nums[k] = rightArray[j];
        j++;
        k++;
    }
}


// Test sorting using merge sort
console.log(
    sortArray([5,1,1,4,2,0,0])
)