export const TOGGLE_THEME = "THEME/TOGGLE";

export type Theme = "Default" | "Dark";

interface IAction {
  type: string;
}

export default (state: Theme = "Default", action: IAction): Theme => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "Default" ? "Dark" : "Default";
    default:
      return state;
  }
};

export const toggleTheme = (): IAction => {
  return {
    type: TOGGLE_THEME
  };
};
