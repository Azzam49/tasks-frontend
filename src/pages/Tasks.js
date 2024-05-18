import React, { useState } from 'react'
import TaskModal from '../components/TaskModal';
import TaskDatatable from '../components/TaskDatatable';
import DatatableIcons from '../components/DatatableIcons';

const Tasks = () => {

    const [tasks, setTasks] = useState([
        {owner : "John Doe", title: "Complete the HTML coding assesment", tag: "Coding", created_at: "2023-04-25", status: "Completed"},
        {owner : "John Doe", title: "Complete the CSS coding assesment", tag: "Coding", created_at: "2023-04-21", status: "Completed"},
        {owner : "John Doe", title: "Complete the JS coding assesment", tag: "Coding", created_at: "2024-05-10", status: "Pending"},
    ])

    return (
        <div>

            <TaskModal
                modalId="createNewTaskModal"
                modalTitle="Create New Task"
            />
            <TaskModal
                modalId="editTaskModal"
                modalTitle="Edit Task"
            />

            <DatatableIcons />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tasks</h1>
            </div>

            <div className="container mt-4 mb-5">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-success ms-auto" data-bs-toggle="modal" data-bs-target="#createNewTaskModal">Create New Task</button>
                </div>
            </div>

            <TaskDatatable
                tableId={"tasksTable"}
                tasks={tasks}
                hasEdit={true}
                hasDelete={true}
            />
        </div>
    )
}

export default Tasks
