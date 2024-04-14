package com.example.demo.Controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.User.User;
import com.example.demo.User.UserRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("ver/datos")
public class DatosControlador {
	
	
	
	
	
	@Autowired
	UserRepository servicio;

	
	
	@GetMapping("/all")
	public List<User> allSocio(){
		return servicio.findAll();
	}
	
	@GetMapping("/{username}")
	public ResponseEntity<User> findById(@PathVariable String username) {
		return ResponseEntity.ok(servicio.findByUsername(username).get());
	}
	
}
