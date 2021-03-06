import React from 'react';
import { Link } from 'react-router-dom';
import './JobListing.css';
import UpdateJobContext from '../../contexts/UpdateJobContext';

class JobListing extends React.Component {
  static contextType = UpdateJobContext



  render() {

    return (
      <Link to={`/jobdetails/${this.props.data.id}`} className='joblisting-link'>
        <div className='JobListing'>
          <h2>{this.props.data.company}</h2>
          <h3>{this.props.data.position}</h3>
          <p>{this.props.data.status}</p>
        </div>
      </Link>
    )
  }
}

export default JobListing;

