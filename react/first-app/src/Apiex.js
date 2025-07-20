import { useEffect, useState } from "react";
import Render from "./Render";

const Apiex = () => {
  let [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((temp) => {
        console.log(temp);
        setPost(temp);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {posts.map((temp) => (
        <Render key={temp.id} id={temp.id} title={temp.title} body={temp.body} />
      ))}
    </>
  );
};

export default Apiex;
