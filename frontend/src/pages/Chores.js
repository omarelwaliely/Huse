import React, { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom'

function Chores(props) {
    if (props.name) {
        return (
            <div>test1212</div>
        );
    }
    else {
        return (
            <Navigate to="/login" />
        );
    }
}
export default Chores