/**
 * @var Nova
 */
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
export default class BasicPlugin extends Plugin {

    init() {
        this.editor.ui.componentFactory.add(this.name, this.createButton.bind(this))
    }

    get name() {
        return ''
    }
    get label(){
        return ''
    }
    get icon(){
        return ``
    }
    get enabled(){
        return this.editor.config.get(this.name)
    }

    createButton(locale) {
        const view = new ButtonView(locale)
        view.set({
            tooltip: true,
            label: this.label,
            icon: this.icon
        })
        view.on('execute', this.execute.bind(this))
        view.set('isVisible', this.enabled)
        return view
    }

    execute() {
        const config = this.editor.config.get(this.name)
        if(typeof config.handler === 'function'){
            this.selection = this.editor.model.document.selection
            return config.handler(this.writeContent.bind(this))
        }
        console.error(`No ${this.name} method configured.`)
    }

    writeContent(snippet) {
        if(snippet){
            this.editor.model.insertContent(this.editor.data.toModel(this.editor.data.processor.toView(snippet)));
        }
    }
}
