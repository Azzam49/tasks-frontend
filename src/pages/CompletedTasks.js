import React, { useState, useEffect, useContext } from 'react'
import TaskDatatable from '../components/TaskDatatable';
import DatatableIcons from '../components/DatatableIcons';
import { fetchData, deleteData } from '../common/APIController';
import { notifySuccess } from '../common/Common';
import { UserLoginContext } from '../context/UserLoginProvider';

const CompletedTasks = () => {

    const { token } = useContext(UserLoginContext);

    const [tasks, setTasks] = useState(null)

    async function fetchAndSetData() {
        const tasksData = await fetchData('get/completed-tasks/', token);

        setTasks(tasksData);
    }

    useEffect(() => {
        fetchAndSetData();
    }, [])

    async function handleDelete(task_id) {
        // alert(`Delete the task id ${task_id}`)
        await deleteData('delete/task/' + task_id, token);

        //refersh table with new data
        fetchAndSetData();

        //send notifcation
        notifySuccess('Task was deleted successfully!')
    }

    return (
        <>

            <DatatableIcons />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Completed Tasks</h1>
            </div>

            {tasks && <TaskDatatable
                tableId={"completedTasksTable"}
                tasks={tasks}
                hasEdit={false}
                hasDelete={true}
                handleDelete={handleDelete}
                hasMarkDone={false}
            />}
        </>
    )
}

export default CompletedTasks
