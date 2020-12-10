package com.example.diary.domain.member;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MemberRepository extends JpaRepository<Member, Integer>{

	@Query(value = "select * From member WHERE id = :id and pw = :pw",nativeQuery = true)
	Member findByUsernameAndPassword(String id, String pw);

	@Query(value = "select * From member WHERE mno = :mno ",nativeQuery = true)
	Member findByMno(int mno);
	
	
	@Query(value = "select * From member WHERE mno = :mno ",nativeQuery = true)
	MemberMapping findByOne(int mno);
}
