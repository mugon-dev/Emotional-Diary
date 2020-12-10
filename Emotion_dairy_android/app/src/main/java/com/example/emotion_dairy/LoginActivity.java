package com.example.emotion_dairy;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;


public class LoginActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);
    }

    //로그인 버튼 이벤트
    public void btn_login(View view){
        Intent intent = new Intent(this,MainActivity.class);
        startActivity(intent);
     //   finish(); //뒤로가기 눌러도 메인으로 로그인화면으로 안넘어감
    }
    //회원가입 버튼 이벤트
    public void btn_join(View view){
        Intent intent = new Intent(this,JoinActivity.class);
        startActivity(intent);
        //   finish(); //뒤로가기 눌러도 메인으로 로그인화면으로 안넘어감
    }


}

