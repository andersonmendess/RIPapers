import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import config from '../configs/api'
import CardList from '../components/CardList'
import axios from 'axios';

class Feed extends Component {

    state = {
        walls: [],
        url: config.setupAPI(this.props.api),
        page: 1,
        api: this.props.api
    }

    componentDidMount() {
        this.fetchWalls()
    }

    fetchWalls = () => {

        walls = [...this.state.walls]
        url = this.state.url
        page = parseInt(this.state.page)

        if (!url) return

        if (this.props.type === 'popular' && this.state.api === 'unsplash') {
            url += '&order_by=popular'
        }

        if (this.props.type === 'latest' && this.state.api === 'pixabay') {
            url += '&order=latest'
        }

        axios.get(url + '&page=' + page++).then(res => {
            this.state.api == 'pixabay' ? res = res.data.hits : res = res.data
            page > 2 ? walls = walls.concat(res) : walls = res
            this.setState({ walls, page })
        }).catch(e => {
            ToastAndroid.show(e.toString(), ToastAndroid.SHORT);
            this.setState({ url: config.setupAPI(this.state.api) }, this.fetchWalls())
        })
    }

    render() {
        return (
            <CardList walls={this.state.walls} load={this.fetchWalls} />
        )
    }

}

export default Feed