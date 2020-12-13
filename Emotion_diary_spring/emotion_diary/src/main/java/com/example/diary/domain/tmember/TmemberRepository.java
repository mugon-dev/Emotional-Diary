package com.example.diary.domain.tmember;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.diary.domain.together.Together;


public interface TmemberRepository extends JpaRepository<Tmember, Integer>{

	@Query(value = "select * From tmember WHERE mno = :mno ",nativeQuery = true)
	List<Tmember> findByMno(int mno);
}
