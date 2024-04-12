package com.example.demo.Repositorio;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entidades.Barco;


@Repository
public interface BarcoRepositorio extends JpaRepository<Barco, Long>{

    @Query("select c from Barco c where c.nombre = ?1")
    Barco getBarcoByNombreBarco(String nombre);
    

    
}
