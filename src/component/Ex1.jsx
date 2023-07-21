import React, { useContext } from "react"
import { DataContext } from "../Context/DataProvider"
import PostItem from "../Screens/PostItem"

function Ex1(props) {
    const context = useContext(DataContext)
    const [posts] = context.postApi.posts

    return (
       <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Posts</h3>
                </div>
            </div>

            <div className="row">
                {
                    posts && posts.map((item,index) => {
                        return (
                            <PostItem key={index} {...item} />
                        )
                    })
                }
            </div>
       </div>
    )
}

export default Ex1