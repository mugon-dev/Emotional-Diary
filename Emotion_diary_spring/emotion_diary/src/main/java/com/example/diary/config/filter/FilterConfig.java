package com.example.diary.config.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.diary.config.jwt.JwtAuthenticationFilter;
import com.example.diary.config.jwt.JwtAuthorizationFilter;
import com.example.diary.domain.member.MemberRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
public class FilterConfig {
	
	private final MemberRepository memberRepository;
	
	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilter(){
		System.out.println("CORS 필터 등록");
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter());
		bean.addUrlPatterns("/*");
		bean.setOrder(0); // 낮은 번호부터 실행됨.
		return bean;
	}
	
	@Bean
	public FilterRegistrationBean<JwtAuthenticationFilter> jwtAuthenticationFilter(){
		System.out.println("JwtAuthenticationFilter 필터 등록");
		FilterRegistrationBean<JwtAuthenticationFilter> bean = 
				new FilterRegistrationBean<>(new JwtAuthenticationFilter(memberRepository));
		bean.addUrlPatterns("/loginProc");
		bean.setOrder(1); // 낮은 번호부터 실행됨.
		return bean;
	}
	
	@Bean
	public FilterRegistrationBean<JwtAuthorizationFilter> jwtAuthorizationFilter(){
		System.out.println("JwtAuthorizationFilter 필터 등록");
		FilterRegistrationBean<JwtAuthorizationFilter> bean = 
				new FilterRegistrationBean<>(new JwtAuthorizationFilter(memberRepository));
		bean.addUrlPatterns("/person/*");
		
		bean.addUrlPatterns("/together/*");
		
		bean.setOrder(2); // 낮은 번호부터 실행됨.
		return bean;
	}
}