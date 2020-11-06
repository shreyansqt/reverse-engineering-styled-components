import * as React from "react";

// create & insert our style tag
const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

// hashing function, generates a numerical string
// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
const hashCode = (s) =>
  s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

const styled = (Tag) => (styleArr) => {
  const styles = styleArr[0].trim();
  // use styles string to randomly generate a className
  const className = `style${hashCode(styles)}`;
  const styleStr = `.${className} {${styles}}`;

  // check if styles already exist & prevent duplicate
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

const tagNames = ["h1", "h2"];
tagNames.forEach((tagName) => {
  styled[tagName] = styled(tagName);
});

export default styled;
