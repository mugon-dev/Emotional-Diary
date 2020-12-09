package com.example.diary.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diary.domain.group.Group;
import com.example.diary.domain.group.GroupRepository;
import com.example.diary.domain.member.Member;
import com.example.diary.service.GroupService;
import com.example.diary.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/group")
@RequiredArgsConstructor
public class GroupController {
	
	private final GroupService groupService;
	private final MemberService memberService;
	private final GroupRepository groupRepository; 
	
	@GetMapping("/")
	public List<Group> GroupList() {
		return groupRepository.findAll();
	}
	
	
	@PostMapping("/save")
	public ResponseEntity<?> groupSave(HttpServletRequest request, @RequestBody Group group){
		System.out.println("groupSave Controller");
		
		HttpSession session = request.getSession();
		if(session.getAttribute("principal")!=null) {
			Member member = (Member)session.getAttribute("principal");
			groupService.groupSave(member,group);
			return new ResponseEntity<String>("ok",HttpStatus.OK);
		}
		
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
		
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> groupUpdate(HttpServletRequest request, @RequestBody Group group){
		System.out.println("groupSave Controller");
		
		HttpSession session = request.getSession();
		if(session.getAttribute("principal")!=null) {
			Member member = (Member)session.getAttribute("principal");
			int gno = Integer.parseInt(group.getGno());
			groupService.groupUpdate(gno, group);
			return new ResponseEntity<String>("ok",HttpStatus.OK);
		}
		
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
		
	}
	
}
