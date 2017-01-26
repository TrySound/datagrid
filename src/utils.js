export function computeLayout({ viewportHeight, rowHeight, rowsCount, scrollTop }) {
    const sectorSize = Math.ceil(viewportHeight / rowHeight);
    const topRow = Math.floor(scrollTop / rowHeight);
    const topSector = Math.floor(topRow / sectorSize);
    return {
        start: Math.max(0, (topSector - 1) * sectorSize),
        end: Math.min(rowsCount, (topSector + 2) * sectorSize)
    };
}
