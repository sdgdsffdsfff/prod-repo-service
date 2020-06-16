import React, { useCallback, useMemo } from 'react';
// import {  } from 'choerodon-ui';
import { Modal, Button } from 'choerodon-ui/pro';
import { Permission, axios, stores } from '@choerodon/boot';
import { useLocalStore, observer, Observer } from 'mobx-react-lite';
import { reaction, when } from 'mobx';
import CreateRepoModal from './CreateRepoModal';
import { intlPrefix } from '../../index';
import './index.less';


export const useOpenModal = ({
  init,
  formatMessage,
  mavenCreateDs,
  dockerCreateBasicDs,
  npmCreateDs,
  dockerCustomCreateDs,
  mavenAssociateDs,
  npmAssociateDs,
}) => {
  const modal = React.useRef();

  const testBtnStore = useLocalStore(() => ({
    isShow: false,
    setIsShow(value) {
      testBtnStore.isShow = value;
    },
  }));

  const validateStore = useLocalStore(() => ({
    isValidate: false,
    setIsValidate(value) {
      validateStore.isValidate = value;
    },
  }));

  const validateConnect = async () => {
    const { currentMenuType: { organizationId } } = stores.AppState;
    const validate = await dockerCustomCreateDs.current.validate();
    if (validate) {
      const res = await axios.post(`/rdupm/v1/${organizationId}/harbor-custom-repos/check/custom-repo`, dockerCustomCreateDs.current.toData());
      validateStore.setIsValidate(res);
    }
  };

  const disabledListener = (disabled) => {
    modal.current.update({ okProps: { disabled } });
  };

  React.useEffect(
    () => reaction(() => testBtnStore.isShow && !validateStore.isValidate, disabledListener),
    [],
  );

  React.useEffect(
    () => when(() => testBtnStore.isShow, () => modal.current.update({ okProps: { disabled: false } })),
    [],
  );

  const createRepoModalProps = useMemo(() => ({
    init,
    formatMessage,
    mavenCreateDs,
    npmCreateDs,
    dockerCreateBasicDs,
    testBtnStore,
    dockerCustomCreateDs,
    validateStore,
    mavenAssociateDs,
    npmAssociateDs,
  }), [init, validateStore, mavenCreateDs, formatMessage, dockerCreateBasicDs, dockerCustomCreateDs, testBtnStore]);

  const openModal = useCallback(() => {
    const key = Modal.key();
    modal.current = Modal.open({
      key,
      title: formatMessage({ id: `${intlPrefix}.view.createProdlib`, defaultMessage: '创建制品库' }),
      maskClosable: false,
      destroyOnClose: true,
      drawer: true,
      className: 'product-lib-create-model',
      children: <CreateRepoModal {...createRepoModalProps} />,
      footer: (okBtn, cancelBtn) => (
        <Observer>
          {() => (
            <React.Fragment>
              {testBtnStore.isShow && <Button color="primary" funcType="raised" onClick={validateConnect}>测试连接</Button>}
              {[okBtn, cancelBtn]}
            </React.Fragment>
          )}
        </Observer>
      ),
    });
  }, []);
  return openModal;
};

const CreateRepoButton = ({
  init,
  formatMessage,
  mavenCreateDs,
  dockerCreateBasicDs,
  npmCreateDs,
  dockerCustomCreateDs,
  mavenAssociateDs,
  npmAssociateDs,
}) => {
  const openModal = useOpenModal({
    init,
    formatMessage,
    mavenCreateDs,
    dockerCreateBasicDs,
    npmCreateDs,
    dockerCustomCreateDs,
    mavenAssociateDs,
    npmAssociateDs,
  });

  return (
    <Permission
      service={[
        'choerodon.code.project.infra.product-lib.ps.project-owner-npm',
        'choerodon.code.project.infra.product-lib.ps.project-owner-maven',
        'choerodon.code.project.infra.product-lib.ps.project-owner-harbor',
      ]}
    >
      <Button
        icon="playlist_add"
        onClick={openModal}
      >
        {formatMessage({ id: `${intlPrefix}.view.createProdlib`, defaultMessage: '创建制品库' })}
      </Button>
    </Permission>
  );
};

export default observer(CreateRepoButton);
