import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NaviItem = ({title, active, path}) => {
    const classes = active ? ' on' : '';

    return (
        <div className={`navi${classes}`}>
            <Link to={path}>{title}</Link>
        </div>
    );
};

NaviItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    onNaviClick: PropTypes.func,
    idx: PropTypes.number,
    path: PropTypes.string
};

NaviItem.defaultProps = {
    title: 'Home',
    active: false,
    idx: 0,
    path: '/',
    onNaviClick: () => console.warn('onNaviClick not defined')
};

export default NaviItem;
