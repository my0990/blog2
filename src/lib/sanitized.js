import sanitize from "sanitize-html";

export default ({ html = "" }) => {
    const sanitized = sanitize(html, {
      allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
      'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
      'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'],
    });
    return <span dangerouslySetInnerHTML={{ __html: sanitized }} />;
  };