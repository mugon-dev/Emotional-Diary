package com.example.diary.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diary.domain.member.Member;
import com.example.diary.domain.member.MemberRepository;
import com.example.diary.service.MemberService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/member")
@RequiredArgsConstructor
@RestController
public class MemberController {

	private final HttpSession session;
	private final MemberService memberService;
	private final MemberRepository memberRepository;

	// 회원가입
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody Member member) {
		memberService.join(member);
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);
	}

	// 로그아웃
	@GetMapping("/logout")
	public ResponseEntity<?> logout() {
		session.invalidate();
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}

	@GetMapping("/get/{id}")
	public Member memberone(@PathVariable int id) {
		

		Member member = memberRepository.findByMno(id);

		return member;
	}
	
	//수정
	@PutMapping("/update")
	public ResponseEntity<?> update(HttpServletRequest request, @RequestBody Member member){
		System.out.println("update 호출");
		int sid=(int) session.getAttribute("id");
		System.out.println(sid);
		if(session.getAttribute("id")!=null) {
			Member originMember = memberRepository.findByMno(sid);
			int id = originMember.getMno();
			System.out.println("id: "+originMember.getId());
			System.out.println("member: "+member);
			memberService.update(id,member);
			return new ResponseEntity<String>("ok",HttpStatus.OK);
		}
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
	}
	
	
	//삭제
	@DeleteMapping("/delete")
	public ResponseEntity<?> delete(HttpServletRequest request,@RequestBody Member member){
		System.out.println("delete 호출");
		int sid=(int) session.getAttribute("id");
		System.out.println(sid);

		if(session.getAttribute("id") != null) {
			Member originMember = memberRepository.findByMno(sid);
			int id = originMember.getMno();
			System.out.println("id: "+originMember.getId());
			memberService.delete(id);
		}else {
			System.out.println("session=null");
		}
		return new ResponseEntity<String>("ok",HttpStatus.CREATED);
	}

}
