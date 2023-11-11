import { User, Task, Home, UserHome, TaskUser } from "../models/models";

const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const currentHomeId = "001";

interface FakeDatabase {
    users?: User[],
    homes?: Home[],
    user_link_home?: UserHome[],
    tasks?: Task[],
    user_link_task?: TaskUser[]

}

const fake_database : FakeDatabase = {
    users: [
        {
            id: "001",
            name: "Wadi"
        },
        {
            id: "002",
            name: "Ghizlane"
        },
    ],
    homes: [
        {
            id: "001",
            name: "Villiers"
        }
    ],
    user_link_home: [
        {
            id: "001",
            userId: "001",
            homeId: "001"
        },
        {
            id: "002",
            userId: "002",
            homeId: "001"
        }
    ],
    tasks: [
        {
            id: "001",
            name: "Cuisiner",
            homeId: "001"
        },
        {
            id: "002",
            name: "Faire la vaisselle",
            homeId: "001"
        },
        {
            id: "003",
            name: "Machine à laver et étendre",
            homeId: "001"
        },
        {
            id: "004",
            name: "Ranger vetements",
            homeId: "001"
        },
        {
            id: "005",
            name: "Liste de courses",
            homeId: "001"
        },
        {
            id: "006",
            name: "Faire les courses",
            homeId: "001"
        },
        {
            id: "007",
            name: "Ranger les courses",
            homeId: "001"
        },
        {
            id: "008",
            name: "Arroser les plantes",
            homeId: "001"
        },
        {
            id: "009",
            name: "Sortir la poubelle",
            homeId: "001"
        },
    ],
    user_link_task: [
        {
            id: "001",
            userId: "002",
            taskId: "001",
            day: 1,
        },
        {
            id: "002",
            userId: "001",
            taskId: "002",
            day: 1,
        },
        {
            id: "003",
            userId: "001",
            taskId: "003",
            day: 1,
        },
        {
            id: "004",
            userId: "002",
            taskId: "002",
            day: 1,
        },
        {
            id: "005",
            userId: "002",
            taskId: "004",
            day: 2,
        },
        {
            id: "006",
            userId: "001",
            taskId: "001",
            day: 2,
        },
        {
            id: "007",
            userId: "001",
            taskId: "008",
            day: 3,
        },
        {
            id: "008",
            userId: "002",
            taskId: "008",
            day: 3,
        },
        {
            id: "009",
            userId: "002",
            taskId: "002",
            day: 4,
        },
        {
            id: "010",
            userId: "002",
            taskId: "003",
            day: 4,
        },
        {
            id: "011",
            userId: "001",
            taskId: "001",
            day: 4,
        },
        {
            id: "012",
            userId: "002",
            taskId: "001",
            day: 5,
        },
        {
            id: "013",
            userId: "002",
            taskId: "005",
            day: 5,
        },
        {
            id: "014",
            userId: "001",
            taskId: "002",
            day: 5,
        },
        {
            id: "015",
            userId: "001",
            taskId: "004",
            day: 5,
        },
        {
            id: "016",
            userId: "001",
            taskId: "004",
            day: 6,
        },
        {
            id: "017",
            userId: "002",
            taskId: "007",
            day: 6,
        }
        
    ]
}



export {daysOfWeek, currentHomeId, fake_database};