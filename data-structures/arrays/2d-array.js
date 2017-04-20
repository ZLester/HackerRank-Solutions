function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    let max;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            const points = getHourglassPoints(i, j, arr);
            const sum = getSum(points);
            if (max === undefined || sum > max) {
                max = sum;
            }
        }
    }
    console.log(max);
}

function getHourglassPoints (x, y, arr) {
    const points = [];
    points.push(arr[y][x]);
    points.push(arr[y][x+1]);
    points.push(arr[y][x+2]);
    points.push(arr[y+1][x+1]);
    points.push(arr[y+2][x]);
    points.push(arr[y+2][x+1]);
    points.push(arr[y+2][x+2]);
    return points;
}

function getSum (points) {
    return points.reduce((total, current) => {
        return total + current;               
    }, 0);
}
