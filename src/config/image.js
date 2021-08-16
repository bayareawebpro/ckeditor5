/**
 * https://ckeditor.com/docs/ckeditor5/latest/features/image.html
 */
export default {
    image:{
        toolbar: [
            'resizeImage',
            'imageStyle:full',
            'imageStyle:block',
            'imageStyle:alignLeft',
            'imageStyle:alignCenter',
            'imageStyle:alignRight',
            'imageTextAlternative',
            'linkImage',
        ],
        styles: [
            'full',
            'block',
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
            {
                name: 'resizeImage:40',
                value: '40',
                label: '40%'
            },
            {
                name: 'resizeImage:35',
                value: '35',
                label: '35%'
            },
            {
                name: 'resizeImage:30',
                value: '30',
                label: '30%'
            },
            {
                name: 'resizeImage:25',
                value: '25',
                label: '25%'
            },
            {
                name: 'resizeImage:20',
                value: '20',
                label: '20%'
            },
            {
                name: 'resizeImage:15',
                value: '15',
                label: '15%'
            },
            {
                name: 'resizeImage:10',
                value: '20',
                label: '10%'
            },
        ]
    }
}
