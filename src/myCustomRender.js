import ReactReconciler from 'react-reconciler';

const hostConfig = {
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    let el = document.createElement(type);
    let propKeys = ['alt', 'className', 'href', 'rel', 'src', 'target']
    propKeys.forEach(key => {
      if (props[key]) el[key] = props[key]
    })
    if (props.onClick) {
      el.addEventListener('click', props.onClick)
    }
    console.log(rootContainerInstance)
    console.log(hostContext)
    console.log(internalInstanceHandle)
    return el
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return document.createTextNode(text)
  },
  // append
  appendChildToContainer(container, child) {
    container.appendChild(child)
  },
  appendInitialChild(parent, child) {
    parent.appendChild(child)
  },
  appendChild(parent, child) {
    parent.appendChild(child)
  },
  // remove
  removeChildFromContainer(container, child) {
    container.removeChild(child)
  },
  removeChild(parent, child) {
    parent.removeChild(child)
  },
  // insert
  insertInContainerBefore(container, child) {
    container.insertBefore(child)
  },
  insertBefore(parent, child) {
    parent.insertBefore(child)
  },
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    console.log(
      instance,
      type,
      oldProps,
      newProps
    )
    return true
  },
  commitTextUpdate(
    textInstance,
    oldText,
    newText
  ) {
    console.log(newText)
    console.log(oldText)
    console.log(textInstance)
    textInstance.text = newText;
  },
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    // console.log(
    //   instance,
    //   updatePayload,
    //   type,
    //   oldProps,
    //   newProps,
    //   finishedWork
    // )
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          instance.textContent = propValue;
        }
      } else {
        const propValue = newProps[propName];
        instance.setAttribute(propName, propValue);
      }
    });
  },
  getRootHostContext() {},
  getChildHostContext() {},
  getPublicInstance() {},
  shouldSetTextContent() {
    return false
  },
  prepareForCommit() {},
  resetAfterCommit: (container) => {
    // container.applyUpdate();
  },
  finalizeInitialChildren() {
    return false;
  },
  clearContainer() {},
  // If your target platform is similar to the DOM and has methods similar to `appendChild`, `removeChild`, and so on, you'll want to use the **mutation mode**. This is the same mode used by React DOM, React ART, and the classic React Native renderer.
  // The reconciler has two modes: mutation mode and persistent mode. You must specify one of them.
  supportsMutation: true
};
const reconciler = ReactReconciler(hostConfig);
export default {
  render: (reactElement, domElement, callback) => {
    let rootContainer = reconciler.createContainer(domElement, false, false);

    reconciler.updateContainer(reactElement, rootContainer, null, null);
  }
};
