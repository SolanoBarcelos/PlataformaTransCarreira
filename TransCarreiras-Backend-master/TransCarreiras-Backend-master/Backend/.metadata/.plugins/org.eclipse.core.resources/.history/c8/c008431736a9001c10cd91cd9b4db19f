package br.recode.TransCarreiras.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.recode.TransCarreiras.entities.Curso;
import br.recode.TransCarreiras.entities.Emprego;
import br.recode.TransCarreiras.entities.TransUser;
import br.recode.TransCarreiras.repositories.CursoRepository;
import br.recode.TransCarreiras.repositories.EmpregoRepository;
import br.recode.TransCarreiras.repositories.TransUserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/v1/trans")
public class TransUserController {
	
	@Autowired
	TransUserRepository transRepository;
	
	@Autowired
	CursoRepository cursoRepository;

	@Autowired
	EmpregoRepository empregoRepository;
	
	// Get all users api rest
	@GetMapping
	public ResponseEntity<List<TransUser>> findAll() {
		
		List<TransUser> transUsers = transRepository.findAll();
		
		return ResponseEntity.ok().body(transUsers);
	}
	
	// Get user by id api rest
	@GetMapping("/{id}")
	public ResponseEntity<TransUser> findById(@PathVariable Long id) {
		
		TransUser transUser = transRepository.findById(id).get();
		
		return ResponseEntity.ok().body(transUser);
	}
	
	// Create user api rest
	@PostMapping
	public TransUser createUser(@RequestBody TransUser transUser) {
		
		return transRepository.save(transUser);
	}
	
	// Update user api rest
	@PutMapping("/{id}")
	public ResponseEntity<TransUser> update(@PathVariable long id, @RequestBody TransUser transDetails) {
		
		TransUser updateTrans = transRepository.findById(id).get();
		Curso curso = cursoRepository.findById(transDetails.getCurso().getId()).get();
		Emprego emprego = empregoRepository.findById(transDetails.getEmprego().getId()).get();
		
		updateTrans.setNome(transDetails.getNome());
		updateTrans.setEmail(transDetails.getEmail());
		updateTrans.setTelefone(transDetails.getTelefone());
		updateTrans.setCurso(curso);
		updateTrans.setEmprego(emprego);
		
		transRepository.save(updateTrans);
		
		return ResponseEntity.ok(updateTrans);
		
	}
	// Delete user api rest
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable long id) {
		
		TransUser transUser = transRepository.findById(id).get();
		
		transRepository.delete(transUser);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
	

}
