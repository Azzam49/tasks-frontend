import React, { useState } from 'react'
import TaskDatatable from '../components/TaskDatatable';

const CompletedTasks = () => {

    const [tasks, setTasks] = useState([
        {owner : "John Doe", title: "Complete the HTML coding assesment", tag: "Coding", created_at: "2023-04-25", status: "Completed"},
        {owner : "John Doe", title: "Complete the CSS coding assesment", tag: "Coding", created_at: "2023-04-21", status: "Completed"},
    ])

    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </symbol>
            </svg>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Completed Tasks</h1>
            </div>

            <TaskDatatable
                tableId={"completedTasksTable"}
                tasks={tasks}
                hasEdit={false}
                hasDelete={true}
                hasMarkDone={false}
            />
        </>
    )
}

export default CompletedTasks
