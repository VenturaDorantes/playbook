class issue {
    constructor (title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    get getTitleAndAuthor(){
        return `El titulo del Issue es ${this.title} de ${this.author}`
    }

    get getGeneralInfo(){
        return `El Issue de ${this.title} fue creado el dia ${this.dateCreated} con los labels de ${this.labels}`
    }
}

const newTitle = "06 Live 3 Semana 2 [Jueves 14 de Abril]"
const newRepositoryNameAssociated = "MissionNodeJS"
const newStatus = "Open"
const newNumberOfComments = 64
const newLabels = [
    "FINALIZADO",
    "LIVE 3",
    "Semana-2"
]
const newAuthor = "carlogilmar"
const newDateCreated = "14-Abril-2022"
const newLastUpdated = "14-Abril-2022"



const dataIssue = new issue(newTitle, newRepositoryNameAssociated, newStatus, newNumberOfComments, newLabels, newAuthor, newDateCreated, newLastUpdated)

console.log("Repositorio asociado: " + dataIssue.repositoryNameAssociated)
console.log("Issues status: " + dataIssue.status)
console.log("Numero de comentarios: " + dataIssue.numberOfComments)
console.log(dataIssue.getTitleAndAuthor)
console.log(dataIssue.getGeneralInfo)