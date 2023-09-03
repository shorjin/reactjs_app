import React from "react";
import axios from 'axios';
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

class SearchImage extends React.Component {
    state = {
        images: [],
        totalPages: 0,
        page: 1,
        query: '', // Added query state
    };

    onSearchSubmit = async (entry) => {
        try {
            const response = await axios.get(
                'https://api.unsplash.com/search/photos',
                {
                    params: {
                        query: entry,
                        per_page: 20,
                        page: this.state.page,
                    },
                    headers: {
                        Authorization: 'Client-ID ymW8viWArI7m1acbYWtdMc1Rt9oWD4N2EjsmEL-1WAs',
                    },
                }
            );

            // Update images and totalPages state
            this.setState({
                images: response.data.results,
                totalPages: response.data.total_pages,
                query: entry, // Update the query in the state
            });
        } catch (error) {
            console.error("Error fetching images:", error);
            // Handle error state here if needed
        }
    };

    handlePreviousPage = () => {
        if (this.state.page > 1) {
            this.setState(
                { page: this.state.page - 1 },
                () => this.onSearchSubmit(this.state.query)
            );
        }
    };

    handleNextPage = () => {
        if (this.state.page < this.state.totalPages) {
            this.setState(
                { page: this.state.page + 1 },
                () => this.onSearchSubmit(this.state.query)
            );
        }
    };

    render() {
        console.log("Render called with page:", this.state.page);
        return (
            <div className='ui container' style={{ marginTop: "2em" }}>
                <h2 style={{ textAlign: "center", fontSize: "40px" }}>Welcome to image Search App</h2>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <p style={{ margin: '1.2em', fontSize: "20px" }}>This page found: {this.state.images.length} images</p>
                <p style={{ margin: '1.2em', fontSize: "20px" }}>Found total pages: {this.state.totalPages} pages</p>

                <ImageList foundimages={this.state.images} />
                <p style={{ margin: '1.2em', fontSize: "20px" }}>Current page: {this.state.page} pages</p>
                <div className='buttons'>
                    {this.state.page > 1 && (
                        <button onClick={this.handlePreviousPage} className="Previousbutton">Previous</button>
                    )}
                    {this.state.page < this.state.totalPages && (
                        <button onClick={this.handleNextPage} className="Nextbutton">Next</button>
                    )}
                </div>
            </div>
        );
    }
}

export default SearchImage;