import React, { useEffect } from 'react'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

const TaskDatatable = ({tasks, hasEdit, hasDelete}) => {

    useEffect(() => {
        // Initialize DataTable after the component is mounted
        $('#tasksTable').DataTable();
    }, []);

    return (
        <>
            <table id="tasksTable" className="table table-striped" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Task Title</th>
                        <th>Tag</th>
                        <th>Created At</th>
                        <th>Status</th>
                        {hasEdit && <th>Edit</th>}
                        {hasDelete && <th>Delete</th>}
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
                            <td>
                            {hasEdit &&
                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editTaskModal">
                                    <svg className="bi"><use xlinkHref="#pencil-square"/></svg>
                                </button>
}
                            </td>
                            {hasDelete &&
                                <td>
                                <button type="button" className="btn btn-danger">
                                    <svg className="bi"><use xlinkHref="#trash"/></svg>
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
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default TaskDatatable
