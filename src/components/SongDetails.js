import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <div>
      {lyric.err || lyric.error|| lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la cancion ${search.song}`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics}/>
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]}/>
      ) : (
        <Message
          msg={`Error: no existe el interprete ${search.artist}`}
          bgColor="#dc3545"
        />
      )}
    </div>
  );
};

export default SongDetails;
