import React, { useState } from 'react'
import { postData } from '../common/APIController';
import { notifySuccess } from '../common/Common';

const TaskModal = ({modalId, modalTitle, tags}) => {

    const [taskTitle, setTaskTitle] = useState(null)
    const [taskDescription, setTaskDescription] = useState(null)
    const [taskTag, setTaskTag] = useState(null)

    async function handleCreate() {

        const apiURL = 'post/task/';

        const dataObject = {
            owner_id: 1, //todo : change this
            title: taskTitle,
            description: taskDescription,
            tag_id: 1, //todo : change this
        }

        await postData(apiURL, dataObject);

        //send notifcation
        notifySuccess('User was created successfully!')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleCreate();
    }

    console.log(`\n\ntitle: ${taskTitle}\ndescription: ${taskDescription}\ntag: ${taskTag}\n\n`)

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
                                    <option key={index} value={tag}>{tag}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskModal
