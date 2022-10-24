
// indexedDB: Reforzamiento

let request = window.indexedDB.open('mi-database', 1);
// se actualiza cuando se crea o se sube de versioj de la DB
request.onupgradeneeded = event => {
    console.log('Actualizar de DB');
    let db = event.target.resul;
    db.createObjectStore('heroes', {
        keyPath: 'id'
    });
};





