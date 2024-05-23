import React, { useState, useEffect, useContext } from 'react'
import TaskModal from '../components/TaskModal';
import TaskDatatable from '../components/TaskDatatable';
import DatatableIcons from '../components/DatatableIcons';
import { fetchData, deleteData, postPutData } from '../common/APIController';
// import { notifySuccess, notifyError } from '../common/Common';
import { UserLoginContext } from '../context/UserLoginProvider';

const Tasks = () => {

    const { token, setUserLoginChange } = useContext(UserLoginContext);

    console.log(`\n\n\nTasks Page, token : ${token}\n\n\n`)

    // const [tasks, setTasks] = useState([
    //     {owner : "John Doe", title: "Complete the HTML coding assesment", tag: "Coding", created_at: "2023-04-25", status: "Completed"},
    //     {owner : "John Doe", title: "Complete the CSS coding assesment", tag: "Coding", created_at: "2023-04-21", status: "Completed"},
    //     {owner : "John Doe", title: "Complete the JS coding assesment", tag: "Coding", created_at: "2024-05-10", status: "Pending"},
    // ])

    const [tasks, setTasks] = useState(null)

    // const [tags, setTags] = useState(["Important", "Common", "Easy"])
    const [tags, setTags] = useState(null)

    const [currentTaskId, setCurrentTaskId] = useState(null)
    //console.log(`\n\ncurrentTaskId: ${currentTaskId}\n\n`)



    async function fetchAndSetData() {
        const tasksData = await fetchData('get/tasks/', token, setUserLoginChange);
        const tagsData = await fetchData('get/tags/', token, setUserLoginChange);

        // console.log(`\ntagsData : ${tagsData}\n`);
        setTasks(tasksData);
        setTags(tagsData);
    }

    async function handleCreateTask(dataObject) {

        const apiURL = 'post/task/';

        await postPutData('POST', apiURL, dataObject, token, setUserLoginChange);

        //refresh datatable
        fetchAndSetData();
    }

    async function handleUpdateTask(dataObject) {

        const apiURL = `put/task/${dataObject.id}/`;

        await postPutData('PUT', apiURL, dataObject, token, setUserLoginChange);

        //send notifcation
        // notifySuccess('Task was updated successfully!')

        //refresh datatable
        fetchAndSetData();

        //reset task id
        //so on next selection of task to edit if it was same task,
            //then useEffect of modal can still fetch and populate fields
        setCurrentTaskId(null)
    }



    async function handleDelete(task_id) {
        // alert(`Delete the task id ${task_id}`)
        await deleteData('delete/task/' + task_id, token, setUserLoginChange);

        //refersh table with new data
        fetchAndSetData();

        //send notifcation
        // notifySuccess('Task was deleted successfully!')
    }

    useEffect(() => {
        // this makes error, because setTasks/setTags will store a promise at first before data is complete fetched from api
        // const tasksData = fetchData('/get/tasks/');
        // const tagsData = fetchData('/get/tags/');

        // console.log(`\ntagsData : ${tagsData}\n`)
        // setTasks(tasksData);
        // setTags(tagsData);

        fetchAndSetData();
    }, [])

    return (
        <div>

            <TaskModal
                modalId="createNewTaskModal"
                modalTitle="Create New Task"
                // tags={tags}
                tags={tags || []}
                handleCreateTask={handleCreateTask}
                modalType={"create"}
            />
            <TaskModal
                modalId="editTaskModal"
                modalTitle="Edit Task"
                // tags={tags}
                tags={tags || []}
                handleUpdateTask={handleUpdateTask}
                modalType={"update"}
                currentTaskId={currentTaskId}
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

            {/* <TaskDatatable
                tableId={"tasksTable"}
                tasks={tasks}
                hasEdit={true}
                hasDelete={true}
            /> */}

            {/* {tasks !== null ?  <TaskDatatable
                tableId={"tasksTable"}
                tasks={tasks}
                hasEdit={true}
                hasDelete={true}
            /> : null} */}

            {tasks &&  <TaskDatatable
                tableId={"tasksTable"}
                tasks={tasks}
                hasEdit={true}
                hasDelete={true}
                handleDelete={handleDelete}
                setCurrentTaskId={setCurrentTaskId}
            />}
        </div>
    )
}

export default Tasks
