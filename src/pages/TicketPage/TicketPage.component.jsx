import React, { useEffect } from 'react';
import './TicketPage.styles.scss';

const TicketPage = () => {

    useEffect(() => {
        const getTicket = async () => {

        }
        getTicket();
    }, []);

    return (
        <div className="ticket-page">
            <div className="ticket-page__header">
                <div className="ticket-page__header-icon">&#10021;</div>
                <div className="ticket-page__header-text">Ticket</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Title:</h6>
                <div className="ticket-page__key">Lorem ipsum dolor sit.</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Task:</h6>
                <div className="ticket-page__key">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Raised By:</h6>
                <div className="ticket-page__key">Olu Jacob</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Status:</h6>
                <div className="ticket-page__key">
                    <div className="ticket-page__text">Completed</div>
                </div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Deadline:</h6>
                <div className="ticket-page__key">Oct 20 2020</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Completed On:</h6>
                <div className="ticket-page__key">Oct 20 2020</div>
            </div>
        </div>
    )
}


export default TicketPage;
