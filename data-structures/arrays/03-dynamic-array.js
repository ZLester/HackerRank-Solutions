function processData(input) {
    input = input.split('\n');
    var [n, size] = input[0].split(' ').map(Number);
    var queries = input.slice(1).map((query) => query.split(' ').map(Number));

    var lastAnswer = 0;
    var seqs = [...new Array(n)].map((k) => []);

    queries.forEach((query) => {
        var [type, x, y] = query;
        var i = getSeqIndex(x, lastAnswer, n);
        var seq = seqs[i];

        if (type === 1) {
            seq.push(y);
        } else {
            lastAnswer = getLastAnswer(y, seq);
            console.log(lastAnswer);
        }
    });
}

function getSeqIndex(x, lastAnswer, n) {
    return (x ^ lastAnswer) % n;
}

function getLastAnswer(y, seq) {
    return seq[y % seq.length];
}
