package com.example.demo.Entidades;

import com.example.demo.User.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Register {
	String username;
	String password;
	String fistname;
	String lastName;
	String country;
	Datos datos;
	Role role;
	
	
}
