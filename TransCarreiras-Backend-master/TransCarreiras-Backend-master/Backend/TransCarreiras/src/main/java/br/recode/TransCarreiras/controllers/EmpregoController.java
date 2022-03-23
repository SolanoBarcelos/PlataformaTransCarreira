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

import br.recode.TransCarreiras.entities.Emprego;
import br.recode.TransCarreiras.entities.Empresa;
import br.recode.TransCarreiras.repositories.EmpregoRepository;
import br.recode.TransCarreiras.repositories.EmpresaRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/v1/vagas")
public class EmpregoController {
	
	@Autowired
	private EmpregoRepository empregoRepository;
	
	@Autowired
	private EmpresaRepository empresaRepository;


// Get all jobs
@GetMapping
public ResponseEntity<List<Emprego>> findAll() {
	
	List<Emprego> empregos = empregoRepository.findAll();
	
	return ResponseEntity.ok().body(empregos);
}

// Get jobs by id rest api
@GetMapping("/{id}")
public ResponseEntity<Emprego> findById(@PathVariable Long id) {
	
	Emprego emprego = empregoRepository.findById(id).get();
	
	return ResponseEntity.ok().body(emprego);
}

// Create jobs rest api
@PostMapping
public Emprego createJob(@RequestBody Emprego emprego) {
	
	return empregoRepository.save(emprego);
}

// update job rest api
@PutMapping("/{id}")
public ResponseEntity<Emprego> updateJob(@PathVariable long id, @RequestBody Emprego empregoDetails) {
	
	Emprego updateEmprego = empregoRepository.findById(id).get();
	Empresa empresa = empresaRepository.findById(empregoDetails.getEmpresa().getId()).get();
	
	updateEmprego.setCargo(empregoDetails.getCargo());
	updateEmprego.setLink(empregoDetails.getLink());
	updateEmprego.setEmpresa(empresa);
	
	empregoRepository.save(updateEmprego);
	
	return ResponseEntity.ok(updateEmprego);

}

// Delete job rest api
@DeleteMapping("/vagas/{id}")
public ResponseEntity<HttpStatus> deleteJob(@PathVariable long id) {
	
	Emprego emprego = empregoRepository.findById(id).get();
	
	empregoRepository.delete(emprego);
	
	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}














}


