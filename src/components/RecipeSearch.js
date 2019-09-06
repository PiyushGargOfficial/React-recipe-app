import React, { Component } from 'react'

export default class RecipeSearch extends Component {

    render() {

        const { value, handleChange, handleSubmit } = this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-slanted text-capitalize">
                                search for recipe with <strong className="text-danger">Food2Fork</strong>
                            </h1>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-4">
                                <label
                                    htmlFor="search"
                                    className="text-capitalize">
                                    type recipe seperated by comma
                                        {/* seperated by comma because food2fork api asks this way */}
                                </label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="search"
                                        id=""
                                        value={value}
                                        onChange={handleChange}
                                        placeholder="chicken,onion,carrots"
                                        className="form-control"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            type="submit"
                                            className="input-group-text bg-primary text-white"
                                        >
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
