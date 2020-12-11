package com.example.diary.web;

import javax.servlet.ServletResponse;

import org.python.antlr.ast.Str;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.diary.domain.board.Board;
import com.example.diary.domain.board.BoardSaveRequestDto;
import com.example.diary.service.BoardService;
import com.google.gson.JsonObject;

import lombok.RequiredArgsConstructor;

 
 
@RestController
@RequiredArgsConstructor
public class RestfulController {
	
	private final BoardService boardService;
 
    private Logger LOGGER = LoggerFactory.getLogger(RestfulController.class);
    
    @Autowired
    RestTemplate restTemplate;
    
    @RequestMapping("/restfulTest")
    public String home() {
 
    
        String obj = restTemplate.getForObject("http://10.100.102.90:7000/analysis", String.class);
        
        
        return obj;
    }
    
    @RequestMapping("/sendboard")
    public void send(BoardSaveRequestDto dto){
 
    	//board = boardService.글상세(2);
//		BoardSaveRequestDto dto = new BoardSaveRequestDto();
//		dto.setBno(dto.getBno());
//		dto.setContents(dto.getContents());
//		dto.setTitle(dto.getTitle());
    	
    	
    	Board board = restTemplate.postForObject("http://10.100.102.90:7000/analysis/one/", dto, Board.class);
    
        //String obj = restTemplate.getForObject("http://10.100.102.90:7000/analysis/one", String.class);
    	//restTemplate = new RestTemplate();
//    	HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//        JsonObject personJsonObject = new JsonObject();
//        personJsonObject.put("2", name);
//        

          
       // return obj;
    }


    
}
