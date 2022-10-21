package com.luiz.apipc.banco;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.luiz.apipc.entidade.Usuario;

@Repository
public interface UsuarioBanco extends CrudRepository<Usuario, Integer>{
    
}
