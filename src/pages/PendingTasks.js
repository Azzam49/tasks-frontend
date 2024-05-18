import React from 'react'
import TaskDatatable from '../components/TaskDatatable';

const PendingTasks = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Pending Tasks</h1>
            </div>

            <TaskDatatable
                tableId={"pendingTasksTable"}
                tasks={[]}
                hasEdit={false}
                hasDelete={false}
                hasMarkDone={true}
            />
        </>
    )
}

export default PendingTasks
