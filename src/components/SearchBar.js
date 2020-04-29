import React from "react";


class SearchBar extends React.Component{
    state ={
        searchValue:''
    }

    onChangeInput=(event)=>{
        this.setState({searchValue:event.target.value})
    }
    onSubmitForm=(event)=>{
        // eslint-disable-next-line no-unused-expressions
        event.preventDefault();
        this.props.searchText(this.state.searchValue);

    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Search:</label>
                        <input
                            type="text"
                            value={this.state.searchValue}
                            onChange={this.onChangeInput}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;