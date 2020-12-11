package com.example.emotion_dairy.ui.home;

import android.annotation.SuppressLint;
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
import com.example.emotion_dairy.R;
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

import static android.content.Context.MODE_NO_LOCALIZED_COLLATORS;

public class HomeFragment extends Fragment {
    MaterialCalendarView mvc;

    private HomeViewModel HomeViewModel;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        HomeViewModel =
                ViewModelProviders.of(this).get(HomeViewModel.class);
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        //추가
        List<EventDay> events = new ArrayList<>();

        Calendar calendar = Calendar.getInstance();
        events.add(new EventDay(calendar, R.drawable.sample_icon));

        CalendarView calendarView = (CalendarView) root.findViewById(R.id.calendarView);
        calendarView.setEvents(events);




        //추가 끝

        TextView tv_date;
        tv_date=(TextView)root.findViewById(R.id.tv_date);
        calendarView.setOnDayClickListener(new OnDayClickListener() {
            @Override
            public void onDayClick(EventDay eventDay) {
                Calendar clickedDayCalendar = eventDay.getCalendar();
                Calendar selectedDate = calendarView.getFirstSelectedDate();
                Log.d("log","날짜 찍음");
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


        return root;

    }


}

