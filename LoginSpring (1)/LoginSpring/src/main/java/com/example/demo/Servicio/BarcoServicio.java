package com.example.demo.Servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entidades.Barco;
import com.example.demo.Entidades.Salida;
import com.example.demo.Entidades.Socio;
import com.example.demo.Repositorio.BarcoRepositorio;
import com.example.demo.Repositorio.SalidaRepositorio;
import com.example.demo.Repositorio.SocioRepositorio;

@Service
public class BarcoServicio {
	
	@Autowired
	SocioRepositorio socioRepositorio;
	
	@Autowired
	BarcoRepositorio barcoRepositorio ;
	
	@Autowired
	SalidaRepositorio salidaRepositorio ;

	public Barco findById(Long id) {
		return barcoRepositorio.findById(id).get();
	}
	
	public List<Barco> findAll(){
		return barcoRepositorio.findAll();
	}
	
	public ResponseEntity<String> subirBarco(Barco barco) {
		barcoRepositorio.save(barco);
		return ResponseEntity.status(HttpStatus.CREATED).body("Creado el Barco");
	}
	
	public String updateBarco(Long id,Barco NuevosDatos) {
		try {
			Barco barco = barcoRepositorio.findById(id).get();
			StringBuilder datoModificado = new StringBuilder();
		if ((NuevosDatos.getNumeroMatricula()!= null)) {
			barco.setNumeroMatricula(NuevosDatos.getNumeroMatricula());
			datoModificado.append("modificado numMatricula ");
			System.out.println("1");
		}
		if (!(NuevosDatos.getNombre().isEmpty() || NuevosDatos.getNombre()== null)) {
			barco.setNombre(NuevosDatos.getNombre());
			datoModificado.append("modificado nombre ");
			System.out.println("2");
		}
		if (NuevosDatos.getSocio()!= null) {
			barco.setSocio(NuevosDatos.getSocio());
			datoModificado.append("modificado socio ,");
			System.out.println("3");
		}
		if (NuevosDatos.getSalida()!= null) {
			barco.setSalida(NuevosDatos.getSalida());
			datoModificado.append("modificado salida ");
			System.out.println("4");
		}
		
		barcoRepositorio.save(barco);
		return datoModificado.toString();
		} catch (Exception e) {
			return e.getMessage() + "error";
		}
		
	}
	
	public void deleteBarco(Long id) {
		Barco barco = barcoRepositorio.findById(id).get();
		barco.setSocio(null);
		barcoRepositorio.save(barco);
		barcoRepositorio.deleteById(id);
	}
	
	public String unirSocio(Long idBarco,Long IdSocio) {
		try {
			Barco barco = barcoRepositorio.findById(idBarco).get();
			Socio socio = socioRepositorio.findById(IdSocio).get();
			barco.setSocio(socio);
			barcoRepositorio.save(barco);
			return "Bien";
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	public String unirSalida(Long idBarco,Long idSalida) {
		try {
			Barco barco = barcoRepositorio.findById(idBarco).get();
		    Salida salida = salidaRepositorio.findById(idSalida).get();
		    barco.setSalida(salida);
		    barcoRepositorio.save(barco);
		    return "Se ha unido correctamente";
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
}
