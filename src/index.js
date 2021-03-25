/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed'

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import Table from '@ckeditor/ckeditor5-table/src/table'
import List from '@ckeditor/ckeditor5-list/src/list'

import Link from '@ckeditor/ckeditor5-link/src/link'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'

import AutoFormat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'

import BasicPlugin from './plugins/BasicPlugin'
import InsertSnippets from './plugins/InsertSnippets'
import InsertImages from './plugins/InsertImages'
import InsertLinks from './plugins/InsertLinks'

class Editor extends ClassicEditorBase {}
Editor.defaultConfig = {
	licenseKey: '',
	language: 'en',
	...require('./config/link').default,
	...require('./config/html').default,
	...require('./config/image').default,
	...require('./config/media').default,
	...require('./config/table').default,
	...require('./config/headings').default,
	...require('./config/toolbar').default,
}
// Plugins to include in the build.
Editor.builtinPlugins = [
	InsertSnippets,
	InsertImages,
	InsertLinks,
	Essentials,
	Link,
	Bold,
	List,
	Table,
	Italic,
	Indent,
	Heading,
	Paragraph,
	Underline,
	Alignment,
	BlockQuote,
	Subscript,
	Superscript,
	StrikeThrough,
	HorizontalLine,
	TableToolbar,
	AutoFormat,
	PasteFromOffice,
	Image,
	ImageResize,
	ImageStyle,
	ImageCaption,
	ImageToolbar,
	ImageTextAlternative,
	MediaEmbed,
	HtmlEmbed
]

export default {
	Editor,
	BasicPlugin,
}
