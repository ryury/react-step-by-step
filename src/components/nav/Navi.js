import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NaviItem from './NaviItem';

class Navi extends Component {
    render() {
        const {naviData, naviIndex, onNaviClick} = this.props;

        const naviItem = naviData.map((item, i) => {
            return (
                <NaviItem
                    key={i.toString()}
                    idx={i}
                    title={item}
                    active={naviIndex === i}
                    onNaviClick={onNaviClick}
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
    naviIndex: PropTypes.number,
    onNaviClick: PropTypes.func
};

Navi.defaultProps = {
    naviData: [],
    naviIndex: 0,
    onNaviClick: () => console.warn('onNaviClick not defined')
};

export default Navi;
