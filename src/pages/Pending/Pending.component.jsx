import React from 'react';
import './pending.styles.scss';
import { BiCheckDouble } from 'react-icons/bi';
import Ticket from '../../component/Ticket/Ticket.component';
import MoreButton from '../../component/MoreButton/MoreButton.component';
import TicketLoader from '../../component/TicketLoader/TicketLoader.component';

const Pending = () => {

    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Pending Tasks</h2>
                <BiCheckDouble className="pending__icon" />
            </div>
            <div className="tickets__container">
                <Ticket />
                <Ticket />
                <Ticket />
                <TicketLoader />
                <TicketLoader />
                <TicketLoader />
                <MoreButton />
            </div>
        </div>
    )
}


export default Pending;
