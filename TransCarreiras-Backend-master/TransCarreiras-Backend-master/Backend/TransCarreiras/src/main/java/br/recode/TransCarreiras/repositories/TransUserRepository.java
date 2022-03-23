package br.recode.TransCarreiras.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.recode.TransCarreiras.entities.TransUser;

@Repository
public interface TransUserRepository extends JpaRepository<TransUser, Long> {

}
