module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
// Configuração do Babel para projetos Expo.
// Usa o preset oficial do Expo e habilita cache para builds mais rápidos.