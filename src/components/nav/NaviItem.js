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
    path: PropTypes.string
};

NaviItem.defaultProps = {
    title: 'Home',
    active: false,
    path: '/'
};

export default NaviItem;
