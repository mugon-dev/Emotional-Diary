package com.example.emotion_dairy.Retrofit.DTO;

public class ResGetGroup {
    int tmno;
    MemberDTO member;
    int tno;

    public void setTmno(int tmno) {
        this.tmno = tmno;
    }

    public void setMember(MemberDTO member) {
        this.member = member;
    }

    public void setTno(int tno) {
        this.tno = tno;
    }

    public int getTmno() {
        return tmno;
    }

    public MemberDTO getMember() {
        return member;
    }

    public int getTno() {
        return tno;
    }

    @Override
    public String toString() {
        return "ResGetGroup{" +
                "tmno=" + tmno +
                ", member=" + member +
                ", together=" + tno +
                '}';
    }
}
