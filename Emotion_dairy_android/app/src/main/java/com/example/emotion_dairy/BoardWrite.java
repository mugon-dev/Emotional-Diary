package com.example.emotion_dairy;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;

public class BoardWrite extends AppCompatActivity {
    EditText edWriteTitle,edWriteContent;
    RadioGroup rgSelectGroup;
    RadioButton rbViewPrivate;
    Button btnBoardWrite;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_board_write);
        edWriteTitle=findViewById(R.id.edWriteTitle);
        edWriteContent=findViewById(R.id.edWriteContent);
        rgSelectGroup=findViewById(R.id.rgSelectGroup);
        rbViewPrivate=findViewById(R.id.rbViewPrivate);
        btnBoardWrite=findViewById(R.id.btnBoardWrite);

        btnBoardWrite.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }
        });

    }
}