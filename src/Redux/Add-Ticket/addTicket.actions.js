import Swal from 'sweetalert2';
import { firestore, FieldValue } from '../../firebase/firebase.utils';
import { addTicketActionTypes } from './addTicket.types';

const addTicketStart = () => ({
    type: addTicketActionTypes.ADD_TICKET_START
});

const addTicketSuccess = () => ({
    type: addTicketActionTypes.ADD_TICKET_SUCCESS
});

const addTicketFailure = errMsg => ({
    type: addTicketActionTypes.ADD_TICKET_FAILURE,
    payload: errMsg
});

export const asyncAddTicket = ticket => {
    return async dispatch => {
        try {
            const { name, email, designation, title, task } = ticket;
            dispatch(addTicketStart());
            const ticketRef = firestore.collection("tickets");
            const createdAt = FieldValue
            await ticketRef.add({
                senderName: name,
                senderEmail: email,
                senderDesignation: designation,
                completed: false,
                title,
                task,
                resolved: false,
                createdAt
            });
            dispatch(addTicketSuccess());
            Swal.fire(
                'Done!',
                `New Ticket Raised`,
                'success'
            );
        } catch (errMsg) {
            dispatch(addTicketFailure(errMsg))
        }
    }
}
