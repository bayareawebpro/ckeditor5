# CKEditor5

```html
<div class="editor"></div>
<script src="../build/ckeditor.js"></script>
<script>
    ClassicEditor
        .create(document.querySelector('.editor'), {
            toolbar: {
                items: [
                    'heading',
                    //'linkBrowser',
                    //'mediaBrowser',
                    //'insertSnippet',
                    '|',
                    'link',
                    'bold',
                    'italic',
                    'subscript',
                    'superscript',
                    'underline',
                    'strikethrough',
                    'blockQuote',
                    'alignment',
                    '|',
                    'bulletedList',
                    'numberedList',
                    'horizontalLine',
                    'insertTable',
                    '|',
                    'mediaEmbed',
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