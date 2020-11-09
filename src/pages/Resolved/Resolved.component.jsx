import { useEffect } from 'react';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import Ticket from '../../component/Ticket/Ticket.component';
import { asyncGetMoreResolved, asyncGetResolved } from './../../Redux/Resolved/resolved.actions';
import { createStructuredSelector } from 'reselect';
import { selectUserDetail, selectIsGettingUserDetail } from './../../Redux/user/user.selectors';
import { selectResolvedTasks } from '../../Redux/Resolved/resolved.selectors';
import { selectResolvedPreviousDoc, selectIsGettingResolved } from './../../Redux/Resolved/resolved.selectors';
import Loader from 'react-loader-spinner';
import TicketLoader from './../../component/TicketLoader/TicketLoader.component';
import MoreButton from '../../component/MoreButton/MoreButton.component';

const Resolved = ({ userDetail, getResolvedTasks, resolvedTasks, prevDoc,
    isGettingResolved, isGettingUserDetail, getMoreResolvedTasks }) => {

    useEffect(() => {
        (async () => {
            userDetail && await getResolvedTasks(`${userDetail.firstName} ${userDetail.surname}`)
        })();
    }, [userDetail, getResolvedTasks]);

    const getMoreTasks = async () => {
        await getMoreResolvedTasks(`${userDetail.firstName} ${userDetail.surname}`, prevDoc);
    }

    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Resolved Tasks</h2>
                <AiOutlineClockCircle className="pending__icon" />
            </div>
            {isGettingUserDetail ?
                <div className="sidebar__user--text" style={{marginTop: '5.3rem'}}>
                    <Loader
                        type="Oval"
                        color="#0A0A56"
                        height={70}
                        width={70}
                    />
                </div> : isGettingResolved ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> : resolvedTasks &&
                <div className="tickets__container">
                    {resolvedTasks.map(task => <Ticket key={task.id} ticket={task} type={'resolved'} />)}
                    {resolvedTasks && resolvedTasks.length >= 20 && prevDoc !== undefined &&
                    <div onClick={getMoreTasks} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div>}
                </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    resolvedTasks: selectResolvedTasks,
    prevDoc: selectResolvedPreviousDoc,
    isGettingResolved: selectIsGettingResolved,
    isGettingUserDetail: selectIsGettingUserDetail
});

const mapDispatchToProps = dispatch => ({
    getResolvedTasks: staffName => dispatch(asyncGetResolved(staffName)),
    getMoreResolvedTasks: (staffName, prevDoc) => dispatch(asyncGetMoreResolved(staffName, prevDoc))
});

export default connect(mapStateToProps, mapDispatchToProps) (Resolved);
