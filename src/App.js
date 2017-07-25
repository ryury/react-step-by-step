import React, {Component} from 'react';
// navigation
import Navi from './components/nav/Navi';
// contents
import Home from './components/contents/Home';
import Best from './components/contents/Best';
import Fashion from './components/contents/Fashion';

import * as actions from './actions';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        let cntComponent = null;

        if (this.props.naviIndex === 0) {
            cntComponent = <Home/>
        } else if (this.props.naviIndex === 1) {
            cntComponent = <Best/>
        } else {
            cntComponent = <Fashion/>
        }

        return (
            <div>
                <Navi
                    naviData={this.props.naviData}
                    naviIndex={this.props.naviIndex}
                    onNaviClick={this.props.onNaviClick}
                />
                {cntComponent}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    naviIndex: state.naviIndex,
    naviData: state.naviData
});

const mapDispatchToProps = (dispatch) => ({
    onNaviClick: (idx) => dispatch(actions.naviClick(idx))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
