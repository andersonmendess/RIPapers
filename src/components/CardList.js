import React from 'react';
import { FlatList } from 'react-native'
import Card from '../components/Card'

CardList = props => {

    renderCard = ({ item }) => {
        return (
            <Card url={item.webformatURL ? item.webformatURL : item.urls.thumb}
            title={item.user.name ? item.user.name : item.user}
            desc={item.tags ? item.tags : item.width + 'x' + item.height}
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