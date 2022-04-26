import React, { Component } from "react";
import Lead from "./Lead";
class LeadsList extends Component {
  state = {
    myleadsList: [
      {
        leadId: 101,
        name: "Vishwas",
        email: "Vishwas@gmail.com",
        phone: 12345,
        course: "React",
      },
      {
        leadId: 102,
        name: "Traverse Media",
        email: "Traverse@gmail.com",
        phone: 55555,
        course: "React JS",
      },
      {
        leadId: 103,
        name: "Shabbir",
        email: "Shabbir@gmail.com",
        phone: 99999,
        course: "Java FSD",
      },
    ],
  };
  deleteMyLead = (leadId) => {
    console.log("LeadsList -deleteLead() ");
    const { myleadsList } = this.state;
    const myleads = myleadsList.filter((mylead) => mylead.leadId !== leadId);
    this.setState({ myleadsList: myleads });
  };
  render() {
    return (
      <div>
        {this.state.myleadsList.map((mylead) => (
          <Lead
            key={mylead.leadId}
            lead={mylead}
            mydeleteClickHandler={this.deleteMyLead.bind(this, mylead.leadId)}
          />
        ))}
      </div>
    );
  }
}
export default LeadsList;
