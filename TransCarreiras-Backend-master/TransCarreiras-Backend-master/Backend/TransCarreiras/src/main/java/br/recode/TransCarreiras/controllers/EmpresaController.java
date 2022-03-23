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

import br.recode.TransCarreiras.entities.Empresa;
import br.recode.TransCarreiras.repositories.EmpresaRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/v1/empresas")
public class EmpresaController {
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	// get all companies rest api
	@GetMapping
	public ResponseEntity<List<Empresa>> findAll() {
		
		List<Empresa> empresas = empresaRepository.findAll();
		
		return ResponseEntity.ok().body(empresas);
	}
	
	// Get companies by id rest api
	@GetMapping("/{id}")
	public ResponseEntity<Empresa> findById(@PathVariable Long id) {
		
		Empresa empresa = empresaRepository.findById(id).get();
		
		return ResponseEntity.ok().body(empresa);
	}
	
	// Create company rest api
	@PostMapping
	public Empresa createCompany(@RequestBody Empresa empresa) {
		
		return empresaRepository.save(empresa);
	}
	
	// Update companies rest api
	@PutMapping("/{id}")
	public ResponseEntity<Empresa> update(@PathVariable long id, @RequestBody Empresa empresaDetails) {
		
		Empresa updateEmpresa = empresaRepository.findById(id).get();
		
		updateEmpresa.setNome(empresaDetails.getNome());
		updateEmpresa.setEndereco(empresaDetails.getEndereco());
		updateEmpresa.setDescricao(empresaDetails.getDescricao());
		updateEmpresa.setLink(empresaDetails.getLink());
		
		empresaRepository.save(updateEmpresa);
		
		return ResponseEntity.ok(updateEmpresa);
	}
	
	// Delete companies rest api
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
		
		Empresa empresa = empresaRepository.findById(id).get();
		
		empresaRepository.delete(empresa);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	

}
