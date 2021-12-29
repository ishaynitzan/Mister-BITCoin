import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        search: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })

    }

    render() {
        const { search } = this.state
        return (
            <form className='robot-filter'>
                <section className='input-container'>
                    <label htmlFor="search">search</label>
                    <input onChange={this.handleChange} value={search} type="text" name="search" id="search" />
                </section>
            </form>
        )
    }
}
