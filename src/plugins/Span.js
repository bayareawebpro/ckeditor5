
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

const SPAN = 'span';
export default class Span extends Plugin {

    init() {
        this._defineSchema();
        this._defineConverters();
        this._defineUI();
    }

    _defineSchema() {
        const {model, commands} = this.editor;

        // Allow span attribute on text nodes.
        model.schema.extend( '$text', { allowAttributes: SPAN } );
        model.schema.setAttributeProperties( SPAN, {
            isFormatting: true,
            copyOnEnter: true
        } );

        // Create span command.
        commands.add( SPAN, new AttributeCommand( this.editor, SPAN ) );
    }

    _defineConverters() {

        const {conversion} = this.editor;

        conversion.attributeToElement( {
            model: SPAN,
            view: SPAN,
        } );
    }

    _defineUI(){

        const {ui, editing, commands} = this.editor

        const command = commands.get( SPAN );

        ui.componentFactory.add('span', (locale) => {

            const view = new ButtonView(locale)

            view.set({
                tooltip: true,
                label: 'Span',
                withText: true,
                isToggleable: false
                //icon: 'span'
            })

            view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

            view.on('execute',()=> {
                this.editor.execute( SPAN );
                editing.view.focus();
            })

            return view
        })
    }
}
