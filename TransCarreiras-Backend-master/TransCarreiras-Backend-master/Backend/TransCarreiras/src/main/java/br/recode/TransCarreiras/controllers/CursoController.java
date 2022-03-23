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
import br.recode.TransCarreiras.repositories.CursoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/v1/cursos")
public class CursoController {
	
	@Autowired
	private CursoRepository cursoRepository;
	
	// Get all courses api rest
	@GetMapping
	public ResponseEntity<List<Curso>> findAll() {
		
		List<Curso> cursos = cursoRepository.findAll();
		
		return ResponseEntity.ok().body(cursos);
	}
	
	// Get by id rest api 
	@GetMapping("/{id}")
	public ResponseEntity<Curso> findById(@PathVariable Long id) {
		
		Curso curso = cursoRepository.findById(id).get();
		
		return ResponseEntity.ok().body(curso);
	}
	
	
	// Create user rest api 
	@PostMapping
	public Curso createUser(@RequestBody Curso curso) {
		
		return cursoRepository.save(curso);
	}
	
	// update user rest api
	@PutMapping("/{id}")
	public ResponseEntity<Curso> updateUser(@PathVariable long id, @RequestBody Curso cursoDetails) {
		
		Curso updateCurso = cursoRepository.findById(id).get();
		
		updateCurso.setNome(cursoDetails.getNome());
		updateCurso.setDescricao(cursoDetails.getDescricao());
		updateCurso.setLink(cursoDetails.getLink());
		
		cursoRepository.save(updateCurso);
		
		return ResponseEntity.ok(updateCurso);
	}
	
	// Delete user rest api
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable long id) {
		
		Curso curso = cursoRepository.findById(id).get();
		
		cursoRepository.delete(curso);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
