package com.example.emotion_dairy.ui.home;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.DrawableUtils;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.annimon.stream.Stream;
import com.applandeo.materialcalendarview.CalendarView;
import com.applandeo.materialcalendarview.EventDay;
import com.applandeo.materialcalendarview.listeners.OnDayClickListener;
import com.example.emotion_dairy.MainActivity;
import com.example.emotion_dairy.R;
import com.example.emotion_dairy.Retrofit.ApiInterface;
import com.example.emotion_dairy.Retrofit.DTO.ReqLoginDTO;
import com.example.emotion_dairy.Retrofit.DTO.SoloBoardDTO;
import com.example.emotion_dairy.Retrofit.HttpClient;
import com.example.emotion_dairy.SharedPreferences.PreferenceManager;
import com.prolificinteractive.materialcalendarview.CalendarDay;
import com.prolificinteractive.materialcalendarview.MaterialCalendarView;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import static android.content.Context.MODE_NO_LOCALIZED_COLLATORS;

public class HomeFragment extends Fragment {
    MaterialCalendarView mvc;

    MainActivity activity;

    private Retrofit mRetrofit;
    private ApiInterface api;
    private HomeViewModel HomeViewModel;


    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        api = HttpClient.getRetrofit().create(ApiInterface.class);
        getBoard();
        activity = (MainActivity) getActivity();
    }

    @Override
    public void onDetach() {
        super.onDetach();

        activity = null;
    }

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {


        HomeViewModel =
                ViewModelProviders.of(this).get(HomeViewModel.class);
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        //추가
        List<EventDay> events = new ArrayList<>();

        //달력에 오늘날짜 이벤트 추가
        Calendar calendar = Calendar.getInstance();
        Log.d("log", calendar.toString());
        events.add(new EventDay(calendar, R.drawable.sample_icon));

        //달력에 특정 날짜 이벤트 추가
//        Calendar calendar1 = Calendar.getInstance();
//        CalendarDay.from
//        calendar1

        CalendarView calendarView = (CalendarView) root.findViewById(R.id.calendarView);
        calendarView.setEvents(events);


        //추가 끝

        TextView tv_date;
        tv_date = (TextView) root.findViewById(R.id.tv_date);
        calendarView.setOnDayClickListener(new OnDayClickListener() {
            @Override
            public void onDayClick(EventDay eventDay) {
                Calendar clickedDayCalendar = eventDay.getCalendar();
                Calendar selectedDate = calendarView.getFirstSelectedDate();
                Log.d("log", "날짜 찍음");
                //        Log.d("log", Integer.toString(clickedDayCalendar.getWeekYear()));
                //      Log.d("log", Integer.toString(clickedDayCalendar.get));
                Log.d("log", clickedDayCalendar.getTime().toString());
                //  Log.d("log",)
                //tv_date.setText(clickedDayCalendar.getTime().toString().substring(0,10));

                //선택날짜 출력하기
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy년 MM월 dd일");
                String strDate = simpleDateFormat.format(clickedDayCalendar.getTime());
                tv_date.setText(strDate);

            }
        });

        //글쓰기
        Button btnWrite;
        btnWrite = (Button) root.findViewById(R.id.btnWrite);
        btnWrite.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d("login", "btnWrite");
                activity.changeFragment("write");
            }
        });


        return root;

    }


    public void getBoard() {
        String auth = PreferenceManager.getString(getContext(),"Auth");
        Log.d("log","토큰 찍힘");
        Log.d("log",auth);
        Call<ArrayList<SoloBoardDTO>> call = api.requestSoloBoard(auth);
        call.enqueue(new Callback<ArrayList<SoloBoardDTO>>() {
            @Override
            public void onResponse(Call<ArrayList<SoloBoardDTO>> call, Response<ArrayList<SoloBoardDTO>> response) {
                ArrayList<SoloBoardDTO> result = response.body();
                Log.d("log", "데이터 통신 성공");
                Log.d("log", result.toString());
                for(int i=0;i<result.size();i++){
                    Log.d("log","result"+i+" : "+result.get(i).toString());
                }
            }

            @Override
            public void onFailure(Call<ArrayList<SoloBoardDTO>> call, Throwable t) {
                Log.d("log","에러:"+t.getMessage());
                Log.d("log", "통신 실패");
            }
        });
    }
    public void getBoardTest() {
        String auth = PreferenceManager.getString(getContext(),"Auth");
        Log.d("log","토큰 찍힘");
        Log.d("log",auth);
        Call<SoloBoardDTO> call = api.requestSoloBoardTest(auth);
        call.enqueue(new Callback<SoloBoardDTO>() {
            @Override
            public void onResponse(Call<SoloBoardDTO> call, Response<SoloBoardDTO> response) {
                SoloBoardDTO result = response.body();

                Log.d("log", "데이터 통신 성공");
                Log.d("log", result.toString());
            }

            @Override
            public void onFailure(Call<SoloBoardDTO> call, Throwable t) {
                Log.d("log","에러:"+t.getMessage());
                Log.d("log", "통신 실패");
            }
        });
    }


}

