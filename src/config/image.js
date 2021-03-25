/**
 * https://ckeditor.com/docs/ckeditor5/latest/features/image.html
 */
export default {
    image:{
        upload: {
            types: ['gif','png','jpg','jpeg']
        },
        toolbar: [
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
        ]
    }
}
