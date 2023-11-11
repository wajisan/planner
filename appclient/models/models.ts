interface User {
    id: string;
    name?: string;
    email?: string;
  }
  
interface Task {
    id: string;
    name: string;
    homeId?: string, 
    isDone?: boolean;
}

interface Home {
    id: string;
    name: string;
}

interface UserHome {
    id: string,
    userId: string,
    homeId: string
}

interface TaskUser {
    id: string,
    taskId: string,
    userId: string,
    day: number,
    
}

interface TasksUser {
    userId: string,
    tasks: Task[]
}


export { User, Task, Home, UserHome, TaskUser, TasksUser }; 