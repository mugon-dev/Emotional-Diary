package com.example.emotion_dairy;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.Menu;
import android.widget.Button;
import android.widget.CalendarView;
import android.widget.EditText;
import android.widget.TextView;

import com.applandeo.materialcalendarview.EventDay;
import com.example.emotion_dairy.Retrofit.ApiInterface;
import com.example.emotion_dairy.Retrofit.DTO.ResGetGroup;
import com.example.emotion_dairy.Retrofit.DTO.Together;
import com.example.emotion_dairy.Retrofit.HttpClient;
import com.example.emotion_dairy.SharedPreferences.PreferenceManager;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.navigation.NavigationView;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import androidx.annotation.Nullable;
import androidx.annotation.RestrictTo;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    ApiInterface api;

    private AppBarConfiguration mAppBarConfiguration;
    List<ResGetGroup> list = new ArrayList<ResGetGroup>();
    List<GroupList> groupLists = new ArrayList<GroupList>();
    List<Integer> gList=new ArrayList<Integer>();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        FloatingActionButton fab = findViewById(R.id.fab);
        api= HttpClient.getRetrofit().create(ApiInterface.class);
 //       getData();
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        NavigationView navigationView = findViewById(R.id.nav_view);
        // Passing each menu ID as a set of Ids because each
        // menu should be considered as top level destinations.
        mAppBarConfiguration = new AppBarConfiguration.Builder(
                R.id.nav_home, R.id.nav_gallery, R.id.nav_slideshow)
                .setDrawerLayout(drawer)
                .build();
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment);
        NavigationUI.setupActionBarWithNavController(this, navController, mAppBarConfiguration);
        NavigationUI.setupWithNavController(navigationView, navController);

        //회원정보 ( 닉네임, 그룹 1,2,3 가져옴 )

        //Fragment Manager

    }
    public void getGroupList(int tno,int last){
        String auth = PreferenceManager.getString(this,"Auth");
        Call<Together> call = api.getGroupName(auth,tno);
        call.enqueue(new Callback<Together>() {
            @Override
            public void onResponse(Call<Together> call, Response<Together> response) {
                Together together = response.body();
                GroupList groupList = new GroupList(together.getTno(),together.getTname());
                groupLists.add(groupList);
                for(GroupList g : groupLists){
                    Log.d("log","그룹리스트 & 아이디 : "+g);
                }
                if(last==1){
                    for(GroupList g : groupLists){
                        Log.d("log","여기가 라스트 : "+g);
                    }
                    Gson gson = new GsonBuilder().create();
                    Type listType = new TypeToken<ArrayList<GroupList>>(){}.getType();
                    String jsonGroup = gson.toJson(groupLists,listType);
                    PreferenceManager.setString(MainActivity.this,"Group",jsonGroup);

                    String strGroup1 = PreferenceManager.getString(MainActivity.this,"Group");
                    Log.d("log","마지막테스트 그룹 제이슨 : "+strGroup1);
                }
            }

            @Override
            public void onFailure(Call<Together> call, Throwable t) {
                Log.d("log","그룹 에러메세지 : "+t.getMessage());

            }
        });
    }

    public void getData(){

        String auth = PreferenceManager.getString(this,"Auth");
        Call<List<ResGetGroup>> call=api.getGroup(auth);
        call.enqueue(new Callback<List<ResGetGroup>>() {
            @Override
            public void onResponse(Call<List<ResGetGroup>> call, Response<List<ResGetGroup>> response) {
                list=response.body();
                for(int i=0;i<list.size();i++){
                    int strGroup = list.get(i).getTno();
                    gList.add(strGroup);
                }
                for(int a : gList){
                    int idx = gList.size();
                    if(a==gList.get(idx-1)) {
                        getGroupList(a, 1);
                    }else{
                        getGroupList(a,0);
                    }
                }
            }

            @Override
            public void onFailure(Call<List<ResGetGroup>> call, Throwable t) {
                Log.d("log","통신실패: "+t.getMessage());
            }
        });
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment);
        return NavigationUI.navigateUp(navController, mAppBarConfiguration)
                || super.onSupportNavigateUp();
    }
}