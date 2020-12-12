package com.example.diary.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.diary.domain.member.Member;
import com.example.diary.domain.tmember.Tmember;
import com.example.diary.domain.tmember.TmemberRepository;
import com.example.diary.domain.together.Together;
import com.example.diary.domain.together.TogetherRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TmemberService {

	private final TmemberRepository tmemberRepository;
	
	//생성, 삭제, 수정
	
		@Transactional
		public void tmemberSave(Member member,Together together) {
			System.out.println("togetherSave 호출");
			Tmember tmember = new Tmember();
			tmember.setMember(member);
			tmember.setTogether(together);
			tmemberRepository.save(tmember);
		}
		

//		@Transactional
//		public void tmemberDelete(int gno) {
//			System.out.println("togetherDelete 호출");
//			tmemberRepository.deleteById(gno);
//		}
//		
//		@Transactional
//		public void tmemberUpdate(int gno,Together together) {
//			System.out.println("togetherUpdate 호출");
//			Together togetherEntity = tmemberRepository.findById(gno).get();
//			togetherEntity.setTname(together.getTname());
//		}
		
}

