export const getUsuario = () => {
  return {
    worker: localStorage.getItem('worker') || null,
    office: localStorage.getItem('office') || null,
  };
};
