package com.example.emotion_dairy.Retrofit;

import com.example.emotion_dairy.Retrofit.DTO.Authorization;
import com.example.emotion_dairy.Retrofit.DTO.ReqJoinDTO;
import com.example.emotion_dairy.Retrofit.DTO.ReqLoginDTO;
import com.example.emotion_dairy.Retrofit.DTO.ResLoginDTO;
import com.example.emotion_dairy.Retrofit.DTO.SoloBoardDTO;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface ApiInterface {
    //로그인
    @POST("loginProc")
    Call<String> requestPostLogin(@Body ReqLoginDTO reqLoginDTO);

    @POST("member/join")
    Call<String> requestPostJoin(@Body ReqJoinDTO reqJoinDTO);

    @GET("board/my")
    Call<ArrayList<SoloBoardDTO>> requestSoloBoard(@Header("Authorization") String auth);

    @GET("board/get/2")
    Call<SoloBoardDTO> requestSoloBoardTest(@Header("Authorization") String auth);
}
