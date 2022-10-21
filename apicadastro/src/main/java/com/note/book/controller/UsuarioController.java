package com.note.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.note.book.banco.UsuarioBanco;
import com.note.book.entidade.Usuario;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioBanco acessoBanco;

    @GetMapping("/usuarios")
    public List<Usuario> listaUsuarios(){
        return (List<Usuario>)acessoBanco.findAll();
    }
    
}
