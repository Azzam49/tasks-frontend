import React from 'react'
import Card from '../components/Card';

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>

            <div class="container">
                <div class="row">

                    <div className="col-sm-8 col-md-4">
                        {/* <div className="card text-bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">No. Tasks</div>
                        <div className="card-body">
                            <h5 className="card-title">546 Task</h5>
                        </div>
                        </div> */}
                        <Card
                            cardHeader="No. Tasks"
                            cardTitle="546 Task"
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
                            cardTitle="100 Task"
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
                            cardTitle="446 Task"
                            bgColor="success"
                        />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home
