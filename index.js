let AutoScroll = [];

function removeArrayDuplicates(arr) {

    if (!Array.isArray(arr)) {
        arr = [];
    }

    let theSet = new Set(arr);

    let AutoScroll = [...theSet];

    return AutoScroll;
}
