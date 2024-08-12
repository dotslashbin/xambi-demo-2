import React from 'react';

export default function Pill({ label, onDelete }) {
    return (
        <div className='pill'>
            <span>{ label }</span>
            <button type='button' onClick={() => { onDelete(label) }}>X</button>
        </div>
    )
}