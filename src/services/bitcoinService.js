import axios from 'axios';

export const bitcoinService = {
    getRate,
    getTradeVolume,
    getMarketPrice
}

async function getRate(coins = 1) {
    try {
        const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
            .then(res => res.data);
        console.log('rate', rate);
        return rate
    } catch (err) {
        console.log(err);
    }
}

async function getTradeVolume() {
    try {
        return await axios.get(` https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
            .then(res => res.data.values);
    } catch (err) {
        console.log(err);
    }
    return
}
async function getMarketPrice() {
    try {
        return await await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true#`)
            .then(res => res.data.values);
    } catch (err) {
        console.log(err);
    }
    return
}

