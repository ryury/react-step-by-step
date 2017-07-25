import * as types from '../actions/ActionTypes';

const initialState = {
    naviData: [{
        title: 'Home',
        path: '/'
    },{
        title: 'Best',
        path: '/best'
    },{
        title: 'Fashion',
        path: '/fashion'
    }]
};

function getNaviIndex(state = initialState, action) {
    switch (action.type) {
        case types.NAVI_CLICK:
            return state;
        default:
            return state;
    }
}

export default getNaviIndex;
