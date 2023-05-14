package com.hospital.project.repositry;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;

@Transactional
public interface PatientRepository extends JpaRepository<Patient, Integer> {

	@Query("select l  from Patient l where login.login_id=:uid")
	public Optional<Patient> loginid(int uid);

	@Query("select d from Patient d where login=:l")
	public Patient getPatient(Login l);

}
