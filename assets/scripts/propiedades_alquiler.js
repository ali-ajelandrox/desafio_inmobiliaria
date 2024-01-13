
const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: "2.000",
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: ' Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 3,
        baños: 3,
        costo: "2.500",
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: 'Arizona-beach',
        habitaciones: 2,
        baños: 2,
        costo: "2.200",
        smoke: false,
        pets: false
    },
    {
        nombre: 'Mansión para eventos',
        src: 'https://media.metrolatam.com/2020/09/30/mansin-02bd83c185fe5428da2298b406537b48.jpg',
        descripcion: 'Propiedad utilizada para las mas prestigiosas reuniones de alto nivel mundial',
        ubicacion: 'Bel-air',
        habitaciones: 8,
        baños: 6,
        costo: "120.000",
        smoke: true,
        pets: false
    }

]

let propiedades_section = document.querySelector(".principal");
for (let i = 0; i < propiedades_alquiler.length; i++){
propiedades_section.innerHTML += `

    
        <div class="col-md-4 mb-5">
            <div class="card">
                <img class="card-img-top" src="${propiedades_alquiler[i].src}">
                
                <div class="card-body"> 
                    <h2>${propiedades_alquiler[i].nombre}</h2>
                    <h5>${propiedades_alquiler[i].descripcion}</h5>
                    <p class="card-text">
                    <i class="fas fa-map-marker-alt"></i>
                    ${propiedades_alquiler[i].ubicacion}</p>
                    <p> 
                        <i class="fas fa-bed" aria-hidden="true"></i>
                        ${propiedades_alquiler[i].habitaciones}
                        <i class="fas fa-bath" aria-hidden="true"></i>
                        ${propiedades_alquiler[i].baños}
                    </p>
                    <p>
                        <i class="fas fa-dollar-sign" aria-hidden="true"></i>
                        ${propiedades_alquiler[i].costo}
                    </p>
                    <p style="color: ${propiedades_alquiler[i].smoke ? 'green' : 'red'};">
                    ${propiedades_alquiler[i].smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-ban"></i>'}
                        ${propiedades_alquiler[i].smoke ? 'Permitido fumar' : 'Prohibido fumar'}
                    </p>
                    <p style="color: ${propiedades_alquiler[i].pets ? 'green' : 'red'};">
                    ${propiedades_alquiler[i].pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'}
                        ${propiedades_alquiler[i].pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
        
            </div>
        </div>

    `


}




