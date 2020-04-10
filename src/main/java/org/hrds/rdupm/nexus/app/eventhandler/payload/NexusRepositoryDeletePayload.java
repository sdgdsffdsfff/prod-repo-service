package org.hrds.rdupm.nexus.app.eventhandler.payload;

import org.hrds.rdupm.nexus.domain.entity.NexusRepository;
import org.hrds.rdupm.nexus.domain.entity.NexusRole;
import org.hrds.rdupm.nexus.domain.entity.NexusUser;

/**
 * nexus maven 仓库删除
 * @author weisen.yang@hand-china.com 2020/4/10
 */
public class NexusRepositoryDeletePayload {
	private NexusRepository nexusRepository;
	private NexusRole nexusRole;
	private NexusUser nexusUser;

	public NexusRepository getNexusRepository() {
		return nexusRepository;
	}

	public NexusRepositoryDeletePayload setNexusRepository(NexusRepository nexusRepository) {
		this.nexusRepository = nexusRepository;
		return this;
	}

	public NexusRole getNexusRole() {
		return nexusRole;
	}

	public NexusRepositoryDeletePayload setNexusRole(NexusRole nexusRole) {
		this.nexusRole = nexusRole;
		return this;
	}

	public NexusUser getNexusUser() {
		return nexusUser;
	}

	public NexusRepositoryDeletePayload setNexusUser(NexusUser nexusUser) {
		this.nexusUser = nexusUser;
		return this;
	}
}