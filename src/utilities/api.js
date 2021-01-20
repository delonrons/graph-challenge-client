import ApolloClient, { gql }  from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://db-graph-server.herokuapp.com/'
})

export const GET_PERSON_VAL = gql`
  query($id: String!) {
    person(id: $id) {
      val3,
      val5
    }
}`;
