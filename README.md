# CKEditor5

Includes custom plugins for setting up external methods to insert content into the editor: 

- Insert Links
- Insert Images
- Insert Snippets

## Use with the Vue Component

> https://github.com/ckeditor/ckeditor5-vue

```vue
<script>
    import {Editor} from '@bayareawebpro/ckeditor5-classic-custom'
    export default {
        data() {
            return {
                editor: Editor,
                content: '<p>Content of the editor.</p>',
                config: {
                    insertLinks: {
                        handler: (write) => write({title: 'Custom Link', url: '/my-url/'})
                    },
                    insertImages: {
                        handler: (write) => write({url: 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec'})
                    },
                    insertSnippets: {
                        handler:(write) => write('<figure class="image"><img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec"></figure>')
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
                }
            }
        },
    }
</script>
<template>
    <ckeditor
        :editor="editor"
        :config="config"
        v-model="content"
    />
</template>
```