package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.hospital.project.entiries.Login;

public interface LoginReprositry extends JpaRepository<Login, Integer> {

	@Query("select l from Login l where  user_id=:uid and password=:pwd")
	public Login checkLogin(String uid, String pwd);
}
