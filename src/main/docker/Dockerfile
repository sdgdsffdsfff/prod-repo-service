FROM registry.cn-hangzhou.aliyuncs.com/choerodon-tools/javabase:0.8.0
COPY app.jar /choerodon/prod-repo-service.jar
ENV JAVA_TOOL_OPTIONS -Dfile.encoding=UTF8 -Duser.language=zh -Duser.region=zh_CN -Duser.country=zh_CN
ENTRYPOINT exec java -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap $JAVA_OPTS $SKYWALKING_OPTS  -jar /choerodon/prod-repo-service.jar