import React, { useState, useEffect } from 'react'
import TaskDatatable from '../components/TaskDatatable';
import DatatableIcons from '../components/DatatableIcons';
import { fetchData, postPutData } from '../common/APIController';
import { notifySuccess } from '../common/Common';

const PendingTasks = () => {

    // const [tasks, setTasks] = useState([
    //     {owner : "John Doe", title: "Complete the JS coding assesment", tag: "Coding", created_at: "2024-05-10", status: "Pending"},
    // ])
    const [tasks, setTasks] = useState(null)

    async function fetchAndSetData() {
        const tasksData = await fetchData('get/pending-tasks/');

        setTasks(tasksData);
    }

    useEffect(() => {
        fetchAndSetData();
    }, [])


    async function handleMarkDone(task_id) {

        const apiURL = `put/task-to-completed/${task_id}/`;

        await postPutData('PUT', apiURL);

        //send notifcation
        notifySuccess('Task was updated successfully!')

        //refresh datatable
        fetchAndSetData();
    }

    return (
        <>

            <DatatableIcons />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Pending Tasks</h1>
            </div>

            {tasks &&  <TaskDatatable
                tableId={"pendingTasksTable"}
                tasks={tasks}
                hasEdit={false}
                hasDelete={false}
                hasMarkDone={true}
                handleMarkDone={handleMarkDone}
            />}
        </>
    )
}

export default PendingTasks
