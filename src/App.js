/* eslint-disable no-unused-vars */
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '2abce7fb-0b30-433a-b251-84171ab3d196';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
);
};

// infinite scroll, logout, more customizations...

export default App;

// height = "100vh"
// projectID="2abce7fb-0b30-433a-b251-84171ab3d196"
// userName="Selenophile"
// userSecret="123123"
