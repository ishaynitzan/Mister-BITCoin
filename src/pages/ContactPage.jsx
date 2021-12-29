import { useCallback, useEffect, useState } from 'react'
import { ContactList } from '../components/ContactList.jsx';
import { ContactFilter } from "../components/ContactFilter";
import { useSelector, useDispatch } from 'react-redux'
import { removeContact, loadContacts } from '../store/actions/contactActions'

import '../Sass/App.scss';

export const ContactPage = (props) => {

  const { contacts } = useSelector(state => state.contactModule)

  const [filterBy, setFilterBy] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
  }, [])

  const onChangeFilter = useCallback((filterBy) => {
    dispatch(setFilterBy(filterBy))
    dispatch(loadContacts())
  }, [])

  const onRemoveContact = (ContactId) => {
    this.dispatch(removeContact(ContactId))
  }

  return (
    <div className="contacts-page">
      {/* <ContactFilter onChangeFilter={onChangeFilter} />  */}
      <ContactList contacts={contacts} removeContact={onRemoveContact} />
    </div>
  );

}
