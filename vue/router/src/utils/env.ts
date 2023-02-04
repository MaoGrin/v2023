// env环境属性字符串处理

import _ from "lodash";
// 深拷贝对象
const env: any = _.cloneDeep(import.meta.env); 
// 遍历对象
Object.entries(import.meta.env as Record<string, any>).forEach(
  ([key, value]) => {
    if (value == "true" || value == "false") {
      env[key] = value == "true" ? true : false;
    } else if (/^\d+$/.test(value)) {
      env[key] = Number(value);
    } else if (value == "null") env[key] = null;
    else if (value == "undefined") env[key] = undefined;
    else env[key] = value;
  }
);

export default env as ImportMetaEnv;
