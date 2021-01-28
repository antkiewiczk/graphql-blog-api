import client from "../../.";
import gql from "graphql-tag";

const getFeed = async () => {
  console.log('client', client);
  await client
    .query({
      query: gql`
        {
          feed {
            count
            links {
              id
              description
              url
              postedBy {
                id
                name
                email
              }
            }
          }
        }
      `,
    })
    .then((result) => result);
};

export default getFeed;
