import { useEffect, useState } from "react"


const useAdmin = (user) => {

    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoding] = useState(true)

    useEffect(() => {
        const email = user?.email
        console.log(email)
        if (email) {

            fetch(`https://radiant-plains-45803.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')} `
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoding(false);
                })
        }

    }, [user])

    return [admin, adminLoading]
}

export default useAdmin