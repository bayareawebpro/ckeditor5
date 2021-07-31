/**
 * https://ckeditor.com/docs/ckeditor5/latest/features/table.html
 */
const customColorPalette = [
    {
        label: 'Gray',
        color: '#94a3b8',
    },
    {
        label: 'Blue',
        color: '#3b82f6',
    },
    {
        label: 'Purple',
        color: '#a855f7',
    },
    {
        label: 'Green',
        color: '#22c55e',
    },
    {
        label: 'Yellow',
        color: '#eab308',
    },
    {
        label: 'Orange',
        color: '#f97316',
    },
    {
        label: 'Red',
        color: '#ef4444',
    },
];
export default {
    table: {
        contentToolbar: [
            'tableColumn', 'tableRow', 'mergeTableCells',
            'tableProperties', 'tableCellProperties'
        ],
        tableProperties: {
            //borderColors: customColorPalette,
            backgroundColors: customColorPalette
        },
        tableCellProperties: {
            //borderColors: customColorPalette,
            backgroundColors: customColorPalette
        }
    }
}
