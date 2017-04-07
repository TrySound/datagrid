import Minimal from './demos/Minimal.js';
import minimalCode from 'raw-loader!./demos/Minimal.js';
import PinnedColumns from './demos/PinnedColumns.js';
import pinnedColumnsCode from 'raw-loader!./demos/PinnedColumns.js';
import GridDemo from './demos/GridDemo.js';
import gridDemoCode from 'raw-loader!./demos/GridDemo.js';

export default [
    {
        href: '/minimal',
        title: 'Minimal',
        component: Minimal,
        code: minimalCode
    },
    {
        href: '/pinned-columns',
        title: 'Pinned columns',
        component: PinnedColumns,
        code: pinnedColumnsCode
    },
    {
        href: '/complex',
        title: 'Complex demo',
        component: GridDemo,
        code: gridDemoCode
    }
];
