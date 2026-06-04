export const saveGame = (data) => {
  localStorage.setItem("cyberDevSave", JSON.stringify(data));
};

export const loadGame = () => {
  const savedData = localStorage.getItem("cyberDevSave");
  return savedData ? JSON.parse(savedData) : null;
};