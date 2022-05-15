class pullRequest {
    constructor (title, branchName, dateCreated, status, author, repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.author = author
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    get getStatus(){
        return `El status del Pull Request es: ${this.status}`
    }

    get getTitleAndAuthor(){
        return `El titulo del Pull Request es ${this.title} de ${this.author}`
    }
}

const newTitle = "Agregando mi PR - Ventura Dorantes"
const newBranchName = "Agregando mi PR - Ventura Dorantes"
const newDateCreated = "13-Abril-2022"
const newStatus = "Open"
const newAuthor = "VenturaDorantes"
const newRepositoryNameAssociated = "launch-x-explorers"

const dataPullRequest = new pullRequest(newTitle, newBranchName, newDateCreated, newStatus, newAuthor, newRepositoryNameAssociated)

console.log("Pull Request creado el: " + dataPullRequest.dateCreated)
console.log("Repositorio Asociado: " + dataPullRequest.repositoryNameAssociated)
console.log(dataPullRequest.getStatus)
console.log(dataPullRequest.getTitleAndAuthor)