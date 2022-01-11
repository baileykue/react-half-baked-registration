import Header from './Header';
import './UserView.css';

export default function UserView({ signOutUser, currentUser }) {
  return (
    <div className="user-view">
      <Header signOutUser={signOutUser} currentUser={currentUser} />
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
