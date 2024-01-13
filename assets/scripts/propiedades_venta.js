
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: "5.000",
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: "1.200",
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 0,
        baños: 4,
        costo: "0",
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en urbanización en zona de prestigio',
        src: 'https://gpvivienda.com/blog/wp-content/uploads/2022/09/casa-muestra.jpg',
        descripcion: 'Excelente Propiedad , para vivir el sueño de estar entre las estrellas',
        ubicacion: 'Canon Drive',
        habitaciones: 4,
        baños: 3,
        costo: "60.000",
        smoke: true,
        pets: false
    }

]

let propiedades_section = document.querySelector(".principal");
for (let i = 0; i < propiedades_venta.length; i++){
propiedades_section.innerHTML += `

    
        <div class="col-md-4 mb-5">
            <div class="card">
                <img class="card-img-top" src="${propiedades_venta[i].src}">
                
                <div class="card-body"> 
                    <h2>${propiedades_venta[i].nombre}</h2>
                    <h5>${propiedades_venta[i].descripcion}</h5>
                    <p class="card-text">
                    <i class="fas fa-map-marker-alt"></i>
                    ${propiedades_venta[i].ubicacion}</p>
                    <p> 
                        <i class="fas fa-bed" aria-hidden="true"></i>
                        ${propiedades_venta[i].habitaciones}
                        <i class="fas fa-bath" aria-hidden="true"></i>
                        ${propiedades_venta[i].baños}
                    </p>
                    <p>
                        <i class="fas fa-dollar-sign" aria-hidden="true"></i>
                        ${propiedades_venta[i].costo}
                    </p>
                    <p style="color: ${propiedades_venta[i].smoke ? 'green' : 'red'};">
                    ${propiedades_venta[i].smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-ban"></i>'}
                        ${propiedades_venta[i].smoke ? 'Permitido fumar' : 'Prohibido fumar'}
                    </p>
                    <p style="color: ${propiedades_venta[i].pets ? 'green' : 'red'};">
                    ${propiedades_venta[i].pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'}
                        ${propiedades_venta[i].pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
        
            </div>
        </div>

    `


}

