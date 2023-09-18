export const calculatePotentialWin = (stake: number, odds: number) => {
  if (!stake || !odds) {
    return 0;
  }

  return Number(stake * odds).toFixed(2);
};
