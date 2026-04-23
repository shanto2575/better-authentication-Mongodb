import React from 'react'
import { headers } from 'next/headers'
import { auth } from '../lib/auth'


const DashboardPage = async() => {
    const session= await auth.api.getSession({
        headers:await headers()
    })
    console.log(session)
    const user=session?.user;
    if(!user){
        return <div>Place sign in to access the Deshboard</div>
    }
    
    return (
        <div>
            <h2>Dashboard</h2>
            
        </div>
    )
}

export default DashboardPage
