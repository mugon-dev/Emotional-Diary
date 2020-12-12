package com.example.emotion_dairy;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Date;

public class ListViewAdapter extends BaseAdapter{
    //Adapter에 추가된 데이터를 저장하기 위한 ArrayList
    private ArrayList<ListViewItem> listViewItemList = new ArrayList<ListViewItem>();

    //ListViewAdapter 의 생성자
    public ListViewAdapter() {

    }


    // Adapter에 사용되는 데이터의 개수를 리턴. : 필수 구현
    @Override
    public int getCount() {
        return listViewItemList.size() ;
    }

    // position : 리턴 할 자식 뷰의 위치
    // convertView : 메소드 호출 시 position에 위치하는 자식 뷰 ( if == null 자식뷰 생성 )
    // parent : 리턴할 부모 뷰, 어댑터 뷰
    // position에 위치한 데이터를 화면에 출력하는데 사용될 View를 리턴. : 필수 구현
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        final int pos = position;
        final Context context = parent.getContext();

        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        convertView = inflater.inflate(R.layout.list_view_item, parent,false);
        Log.d("log","들어가기 전");
        // "listview_item" Layout을 inflate하여 convertView 참조 획득.

            // 화면에 표시될 View(Layout이 inflate된)으로부터 위젯에 대한 참조 획득
            Log.d("log","들어옴;;;;;");
            TextView titleTextView = (TextView) convertView.findViewById(R.id.tv_title);
            TextView nameTextView = (TextView) convertView.findViewById(R.id.tv_name);
            TextView dateTextView = (TextView) convertView.findViewById(R.id.tv_date);

            // Data Set(listViewItemList)에서 position에 위치한 데이터 참조 획득
            ListViewItem listViewItem = listViewItemList.get(position);

            // 아이템 내 각 위젯에 데이터 반영 ( Test 중 )
            titleTextView.setText(listViewItem.getTitle());
            nameTextView.setText(listViewItem.getName());
            dateTextView.setText(listViewItem.getDate());
            //iconImageView.setImageDrawable(listViewItem.getIcon());
            //titleTextView.setText(listViewItem.getTitle());
            //descTextView.setText(listViewItem.getDesc());

            return convertView;
    }
    // 지정한 위치(position)에 있는 데이터와 관계된 아이템(row)의 ID를 리턴. : 필수 구현
    @Override
    public long getItemId(int position) {
        return position ;
    }

    // 지정한 위치(position)에 있는 데이터 리턴 : 필수 구현
    @Override
    public Object getItem(int position) {
        return listViewItemList.get(position) ;
    }

    // 아이템 데이터 추가를 위한 함수.
    public void addItem(String title, String content,String name, String date) {
        ListViewItem item = new ListViewItem();

        item.setTitle(title);
        item.setContent(content);
        item.setName(name);
        item.setDate(date);

        listViewItemList.add(item);
    }
}
