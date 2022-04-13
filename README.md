# CKEditor5

`npm install @bayareawebpro/ckeditor5-classic-custom --save-dev`

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
        // Create a new UI Button & Handler
        createPlugins: {
          myPlugin: {
            label: `Click Me`,
            icon: `<svg>...`,
            execute: (editor) => {
              editor.model.insertContent(editor.data.toModel(editor.data.processor.toView(html)))
            }
          }
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
            'htmlEmbed',
            'insertTable',
            'mediaEmbed',
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

## Vendor Docs
- https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html
- https://webpack.js.org/plugins/terser-webpack-plugin/