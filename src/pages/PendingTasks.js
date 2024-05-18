import React, { useState } from 'react'
import TaskDatatable from '../components/TaskDatatable';

const PendingTasks = () => {

    const [tasks, setTasks] = useState([
        {owner : "John Doe", title: "Complete the JS coding assesment", tag: "Coding", created_at: "2024-05-10", status: "Pending"},
    ])

    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
            <symbol id="check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </symbol>
            </svg>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Pending Tasks</h1>
            </div>

            <TaskDatatable
                tableId={"pendingTasksTable"}
                tasks={tasks}
                hasEdit={false}
                hasDelete={false}
                hasMarkDone={true}
            />
        </>
    )
}

export default PendingTasks
