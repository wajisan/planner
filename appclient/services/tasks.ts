import axios from 'axios';
import { fake_database } from '../data/data';
import { Task, TasksUser } from '../models/models';

interface TaskHomePayload {
    homeId: string,
    day: number
}

interface TaskUserPayload {
    userId: string,
    day: number
}

export const getTestAPI = () => {
    
    const apiURL = 'http://192.168.122.1:3998/';
    fetch(apiURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erreur de requête: ${response.status} - ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {

          // Traite les données reçues de ton API
          console.log("DATA", data);
        })
        .catch((error) => {
          // Gère les erreurs
          console.error(error);
        });
}


export const getTasksByUser = (payload: TaskUserPayload) => {
    
    let taskIds = fake_database.user_link_task?.filter((userTask, index) => {
        return (userTask.userId === payload.userId) && (userTask.day === payload.day)
    }).map(item => item.taskId)

    let tasks : Task[] = [];

    if (taskIds?.length) {
        tasks = fake_database.tasks?.filter(task => {
            return taskIds?.includes(task.id)
        }) ?? []
    }

    return tasks;
}


export const getUsersByHome = async (payload: TaskHomePayload) => {
        
    let tasksUsers : TasksUser[] = [];

    let userIds = fake_database.user_link_home?.filter((userHome, index) => {
        return (userHome.homeId === payload.homeId)
    }).map(item => item.userId)

    userIds?.forEach(userId => {
        tasksUsers.push({
            userId: userId,
            tasks: getTasksByUser({userId, day: payload.day})
        })
    })

    return tasksUsers;
}
    
    /*
    try {
      const response = await axios.post('/api/tasks', payload);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
      throw error;
    }
    */


export { TaskHomePayload, TaskUserPayload };