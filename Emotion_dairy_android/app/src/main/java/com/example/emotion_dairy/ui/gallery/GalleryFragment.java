package com.example.emotion_dairy.ui.gallery;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.emotion_dairy.ListViewAdapter;
import com.example.emotion_dairy.ListViewItem;
import com.example.emotion_dairy.R;
import com.prolificinteractive.materialcalendarview.CalendarDay;
import com.prolificinteractive.materialcalendarview.CalendarMode;
import com.prolificinteractive.materialcalendarview.MaterialCalendarView;

import java.util.ArrayList;

public class GalleryFragment extends Fragment {

    private ListView listview;
    private ListViewAdapter adapter;

    private GalleryViewModel galleryViewModel;
    MaterialCalendarView mvc;
    TextView tx;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        galleryViewModel =
                ViewModelProviders.of(this).get(GalleryViewModel.class);
        View root = inflater.inflate(R.layout.fragment_gallery, container, false);


        mvc = root.findViewById(R.id.calendarView3);
        mvc.state().edit().isCacheCalendarPositionEnabled(false)
                .setFirstDayOfWeek(1)
                .setMinimumDate(CalendarDay.from(2018, 1, 1))
                .setMaximumDate(CalendarDay.from(2020, 12, 31))
                .setCalendarDisplayMode(CalendarMode.WEEKS)
                .commit();


// Adapter 생성
        adapter = new ListViewAdapter();

        // 리스트뷰 객체 생성 및 Adapter 설정
        listview = (ListView) root.findViewById(R.id.listView);
        listview.setAdapter(adapter);

        // 리스트 뷰 아이템 추가.
        adapter.addItem("테스트제목1","테스트내용1","테스트이름1","테스트날짜1");
        adapter.addItem("테스트제목2","테스트내용2","테스트이름2","테스트날짜2");
        adapter.addItem("테스트제목3","테스트내용3","테스트이름3","테스트날짜3");
        adapter.addItem("테스트제목3","테스트내용3","테스트이름3","테스트날짜3");



        return root;
    }
}