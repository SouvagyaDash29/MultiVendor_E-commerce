//package com.example.backend.Security;
//
//import io.jsonwebtoken.ExpiredJwtException;
//import io.jsonwebtoken.MalformedJwtException;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Component
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);
//
//    @Autowired
//    private JwtHelper jwtHelper;
//
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//      String requestToken = request.getHeader("Authorization");
//      logger.info("message {}" , requestToken);
//
//      String Username = null;
//      String jwtToken = null;
//
//      if(requestToken != null && requestToken.trim().startsWith("Bearer")) {
//
//          // get actual token
//          jwtToken = requestToken.substring(7);
//
//          try{
//             Username =  this.jwtHelper.getUsername(jwtToken);
//
//          } catch(ExpiredJwtException e){
//                logger.info("Invalid token message","Jwt token expire");
//          } catch(MalformedJwtException e){
//                logger.info("Invalid token message","Invalid Jwt token");
//          } catch(IllegalArgumentException e){
//                logger.info("Invalid token message","unable to get token");
//          }
//
//          if(Username!=null && SecurityContextHolder.getContext().getAuthentication() == null){
//
//              // validate
//              UserDetails userDetails = this.userDetailsService.loadUserByUsername(Username);
//
//              if(this.jwtHelper.validateToken(jwtToken, userDetails)){
//
//                  UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                  SecurityContextHolder.getContext().setAuthentication(auth);
//              }else {
//                  logger.info("not validate Message","Invalid Jwt Token");
//              }
//          } else {
//              logger.info("User Message","username is null or auth is already there");
//          }
//      } else {
//          logger.info("Token message {}" , "token done not start with Bearer ");
//      }
//      filterChain.doFilter(request, response);
//    }
//}
