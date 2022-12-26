import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import {
    HOME_PAGE_LOADED,
} from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
    onLoad: (tab, pager, payload, searchQuery) =>
        dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload, searchQuery }),
});

class TitleSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ title: String(event.target.value) }, () => {
            
            if(this.state.title.length === 0 || this.state.title.length >= 3) {
                this.props.onLoad(
                    "all",
                    agent.Items.all,
                    Promise.all([agent.Tags.getAll(), agent.Items.byTitle(this.state.title)]),
                    this.state.title
                );
            }
        });
    }

    onClick(event) {
        event.preventDefault();

        const searchQuery = this.state.title;
        if (searchQuery.length < 3) return;

        this.props.onLoad(
            "all",
            agent.Items.all,
            Promise.all([agent.Tags.getAll(), agent.Items.byTitle(this.state.title)]),
            searchQuery
        );
    }

    render() {
        return (
            <div className="px-2" style={{ display: "inline" }}>
                <input type="text" id="search-box" value={this.state.title} onChange={this.handleChange} />
                <button className="bi bi-search" onClick={this.onClick}></button>
            </div>
        )
    }
}
export default connect(() => ({}), mapDispatchToProps)(TitleSearch);