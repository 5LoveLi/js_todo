import React from 'react';
import './Task.css';

interface ITaskProps {
    status: boolean,
    name: string,
    id: string,
}

export const Task = ({ status, name, id }: ITaskProps) => {
    return (<>
    <div>
        <input type='checkbox' id={id} checked={status}/>{name}
    </div>
    </>
    )
}