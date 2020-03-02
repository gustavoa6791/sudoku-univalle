
const reducer = (state, action) => {

  switch (action.type) {

    case 'INGRESO_VALOR':

      var { celda, valor, ingreso } = action.paylod
      var lecturaActual = [...state.actual]
  
        if(valor == ""){
          valor = null
        }

      lecturaActual[celda] = valor == null ? null : parseInt(valor)
      
      var historia = [...state.historia,[...lecturaActual]]
      var ultimo = historia[historia.length - 1]
      var newHistGraf = [...state.historiaGrafica,[...ingreso]]
      var ubicacion2 = newHistGraf.length
     
      return {
        ...state,
        historia: [...state.historia, [...lecturaActual]],
        ubicacion: state.historia.length,
        actual: ultimo,
        historiaGrafica: newHistGraf,
        ubicacion2 : ubicacion2
      }

    case 'ESTADO_INICIAL':

      let { inicial, resuelto } = action.paylod

      return {
        ...state,
        actual: inicial,
        resuelto: resuelto,
        historia: [...state.historia, [...inicial]],
        ubicacion: state.ubicacion + 1
      }

    case 'DESHACER_REHACER':

      if (action.paylod == "deshacer") {
        var pos = state.ubicacion - 1
        var newActual = state.historia
        var newActualAnt = newActual[pos]
        
        var pos2 = state.ubicacion2 -1
        var newHistGraf = [...state.historiaGrafica[pos2 ]]
        var newHistGrafMod = [newHistGraf[0]= "deshacer",newHistGraf[1], newHistGraf[2] ] 

        return {
          ...state,
          actual: newActualAnt,
          ubicacion: pos,
          ubicacion2: pos2,
          historia: [...state.historia],
          historiaGrafica: [...state.historiaGrafica,[...newHistGrafMod]]
        }
      }

      if (action.paylod == "rehacer") {
        var pos = state.ubicacion + 1
        var newActual = state.historia
        var newActualAnt = newActual[pos]

        var pos2 = state.ubicacion2
        var newHistGraf = [...state.historiaGrafica[pos2]]
        var newHistGrafMod = [newHistGraf[0]= "rehacer",newHistGraf[1], newHistGraf[2] ] 
        pos2= pos2 + 1 

        return {
          ...state,
          actual: newActualAnt,
          ubicacion: pos,
          ubicacion2: pos2,
          historia: [...state.historia],
          historiaGrafica: [...state.historiaGrafica,[...newHistGrafMod]]
        }
      }

    default:
      return state
  }

}

export default reducer