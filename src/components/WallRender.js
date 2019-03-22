import React, { Component } from 'react';
import { FlatList, ToastAndroid } from 'react-native';
import config from '../utils/api_configs'
import Card from './Card'
import axios from 'axios';

class WallRender extends Component {

    state = {
        walls: [],
        page: 1,
    }

    componentDidMount() {
        this.load()
    }

    load = () => {

        pexels = {
            url: config.pexels.base + 'curated?per_page=10&page=' + this.state.page,
            key: config.pexels.keys[Math.floor((Math.random() * 6))]
        }

        walls = [...this.state.walls]

        axios.get(pexels.url, { headers: { 'Authorization': pexels.key } })
            .then(res => {
                walls ? walls = walls.concat(res.data.photos) : walls = res.data.photos
                this.setState({ walls })
            }).catch(e => {
                ToastAndroid.show(e.toString(), ToastAndroid.SHORT);
            })

    }

    renderCard = ({ item }) => {
        return (
            <Card url={item.src.medium} title={item.photographer} desc={item.width + 'x' + item.height} />
        )
    }

    render() {
        return (
            <FlatList numColumns={3} renderItem={this.renderCard}
                data={this.state.walls} keyExtractor={(item, index) => index}
            />
        )
    }
}

export default WallRender