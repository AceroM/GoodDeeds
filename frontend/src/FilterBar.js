import React, { Component } from 'react';

class FilterBar extends Component {
    onSearch = e => {
        const { onSearch } = this.props;
        onSearch(e.target.value);
    }

    render() {
        const { searchTerm } = this.props;
        return (
            <div>
                <div class="searchBox">
                    <div class="searchContainer">
                        <span class="icon-s"><i class="fas fa-filter"></i></span>
                        <input
                            type="search" 
                            id="search" 
                            type="text"
                            className="SearchBar"
                            value={ searchTerm }
                            onChange={this.onSearch}
                        />
                    </div>
                </div> 
            </div>
        );
    }
}

export default FilterBar;