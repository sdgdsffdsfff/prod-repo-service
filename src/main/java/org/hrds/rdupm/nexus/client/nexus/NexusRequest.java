package org.hrds.rdupm.nexus.client.nexus;

import io.choerodon.core.exception.CommonException;
import org.apache.poi.ss.formula.functions.T;
import org.hrds.rdupm.nexus.client.nexus.model.NexusServer;
import org.hzero.core.util.AssertUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.*;

/**
 * @author weisen.yang@hand-china.com 2020/3/16
 */
@Component
public class NexusRequest {
	@Autowired
	@Qualifier("hrdsNexusRestTemplate")
	private RestTemplate restTemplate;
	// TODO 调用remove
	private static ThreadLocal<NexusServer> nexusServerLocal = new ThreadLocal<NexusServer>();


	private static final String AUTH_PRE = "Basic ";
	private static final String AUTH_HEADER= "Authorization";
	private static final String AND = "&";
	private static final String EQ = "=";
	private static final String QM = "?";


	private NexusServer getNexusServer(){
		if (nexusServerLocal.get() == null) {
			// todo
			throw new CommonException("nexus server info is null");
		}
		return nexusServerLocal.get();
	}

	private String getToken(){
		NexusServer nexusServer = nexusServerLocal.get();
		String basicInfo = nexusServer.getUsername() + ":" + nexusServer.getPassword();
		return  AUTH_PRE + Base64.getEncoder().encodeToString(basicInfo.getBytes());
	}
	private String setParam(String url, Map<String, Object> paramMap){
		if (paramMap == null || paramMap.isEmpty()) {
			return url;
		}
		StringBuilder newUrl = new StringBuilder();
		newUrl.append(url).append(QM);
		for (String key : paramMap.keySet()) {
			newUrl.append(key).append(EQ).append(paramMap.get(key)).append(AND);
		}
		return newUrl.toString().substring(0, newUrl.length() - AND.length());
	}
	private void handleResponseStatus(ResponseEntity<String> responseEntity){
		if (responseEntity.getStatusCode() == HttpStatus.UNAUTHORIZED) {
			throw new CommonException("请检查用户或密码是否正确");
		} else if (responseEntity.getStatusCode() == HttpStatus.FORBIDDEN) {
			throw new CommonException("nexus角色权限未分配");
		} else if (responseEntity.getStatusCode() == HttpStatus.INTERNAL_SERVER_ERROR) {
			throw new CommonException("nexus服务错误");
		}
	}


	/**
	 * 设置nexus服务信息
	 * @param nexusServer nexus服务信息
	 */
	public void setNexusServerInfo(NexusServer nexusServer){
		AssertUtils.notNull(nexusServer.getUsername(), "nexus username cannot null");
		AssertUtils.notNull(nexusServer.getPassword(), "nexus password cannot null");
		AssertUtils.notNull(nexusServer.getBaseUrl(), "nexus baseUrl cannot null");
		if (nexusServerLocal.get() == null) {
			nexusServerLocal.set(nexusServer);
		}
	}

	/**
	 * 请求
	 * @param urlFix 请求地址(截掉IP与端口号后的)
	 * @param method 请求方式
	 * @param paramMap url ?后面接的参数
	 * @param body body的参数
	 *  mediaType 默认：application/json
	 * @return ResponseEntity<String>
	 */
	public ResponseEntity<String> exchange(String urlFix, HttpMethod method, Map<String, Object> paramMap, Object body){
		NexusServer nexusServer = this.getNexusServer();
		 String url = nexusServer.getBaseUrl() + urlFix;

		HttpHeaders headers = new HttpHeaders();
		MediaType type = MediaType.parseMediaType(MediaType.APPLICATION_JSON_VALUE);
		headers.setContentType(type);
		headers.add(AUTH_HEADER, this.getToken());
		HttpEntity<Object> entity = new HttpEntity<>(body, headers);
		if (paramMap == null) {
			paramMap = new HashMap<>(2);
		}
		url = this.setParam(url, paramMap);
		ResponseEntity<String> responseEntity = restTemplate.exchange(url, method, entity, String.class, paramMap);
		this.handleResponseStatus(responseEntity);
		return responseEntity;
	}

	/**
	 * 请求
	 * @param urlFix 请求地址(截掉IP与端口号后的)
	 * @param method 请求方式
	 * @param paramMap url后面接的参数
	 * @param body body的参数
	 * @param mediaType 没传，默认：application/json
	 * @return ResponseEntity<String>
	 */
	public ResponseEntity<String> exchange(String urlFix, HttpMethod method, Map<String, Object> paramMap, Object body, String mediaType){
		NexusServer nexusServer = this.getNexusServer();
		String url = nexusServer.getBaseUrl() + urlFix;

		HttpHeaders headers = new HttpHeaders();
		MediaType type = null;
		if (mediaType != null) {
			type = MediaType.parseMediaType(mediaType);
		} else {
			type = MediaType.parseMediaType(MediaType.APPLICATION_JSON_VALUE);
		}
		headers.setContentType(type);
		headers.add(AUTH_HEADER, this.getToken());
		HttpEntity<Object> entity = new HttpEntity<>(body, headers);
		if (paramMap == null) {
			paramMap = new HashMap<>(2);
		}
		url = this.setParam(url, paramMap);
		ResponseEntity<String> responseEntity = restTemplate.exchange(url, method, entity, String.class, paramMap);
		this.handleResponseStatus(responseEntity);
		return responseEntity;
	}








}
