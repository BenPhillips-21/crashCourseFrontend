import { gql } from '@apollo/client';

export const GET_ALL_ACCIDENTS = gql`
query GetAllAccidents {
  getAllAccidents {
    crashDescription
    date
    id
    location
    photos {
      url
    }
    speed
    time
    weatherConditions
  }
}
`