import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
export default class PluginFactory extends Plugin {

    init() {
        const plugins = this.editor.config.get('makePlugins') || {}

        Object.entries(plugins).map(([key, value])=>{

            this.editor.ui.componentFactory.add(key, (locale) => {

                const view = new ButtonView(locale)
                view.on('execute',()=>value.execute(this.editor))
                view.set({
                    tooltip: true,
                    label: value.label,
                    icon: value.icon
                })
                return view
            })
        })
    }
}
