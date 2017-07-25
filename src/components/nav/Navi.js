import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NaviItem from './NaviItem';

class Navi extends Component {
    render() {
        const {naviData, location} = this.props;

        const naviItem = naviData.map((item, i) => {
            return (
                <NaviItem
                    key={i.toString()}
                    title={item.title}
                    path={item.path}
                    active={location.pathname === item.path}
                />
            );
        });

        return (
            <div>
                {naviItem}
            </div>
        );
    }
}

Navi.propTypes = {
    naviData: PropTypes.array,
    location: PropTypes.object
};

Navi.defaultProps = {
    naviData: [],
    location: {}
};

export default Navi;
