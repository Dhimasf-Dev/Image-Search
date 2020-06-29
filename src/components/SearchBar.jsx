// imrc = shorthand
import React from 'react'

class SearchBar extends React.Component {
    
    onSubmitForm = (event)=>{
        //agar halaman tdk merefresh
        event.preventDefault()
    
        this.props.onSearch(this.keyword.value) // (1) Data input masuk 
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="form-grup">
                    <input ref={(input) => { this.keyword = input}} className="form-control" type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar

