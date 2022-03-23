package br.recode.TransCarreiras.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.recode.TransCarreiras.entities.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {

}
