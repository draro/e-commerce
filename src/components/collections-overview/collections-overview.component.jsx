import React from 'react';
import './collections-overview.style.scss'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
// Redux
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map( ({ id, ...othersCollectionProps}) => (
                <PreviewCollection key={id} {...othersCollectionProps} />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)