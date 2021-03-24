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
        return view
    }

    /**
     * Launch the Link Browser.
     */
    execute() {
        this.writeContent()
    }

    /**
     * Write Document Content.
     * @return void
     */
    writeContent(snippet = '<h1>Test</h1>') {
        this.editor.model.insertContent(this.editor.data.toModel(this.editor.data.processor.toView(snippet)));
    }

    /**
     * Destroy Instance
     * Stop listening for events.
     * @return void
     */
    destroy() {

    }
}
