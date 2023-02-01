alert('Bienvenido a la Fabrica de Sushi');

console.log('Bienvenidos a la Fabrica de Sushi')

const combos = [
    {
        nombre: "Combo QATAR",
        precio: 5760,
        categoria: "Clásico",
    },
    {
        nombre: "Combo ROMA",
        precio: 3200,
        categoria: "Variado",
    },
    {
        nombre: "Combo CRISPY",
        precio: 4490,
        categoria: "Sabroso",
    },
    {
        nombre: "Combo FRIENDS",
        precio: 3700,
        categoria: "Variado",
    }
];



for(let i=0; i<=5; i++){
    const nombreCombo = prompt("Ingrese nombre del combo");
    const encontrar = combos.find( (combo) => combo.nombre === nombreCombo);
    console.log(encontrar);
    
    while (nombreCombo !== 0) {
    
        switch  (nombreCombo) {
            case 'Combo QATAR':
                alert(' $5760 *6 NIGURIS CON PALTA. *6 ROLL HOT SENSATION, salmon, queso y palta, rebozado al panko y frito. *6 ROLL SENSATION. salmon, queso y palta. *6 ROLL PARAISO DE LANGOSTINOS. langostinos, queso, corona de batatas frtias con salsa de maracuya y mango.4 Geishas de lamina de pepino con relleno salmon y queso. *6 ROLL EVINO SALMON, queso, verdeo, langostinos y recubierto por salmon. *6 ROLL EVINO VERDE, queso, langostino y recubierto por palta.');
            break;
        
            case 'Combo ROMA':
                alert(' $3200 *6 Roll relleno de SALMON alimonado y queso Con salsa mayonesa de palta y wasabi *6 Roll tomate queso palta y rucula  *6 Roll kanikama HOT. kanikama, queso al panko frito  *6 Roll mayonesa de ave ( pollo mayo y polvo de ajo) y palta sin queso. *4 Niguiris de lango con tirita de alga y entre el lango y la bola de arroz una micro dosis de wasabi. *6 chicken crunch con queso y con corona de cebolla caramelizada sesamo tostado. *6 Roll de zanahoria, queso, pepino y palta con cobertura de semillas de sesamo')
            break;
        
            case 'Combo CRISPY':
                alert('$4490 *6 Rolls Sensation. Salmón, queso y palta, recubierto con sésamo tostado. *4 Rolls Philadelphia. Salmón, queso y verdeo, recubierto con sésamo tostado. *6 Rolls Hot Sensation. Salmón, queso y palta, al PANKO frito. *6 Rolls Paraiso. Salmon, queso y corona de batatas fritas con salsa de mango y maracuyá, recubierto con sésamo tostado. *6 Rolls Evino Crunch, langostino al panko frito dentro del roll con queso y verdeo, con cobertura de semillas de sésamo. ')
            break;
        
            case 'Combo FRIENDS':
                alert('$3700 *6 Rolls Mex Style. Salmón, queso con corona de guacamole, recubierto con sésamo tostado. *6 Rolls Kanikama Crunch. Kanikama empanizado y frito, queso y verdeo, recubierto con sésamo tostado. *6 Rolls Evino Green. Langostino, queso y palta, recubierto con sésamo tostado. *3 Rolls Chicken Crunch. Pollo empanizado y frito, queso y verdeo, recubierto con sésamo tostado. *3 Rolls Paraiso mango sweeet. mango, queso y corona de batatas fritas, recubierto con sésamo tostado. *4 Geishas de pepino vegetarianas.')
            break;
        
            default:
                alert('No se ha ingresado ninguna tabla de sushi!')
            break;
        
            }

        break;
        }

    alert('Pedido N° '+ i)
    
    if (i === 5) {
        break;
    }
    
    }


function  tomarPedidos(){
    
        console.log('El pedido del cliente es ' + eleccionTablas)

}

console.log('Fin del día')

    
