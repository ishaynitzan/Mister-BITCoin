import React from 'react'
import { userService } from '../services/userService.js'
import { bitcoinService } from '../services/bitcoinService.js'

export class Home extends React.Component {
    state = {
        user: '',
        bitcoinRate: '',
    }

   async componentDidMount() {
   const user =  userService.getUser()
        const bitcoinRate = await bitcoinService.getRate(user.coins)
        this.setState({
            user,
            bitcoinRate,
        })
    }

    render() {
        const {user, bitcoinRate } = this.state
        return (
            <div className="home">
                <h1><span>Mister-BITCoin</span></h1>
                <h2>Welcome <span>{user.name}</span></h2>
                <h2>Current Coin: {user.coin}</h2>
                <h2>BTC: {bitcoinRate}</h2>
            </div>
        )
    }
}

