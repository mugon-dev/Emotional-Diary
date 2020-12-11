package com.example.emotion_dairy.ui.gallery;

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
import com.prolificinteractive.materialcalendarview.CalendarDay;
import com.prolificinteractive.materialcalendarview.CalendarMode;
import com.prolificinteractive.materialcalendarview.MaterialCalendarView;

public class GalleryFragment extends Fragment {

    private GalleryViewModel galleryViewModel;

    MaterialCalendarView mvc;
    TextView tx;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        galleryViewModel =
                ViewModelProviders.of(this).get(GalleryViewModel.class);
        View root = inflater.inflate(R.layout.fragment_gallery, container, false);


        mvc=root.findViewById(R.id.calendarView3);
        mvc.state().edit().isCacheCalendarPositionEnabled(false)
                .setFirstDayOfWeek(1)
                .setMinimumDate(CalendarDay.from(2018,1,1))
                .setMaximumDate(CalendarDay.from(2020,12,31))
                .setCalendarDisplayMode(CalendarMode.WEEKS)
                .commit();

   //     final TextView textView = root.findViewById(R.id.text_gallery);
    //    galleryViewModel.getText().observe(getViewLifecycleOwner(), new Observer<String>() {
      //      @Override
        //    public void onChanged(@Nullable String s) {
          //      textView.setText(s);
         //   }
       // });
        return root;
    }
}