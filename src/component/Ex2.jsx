import React, { useContext } from "react"
import { DataContext } from "../Context/DataProvider"
import UserItem from '../Screens/UserItem'

function Ex2(props) {
    const context = useContext(DataContext)
    const [users] = context.userApi.users

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Users</h3>
                </div>
            </div>

            <div className="row">
                {
                    users && users.map((item,index) => {
                        return (
                            <UserItem key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ex2