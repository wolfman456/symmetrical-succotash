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
}
