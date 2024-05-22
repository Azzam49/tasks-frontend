import React, { useEffect } from 'react'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

const TaskDatatable = ({tableId, tasks, hasEdit=false, hasDelete=false, hasMarkDone=false, handleDelete, setCurrentTaskId}) => {

    useEffect(() => {
        // Initialize DataTable after the component is mounted
        $(`#${tableId}`).DataTable();
    }, []);

    return (
        <div>
            <table id={tableId} className="table table-striped" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Task Title</th>
                        <th>Tag</th>
                        <th>Created At</th>
                        <th>Status</th>
                        {hasEdit && <th>Edit</th>}
                        {hasDelete && <th>Delete</th>}
                        {hasMarkDone && <th>Mark Done</th>}
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.owner}</td>
                            <td>{task.title}</td>
                            <td><span className="badge text-bg-secondary">{task.tag}</span></td>
                            <td>{task.created_at}</td>
                            <td>
                                {/* {
                                    task.status === 'Completed' ?
                                        <span className="badge text-bg-success">{task.status}</span>
                                    :
                                        <span className="badge text-bg-warning">{task.status}</span>
                                } */}
                                <span className={`badge ${task.status === 'Completed' ? 'text-bg-success' : 'text-bg-warning'}`}>
                                    {task.status}
                                </span>
                            </td>
                            {hasEdit &&
                                <td>
                                    <button onClick={() => setCurrentTaskId(task.id)} type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editTaskModal">
                                        <svg className="bi"><use xlinkHref="#pencil-square"/></svg>
                                    </button>
                                </td>
                            }
                            {hasDelete &&
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(task.id)}>
                                        <svg className="bi"><use xlinkHref="#trash"/></svg>
                                    </button>
                                </td>
                            }
                            {hasMarkDone &&
                                <td>
                                    <button type="button" className="btn btn-success">
                                    <svg className="bi"><use xlinkHref="#check-circle"/></svg>
                                    </button>
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Owner</th>
                        <th>Task Title</th>
                        <th>Tag</th>
                        <th>Created At</th>
                        <th>Status</th>
                        {hasEdit && <th>Edit</th>}
                        {hasDelete && <th>Delete</th>}
                        {hasMarkDone && <th>Mark Done</th>}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TaskDatatable
