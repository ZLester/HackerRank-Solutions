function processData(input) {
    input = input.split('\n').map((v) => v.split(' ').map(Number));

    const [n, d] = input[0];
    const arr = input[1];
    
    const index = d % n;
    const back = arr.slice(index);
    const front = arr.slice(0, index);

    console.log(back.concat(front).join(' '));
} 
