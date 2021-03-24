/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
// import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
// import Image from '@ckeditor/ckeditor5-image/src/image'
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
// import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar'
// import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative'

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Link from '@ckeditor/ckeditor5-link/src/link'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import List from '@ckeditor/ckeditor5-list/src/list'
import Heading from "@ckeditor/ckeditor5-heading/src/heading"
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'

import AutoFormat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import InsertSnippet from "./plugins/InsertSnippet"
import Mention from "@ckeditor/ckeditor5-mention/src/mention"

export default class Editor extends ClassicEditorBase {}

Editor.defaultConfig = {
	licenseKey: '',
	language: 'en',
	snippetBrowser: true,
	...require('./config/link').default,
	...require('./config/image').default,
	...require('./config/media').default,
	...require('./config/table').default,
	...require('./config/headings').default,
	...require('./config/mentions').default,
	...require('./config/toolbar').default,
}
// Plugins to include in the build.
Editor.builtinPlugins = [
	Essentials,
	Mention,
	InsertSnippet,
	Heading,
	Paragraph,
	Link,
	Bold,
	Italic,
	List,
	Indent,
	BlockQuote,
	Subscript,
	Superscript,
	StrikeThrough,
	Underline,
	HorizontalLine,
	Table,
	TableToolbar,
	Alignment,
	AutoFormat,
	PasteFromOffice,
	// CKFinderUploadAdapter,
	//MediaEmbedToolbar,
	// Image,
	// ImageStyle,
	// ImageUpload,
	// ImageCaption,
	// ImageToolbar,
	// ImageTextAlternative,
	// MediaEmbed,
]
