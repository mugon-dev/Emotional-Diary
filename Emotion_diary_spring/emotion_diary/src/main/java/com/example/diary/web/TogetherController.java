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

import com.example.diary.domain.member.Member;
import com.example.diary.domain.member.MemberRepository;
import com.example.diary.domain.together.Together;
import com.example.diary.domain.together.TogetherRepository;
import com.example.diary.service.TogetherService;
import com.example.diary.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/together")
@RequiredArgsConstructor
public class TogetherController {
	private final HttpSession session;
	private final TogetherService togetherService;
	private final MemberService memberService;
	private final TogetherRepository togetherRepository;
	private final MemberRepository memberRepository;
	
	@GetMapping("/")
	public List<Together> togetherList() {
		return togetherRepository.findAll();
	}
	
	
	@PostMapping("/save")
	public ResponseEntity<?> togetherSave(HttpServletRequest request, @RequestBody Together together){
		System.out.println("togetherSave Controller");
		
		int id = (int) session.getAttribute("id");
		System.out.println("투게더"+id);
		if(session.getAttribute("id")!=null) {
			Member member = memberRepository.findByMno(id);
//			System.out.println("member"+member);
			togetherService.togetherSave(member,together);
			return new ResponseEntity<String>("together ok!",HttpStatus.OK);
		}
		
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
		
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> togetherUpdate(HttpServletRequest request, @RequestBody Together together){
		System.out.println("togetherSave Controller");
		
		HttpSession session = request.getSession();
		if(session.getAttribute("principal")!=null) {
			Member member = (Member)session.getAttribute("principal");
			togetherService.togetherUpdate(together.getTno(), together);
			return new ResponseEntity<String>("ok",HttpStatus.OK);
		}
		
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
		
	}
	
}
