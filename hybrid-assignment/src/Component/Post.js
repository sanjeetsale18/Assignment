import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "../Component/Post.css";

export default function Post() {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState("");
  const [children, setChildren] = useState([]);

  const { id } = useParams();

  const fetchPost = async () => {
    const res = await axios.get(`https://hn.algolia.com/api/v1/items/${id}`);
    const title = res.data.title;
    const points = res.data.points;
    const children = res.data.children;

    setTitle(title);
    setPoints(points);
    setChildren(children);
  };

  useEffect(() => {
    fetchPost();
  });

  return (
    <div>
      <Postdetails title={title} children={children} points={points} />
    </div>
  );
}

export function Postdetails(props) {
  return (
    <div className="post-container">
      <h1 className="post-title">{props.title}</h1>
      <p className="post-points">points: {props.points}</p>
      <p className="post-comment">Comments:</p>
      {props.children.map((item) => {
        const { text, author } = item;
        return (
          <div className="comment-block">
            <span className="post-text">
              <span class="user">{author}</span>
              {parse(`${text}`)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

{
  /* <div class="comment_body">
  <p>
    <div class="replied_to">
      <p>
        <span class="user">{author}:</span>
        {parse(`${text}`)}
      </p>
    </div>
    That's exactly what I was thinking!
  </p>
</div>; */
}
