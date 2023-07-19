import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
export default class SpanElement extends Plugin {

    init() {
        this._defineSchema();
        this._defineConverters();
        this._defineUI();
    }

    _defineSchema() {
        const {model} = this.editor;

        model.schema.register('span', {
            inheritAllFrom: '$inlineObject',
        });

        model.schema.extend( '$text', {
            allowIn: 'span'
        });
    }

    _defineConverters() {

        const {conversion} = this.editor;

        conversion.for( 'upcast' ).elementToElement({
            view: 'span',
            model: 'span'
        });

        conversion.for( 'dataDowncast' ).elementToElement({
            model: 'span',
            view: 'span'
        });

        conversion.for( 'editingDowncast' ).elementToElement({
            model: 'span',
            view: ( modelItem, { writer } ) => {
                return toWidget(writer.createContainerElement( 'span', {}), writer); //toWidgetEditable
            }
        })
    }

    _defineUI(){

        const {ui} = this.editor
        const {componentFactory} = ui

        componentFactory.add('spanElement', (locale) => {

            const view = new ButtonView(locale)

            view.set({
                tooltip: true,
                label: 'Span',
                withText: true,
                //icon: 'span'
            })

            view.on('execute',()=> {

                const {model} = this.editor

                model.change( writer => {

                    const {selection} = model.document

                    const selectedContent = model.getSelectedContent(selection)
                    const selectedItem = selectedContent.getChild(0)


                    if(!selectedItem) return;

                    // Unwrap the span tag.
                    if(selectedItem.name === 'span'){

                        // Get the first item of the selection
                        const textChild = selectedItem.getChild(0)

                        if(textChild && textChild.data){

                            //Remove Selection
                            writer.remove(selection.getFirstRange())

                            //ReInsert Span Text Content
                            writer.insertText(textChild.data, selection.getFirstPosition() );
                        }

                        return
                    }
                    // Remove the selected text.
                    if(selectedItem.data){

                        // Remove Selection
                        writer.remove(selection.getFirstRange())

                        // Create the span element.
                        const elem = writer.createElement('span');

                        // Insert the selected text data into the span.
                        writer.appendText(selectedItem.data, elem);

                        // Insert the span element at the selected position.
                        model.insertContent( elem, selection.getFirstPosition() );

                        // Toggle selected status for UI widget.
                        writer.setSelection( elem, 'on' );
                    }
                })
            })
            return view
        })
    }
}
