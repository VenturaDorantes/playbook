class repo {
    constructor (name, author, languaje, numberCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.languaje = languaje
        this.numberCommits = numberCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }

    get  getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    get getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const dataRepo = new repo("LaunchX", "JoseVentura", "JavaScript", 100, 199, 299, 10, 10)

console.log("Nombre del repo: " + dataRepo.name)
console.log("Issues totales: " + dataRepo.getTotalIssues)
console.log(dataRepo.getGeneralInfo)