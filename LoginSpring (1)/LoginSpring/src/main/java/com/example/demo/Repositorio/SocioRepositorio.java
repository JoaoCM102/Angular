package com.example.demo.Repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entidades.Socio;

@Repository
public interface SocioRepositorio extends JpaRepository<Socio, Long>{

    @Query("select c from Socio c where c.nombre = ?1")
    Socio getSocioByName(String nombre);
}
