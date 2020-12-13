package com.example.diary.web;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diary.domain.member.Member;
import com.example.diary.domain.member.MemberRepository;
import com.example.diary.domain.tmember.Tmember;
import com.example.diary.domain.tmember.TmemberRepository;
import com.example.diary.domain.together.Together;
import com.example.diary.domain.together.TogetherRepository;
import com.example.diary.dto.TmDto;
import com.example.diary.service.TmemberService;
import com.example.diary.service.TogetherService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/tmember")
@RequiredArgsConstructor
@RestController
public class TmemberController {
	
	private final HttpSession session;
	private final TmemberRepository tmemberRepository;
	private final MemberRepository memberRepository;
	private final TogetherRepository togetherRepository;
	private final TogetherService togetherService;
	private final TmemberService tmemberService;
	
	
	@PostMapping("/save")
	public ResponseEntity<?> tmemberSave(HttpServletRequest request, @RequestBody TmDto tmDto){
		System.out.println("tmember Controller");
		
		
		int id = (int) session.getAttribute("id");
		System.out.println("tmember"+id);
		
		if(session.getAttribute("id")!=null) {
			Member member = memberRepository.findByMno(id);
			Together together = togetherRepository.findById(Integer.parseInt(tmDto.getId())).get();
			if(together.getTcode().equals(tmDto.getPw())){
				tmemberService.tmemberSave(member,together);
				return new ResponseEntity<String>("tmember ok!",HttpStatus.OK);

			}else{
				return new ResponseEntity<String>("fail",HttpStatus.OK);
			}
			
			
		}
		
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
		
	}
	
	
	@GetMapping("/get/{id}")
	public List<Tmember> together(@PathVariable int id) {
		List<Tmember> groupList = new ArrayList<Tmember>();
//		System.out.println("sdlkfjsdlkfj");
//		int id = (int) session.getAttribute("id");
//		System.out.println("=========="+id);
		groupList = tmemberRepository.findByMno(id);
		
//		System.out.println(groupList.get(0));
//		System.out.println(groupList.get(1));
//		System.out.println("together하나찾기");
//		System.out.println(id);
//		Together together = togetherRepository.findByTno(id);
//		

		return groupList;
	}
	
	
}
