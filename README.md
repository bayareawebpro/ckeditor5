# CKEditor5

```html
<div class="editor"></div>
<script src="../build/ckeditor.js"></script>
<script>
    ClassicEditor
        .create(document.querySelector('.editor'), {
            insertLinks: {
                handler: (write) => write({title: 'Custom Link', url: '/my-url/'})
            },
            insertImages: {
                handler: (write) => write({url: 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec', caption: 'test'})
            },
            insertSnippets: {
                handler:(write) => write('<h1>Snippet</h1>')
            },
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'link',
                    'bold',
                    'italic',
                    'subscript',
                    'superscript',
                    'underline',
                    'strikethrough',
                    'alignment',
                    '|',
                    'blockQuote',
                    'bulletedList',
                    'numberedList',
                    'horizontalLine',
                    '|',
                    'insertTable',
                    'mediaEmbed',
                    'insertLinks',
                    'insertImages',
                    'insertSnippets',
                    '|',
                    'undo',
                    'redo'
                ]
            },
		})
        .then(editor => window.editor = editor)
        .catch(console.error);
</script>
```