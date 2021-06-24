import BasicPlugin from "./BasicPlugin"
export default class InsertImages extends BasicPlugin {

    get name() {
        return 'insertImages'
    }
    get label(){
        return 'Insert Images'
    }
    get icon(){
        return `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>`
    }
    writeContent(items){
        items = Array.isArray(items) ? items : [items]
        const selected = this.selection.getSelectedElement()

        this.editor.model.change(writer => {
            if(selected && selected.name === 'image') {
                const firstItem = items.shift()
                writer.setAttributes({src: firstItem.url}, selected)
            }
            items.forEach((item)=>{
                this.editor.model.insertContent(
                    writer.createElement('image', {src: item.url, caption: 'test'}),
                    this.selection.getLastPosition()
                )
            })
        })
    }
}
