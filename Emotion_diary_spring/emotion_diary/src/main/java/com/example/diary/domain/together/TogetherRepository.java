package com.example.diary.domain.together;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;




public interface TogetherRepository extends JpaRepository<Together, Integer>{
	
	@Query(value = "select * From together WHERE tno = :tno ",nativeQuery = true)
	Together findByTno(int tno);
	
}
