package com.example.diary.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.diary.domain.member.Member;
import com.example.diary.domain.together.Together;
import com.example.diary.domain.together.TogetherRepository;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class TogetherService {

	private final TogetherRepository togetherRepositorty;
	
	//생성, 삭제, 수정
	
	@Transactional
	public void togetherSave(Member member,Together together) {
		System.out.println("togetherSave 호출");
//		together.setMember(member);
		togetherRepositorty.save(together);
	}
	

	@Transactional
	public void togetherDelete(int gno) {
		System.out.println("togetherDelete 호출");
		togetherRepositorty.deleteById(gno);
	}
	
	@Transactional
	public void togetherUpdate(int gno,Together together) {
		System.out.println("togetherUpdate 호출");
		Together togetherEntity = togetherRepositorty.findById(gno).get();
		togetherEntity.setTname(together.getTname());
	}
	
	
	
	
}
