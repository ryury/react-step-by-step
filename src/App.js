import React, {Component} from 'react';
// navigation
import Navi from './components/nav/Navi';
// contents
import Home from './components/contents/Home';
import Best from './components/contents/Best';
import Fashion from './components/contents/Fashion';

class App extends Component {
    render() {
        return (
            <div>
                <Navi/>
                <Home/>
                <Best/>
                <Fashion/>
            </div>
        );
    }
}

export default App;
