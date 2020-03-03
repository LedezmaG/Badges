import React from 'react';

class BadgesList extends React.Component{

    render(){
        return (

            <ul className="list-unstyled ">
                {this.props.badges.map((badge) => {
                    return(
                        <li key={badge.id} className="mb-3 mx-3 " >
                            <div className="container-fluid">
                                <div className="row rounded mb-3 py-3 shadow">
                                    <div className="col-2">
                                        <img src={badge.avatarUrl} alt="log" className="rounded-circle" />
                                    </div>
                                    <div className="col-8">
                                        <span className="mb-0 font-weight-bold">
                                            {badge.firstName} {badge.lastName}
                                        </span><br/>
                                        <span className="">
                                            @ {badge.twitter}
                                        </span><br/>
                                        <span className="mb-0 font-weight-light">
                                            {badge.jobTitle}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>

        )
        
    }
}

export default BadgesList;