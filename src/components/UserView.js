import React from 'react';

export default function UserView({ signOutUser }) {
  return (
    <div>
      {/* hoping to render header component here if i can figure out 
      a way to give the header a conditional statement */}
      <header>
        <button onClick={signOutUser}>Log Out</button>
      </header>
      <h2>Welcome User! We are happy you are here.</h2>
      <iframe
        src="https://giphy.com/embed/ONuQzM11fjvoY"
        width="480"
        height="367"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/cute-happy-ONuQzM11fjvoY">via GIPHY</a>
      </p>
    </div>
  );
}
