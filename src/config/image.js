/**
 * https://ckeditor.com/docs/ckeditor5/latest/features/image.html
 */
export default {
    image:{
        toolbar: [
            'resizeImage',
            'imageStyle:full',
            //'imageStyle:side',
            'imageStyle:alignLeft',
            'imageStyle:alignCenter',
            'imageStyle:alignRight',
            'imageTextAlternative',
            'insertImages',
        ],
        styles: [
            'full',
            //'side',
            'alignLeft',
            'alignCenter',
            'alignRight',
        ],
        resizeOptions: [
            {
                name: 'resizeImage:original',
                value: null,
                label: 'Original'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                label: '50%'
            },
            {
                name: 'resizeImage:75',
                value: '75',
                label: '75%'
            }
        ]
    }
}
