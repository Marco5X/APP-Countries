export const sortAlphabetically = (x, y) => {
    if(x.name < y.name) return -1
    if(y.name < x.name) return 1
    return 0
}

export const sortPopulation = (x, y) => {
    return x.population - y.population
}
// https://developer.mozilla.org/es/search?q=sort
// export function ordenado(dataParaOrdenar, opciones) {
//     let dataOrdenada;
//     if (opciones.name) {
//       dataOrdenada = dataParaOrdenar.sort((a, b) => {
//         if (opciones.name === 'Descendent') {
//           if (a.name < b.name) return 1;
//           if (a.name > b.name) return -1;
//         } else {
//           if (a.name > b.name) return 1;
//           if (a.name < b.name) return -1;
//         }
//         return 0;
//       });
//     }
//     if (opciones.population) {
//       const dataOrdenadaClear = dataParaOrdenar.filter((item) => item.area && item )
//       dataOrdenada = dataOrdenadaClear.sort((a, b) => {
        
//         const aresult = a.area / a.population
//         const bresult = b.area / b.population
        
//         if (opciones.population === 'Descendent') {
//           if (aresult < bresult) return 1;
//           if (aresult > bresult) return -1;
//         } else {
//           if (aresult > bresult) return 1;
//           if (aresult < bresult) return -1;
//         }
//         return 0;
//       });
//     }
//     return dataOrdenada;
//   }
  
