export const defaultCoinStore = {
    'bitcoin': {},
    'ethereum': {}
}

export const defaultSettings = {
    'currentPage' : {'name': 'CoinsMain', 'data' : {}},
    'firstRun': true,
    'themeStyle':'dark',
    'version':'v0_0_2'
}

export const coin = {
    name:'', 
    symbol: '',
    pubkeys : {},
    market_info : {},
}

export const pubkey = {
    label : '',
    balance: 0,
    USD_value : 0,
    vk : '',
    sk : '',
}