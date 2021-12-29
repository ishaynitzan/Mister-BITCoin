import React from "react";
import { Link } from "react-router-dom";
import '../Sass/App.scss';
import {contactService} from '../services/contactService.js';
export class DetailsPage extends React.Component {
  state = {
    contact: null,
    nextContact: null,
    prevContact: null,

  };


  componentDidMount() {
    this.loadContact()
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }
  async loadContact() {
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact })
    this.getNeighbor()
  }

  async getNeighbor() {
    const contacts = await contactService.getContacts()
    const idx = contacts.findIndex((contact) => contact._id === this.state.contact._id)
    
    if (idx < contacts.length) {
      const currIdx = idx + 1;
      const nextContact = contacts.splice(currIdx, 1)[0]
      console.log(nextContact)
      this.setState({ nextContact })
    }
    if (idx > 0) {
      const currIdx = idx - 1;
      const prevContact = contacts.splice(currIdx, 1)[0]
      this.setState({ prevContact })
    }
    console.log(this.state)

  }



  onGoBack = () => {
    this.props.history.push('/contact')
  }

  render() {
    const { contact, nextContact, prevContact } = this.state
    if (!contact) return <div>Loading..</div>
    return (
      <div className="details-page">
        <h1>{contact.model}</h1>
        <h3>Name: {contact.name}</h3>
        <h3>Email: {contact.email}</h3>
        <h3>Phone: {contact.phone}</h3>
        <img src={`https://robohash.org/${contact.name}`} alt="" />
        <button onClick={this.onGoBack} >Back</button>
        {nextContact && <Link to={`/contact/details/${nextContact._id}`} >Next Contact</Link>}
        {prevContact && <Link to={`/contact/details/${prevContact._id}`} >Previous Contact</Link>}
      </div>
    );
  }
}
