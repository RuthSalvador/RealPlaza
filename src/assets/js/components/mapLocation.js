'use strict';
const MapaLocation = (update) => {
  const section   = $('<section></section>');
  const container = $('<div class="container"></div>');
  const row       = $('<div class="row"></div>');
  const h1        = $('<h1>Mapa de Location con Maps y lista de los real placa cerca</h1>');
  const divMap    = $('<div id="map-location" class="map"></div>');
  const divMall = $('<div></div>');
  ListarInmueble().then((response) => {
    console.log(state.data.inm_departamento);
    $.each(state.data.inm_departamento, ( key, value ) =>  {
      const name = $('<div><h2>'+value.NOM_INMUEBLE+'</h2></div>');
      const direccion = $('<div><h2>'+value.DIRECCION+'</h2></div>');
      const btnNext = $('<button>Ver Detalle</button>');
      btnNext.on('click',(e)=>{
        state.selectTienda = value;
        e.preventDefault();
        state.page = 6;
        update();
      });
      divMall.append(name,direccion,btnNext);
    });
  });

  row.append(h1,divMap,divMall);

  container.append(row);
  section.append(HeaderAll('mi ubicacion y lista de todos los Real Plaza en mapa y marcadores',2,update));
  section.append(container);

  return section;

};
