import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import { Pie, Line } from 'react-chartjs-2';

// required by 'react-chartjs-2' Charts
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// Register components
ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Home = () => {

    const [totalTasksCount, setTotalTasksCount] = useState(0)
    const [pendingTasksCount, setPendingTasksCount] = useState(0)
    const [completedTasksCount, setCompletedTasksCount] = useState(0)

    const [tagsChartData, setTagsChartData] = useState({});
    const [tasksLineData, setTasksLineData] = useState({})

    useEffect(() => {
        const fetchChartsData = async () => {
          // Mock API response for charts
          const data = {
            total_tasks_count: 17,
            pending_tasks_count: 10,
            completed_tasks_count: 7,

            tag_labels: ["Important", "Common", "Easy"],
            tag_values: [10, 4, 3],

            completed_task_labels: ['May 16', 'May 17', 'May 18', 'May 19', 'May 20',
            'May 21', 'May 22', 'May 23', 'May 24', 'May 25'],
            completed_task_values: [0, 0, 2, 0, 0, 2, 1, 0, 0, 2],
          };

          setTotalTasksCount(data.total_tasks_count);
          setPendingTasksCount(data.pending_tasks_count);
          setCompletedTasksCount(data.completed_tasks_count);

          setTagsChartData({
            labels: data.tag_labels,
            datasets: [
              {
                label: 'Dataset Label',
                data: data.tag_values,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
              },
            ],
          });

          setTasksLineData({
            labels: data.completed_task_labels,
            datasets: [
              {
                label: 'Tasks Completed',
                data: data.completed_task_values,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
              },
            ],
          });

        };

        fetchChartsData();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-sm-8 col-md-4">
                        {/* <div className="card text-bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">No. Tasks</div>
                        <div className="card-body">
                            <h5 className="card-title">546 Task</h5>
                        </div>
                        </div> */}
                        <Card
                            cardHeader="No. Tasks"
                            cardTitle={`${totalTasksCount} Task`}
                            bgColor="primary"
                        />
                    </div>

                    <div className="col-sm-8 col-md-4">
                        {/* <div className="card text-bg-warning mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">No. Pending Tasks</div>
                        <div className="card-body">
                            <h5 className="card-title">100 Task</h5>
                        </div>
                        </div> */}
                        <Card
                            cardHeader="No. Pending Tasks"
                            cardTitle={`${pendingTasksCount} Task`}
                            bgColor="warning"
                        />
                    </div>

                    <div className="col-sm-8 col-md-4">
                        {/* <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">No. Completed Tasks</div>
                        <div className="card-body">
                            <h5 className="card-title">446 Task</h5>
                        </div>
                        </div> */}
                        <Card
                            cardHeader="No. Completed Tasks"
                            cardTitle={`${completedTasksCount} Task`}
                            bgColor="success"
                        />
                    </div>
                </div>
            </div>


            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '100%' }}>
                            {tagsChartData.labels ? <Pie data={tagsChartData} /> : <></>}
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                    <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '100%' }}>
                        {tasksLineData.labels ? <Line data={tasksLineData} /> : <></>}
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
