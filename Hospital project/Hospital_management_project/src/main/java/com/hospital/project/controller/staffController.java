package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.hospital.project.entiries.Department;
import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Staff;
import com.hospital.project.entiries.StaffRegister;
import com.hospital.project.service.DepartmentService;
import com.hospital.project.service.LoginService;
import com.hospital.project.service.StaffService;

@CrossOrigin(origins = "*")
@RestController
public class staffController {

	@Autowired
	StaffService sservice;

	@Autowired
	DepartmentService dservice;

	@Autowired
	LoginService lservice;

	@PostMapping("/registers")
	public Staff registerstaff(@RequestBody StaffRegister pr) {
		Login l = new Login(pr.getUser_email(), pr.getPassword(), "staff");
		Login inserted = lservice.add(l);
		Department dept = dservice.getDepartment(pr.getDept_id());
		int s = dept.getDept_id();
		Staff p = new Staff(pr.getStaff_name(), pr.getUser_email(), pr.getStaff_contact(), pr.getStaff_gender(),
				pr.getPassword(), pr.getStaff_bdate(), pr.getStaff_jdate(), inserted, s);
		return sservice.save(p);
	}

	@GetMapping("/allstaff")
	public List<Staff> getAll() {
		return sservice.getAll();

	}

	@GetMapping("/getstaffbydept")
	public List<Staff> getstaffbydept(@RequestParam("dept_id") int did) {
		return sservice.getstaffbydept(did);

	}

	@PostMapping("/savestaff")
	public Staff SaveContact(@RequestBody Staff C) {
		return sservice.save(C);
	}

	@GetMapping("/getstaff")
	public Staff getsStaff(@RequestParam("staff_id") int sid) {
		return sservice.getStaff(sid);
	}

	@PostMapping("/updatestaff")
	public Staff updatestaff(@RequestBody Staff sta, @RequestParam("staff_id") int sid) {
		return sservice.updateStaff(sta, sid);

	}

	@PostMapping("/getStaff")
	public Staff getStaff(@RequestBody Login l) {
		return sservice.getStaff(l);
	}

	@GetMapping("/getStaffbylogin")
	public Staff getStaffbylogin(@RequestParam("login_id") int lid) {
		Login l = lservice.find(lid);
		return sservice.getStaff(l);
	}
}
