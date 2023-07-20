import React, { useCallback, useEffect, useState } from "react"

const URL = `https://jsonplaceholder.typicode.com`

function useCommentApi(props) {
    const [comment,setComment] = useState([])

    const getComments = useCallback(() => {
        const readComment = async () => {
            await fetch(`${URL}/comments`)
            .then(out => out.json())
            .then(res => {
                // console.log('comments =', res)
                setComment(res)
            }).catch(err => console.log(err.message))
        }

        readComment()
    },[])

    useEffect(() => {
        getComments()
    },[])
    return{
        comments: [comment,setComment]
    }
}

export default useCommentApi