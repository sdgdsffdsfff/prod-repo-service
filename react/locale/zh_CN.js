// zh_CN.js
const commonField = {
  // 表格通用列名
  status: '状态',
  name: '名称',
  creator: '创建者',
  updater: '更新者',
  updateDate: '更新时间',
  createDate: '创建时间',
  description: '描述',
  number: '编号',
  projectName: '项目名',
  libName: '仓库名',

  // 操作
  active: '启用',
  disable: '禁用',
  stop: '停用',
  return: '返回',
  submit: '确认',
  create: '创建',
  add: '添加',
  edit: '修改',
  save: '保存',
  refresh: '刷新',
  associate: '关联',
  loadMore: '展开更多',
  permissions: '权限分配',
  deploy: '应用部署',
  deployment: '部署',
  upgrade: '升级',
  modify: '变更',
  iknow: '我知道了',
  reset: '重置',
  install: '安装',
  uninstall: '卸载',

  // 通用描述
  app: '应用',
  appName: '应用名称',
  environment: '环境',
  envName: '环境名称',
  instance: '实例',
  network: '网络',
  label: '标签',
  version: '版本',
  file: '文件',
  commit: '提交',
  available: '可用',
  unavailable: '不可用',
  log: '日志',
  ingress: '域名',
  address: '地址',
  path: '路径',
  captcha: '验证码',
  loginName: '登录名',
  userName: '用户名',
  mailbox: '邮箱',
  password: '密码',
  projectRole: '项目角色',
  addTime: '添加时间',
  annotation: '注解',
  routing: '路由',
  port: '端口',
  protocol: '协议',
  import: '导入',
  executor: '执行者',
  startUp: '启动',
  owner: '项目所有者',
  member: '项目成员',
  all: '全部',
  not_installed: '未安装',

  // 状态描述
  null: '无',
  running: '运行中',
  operating: '处理中',
  connect: '已连接',
  disconnect: '未连接',
  stopping: '停止中',
  deleting: '删除中',
  pending: '部署中',
  stopped: '已停止',
  failed: '失败',
  deleted: '已删除',
  creating: '创建中',
  pendingcheck: '待审核',
  executing: '执行中',
  terminated: '已终止',

  // 表单通用描述
  noRepeat: '不可重复',

  // public
  detail: '详情',
  operate: '操作',
  cancel: '取消',
  close: '关闭',
  delete: '删除',
  MicroApp: '微应用',
  MicroAppUI: 'Web前端',
  Mobile: '移动',
  Application: '普通应用',
  JavaLib: 'Java 库',
  install_failed: '创建失败',
  upgrade_failed: '更新失败',
  starting_failed: '重启失败',
  stop_failed: '停止失败',
  delete_failed: '删除失败',
  deploy_failed: '部署失败',
  rollback_failed: '回滚失败',
  learnmore: '了解详情',
  required: '该字段是必输的',
  project: '本项目',
  market: '应用市场',
  share: '共享应用',
  organization: '本组织',
  public: '全平台',
  filter: '过滤表',
  previous: '上一步',
  next: '下一步',
  finish: '结束',
  ok: '确定',
  language: 'zh_CN',
  chooseType: '选择类型',
  chooseApp: '选择应用服务',
  notes: '填写内容',
  write: '编辑',
  preview: '预览',
  expand: '展开',
  shrink: '收起',
  validDate: '有效期',
  noContent: '没有内容',
  notActive: '未生效',
  expired: '已过期',
  timeFrom: '自',
  timeUntil: '至',
  success: '成功',
  minutes: '分',
  seconds: '秒',
  minTime: '时长（分）',
  nodata: '暂无数据',
  skipped: '跳过',
  more: '更多',
  total: '总次数',
  recent: '最近',
  key: '键',
  value: '值',
  detailMore: '更多详情',
  expandAll: '全部展开',
  collapseAll: '全部折叠',
  checkCodeExist: '编码已存在',
  checkCodeReg:
    '编码只能由小写字母、数字、"-"组成，且以小写字母开头，不能以"-"结尾',
  checkCodeFailed: '编码校验失败，请稍后再试',
  checkNameExist: '名称已存在',
  checkNameFailed: '名称重名校验失败，请稍后再试',
  nameCanNotHasSpaces: '名称不能包含空格',
  checkNameFail: '网络错误，请稍后重试',
  formatError: '格式有误',
  checkEmailError: '请输入有效的邮箱地址',
  nameCanNotBeEmpty: '名称不能为空',
  contentCanNotBeEmpty: '内容不能为空',

  'modify.success': '修改成功',
  'recover.success': '权限回收成功',

  // 时间
  year: '年',
  month: '月',
  week: '周',
  day: '天',
  hour: '小时',
  minute: '分钟',
  justnow: '刚刚',
  ago: '之前',

  approve: '审批',
  applicant: '申请人',
  approvalUserName: '审批人',
  yes: '是',
  no: '否',
  none: '无',
  async: '同步',
  online: '在线',
  offline: '离线',
  unit: '单位',
  startDate: '开始时间',
  endDate: '结束时间',
};

