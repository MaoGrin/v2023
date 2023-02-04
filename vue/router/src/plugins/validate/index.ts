import * as veeValidate from "vee-validate";
import rules from "@vee-validate/rules";
import { localize,loadLocaleFromURL } from "@vee-validate/i18n";
import yup from './yup'
// 中文包
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

veeValidate.configure({
  generateMessage:localize("zh_CN")
}) 


Object.keys(rules).forEach((key) => {
  // 注册规则
  veeValidate.defineRule(key, rules[key]);
});

const useFields = (fields:string[]) =>{
  fields.forEach(filed=>veeValidate.useField(filed))
}

const modules  = {
  yup,...veeValidate,useFields
}

export default modules