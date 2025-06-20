import { useState } from "react"
import { Get } from "../../../services/apiService"

export default function Profile()
{

    const [ details, setDetails ] = useState( {
        username: "",
        email: "",
        role: "",
    } )

    const handleuserdetails = () =>
    {
        Get( "/user/me" ).then( response =>
        {
            console.log( response.data )
            setDetails( response.data[ 0 ] )
        } )
            .catch( error =>
            {
                console.log( error )
            } )
    }

    window.onload = () =>
    {
        handleuserdetails()
    }

    return (
        <div>
            <h1>Profile</h1>

            <div className="mt-5">
                <div className="d-flex gap-3">
                    <label htmlFor="">Name:</label>
                    <p>{details.username}</p>
                </div>
            </div>
        </div>
    )
}