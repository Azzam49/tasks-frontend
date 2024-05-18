import React, { useState } from 'react'
import TaskDatatable from '../components/TaskDatatable';
import DatatableIcons from '../components/DatatableIcons';

const CompletedTasks = () => {

    const [tasks, setTasks] = useState([
        {owner : "John Doe", title: "Complete the HTML coding assesment", tag: "Coding", created_at: "2023-04-25", status: "Completed"},
        {owner : "John Doe", title: "Complete the CSS coding assesment", tag: "Coding", created_at: "2023-04-21", status: "Completed"},
    ])

    return (
        <>

            <DatatableIcons />

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
