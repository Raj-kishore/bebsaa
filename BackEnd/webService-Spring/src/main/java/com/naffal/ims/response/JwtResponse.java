package com.naffal.ims.response;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String userName;
    private Long phoneNo;

    public JwtResponse(String accessToken, 
            Long id, String userName, Long phoneNo) {

        this.token = accessToken;
        this.id = id;
        this.userName = userName;
        this.phoneNo = phoneNo;

    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPhoneNo() {
        return phoneNo;
    }

    public void setEmail(Long phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}