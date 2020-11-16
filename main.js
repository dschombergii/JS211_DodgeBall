
const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska",
        yearsExperience: 5
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky",
        yearsExperience: 7
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas",
        yearsExperience: 10
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York",
        yearsExperience: 3
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia",
        yearsExperience: 6
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California",
        yearsExperience: 9
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana",
        yearsExperience: 20
    },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
        this.id = id;
        this.name = name;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
}
class BlueTeammate {
    constructor(id, name, mascot, teamColor) {
        this.id = id;
        this.name = name;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
}
class RedTeammate {
    constructor(id, name, mascot, teamColor) {
        this.id = id;
        this.name = name;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
}


window.addEventListener('load', function (windowLoadE) {
    listPeopleChoices()
})


const listPeopleChoices = () => {
    let listPerson = document.getElementById('people')
    let listSkill = document.getElementById('skills')

    arrOfPeople.map(person => {
        let liPerson = document.createElement("li")
        let liSkill = document.createElement("li")
        let button = document.createElement("button")

        button.innerHTML = "JOIN"
        button.addEventListener('click', () => {
            listPerson.removeChild(liPerson)
            listSkill.removeChild(liSkill)
            makePlayer(person.id)
        })

        liPerson.innerHTML = `${person.name}`
        liSkill.innerHTML = `Skill: ${person.skillSet} `
        liSkill.appendChild(button)
        listPerson.append(liPerson)
        listSkill.append(liSkill)
    })
}


const makePlayer = (id) => {
    let baller = arrOfPeople.find(player => player.id === id)
    let index = arrOfPeople.indexOf(baller)

    arrOfPeople.splice(index, 1)

    const newPlayer = new Player(baller.id, baller.name, true, true, true, true, baller.yearsExperience)
    listOfPlayers.push(newPlayer)

    let ballersList = document.getElementById('ballers')
    let experienceList = document.getElementById('experience')
    let teamButtons = document.getElementById('teamButtons')
    let liBaller = document.createElement("li")
    let liExperience = document.createElement("li")
    let throwbocopsButton = document.createElement("button")
    let incrediballsButton = document.createElement("button")

    throwbocopsButton.innerHTML = "THROWBOCOPS"
    throwbocopsButton.style = "background: #3c3cff;"
    throwbocopsButton.addEventListener('click', () => {
        ballersList.removeChild(liBaller)
        experienceList.removeChild(liExperience)
        teamButtons.removeChild(throwbocopsButton)
        teamButtons.removeChild(incrediballsButton)
        makeBlueTeam(baller.id)
    })

    incrediballsButton.innerHTML = "THE INCREDIBALLS"
    incrediballsButton.style = "background: #e64444;"
    incrediballsButton.addEventListener('click', () => {
        ballersList.removeChild(liBaller)
        experienceList.removeChild(liExperience)
        teamButtons.removeChild(throwbocopsButton)
        teamButtons.removeChild(incrediballsButton)
        makeRedTeam(baller.id)
    })

    liBaller.innerHTML = `${baller.name}`
    ballersList.append(liBaller)
    liExperience.innerHTML = `Experience: ${baller.yearsExperience} Years  `
    experienceList.append(liExperience)
    teamButtons.appendChild(throwbocopsButton)
    teamButtons.appendChild(incrediballsButton)
}


const makeBlueTeam = (id) => {
    let teammate = listOfPlayers.find(teammate => teammate.id === id)
    let index = listOfPlayers.indexOf(teammate)

    listOfPlayers.splice(index, 1)

    const newBlueTeammate = new BlueTeammate(teammate.id, teammate.name, 'THROWBOCOPS', 'Blue')
    blueTeam.push(newBlueTeammate)

    let throwbocop = blueTeam.find(teammate => teammate.id === id)
    let listThrowbocops = document.getElementById('throwbocops')

    let li = document.createElement("li")

    li.innerHTML = `${throwbocop.name} is now a member of ${throwbocop.mascot}!`
    listThrowbocops.append(li)
}


const makeRedTeam = (id) => {
    let teammate = listOfPlayers.find(teammate => teammate.id === id)
    let index = listOfPlayers.indexOf(teammate)

    listOfPlayers.splice(index, 1)

    const newRedTeammate = new RedTeammate(teammate.id, teammate.name, 'THE INCREDIBALLS', 'Red')
    redTeam.push(newRedTeammate)

    let incrediball = redTeam.find(teammate => teammate.id === id)
    let listIncrediballs = document.getElementById('incrediballs')

    let li = document.createElement("li")

    li.innerHTML = `${incrediball.name} is now a member of ${incrediball.mascot}!`
    listIncrediballs.append(li)
}

