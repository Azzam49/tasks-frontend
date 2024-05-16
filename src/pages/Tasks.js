import React, { useEffect } from 'react'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

const Tasks = () => {
    useEffect(() => {
        // Initialize DataTable after the component is mounted
        $('#tasksTable').DataTable();
      }, []);

    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </symbol>
                <symbol id="pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </symbol>
            </svg>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tasks</h1>
            </div>

            <table id="tasksTable" className="table table-striped" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Task Title</th>
                        <th>Tag</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Complete the HTML coding assesment</td>
                        <td><span className="badge text-bg-secondary">Sport</span></td>
                        <td>2023-04-25</td>
                        <td><span className="badge text-bg-success">Completed</span></td>
                        <td>
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editTaskModal">
                            <svg className="bi"><use xlinkHref="#pencil-square"/></svg>
                        </button>
                        </td>
                        <td>
                        <button type="button" className="btn btn-danger">
                            <svg className="bi"><use xlinkHref="#trash"/></svg>
                        </button>
                        </td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Complete the CSS coding assesment</td>
                        <td><span className="badge text-bg-secondary">Coding</span></td>
                        <td>2023-04-21</td>
                        <td><span className="badge text-bg-success">Completed</span></td>
                        <td>
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editTaskModal">
                            <svg className="bi"><use xlinkHref="#pencil-square"/></svg>
                        </button>
                        </td>
                        <td>
                        <button type="button" className="btn btn-danger">
                            <svg className="bi"><use xlinkHref="#trash"/></svg>
                        </button>
                        </td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Complete the JS coding assesment</td>
                        <td><span className="badge text-bg-secondary">Coding</span></td>
                        <td>2021-04-21</td>
                        <td><span className="badge text-bg-warning">Pending</span></td>
                        <td>
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editTaskModal">
                            <svg className="bi"><use xlinkHref="#pencil-square"/></svg>
                        </button>
                        </td>
                        <td>
                        <button type="button" className="btn btn-danger">
                            <svg className="bi"><use xlinkHref="#trash"/></svg>
                        </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Owner</th>
                        <th>Task Title</th>
                        <th>Tag</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Tasks
