package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.project.entiries.Admission;

public interface AdmissionReprository extends JpaRepository<Admission, Integer> {

}
