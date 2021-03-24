export default {
    mention: {
        feeds: [
            // {
            //     marker: '@',
            //     feed: (search) => axios.get('/search', {params: search}),
            // }
            {
                marker: '@',
                feed: [
                    { id: '@domestic', name: '1-800-888-8888', link: 'tel:+18008888888' },
                ],
            }
        ]
    }
}