import React from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardRow from "./LeaderboardRow";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: "",
      people: this.props.people
    };

    this.filterList = this.filterList.bind(this);
  }

  filterList(event) {
    this.setState({ filterValue: event.target.value });
  }

  render() {
    const people = this.props.people;

    const rows = people
      .filter(e =>
        e.name.toUpperCase().includes(this.state.filterValue.toUpperCase())
      )
      .map((person, index) => (
        <LeaderboardRow
          key={index}
          number={index + 1}
          name={person.name}
          score={person.upVotes}
        />
      ));

    return (
        <center>
            <input
                type="text"
                placeholder="Filter names"
                value={this.state.filterValue}
                onChange={this.filterList}
            />
            <div>
            <table className="leaderboard">
            <LeaderboardHeader />
            {rows}
            </table>
            
        </div>
        </center>
      
    );
  }
}
