package com.example.emotion_dairy.ui.write;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class BoardWriteViewModel extends ViewModel {

    private MutableLiveData<String> mText;

    public BoardWriteViewModel() {
        mText = new MutableLiveData<>();
        mText.setValue("This is slideshow fragment");
    }

    public LiveData<String> getText() {
        return mText;
    }
}