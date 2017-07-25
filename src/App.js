import React, {Component} from 'react';
// navigation
import Navi from './components/nav/Navi';
// contents
import Home from './components/contents/Home';
import Best from './components/contents/Best';
import Fashion from './components/contents/Fashion';

import {connect} from 'react-redux';

// Router
import {Route, withRouter} from 'react-router-dom';

class App extends Component {
    render() {
        const {naviData, naviIndex, location} = this.props;

        return (
            <div>
                <Navi
                    naviData={naviData}
                    naviIndex={naviIndex}
                    location={location}
                />
                <Route exact path="/" component={Home}/>
                <Route path="/best" component={Best}/>
                <Route path="/fashion" component={Fashion}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    naviIndex: state.naviIndex,
    naviData: state.naviData
});

export default withRouter(connect(
    mapStateToProps
)(App));
