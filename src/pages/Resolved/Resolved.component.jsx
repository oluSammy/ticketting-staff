import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Ticket from '../../component/Ticket/Ticket.component';

const Resolved = () => {

    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Resolved Tasks</h2>
                <AiOutlineClockCircle className="pending__icon" />
            </div>
            <div className="tickets__container">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </div>
    )
}


export default Resolved;
