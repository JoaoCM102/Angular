package com.example.demo.Controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entidades.Patron;
import com.example.demo.Servicio.PatronServicio;

@RestController
@RequestMapping("/patron")
public class PatronControlador {
	
	@Autowired
	PatronServicio servicio;
	
	@GetMapping("/all")
	public List<Patron> allPatron(){
		return servicio.findAll();
	}
	
	@GetMapping("/{idPatron}")
	public ResponseEntity<Patron> findById(@PathVariable long idPatron) {
		return ResponseEntity.ok(servicio.findById(idPatron));
	}
	
	@PostMapping()
	public ResponseEntity<String> postPatron(@RequestBody Patron patron){
		servicio.subirPatron(patron);
		return ResponseEntity.status(HttpStatus.CREATED).body("Creado el patron");
	}
	
	@DeleteMapping("/{idPatron}")
	public ResponseEntity<String> borrar(@PathVariable long idPatron) {
		servicio.deletePatron(idPatron);
		return ResponseEntity.ok("Borrado");
	}
	
	
}
