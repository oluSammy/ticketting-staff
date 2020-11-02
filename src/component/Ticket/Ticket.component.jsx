import React from 'react';
import './Ticket.styles.scss';
import { Link } from 'react-router-dom';


const Ticket = () => {
    return (
        <Link to="/ticket/ticket" className="ticket">
            <div className="ticket__header">
                <h4 className="ticket__status">Completed <span></span> </h4> :
                {/* <h4 className="ticket__status">Incomplete <span></span> </h4> */}
                <div className="ticket__assigned-to">
                    <span>Assigned To &rarr; </span>
                    <h6 className="ticket__staff-assigned">lorem lorem</h6>
                </div>
            </div>
            <h3 className="ticket__title">Lorem ipsum dolor sit amet consectetur.</h3>
            <p className="ticket__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quis!</p>
            <div className="ticket__sender">
                <span className="ticket__raised-by ticket__symbol">Raised by </span>
                <h3 className="ticket__sender-name">lorem Lorem.</h3>
            </div>
            <div className="ticket__details">
                <h5 className="ticket__created">Created - Nov 3 2020</h5>
                    <h6 className="ticket__assigned"> Nov 3 2020</h6> :
                    <h6 className="ticket__assigned"> Nov 3 2020</h6>
            </div>
        </Link>
    )
}

export default Ticket
