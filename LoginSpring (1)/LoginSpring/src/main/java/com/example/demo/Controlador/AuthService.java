package com.example.demo.Controlador;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Entidades.Login;
import com.example.demo.Entidades.Register;
import com.example.demo.Entidades.Socio;
import com.example.demo.JWT.JwsService;
import com.example.demo.User.Role;
import com.example.demo.User.User;
import com.example.demo.User.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
 
	private final UserRepository userRepository;
    private final JwsService jwtService;
    private final BCryptPasswordEncoder passwordEncoderr;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(Login request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user=userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
            .token(token)
            .build();

    }

	public AuthResponse register(Register request) {
		
		User user = User.builder()
				.username(request.getUsername())
				.password(passwordEncoderr.encode(request.getPassword()))
				.firstname(request.getFistname())
				.lastname(request.getLastName())
				.country(request.getCountry())
				.datos(request.getDatos())
				.role(request.getRole())
				.build();
		if (request.getRole()==Role.USER) {
			Socio socio = new Socio();
			socio.setApellido(request.getLastName());
			socio.setEmail(request.getDatos().getEmail());
			socio.setNombre(request.getFistname());
			socio.setTelefono(request.getDatos().getTelefono());
			socio.setDireccion(request.getDatos().getCalle());

			user.setSocio(socio);
		}
		userRepository.save(user);
		
		return AuthResponse.builder()
				.token(jwtService.getToken(user))
				.build();
	}

}
