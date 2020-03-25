import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'

// Redux
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySection} from '../../redux/directory/directory.selector'

const Directory = ({sections}) => (
            <div className='directory-menu'>
                { 
                sections.map(
                    ({ id, ...otherSectionsProps }) => (
                    <MenuItem key={id} {...otherSectionsProps} />
                    )
                    )
                }
                </div>
        )
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)