package com.example.emotion_dairy;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

import com.example.emotion_dairy.Retrofit.ApiInterface;
import com.example.emotion_dairy.Retrofit.DTO.ReqLoginDTO;
import com.example.emotion_dairy.Retrofit.DTO.ResLoginDTO;
import com.example.emotion_dairy.Retrofit.HttpClient;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class LoginActivity extends AppCompatActivity {
    ApiInterface api;
    EditText edId,edPw;
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);
        edId=findViewById(R.id.edId);
        edPw=findViewById(R.id.edPw);
        api = HttpClient.getRetrofit().create(ApiInterface.class);
    }

    //로그인 버튼 이벤트
    public void btn_login(View view){
        ReqLoginDTO reqLoginDTO = new ReqLoginDTO(edId.getText().toString(),edPw.getText().toString());
        Log.d("login","sdlkfsjdlkfsdjf");
        Log.d("login",reqLoginDTO.toString() );
        login(reqLoginDTO);

     //   finish(); //뒤로가기 눌러도 메인으로 로그인화면으로 안넘어감
    }

    //로그인 통신
    public void login(ReqLoginDTO reqLoginDTO){
        Call<String> call = api.requestPostLogin(reqLoginDTO);
        call.enqueue(new Callback<String>(){
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                Log.d("login",response.body().toString());
                if(response.body().toString().equals("ok")){
                    Log.d("login","로그인 성공");
                    Intent intent = new Intent(LoginActivity.this,MainActivity.class);
                    startActivity(intent);
                }
                else{
                    Log.d("login","아이디/패스워드 오류");
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                Log.d("logind",t.getMessage());
                Log.d("login","로그인 실패");
            }
        });
    }

}

