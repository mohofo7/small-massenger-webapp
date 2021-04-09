import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatList from "src/pages/ChatList";
import ChatPage from "src/pages/ChatPage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ChatList />
      </Route>
      <Route path="/contacts">{/*<ContactList />*/}</Route>
      <Route path="/chats/:id">
        <ChatPage />
      </Route>
      <Route path="/contacts/:id">{/*<ContactPage />*/}</Route>
    </Switch>
  );
};

export const DesktopRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact>
      {/*<EmptyPage />*/}
    </Route>
    <Route path="/chats/:id">
      <ChatPage />
    </Route>
    <Route path="/contacts/:id">{/*<ContactPage />*/}</Route>
  </Switch>
);
