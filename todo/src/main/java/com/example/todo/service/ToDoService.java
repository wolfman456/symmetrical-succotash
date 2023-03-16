package com.example.todo.service;

import com.example.todo.model.ToDoModel;
import com.example.todo.repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    @Autowired
    TodoRepo todoRepo;
    public List<ToDoModel> getToDo(){
        return todoRepo.findAll();
    }

    public ToDoModel createToDo(ToDoModel toDoModel){
        return todoRepo.save(toDoModel);
    }
    public ToDoModel updateTodo(ToDoModel toDoModel){
        ToDoModel oldToDo = todoRepo.findById(toDoModel.getId()).orElseThrow();

        if(toDoModel.getComplete() != null){
            oldToDo.setComplete(toDoModel.getComplete());
        }
        if (toDoModel.getName()!=null){
            oldToDo.setName(toDoModel.getName());
        }
        if (toDoModel.getDescription() != null){
            oldToDo.setDescription(toDoModel.getDescription());
        }
        return todoRepo.save(oldToDo);
    }
    public void deleteToDo(Long id){
        ToDoModel toDoModel = todoRepo.findById(id).orElseThrow();
        todoRepo.delete(toDoModel);
    }
}
