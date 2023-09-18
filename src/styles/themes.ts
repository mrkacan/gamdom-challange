export const lightTheme = {
  background: "#f5f5f5",
  primary: "#232939",
  primaryLight: "#f6dd4d",

  button: {
    disabled: "#9ca1ac",
  },
  header: {
    background: "#ffffff",
    text: "#232939",
    iconBackground: "#9ba0b0",
  },
  filter: {
    text: "#232939",
    textActive: "#ffffff",
    filterBackground: "#9ba0b0",
    filterBackgroundHover: "#e0e0e0",
    filterBackgroundActive: "#f6dd4d",
    filterBackgroundActiveHover: "#ffde1f",
  },
  card: {
    background: "#ffffff",
    innerCardBackground: "#eceaea",
    input: {
      background: "#f0f0f0",
      text: "#232939",
    },
    text: {
      team: "#232939",
      bets: "#5b616e",
      category: "#9ca1ac",
      potentialWin: "#11a90c",
    },
    icon: {
      team: "#5b616e",
    },
    controls: {
      displayItemText: "#9ca1ac",
      displayItemTextSelected: "#000000",
      displayItemTextHover: "#000000",
      buttonText: "#ced1da",
      background: "#f0f0f0",
      backgroundSelected: "#ffde1f",
      backgroundHover: "#e0e0e0",
    },
  },
  modal: {
    closeIcon: "#232939",
    background: "#f0f0f0",
    title: "#232939",
  },
  slips: {
    text: "#232939",
  },
};

export const darkTheme = {
  background: "#232939",
  primary: "#ffde1f",
  primaryLight: "#f6dd4d",

  button: {
    disabled: "#9ca1ac",
  },
  header: {
    background: "#292f3f",
    text: "#fff",
    iconBackground: "#3c4358",
  },
  filter: {
    text: "#fff",
    textActive: "#232939",
    filterBackground: "#3c4358",
    filterBackgroundHover: "#9ba0b0",
    filterBackgroundActive: "#ffde1f",
    filterBackgroundActiveHover: "#ffde1f",
  },
  card: {
    background: "#3c4358",
    innerCardBackground: "#555e77",
    input: {
      background: "#292f3f",
      text: "#ffffff",
    },
    text: {
      team: "#ffffff",
      bets: "#bdbbbb",
      category: "#9ca1ac",
      potentialWin: "#ffde1f",
    },
    icon: {
      team: "#5b616e",
    },
    controls: {
      displayItemText: "#9ca1ac",
      displayItemTextSelected: "#000000",
      displayItemTextHover: "#000000",
      buttonText: "#000000",
      background: "#292f3f",
      backgroundSelected: "#ffde1f",
      backgroundHover: "#3c4254",
    },
  },
  modal: {
    closeIcon: "#ffffff",
    background: "#3c4358",
    title: "#ffffff",
  },
  slips: {
    text: "#ffffff",
  },
};

export type Theme = typeof darkTheme;
