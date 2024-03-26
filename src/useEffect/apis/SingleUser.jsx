import React from 'react'
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from 'react-icons/fa'
const SingleUser = ({ login, avatar_url, site_admin }) => {
    return (
        <>
            <div className="col-md-3">
                <div className="card p-3">
                    <img width="100%" src={avatar_url} alt="" />
                    <h1>{login}</h1>
                    <p className="text-secondary">
                        {site_admin ? <MdAdminPanelSettings /> : <FaUser />}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SingleUser