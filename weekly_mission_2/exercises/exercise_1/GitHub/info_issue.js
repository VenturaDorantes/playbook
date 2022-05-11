const issue = {
    title: "06 Live 3 Semana 2 [Jueves 14 de Abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberOfComments: 64, 
    labels: [
        "FINALIZADO",
        "LIVE 3",
        "Semana-2"
    ],
    author: "carlogilmar",
    dateCreated: "14-Abril-2022",
    lastUpdated: "14-Abril-2022",

    getTitleAndAuthor: function(){
        return `El titulo del Issue es ${this.title} de ${this.author}`
    },

    getGeneralInfo: function(){
        return `El Issue de ${this.title} fue creado el dia ${this.dateCreated} con los labels de ${this.labels}`
    }
}

console.log("Repositorio asociado: " + issue.repositoryNameAssociated)
console.log("Issues status: " + issue.status)
console.log("Numero de comentarios: " + issue.numberOfComments)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
