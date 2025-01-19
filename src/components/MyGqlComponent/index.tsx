"use client";
import { useQuery, gql } from "@apollo/client";
import React from "react";

/** A component created to test database connection. Fetches a performer and
 * their basic data from the database. */
const MyGqlTest: React.FC<MyTestProps> = () => {
  const { loading, error, data } = useFetchInfo();

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading performer...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center" }}>
        There was an error fetching the data!
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      Performer: #{data?.findPerformer.id} {data?.findPerformer.name}
    </div>
  );
};

export default MyGqlTest;

interface MyTestProps {
  title: string;
}

const FindPerformerQuery = gql`
  query FindPerformer {
    findPerformer(id: 1) {
      id
      name
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
