import React from 'react';
import { FlatList } from 'react-native'
import Card from '../components/Card'

CardList = props => {

    renderCard = ({ item }) => {
        return (
            <Card url={item.webformatURL ? item.webformatURL : item.src.medium}
                title={item.user ? item.user : item.photographer}
                desc={item.tags ? item.tags : item.width + 'x' + item.height}
            />
        )
    }

    return (
        <FlatList numColumns={3} renderItem={renderCard} onEndReached={props.load}
            onEndReachedThreshold={0.2} data={props.walls} keyExtractor={(item, index) => index}
        />
    )

}

export default CardList