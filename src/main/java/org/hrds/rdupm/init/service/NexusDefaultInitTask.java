package org.hrds.rdupm.init.service;

import io.choerodon.asgard.schedule.annotation.JobTask;
import org.hrds.rdupm.nexus.app.service.NexusInitService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;

/**
 * 默认nexus服务， 初始化
 *
 * @author weisen.yang@hand-china.com
 */
@Service
public class NexusDefaultInitTask {
    private static final Logger logger = LoggerFactory.getLogger(NexusDefaultInitTask.class);

    @Autowired
    private NexusInitService nexusInitService;

    @JobTask(maxRetryCount = 3, code = "nexusDefaultServiceInit", description = "Nexus默认服务初始化")
    public void nexusDefaultInit(Map<String, Object> map) {
        logger.info("Nexus默认服务初始化，定时任务开始执行");
        nexusInitService.initScript();
        nexusInitService.initAnonymous(new ArrayList<>());
        logger.info("Nexus默认服务初始化，定时任务执行完毕");
    }
}