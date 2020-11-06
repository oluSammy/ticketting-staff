import React, { useState, useEffect } from 'react';
import './NewTask.styles.scss';
import { IoIosCreate } from 'react-icons/io';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserDetail, selectCurrentUser } from './../../Redux/user/user.selectors';
import { asyncAddTicket } from './../../Redux/Add-Ticket/addTicket.actions';
import { selectIsAddingTicket } from '../../Redux/Add-Ticket/addTicket.selectors';


const NewTask = ({ userDetail, currentUser, addTask, isAddingTickets }) => {
    const [ticket, setTicket] = useState({ name: '', email: currentUser ? currentUser.email : '',
    designation: '', title: '', task: '' });

    useEffect(() => {
        userDetail &&
        setTicket(ticket => ({ ...ticket, name: `${userDetail.firstName} ${userDetail.surname}`,
        designation: userDetail.designation }));
    }, [userDetail]);

    const handleChange = e => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    }

    const createTask = async e => {
        e.preventDefault();
        await addTask(ticket);
        console.log(ticket);
        setTicket({ ...ticket, title: '', task: '' });
    }

    return (
        <div className="new-task">
            <div className="new-task__header">
                <h2 className="new-task__heading">Raise A Ticket</h2>
                <IoIosCreate className="new-task__heading-icon" />
            </div>
            <form onSubmit={createTask} className="new-task__form">
                <div className="new-task__form-group">
                    <label htmlFor="name" className="new-task__label">Name:</label>
                    <input type="text" className="new-task__input" id="name" name="name"
                    readOnly value={ticket.name} required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="email" className="new-task__label">Email:</label>
                    <input type="email" className="new-task__input" id="email" name="email"
                    readOnly value={ticket.email} required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="designation" className="new-task__label">Designation:</label>
                    <input type="text" className="new-task__input" id="designation" name="designation"
                    readOnly required value={ticket.designation} />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="title" className="new-task__label">Title:</label>
                    <input onChange={handleChange}
                    type="text" className="new-task__input" id="title" name="title" required value={ticket.title} />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="task" className="new-task__label">Task:</label>
                    <textarea onChange={handleChange} className="new-task__input" name="task" id="task" cols="30" rows="4" required
                    style={{padding: '1rem', fontSize: '1.9rem'}} value={ticket.task} />
                </div>
                {isAddingTickets ?
                <button className="new-task__btn">wait</button> :
                <input type="submit" value="Submit" className="new-task__btn" />
                }
            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    currentUser: selectCurrentUser,
    isAddingTickets: selectIsAddingTicket
});

const mapDispatchToProps = dispatch => ({
    addTask: ticket => dispatch(asyncAddTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchToProps) (NewTask)
