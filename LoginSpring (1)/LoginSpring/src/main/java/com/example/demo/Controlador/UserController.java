package com.example.demo.Controlador;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entidades.Login;
import com.example.demo.Entidades.Register;

import lombok.RequiredArgsConstructor;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserController {
	
	private final AuthService auth ;
	
	@PostMapping("/login")
	public ResponseEntity<AuthResponse> login(@RequestBody Login request) {
		return ResponseEntity.ok(auth.login(request));
	}
	
	@PostMapping("/register")
	public ResponseEntity<AuthResponse> register(@RequestBody Register request) {
		return ResponseEntity.ok(auth.register(request));
	}
}
