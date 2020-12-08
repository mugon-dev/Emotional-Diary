package com.example.emotion_dairy.ui.viewmodel;


import java.util.Calendar;

import androidx.lifecycle.ViewModel;

import com.example.emotion_dairy.data.TSLiveData;

public class CalendarViewModel extends ViewModel {
    public TSLiveData<Calendar> mCalendar = new TSLiveData<>();

    public void setCalendar(Calendar calendar) {
        this.mCalendar.setValue(calendar);
    }


}
