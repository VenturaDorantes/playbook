const pullRequest = {
    title: "Agregando mi PR - Ventura Dorantes",
    branchName: "Agregando mi PR - Ventura Dorantes",
    dateCreated: "13-Abril-2022",
    status: "Open",
    author: "VenturaDorantes",
    repositoryNameAssociated: "launch-x-explorers",

    getStatus: function(){
        return `El status del Pull Request es: ${this.status}`
    },

    getTitleAndAuthor: function(){
        return `El titulo del Pull Request es ${this.title} de ${this.author}`
    }
}

console.log("Pull Request creado el: " + pullRequest.dateCreated)
console.log("Repositorio Asociado: " + pullRequest.repositoryNameAssociated)
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())