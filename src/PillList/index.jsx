import React from 'react';
import Pill from './Pill'

export default function PillList({ collection, handleDelete }) {
    return (
        <div className="pill-list-container">
            { collection.map((type) => <Pill label={type} onDelete={handleDelete} />)}
        </div>
    )
}