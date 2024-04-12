package com.hadproject.healthcareapp.Courses;
import com.hadproject.healthcareapp.employee.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CoursesRepositry  extends JpaRepository<Courses, Integer> {
    Optional<List<Courses>> findByEmployee(Employee employee);
}
