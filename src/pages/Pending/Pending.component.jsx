import React, { useEffect } from 'react';
import './pending.styles.scss';
import { BiCheckDouble } from 'react-icons/bi';
import Ticket from '../../component/Ticket/Ticket.component';
import MoreButton from '../../component/MoreButton/MoreButton.component';
import TicketLoader from '../../component/TicketLoader/TicketLoader.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsGettingUserDetail, selectUserDetail } from './../../Redux/user/user.selectors';
import { asyncGetMorePending, asyncGetPending } from './../../Redux/pending/pending.actions';
import Loader from 'react-loader-spinner';
import { selectIsGettingPending, selectPendingTasks, selectPendingPrevDoc }
from './../../Redux/pending/pending.selectors';
import EmptyTasks from './../../component/EmptyTasks/EmptyTasks.component';

const Pending = ({ userDetail, getPendingTasks, isGettingUserDetail,
    isGettingPending, pendingTasks, prevDoc, getMorePendingTasks }) => {

    useEffect(() => {
        const getTasks = async () => {
            userDetail && await getPendingTasks(`${userDetail.firstName} ${userDetail.surname}`)
        }
        !pendingTasks && getTasks();
    }, [userDetail, getPendingTasks, pendingTasks]);

    const getMoreTasks = async () => {
        await getMorePendingTasks(`${userDetail.firstName} ${userDetail.surname}`, prevDoc);
    }

    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Pending Tasks</h2>
                <BiCheckDouble className="pending__icon" />
            </div>
            {isGettingUserDetail ?
                <div className="sidebar__user--text" style={{marginTop: '5.3rem'}}>
                    <Loader
                        type="Oval"
                        color="#0A0A56"
                        height={70}
                        width={70}
                    />
                </div> : isGettingPending ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> : pendingTasks &&
                <div className="tickets__container">
                    {pendingTasks.map(task => <Ticket key={task.id} ticket={task} type={'pending'} />)}
                    {pendingTasks && pendingTasks.length >= 20 && prevDoc !== undefined &&
                    <div onClick={getMoreTasks} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div>}
                </div>
            }
            {pendingTasks && !pendingTasks.length &&
                <div className="empty-task-container">
                    <EmptyTasks title='pending' />
                </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    isGettingUserDetail: selectIsGettingUserDetail,
    isGettingPending: selectIsGettingPending,
    pendingTasks: selectPendingTasks,
    prevDoc: selectPendingPrevDoc
});

const mapDispatchToProps = dispatch => ({
    getPendingTasks: staffName => dispatch(asyncGetPending(staffName)),
    getMorePendingTasks: (staffName, prevDoc) => dispatch(asyncGetMorePending(staffName, prevDoc))
});


export default connect(mapStateToProps, mapDispatchToProps) (Pending);
