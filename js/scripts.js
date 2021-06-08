let crearForm = () =>{
    let backgroundModal = document.getElementById('back-modal');
    let formNuevoCliente = document.createElement('form');
    let btnCerrar = document.createElement('button');
    let btnEnviar = document.createElement('button');
    let tituloForm = document.createElement('h3');

    btnCerrar.innerText = 'X';
    btnCerrar.classList.add('btn-cerrar');
    btnCerrar.addEventListener('click',function(event){
        event.preventDefault();
        formNuevoCliente.remove();
        backgroundModal.classList.remove('shadow-modal'); 
    });
    btnEnviar.innerText='Guardar';
    formNuevoCliente.classList.add('form-style');
    tituloForm.innerHTML = 'Crear Cliente';
    formNuevoCliente.setAttribute('id','formClientes');
    formNuevoCliente.appendChild(btnCerrar);
    formNuevoCliente.appendChild(tituloForm);
    backgroundModal.appendChild(formNuevoCliente);
    agregarInputs();
    formNuevoCliente.appendChild(btnEnviar);
    backgroundModal.classList.add('shadow-modal');    
}
//funcion para agregar labels a los select
function setLabels(texto){
    let opcion = document.createElement('option');
    opcion.innerHTML = texto;
    return opcion;
}

function agregarInputs(){
    let nombre = document.createElement('input');
    let apellidos = document.createElement('input');
    let cedula = document.createElement('input');
    let direccion = document.createElement('fieldset');
    let telefono = document.createElement('input');
    let correo = document.createElement('input');
    let password = document.createElement('input');
    let privilegio = document.createElement('select');
    let form = document.getElementById('formClientes');
    let sector = document.createElement('select');
    let calle = document.createElement('select');
    let numeroCalle = document.createElement('input');
    let arrayPrivilegios = ['Admin','Cajero','Cliente'];
    let labelCalle = setLabels('Calle');
    let labelPriv = setLabels('Permisos');
    let labelSector = setLabels('Sector');

    nombre.setAttribute('name','nombre');
    nombre.setAttribute('placeholder','Digite nombre');
    apellidos.setAttribute('name','apellidos');
    apellidos.setAttribute('placeholder','Digite apellidos');
    cedula.setAttribute('name','cedula');
    cedula.setAttribute('placeholder','Cedula');
    direccion.setAttribute('name','direccion');
    numeroCalle.setAttribute('placeholder','#')
    telefono.setAttribute('name','telefono');
    telefono.setAttribute('placeholder','000-000-0000');
    correo.setAttribute('name','correo');
    correo.setAttribute('placeholder','correo');
    password.setAttribute('name','password');
    password.setAttribute('placeholder','Contrasena');
    privilegio.setAttribute('name','privilegio');
    privilegio.appendChild(labelPriv);
    sector.appendChild(labelSector);
    
    

    arrayPrivilegios.map(valor => {
        let dato = document.createElement('option');
        dato.innerHTML = valor;
        privilegio.appendChild(dato);
    });

    $.ajax({
        method:'post',
        data:'dameSectores',
        success:function(data){
            let response = JSON.parse(data);
            response.forEach(item =>{
              let dato = document.createElement('option');
              dato.innerHTML = item['nombre_sector'];
              dato.setAttribute('value',item['id_sector']);
              sector.appendChild(dato); 
            })
        }
    })

    sector.addEventListener('change',function(event){
        let idSector = parseInt(event.target.value);
        calle.innerHTML='';
        //let idSector = event.target.value;
            $.ajax({
                method:'post',
                data:{idSector:idSector},
                success:function(response){
                   let infoArray = JSON.parse(response);
                   infoArray.forEach(item=>{
                       let street = document.createElement('option');
                       street.innerHTML = item['nombre_calle'];
                       street.setAttribute('value',item['id_calle']);
                       calle.appendChild(street);
                   })
                }
            })     
    })


    direccion.appendChild(sector);
    direccion.appendChild(calle);
    direccion.appendChild(numeroCalle);
    calle.appendChild(labelCalle);
    form.appendChild(nombre);
    form.appendChild(apellidos);
    form.appendChild(cedula);
    form.appendChild(direccion);
    form.appendChild(telefono);
    form.appendChild(correo);
    form.appendChild(password);
    form.appendChild(privilegio);


    
}