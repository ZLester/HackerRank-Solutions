function processData(input) {
    input = input.split('\n');
    
    const N = parseInt(input[0]);
    const strings = input.slice(1, N + 1);
    const queries = input.slice(N + 2);

    const occurrences = strings.reduce(getOccurrences, {});

    queries.forEach(logOccurrences(occurrences));
}

function getOccurrences (acc, string) {
    if (!acc[string]) {
        acc[string] = 0;
    }
    acc[string]++;
    return acc; 
}

function logOccurrences (occurrences) {
    return (query) => {
        console.log(occurrences[query] || 0);
    };
}
