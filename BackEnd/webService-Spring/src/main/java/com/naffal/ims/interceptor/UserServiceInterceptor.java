package com.naffal.ims.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class UserServiceInterceptor implements HandlerInterceptor {
	// Difference in filters and interceptors : https://stackoverflow.com/a/71227949 
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception { // called between dispatcherServlet to controller
		// Before sending the request to the controller
		System.out.println("Pre Handle method is Calling");
		// You can do authentication or security related stuff here.
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception { // called when sending from controller to client
		// Before sending the response to the client
		System.out.println("Post Handle method is Calling");
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception exception) throws Exception {
		System.out.println("Request and Response is completed");
	}
}