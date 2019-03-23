import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import config from '../configs/api'
import CardList from '../components/CardList'
import axios from 'axios';

class Feed extends Component {

    state = {
        walls: [],
        api: 'unsplash',
        url: "",
        page: 1,
        fails: 0
    }

    componentDidMount() {
        this.setApi()
    }

    setApi = () => {
        api = config[this.state.api]

        url = api.base + api.getKey() + config.common.per_page

        this.setState({ url }, () => { this.fetchWalls() })
    }

    handleFail = () => {
        fails = parseInt(this.state.fails)

        if (fails > 4) {
            this.setState({ api: state.api === 'unsplash' ? 'pixabay' : 'unsplash' }, () => { this.setApi() })
            fails = 0
        } else {
            fails++
        }

        this.setState({ fails })
    }

    fetchWalls = () => {

        page = parseInt(this.state.page)

        walls = [...this.state.walls]

        axios.get(this.state.url + '&page=' + page++).then(res => {
            this.state.api == 'pixabay' ? res = res.data.hits : res = res.data
            walls ? walls = walls.concat(res) : walls = res
            this.setState({ walls, page })
            ToastAndroid.show("Using " + this.state.api + " API", ToastAndroid.LONG);
        }).catch(e => {
            ToastAndroid.show(e.toString(), ToastAndroid.SHORT);
            this.handleFail()
        })
    }

    render() {
        return (
            <CardList walls={this.state.walls} load={this.fetchWalls} />
        )
    }

}

export default Feed