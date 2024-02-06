function sortedFrequency(arr, target) {
    function findFirstNum(target) {
        let left = 0;
        let right = arr.length -1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                result = mid;
                right = mid -1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
        return result
    }
    function findLastNum(target) {
        let left = 0;
        let right = arr.length -1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if(arr[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid -1;
            } else {
                right = mid -1;
            }
        }
        return result
    }
    const firstNum = findFirstNum(target);
    const lastNum = findLastNum(target);

    if (firstNum !== -1 && lastNum !== -1) {
        return lastNum - fistNum + 1;
    }
    return 0;
}

module.exports = sortedFrequency