package org.hrds.rdupm.util;

import io.choerodon.core.exception.CommonException;
import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.*;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.IvParameterSpec;
import java.security.spec.AlgorithmParameterSpec;

/**
 * 该util使用DES, 是可解密的   若是不需要解密的场景，建议直接使用 BCryptPasswordEncoder
 * @author weisen.yang@hand-china.com 2020/5/6
 */
@Component
public class DESEncryptUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(DESEncryptUtil.class);


    private static String desKey;
    private static String desIV;

    /**
     * 加密
     * @param data 待加密参数
     * @return String
     */
    public static String encode(String data) {

        try {
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
            DESKeySpec keySpec = new DESKeySpec(desKey.getBytes());
            SecretKey key = keyFactory.generateSecret(keySpec);

            AlgorithmParameterSpec iv = new IvParameterSpec(desIV.getBytes());

            Cipher enCipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
            enCipher.init(Cipher.ENCRYPT_MODE, key, iv);
            byte[] pasByte = enCipher.doFinal(data.getBytes("utf-8"));
            return Base64.encodeBase64String(pasByte).replaceAll("\\+", "_").replaceAll("\\/", "@");
        } catch (Exception e) {
            LOGGER.error("des encode data error", e);
            throw new CommonException("encode data error");
        }
    }

    /**
     * 解密
     * @param data 待解密参数
     * @return String
     */
    public static String decode(String data) {

        try {
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
            DESKeySpec keySpec = new DESKeySpec(desKey.getBytes());
            SecretKey key = keyFactory.generateSecret(keySpec);

            AlgorithmParameterSpec iv = new IvParameterSpec(desIV.getBytes());

            Cipher deCipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
            deCipher.init(Cipher.DECRYPT_MODE, key, iv);
            byte[] pasByte = deCipher.doFinal(Base64.decodeBase64(data.replaceAll("_", "+").replaceAll("@", "/")));
            return new String(pasByte, "UTF-8");
        } catch (Exception e) {
            LOGGER.error("des decode data error", e);
            throw new CommonException("decode data error");
        }
    }

    public static String getDesKey() {
        return desKey;
    }

    @Value("${DesEncrypt.desKey}")
    public void setDesKey(String desKey) {
        DESEncryptUtil.desKey = desKey;
    }

    public String getDesIV() {
        return desIV;
    }

    @Value("${DesEncrypt.desIV}")
    public void setDesIV(String desIV) {
        DESEncryptUtil.desIV = desIV;
    }
}
