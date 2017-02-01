const empty = () => Object.create(null);

const invert = obj => Object.keys(obj).reduce((acc, key) => (acc[obj[key]] = key, acc), empty());

const createFreeKeyGenerator = (indexes) => {
    let lastPointer = 0;
    return () => {
        while (true) {
            const key = `key_${lastPointer}`;
            if (key in indexes) {
                lastPointer += 1;
            } else {
                lastPointer += 1;
                return key;
            }
        }
    };
}

const getRecoveredKeys = (lastKeys, start, end) => {
    const keys = empty();
    for (let i = start; i < end; i += 1) {
        if (i in lastKeys) {
            keys[i] = lastKeys[i];
        }
    }
    return keys;
};

const generateKeys = (lastKeys, start, end) => {
    const keys = empty();
    const generateKey = createFreeKeyGenerator(invert(lastKeys));
    for (let i = start; i < end; i += 1) {
        if (!(i in lastKeys)) {
            keys[i] = generateKey();
        }
    }
    return keys;
};

export const getKeysByIndex = (lastKeys = empty(), start, end) => {
    const recovered = getRecoveredKeys(lastKeys, start, end);
    const generated = generateKeys(recovered, start, end);
    return Object.assign(empty(), recovered, generated);
};

export const getVisibleRows = ({ scrollTop, viewportHeight, rowHeight, rowsCount }) => {
    const clusterSize = Math.ceil(viewportHeight / rowHeight);
    const topCluster = Math.floor(Math.floor(scrollTop / rowHeight) / clusterSize);
    const end = Math.min(rowsCount, (topCluster + 2) * clusterSize);
    // count of visible rows is always the same then focus never be lost
    const start = Math.max(0, end - clusterSize * 2);
    return [
        start,
        end
    ];
};
