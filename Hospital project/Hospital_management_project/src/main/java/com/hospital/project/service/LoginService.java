package com.hospital.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Login;
import com.hospital.project.repositry.DoctorRepository;
import com.hospital.project.repositry.LoginReprositry;
import com.hospital.project.repositry.PatientRepository;
import com.hospital.project.repositry.StaffRepository;

@Service
public class LoginService {
	@Autowired
	LoginReprositry lrepo;

	@Autowired
	PatientRepository prepo;

	@Autowired
	DoctorRepository drepo;

	@Autowired
	StaffRepository srepo;

	public Login CheckLogin(String uid, String pwd) {
		return lrepo.checkLogin(uid, pwd);

	}

	public Login find(int id) {
		return lrepo.findById(id).get();
	}

	public Login add(Login l) {
		return lrepo.save(l);
	}
}
