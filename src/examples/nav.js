import Minimal from './Minimal.js';
import minimalCode from 'raw-loader!./Minimal.js';
import PinnedColumns from './PinnedColumns.js';
import pinnedColumnsCode from 'raw-loader!./PinnedColumns.js';
import GridDemo from './GridDemo.js';
import gridDemoCode from 'raw-loader!./GridDemo.js';

export default [
    {
        href: 'minimal',
        title: 'Minimal',
        component: Minimal,
        code: minimalCode
    },
    {
        href: 'pinned-columns',
        title: 'Pinned columns',
        component: PinnedColumns,
        code: pinnedColumnsCode
    },
    {
        href: 'complex',
        title: 'Complex demo',
        component: GridDemo,
        code: gridDemoCode
    }
];
