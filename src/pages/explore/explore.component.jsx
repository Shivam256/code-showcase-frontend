import React,{useState} from 'react'
import ProjectPreview from '../../components/projectPreview/projectPreview.component';
import { ExplorePage, ProjectsContainer, SearchBar } from './explore.styles';
import {exploreImages} from '../../utils/constants';

const Explore = () => {
    const [searchText,setSearchText] = useState("");


    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <ExplorePage>
            <SearchBar type="text" placeholder='Search projects' value={searchText} onChange={handleSearch}/>
            <ProjectsContainer>
                {
                    exploreImages.map(img => <ProjectPreview imageUrl={img}/>)
                }
            </ProjectsContainer>
        </ExplorePage>
    )
}

export default Explore;
