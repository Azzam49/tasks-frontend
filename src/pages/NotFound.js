import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        color: '#343a40'
    },
    title: {
        fontSize: '6rem',
        margin: '0'
    },
    message: {
        fontSize: '1.5rem',
        margin: '0'
    }
};

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Page Not Found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
};


export default NotFound;
