package br.recode.TransCarreiras.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.recode.TransCarreiras.entities.Emprego;

public interface EmpregoRepository extends JpaRepository<Emprego, Long> {

}
