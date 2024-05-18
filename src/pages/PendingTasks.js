import React, { useState } from 'react'
import TaskDatatable from '../components/TaskDatatable';
import DatatableIcons from '../components/DatatableIcons';

const PendingTasks = () => {

    const [tasks, setTasks] = useState([
        {owner : "John Doe", title: "Complete the JS coding assesment", tag: "Coding", created_at: "2024-05-10", status: "Pending"},
    ])

    return (
        <>

            <DatatableIcons />

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
