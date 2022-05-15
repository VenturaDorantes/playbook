const profile = {
    name: "Ventura Dorantes",
    mobile: "12345 12345",
    email: "ventusDS@hotmail.com",

    getNameAndMobile: function(){
        return `Usuario: ${this.name} \nEmail: ${this.email} \nMobile: ${this.mobile}`
    }
}

console.log(profile.getNameAndMobile())