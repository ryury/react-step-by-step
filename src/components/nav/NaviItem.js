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
    onNaviClick: () => console.warn('onNaviClick not defined'),
    idx: 0
};

export default NaviItem;
