import React from 'react';
import PropTypes from 'prop-types';

const NaviItem = ({title, active, onNaviClick, idx}) => {
    const classes = active ? ' on' : '';

    return (
        <div className={`navi${classes}`}>
            <a onClick={onNaviClick.bind(this, idx)}>{title}</a>
        </div>
    );
};

NaviItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    onNaviClick: PropTypes.func,
    idx: PropTypes.number
};

NaviItem.defaultProps = {
    title: 'Home',
    active: false,
    idx: 0,
    onNaviClick: () => console.warn('onNaviClick not defined')
};

export default NaviItem;
