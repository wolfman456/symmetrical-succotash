package com.example.todo.controller;

import com.example.todo.model.ToDoModel;
import com.example.todo.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    ToDoService toDoService;

    @GetMapping("/test")
    public String hello(){
        return "hello";
    }

    @GetMapping
    public ResponseEntity<?> getToDO(){
        List<ToDoModel> toDoModelList= toDoService.getToDo();
        return ResponseEntity.ok(toDoModelList);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createToDO(@RequestBody ToDoModel toDoModel){
        ToDoModel toDoModel1 = toDoService.createToDo(toDoModel);
        return ResponseEntity.ok(toDoModel1);
    }
    @PostMapping("/update")
    public ResponseEntity<?> updateToDo(@RequestBody ToDoModel toDoModel){
        ToDoModel toDoModel1 = toDoService.updateTodo(toDoModel);
        return ResponseEntity.ok(toDoModel1);
    }
    @DeleteMapping("/deleted/{id}")
    public ResponseEntity<?> deleteToDo(@PathVariable(value = "id") Long id){
        toDoService.deleteToDo(id);
        return ResponseEntity.ok().build();
    }

}
