import React from 'react'
import {Modal} from '@mui/material'
import {CreateProjectModalContainer} from './createProjectModal.styles';

const CreateProjectModal = ({state,toggleModal}) => {
    return (
        <Modal open={state} onClose={toggleModal}>
            <CreateProjectModalContainer>
                weoifjwe
            </CreateProjectModalContainer>
        </Modal>
    )
}

export default CreateProjectModal
