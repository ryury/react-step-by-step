import React, {Component} from 'react';
// navigation
import Navi from './components/nav/Navi';
// contents
import Home from './components/contents/Home';
import Best from './components/contents/Best';
import Fashion from './components/contents/Fashion';

class App extends Component {
    constructor() {
        super();

        this.state = {
            naviData: ['Home', 'Best', 'Fashion'],
            naviIndex: 0
        };

        this.onNaviClick = this.onNaviClick.bind(this);
    }

    onNaviClick(idx) {
        this.setState({
            naviIndex: idx
        });
    }

    render() {
        let cntComponent = null;

        if (this.state.naviIndex === 0) {
            cntComponent = <Home/>
        } else if (this.state.naviIndex === 1) {
            cntComponent = <Best/>
        } else {
            cntComponent = <Fashion/>
        }

        return (
            <div>
                <Navi naviData={this.state.naviData} naviIndex={this.state.naviIndex} onNaviClick={this.onNaviClick}/>
                {cntComponent}
            </div>
        );
    }
}

export default App;
