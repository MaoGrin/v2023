import wangEditor from 'wangeditor'

export default class {
  editor: wangEditor;
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    this.editor = new wangEditor(el);
    // this.editor.config.height = config.height;
    // this.editor.config.uploadImgServer = config.uploadImgServer
    Object.assign(this.editor.config,config)
    this.editor.config.onchange = callback;
    this.editor.config.uploadImgHooks = this.uploadImg();
    this.editor.create();
    this.editor.txt.html(config.modelValue); // 重新设置编辑器内容
  }
  private uploadImg() {
    return {
      customInsert: function (insertImgFn:Function, result:any) {
        insertImgFn(result.data.url);
      },
    };
  }
}
