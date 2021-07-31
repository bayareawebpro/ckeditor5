/**
 * https://ckeditor.com/docs/ckeditor5/latest/features/image.html
 */
export default {
    image:{
        toolbar: [
            'resizeImage',
            'imageStyle:full',
            'imageStyle:alignLeft',
            'imageStyle:alignCenter',
            'imageStyle:alignRight',
            'imageTextAlternative',
            'insertImages',
        ],
        styles: [
            'full',
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
                name: 'resizeImage:90',
                value: '90',
                label: '90%'
            },
            {
                name: 'resizeImage:80',
                value: '80',
                label: '80%'
            },
            {
                name: 'resizeImage:70',
                value: '75',
                label: '75%'
            },
            {
                name: 'resizeImage:70',
                value: '65',
                label: '65%'
            },
            {
                name: 'resizeImage:60',
                value: '60',
                label: '60%'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                label: '50%'
            },
        ]
    }
}
