package com.example.emotion_dairy.ui.write;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.emotion_dairy.R;

public class BoardWriteFragment extends Fragment {

    private BoardWriteViewModel boardWriteViewModel;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        boardWriteViewModel =
                ViewModelProviders.of(this).get(BoardWriteViewModel.class);
        View root = inflater.inflate(R.layout.fragment_boardwrite, container, false);
        //final TextView textView = root.findViewById(R.id.text_slideshow);
        boardWriteViewModel.getText().observe(getViewLifecycleOwner(), new Observer<String>() {
            @Override
            public void onChanged(@Nullable String s) {

            }
        });
        return root;
    }
}