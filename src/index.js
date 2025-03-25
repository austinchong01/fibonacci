
function fibs(n){
    const arr = [0, 1];
    for(let i = 0; i < n; i++){
        arr.push(arr[i] + arr[i + 1])
    }
    return arr;
}

function fibsRec(n){
    if (n <= 0)
        return [];
    if (n === 1)
        return [0];
    if (n === 2)
        return [0, 1];
    const currSeq = fibsRec(n - 1);
    currSeq.push(currSeq[currSeq.length - 1] + currSeq[currSeq.length - 2]);
    return currSeq;
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
//console.log(mergeSort([105, 79, 100, 110]));

