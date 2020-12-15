package com.example.emotion_dairy.ui.slideshow;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.bumptech.glide.Glide;
import com.example.emotion_dairy.GroupList;
import com.example.emotion_dairy.R;
import com.example.emotion_dairy.Retrofit.ApiInterface;
import com.example.emotion_dairy.Retrofit.DTO.SoloBoardDTO;
import com.example.emotion_dairy.Retrofit.HttpClient;
import com.example.emotion_dairy.SharedPreferences.PreferenceManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class SlideshowFragment extends Fragment {

    private SlideshowViewModel slideshowViewModel;

    ApiInterface api;
    List<GroupList> list = new ArrayList<GroupList>();
    Spinner spinnerGroup;
    TextView tvGroup,tvLine,tvBar,tvPie,tvRaider,tvWordcloud;
    ImageView ivAnalysis;
    int selectedNo;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        slideshowViewModel =
                ViewModelProviders.of(this).get(SlideshowViewModel.class);
        View root = inflater.inflate(R.layout.fragment_slideshow, container, false);

        api= HttpClient.getRetrofit().create(ApiInterface.class);
        spinnerGroup=root.findViewById(R.id.spGroup);
        tvGroup=root.findViewById(R.id.tvGroup);
        tvLine=root.findViewById(R.id.tvLine);
        tvBar=root.findViewById(R.id.tvBar);
        tvPie=root.findViewById(R.id.tvPie);
        tvRaider=root.findViewById(R.id.tvRaider);
        tvWordcloud=root.findViewById(R.id.tvWordcloud);
        ivAnalysis=root.findViewById(R.id.ivAnalysis);

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
                tvGroup.setText(list.get(i).getTname());
                Log.d("log","선택 그룹 번호 : "+list.get(i).getTno());
                selectedNo=list.get(i).getTno();
                //선택시 분석 시작
                analysis(selectedNo);
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

        tvWordcloud.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setImage(selectedNo,"wordcloud");
            }
        });

        tvLine.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setImage(selectedNo,"line");
            }
        });

        tvBar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setImage(selectedNo,"bar");
            }
        });

        tvPie.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setImage(selectedNo,"pie");
            }
        });

        tvRaider.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setImage(selectedNo,"raider");
            }
        });
        return root;
    }

    public void analysis(int tno){
        if(tno==0) {
            String auth = PreferenceManager.getString(getContext(), "Auth");
            Call<String> call = api.analysisMy(auth);
            call.enqueue(new Callback<String>() {
                @Override
                public void onResponse(Call<String> call, Response<String> response) {
                    if (response.body().equals("ok")) {
                        Log.d("log", "분석완료");
                    } else {
                        Log.d("log", "분석실패");
                    }
                }

                @Override
                public void onFailure(Call<String> call, Throwable t) {
                    Log.d("log", "분석통신 실패");
                }
            });
        }
        else{
            String auth = PreferenceManager.getString(getContext(), "Auth");
            Call<String> call = api.analysisGroup(auth,tno);
            call.enqueue(new Callback<String>() {
                @Override
                public void onResponse(Call<String> call, Response<String> response) {
                    if (response.body().equals("ok")) {
                        Log.d("log", "분석완료");
                    } else {
                        Log.d("log", "분석실패");
                    }
                }

                @Override
                public void onFailure(Call<String> call, Throwable t) {
                    Log.d("log", "분석통신 실패");
                }
            });
        }

    }

    public void setImage(int tno,String idx){
        int myNo = PreferenceManager.getInt(getContext(),"myNo");
        Log.d("log","이미지셋 내 번호 : "+myNo);
        if(tno == 0){
            String imageUrl = "http://10.100.102.90:7000/static/my/"+idx+myNo+".png";
            Glide.with(this).load(imageUrl).into(ivAnalysis);
        }else{
            String imageUrl = "http://10.100.102.90:7000/static/together/"+idx+tno+".png";
            Glide.with(this).load(imageUrl).into(ivAnalysis);
        }
    }

    public void toJson(String strJson){

        if(strJson!=null){
            try {
                GroupList gAll = new GroupList(0,"내글");
                list.add(gAll);
                JSONArray a = new JSONArray(strJson);
                for(int i=0; i<a.length();i++){
                    GroupList g = new GroupList();
                    JSONObject jsonObject=a.getJSONObject(i);
                    g.setTno(jsonObject.getInt("tno"));
                    g.setTname(jsonObject.getString("tname"));
                    list.add(g);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}