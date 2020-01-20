import React from 'react';
import { Link } from 'react-router-dom';
import UpdateJobContext from '../../contexts/UpdateJobContext';
import JobsApiService from '../../services/jobs-api-service';

class JobDetails extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  static contextType = UpdateJobContext

  componentDidMount() {
    let id = this.props.match.params.id
    JobsApiService.getJobById(id)
      .then(data => {
        this.context.setSingleJob(data)
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  deleteJob = (id) => {
    this.context.deleteJob(id)
    JobsApiService.deleteJob(id)
      .catch(error => {
        this.context.setError(error)
      })
      this.props.history.push('/joblist')
  }

  render() {

    return (
      <div>
        <div className='JobListing'>
          <h2>{this.context.singleJob.company}</h2>
          <h3>{this.context.singleJob.position}</h3>
          <p>Description: {this.context.singleJob.description}</p>
          <p>Status: {this.context.singleJob.status}</p>
          <Link to={`editlisting/${this.props.match.params.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => this.deleteJob(this.props.match.params.id)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default JobDetails;