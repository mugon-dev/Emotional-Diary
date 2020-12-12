package com.example.emotion_dairy;

import java.util.Date;

public class BoardData {
    private Date date;
    private String name;
    private String title;
    private String content;

    public BoardData(Date date, String name, String title, String content){
        this.date = date;
        this.name = name;
        this.title = title;
        this.content = content;
    }
}
