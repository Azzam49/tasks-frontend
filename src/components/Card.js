import React from 'react'

const Card = ({cardHeader, cardTitle, bgColor}) => {
    return (
        <>
            <div className={`card text-bg-${bgColor} mb-3`} style={{ maxWidth: '18rem' }}>
                <div className="card-header">{cardHeader}</div>
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                </div>
            </div>
        </>
    )
}

export default Card
