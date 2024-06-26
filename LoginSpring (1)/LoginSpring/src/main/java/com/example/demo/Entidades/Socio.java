package com.example.demo.Entidades;

import java.util.List;

import org.springframework.validation.annotation.Validated;

import com.example.demo.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Validated
@NoArgsConstructor
@Entity
public class Socio {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSocio;
	
	@Basic
	@Column(nullable = false)
	@NotBlank(message = "El nombre esta vacio ")
    private String nombre;
	
	@Column(nullable = false)
	@NotBlank(message = "El apellido esta vacio ")
    private String apellido;
	
	@NotBlank(message = "La direccion esta vacio ")
    private String direccion;
	
    @Column(nullable = false)
    private String telefono;
    
    @Email
    private String email;
    
    @OneToMany(
    		cascade = CascadeType.ALL,
    		fetch = FetchType.EAGER)
    private List<Barco> barcos;
    

    @OneToOne(
    		mappedBy = "socio")
	@JsonIgnore
    private User user;
    
}
