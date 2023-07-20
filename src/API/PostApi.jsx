import React, { useCallback, useEffect, useState } from 'react'

const URL = `https://jsonplaceholder.typicode.com`

// custom hook
function usePostApi(props) {
    const [post,setPost] = useState([])

    const getPosts = useCallback(() => {
        const readPost = async () => {
            await fetch(`${URL}/posts`)
            .then(out => out.json())
            .then(res => {
                // console.log('posts =', res)
                setPost(res)
            }).catch(err => console.log(err.message))
        }

        readPost()
    },[])

    useEffect(() => {
        getPosts()
    },[])

    return {
        posts: [post,setPost]
    }
}

export default usePostApi