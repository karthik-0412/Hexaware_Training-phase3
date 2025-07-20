import './App.css';

const Render = ({ id, title, body }) => (
  <div className="container">
    <h2>Id: {id}</h2>
    <h3>Title: {title}</h3>
    <p>Body: {body}</p>
  </div>
);

export default Render;
