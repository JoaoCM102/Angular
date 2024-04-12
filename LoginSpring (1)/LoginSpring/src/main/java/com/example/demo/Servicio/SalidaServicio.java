package com.example.demo.Servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entidades.Salida;
import com.example.demo.Repositorio.SalidaRepositorio;

@Service
public class SalidaServicio {
	
	@Autowired
	SalidaRepositorio salidaRepositorio ;
	
	public Salida findById(Long id) {
		return salidaRepositorio.findById(id).get();
	}
	
	public List<Salida> findAll(){
		return salidaRepositorio.findAll();
	}
	
	
	public ResponseEntity<String> subirSalida(Salida salida) {
		salidaRepositorio.save(salida);
		return ResponseEntity.status(HttpStatus.CREATED).body("Creada la salida");
	}
	
	public void updateSalida(Long id,Salida NuevosDatos) {
		
	}
	
	public void deleteSalida(Long id) {
		salidaRepositorio.deleteById(id);
	}
}
