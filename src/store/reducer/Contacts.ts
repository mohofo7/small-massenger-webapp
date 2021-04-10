export const ADD_CONTACT = "CONTACTS/ADD";
export const REMOVE_CONTACT = "CONTACTS/REMOVE";
export const SEND_MESSAGE = "CONTACTS/SEND";
export const RECEIVE_MESSAGE = "CONTACTS/RECEIVE";

export interface IMessage {
  content: string;
  date: Date;
  self: boolean;
}

export interface IContact {
  id: string;
  name: string;
  picture: string;
  messages: Array<IMessage>;
}

export interface ISendMessageAction {
  id: string;
  message: IMessage;
}

interface IAction {
  type: string;
  payload: IContact | string | ISendMessageAction;
}

export default (state: Array<IContact> = [], action: IAction): Array<IContact> => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload as IContact];
    case REMOVE_CONTACT:
      const result = [...state];
      const index = result.findIndex((contact) => contact.id === action.payload);
      if (index > -1) {
        result.splice(index, 1);
      }
      return result;
    case SEND_MESSAGE:
    case RECEIVE_MESSAGE:
      const i = state.findIndex(
        (contact) => contact.id === (action.payload as ISendMessageAction).id
      );
      state[i] = {
        ...state[i],
        messages: [(action.payload as ISendMessageAction).message, ...state[i].messages]
      };
      return [...state];
    default:
      return state;
  }
};

export const addContact = (payload: IContact): IAction => {
  return {
    type: ADD_CONTACT,
    payload
  };
};

export const deleteContact = (id: string): IAction => {
  return {
    type: REMOVE_CONTACT,
    payload: id
  };
};

export const sendMessage = (id: string, message: IMessage): IAction => {
  return {
    type: SEND_MESSAGE,
    payload: {
      id,
      message
    }
  };
};

export const receiveMessage = (id: string, message: IMessage): IAction => {
  return {
    type: RECEIVE_MESSAGE,
    payload: {
      id,
      message
    }
  };
};
