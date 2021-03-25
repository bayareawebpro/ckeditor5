/**
 * @var Nova
 */
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
export default class BasicPlugin extends Plugin {

    /**
     * Initialize the plugin.
     * @return void
     */
    init() {
        this.editor.ui.componentFactory.add(this.name, this.createButton.bind(this))
    }

    /**
     * Get the Plugin Name
     */
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

    /**
     * Write Document Content.
     * @param locale object
     * @return {ButtonView}
     */
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

    /**
     * Launch the Link Browser.
     */
    execute() {
        const config = this.editor.config.get(this.name)
        console.log(config)
        if(typeof config.handler === 'function'){
            return config.handler(this.writeContent.bind(this))
        }
        console.error(`No ${this.name} method configured.`)
    }

    /**
     * Write Document Content.
     * @return void
     */
    writeContent(snippet = '<br/><h1>Test</h1>') {
        this.editor.model.insertContent(this.editor.data.toModel(this.editor.data.processor.toView(snippet)));
    }
}
