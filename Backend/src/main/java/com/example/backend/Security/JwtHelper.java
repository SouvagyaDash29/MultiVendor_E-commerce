package com.example.backend.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

@Component
public class JwtHelper {
    public static final long JWT_TOKEN_VALIDITY = 5*60*60;
    private String secret = "jwtTokenKey";

    // retrive username from jwt token
    public String getUsername(String token) {
        return getClaimFromToken(token,Claims::getSubject);
    }

    // Expire Date
    public Date getExpirationDateFromToken(String token){
        return getClaimFromToken(token,Claims::getExpiration);
    }

    // Check token has expire
    private boolean isTokenExpired(String token){
      final Date  date = getExpirationDateFromToken(token);
      return date.before(new Date());
    }

    // generate token for user
    public String generateToken(UserDetails userDetails){
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims,userDetails.getUsername());
    }

    //Compaction of the jwt to a url-safe string
    private String doGenerateToken(Map<String,Object> claims, String subject){

        return Jwts.builder().setClaims(claims).setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512,secret).compact();
    }

    // Validate token
    public Boolean validateToken(String token,UserDetails userDetails){
        final String username = getUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }



    public <T> T getClaimFromToken(String token, Function<Claims,T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaimsFromToken(String token){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }
}
