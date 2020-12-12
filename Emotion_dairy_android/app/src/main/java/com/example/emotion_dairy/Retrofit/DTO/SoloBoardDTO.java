package com.example.emotion_dairy.Retrofit.DTO;

import com.google.gson.annotations.SerializedName;

import java.lang.reflect.Member;
import java.sql.Timestamp;
import java.util.Date;

public class SoloBoardDTO {
    private String bno;

    private String contents;

    private Timestamp createTime;

    private MemberDTO member;

    private String title;

    public String getBno ()
    {
        return bno;
    }

    public void setBno (String bno)
    {
        this.bno = bno;
    }

    public String getContents ()
    {
        return contents;
    }

    public void setContents (String contents)
    {
        this.contents = contents;
    }

    public Timestamp getCreateTime ()
    {
        return createTime;
    }

    public void setCreateTime (Timestamp createTime)
    {
        this.createTime = createTime;
    }

    public MemberDTO getMember ()
    {
        return member;
    }

    public void setMember (MemberDTO member)
    {
        this.member = member;
    }

    public String getTitle ()
    {
        return title;
    }

    public void setTitle (String title)
    {
        this.title = title;
    }

    public SoloBoardDTO() {
    }

    public SoloBoardDTO(String bno, String contents, Timestamp createTime, MemberDTO member, String title) {
        this.bno = bno;
        this.contents = contents;
        this.createTime = createTime;
        this.member = member;
        this.title = title;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [bno = "+bno+", contents = "+contents+", createTime = "+createTime+", member = "+member+", title = "+title+"]";
    }
}
