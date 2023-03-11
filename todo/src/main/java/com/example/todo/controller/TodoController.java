package com.example.todo.controller;

import com.example.todo.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5000")
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    ToDoService toDoService;

    @GetMapping
    public String hello(){
        return "hello";
    }

}
