import React from 'react'
import ProjectPreview from '../../components/projectPreview/projectPreview.component';
import { ExplorePage, ProjectsContainer } from './explore.styles';
import {exploreImages} from '../../utils/constants';

const Explore = () => {
    return (
        <ExplorePage>
            <input type="text" />
            <ProjectsContainer>
                {
                    exploreImages.map(img => <ProjectPreview imageUrl={img}/>)
                }
            </ProjectsContainer>
        </ExplorePage>
    )
}

export default Explore;
