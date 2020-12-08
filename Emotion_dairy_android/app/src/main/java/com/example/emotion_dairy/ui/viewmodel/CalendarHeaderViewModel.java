package com.example.emotion_dairy.ui.viewmodel;



import androidx.lifecycle.ViewModel;

import com.example.emotion_dairy.data.TSLiveData;

public class CalendarHeaderViewModel extends ViewModel {
    public TSLiveData<Long> mHeaderDate = new TSLiveData<>();

    public void setHeaderDate(long headerDate) {
        this.mHeaderDate.setValue(headerDate);
    }
}

