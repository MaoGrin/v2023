declare namespace toastui {
  class Editor {
    constructor(options: any);
    getMarkdown: () => string;
    getHTML: () => string;
    removeHook: (type: string) => void;
    addHook: (type: string, handler: Function) => void;
    on: (event: string, callback: Function) => void;
    setHeight: (height: string) => void;
    focus: () => void;
  }
}

declare class wangEditor {
  constructor(el: string);
  config: { [key: string]: any };
  create: () => void;
  txt:{ [key: string]: any };
}
