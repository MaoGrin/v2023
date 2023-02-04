import { uploadImage } from "@/apis/uploadApi";
import Editor from "@toast-ui/editor";
export default class {
  editor: Editor;
  public isFullscreen = false;
  constructor(el: string, initialValue: string, public height: string) {
    this.editor = new Editor({
      el: document.querySelector(el)!,
      initialEditType: "markdown",
      previewStyle: "vertical",
      height,
      initialValue,
      toolbarItems: this.toolbar() as [],
    });
    this.ImageHook();
  }
  private toolbar() {
    return [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "image", "link"],
      ["code", "codeblock"],
      [
        {
          el: this.fullscreen(),
          command: "fullscreen",
          tooltip: "fullscreen",
        },
      ],
    ];
  }
  // 全屏
  private fullscreen() {
    const button = document.createElement("button") as HTMLButtonElement;
    button.className = "fas fa-arrows-up-down-left-right";
    button.style.rotate = "45deg";
    button.style.fontSize = "18px";
    button.style.margin = "0";
    button.style.color = "rgba(51,51,51,.8)";

    button.addEventListener("click", () => {
      this.toggleFullScreen();
    });

    button.addEventListener("keyup", (event: KeyboardEvent) => {
      if (event.key == "Escape" && this.isFullscreen) {
        this.toggleFullScreen();
        this.editor.focus();
      }
    });

    return button;
  }
  // 切换全屏
  private toggleFullScreen() {
    const ui = document.querySelector(
      ".toastui-editor-defaultUI"
    ) as HTMLDivElement;
    ui.classList.toggle("fullscreen");
    this.isFullscreen = !this.isFullscreen;
    if (this.isFullscreen === false) {
      this.editor.setHeight(this.height);
    } else {
      this.editor.setHeight("100vh");
    }
  }

  // 图片钩子
  private ImageHook() {
    this.editor.removeHook("addImageBlobHook");

    this.editor.addHook(
      "addImageBlobHook",
      async (blob: any, callback: Function) => {
        const form = new FormData();
        form.append("file", blob, blob.name);
        const res = await uploadImage(form);
        callback(res.data.url, blob.name);
      }
    );
  }
}
