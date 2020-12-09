package com.example.diary.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.diary.domain.group.Group;
import com.example.diary.domain.group.GroupRepository;
import com.example.diary.domain.member.Member;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class GroupService {

	private final GroupRepository groupRepository;
	
	//생성, 삭제, 수정
	
	@Transactional
	public void groupSave(Member member,Group group) {
		System.out.println("groupSave 호출");
		group.setMember(member);
		groupRepository.save(group);
	}
	

	@Transactional
	public void groupDelete(int gno) {
		System.out.println("groupDelete 호출");
		groupRepository.deleteById(gno);
	}
	
	@Transactional
	public void groupUpdate(int gno,Group group) {
		System.out.println("groupUpdate 호출");
		Group groupEntity = groupRepository.findById(gno).get();
		groupEntity.setGname(group.getGname());
	}
	
	
	
	
}
