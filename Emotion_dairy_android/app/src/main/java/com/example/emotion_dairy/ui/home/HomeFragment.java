package com.example.emotion_dairy.ui.home;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CalendarView;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.emotion_dairy.R;

import java.io.FileInputStream;
import java.io.FileOutputStream;

import static android.content.Context.MODE_NO_LOCALIZED_COLLATORS;

public class HomeFragment extends Fragment {

//    //추가
//    public String fname=null;
//    public String str=null;
//    public CalendarView calendarView;
//    public Button cha_Btn,del_Btn,save_Btn;
//    public TextView diaryTextView,textView2,textView3;
//    public EditText contextEditText;
//    //추가끝


    private HomeViewModel HomeViewModel;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        HomeViewModel =
                ViewModelProviders.of(this).get(HomeViewModel.class);
        View root = inflater.inflate(R.layout.fragment_home, container, false);
        return root;

//        //추가
//        calendarView=root.findViewById(R.id.calendarView);
//        diaryTextView=root.findViewById(R.id.diaryTextView);
//        save_Btn=root.findViewById(R.id.save_Btn);
//        del_Btn=root.findViewById(R.id.del_Btn);
//        cha_Btn=root.findViewById(R.id.cha_Btn);
//        textView2=root.findViewById(R.id.textView2);
//        textView3=root.findViewById(R.id.textView3);
//        contextEditText=root.findViewById(R.id.contextEditText);
//        //로그인 및 회원가입 엑티비티에서 이름을 받아옴
//       // Intent intent=getIntent()
//      //  String name=intent.getStringExtra("userName");
//       // final String userID=intent.getStringExtra("userID");
//        String name2 = "ddd";
//        textView3.setText(name+"님의 달력 일기장");
//        //추가 끝
//
//        //추가
//        calendarView.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
//            @Override
//            public void onSelectedDayChange(@NonNull CalendarView view, int year, int month, int dayOfMonth) {
//                diaryTextView.setVisibility(View.VISIBLE);
//                save_Btn.setVisibility(View.VISIBLE);
//                contextEditText.setVisibility(View.VISIBLE);
//                textView2.setVisibility(View.INVISIBLE);
//                cha_Btn.setVisibility(View.INVISIBLE);
//                del_Btn.setVisibility(View.INVISIBLE);
//                diaryTextView.setText(String.format("%d / %d / %d",year,month+1,dayOfMonth));
//                contextEditText.setText("");
//                //checkDay(year,month,dayOfMonth,userID);
//            }
//        });
//        save_Btn.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                saveDiary(fname);
//                str=contextEditText.getText().toString();
//                textView2.setText(str);
//                save_Btn.setVisibility(View.INVISIBLE);
//                cha_Btn.setVisibility(View.VISIBLE);
//                del_Btn.setVisibility(View.VISIBLE);
//                contextEditText.setVisibility(View.INVISIBLE);
//                textView2.setVisibility(View.VISIBLE);
//
//            }
//        });
//    }
//
//    public void  checkDay(int cYear,int cMonth,int cDay,String userID){
//        fname=""+userID+cYear+"-"+(cMonth+1)+""+"-"+cDay+".txt";//저장할 파일 이름설정
//        FileInputStream fis=null;//FileStream fis 변수
//
//        try{
//          //  fis=openFileInput(fname);
//
//            byte[] fileData=new byte[fis.available()];
//            fis.read(fileData);
//            fis.close();
//
//            str=new String(fileData);
//
//            contextEditText.setVisibility(View.INVISIBLE);
//            textView2.setVisibility(View.VISIBLE);
//            textView2.setText(str);
//
//            save_Btn.setVisibility(View.INVISIBLE);
//            cha_Btn.setVisibility(View.VISIBLE);
//            del_Btn.setVisibility(View.VISIBLE);
//
//            cha_Btn.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View view) {
//                    contextEditText.setVisibility(View.VISIBLE);
//                    textView2.setVisibility(View.INVISIBLE);
//                    contextEditText.setText(str);
//
//                    save_Btn.setVisibility(View.VISIBLE);
//                    cha_Btn.setVisibility(View.INVISIBLE);
//                    del_Btn.setVisibility(View.INVISIBLE);
//                    textView2.setText(contextEditText.getText());
//                }
//
//            });
//            del_Btn.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View view) {
//                    textView2.setVisibility(View.INVISIBLE);
//                    contextEditText.setText("");
//                    contextEditText.setVisibility(View.VISIBLE);
//                    save_Btn.setVisibility(View.VISIBLE);
//                    cha_Btn.setVisibility(View.INVISIBLE);
//                    del_Btn.setVisibility(View.INVISIBLE);
//                    removeDiary(fname);
//                }
//            });
//            if(textView2.getText()==null){
//                textView2.setVisibility(View.INVISIBLE);
//                diaryTextView.setVisibility(View.VISIBLE);
//                save_Btn.setVisibility(View.VISIBLE);
//                cha_Btn.setVisibility(View.INVISIBLE);
//                del_Btn.setVisibility(View.INVISIBLE);
//                contextEditText.setVisibility(View.VISIBLE);
//            }
//
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//    }
//    @SuppressLint("WrongConstant")
//    public void removeDiary(String readDay){
//        FileOutputStream fos=null;
//
//        try{
//          //  fos=openFileOutput(readDay,MODE_NO_LOCALIZED_COLLATORS);
//            String content="";
//            fos.write((content).getBytes());
//            fos.close();
//
//        }catch (Exception e){
//            e.printStackTrace();
//    }
//    }
//    @SuppressLint("WrongConstant")
//    public void saveDiary(String readDay){
//        FileOutputStream fos=null;
//
//        try{
//        //    fos=openFileOutput(readDay,MODE_NO_LOCALIZED_COLLATORS);
//            String content=contextEditText.getText().toString();
//            fos.write((content).getBytes());
//            fos.close();
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//    }
//    //추가끝
    }
}

