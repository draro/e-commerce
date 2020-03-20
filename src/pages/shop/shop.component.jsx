import React from 'react';
import SHOP_DATA from './shop-data'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state
        return(
            <div className='shop-page'>
                {
                    collections.map( ({ id, ...othersCollectionProps}) => (
                        <PreviewCollection key={id} {...othersCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage