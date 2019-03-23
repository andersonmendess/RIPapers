import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import config from '../configs/api'
import CardList from '../components/CardList'
import axios from 'axios';

class Home extends Component {

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

    render() {
        return (
            <CardList walls={this.state.walls} load={this.load} />
        )
    }

}

export default Home