class JMessageClass {
  jMessageBox: HTMLElement;
  time: number;
  constructor() {
    this.init()
    this.time = 5000
  }
  init() {
    if(!document.querySelector("#j-message-box-el")) {
      const JMessageBoxEle = document.createElement("j-message-box")
      document.body.appendChild(JMessageBoxEle)
      this.jMessageBox = JMessageBoxEle
    }
  }
  success(title: string) {
    const container = this.jMessageBox.shadowRoot.querySelector("#j-message-box")
    const jMessageItem = document.createElement("j-message-item");
    jMessageItem.setAttribute("title", title);
    container.appendChild(jMessageItem);
    this.autoRemove(container,jMessageItem);
  }
   autoRemove(parentNode, item) {
     const self = this
    setTimeout(function () {
      self.childrenRemove(parentNode, item);
    }, 5000);
  }
   childrenRemove(parentNode, item) {
    item.close();
    setTimeout(function () {
      parentNode.removeChild(item);
    }, 300);
  }
} 
const JMessage =  new JMessageClass()
export default JMessage
