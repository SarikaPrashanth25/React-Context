import React, { useCallback, useEffect, useState } from 'react'

const URL = `https://jsonplaceholder.typicode.com`


function useUserApi(props) {
    const [user,setUser] = useState([])

    const getUsers = useCallback(() => {
        const readUser = async () => {
            await fetch(`${URL}/users`)
            .then(out => out.json())
            .then(res => {
                // console.log('users =', res)
                setUser(res)
            }).catch(err => console.log(err.message))
        }

        readUser()
    },[])

    useEffect(() => {
        getUsers()
    },[])

    return {
        users: [user,setUser]
    }
}

export default useUserApi