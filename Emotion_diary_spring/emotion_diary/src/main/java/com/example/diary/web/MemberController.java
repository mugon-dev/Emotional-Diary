package com.example.diary.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.diary.domain.member.Member;
import com.example.diary.domain.member.MemberRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MemberController {

	private final MemberRepository memberRepository;
	private final HttpSession session;

	// 회원가입
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody Member member) {
		memberRepository.save(member);
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);
	}

	// 로그아웃
	@GetMapping("/logout")
	public ResponseEntity<?> logout() {
		session.invalidate();
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}

	@GetMapping("/member/{id}")
	public Member memberone(@PathVariable int id) {
		

		Member member = memberRepository.findByMno(id);

		return member;
	}

}
