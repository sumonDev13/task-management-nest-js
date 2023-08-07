import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuidv4 from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTasks(title: string, description: string) {
    const task: Task = {
      id: uuidv4,
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
