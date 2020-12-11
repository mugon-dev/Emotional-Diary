package com.example.emotion_dairy.Retrofit;

import com.example.emotion_dairy.Retrofit.DTO.Authorization;
import com.example.emotion_dairy.Retrofit.DTO.ReqLoginDTO;
import com.example.emotion_dairy.Retrofit.DTO.ResLoginDTO;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface ApiInterface {
    //로그인
    @POST("loginProc")
    Call<String> requestPostLogin(@Body ReqLoginDTO reqLoginDTO);
}
