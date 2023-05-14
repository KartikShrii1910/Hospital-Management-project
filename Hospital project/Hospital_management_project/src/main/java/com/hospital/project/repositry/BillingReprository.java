package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.project.entiries.Billing;

public interface BillingReprository extends JpaRepository<Billing, Integer> {

}
