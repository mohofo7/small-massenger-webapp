import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatList from "src/pages/ChatList";
import ChatPage from "src/pages/ChatPage";
import ContactList from "src/pages/Contacts";
import AddContact from "src/pages/AddContact";
import ContactPage from "src/pages/ContactPage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ChatList />
      </Route>
      <Route path="/contacts/add" exact>
        <AddContact />
      </Route>
      <Route path="/contacts/:id">
        <ContactPage />
      </Route>
      <Route path="/contacts">
        <ContactList />
      </Route>
      <Route path="/chats/:id">
        <ChatPage />
      </Route>
    </Switch>
  );
};

export const SideBarRoutes: React.FC = () => (
  <Switch>
    <Route path="/contacts/add" exact>
      <AddContact />
    </Route>
    <Route path="/contacts">
      <ContactList />
    </Route>
    <Route path="/">
      <ChatList />
    </Route>
  </Switch>
);

export const DesktopRoutes: React.FC = () => (
  <Switch>
    <Route path="/chats/:id">
      <ChatPage />
    </Route>
    <Route path="/contacts/add" />
    <Route path="/contacts/:id">
      <ContactPage />
    </Route>
    <Route>{/*<EmptyPage />*/}</Route>
  </Switch>
);
