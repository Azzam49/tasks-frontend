import React from 'react'

const TaskModal = ({modalId, modalTitle}) => {
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
                            <input required type="text" className="form-control" id="task-title" name="task-title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="task-description" className="col-form-label">Description</label>
                            <input required type="text" className="form-control" id="task-description" name="task-description"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="task-tag" className="form-label">Tag</label>
                            <select className="form-select" id="task-tag" required>
                            <option value="">Choose...</option>
                            <option value="Important">Important</option>
                            <option value="Common">Common</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskModal
