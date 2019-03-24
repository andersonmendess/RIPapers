const settings = {
    pixabay: {
        base: 'https://pixabay.com/api/?image_type=photo&editors_choice=true',
        getKey: () => {
            keys = [
                '6154095-ca7730abb494e0d43f1665a91',
                '4386506-63329db38400319250ee539d9',
                '8782397-0167754e846f520e8c572b2ab',
                '3626573-eea19fdf59a1a709f863a16c2'
            ]
            return '&key=' + keys[Math.floor((Math.random() * keys.length) - 1)]
        },
    },
    unsplash: {
        base: 'https://api.unsplash.com/photos/?',
        getKey: () => {
            keys = [
                'e0de2e332e326812f60c619eaabf5aed708abced436ca4520801920be995469d',
                'eb54e3b9dc12b9e0862b028b646085355d20b3442fbdfca4633ca0f7b01ef9a6',
                '99974ce66a15ea9934220f4acf9d6515c4bfbccc761a35fe83e7ec79961c77f5',
                '73e6a5754dc21008e77d834adf6f182b1375547bc65fa57e2f9200d2e3dbe8c3'
            ]
            return '&client_id=' + keys[Math.floor((Math.random() * keys.length) - 1)]
        },
    },
    common: {
        per_page: '&per_page=40'
    }
}

const setupAPI = api => {
    api = settings[api]
    return api.base + api.getKey() + settings.common.per_page
}

export default { setupAPI };