import React from 'react'
import ProjectPreview from '../../components/projectPreview/projectPreview.component';
import { ExplorePage, ProjectsContainer, SearchBar } from './explore.styles';
import {exploreImages} from '../../utils/constants';

const Explore = () => {
    return (
        <ExplorePage>
            <SearchBar type="text" placeholder='Search projects'/>
            <ProjectsContainer>
                {
                    exploreImages.map(img => <ProjectPreview imageUrl={img}/>)
                }
            </ProjectsContainer>
        </ExplorePage>
    )
}

export default Explore;
