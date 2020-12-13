package com.example.emotion_dairy.ui.gallery;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.emotion_dairy.GroupList;
import com.example.emotion_dairy.ListViewAdapter;
import com.example.emotion_dairy.ListViewItem;
import com.example.emotion_dairy.R;
import com.example.emotion_dairy.SharedPreferences.PreferenceManager;
import com.prolificinteractive.materialcalendarview.CalendarDay;
import com.prolificinteractive.materialcalendarview.CalendarMode;
import com.prolificinteractive.materialcalendarview.MaterialCalendarView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GalleryFragment extends Fragment {

    private ListView listview;
    private ListViewAdapter adapter;
    List<GroupList> list = new ArrayList<GroupList>();

    Map<Integer,String> groupMap = new HashMap<Integer,String>();


    private GalleryViewModel galleryViewModel;
    MaterialCalendarView mvc;
    TextView tx,tvGroupName;
    Spinner spinnerGroup;

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

        //그룹작업
        spinnerGroup=root.findViewById(R.id.spinnerGroup);
        tvGroupName=root.findViewById(R.id.tvGroupName);
        //내 그룹 가져옴
        String jsonGroupList = PreferenceManager.getString(getContext(),"Group");
        Log.d("log",jsonGroupList);
        toJson(jsonGroupList);

        List<String> tnameList = new ArrayList<String>();
        for(GroupList a : list){
            tnameList.add(a.getTname());
            Log.d("log","group data : "+a.toString());
        }

        ArrayAdapter<String> spinnerAdapter = new ArrayAdapter<String>(getContext(), android.R.layout.simple_spinner_item,tnameList);
        spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        spinnerGroup.setAdapter(spinnerAdapter);
        spinnerGroup.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                tvGroupName.setText(tnameList.get(i));
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

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
    public void toJson(String strJson){

        if(strJson!=null){
            try {
                JSONArray a = new JSONArray(strJson);
                for(int i=0; i<a.length();i++){
                    GroupList g = new GroupList();
                    JSONObject jsonObject=a.getJSONObject(i);
                    g.setTno(jsonObject.getInt("tno"));
                    g.setTname(jsonObject.getString("tname"));
                    list.add(g);

                    groupMap.put(jsonObject.getInt("tno"),jsonObject.getString("tname"));
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}