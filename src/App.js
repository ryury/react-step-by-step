import React, {Component} from 'react';
// navigation
import Navi from './components/nav/Navi';
// contents
import Home from './components/contents/Home';
import Best from './components/contents/Best';
import Fashion from './components/contents/Fashion';

import {connect} from 'react-redux';

// Router
import {Route, withRouter, Switch} from 'react-router-dom';

class App extends Component {
    shouldComponentUpdate(prevProps) {
        return JSON.stringify(this.props.location.pathname) !== JSON.stringify(prevProps.location.pathname);
    }

    render() {
        const {naviData, naviIndex, location} = this.props;

        return (
            <div>
                <Navi
                    naviData={naviData}
                    naviIndex={naviIndex}
                    location={location}
                />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/best" component={Best}/>
                    <Route path="/fashion" component={Fashion}/>
                </Switch>
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
