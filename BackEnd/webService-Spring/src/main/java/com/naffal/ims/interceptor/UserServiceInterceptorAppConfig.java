package com.naffal.ims.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Component
public class UserServiceInterceptorAppConfig extends WebMvcConfigurerAdapter {
   @Autowired
   UserServiceInterceptor itemServiceInterceptor;

   @Override
   public void addInterceptors(InterceptorRegistry registry) {
      registry.addInterceptor(itemServiceInterceptor);
   }
}