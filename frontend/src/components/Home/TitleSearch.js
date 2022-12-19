import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import {
    HOME_PAGE_LOADED,
} from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
    onLoad: (tab, pager, payload) =>
        dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
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
        this.setState({ title: String(event.target.value) });
    }

    onClick(event) {
        event.preventDefault();

        if (this.state.title < 3) return;
        const tab = "all";
        const itemsPromise = agent.Items.all;

        this.props.onLoad(
            tab,
            itemsPromise,
            Promise.all([agent.Tags.getAll(), agent.Items.byTitle(this.state.title)])
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