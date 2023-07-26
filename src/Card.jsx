import { useState } from "react";

const Card = ({ heading, paragrah }) => {

    const [like,setLike] = useState(0);
  return (
    <div>
      <h1>{heading}</h1>
      <p>{paragrah}</p>
        <button onClick={() => setLike((prevLike) => prevLike + 1)}>Like</button> : {like}
    </div>
  );
};

export default Card;
