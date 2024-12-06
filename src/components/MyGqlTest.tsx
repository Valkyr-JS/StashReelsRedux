import React from "react";
import { useQuery, gql } from "@apollo/client";

const MyGqlTest: React.FC<MyTestProps> = () => {
  const { loading, error, data } = useFetchInfo();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error fetching the data!</p>;
  }

  return <div style={{ color: "white" }}>{data?.findPerformer.name}</div>;
};

export default MyGqlTest;

interface MyTestProps {
  title: string;
}

const FindPerformerQuery = gql`
  query FindPerformer {
    findPerformer(id: 32) {
      birthdate
      disambiguation
      ethnicity
      gender
      id
      name
      urls
    }
  }
`;

interface Data {
  findPerformer: Performer;
}

function useFetchInfo() {
  const { loading, error, data } = useQuery<Data>(FindPerformerQuery);

  return { loading, error, data };
}
