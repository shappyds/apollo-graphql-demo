import React from 'react'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost'

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`

const DogPhoto = ({ breed }) => (
  <Query
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    notifyOnNetworkStatusChange
    // pollInterval={500}
  >
    {({ loading, error, data, refetch, networkStatus }) => {
      if (networkStatus === 4) return "Refetching!";
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <div>
          <img
            alt="no img"
            src={data.dog.displayImage}
            style={{ height: 100, width: 100 }}
          />
          <button onClick={() => refetch()}>Refetch!</button>
        </div>
      );
    }}
  </Query>
);

export default DogPhoto