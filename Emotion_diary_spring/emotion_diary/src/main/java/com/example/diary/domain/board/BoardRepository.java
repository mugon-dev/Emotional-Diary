package com.example.diary.domain.board;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board, Integer> {
	
	@Query(value = "select * From board WHERE gno = 0 and userId = :userId",nativeQuery = true)
	List<Board> selectMyBoard(String userId);

	
	
}
