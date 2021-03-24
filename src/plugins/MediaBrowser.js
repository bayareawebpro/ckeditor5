//import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
export default class MediaBrowser{

    constructor( editor ) {
        this.config = editor.config;
        this.model = editor.model;
        this.ui = editor.ui;
        console.log( this.ui )
    }

    /**
     * Get the Plugin Name
     */
    static get pluginName() {
        return 'mediaBrowser'
    }

    /**
     * Get Required Children
     */
    static get requires() {
        return ['Image']
    }

    /**
     * Initialize the plugin.
     * Start listening for events.
     * @return void
     */
    init() {
        //Nova.$on(`ckeditor:media:${this.fieldName}:write`, this.writeContent.bind(this))
        this.ui.componentFactory.add('mediaBrowser', this.createButton.bind(this))
    }

    /**
     * Destroy Instance
     * Stop listening for events.
     * @return void
     */
    destroy() {
        //Nova.$off(`ckeditor:media:${this.fieldName}:write`, this.writeContent.bind(this))
    }

    /**
     * Create the plugin ButtonView
     * @param locale object
     * @return {ButtonView}
     */
    createButton(locale){
        const view = new ButtonView(locale)

        view.set({
            label: 'Insert Image',
            icon: this.icon,
            tooltip: true,
        })

        if(this.isEnabled){
            view.on('execute', this.openModal.bind(this))
        }
        view.set('isVisible', this.isEnabled)

        return view
    }

    /**
     * Launch the Media Browser.
     */
    openModal(){
        this.saveSelection()
        Nova.$emit(`ckeditor:media:${this.fieldName}`, this.isEnabled)
    }

    /**
     * Save the editor selection.
     */
    saveSelection(){
        this.selected = this.model.document.selection.getSelectedElement()
    }

    /**
     * Clear the saved editor selection.
     */
    clearSelection(){
        this.selected = null
    }

    /**
     * Is the plugin enabled?
     * @return {boolean}
     */
    get isEnabled(){
        return this.config.get('mediaBrowser')
    }

    /**
     * Get the Nova field name.
     * @return {boolean}
     */
    get fieldName(){
        return this.config.get('fieldName')
    }

    /**
     * Is Image Element
     * @return {boolean}
     */
    hasSelectedWidget(){
        return (this.selected && this.selected.name === 'image')
    }

    /**
     * Write Document Content.
     * @param items {Array}
     * @return void
     */
    writeContent(items){

        this.model.change(writer => {
            /**
             * If an image is selected, we'll update it by plucking the first item.
             */
            if(this.hasSelectedWidget()) {
                const firstItem = items.shift()
                writer.setAttributes({src: firstItem.url}, this.selected)
                this.clearSelection()
            }

            /**
             * Then append each remaining item to the document.
             */
            items.forEach((item)=>{
                this.model.insertContent(
                    writer.createElement('image', {src: item.url}),
                    this.model.document.selection.getLastPosition()
                )
            })
        })
    }

    /**
     * Get the Icon
     * @return string
     */
    get icon(){
        return `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>`
    }
}
