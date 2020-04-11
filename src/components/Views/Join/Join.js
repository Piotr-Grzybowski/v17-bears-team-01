import React from 'react';
import Nav from '../../Simple/Nav/Nav';
// eslint-disable-next-line no-unused-vars
import { Mutation } from '@apollo/react-components';
// eslint-disable-next-line no-unused-vars
import { gql } from 'apollo-boost';

// const JOIN_MEETING = gql`
//   mutation createMeeting(
//     // TODO
//   }
// `;

export default class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingName: '',
      email: '',
      yourInitials: '',
      timeZone: '',
      error: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Joining Meeting Test');
  }

  render() {
    return (
      <div>
        <Nav />
        <form className="join-form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="meetingName">Meeting Name</label>
          <input
            className="join-input"
            required
            name="meetingName"
            id="meetingName"
            placeholder="Meeting Name"
            type="text"
            onChange={e =>
              this.setState({ meetingName: e.target.value.trim() })
            }
          ></input>
          <label htmlFor="email">Email</label>
          <input
            className="join-input"
            required
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            onChange={e => this.setState({ email: e.target.value.trim() })}
          ></input>
          <label htmlFor="yourInitials">Your Initials</label>
          <input
            className="join-input"
            required
            name="yourInitials"
            id="yourInitials"
            placeholder="Your Initials"
            type="text"
            onChange={e =>
              this.setState({ yourInitials: e.target.value.trim() })
            }
          ></input>
          <label htmlFor="timeZone">Time Zone</label>
          <input
            className="join-input"
            required
            name="timeZone"
            id="timeZone"
            placeholder="Time Zone"
            type="text"
            onChange={e => this.setState({ timeZone: e.target.value.trim() })}
          ></input>
          <button className="time-zone-button">Find My Time Zone</button>
          <button className="join-button" type="submit">
            submit
          </button>
          {this.state.error ? (
            <p className="error">{this.state.error}</p>
          ) : (
            <div className="error-message">
              <p>Hmm...</p>
              <p>We do not see that meeting</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}