const infraCommon = {
  yes: '是',
  no: '否',
  date: '日期',
  time: '时间',
  exportAuth: '导出权限',
  createdByName: '创建人',
  creationDate: '创建时间',
  applyInfo: '申请信息',
  approvalInfo: ' 审批信息',
  reason: '原因',
  'approval.operation': '审批操作',
  'approval.message': '审批意见',
  'approval.result': '审批结果',
  'confirm.delete': '确认删除？',
  'confirm.cancleAuthorization': '确认取消授权？',
  'success.delete': '删除成功',
  'success.copy': '复制成功',
  'success.cancleAuthorization': '取消授权成功',
  'success.export': '导出成功',
  'exportModal.confirm.title': '权限导出确认',
  'success.operation': '操作成功',
  'view.log': '构建日志',
  'commit.success': '提交成功',
  'save.success': '保存成功',
  'ldap.disable': '禁用LDAP',
  'ldap.enable': '启用LDAP',
  'view.detail': '查看详情',
  'infra.permission': '权限',
};
const prodManagement = {
  'infra.docManage.message.exportSuccess': '导出成功',
  'infra.docManage.message.exportConfirm': '权限导出确认',
  'infra.docManage.message.confirm.export': '确定导出',
  'dir.path.permission': '的{dirData}权限?',
  'infra.codelib.audit.model.opType': '操作类型',
  'infra.docManage.message.noOperationLog': '暂无操作记录',
  'infra.codelib.audit.view.loadMore': '加载更多',
  'infra.codelib.audit.model.projectName': '项目名称',
  'infra.prod.lib.view.publishAuth': '发布权限',
  'infra.prod.lib.view.nexusComponent': '包列表',
  'infra.prod.lib.view.otherRepo': '其它仓库',
  'infra.prod.lib.view.overviewRepo': '仓库总览',
  'infra.prod.lib.view.uploadPackage': '上传包',
  'infra.prod.lib.view.upload-one-file-atlast': '至少上传一个文件',
  'infra.prod.lib.view.upload-tgz': '上传tgz文件',
  'infra.prod.lib.view.upload-jar': '上传jar文件',
  'infra.prod.lib.view.upload-pom': '上传pom文件',
  'infra.prod.lib.view.changeRepo': '修改制品库',
  'infra.prod.lib.view.configGuide': '{name}配置指引',
  'infra.prod.lib.view.pull': '拉取',
  'infra.prod.lib.view.configStep1': '1. 修改maven安装目录下settings.xml文件， 在<servers>code节点添加如下配置，',
  'infra.prod.lib.view.configStep11': '此处显示的是该仓库不允许匿名访问时的默认拉取用户（复制时会显示用户名/密码）',
  'infra.prod.lib.view.configStep2': '配置项目下的pom.xml文件，在<repositories>节点下添加如下配置',
  'infra.prod.lib.view.configStep3': '配置项目下的pom.xml文件，添加maven依赖包坐标，具体坐标请到包列表中查看',
  'infra.prod.lib.view.push': '推送，发布',
  'infra.prod.lib.view.pushConfigStep1': '1. 修改maven安装目录下settings.xml文件，在<servers>节点添加如下配置（替换用户名密码为自己的）',
  'infra.prod.lib.view.pushConfigStep2': '2. 配置项目下的pom.xml文件',
  'infra.prod.lib.view.pushConfigStep3': '3. 项目根目录下，运行命令',
  'infra.prod.lib.view.addGroup': '添加组仓库成员',
  'infra.prod.lib.view.groupMember': '组仓库成员',
  'infra.prod.lib.view.chooseGroupPlease': '请选择仓库',
  'infra.prod.lib.model.oldNeUserPassword': '旧密码',
  'infra.prod.lib.model.newNeUserPassword': '新密码',
  'infra.prod.lib.view.confirmPassword': '确认密码',
  'infra.prod.lib.view.passwordNotSame': '输入密码不一致',
  'infra.prod.lib.view.changePassword': '修改密码',
  'infra.prod.lib.view.configPOM': '配置pom.xml文件,在<dependencies>节点下添加如下配置',
  'infra.prod.lib.view.createRepo': '创建仓库',
  'infra.prod.lib.view.associateRepo': '关联仓库',
  'infra.prod.lib.view.addAssociateRepo': '添加关联仓库',
  'infra.prod.lib.view.publishAccount': '管理员用户',
  'infra.prod.lib.view.repo': '仓库列表',
  'infra.prod.lib.view.guide': '配置指引',
  'infra.prod.lib.view.seeDetail': '查看详情',
  'infra.prod.lib.view.dockerLib': 'Docker制品库',
  'infra.prod.lib.view.mavenLib': 'Maven制品库',
  'infra.prod.lib.view.npmLib': 'npm制品库',
  'infra.prod.lib.view.mirrorLib': '镜像仓库',
  'infra.prod.lib.view.mirrorList': '镜像列表',
  'infra.prod.lib.view.userAuth': '用户权限',
  'infra.prod.lib.view.operationLog': '操作日志',
  'infra.prod.lib.view.noContent': '暂无数据',
  'infra.prod.lib.view.globalResource': '全局资源分配',
  'infra.prod.lib.view.globalResource.title': '全局镜像仓库资源分配',
  'infra.prod.lib.view.resourceConfig': '资源分配',
  'infra.prod.lib.view.confirm.deleteMaven': '确定删除该Maven仓库吗？',
  'infra.prod.lib.view.confirm.deleteMirror': '确定删除该镜像仓库吗？',
  'infra.prod.lib.view.confirm.deleteNpm': '确定删除该npm仓库吗？',
  'infra.prod.lib.view.confirm.deleteImage': '确定删除该镜像吗？',
  'infra.prod.lib.view.tag.title': '“{name}”镜像版本',
  'infra.prod.lib.view.npmtag.title': '“{name}”版本',
  'infra.prod.lib.view.enter.osVersion': '请查询版本号',
  'infra.prod.lib.view.version.pull': '版本拉取',
  'infra.prod.lib.view.versionCopy': '版本复制',
  'infra.prod.lib.view.loginTips': '#"个人信息-->个人设置-->制品库设置"中可查看默认密码',
  'infra.prod.lib.action.disable': '失效仓库',
  'infra.prod.lib.action.disable.title': '失效仓库“{name}”',
  'infra.prod.lib.action.disable.tips': '确定要失效该仓库吗？',
  'infra.prod.lib.action.active': '启用仓库',
  'infra.prod.lib.action.active.title': '启用仓库“{name}”',
  'infra.prod.lib.action.active.tips': '确定要启用该仓库吗？',

  'infra.prod.lib.model.downloadUrl': '下载地址',
  'infra.prod.lib.model.hashVale': 'hash值',
  'infra.prod.lib.model.newestVersion': '最新版本',
  'infra.prod.lib.model.packageName': '包名称',
  'infra.prod.lib.model.destImageName': '目标镜像名称',
  'infra.prod.lib.model.destImageTagName': '目标镜像版本号',
  'infra.prod.lib.model.destProject': '目标镜像仓库',
  'infra.prod.lib.model.size': '大小',
  'infra.prod.lib.model.os': 'OS/ARCH',
  'infra.prod.lib.model.digest': '摘要',
  'infra.prod.lib.model.createTime': '创建时间',
  'infra.prod.lib.model.pushTime': '最新推送时间',
  'infra.prod.lib.model.pullTime': '最新拉取时间',
  'infra.prod.lib.model.osVersion': '版本号',
  'infra.prod.lib.model.dockerVersion': 'Docker版本',
  'infra.prod.lib.model.description': '镜像描述',
  'infra.prod.lib.model.storage': '存储容量限制',
  'infra.prod.lib.model.artifactoryCount': '制品数限制',
  'infra.prod.lib.model.repoCode': '镜像仓库编码',
  'infra.prod.lib.model.mirrorLibName': '镜像仓库名称',
  'infra.prod.lib.model.publicFlag': '访问级别',
  'infra.prod.lib.model.repoCount': '镜像数',
  'infra.prod.lib.model.createdBy': '创建人',
  'infra.prod.lib.model.creationDate': '创建时间',
  'infra.prod.lib.model.serviceName': '服务名称',
  'infra.prod.lib.model.accessUrl': '访问地址',
  'infra.prod.lib.model.manageUser': '管理用户',
  'infra.prod.lib.model.password': '用户密码',
  'infra.prod.lib.model.anonymousName': '匿名用户',
  'infra.prod.lib.model.anonymousRole': '匿名用户对应角色',
  'infra.prod.lib.model.modify.maven': '修改服务器配置',
  'infra.prod.lib.model.projectName': '关联项目',
  'infra.prod.lib.model.harborRoleName': '权限角色',
  'infra.prod.lib.model.repoMemberList': '仓库成员',

  'infra.prod.lib.model.repoName': '仓库名称',
  'infra.prod.lib.model.type': '仓库类型',
  'infra.prod.lib.model.versionPolicy': '仓库策略',
  'infra.prod.lib.model.writePolicy': '版本策略',
  'infra.prod.lib.model.allowAnonymous': '是否允许匿名访问',
  'infra.prod.lib.model.remoteUrl': '远程仓库地址',
  'infra.prod.lib.model.remoteUsername': '远程仓库账号',
  'infra.prod.lib.model.remotePassword': '远程仓库密码',
  'infra.prod.lib.model.online': '在线状态',
  'infra.prod.lib.model.url': 'URL',
  'infra.prod.lib.model.neUserId': '管理用户名',
  'infra.prod.lib.model.neRepositoryName': '默认管理仓库',
  'infra.prod.lib.model.otherRepositoryName': '其他仓库发布权限',

  'infra.prod.lib.view.noprodlib': '暂无制品库',
  'infra.prod.lib.view.emptyPageDescription': '当前项目下无制品库，请创建',
  'infra.prod.lib.view.createProdlib': '创建制品库',
  'infra.prod.lib.view.changeConf': '修改配置',
  'infra.prod.lib.view.detail': '查看详情',
  'infra.prod.lib.view.configGuideTitle': '配置指引',
  'infra.prod.lib.view.createDockerType': '仓库来源',

  'infra.prod.lib.view.public': '公开',
  'infra.prod.lib.view.private': '不公开',
  'infra.prod.lib.view.advancedConf': '高级配置',
  'infra.prod.lib.model.CVE-ID': 'CVE-ID',
  'infra.prod.lib.view.addCVE-ID': '添加CVE-ID',
  'infra.prod.lib.model.useSysCveFlag': '启用系统白名单',
  'infra.prod.lib.model.useProjectCveFlag': '启用项目白名单',
  'infra.prod.lib.model.autoScanFlag': '自动扫描镜像',
  'infra.prod.lib.view.DockerRepoConf': 'Docker仓库配置',
  'infra.prod.lib.model.harborProjectCode': '镜像仓库编码',
  'infra.prod.lib.model.harborProjectName': '镜像仓库名称',
  'infra.prod.lib.model.countLimit': '制品数',
  'infra.prod.lib.model.storageNum': '存储容量',
  'infra.prod.lib.model.storageUnit': '存储单位',
  'infra.prod.lib.model.severity': '危害级别',
  'infra.prod.lib.model.cve': 'CVE白名单',
  'infra.prod.lib.model.endDate': '有效期至',
  'infra.prod.lib.model.preventVulnerableFlag': '阻止潜在漏洞镜像',
  'infra.prod.lib.view.projectCapacity': '项目容量',
  'infra.prod.lib.view.artifactNum': 'Artifact数量',
  'infra.prod.lib.view.usedStorage': '存储消耗',
  'infra.prod.lib.view.deploySafe': '部署安全',
  'infra.prod.lib.view.buildAndPush': '构建镜像并push',
  'infra.prod.lib.view.docker.buildAndPush.configStep1': '1. 打开docker客户端，使用harbor用户名密码登陆harbor访问地址',
  'infra.prod.lib.view.docker.buildAndPush.configStep2': '2. 创建Dockerfile构建镜像',
  'infra.prod.lib.view.docker.buildAndPush.configStep3': '3. 使用Dockerfile构建镜像，打tag',
  'infra.prod.lib.view.docker.buildAndPush.configStep4': '4. 推送到远程仓库',
  'infra.prod.lib.view.docker.pull': 'Pull镜像',
  'infra.prod.lib.model.imageName': '镜像名称',
  'infra.prod.lib.model.updateTime': '最新更新时间',
  'infra.prod.lib.model.tagsCount': '版本数',
  'infra.prod.lib.model.pullCount': '下载数',
  'infra.prod.lib.view.dockerImageList': '镜像列表',
  'infra.prod.lib.view.imageDescription': '镜像描述',
  'infra.prod.lib.model.tagName': '版本号',
  'infra.prod.lib.model.sizeDesc': '大小',
  'infra.prod.lib.model.OS/ARCH': 'OS/ARCH',
  'infra.prod.lib.model.author': '创建人',
  'infra.prod.lib.model.realName1': '推送者',
  'infra.prod.lib.view.pullImageByTag': '版本拉取',
  'infra.prod.lib.view.pullTagGuide': '拉取指引',
  'infra.prod.lib.view.pullTagGuide.configStep1': '1. 登陆制品库，认证用户',
  'infra.prod.lib.view.pullTagGuide.configStep2': '2. 执行命令',
  'infra.prod.lib.view.buildLog': '构建日志',
  'infra.prod.lib.view.optLog': '操作日志',
  'infra.prod.lib.view.authLog': '权限操作记录',
  'infra.prod.lib.view.imgLog': '镜像操作记录',

  'infra.prod.lib.model.loginName': '登录名',
  'infra.prod.lib.model.realName': '用户姓名',
  'infra.prod.lib.model.memberRole': '项目成员角色',
  'infra.prod.lib.model.harborRoleValue': '权限角色',
  'infra.prod.lib.model.roleCode': '权限角色',
  'infra.prod.lib.model.endDate01': '过期时间',
  'infra.prod.lib.view.changeAuth': '修改权限',
  'infra.prod.lib.view.addMember': '添加成员',
  'infra.prod.lib.model.userId': '成员',
  'infra.prod.lib.view.deleteImage': '确认删除镜像{imageName}?若删除镜像，则该镜像下所有版本将被删除',
  'infra.prod.lib.view.deleteNpm': '确认删除包{name}?若删除包，则该包下所有版本将被删除',
  'infra.prod.lib.view.confirm.deleteAuth': '确认删除用户权限？',
  'infra.prod.lib.model.startDate': '有效期从',
  'infra.prod.lib.model.distributedQueryFlag': '分配仓库',
  'infra.prod.lib.view.assignRepo': '分配仓库',
  'infra.prod.lib.model.organizationId': '组织',
  'infra.prod.lib.model.projectId': '项目',
  'infra.prod.lib.model.distributeRepoAdminId': '仓库管理员',

  'infra.prod.lib.view.defaultRepo': '默认仓库',
  'infra.prod.lib.view.customRepo': '自定义仓库',
  'infra.prod.lib.model.repoUrl': '镜像地址',
  'infra.prod.lib.view.addAppService': '添加应用服务',
  'infra.prod.lib.view.chooseAppService': '请选择应用服务',
  'infra.prod.lib.model.code': '服务编码',
  'infra.prod.lib.model.svcType': '服务类型',
  'infra.prod.lib.view.associatedAppSVC': '关联应用服务',
  'infra.prod.lib.model.projectShare': '是否共享',
  'infra.prod.lib.view.customNexus': '自定义nexus服务',
  'infra.prod.lib.view.addCustomNexus': '添加自定义nexus服务',
  'infra.prod.lib.view.createRepoType': '创建方式',
  'infra.prod.lib.model.serverName': '服务名称',
  'infra.prod.lib.model.serverUrl': '服务地址',
  'infra.prod.lib.model.userName': '管理用户',
  'infra.prod.lib.model.enableAnonymousFlag': '是否启用匿名访问控制',
  'infra.prod.lib.model.anonymous': '匿名用户',
};

const zhCN = {
  ...commonField,
  ...prodManagement,
  ...infraCommon,
};

export default zhCN;
