import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

interface IRoutes {
  small: boolean;
}

const Routes: React.FC<IRoutes> = ({ small }) => {
  return (
    <Switch>
      {small && (
        <Fragment>
          <Route path="/">{/*<ChatList />*/}</Route>
          <Route path="/contacts">{/*<ContactList />*/}</Route>
        </Fragment>
      )}
      <Route path="/chats/:id">{/*<ChatPage />*/}</Route>
      <Route path="/contacts/:id">{/*<ContactPage />*/}</Route>
    </Switch>
  );
};

export default Routes;
