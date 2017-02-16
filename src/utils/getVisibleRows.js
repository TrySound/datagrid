export default ({ scrollTop, viewportHeight, rowHeight, rowsCount }) => {
    const clusterSize = Math.ceil(viewportHeight / rowHeight);
    const topCluster = Math.floor(Math.floor(scrollTop / rowHeight) / clusterSize);
    const end = Math.min(rowsCount, (topCluster + 2) * clusterSize);
    // count of visible rows is always the same then focus never be lost
    const start = Math.max(0, end - clusterSize * 2);
    return [start, end];
};
