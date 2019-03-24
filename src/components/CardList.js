import React from 'react';
import { FlatList } from 'react-native'
import Card from '../components/Card'

CardList = props => {

    renderCard = ({ item }) => {

        try {
            // url
            if (item.webformatURL) { // pixabay 
                url = item.webformatURL
            } else if (item.urls.small) { // unsplash
                url = item.urls.small 
            }
            // title
            if (item.user.name) { // pixabay
                title = item.user.name 
            } else if (item.user) { // unsplash
                title = item.description || item.user
            }

        } catch { return }

        return (
            <Card url={url} title={title}
            />
        )
    }

    return (
        <FlatList numColumns={3} renderItem={renderCard} onEndReached={props.load}
            onEndReachedThreshold={0.3} data={props.walls} keyExtractor={(item, index) => index}
        />
    )

}

export default CardList