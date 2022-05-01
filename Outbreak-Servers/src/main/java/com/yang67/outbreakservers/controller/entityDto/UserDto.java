package com.yang67.outbreakservers.controller.entityDto;

public class UserDto {
    private String userId;
    private String userUrl;
    private int identity;
    private String token;

    public UserDto() {
    }

    public UserDto(String userId, String userUrl, int identity, String token) {
        this.userId = userId;
        this.userUrl = userUrl;
        this.identity = identity;
        this.token = token;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserUrl() {
        return userUrl;
    }

    public void setUserUrl(String userUrl) {
        this.userUrl = userUrl;
    }

    public int getIdentity() {
        return identity;
    }

    public void setIdentity(int identity) {
        this.identity = identity;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
