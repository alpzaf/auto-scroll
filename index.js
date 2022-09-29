let AutoScroll = [];

function removeArrayDuplicates(arr) {
    // Accepts an array from which the duplicates
    // will be removed

    if (!Array.isArray(arr)) {
        arr = [];
    }

    let theSet = new Set(arr);

    let AutoScroll = [...theSet];

    return AutoScroll;
}