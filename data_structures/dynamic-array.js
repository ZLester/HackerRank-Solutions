function processData(input) {
    input = input.split('\n');
    var [n, size] = input[0].split(' ').map(Number);
    var queries = input
        .slice(1)
        .map((query) => query.split(' ').map(Number));

    var lastAns = 0;
    var seqs = new Array(n)
        .fill(0)
        .map((z) => []);

    queries.forEach((query) => {
        var [type, x, y] = query;
        var i = getSeqIndex(x, lastAns, n);
        var seq = seqs[i];
        if (type === 1) {
            seq.push(y);
        } else {
            lastAns = getLastAns(y, seq);
            console.log(lastAns);
        }
    });
}

function getSeqIndex(x, lastAns, n) {
    return (x ^ lastAns) % n;
}

function getLastAns(y, seq) {
    return seq[y % seq.length];
}
