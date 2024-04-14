package com.example.demo.Entidades;

import org.springframework.validation.annotation.Validated;

import com.example.demo.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Basic;
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
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Validated
@Entity
public class Datos {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDatos;
	
	@Basic
	@Column(nullable = false)
	@NotBlank
    private String calle;
	
	@NotBlank(message = "El campo nombre esta vacio")
    private String codigoPostal;
	
	@NotNull
    private String email;
    private String telefono; 
    
    @OneToOne(
    		mappedBy = "datos")
	@JsonIgnore
    private User user;
}

