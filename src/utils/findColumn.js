export default (columns, x) => {
    if (x < 0 || columns.length === 0) {
        return [-1, x];
    }
    let sum = 0;
    return columns.reduce((acc, { width }, index) => {
        const left = sum;
        sum += width;
        if (left <= x && x < sum) {
            return [index, x - left];
        }
        if (sum === x) {
            return [index, width];
        }
        if (sum < x) {
            return [index + 1, x - sum];
        }
        return acc;
    }, null);
};
