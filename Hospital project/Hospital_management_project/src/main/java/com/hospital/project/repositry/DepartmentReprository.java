package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.project.entiries.Department;

public interface DepartmentReprository extends JpaRepository<Department, Integer> {

}
