import BasicPlugin from "./BasicPlugin"
export default class InsertSnippet extends BasicPlugin {

    get name() {
        return 'insertSnippet'
    }
    get label(){
        return 'Insert Snippet'
    }
    get icon(){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.664 502.664"><path d="M153.821 358.226L0 274.337v-46.463l153.821-83.414v54.574L46.636 250.523l107.185 53.431v54.272zm26.273 29.358L282.103 115.08h32.227L212.084 387.584h-31.99zm168.749-29.358v-54.272l107.164-52.999-107.164-52.59v-53.927l153.821 83.522v46.183l-153.821 84.083z" fill="#000"/></svg>`
    }
    execute() {
        this.writeContent()
    }
    destroy() {

    }
}
