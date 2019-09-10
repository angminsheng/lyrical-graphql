import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Song from "./Song";

const SongList = ({ data: { loading, songs } }) => {
  return (
    <ul className="collection">
      {!loading &&
        songs.map(({ title, id }) => <Song title={title} key={id} />)}
    </ul>
  );
};

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
