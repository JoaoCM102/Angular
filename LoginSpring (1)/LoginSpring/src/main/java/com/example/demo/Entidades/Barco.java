package com.example.demo.Entidades;


import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Validated
@Data
public class Barco {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idBarco;
	
	@Basic
	@Column(nullable = false)
	@NotBlank
    private String numeroMatricula;
	
	@NotBlank(message = "El campo nombre esta vacio")
    private String nombre;
	
	@NotNull
    private int numeroAmarre;
    private double cuota; 
    
    @OneToOne
    @JoinColumn(
    		name = "salida",
    		referencedColumnName = "idSalida")
    @JsonIgnore
    private Salida salida;
    
    
    
    @ManyToOne
    @JoinColumn(
    		name = "idSocio",
    		referencedColumnName = "idSocio")
    @JsonIgnore
    private Socio socio;
}
