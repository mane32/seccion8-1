
// indexedDB: Reforzamiento

let request = window.indexedDB.open('mi-database', 1);
// se actualiza cuando se crea o se sube de versioj de la DB
request.onupgradeneeded = event => {
    console.log('Actializacion');
    let db = event.target.result;
    db.createObjectStore('heroes', {
        keyPath: 'id'
    });
};

// Manejo de errores 

request.onerror = event => {
    console.log('DB error:', event.target.error);
};


//Insertar datos
request.onsuccess = event => {
    let db = event.target.result;

    let heroesData = [
        { id: '1111', heroe: 'Spiderman', mensaje: 'holi' },
        { id: '2222', heroe: 'Ironman <3', mensaje: 'holi bb' }
    ];

    let heroesTransaction = db.transaction('heroes', 'readwrite');

    heroesTransaction.onerror = event => {
        console.log('Error guardaddo', event.target.error);
    };
    //Informa sobre el exito de la transaccion

    heroesTransaction.oncomplete = event => {
        console.log('Transaccion hecha', event);
    };

    let heroesStore = heroesTransaction.objectStore('heroes');


    for (let heroe of heroesData) {
        heroesStore.add(heroe);
    }

    heroesStore.onsuccess = event => {
        console.log('Nuevo item agregado a la DB');
    }
};




