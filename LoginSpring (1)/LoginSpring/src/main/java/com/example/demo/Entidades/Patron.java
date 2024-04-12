package com.example.demo.Entidades;


import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import lombok.Data;

@Entity
@Validated
@Data
public class Patron {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPatron;
	
	@Basic
	@Column(nullable = false)
	@NotBlank(message = "El nombre esta vacio ")
    private String nombre;
	
	@Column(nullable = false)
	@NotBlank(message = "El apellido esta vacio ")
    private String apellido;
	
	@NotBlank(message = "La direccion esta vacio ")
    private String direccion;
	
	@NotBlank(message = "El telefono no puede estar vacio ")
    @Column(nullable = false)
    private String telefono;
    
    @Email
    private String email;
    
    @JsonIgnore
    @OneToOne(
    		mappedBy = "patron")
    private Salida salida;
}
