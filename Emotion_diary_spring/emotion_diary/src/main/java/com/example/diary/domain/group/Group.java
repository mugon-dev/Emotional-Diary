package com.example.diary.domain.group;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.diary.domain.member.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Group {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String gno;
	
	@Column(length = 50)
	private String gname;
	
	@Column(length = 500)
	private String gcode;
	
	

}
