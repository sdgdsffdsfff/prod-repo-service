package org.hrds.rdupm.nexus.client.nexus.model;

/**
 * 仓库创建 Storage信息
 * @author weisen.yang@hand-china.com 2020/3/17
 */
public class RepositoryStorage {
	private String blobStoreName;
	private Boolean strictContentTypeValidation;
	/**
	 * hosted 类型仓库: allow_once   DENY: 只读   ALLOW_ONCE：禁止覆盖   ALLOW：允许覆盖
	 */
	private String writePolicy;

	public String getBlobStoreName() {
		return blobStoreName;
	}

	public RepositoryStorage setBlobStoreName(String blobStoreName) {
		this.blobStoreName = blobStoreName;
		return this;
	}

	public Boolean getStrictContentTypeValidation() {
		return strictContentTypeValidation;
	}

	public RepositoryStorage setStrictContentTypeValidation(Boolean strictContentTypeValidation) {
		this.strictContentTypeValidation = strictContentTypeValidation;
		return this;
	}

	public String getWritePolicy() {
		return writePolicy;
	}

	public RepositoryStorage setWritePolicy(String writePolicy) {
		this.writePolicy = writePolicy;
		return this;
	}
}
