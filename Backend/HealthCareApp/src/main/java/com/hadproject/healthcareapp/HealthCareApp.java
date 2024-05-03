package com.hadproject.healthcareapp;


import com.hadproject.healthcareapp.auth.AuthenticationService;
import com.hadproject.healthcareapp.auth.RegisterRequest;

import com.hadproject.healthcareapp.user.Role;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.Date;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class HealthCareApp {

	public static void main(String[] args) {
		SpringApplication.run(HealthCareApp.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			UserRepository userRepository,


			AuthenticationService authService
	) {

		return args -> {

			try {

				//Create departments


				// Create users

//				var user1 = RegisterRequest.builder()
//						.email("chitransh.kulshrestha@iiitb.ac.in")
//						.password("1234")
//						.fname("Chitransh")
//						.lname("Kulshrestha")
//						.mname("")
//						.gender("M")
//						.hno("Z/3-12")
//						.Street1("ZSI Housing Complex")
//						.Street2("218 Kaulagarh Road")
//						.Pin_Code(248195)
//						.City("Dehradun")
//						.State("Uttarakhand")
//						.Country("India")
//						.District("1")
//						.Mobile("8979197985")
//						.dob(new Date().toString())
//						.dor(new Date().toString())
//						.role(Role.ADMIN).build();
//
//
//
//				authService.register(user1);
//
//				User user11 = userRepository.findById(1).orElse(null);
//
//				if(user11 != null ) {
//
//					Employee employee1 = Employee.builder().title("Professor").photographPath("/path/to/photo3.jpg").user(user11).department(department1).first_name("Chitransh").last_name("Kulshrestha").email("chitransh.kulshrestha@iiitb.ac.in").build();
//					employeeRepository.save(employee1);
//
//
//
//					Courses course11 = Courses.builder().employee(employee1).course_code("CS101").capcity("100").credits("4").name("NO SQL").term("Jan-Juy").year("").year("2023-24").description("NoSQL, short for Not Only SQL, refers to a class of database management systems (DBMS) that deviate from the traditional relational database model. Unlike traditional SQL databases, NoSQL databases are designed to handle a variety of data types and structures, offering flexibility, scalability, and high performance in managing vast amounts of unstructured or semi-structured data.").build();
//
//					coursesRepositry.save(course11);
//
//				}
//
//
//				// Save employees
//				// (Remember to save employeeSalary entries if needed)


			}
			catch (Exception ex) {
				ex.printStackTrace();
			}
		};
	}
}
