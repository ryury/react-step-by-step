import React, {Component} from 'react';
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

export default Navi;
