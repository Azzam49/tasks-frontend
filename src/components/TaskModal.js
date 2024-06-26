import React, { useEffect, useState, useContext } from 'react'
import { fetchData } from '../common/APIController';
import { UserLoginContext } from '../context/UserLoginProvider';

const TaskModal = ({modalType, modalId, modalTitle, tags, handleCreateTask, handleUpdateTask, currentTaskId}) => {

    const { token, userId, setUserLoginChange } = useContext(UserLoginContext);

    const [taskTitle, setTaskTitle] = useState(null)
    const [taskDescription, setTaskDescription] = useState(null)
    const [taskTag, setTaskTag] = useState(null)

    const clearData = () => {
         //empty fields
         setTaskTitle("");
         setTaskDescription("");
         setTaskTag("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataObject = {
            owner_id: userId, //todo : change this
            title: taskTitle,
            description: taskDescription,
            tag_id: taskTag, //1, //todo : change this
        }

        if(modalType == "create"){
            handleCreateTask(dataObject);
        }
        if(modalType == "update"){
            dataObject.id = currentTaskId;
            handleUpdateTask(dataObject);
        }

       clearData();
    }

    // console.log(`\n\ntitle: ${taskTitle}\ndescription: ${taskDescription}\ntag: ${taskTag}\n\n`)


    async function fetchAndSetData() {
        const taskData = await fetchData(`get/task/${currentTaskId}/`, token, setUserLoginChange);
        // console.log(`\n\ntaskData: ${taskData}\n\n`)

        setTaskTitle(taskData.title);
        setTaskDescription(taskData.description);
        setTaskTag(taskData.tag_id);
    }

    useEffect(() => {
        // console.log(`\n\nmodalType: ${modalType}\ncurrentTaskId: ${currentTaskId}\n\n`)
        if(modalType == 'update' && currentTaskId){
            fetchAndSetData();
        }
    }, [currentTaskId])

    return (
        <div className="modal fade" id={modalId} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" >{modalTitle}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form method="post">
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="task-title" className="col-form-label">Title</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="task-title"
                                name="task-title"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="task-description" className="col-form-label">Description</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="task-description"
                                name="task-description"
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="task-tag" className="form-label">Tag</label>
                            <select
                                className="form-select"
                                id="task-tag"
                                required
                                value={taskTag}
                                onChange={(e) => setTaskTag(e.target.value)}>
                                <option value="">Choose...</option>
                                {tags.map((tag, index ) => (
                                    <option key={index} value={tag.id}>{tag.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => clearData()}>Close</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskModal
