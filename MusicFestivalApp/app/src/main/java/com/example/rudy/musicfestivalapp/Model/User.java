package com.example.rudy.musicfestivalapp.Model;

/**
 * Created by rudy on 11.01.2017.
 */

public class User {
    private String Email;
    private String Password;

    public User(String email, String password) {
        this.Email = email;
        this.Password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }
}
