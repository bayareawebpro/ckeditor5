/**
 * https://ckeditor.com/docs/ckeditor5/latest/features/media-embed.html#installation
 */
export default {
    mediaEmbed: {
        previewsInData: true,
        providers: [
            {
                name: 'youtube',
                url: [
                    /^https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/,
                    /^https:\/\/www\.youtube\.com\/v\/([\w-]+)/,
                    /^https:\/\/www\.youtube\.com\/embed\/([\w-]+)/,
                    /^https:\/\/www\.youtu\.be\/([\w-]+)/
                ],
                html: match => `
                <div class="aspect-w-16 aspect-h-9">
                  <iframe src="https://www.youtube.com/embed/${match[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>`
            },
        ]
    },
}
