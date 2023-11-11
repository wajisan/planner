import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User, Task, TasksUser } from '../models/models';

import type { TaskHomePayload } from '../services/tasks'
import { getUsersByHome } from '../services/tasks';
import { daysOfWeek } from '../data/data';

interface DayPlanningProps {
  day: number;
  homeId: string;
  currentSlider: number
}



const DayPlanning: React.FC<DayPlanningProps> = ({ day, homeId, currentSlider }) => {


  const canLoad = (sliderIndex: number, itemIndex: number) => {
    const diff = Math.abs(sliderIndex - itemIndex)

    return diff === 0 || diff === 1 || diff === 6
  }

  
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    
    if (canLoad(currentSlider, day)) {
      let taskPayload : TaskHomePayload = {
        homeId,
        day
      }
      
      getUsersByHome(taskPayload)
        .then((data) => {

          data.forEach((user : TasksUser) => {
            setTasks(user.tasks);
          });
         
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des tâches :', error);
        });
    }
  }, [currentSlider]);
 
  return(
    <View style={styles.container}>
      <Text>{daysOfWeek[day]}</Text>

      {
        tasks && tasks.map((task, index) => (
          <View key={index} style={[]}>
            <Text>{task.name}</Text>
          </View>
        ))}


    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DayPlanning;