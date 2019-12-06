"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //map

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades); //filter

var maiorIdade = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade >= 18;
});
console.log(maiorIdade); //find

var googleEmployee = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(googleEmployee); //Unindo Operações

var maxCinquenta = usuarios.map(function (item) {
  return _objectSpread({}, item, {
    idade: item.idade * 2
  });
}).filter(function (item) {
  return item.idade <= 50;
});
console.log(maxCinquenta);
