import React, { Component } from 'react';
import { FlatList, ToastAndroid } from 'react-native';
import config from '../utils/api_configs'
import Card from './Card'
import axios from 'axios';

class WallRender extends Component {

    state = {
        walls: [],
        page: 1,
        api: 'pixabay',
        stop: 0
    }

    componentDidMount() {
        this.load()
    }

    load = () => {

        page = parseInt(this.state.page)

        req_props = {
            pixabay: {
                url: config.pixabay.base + '&page=' + page
            },
            pexels: {
                url: config.pexels.base + '&page=' + page,
                key: config.pexels.keys[Math.floor((Math.random() * 6))]
            }
        }

        walls = [...this.state.walls]

        api = req_props[this.state.api]

        if (this.state.api == 'pexels') axios.defaults.headers.common['Authorization'] = api.key

        axios.get(api.url).then(res => {
            this.state.api == 'pixabay' ? res = res.data.hits : res = res.data.photos
            walls ? walls = walls.concat(res) : walls = res
            page++
            this.setState({ walls, page })
            ToastAndroid.show("Using " + this.state.api + " API", ToastAndroid.LONG);

        }).catch(e => {
            ToastAndroid.show(e.toString(), ToastAndroid.SHORT);
            this.setState({ api: this.state.api === 'pixabay' ? 'pexels' : 'pixabay' },
                () => this.setState({ stop: parseInt(this.state.stop) + 1 }))
            if (this.state.stop < 6) this.load()
        })

    }

    renderCard = ({ item }) => {
        return (
            <Card url={item.webformatURL ? item.webformatURL : item.src.medium}
                title={item.user ? item.user : item.photographer}
                desc={item.tags ? item.tags : item.width + 'x' + item.height}
            />
        )
    }

    render() {
        return (
            <FlatList numColumns={3} renderItem={this.renderCard} onEndReached={this.load}
                onEndReachedThreshold={0.2} data={this.state.walls} keyExtractor={(item, index) => index}
            />
        )
    }
}

export default WallRender