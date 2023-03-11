package com.example.todo.repo;

import com.example.todo.model.ToDoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<Long, ToDoModel> {
}
