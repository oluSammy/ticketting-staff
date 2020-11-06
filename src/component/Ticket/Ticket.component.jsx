import React from 'react';
import './Ticket.styles.scss';
import { Link } from 'react-router-dom';
import { timeStampToDate } from '../../utility functions/utilities';
import { limitSentence } from './../../utility functions/utilities';


const Ticket = ({ ticket }) => {
    const { createdAt, title, task, assigned, assignedTo } = ticket.data;
    return (
        <Link to="/ticket/ticket" className="ticket">
            <div className="ticket__header">
                <h4 className="ticket__status">Pending <span></span> </h4> :
                <div className="ticket__assigned-to">
                    {assigned ?
                        <>
                            <span>Assigned To &rarr; </span>
                            <h6 className="ticket__staff-assigned">{assignedTo}</h6>
                        </> :
                        <h6 className="ticket__staff-assigned">Not Assigned Yet</h6>
                    }
                </div>
            </div>
            <h3 className="ticket__title">{title}</h3>
            <p className="ticket__content">{limitSentence(task)}</p>
            <div className="ticket__sender">
                <span className="ticket__raised-by ticket__symbol">Raised by </span>
                <h3 className="ticket__sender-name">Me</h3>
            </div>
            <div className="ticket__details">
                <h5 className="ticket__created">Created - {timeStampToDate(createdAt)}</h5>
            </div>
        </Link>
    )
}

export default Ticket
