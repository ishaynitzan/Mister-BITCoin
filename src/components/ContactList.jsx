import React from 'react';
import { ContactPreview } from './ContactPreview.jsx';

export function ContactList({ contacts , removeContact }) {

    return (
        <section className="contact-list">
            <h2>Contact List</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map((contact) => {
                        return <ContactPreview contact={contact} key={contact._id} removeContact={removeContact} />
                    })
                    }
                </tbody>
            </table>
        </section>
    )
}