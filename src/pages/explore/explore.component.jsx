import React,{useState,useEffect} from 'react'
import ProjectPreview from '../../components/projectPreview/projectPreview.component';
import { ExplorePage, ProjectsContainer, SearchBar } from './explore.styles';
import {exploreImages} from '../../utils/constants';

import useProjects from '../../hooks/useProjects';

const Explore = () => {
    const [searchText,setSearchText] = useState("");
    const {getExploreProjects,projects} = useProjects();


    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(()=>{
        getExploreProjects();
    },[])
    

    return (
        <ExplorePage>
            <SearchBar type="text" placeholder='Search projects' value={searchText} onChange={handleSearch}/>
            <ProjectsContainer>
                {/* {
                    exploreImages.map(img => <ProjectPreview imageUrl={img}/>)
                } */}
                {
                    projects.map(project => <ProjectPreview imageUrl={project.images[0]} project={project}/>)
                }
            </ProjectsContainer>
        </ExplorePage>
    )
}

export default Explore;
