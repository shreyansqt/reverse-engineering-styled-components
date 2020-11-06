import * as React from "react";

const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

const styled = (Tag) => (styleArr) => {
  // use style string to randomly generate a className
  const styles = styleArr[0].trim();
  const className = `style${hashCode(styles)}`;
  const styleStr = `.${className} {${styles}}`;

  // check if styles exist already & prevent duplicates
  const isDuplicate = styleTag.innerText.indexOf(styleStr) > -1;
  if (!isDuplicate) {
    styleTag.innerText = `${styleTag.innerText} .${className} {${styles}}`;
  }

  return ({ className: originalClassName, ...restProps }: any) => (
    <Tag
      className={`${className}${
        originalClassName ? ` ${originalClassName}` : ""
      }`}
      {...restProps}
    />
  );
};

export default styled;

const hashCode = (s) =>
  s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
