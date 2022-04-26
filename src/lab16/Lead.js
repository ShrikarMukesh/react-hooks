import React, { Component } from "react";
import PropTypes from "prop-types";
class Lead extends Component {
  state = {
    showLeadInfo: false,
  };
  onShowClick = () => {
    this.setState({
      showLeadInfo: !this.state.showLeadInfo,
    });
  };
  onDeleteClick = () => {
    this.props.mydeleteClickHandler();
  };
  render() {
    const { lead } = this.props;
    let myleadInfo = null;
    if (this.state.showLeadInfo) {
      myleadInfo = (
        <ul className="list-group display-6">
          <li className="list-group-item"> Email : {lead.email} </li>
          <li className="list-group-item"> Phone : {lead.phone} </li>
        </ul>
      );
    }
    return (
      <div className="card card-body mb-4">
        <h4>
          {this.props.lead.name} - Interested for {this.props.lead.course}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer", color: "green", fontSize: "50px" }}
          />
          <i
            onClick={this.onDeleteClick}
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
        </h4>
        {myleadInfo}
      </div>
    );
  }
}
Lead.propTypes = {
  lead: PropTypes.object.isRequired,
  mydeleteClickHandler: PropTypes.func.isRequired,
};
export default Lead;
