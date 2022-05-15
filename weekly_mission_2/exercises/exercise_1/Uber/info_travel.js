const travel = {
    origin: "DIF, Ecatepec",
    destination: "Plaza Cosmopol, Coacalco",
    price: 80,
    driver: "Gerardo",

    getDestinationAndPrice: function(){
        return `El destino es ${this.destination} el pago es ${this.price}`
    },

    getDestinationAndDriver: function(){
        return `El conductor ${this.driver} tiene un viaje a ${this.destination}`
    }
}

console.log(travel.getDestinationAndPrice())
console.log(travel.getDestinationAndDriver())