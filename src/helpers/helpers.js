export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < 8; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return { player: squares[a], lines: [a, b, c] };
    }
    return { player: null, lines: [] };
}

export function squareCoordinates(prev, current) {
    const squareIndex = getDiff(prev, current);
    return `(${getCol(squareIndex)}, ${getRow(squareIndex)})`
}

export function getDiff(prev, current) {
    for (let i = 0; i < 9; i++)
        if (prev[i] !== current[i])
            return i;
    return null;
}

export function getRow(squareIndex) {
    return Math.floor( squareIndex / 3) + 1;
}

export function getCol(squareIndex) {
    return Math.floor( squareIndex % 3 ) + 1;
}