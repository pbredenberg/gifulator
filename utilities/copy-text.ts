import ClipboardJS from 'clipboard';

const CURRENT_HOST = typeof window !== 'undefined'
  ? document.location.origin
  : '';

/**
 * Copies the text inside `attribute` of Element `selector`
 * to the clipboard.
 *
 * @param selector
 * @param attribute
 */
export const copyToClipBoard = (selector: string, attribute: string) => {
  return new ClipboardJS(selector, {
    text: function(trigger) {
      return CURRENT_HOST + trigger.getAttribute(attribute);
    }
  })
};
