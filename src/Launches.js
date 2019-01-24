import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export class Launches extends Component {
  render() {
    return (
      <div className='mx-5 '>
        <h1 className='py-5'>Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (error) return console.error('There was an error', error)
            if (loading) return <h1>Loading...</h1>
            console.log(data)
            return (
              <React.Fragment>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </React.Fragment>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Launches
