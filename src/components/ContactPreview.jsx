import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function ContactPreview({ contact }) {

    const [isShown, setIsShown] = useState(false);

    const toggleOption = () =>{
        setIsShown(prevIsShown=> prevIsShown = !prevIsShown)
    }
        


    return (
        <>
            <tr>
                <td className="contact-preview">
                    <img src={`https://robohash.org/${contact.name}`} alt="" />
                </td>
                <td onClick={toggleOption}> {isShown? "▲":"▼"}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
            </tr>
            {isShown && <tr>
                <td></td>
                <td></td>
                <td className="option">
                        <h3>Delete</h3>                   
                </td>
                <td className="option">
                    <Link to={`/contact/details/${contact._id}`}>
                        <h3>Details</h3>
                    </Link>
                </td>
            </tr>}
        </>
    )
}