# inferno-datagrid [![Build Status][travis-img]][travis]

[travis-img]: https://travis-ci.org/TrySound/inferno-datagrid.svg
[travis]: https://travis-ci.org/TrySound/inferno-datagrid

Declarative reactive table with unidirectional data flow

## API

### Grid component

**data**

**gridState**

```js
{
    columns: [
        {
            name: string,
            displayName: string,
            minWidth: number,
            width: number || string, // 120, '60%' depends on viewportWidth
            maxWidth: number,
            pinnedLeft: boolean,
            pinnedRight: boolean,
            enableResizing: boolean,
            enableMoving: boolean,
            enableFiltering: boolean,
            enableSorting: boolean,
            sort: null | 'asc' | 'desc',
            placeholder: string,
            filter: string
        }
    ],
    columnState: {
        // user state for columns
        moving: null | {
            name: string,
            left: string,
            right: string
        }
    },
    rowState: {
        // user state for rows
        selectedIndex: number
    }
}
```

**callback** `(action: Action) => void`

**scrollTop** `number`

**viewportWidth** `number`

**viewportHeight** `number`

**headerHeight** `number`

**rowHeight** `number`

**columnComponent**

```js
({
    state, // columnState
    callback,
    column,
    index: number, // columnIndex
    last: boolean, // is the last column
    ghost: boolean // is column moving ghost
}) => nodes
```

**rowComponent**

```js
({
    state, // rowState
    columns, // columns with width
    callback,
    datum, // row data
    index: number // row index
}) => nodes
```

### reducer

Coming soon...

### selectGridData

Coming soon...

### withScrollProps

Coming soon...

## License

MIT © [Bogdan Chadkin](mailto:trysound@yandex.ru)
