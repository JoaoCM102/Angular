package com.example.demo.Controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entidades.Salida;
import com.example.demo.Servicio.SalidaServicio;

@RestController
@RequestMapping("/salida")
public class SalidaControlador {
	
	
	@Autowired
	SalidaServicio servicio;

	
	
	@GetMapping("/all")
	public List<Salida> allBarco(){
		return servicio.findAll();
	}
	
	@GetMapping("/{idSalida}")
	public ResponseEntity<Salida> findById(@PathVariable long idBarco) {
		return ResponseEntity.ok(servicio.findById(idBarco));
	}
	
	@PostMapping()
	public ResponseEntity<String> postBarco(@RequestBody Salida salida){
		return servicio.subirSalida(salida);
	}
	
	@DeleteMapping("/{idSalida}")
	public ResponseEntity<String> borrar(@PathVariable long idSalida) {
		servicio.deleteSalida(idSalida);
		return ResponseEntity.ok("Borrado");
	}
	
	
}
